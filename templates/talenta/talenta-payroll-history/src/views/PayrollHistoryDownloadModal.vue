<template>
  <mp-modal size="lg" :is-open="isModalOpen">
    <mp-modal-content>
      <mp-modal-header>Download e-Banking</mp-modal-header>
      <mp-modal-close-button @click="onModalToggle(false)" />
      <mp-modal-body>
        <mp-form-control margin-bottom="5">
          <mp-form-label>Payroll type</mp-form-label>
          <mp-radio-group spacing="6" is-inline>
            <mp-radio>Salary</mp-radio>
            <mp-radio>THR</mp-radio>
          </mp-radio-group>
        </mp-form-control>
        <mp-form-control margin-bottom="5">
          <mp-form-label>Period</mp-form-label>
          <mp-select value="apr-2022">
            <option value="apr-2022">Apr 2022</option>
          </mp-select>
        </mp-form-control>
        <mp-form-control margin-bottom="5">
          <mp-form-label>Bank name</mp-form-label>
          <mp-select value="bca">
            <option value="bca">Bank Central Asia (BCA)</option>
            <option value="mandiri">Bank Mandiri</option>
          </mp-select>
        </mp-form-control>
        <mp-form-control margin-bottom="5">
          <mp-form-label>File type</mp-form-label>
          <mp-radio-group spacing="6" is-inline>
            <mp-radio>Text (.txt)</mp-radio>
            <mp-radio>Word document (.doc)</mp-radio>
          </mp-radio-group>
        </mp-form-control>
        <mp-form-control margin-bottom="5">
          <mp-form-label>Template format</mp-form-label>
          <mp-select value="old-format">
            <option value="old-format">Old format</option>
            <option value="new-format">New format</option>
            <option value="multiple-payroll">Multiple payroll</option>
          </mp-select>
        </mp-form-control>
        <mp-form-control margin-bottom="5">
          <mp-form-label>Description</mp-form-label>
          <mp-input />
        </mp-form-control>
        <mp-form-control margin-bottom="5">
          <mp-form-label>Transfer date</mp-form-label>
          <mp-date-picker
            value-type="date"
            format="DD/MM/YYYY"
            placeholder="Select transfer date"
            v-model="datepicker"
          />
        </mp-form-control>
      </mp-modal-body>
      <mp-modal-footer>
        <mp-button mr="3" variant="ghost" @click="onModalToggle(false)">
          Cancel
        </mp-button>
        <mp-button>Download</mp-button>
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
  MpRadioGroup,
  MpRadio,
  MpSelect,
  MpInput,
  MpDatePicker,
} from "@mekari/pixel";

export default {
  name: "PayrollHistoryDownloadModal",
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
    MpRadioGroup,
    MpRadio,
    MpSelect,
    MpInput,
    MpDatePicker,
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