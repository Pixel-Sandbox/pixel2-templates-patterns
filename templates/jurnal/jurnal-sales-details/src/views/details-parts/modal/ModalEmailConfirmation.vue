<template>
  <mp-box>
    <mp-modal :isOpen="isOpen" :on-close="handleClose" :close-on-esc="true" :close-on-overlay-click="true">
      <mp-modal-content>
        <mp-modal-header> Konfirmasi email </mp-modal-header>
        <mp-modal-close-button @click="handleClose" />
        <mp-modal-body>
          <mp-text>
            Kami telah mengirimkan email konfirmasi ke
            <mp-text as="span" font-weight="semibold">jaka.permadi@mekari.com</mp-text>
            . Mohon cek kotak masuk dan konfirmasi email Anda untuk melanjutkan.
          </mp-text>
        </mp-modal-body>

        <mp-modal-footer justify-content="space-between" align-items="center">
          <mp-text is-link> Sudah konfirmasi? </mp-text>

          <mp-button-group>
            <mp-button variant="ghost" mr="3" @click="handleClose">Ganti email</mp-button>
            <mp-button @click="handleSubmit">Kirim ulang</mp-button>
          </mp-button-group>
        </mp-modal-footer>
      </mp-modal-content>

      <mp-modal-overlay />
    </mp-modal>
  </mp-box>
</template>

<script>
import {
  MpModal,
  MpModalOverlay,
  MpModalContent,
  MpModalHeader,
  MpModalBody,
  MpModalCloseButton,
  MpBox,
  MpButton,
  MpModalFooter,
  MpText,
  MpButtonGroup,
} from "@mekari/pixel";
export default {
  name: "ModalEmailConfirmation",
  components: {
    MpModal,
    MpModalOverlay,
    MpModalContent,
    MpModalHeader,
    MpModalBody,
    MpModalCloseButton,
    MpBox,
    MpButton,
    MpModalFooter,
    MpText,
    MpButtonGroup,
  },
  props: {
    isOpen: { type: [Boolean] },
  },
  methods: {
    handleSubmit() {
      this.$toast({
        variant: "success",
        title: "Konfirmasi email berhasil dikirim",
        position: "top",
      });
    },
    handleClose() {
      this.$emit("handleClose");
    },
  },
};
</script>
