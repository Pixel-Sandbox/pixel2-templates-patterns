<template>
  <mp-modal :is-open="isModalOpen">
    <mp-modal-content max-width="555px">
      <mp-modal-header>Download report</mp-modal-header>
      <mp-modal-close-button @click="onModalToggle(false)" />
      <mp-modal-body>
        <mp-box margin-bottom="4">
          <mp-form-control>
            <mp-form-label>
              Select period
              <mp-tooltip
                label="This period will be used for your result report."
                position="right"
              >
                <mp-icon name="info" size="sm" margin-left="1" />
              </mp-tooltip>
            </mp-form-label>
            <mp-flex>
              <mp-box margin-right="4">
                <mp-form-control>
                  <mp-date-picker
                    v-model="valueA"
                    format="MMM YYYY"
                    margin-right="4"
                    type="month"
                  />
                </mp-form-control>
              </mp-box>
              <mp-box margin-left="4">
                <mp-form-control>
                  <mp-date-picker
                    v-model="valueB"
                    format="MMM YYYY"
                    margin-right="4"
                    type="month"
                  />
                </mp-form-control>
              </mp-box>
            </mp-flex>
          </mp-form-control>
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
        <mp-button @click="onModalNext(true)">Save and download</mp-button>
      </mp-modal-footer>
    </mp-modal-content>
    <mp-modal-overlay />
  </mp-modal>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpButton,
  MpTooltip,
  MpIcon,
  MpModal,
  MpModalOverlay,
  MpModalContent,
  MpModalHeader,
  MpModalBody,
  MpModalFooter,
  MpModalCloseButton,
  MpFormControl,
  MpFormLabel,
  MpDatePicker,
} from "@mekari/pixel";

export default {
  name: "EditorReportBuilderDownloadModal",
  components: {
    MpBox,
    MpFlex,
    MpButton,
    MpTooltip,
    MpIcon,
    MpModal,
    MpModalOverlay,
    MpModalContent,
    MpModalHeader,
    MpModalBody,
    MpModalFooter,
    MpModalCloseButton,
    MpFormControl,
    MpFormLabel,
    MpDatePicker,
  },
  props: {
    isModalOpen: [Boolean],
    onModalToggle: [Function],
    onModalNext: [Function],
  },
  data() {
    return {
      valueA: "",
      valueB: "",
    };
  },
};
</script>