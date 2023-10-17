<template>
  <mp-modal size="md" :is-open="isModalOpen">
    <mp-modal-content>
      <mp-modal-header>Payment link generated</mp-modal-header>
      <mp-modal-close-button @click="onModalToggle(false)" />
      <mp-modal-body>
        <mp-box>
          <mp-text margin-bottom="4">
            Share the payment link below to the customer.
          </mp-text>
          <mp-flex gap="2">
            <mp-input
              value="https://mekari-payment.mekari.com/web/invoices/38675e1a-3122-4678-872f-e46eb7ad4fd7/manual_transfers"
            />
            <mp-button variant="outline" left-icon="copy">Copy</mp-button>
          </mp-flex>
        </mp-box>
      </mp-modal-body>
    </mp-modal-content>
    <mp-modal-overlay />
  </mp-modal>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpText,
  MpButton,
  MpInput,
  MpModal,
  MpModalOverlay,
  MpModalContent,
  MpModalHeader,
  MpModalBody,
  MpModalCloseButton,
} from "@mekari/pixel";

export default {
  name: "CreateSubscriptionLinkModal",
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpButton,
    MpInput,
    MpModal,
    MpModalOverlay,
    MpModalContent,
    MpModalHeader,
    MpModalBody,
    MpModalCloseButton,
  },
  props: {
    isModalOpen: [Boolean],
    onModalToggle: [Function],
  },
};
</script>