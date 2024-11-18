<template>
  <mp-flex
    position="sticky"
    top="0"
    bg="white"
    w="full"
    data-element="content-header"
    border-bottom-width="1px"
    border-color="gray.200"
    p="4"
    justify-content="flex-end"
    z-index="50"
  >
    <mp-button-icon name="close" @click="handleClose" />
  </mp-flex>
</template>

<script>
import { MpFlex, MpButtonIcon } from "@mekari/pixel";

export default {
  components: {
    MpFlex,
    MpButtonIcon,
  },
  methods: {
    handleClose() {
      this.$emit("close");
    },
  },
};
</script>
