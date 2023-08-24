<template>
  <mp-modal size="md" :is-open="isModalOpen">
    <mp-modal-content>
      <mp-modal-header>Share your feedback</mp-modal-header>
      <mp-modal-close-button @click="onModalToggle(false)" />
      <mp-modal-body>
        <mp-box>
          <mp-form-control control-id="feedback">
            <mp-form-label>Feedback for Mekari Airene</mp-form-label>
            <mp-textarea />
            <mp-form-help-text>
              Your feedback is important in helping us improve our product.
            </mp-form-help-text>
          </mp-form-control>
        </mp-box>
      </mp-modal-body>
      <mp-modal-footer>
        <mp-button
          margin-right="3"
          variant="ghost"
          @click="onModalToggle(false)"
        >
          Cancel
        </mp-button>
        <mp-button @click="onModalNext(true)">Submit</mp-button>
      </mp-modal-footer>
    </mp-modal-content>
    <mp-modal-overlay />
  </mp-modal>
</template>

<script>
import {
  MpBox,
  MpButton,
  MpModal,
  MpModalOverlay,
  MpModalContent,
  MpModalHeader,
  MpModalBody,
  MpModalFooter,
  MpModalCloseButton,
  MpTextarea,
  MpFormControl,
  MpFormLabel,
  MpFormHelpText,
} from "@mekari/pixel";

export default {
  name: "SmartAssistFeedbackModal",
  components: {
    MpBox,
    MpButton,
    MpModal,
    MpModalOverlay,
    MpModalContent,
    MpModalHeader,
    MpModalBody,
    MpModalFooter,
    MpModalCloseButton,
    MpTextarea,
    MpFormControl,
    MpFormLabel,
    MpFormHelpText,
  },
  props: {
    isModalOpen: [Boolean],
    onModalToggle: [Function],
    onModalNext: [Function],
  },
};
</script>