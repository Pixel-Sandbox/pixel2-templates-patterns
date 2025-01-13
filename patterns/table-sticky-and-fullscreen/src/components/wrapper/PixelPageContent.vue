<template>
  <mp-box
    id="pixelPageContent"
    transition="border-top-left-radius 600ms cubic-bezier(0.4, 0, 0.2, 1)"
    v-bind="{
      ...(variant === 'card' && {
        borderTopWidth: '1px',
        borderLeftWidth: '1px',
        borderTopLeftRadius: isFullScreen ? '' : 'md',
        borderColor: 'gray.100',
        backgroundColor: 'white',
        padding: 6,
      }),
      ...(variant === 'blank' && {
        borderTopLeftRadius: isFullScreen ? '' : 'md',
        paddingRight: 6,
        paddingBottom: 6,
      }),
    }"
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
    variant: {
      type: String,
      default: "card",
    },
    isFullScreen: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
