<template>
  <mp-flex
    gap="4"
    justify-content="flex-start"
    align-items="center"
    padding="10"
    height="100vh"
  >
    <mp-button variant="outline" @click="handleOpen"> View modal </mp-button>
    <full-page-modal-preview
      :isOpen="isOpen"
      :handleOpen="handleOpen"
      :handleClose="handleClose"
    />
  </mp-flex>
</template>

<script>
import { MpFlex, MpButton } from "@mekari/pixel";
import FullPageModalPreview from "./components/FullPageModalPreview";

export default {
  name: "App",
  components: {
    MpFlex,
    MpButton,
    FullPageModalPreview,
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    handleOpen() {
      this.isOpen = true;
    },
    handleClose() {
      this.isOpen = false;
    },
  },
};
</script>
