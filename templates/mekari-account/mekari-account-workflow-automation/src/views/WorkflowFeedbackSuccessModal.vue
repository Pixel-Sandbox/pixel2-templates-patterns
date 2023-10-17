<template>
  <mp-modal size="md" :is-open="isModalOpen">
    <mp-modal-content>
      <mp-modal-header>Request an app</mp-modal-header>
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
            Thank you for your request
          </mp-heading>
          <mp-text color="gray.600" line-height="20px">
            We will take your request into consideration as we continue to
            provide our app connections.
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
  name: "WorkflowFeedbackSuccessModal",
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