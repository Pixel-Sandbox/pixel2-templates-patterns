<template>
  <mp-modal :is-open="isOpen" :on-close="handleClose">
    <mp-modal-content>
      <mp-modal-header>Ubah nama percakapan</mp-modal-header>
      <mp-modal-close-button />
      <mp-modal-body>
        <mp-form-control>
          <mp-form-label>Nama percakapan</mp-form-label>
          <mp-input />
        </mp-form-control>
      </mp-modal-body>

      <mp-modal-footer>
        <mp-button-group>
          <mp-button variant="ghost" @click="handleClose">Batal</mp-button>
          <mp-button @click="handleConfirm"> Simpan</mp-button>
        </mp-button-group>
      </mp-modal-footer>
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
  MpModalCloseButton,
  MpModalFooter,
  MpButton,
  MpButtonGroup,
  MpFormControl,
  MpFormLabel,
  MpInput,
} from "@mekari/pixel";

export default {
  name: "ModalWithScrollable",
  components: {
    MpModal,
    MpModalOverlay,
    MpModalContent,
    MpModalHeader,
    MpModalBody,
    MpModalCloseButton,
    MpModalFooter,
    MpButton,
    MpButtonGroup,
    MpFormControl,
    MpFormLabel,
    MpInput,
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
