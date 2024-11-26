<template>
  <mp-modal :is-open="isOpen" :on-close="handleClose">
    <mp-modal-content>
      <mp-modal-header>
        <img src="/airene-logo.svg" alt="Airene" />
      </mp-modal-header>
      <mp-modal-close-button />
      <mp-modal-body>
        <mp-text> Saat mencoba Airene, harap diingat: </mp-text>

        <mp-box as="ul" list-style-type="disc" pl="4" mt="2">
          <mp-text as="li">
            <strong>Airene tidak selalu benar</strong>, dan mungkin memberikan
            tanggapan yang tidak akurat atau tidak tepat.
          </mp-text>

          <mp-text as="li">
            <strong>Airene akan menjadi lebih baik dengan masukan Anda</strong>
            mengenai hal-hal yang mungkin tidak tepat.
          </mp-text>
        </mp-box>
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
  MpModalCloseButton,
  MpText,
  MpBox,
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
    MpText,
    MpBox,
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
