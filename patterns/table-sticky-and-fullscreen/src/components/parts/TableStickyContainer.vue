<template>
  <mp-box position="absolute" :visibility="isVisible ? 'visible' : 'hidden'">
    <mp-box
      position="fixed"
      :top="placement === 'top' ? topOffset : 'auto'"
      :bottom="placement === 'bottom' ? topOffset : 'auto'"
      z-index="13"
      bg="gray.50"
      box-shadow="rgb(208, 214, 221) 0px 1px"
    >
      <mp-box
        position="relative"
        left="0px"
        width="full"
        display="flex"
        flex-direction="column"
        transition="transform 0.3s ease"
      >
        <mp-box overflow="hidden">
          <slot />
        </mp-box>
      </mp-box>
    </mp-box>
  </mp-box>
</template>

<script>
import { MpBox } from "@mekari/pixel";
export default {
  components: {
    MpBox,
  },
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
    placement: {
      type: String,
      default: "top",
    },
    topOffset: {
      type: String,
      default: "0px",
    },
  },
};
</script>
