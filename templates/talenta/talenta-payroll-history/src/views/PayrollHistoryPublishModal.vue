<template>
  <mp-modal size="lg" :is-open="isModalOpen">
    <mp-modal-content>
      <mp-modal-header>Publish payslip?</mp-modal-header>
      <mp-modal-close-button @click="onModalToggle(false)" />
      <mp-modal-body>
        <mp-box>
          <mp-text>
            If you publish payslip to employees, payroll in this period will be
            automatically locked.
          </mp-text>
        </mp-box>
      </mp-modal-body>
      <mp-modal-footer>
        <mp-button mr="3" variant="ghost" @click="onModalToggle(false)">
          Cancel
        </mp-button>
        <mp-button>Lock & publish payslip</mp-button>
      </mp-modal-footer>
    </mp-modal-content>
    <mp-modal-overlay />
  </mp-modal>
</template>

<script>
import {
  MpBox,
  MpText,
  MpButton,
  MpModal,
  MpModalOverlay,
  MpModalContent,
  MpModalHeader,
  MpModalBody,
  MpModalFooter,
  MpModalCloseButton,
} from "@mekari/pixel";

export default {
  name: "PayrollHistoryPublishModal",
  components: {
    MpBox,
    MpText,
    MpButton,
    MpModal,
    MpModalOverlay,
    MpModalContent,
    MpModalHeader,
    MpModalBody,
    MpModalFooter,
    MpModalCloseButton,
  },
  props: {
    isModalOpen: [Boolean],
    resignModalName: [String],
    onModalToggle: [Function],
  },
};
</script>