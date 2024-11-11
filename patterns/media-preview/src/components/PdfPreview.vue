<template>
  <mp-box
    height="full"
    px="2"
    :style="{
      width: '100%',
      minWidth: `${800 * getCurrentScale}px`,
    }"
  >
    <mp-flex
      ref="canvasContainer"
      flex-direction="column"
      gap="4"
      py="84px"
      width="100%"
    >
      <mp-box
        v-for="pageNum in totalPages"
        :key="pageNum"
        display="flex"
        align-items="center"
        justify-content="center"
        rounded="md"
        overflow="hidden"
        :data-page="pageNum"
      >
        <canvas
          :ref="'pdfCanvas' + pageNum"
          :style="{ borderRadius: '6px' }"
        ></canvas>
      </mp-box>
    </mp-flex>

    <mp-flex
      v-if="isLoading"
      align-items="center"
      justify-content="center"
      position="fixed"
      top="0"
      left="0"
      right="0"
      bottom="0"
    >
      <mp-spinner color="white" />
    </mp-flex>

    <mp-flex
      v-if="pdfHasPassword && showPasswordInput"
      align-items="center"
      justify-content="center"
      position="fixed"
      top="0"
      left="0"
      right="0"
      bottom="0"
      pointer-events="none"
    >
      <mp-flex
        flex-direction="column"
        gap="4"
        max-width="350px"
        pointer-events="auto"
      >
        <mp-box>
          <mp-text
            font-size="lg"
            text-align="center"
            font-weight="bold"
            color="white"
            mb="2"
          >
            Password required
          </mp-text>
          <mp-text text-align="center" color="white" line-height="1sm">
            This document is password protected. Please enter a
            password.</mp-text
          >
        </mp-box>

        <mp-input
          id="pdf-password"
          v-model="pdfPassword"
          placeholder="Enter password"
          type="password"
          @keydown.enter.stop.prevent="submitPassword"
        />

        <mp-button @click="submitPassword" :is-disabled="!pdfPassword">
          Submit
        </mp-button>
      </mp-flex>
    </mp-flex>

    <mp-box
      v-if="!isLoading && totalPages > 0 && !showPasswordInput"
      display="flex"
      justify-content="center"
      align-items="center"
      position="fixed"
      bottom="6"
      left="0"
      right="0"
    >
      <mp-flex justify-content="center" px="4" rounded="full" bg="dark">
        <mp-flex
          gap="2"
          align-items="center"
          border-right-width="1px"
          border-color="gray.600"
          pr="4"
          mr="4"
          py="3"
        >
          <mp-text color="white" flex="none"> Page </mp-text>
          <mp-input
            :value="currentPage"
            size="sm"
            flex="none"
            min-width="55px"
            max-width="55px"
            @change="handleChangePage"
            v-mask="'#*'"
          />
          <mp-text color="white" flex="none"> of {{ totalPages }} </mp-text>
        </mp-flex>

        <mp-flex gap="2" py="3">
          <mp-button-icon name="zoom-out" color="white" @click="zoomOut" />
          <mp-button-icon name="zoom-in" color="white" @click="zoomIn" />

          <mp-popover close-on-select>
            <mp-popover-trigger>
              <mp-button
                size="sm"
                py="1"
                pl="2"
                pr="1"
                color="white"
                variant="unstyled"
                display="flex"
                align-items="center"
                font-size="sm"
              >
                <span> {{ currentScaleOption }}</span>
                <mp-icon name="caret-down" />
              </mp-button>
            </mp-popover-trigger>
            <mp-popover-content
              max-width="140px"
              max-height="364px"
              overflow-y="auto"
              bg="white"
              rounded="md"
              shadow="lg"
              border-width="1px"
              border-color="gray.400"
            >
              <mp-popover-list>
                <mp-popover-list-item
                  v-for="option in SCALE_OPTIONS"
                  :key="option"
                  @click="handleChangeScale(option)"
                >
                  {{ option }}
                </mp-popover-list-item>
              </mp-popover-list>
            </mp-popover-content>
          </mp-popover>
        </mp-flex>
      </mp-flex>
    </mp-box>
  </mp-box>
</template>

