<template>
  <mp-modal size="sm" :is-open="isModalOpen">
    <mp-modal-content>
      <mp-modal-header>Add notes</mp-modal-header>
      <mp-modal-close-button @click="onModalToggle(false)" />
      <mp-modal-body>
        <mp-box>
          <mp-form-control control-id="notes" is-required>
            <mp-form-label>Notes</mp-form-label>
            <mp-textarea placeholder="Write the note" />
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
        <mp-button>Save</mp-button>
      </mp-modal-footer>
    </mp-modal-content>
    <mp-modal-overlay />
  </mp-modal>
</template>

<script>
import {
  MpBox,
  MpButton,
  MpFormControl,
  MpFormLabel,
  MpTextarea,
  MpModal,
  MpModalOverlay,
  MpModalContent,
  MpModalHeader,
  MpModalBody,
  MpModalFooter,
  MpModalCloseButton,
} from "@mekari/pixel";

export default {
  name: "ViewDisbursementNoteModal",
  components: {
    MpBox,
    MpButton,
    MpFormControl,
    MpFormLabel,
    MpTextarea,
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
    onModalToggle: [Function],
  },
};
</script>