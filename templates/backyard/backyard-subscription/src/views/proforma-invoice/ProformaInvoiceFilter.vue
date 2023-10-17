<template>
  <mp-box>
    <mp-flex gap="4" justify-content="space-between" margin-bottom="5">
      <mp-flex gap="4">
        <mp-box :display="['none', 'block']">
          <mp-select size="md" value="all-application" width="200px">
            <option value="all-application">All application</option>
            <option value="jurnal">Jurnal</option>
            <option value="talenta">Talenta</option>
          </mp-select>
        </mp-box>
        <mp-box :display="['none', 'block']">
          <mp-select size="md" value="all-status" width="200px">
            <option value="all-status">All status</option>
            <option value="outstanding">Outstanding</option>
            <option value="paid">Paid</option>
          </mp-select>
        </mp-box>
        <mp-box>
          <mp-button
            variant="outline"
            :padding-x="['2', '4']"
            @click="onFilterDrawerToggle(true)"
          >
            <mp-icon name="filter" variant="duotone" :margin-right="[0, 2]" />
            <mp-text :display="['none', 'block']" font-weight="semibold">
              All filter
            </mp-text>
          </mp-button>
        </mp-box>
      </mp-flex>

      <mp-flex gap="2" :flex="['1 0 auto', '0 0 auto']" align-items="center">
        <mp-popover>
          <mp-popover-trigger>
            <mp-box>
              <mp-tooltip label="Adjust column" position="bottom">
                <mp-button-icon size="md" name="table-view-column" />
              </mp-tooltip>
            </mp-box>
          </mp-popover-trigger>
          <mp-popover-content
            max-width="40"
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
            <mp-stack spacing="2">
              <mp-checkbox name="filter-table">Proforma ID</mp-checkbox>
              <mp-checkbox name="filter-table">Jurnal SO ID</mp-checkbox>
              <mp-checkbox name="filter-table">Created date</mp-checkbox>
              <mp-checkbox name="filter-table">Company</mp-checkbox>
              <mp-checkbox name="filter-table">Product CID</mp-checkbox>
              <mp-checkbox name="filter-table">Active date</mp-checkbox>
              <mp-checkbox name="filter-table">End date</mp-checkbox>
              <mp-checkbox name="filter-table">Net amount</mp-checkbox>
              <mp-checkbox name="filter-table">Payment status</mp-checkbox>
              <mp-checkbox name="filter-table">Paid date</mp-checkbox>
              <mp-checkbox name="filter-table">MRR type</mp-checkbox>
            </mp-stack>
          </mp-popover-content>
        </mp-popover>
        <mp-tooltip label="Import" position="bottom">
          <mp-button-icon size="md" name="download" />
        </mp-tooltip>
        <mp-input-group>
          <mp-input-left-addon :with-background="false">
            <mp-icon name="search" size="sm" />
          </mp-input-left-addon>
          <mp-input placeholder="Search..." />
        </mp-input-group>
      </mp-flex>
    </mp-flex>

    <ProformaInvoiceFilterDrawer
      :isDrawerOpen="isFilterDrawerOpen"
      :onDrawerToggle="onFilterDrawerToggle"
    />
  </mp-box>
</template>

<script>
import {
  MpFlex,
  MpStack,
  MpBox,
  MpButton,
  MpButtonIcon,
  MpCheckbox,
  MpSelect,
  MpIcon,
  MpText,
  MpInput,
  MpInputGroup,
  MpInputLeftAddon,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpTooltip,
} from "@mekari/pixel";
import ProformaInvoiceFilterDrawer from "./ProformaInvoiceFilterDrawer";

export default {
  name: "ProformaInvoiceFilter",
  components: {
    MpFlex,
    MpStack,
    MpBox,
    MpButton,
    MpButtonIcon,
    MpCheckbox,
    MpSelect,
    MpIcon,
    MpText,
    MpInput,
    MpInputGroup,
    MpInputLeftAddon,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpTooltip,
    ProformaInvoiceFilterDrawer,
  },
  data: function () {
    return {
      isFilterDrawerOpen: false,
    };
  },
  methods: {
    onFilterDrawerToggle: function (data) {
      this.isFilterDrawerOpen = data;
    },
  },
};
</script>