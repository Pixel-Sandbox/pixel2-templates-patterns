<template>
  <mp-flex justify-content="center" align-items="center" w="full" mb="4">
    <mp-box
      display="flex"
      bg="gray.25"
      border-width="1px"
      border-color="gray.50"
      rounded="lg"
    >
      <mp-flex px="4" py="2" align-items="center" gap="4">
        <mp-text> Is this conversation helpful so far? </mp-text>

        <mp-flex>
          <mp-button-icon name="like" @click="handleOpen('like')" />
          <mp-button-icon name="dislike" @click="handleOpen('dislike')" />
        </mp-flex>
      </mp-flex>

      <mp-flex
        width="44px"
        border-left-width="1px"
        border-color="gray.50"
        justify-content="center"
        align-items="center"
      >
        <mp-button-icon name="close" />
      </mp-flex>
    </mp-box>

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
  </mp-flex>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpButtonIcon,
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
    MpBox,
    MpFlex,
    MpButtonIcon,
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
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    handleOpen(action) {
      console.log("action", action);
      this.isOpen = true;
    },
    handleClose() {
      this.isOpen = false;
    },
    handleConfirm() {
      this.$toast({
        id: "test",
        variant: "success",
        title: "Saran berhasil dikirim",
        position: "top",
        zIndex: 9999, // Custom zIndex
      });
      this.handleClose();
    },
  },
};
</script>
