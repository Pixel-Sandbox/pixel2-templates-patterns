<template>
  <mp-box>
    <mp-text @click.native="onOpen" :margin-top="2" is-link>Send</mp-text>
    <mp-modal size="sm" :is-open="isOpen">
      <mp-modal-content>
        <mp-modal-header>Send document?</mp-modal-header>
        <mp-modal-close-button @click="onClose" />
        <mp-modal-body>
          <mp-box>
            <mp-text margin-bottom="4">
              You will send a document to jessie.tan@gmail.com
            </mp-text>
          </mp-box>
        </mp-modal-body>
        <mp-modal-footer>
          <mp-button margin-right="3" variant="ghost" @click="onClose"
            >Cancel</mp-button
          >
          <mp-button>Send</mp-button>
        </mp-modal-footer>
      </mp-modal-content>
      <mp-modal-overlay />
    </mp-modal>
  </mp-box>
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
  name: "MpxOffboardingDetailSendEmailModal",
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
  methods: {
    onOpen() {
      this.isOpen = true;
    },
    onClose() {
      this.isOpen = false;
    },
  },
  data: () => {
    return {
      isOpen: false,
    };
  },
};
</script>
