<template>
  <mp-modal size="2xl" :is-open="isOpen" :on-close="handleClose">
    <mp-modal-content>
      <mp-modal-header
        display="flex"
        justify-content="space-between"
        align-items="center"
      >
        <mp-text font-weight="semibold">Airene answer</mp-text>
        <mp-button-icon
          v-mp-tooltip="'Perkecil jawaban'"
          name="full-screen"
          @click="handleClose"
        />
      </mp-modal-header>
      <mp-modal-body>
        <slot />
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
  MpModalHeader,
  MpModalBody,
  MpText,
  MpButtonIcon,
} from "@mekari/pixel";

export default {
  name: "ModalWithScrollable",
  components: {
    MpModal,
    MpModalOverlay,
    MpModalContent,
    MpModalHeader,
    MpModalBody,
    MpText,
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
  },
};
</script>
