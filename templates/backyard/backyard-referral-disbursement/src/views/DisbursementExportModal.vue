<template>
  <mp-modal size="lg" :is-open="isModalOpen">
    <mp-modal-content>
      <mp-modal-header>Export data</mp-modal-header>
      <mp-modal-close-button @click="onModalToggle(false)" />
      <mp-modal-body>
        <mp-heading as="h3" font-size="lg" margin-bottom="1">
          Add filter to your data
        </mp-heading>
        <mp-text>All data will be shown if no filter selected.</mp-text>
        <mp-flex
          justify-content="space-between"
          align-items="center"
          margin-top="6"
          margin-bottom="2"
        >
          <mp-form-control width="full">
            <mp-select value="granted-at" is-full-width>
              <option value="program">Program</option>
              <option value="affiliate">Affiliate</option>
              <option value="granted-at">Granted at</option>
            </mp-select>
          </mp-form-control>
          <mp-icon name="arrows-right" margin-x="4" />
          <mp-form-control width="full">
            <mp-date-picker
              v-model="value"
              format="DD/MM/YYYY"
              type="date"
              range
              range-separator=" - "
              placeholder="Start date - End date"
            />
          </mp-form-control>
        </mp-flex>
        <mp-button variant="outline" margin-y="3">
          <mp-icon name="add-circular" variant="duotone" margin-right="2" />
          Add filter
        </mp-button>
      </mp-modal-body>
      <mp-modal-footer>
        <mp-button
          margin-right="3"
          variant="ghost"
          @click="onModalToggle(false)"
        >
          Cancel
        </mp-button>
        <mp-button>Export</mp-button>
      </mp-modal-footer>
    </mp-modal-content>
    <mp-modal-overlay />
  </mp-modal>
</template>

<script>
import {
  MpFlex,
  MpText,
  MpIcon,
  MpHeading,
  MpButton,
  MpSelect,
  MpDatePicker,
  MpFormControl,
  MpModal,
  MpModalOverlay,
  MpModalContent,
  MpModalHeader,
  MpModalBody,
  MpModalFooter,
  MpModalCloseButton,
} from "@mekari/pixel";

export default {
  name: "DisbursementExportModal",
  components: {
    MpFlex,
    MpText,
    MpIcon,
    MpHeading,
    MpButton,
    MpSelect,
    MpDatePicker,
    MpFormControl,
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
  data() {
    return {
      value: "",
    };
  },
};
</script>