<template>
  <mp-modal :is-open="isOpen" :on-close="handleClose">
    <mp-modal-content>
      <mp-modal-header>Ubah judul percakapan</mp-modal-header>
      <mp-modal-close-button />
      <mp-modal-body>
        <mp-form-control>
          <mp-flex justify-content="space-between" align-items="center">
            <mp-form-label>Judul percakapan</mp-form-label>

            <mp-text font-size="sm" color="gray.600">
              {{ innerValue.length }} / 200
            </mp-text>
          </mp-flex>
          <mp-input v-model="innerValue" :maxlength="200" />
        </mp-form-control>
      </mp-modal-body>

      <mp-modal-footer>
        <mp-button-group>
          <mp-button variant="ghost" @click="handleClose">Batal</mp-button>
          <mp-button @click="handleConfirm"> Simpan perubahan</mp-button>
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
  MpFlex,
  MpText,
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
    MpFlex,
    MpText,
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    initialValue: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      innerValue: this.initialValue,
    };
  },
  methods: {
    handleClose() {
      this.$emit("close");
    },
    handleConfirm() {
      this.$emit("confirm", this.innerValue);
    },
  },
};
</script>
