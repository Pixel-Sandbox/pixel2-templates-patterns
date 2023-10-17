<template>
  <mp-box>
    <mp-tooltip label="Edit email" position="top" @click="onOpen">
      <mp-button-icon name="edit" />
    </mp-tooltip>
    <mp-modal :is-open="isOpen" :on-close="onClose">
      <mp-modal-content>
        <mp-modal-header>Edit email</mp-modal-header>
        <mp-modal-close-button />
        <mp-modal-body>
          <mp-form-control control-id="email">
            <mp-input v-model="email" />
            <mp-form-help-text>Please enter a valid email</mp-form-help-text>
          </mp-form-control>
        </mp-modal-body>
        <mp-modal-footer>
          <mp-button variant="ghost" margin-right="3" @click="onClose">Cancel</mp-button>
          <mp-button>Save changes</mp-button>
        </mp-modal-footer>
      </mp-modal-content>
      <mp-modal-overlay />
    </mp-modal>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpButton,
  MpButtonIcon,
  MpTooltip,
  MpModal,
  MpModalOverlay,
  MpModalContent,
  MpModalHeader,
  MpModalBody,
  MpModalFooter,
  MpModalCloseButton,
  MpFormControl,
  MpFormHelpText,
  MpInput,
} from '@mekari/pixel';

export default {
  name: 'MpxOffboardingEditEmailModal',
  components: {
    MpBox,
    MpButton,
    MpButtonIcon,
    MpTooltip,
    MpModal,
    MpModalOverlay,
    MpModalContent,
    MpModalHeader,
    MpModalBody,
    MpModalFooter,
    MpModalCloseButton,
    MpFormControl,
    MpFormHelpText,
    MpInput,
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
      email: 'jessie.tan@gmail.com',
    };
  },
};
</script>
