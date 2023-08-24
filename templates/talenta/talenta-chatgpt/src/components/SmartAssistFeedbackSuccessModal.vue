<template>
  <mp-modal size="md" :is-open="isModalOpen">
    <mp-modal-content>
      <mp-modal-header>Share your feedback</mp-modal-header>
      <mp-modal-close-button @click="onModalToggle(false)" />
      <mp-modal-body>
        <mp-box text-align="center" px="10">
          <img
            src="../assets/success.png"
            width="84px"
            height="72px"
            :style="{
              margin: 'auto',
            }"
          />
          <mp-heading as="h3" font-size="lg" mb="2">
            Thank you for your feedback
          </mp-heading>
          <mp-text color="gray.600" line-height="20px">
            We will take your feedback into consideration as we continue to
            improve our products and services.
          </mp-text>
        </mp-box>
      </mp-modal-body>
    </mp-modal-content>
    <mp-modal-overlay />
  </mp-modal>
</template>

<script>
import {
  MpBox,
  MpText,
  MpHeading,
  MpModal,
  MpModalOverlay,
  MpModalContent,
  MpModalHeader,
  MpModalBody,
  MpModalCloseButton,
} from "@mekari/pixel";

export default {
  name: "SmartAssistFeedbackSuccessModal",
  components: {
    MpBox,
    MpText,
    MpHeading,
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