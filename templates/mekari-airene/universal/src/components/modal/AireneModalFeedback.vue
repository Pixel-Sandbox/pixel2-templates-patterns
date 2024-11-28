<template>
  <mp-modal :is-open="isOpen" :on-close="handleClose">
    <mp-modal-content>
      <mp-modal-header>Saran untuk Mekari Airene</mp-modal-header>
      <mp-modal-close-button />
      <mp-modal-body>
        <mp-text> Apa alasan utama saran Anda? </mp-text>

        <mp-flex flex-direction="column" gap="2">
          <mp-form-control>
            <mp-form-label>Nama percakapan</mp-form-label>
            <mp-radio-group>
              <mp-radio value="accuracy">Akurasi jawaban</mp-radio>
              <mp-radio value="performance">Performa</mp-radio>
              <mp-radio value="other">Lainnya</mp-radio>
            </mp-radio-group>
          </mp-form-control>

          <mp-form-control>
            <mp-form-label>Saran</mp-form-label>
            <mp-textarea placeholder="Masukan saran disini" />
          </mp-form-control>
        </mp-flex>
      </mp-modal-body>

      <mp-modal-footer>
        <mp-button-group>
          <mp-button variant="ghost" @click="handleClose">Batal</mp-button>
          <mp-button @click="handleConfirm"> Kirim</mp-button>
        </mp-button-group>
      </mp-modal-footer>
    </mp-modal-content>
    <mp-modal-overlay />
  </mp-modal>
</template>

<script>
import {
  MpFlex,
  MpText,
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
  MpRadio,
  MpRadioGroup,
  MpTextarea,
} from "@mekari/pixel";

export default {
  components: {
    MpFlex,
    MpText,
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
    MpRadio,
    MpRadioGroup,
    MpTextarea,
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
