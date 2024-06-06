<template>
  <mp-box>
    <mp-flex justify-content="space-between" margin-bottom="5">
      <mp-flex gap="4">
        <mp-input-group>
          <mp-input-right-addon :with-background="false">
            <mp-icon name="chevrons-down" size="sm" />
          </mp-input-right-addon>
          <mp-input
            value="All branches"
            is-read-only
            width="220px"
            cursor="pointer"
          />
        </mp-input-group>
        <mp-box>
          <mp-popover>
            <mp-popover-trigger>
              <mp-input-group>
                <mp-input-right-addon :with-background="false">
                  <mp-icon name="chevrons-down" size="sm" />
                </mp-input-right-addon>
                <mp-input
                  value="All payment schedule"
                  is-read-only
                  width="220px"
                  cursor="pointer"
                />
              </mp-input-group>
            </mp-popover-trigger>
            <mp-popover-content
              max-width="64"
              background-color="white"
              box-shadow="lg"
              border="1px solid"
              border-color="gray.400"
              border-radius="md"
              padding-top="3"
              padding-bottom="2"
              padding-x="3"
            >
              <mp-input-group mb="3">
                <mp-input-left-addon :with-background="false">
                  <mp-icon name="search" size="sm" />
                </mp-input-left-addon>
                <mp-input placeholder="Search" />
              </mp-input-group>
              <mp-stack spacing="1">
                <mp-checkbox name="branch">All payment method</mp-checkbox>
                <mp-checkbox name="branch">Cash & transfer</mp-checkbox>
                <mp-checkbox name="branch">Cash</mp-checkbox>
                <mp-checkbox name="branch">Transfer</mp-checkbox>
              </mp-stack>
            </mp-popover-content>
          </mp-popover>
        </mp-box>
        <mp-box>
          <mp-button variant="outline">
            <mp-icon name="filter" size="sm" variant="duotone" mr="1" />
            All filters
          </mp-button>
        </mp-box>
      </mp-flex>

      <mp-flex gap="2" align-items="center">
        <mp-button-icon
          name="column-settings"
          size="md"
          v-mp-tooltip="'Manage column'"
        />
        <mp-button-icon name="upload" size="md" v-mp-tooltip="'Export'" />
        <mp-input-group ml="2">
          <mp-input-left-addon :with-background="false">
            <mp-icon name="search" size="sm" />
          </mp-input-left-addon>
          <mp-input placeholder="Search employee" />
        </mp-input-group>
      </mp-flex>
    </mp-flex>
  </mp-box>
</template>

<script>
import {
  MpFlex,
  MpStack,
  MpBox,
  MpIcon,
  MpCheckbox,
  MpButton,
  MpButtonIcon,
  MpInput,
  MpInputGroup,
  MpInputLeftAddon,
  MpInputRightAddon,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
} from "@mekari/pixel";

export default {
  name: "PayrollReportDetailFilter",
  components: {
    MpFlex,
    MpStack,
    MpBox,
    MpIcon,
    MpCheckbox,
    MpButton,
    MpButtonIcon,
    MpInput,
    MpInputGroup,
    MpInputLeftAddon,
    MpInputRightAddon,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
  },
  data: function () {
    return {
      value: null,
    };
  },
};
</script>