<script>
import {
  MpFlex,
  MpBox,
  MpButtonIcon,
  MpInput,
  MpText,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
  MpButton,
  MpIcon,
  MpSpinner,
} from "@mekari/pixel";

// Import pdfjs
import * as pdfjsLib from "pdfjs-dist";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";

// Set the worker for pdf.js
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

export default {
  name: "PdfViewer",
  components: {
    MpFlex,
    MpBox,
    MpButtonIcon,
    MpInput,
    MpText,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
    MpButton,
    MpIcon,
    MpSpinner,
  },
  props: {
    src: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      // PDF
      pdfDoc: null,
      totalPages: 0,
      currentPage: 1,

      // Password
      pdfHasPassword: false,
      showPasswordInput: false,
      pdfPassword: "",

      // Zoom
      currentScaleOption: "100%",
      SCALE_OPTIONS: [
        "Fit to width",
        "Fit to height",
        "10%",
        "25%",
        "50%",
        "75%",
        "100%",
        "125%",
        "150%",
        "200%",
        "400%",
        "800%",
      ],

      // Debounce
      scrollTimeout: null,
      changePageTimeout: null,

      // Debug
      isLoading: false,
      isRendering: false,
    };
  },
  mounted() {
    this.handleLoadPdfDocument();

    // Add scroll event listener
    const container = document.getElementById("media-preview-body");
    if (container) {
      container.addEventListener("scroll", this.handleScroll);
    }
  },
  beforeDestroy() {
    // Clean up scroll event listener
    const container = document.getElementById("media-preview-body");
    if (container) {
      container.removeEventListener("scroll", this.handleScroll);
    }
  },
  computed: {
    getCurrentScale() {
      // Return scale based on current scale option
      const scaleMap = {
        "10%": 0.1,
        "25%": 0.25,
        "50%": 0.5,
        "75%": 0.75,
        "100%": 1,
        "125%": 1.25,
        "150%": 1.5,
        "200%": 2,
        "400%": 4,
        "800%": 8,
      };
      return scaleMap[this.currentScaleOption] || 1; // Default to 1 if not found
    },
  },
  methods: {
    async loadPdfDocument(password = "") {
      const loadingTask = pdfjsLib.getDocument({
        url: this.src,
        password: password,
      });
      this.pdfDoc = await loadingTask.promise;
      this.totalPages = this.pdfDoc._pdfInfo.numPages;
    },

    async submitPassword() {
      try {
        await this.loadPdfDocument(this.pdfPassword);
        await this.renderAllPages();
        this.showPasswordInput = false;
      } catch (error) {
        if (error.name === "PasswordException") {
          this.$toast({
            variant: "error",
            title: "Incorrect password",
            position: "top",
          });
          this.focusPdfPasswordInput();
        }
      }
    },

    async handleLoadPdfDocument() {
      try {
        this.isLoading = true;
        await this.loadPdfDocument(this.pdfPassword);
        await this.renderAllPages();
      } catch (error) {
        if (error.name === "PasswordException") {
          this.pdfPassword = "";
          this.pdfHasPassword = true;
          this.showPasswordInput = true;
          this.focusPdfPasswordInput();
        }
      } finally {
        this.isLoading = false;
      }
    },

    focusPdfPasswordInput() {
      this.$nextTick(() => {
        const inputEl = document.getElementById("pdf-password");
        if (inputEl) {
          inputEl.focus();
          if (this.pdfPassword) inputEl.select();
        }
      });
    },

    renderAllPages() {
      for (let pageNum = 1; pageNum <= this.totalPages; pageNum++) {
        this.renderPage(pageNum);
      }
    },

    async renderPage(pageNum) {
      try {
        this.isRendering = true;
        // Get the specific page
        const page = await this.pdfDoc.getPage(pageNum);
        const canvas = this.$refs["pdfCanvas" + pageNum][0];
        const ctx = canvas.getContext("2d");

        // Get device pixel ratio
        const pixelRatio =
          this.getCurrentScale === 8 ? 0.5 : window.devicePixelRatio || 1;

        // Calculate scale based on the selected option
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const viewport = page.getViewport({ scale: 1 });
        let scale;

        // Determine scale based on current scale option
        if (this.currentScaleOption === "Fit to width") {
          scale = windowWidth / viewport.width;
        } else if (this.currentScaleOption === "Fit to height") {
          scale = (windowHeight - 84) / viewport.height; // Padding
        } else {
          scale = (800 * this.getCurrentScale) / viewport.width;
        }

        // Calculate viewport with new scale
        const scaledViewport = page.getViewport({ scale });

        // Set canvas dimensions with pixel ratio for higher quality
        canvas.height = scaledViewport.height * pixelRatio;
        canvas.width = scaledViewport.width * pixelRatio;

        // Set canvas CSS dimensions
        canvas.style.height = `${scaledViewport.height}px`;
        canvas.style.width = `${scaledViewport.width}px`;

        // Scale context for sharper rendering
        ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

        // Render PDF page
        const renderContext = {
          canvasContext: ctx,
          viewport: scaledViewport,
          enableWebGL: true,
          renderInteractiveForms: true,
        };

        await page.render(renderContext).promise;

        this.isRendering = false;
      } catch (error) {
        console.error("Error rendering page:", error);
      }
    },

    handleChangePage(event) {
      // Clear any existing timeout
      if (this.changePageTimeout) {
        clearTimeout(this.changePageTimeout);
      }

      // Set new timeout for page change
      this.changePageTimeout = setTimeout(() => {
        const targetPage = parseInt(event.target.value);

        // Validate target page
        if (
          isNaN(targetPage) ||
          targetPage < 1 ||
          targetPage > this.totalPages
        ) {
          console.log("STATE: ", {
            targetPage,
            totalPages: this.totalPages,
            currentPage: this.currentPage,
          });
          this.currentPage = 1;
          this.scrollToPage(1);
          return;
        }

        this.currentPage = targetPage;
        this.scrollToPage(targetPage);
      }, 300); // 300ms debounce delay
    },

    // Zoom methods
    handleChangeScale(value) {
      this.currentScaleOption = value;
      this.renderAllPages();
    },

    async zoomIn() {
      const currentIndex = this.SCALE_OPTIONS.findIndex(
        (option) => option === this.currentScaleOption
      );
      if (currentIndex < this.SCALE_OPTIONS.length - 1) {
        this.currentScaleOption = this.SCALE_OPTIONS[currentIndex + 1];
      }
      this.renderAllPages();
    },

    async zoomOut() {
      const currentIndex = this.SCALE_OPTIONS.findIndex(
        (option) => option === this.currentScaleOption
      );
      if (currentIndex > 0) {
        const previousOption = this.SCALE_OPTIONS[currentIndex - 1];
        const isPreviousOptionFit =
          previousOption === "Fit to height" ||
          previousOption === "Fit to width";

        if (!isPreviousOptionFit) {
          this.currentScaleOption = previousOption;
        }
      }
      this.renderAllPages();
    },

    // Scroll methods
    async scrollToPage(pageNum) {
      const containerEl = document.getElementById("media-preview-body");
      if (containerEl) {
        const targetPage = containerEl.querySelector(
          `[data-page="${pageNum}"]`
        );
        if (targetPage) {
          targetPage.scrollIntoView({ behavior: "smooth" });
        }
      }
    },

    handleScroll() {
      // Debounce scroll handler
      if (this.scrollTimeout) {
        clearTimeout(this.scrollTimeout);
      }

      this.scrollTimeout = setTimeout(() => {
        const container = document.getElementById("media-preview-body");
        if (!container) return;

        // Find which page is most visible in the viewport
        const pages = container.querySelectorAll("[data-page]");
        let maxVisiblePage = null;
        let maxVisibleArea = 0;

        pages.forEach((page) => {
          const rect = page.getBoundingClientRect();
          const containerRect = container.getBoundingClientRect();

          // Calculate visible area of the page
          const visibleHeight =
            Math.min(rect.bottom, containerRect.bottom) -
            Math.max(rect.top, containerRect.top);

          if (visibleHeight > maxVisibleArea) {
            maxVisibleArea = visibleHeight;
            maxVisiblePage = parseInt(page.dataset.page);
          }
        });

        if (maxVisiblePage && maxVisiblePage !== this.currentPage) {
          this.currentPage = maxVisiblePage;
        }
      }, 100); // Debounce time of 100ms
    },
  },
};
</script>
