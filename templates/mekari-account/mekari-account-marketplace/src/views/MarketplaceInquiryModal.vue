<template>
  <mp-modal size="lg" :is-open="isModalOpen">
    <mp-modal-content>
      <mp-modal-header>Submit request to install</mp-modal-header>
      <mp-modal-close-button @click="onModalToggle(false)" />
      <mp-modal-body>
        <mp-form-control margin-bottom="5">
          <mp-form-label>Full name</mp-form-label>
          <mp-input />
        </mp-form-control>
        <mp-form-control margin-bottom="5">
          <mp-form-label>Company name</mp-form-label>
          <mp-input />
        </mp-form-control>
        <mp-form-control margin-bottom="5">
          <mp-form-label>Work email address</mp-form-label>
          <mp-input />
        </mp-form-control>
        <mp-form-control margin-bottom="5">
          <mp-form-label>Number of employees</mp-form-label>
          <mp-select placeholder="Select the number of employees"> </mp-select>
        </mp-form-control>
        <mp-form-control margin-bottom="5">
          <mp-form-label>Are you currently using Talenta?</mp-form-label>
          <mp-select placeholder="Select your answer"> </mp-select>
          <mp-form-help-text>
            You can select the answer that suits your condition
          </mp-form-help-text>
        </mp-form-control>
        <mp-form-control margin-bottom="5">
          <mp-form-label>Phone number</mp-form-label>
          <mp-input />
        </mp-form-control>
      </mp-modal-body>
      <mp-modal-footer>
        <mp-button mr="3" variant="ghost" @click="onModalToggle(false)">
          Cancel
        </mp-button>
        <mp-button>Submit</mp-button>
      </mp-modal-footer>
    </mp-modal-content>
    <mp-modal-overlay />
  </mp-modal>
</template>

<script>
import {
  MpButton,
  MpModal,
  MpModalOverlay,
  MpModalContent,
  MpModalHeader,
  MpModalBody,
  MpModalFooter,
  MpModalCloseButton,
  MpFormControl,
  MpFormLabel,
  MpFormHelpText,
  MpSelect,
  MpInput
} from "@mekari/pixel";

export default {
  name: "MarketplaceInquiryModal",
  components: {
    MpButton,
    MpModal,
    MpModalOverlay,
    MpModalContent,
    MpModalHeader,
    MpModalBody,
    MpModalFooter,
    MpModalCloseButton,
    MpFormControl,
    MpFormLabel,
    MpFormHelpText,
    MpSelect,
    MpInput,
  },
  props: {
    isModalOpen: [Boolean],
    onModalToggle: [Function],
  },
  data: function () {
    return {
      datepicker: "",
    };
  },
};
</script>