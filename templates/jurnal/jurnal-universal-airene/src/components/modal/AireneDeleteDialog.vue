<template>
  <mp-modal :is-open="isOpen" :on-close="handleClose">
    <mp-modal-content>
      <mp-modal-header>Hapus percakapan</mp-modal-header>
      <mp-modal-close-button />
      <mp-modal-body>
        <mp-text>
          Dengan menghapus obrolan ini, riwayat percakapan dari sesi ini akan dihapus secara
          permanen.
        </mp-text>
      </mp-modal-body>

      <mp-modal-footer>
        <mp-button-group>
          <mp-button variant="ghost" @click="handleClose">Batal</mp-button>
          <mp-button variant-color="red" @click="handleConfirm"> Hapus</mp-button>
        </mp-button-group>
      </mp-modal-footer>
    </mp-modal-content>
    <mp-modal-overlay />
  </mp-modal>
</template>

<script>
import {
  MpText,
  MpModal,
  MpModalOverlay,
  MpModalContent,
  MpModalHeader,
  MpModalBody,
  MpModalCloseButton,
  MpModalFooter,
  MpButton,
  MpButtonGroup
} from '@mekari/pixel'

export default {
  name: 'ModalWithScrollable',
  components: {
    MpText,
    MpModal,
    MpModalOverlay,
    MpModalContent,
    MpModalHeader,
    MpModalBody,
    MpModalCloseButton,
    MpModalFooter,
    MpButton,
    MpButtonGroup
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: 'Hapus percakapan'
    },
    description: {
      type: String,
      default:
          'Dengan menghapus obrolan ini, riwayat percakapan dari sesi ini akan dihapus secara permanen.'
    }
  },
  methods: {
    handleClose () {
      this.$emit('close')
    },
    handleConfirm () {
      this.$emit('confirm')
    }
  }
}
</script>
