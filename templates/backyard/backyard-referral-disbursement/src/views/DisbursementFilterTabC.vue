<template>
  <mp-box>
    <mp-flex justify-content="space-between" margin-bottom="5">
      <mp-flex gap="4">
        <mp-box :display="['none', 'flex']">
          <mp-select size="md" placeholder="All status" width="200px">
          </mp-select>
        </mp-box>
        <mp-box :display="['none', 'flex']">
          <mp-select size="md" placeholder="All agent" width="200px">
          </mp-select>
        </mp-box>
        <mp-box>
          <mp-button variant="outline" :padding-x="['2', '4']">
            <mp-icon name="filter" variant="duotone" :margin-right="[0, 2]" />
            <mp-text
              :display="['none', 'block']"
              color="blue.400"
              font-weight="semibold"
            >
              All filter
            </mp-text>
          </mp-button>
        </mp-box>
      </mp-flex>
      <mp-flex gap="2" :flex="['1 0 auto', '0 0 auto']" align-items="center">
        <mp-popover use-portal>
          <mp-popover-trigger>
            <mp-box>
              <mp-tooltip label="Adjust column" position="bottom">
                <mp-button-icon
                  size="md"
                  name="table-view-column"
                  :display="['none', 'flex']"
                />
              </mp-tooltip>
            </mp-box>
          </mp-popover-trigger>
          <mp-popover-content
            max-width="48"
            background-color="white"
            box-shadow="lg"
            border="1px solid"
            border-color="gray.400"
            border-radius="md"
            padding-top="3"
            padding-bottom="2"
            padding-x="3"
            z-index="popover"
          >
            <mp-stack spacing="1">
              <mp-checkbox name="filter-table">Created at</mp-checkbox>
              <mp-checkbox name="filter-table">External ID</mp-checkbox>
              <mp-checkbox name="filter-table">Program</mp-checkbox>
              <mp-checkbox name="filter-table">Affiliate name</mp-checkbox>
              <mp-checkbox name="filter-table">Payment amount</mp-checkbox>
              <mp-checkbox name="filter-table">Gross comission</mp-checkbox>
              <mp-checkbox name="filter-table">Tax rate</mp-checkbox>
            </mp-stack>
          </mp-popover-content>
        </mp-popover>
        <mp-tooltip label="Export" position="bottom">
          <mp-button-icon
            size="md"
            name="upload"
            :display="['none', 'block']"
            @click="onExportModalToggle(true)"
          />
        </mp-tooltip>
        <mp-input-group>
          <mp-input-left-addon :with-background="false">
            <mp-icon name="search" size="sm" />
          </mp-input-left-addon>
          <mp-input placeholder="Search..." />
        </mp-input-group>
      </mp-flex>
    </mp-flex>
    <DisbursementExportModal
      :isModalOpen="isExportModalOpen"
      :onModalToggle="onExportModalToggle"
    />
  </mp-box>
</template>

<script>
import {
  MpFlex,
  MpStack,
  MpBox,
  MpButtonIcon,
  MpIcon,
  MpText,
  MpSelect,
  MpButton,
  MpCheckbox,
  MpInput,
  MpInputGroup,
  MpInputLeftAddon,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpTooltip,
} from "@mekari/pixel";
import DisbursementExportModal from "./DisbursementExportModal";

export default {
  name: "DisbursementFilterTabB",
  components: {
    MpFlex,
    MpStack,
    MpBox,
    MpButtonIcon,
    MpIcon,
    MpText,
    MpSelect,
    MpButton,
    MpCheckbox,
    MpInput,
    MpInputGroup,
    MpInputLeftAddon,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    DisbursementExportModal,
    MpTooltip,
  },
  data: function () {
    return {
      isExportModalOpen: false,
    };
  },
  methods: {
    onExportModalToggle: function (data) {
      this.isExportModalOpen = data;
    },
  },
};
</script>