<template>
  <mp-box>
    <mp-button @click="onOpen">Start offboarding</mp-button>
    <mp-modal size="sm" :is-open="isOpen">
      <mp-modal-content>
        <mp-modal-header>Start offboarding this employee?</mp-modal-header>
        <mp-modal-close-button @click="onClose" />
        <mp-modal-body>
          <mp-box>
            <mp-text margin-bottom="4">
              Please make sure to review all of the employee data to ensure its
              accuracy.
            </mp-text>
          </mp-box>
        </mp-modal-body>
        <mp-modal-footer>
          <mp-button margin-right="3" variant="ghost" @click="onClose"
            >Cancel</mp-button
          >
          <mp-button>Start</mp-button>
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
  name: "MpxOffboardingDetailStartModal",
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
