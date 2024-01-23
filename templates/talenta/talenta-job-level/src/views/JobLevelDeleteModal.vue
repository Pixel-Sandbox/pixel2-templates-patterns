<template>
  <mp-modal size="sm" :is-open="isModalOpen">
    <mp-modal-content>
      <mp-modal-header>Delete job level?</mp-modal-header>
      <mp-modal-close-button @click="onModalToggle(false)" />
      <mp-modal-body>
        <mp-box>
          <mp-text margin-bottom="4">
            Deleted job level cannot be restored.
          </mp-text>
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
        <mp-button variant-color="red">Delete</mp-button>
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
  name: "JobLevelDeleteModal",
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
    onModalToggle: [Function],
  },
};
</script>