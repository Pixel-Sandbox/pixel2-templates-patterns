<template>
  <!-- Chat input -->
  <mp-box
    data-component="AireneFooter"
    position="sticky"
    bottom="0"
    left="0"
    right="0"
    w="full"
    bg="white"
    z-index="50"
  >
    <mp-flex
      v-if="!isFloating"
      max-w="50%"
      flex-direction="column"
      mx="auto"
      pb="6"
      pt="0"
    >
      <slot />
    </mp-flex>

    <mp-flex v-else flex-direction="column" width="full" pb="3">
      <slot />
    </mp-flex>
  </mp-box>
</template>

<script>
import { MpBox, MpFlex } from "@mekari/pixel";

export default {
  components: {
    MpBox,
    MpFlex,
  },
  props: {
    isFloating: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
