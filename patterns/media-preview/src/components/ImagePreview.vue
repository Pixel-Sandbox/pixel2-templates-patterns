<template>
  <mp-box w="full">
    <mp-flex
      py="84px"
      min-width="100vw"
      min-height="100vh"
      width="full"
      height="full"
      align-items="center"
      justify-content="center"
      :style="{
        '--image-zoom': getImageZoomLevel,
      }"
    >
      <mp-box>
        <img
          :style="{
            width: 'auto',
            height:
              'calc((100vh * var(--image-zoom)) - (168px * var(--image-zoom)))',
            transition: 'width 0.2s ease, height 0.2s ease',
            objectFit: 'contain',
          }"
          :src="src"
          @load="handleImageLoad"
          @error="handleImageError"
        />

        <!-- <mp-image
          :src="src"
          :style="{
            width: 'auto',
            height:
              'calc((100vh * var(--image-zoom)) - (168px * var(--image-zoom)))',
            transition: 'width 0.2s ease, height 0.2s ease',
            objectFit: 'contain',
          }"
        /> -->
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

    <mp-box
      display="flex"
      justify-content="center"
      align-items="center"
      position="fixed"
      bottom="6"
      left="0"
      right="0"
    >
      <mp-flex justify-content="center" px="4" rounded="full" bg="dark">
        <mp-flex gap="2" py="3">
          <mp-button-icon
            name="zoom-out"
            color="white"
            @click="handleImageZoomOut"
          />
          <mp-button-icon
            name="zoom-in"
            color="white"
            @click="handleImageZoomIn"
          />

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
                  @click="handleChangeZoomLevel(option)"
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
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
  MpBox,
  MpButtonIcon,
  MpButton,
  MpIcon,
  MpSpinner,
  // MpImage,
} from "@mekari/pixel";

export default {
  components: {
    MpFlex,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
    MpBox,
    MpButtonIcon,
    MpButton,
    MpIcon,
    MpSpinner,
    // MpImage,
  },
  props: {
    src: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      isLoading: true,
      hasError: false,
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
      ],
      currentScaleOption: "100%",
      currentPage: 1,
    };
  },
  computed: {
    getImageZoomLevel() {
      if (this.currentScaleOption === "10%") return 0.1;
      if (this.currentScaleOption === "25%") return 0.25;
      if (this.currentScaleOption === "50%") return 0.5;
      if (this.currentScaleOption === "75%") return 0.75;
      if (this.currentScaleOption === "100%") return 1;
      if (this.currentScaleOption === "125%") return 1.25;
      if (this.currentScaleOption === "150%") return 1.5;
      if (this.currentScaleOption === "200%") return 2;

      return 1;
    },
    getImageHeight() {
      return `calc((100vh * var(--image-zoom)) - (168px * var(--image-zoom)))`;
    },
  },
  methods: {
    handleChangeZoomLevel(option) {
      this.currentScaleOption = option;
    },
    handleImageZoomIn() {
      const currentIndex = this.SCALE_OPTIONS.findIndex(
        (option) => option === this.currentScaleOption
      );
      const isNotLastOption = currentIndex < this.SCALE_OPTIONS.length - 1;

      if (isNotLastOption) {
        this.currentScaleOption = this.SCALE_OPTIONS[currentIndex + 1];
      }
    },
    handleImageZoomOut() {
      const currentIndex = this.SCALE_OPTIONS.findIndex(
        (option) => option === this.currentScaleOption
      );
      const previousOption = this.SCALE_OPTIONS[currentIndex - 1];
      const isPreviousOptionFit =
        previousOption === "Fit to height" || previousOption === "Fit to width";
      const isNotFirstOption = currentIndex > 0;

      if (isPreviousOptionFit) {
        return;
      }

      if (isNotFirstOption) {
        this.currentScaleOption = this.SCALE_OPTIONS[currentIndex - 1];
      }
    },
    handleImageLoad() {
      this.isLoading = false;
      this.hasError = false;
    },
    handleImageError() {
      this.isLoading = false;
      this.hasError = true;
      // You might want to emit an event to notify parent component
      this.$emit("error");
    },
  },
};
</script>
