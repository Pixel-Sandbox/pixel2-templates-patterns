<template>
  <mp-modal :is-open="isOpen" :on-close="handleClose" size="2xl" is-centered>
    <mp-modal-content background-color="transparent" border-width="0px">
      <mp-modal-body background-color="transparent" p="0">
        <mp-button-icon
          position="absolute"
          top="-8"
          right="0"
          color="white"
          name="close"
          @click="handleClose"
        />
        <mp-box
          as="iframe"
          rounded="lg"
          width="100%"
          height="548"
          src="https://www.youtube.com/embed/2oSCl73348o?si=4O3xBTMm9xN2Koej"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></mp-box>
      </mp-modal-body>
    </mp-modal-content>
    <mp-modal-overlay />
  </mp-modal>
</template>

<script>
import {
  MpModal,
  MpModalOverlay,
  MpModalContent,
  MpModalBody,
  MpBox,
  MpButtonIcon,
} from "@mekari/pixel";

export default {
  name: "ModalWithScrollable",
  components: {
    MpModal,
    MpModalOverlay,
    MpModalContent,
    MpModalBody,
    MpBox,
    MpButtonIcon,
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClose() {
      this.$emit("close");
    },
    handleConfirm() {
      this.$emit("confirm");
    },
  },
};
</script>
