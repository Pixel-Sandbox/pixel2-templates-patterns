<template>
  <mp-modal size="sm" :is-open="isModalOpen">
    <mp-modal-content>
      <mp-modal-header>Set eligible request date</mp-modal-header>
      <mp-modal-close-button @click="onModalToggle(false)" />
      <mp-modal-body>
        <mp-box>
          <mp-form-control control-id="days" margin-bottom="2">
            <mp-input-group>
              <mp-input type="number" />
              <mp-input-right-addon>
                <mp-text font-weight="bold" padding-x="3"> Days </mp-text>
              </mp-input-right-addon>
            </mp-input-group>
            <mp-form-help-text>
              You can leave it blank to set flexible.
            </mp-form-help-text>
          </mp-form-control>
          <mp-form-control control-id="type">
            <mp-select>
              <option value="before-requested-day">Before requested day</option>
            </mp-select>
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
        <mp-button>Set</mp-button>
      </mp-modal-footer>
    </mp-modal-content>
    <mp-modal-overlay />
  </mp-modal>
</template>

<script>
import {
  MpBox,
  MpText,
  MpButton,
  MpFormControl,
  MpFormHelpText,
  MpSelect,
  MpModal,
  MpModalOverlay,
  MpModalContent,
  MpModalHeader,
  MpModalBody,
  MpModalFooter,
  MpModalCloseButton,
  MpInput,
  MpInputGroup,
  MpInputRightAddon,
} from "@mekari/pixel";

export default {
  name: "TimeOffRequestEligibleModal",
  components: {
    MpBox,
    MpText,
    MpButton,
    MpFormControl,
    MpFormHelpText,
    MpSelect,
    MpModal,
    MpModalOverlay,
    MpModalContent,
    MpModalHeader,
    MpModalBody,
    MpModalFooter,
    MpModalCloseButton,
    MpInput,
    MpInputGroup,
    MpInputRightAddon,
  },
  props: {
    isModalOpen: [Boolean],
    onModalToggle: [Function],
  },
};
</script>