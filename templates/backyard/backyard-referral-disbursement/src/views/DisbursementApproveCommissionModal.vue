<template>
  <mp-modal size="lg" :is-open="isModalOpen">
    <mp-modal-content>
      <mp-modal-header>Grant commission?</mp-modal-header>
      <mp-modal-close-button @click="onModalToggle(false)" />
      <mp-modal-body>
        <mp-flex justify-content="space-between" margin-bottom="4">
          <mp-flex>
            <mp-text color="gray.600">Commission summary</mp-text>
          </mp-flex>
        </mp-flex>
        <mp-flex justify-content="space-between" margin-bottom="2">
          <mp-flex>
            <mp-text font-weight="semibold">Agent name</mp-text>
          </mp-flex>
          <mp-flex>
            <mp-text font-weight="semibold">Budi Sudirman</mp-text>
          </mp-flex>
        </mp-flex>
        <mp-flex justify-content="space-between" margin-bottom="2">
          <mp-flex>
            <mp-text font-weight="semibold">ID type</mp-text>
          </mp-flex>
          <mp-flex>
            <mp-text font-weight="semibold">Personal NPWP</mp-text>
          </mp-flex>
        </mp-flex>
        <mp-flex justify-content="space-between" margin-bottom="2">
          <mp-flex>
            <mp-text font-weight="semibold">ID number</mp-text>
          </mp-flex>
          <mp-flex>
            <mp-text font-weight="semibold">93.972.215.4-542.000</mp-text>
          </mp-flex>
        </mp-flex>
        <mp-flex justify-content="space-between" margin-bottom="2">
          <mp-flex>
            <mp-text font-weight="semibold">Bank name</mp-text>
          </mp-flex>
          <mp-flex>
            <mp-text font-weight="semibold">BCA</mp-text>
          </mp-flex>
        </mp-flex>
        <mp-flex justify-content="space-between" margin-bottom="2">
          <mp-flex>
            <mp-text font-weight="semibold">Bank account number</mp-text>
          </mp-flex>
          <mp-flex>
            <mp-text font-weight="semibold">430029101</mp-text>
          </mp-flex>
        </mp-flex>
        <mp-flex justify-content="space-between" margin-bottom="2">
          <mp-flex>
            <mp-text font-weight="semibold">Bank account holder</mp-text>
          </mp-flex>
          <mp-flex>
            <mp-text font-weight="semibold">Budi Sudirman</mp-text>
          </mp-flex>
        </mp-flex>
        <mp-flex justify-content="space-between" margin-bottom="2">
          <mp-flex>
            <mp-text font-weight="semibold">Program</mp-text>
          </mp-flex>
          <mp-flex>
            <mp-text font-weight="semibold">Referral Mekari Jurnal</mp-text>
          </mp-flex>
        </mp-flex>
        <mp-flex justify-content="space-between" margin-bottom="2">
          <mp-flex>
            <mp-text font-weight="semibold">Subscription amount</mp-text>
          </mp-flex>
          <mp-flex>
            <mp-text font-weight="semibold">Rp6.300.000</mp-text>
          </mp-flex>
        </mp-flex>
        <mp-divider />
        <mp-flex justify-content="space-between" margin-bottom="2">
          <mp-flex>
            <mp-text>
              Gross commission
              <mp-tooltip
                position="right"
                label="Calculation: (Subscription amount : 1,11) x 20%"
              >
                <mp-icon size="sm" name="info" margin-left="1" />
              </mp-tooltip>
            </mp-text>
          </mp-flex>
          <mp-flex>
            <mp-text>Rp1.135.135</mp-text>
          </mp-flex>
        </mp-flex>
        <mp-flex justify-content="space-between" margin-bottom="2">
          <mp-flex>
            <mp-text>Tax commission (2.50%)</mp-text>
          </mp-flex>
          <mp-flex>
            <mp-text>Rp28.378</mp-text>
          </mp-flex>
        </mp-flex>
        <mp-divider />
        <mp-flex justify-content="space-between" margin-bottom="3">
          <mp-text font-size="lg" font-weight="semibold">
            Net commission
            <mp-tooltip
              position="right"
              label="Calculation: Gross commission - Tax commission"
            >
              <mp-icon size="sm" name="info" margin-left="1" />
            </mp-tooltip>
          </mp-text>
          <mp-text font-size="lg" font-weight="semibold">Rp1.106.757</mp-text>
        </mp-flex>
      </mp-modal-body>
      <mp-modal-footer justify-content="space-between">
        <mp-checkbox :is-checked="isChecked" @change="handleChange">
          I agree to proceed disbursement
        </mp-checkbox>
        <mp-flex>
          <mp-button
            margin-right="3"
            variant="ghost"
            @click="onModalToggle(false)"
          >
            Cancel
          </mp-button>
          <mp-flex>
            <mp-button
              variant="solid"
              border-right-radius="0"
              :is-disabled="!isChecked"
            >
              Grant commission
            </mp-button>
            <mp-popover placement="bottom-end">
              <mp-popover-trigger>
                <mp-button
                  border-left="1px"
                  border-left-color="#314AD8"
                  border-left-radius="0"
                  variant="solid"
                  right-icon="caret-down"
                  :is-disabled="!isChecked"
                >
                </mp-button>
              </mp-popover-trigger>
              <mp-popover-content
                max-width="48"
                width="48"
                background-color="white"
                box-shadow="lg"
                border-radius="md"
                border-width="1px"
                border-color="gray.400"
              >
                <mp-popover-list>
                  <mp-popover-list-item>Reject commission</mp-popover-list-item>
                </mp-popover-list>
              </mp-popover-content>
            </mp-popover>
          </mp-flex>
        </mp-flex>
      </mp-modal-footer>
    </mp-modal-content>
    <mp-modal-overlay />
  </mp-modal>
</template>

<script>
import {
  MpFlex,
  MpText,
  MpButton,
  MpDivider,
  MpIcon,
  MpTooltip,
  MpCheckbox,
  MpModal,
  MpModalOverlay,
  MpModalContent,
  MpModalHeader,
  MpModalBody,
  MpModalFooter,
  MpModalCloseButton,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
} from "@mekari/pixel";

export default {
  name: "DisbursementApproveCommissionModal",
  components: {
    MpFlex,
    MpText,
    MpButton,
    MpDivider,
    MpIcon,
    MpTooltip,
    MpCheckbox,
    MpModal,
    MpModalOverlay,
    MpModalContent,
    MpModalHeader,
    MpModalBody,
    MpModalFooter,
    MpModalCloseButton,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
  },
  props: {
    isModalOpen: [Boolean],
    onModalToggle: [Function],
  },
  data: function () {
    return {
      isChecked: false,
    };
  },
  methods: {
    handleChange() {
      this.isChecked = !this.isChecked;
    },
  },
};
</script>