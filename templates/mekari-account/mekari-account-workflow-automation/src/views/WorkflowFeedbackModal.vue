<template>
  <mp-modal size="md" :is-open="isModalOpen">
    <mp-modal-content>
      <mp-modal-header>Request an app</mp-modal-header>
      <mp-modal-close-button @click="onModalToggle(false)" />
      <mp-modal-body>
        <mp-box>
          <mp-form-control control-id="feedback">
            <mp-form-label>Write a specific app</mp-form-label>
            <mp-textarea />
            <mp-form-help-text>
              We'll notify you when your required app is connected with our
              platform.
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
  name: "WorkflowFeedbackModal",
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