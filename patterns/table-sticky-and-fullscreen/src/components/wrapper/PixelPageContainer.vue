<template>
  <mp-box
    id="pixelPageContainer"
    as="section"
    :position="isFullScreen ? 'fixed' : 'relative'"
    :top="isFullScreen ? '0' : undefined"
    :left="isFullScreen ? '0' : undefined"
    :width="isFullScreen ? '100%' : '100%'"
    :height="isFullScreen ? '100vh' : undefined"
    :z-index="isEnableZIndex ? '1002' : undefined"
    :overflow-y="isFullScreen ? 'auto' : undefined"
    :background-color="isFullScreen ? 'white' : 'background'"
    min-height="100vh"
    :padding-top="isFullScreen ? '0' : 'var(--jurnal-navbar-height)'"
    :padding-left="isFullScreen ? '0' : 'var(--jurnal-sidebar-width)'"
    transition="all 600ms cubic-bezier(0.4, 0, 0.2, 1)"
  >
    <slot />
  </mp-box>
</template>

<script>
import { MpBox } from "@mekari/pixel";
export default {
  components: {
    MpBox,
  },
  props: {
    isFullScreen: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isEnableZIndex: false,
    };
  },
  watch: {
    isFullScreen(newVal) {
      if (newVal) {
        this.isEnableZIndex = true;
      } else {
        setTimeout(() => {
          this.isEnableZIndex = false;
        }, 600);
      }
    },
  },
};
</script>
