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
                  value="All status"
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
                <mp-popover-list-item>Waiting for payment</mp-popover-list-item>
                <mp-popover-list-item>Paid</mp-popover-list-item>
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
            placeholder="Select date"
          />
        </mp-box>
      </mp-flex>

      <mp-flex gap="2" :flex="['1 0 auto', '0 0 auto']" align-items="center">
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
  </mp-box>
</template>

<script>
import {
  MpFlex,
  MpBox,
  MpButtonIcon,
  MpDatePicker,
  MpIcon,
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

export default {
  name: "DisbursementFilterB",
  components: {
    MpFlex,
    MpBox,
    MpButtonIcon,
    MpDatePicker,
    MpIcon,
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
  },
  data: function () {
    return {
      value: null,
    };
  },
};
</script>