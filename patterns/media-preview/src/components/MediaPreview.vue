<template>
  <mp-modal size="full" :is-open="isOpen" :on-close="handleClose">
    <mp-modal-content overflow="hidden">
      <mp-modal-body
        id="media-preview-body"
        p="0"
        h="100vh"
        w="100vw"
        position="relative"
        overflow="auto"
        bg="#232933E5"
        display="flex"
        flex-direction="column"
      >
        <!-- Header -->
        <mp-flex
          as="header"
          align-items="center"
          p="6"
          position="fixed"
          top="0"
          left="0"
          right="0"
          z-index="1000"
          bg="#23293326"
          w="100%"
          height="84px"
        >
          <mp-flex width="40%" align-items="center" gap="2">
            <mp-icon
              :name="getFileIcon(getMediaPreview.fileType)"
              color="white"
              size="md"
            />

            <mp-box>
              <mp-text color="white">
                {{ files[currentFileIndex].name }}
              </mp-text>
              <mp-text font-size="sm" color="gray.100" line-height="sm">
                {{ formatFileSize(files[currentFileIndex].size) }}
              </mp-text>
            </mp-box>
          </mp-flex>

          <mp-box w="20%">
            <mp-text color="white" text-align="center">
              {{ currentFileIndex + 1 }} of {{ files.length }} files
            </mp-text>
          </mp-box>

          <mp-flex w="40%" gap="2" justify-content="flex-end">
            <mp-button-icon
              name="download"
              color="white"
              @click="handleDownload(getMediaPreview.props.src)"
            />
            <mp-button-icon name="close" color="white" @click="handleClose" />
          </mp-flex>
        </mp-flex>

        <!-- Next and prev button -->
        <mp-button
          position="fixed"
          top="50%"
          left="8"
          variant="unstyled"
          size="sm"
          height="12"
          width="12"
          rounded="full"
          display="flex"
          align-items="center"
          justify-content="center"
          bg="dark"
          cursor="pointer"
          @click="handleLeftButtonClick"
        >
          <mp-icon name="chevrons-left" color="white" />
        </mp-button>
        <mp-button
          position="fixed"
          top="50%"
          right="8"
          variant="unstyled"
          size="sm"
          height="12"
          width="12"
          rounded="full"
          display="flex"
          align-items="center"
          justify-content="center"
          bg="dark"
          cursor="pointer"
          @click="handleRightButtonClick"
        >
          <mp-icon name="chevrons-right" color="white" />
        </mp-button>

        <!-- Content -->
        <component
          v-if="isFinishAnimating"
          :key="currentFileIndex"
          :is="getMediaPreview.component"
          v-bind="getMediaPreview.props"
        />
      </mp-modal-body>
    </mp-modal-content>
  </mp-modal>
</template>

<script>
import {
  MpModal,
  MpModalContent,
  MpModalBody,
  MpFlex,
  MpIcon,
  MpButtonIcon,
  MpText,
  MpBox,
  MpButton,
} from "@mekari/pixel";

import ImagePreview from "./ImagePreview.vue";
import PdfPreview from "./PdfPreview.vue";
import VideoPreview from "./VideoPreview.vue";
import UnsupportedPreview from "./UnsupportedPreview.vue";

export default {
  name: "FullPageModalPreview",
  components: {
    MpModal,
    MpModalContent,
    MpModalBody,
    MpFlex,
    MpIcon,
    MpButtonIcon,
    MpText,
    MpBox,
    MpButton,
    ImagePreview,
    PdfPreview,
    VideoPreview,
    UnsupportedPreview,
  },
  props: {
    isOpen: [Boolean],
    /**
     * Array of file objects to be displayed in the preview
     * @type {Array<{name: string, type: string, size: number, url: string}>}
     */
    files: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      currentFileIndex: 0,
      isFinishAnimating: false,
    };
  },
  computed: {
    getMediaPreview() {
      const file = this.files[this.currentFileIndex];
      const fileType = this.getFileType(file);

      const COMPONENT_MAP = {
        image: ImagePreview,
        pdf: PdfPreview,
        video: VideoPreview,
        unsupported: UnsupportedPreview,
      };

      return {
        props: {
          src: file.url,
          qualitySources: file.videoQualitySources,
        },
        component: COMPONENT_MAP[fileType],
        fileType,
      };
    },
  },

  watch: {
    isOpen(newValue) {
      if (newValue) {
        window.addEventListener("keydown", this.handleKeyDown);
      }

      if (!newValue) {
        window.removeEventListener("keydown", this.handleKeyDown);
      }
    },
  },

  mounted() {
    setTimeout(() => {
      this.isFinishAnimating = true;
    }, 600); // Wait for the modal animation to finish
  },

  methods: {
    handleClose() {
      this.$emit("close");

      // Reset to the first file
      this.currentFileIndex = 0;
      // Remove event listeners if isOpen is false
      window.removeEventListener("keydown", this.handleKeyDown);
    },
    handleClickOverlay() {
      console.log("clicked");
    },

    // File type checkers and extractors
    isSupportedImage(fileType) {
      const supportedTypes = [
        "image/jpeg",
        "image/jpg",
        "image/png",
        "image/webp",
        "image/svg+xml",
      ];
      return supportedTypes.includes(fileType);
    },
    isPdf(fileType) {
      return fileType === "application/pdf";
    },
    isSupportedVideo(fileType) {
      const supportedTypes = [
        "video/mp4",
        "video/mov",
        "video/avi",
        "video/mkv",
        "video/webm",
      ];
      return supportedTypes.includes(fileType);
    },
    getFileType(file) {
      if (this.isSupportedImage(file.type)) return "image";
      if (this.isPdf(file.type)) return "pdf";
      if (this.isSupportedVideo(file.type)) return "video";

      return "unsupported";
    },

    // Button left and right handlers
    handleKeyDown(event) {
      if (event.key === "ArrowLeft") {
        this.handleLeftButtonClick();
      } else if (event.key === "ArrowRight") {
        this.handleRightButtonClick();
      }
    },
    handleLeftButtonClick() {
      const isFirstFile = this.currentFileIndex === 0;
      const lastFileIndex = this.files.length - 1;

      if (isFirstFile) {
        // Loop to the last file
        this.currentFileIndex = lastFileIndex;
        return;
      }

      this.currentFileIndex = this.currentFileIndex - 1;
    },
    handleRightButtonClick() {
      const isLastFile = this.currentFileIndex === this.files.length - 1;
      if (isLastFile) {
        // Loop to the first file
        this.currentFileIndex = 0;
        return;
      }

      this.currentFileIndex = this.currentFileIndex + 1;
    },

    // Utils
    // Size in kb.
    formatFileSize(size) {
      if (size >= 1000000) {
        return `${(size / 1048576)
          .toFixed(2)
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} GB`;
      }
      if (size >= 1000) {
        return `${(size / 1024)
          .toFixed(2)
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} MB`;
      }
      return `${size.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} KB`;
    },
    getFileIcon(fileType) {
      const ICON_MAP = {
        image: "file-image",
        pdf: "doc",
        video: "play-video",
      };

      return ICON_MAP[fileType] || "doc";
    },
    handleDownload(fileUrl) {
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = this.files[this.currentFileIndex].name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
  },
};
</script>
