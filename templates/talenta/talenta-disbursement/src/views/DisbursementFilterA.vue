<template>
  <mp-box>
    <mp-flex gap="4" justify-content="space-between" margin-bottom="5">
      <mp-flex gap="4">
        <mp-box :display="['none', 'block']">
          <mp-popover use-portal>
            <mp-popover-trigger>
              <mp-input-group>
                <mp-input-right-addon :with-background="false">
                  <mp-icon name="chevrons-down" size="sm" />
                </mp-input-right-addon>
                <mp-input
                  value="All reimbursement name"
                  is-read-only
                  width="250px"
                  cursor="pointer"
                />
              </mp-input-group>
            </mp-popover-trigger>
            <mp-popover-content
              max-width="250px"
              background-color="white"
              border="1px solid"
              border-color="gray.400"
              border-radius="md"
              box-shadow="lg"
            >
              <mp-popover-list>
                <mp-popover-list-item>Maternity</mp-popover-list-item>
                <mp-popover-list-item>Medical outpatient</mp-popover-list-item>
                <mp-popover-list-item>Transport claim</mp-popover-list-item>
                <mp-popover-list-item>Event claim</mp-popover-list-item>
                <mp-popover-list-item>Entertainment claim</mp-popover-list-item>
              </mp-popover-list>
            </mp-popover-content>
          </mp-popover>
        </mp-box>
        <mp-box width="250px">
          <mp-date-picker
            v-model="value"
            format="DD/MM/YYYY"
            type="date"
            range
            range-separator=" - "
          />
        </mp-box>
        <mp-box>
          <mp-button
            variant="outline"
            :padding-x="['2', '4']"
            @click="onFilterDrawerToggle(true)"
          >
            <mp-icon name="filter" variant="duotone" :margin-right="[0, 2]" />
            <mp-text
              :display="['none', 'block']"
              font-weight="semibold"
              color="blue.400"
            >
              All filter
            </mp-text>
          </mp-button>
        </mp-box>
      </mp-flex>

      <mp-flex gap="2" :flex="['1 0 auto', '0 0 auto']" align-items="center">
        <mp-tooltip label="Adjust column" position="bottom">
          <mp-button-icon
            size="md"
            name="table-view-column"
            :display="['none', 'flex']"
          />
        </mp-tooltip>
        <mp-tooltip label="Guidebook" position="bottom">
          <mp-button-icon size="md" name="help" />
        </mp-tooltip>
        <mp-input-group>
          <mp-input-left-addon :with-background="false">
            <mp-icon name="search" size="sm" />
          </mp-input-left-addon>
          <mp-input placeholder="Search..." />
        </mp-input-group>
      </mp-flex>
    </mp-flex>
    <DisbursementFilterDrawer
      :isDrawerOpen="isFilterDrawerOpen"
      :onDrawerToggle="onFilterDrawerToggle"
    />
  </mp-box>
</template>

<script>
import {
  MpFlex,
  MpBox,
  MpButton,
  MpButtonIcon,
  MpDatePicker,
  MpIcon,
  MpText,
  MpTooltip,
  MpInput,
  MpInputGroup,
  MpInputLeftAddon,
  MpInputRightAddon,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
} from "@mekari/pixel";
import DisbursementFilterDrawer from "./DisbursementFilterDrawer";

export default {
  name: "DisbursementFilterA",
  components: {
    MpFlex,
    MpBox,
    MpButton,
    MpButtonIcon,
    MpDatePicker,
    MpIcon,
    MpText,
    MpTooltip,
    MpInput,
    MpInputGroup,
    MpInputLeftAddon,
    MpInputRightAddon,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
    DisbursementFilterDrawer,
  },
  data: function () {
    return {
      value: [new Date(), this.getDate(+30)],
      isFilterDrawerOpen: false,
    };
  },
  methods: {
    onFilterDrawerToggle: function (data) {
      this.isFilterDrawerOpen = data;
    },
    getDate(value) {
      let date = new Date();

      if (value < 0) date.setDate(date.getDate() - Math.abs(value));
      else date.setDate(date.getDate() + value);

      return date;
    },
  },
};
</script>