<template>
  <mp-modal size="lg" :is-open="isModalOpen">
    <mp-modal-content>
      <mp-modal-header>Export employee data</mp-modal-header>
      <mp-modal-close-button @click="onModalToggle(false)" />
      <mp-modal-body>
        <mp-box>
          <mp-box margin-bottom="5">
            <mp-flex align="center" margin-bottom="1">
              <mp-text font-weight="semibold">Employement status</mp-text>
            </mp-flex>
            <mp-autocomplete placeholder="Employement status" is-searchable />
          </mp-box>
          <mp-box margin-bottom="5">
            <mp-flex align="center" margin-bottom="1">
              <mp-text font-weight="semibold">Status</mp-text>
            </mp-flex>
            <mp-autocomplete placeholder="Status" is-searchable />
          </mp-box>
          <mp-box margin-bottom="5">
            <mp-flex align="center" margin-bottom="1">
              <mp-text font-weight="semibold">Organization</mp-text>
            </mp-flex>
            <mp-autocomplete placeholder="Organization" is-searchable />
          </mp-box>
          <mp-box>
            <mp-flex align="center" margin-bottom="1">
              <mp-text font-weight="semibold">Employee data</mp-text>
            </mp-flex>
            <mp-autocomplete placeholder="Employee data" is-searchable />
          </mp-box>
        </mp-box>
      </mp-modal-body>
      <mp-modal-footer>
        <mp-button mr="3" variant="ghost" @click="onModalToggle(false)">
          Cancel
        </mp-button>
        <mp-button>Save</mp-button>
      </mp-modal-footer>
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
  name: "EmployeeExportModal",
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpButton,
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