<template>
  <mp-modal size="sm" :is-open="isModalOpen">
    <mp-modal-content>
      <mp-modal-header>Drop request?</mp-modal-header>
      <mp-modal-close-button @click="onModalToggle(false)" />
      <mp-modal-body>
        <mp-box>
          <mp-text margin-bottom="4">
            Once dropped, you won't be able to process the request.
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
        <mp-button>Drop</mp-button>
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
  name: "ApprovalRequestDropModal",
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