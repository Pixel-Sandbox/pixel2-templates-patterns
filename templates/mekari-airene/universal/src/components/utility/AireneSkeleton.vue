<template>
  <mp-box
    :style="`--airene-shimmer-color: ${getVariantColor}`"
    data-component="airene-skeleton"
    class="airene-shimmer-default"
    bg="gray.100"
    v-bind="$attrs"
  />
</template>

<script>
import { MpBox } from "@mekari/pixel";

export default {
  components: {
    MpBox,
  },
  props: {
    variantColor: {
      type: String,
      default: "gray",
    },
  },
  computed: {
    getVariantColor() {
      const variantColor = {
        gray: "linear-gradient(90deg, #d0d6dd, #edf0f2 50%, #d0d6dd)",
        blue: "linear-gradient(90deg, #E0E9F7, #F5F9FF 50%, #E0E9F7)",
        purple: "linear-gradient(90deg, #DCCFFF, #F3F0FD 50%, #DCCFFF)",
      };

      return variantColor[this.variantColor] || this.variantColor;
    },
  },
};
</script>

<style scoped>
/* linear-gradient(90deg, #E0E9F7, #F5F9FF 50%, #E0E9F7) */

.airene-shimmer-default {
  background: var(--airene-shimmer-color);
  background-size: 200%;
  animation: airene-shimmer-default 2s infinite reverse;
}

@keyframes airene-shimmer-default {
  from {
    background-position: -100% 0;
  }

  to {
    background-position: 100% 0;
  }
}
</style>
