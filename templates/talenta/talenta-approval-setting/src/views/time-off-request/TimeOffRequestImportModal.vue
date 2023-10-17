<template>
  <mp-modal size="sm" :is-open="isModalOpen">
    <mp-modal-content>
      <mp-modal-header>Import from existing</mp-modal-header>
      <mp-modal-close-button @click="onModalToggle(false)" />
      <mp-modal-body>
        <mp-box>
          <mp-form-control control-id="days" margin-bottom="2">
            <mp-autocomplete
              is-searchable
              is-read-only
              placeholder="Select approval setting"
              :data="[
                'Overtime Leave',
                'Annual Leave',
                'Sick Leave',
                'Special Leave',
              ]"
              :content-style="{ width: '64' }"
            />
            <mp-form-help-text>
              The criteria and approval layer of the setting you have selected
              will be copied.
            </mp-form-help-text>
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
        <mp-button>Import</mp-button>
      </mp-modal-footer>
    </mp-modal-content>
    <mp-modal-overlay />
  </mp-modal>
</template>

<script>
import {
  MpBox,
  MpButton,
  MpFormControl,
  MpFormHelpText,
  MpAutocomplete,
  MpModal,
  MpModalOverlay,
  MpModalContent,
  MpModalHeader,
  MpModalBody,
  MpModalFooter,
  MpModalCloseButton,
} from "@mekari/pixel";

export default {
  name: "TimeOffRequestImportModal",
  components: {
    MpBox,
    MpButton,
    MpFormControl,
    MpFormHelpText,
    MpAutocomplete,
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
};
</script>