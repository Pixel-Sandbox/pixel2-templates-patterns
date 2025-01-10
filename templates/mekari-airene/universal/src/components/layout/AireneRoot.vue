<template>
  <mp-box
    :visibility="isOpen ? 'visible' : 'hidden'"
    position="fixed"
    top="0"
    right="0"
    bottom="0"
    left="0"
    z-index="modal"
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
    isOpen: Boolean,
  },
};
</script>
