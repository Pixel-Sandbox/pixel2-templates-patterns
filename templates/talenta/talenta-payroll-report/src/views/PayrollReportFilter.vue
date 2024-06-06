<template>
  <mp-box>
    <mp-flex justify-content="space-between" margin-bottom="5">
      <mp-flex gap="4">
        <mp-box width="200px">
          <mp-date-picker
            v-model="value"
            type="month"
            format="MMMM YYYY"
            placeholder="Select date"
          />
        </mp-box>
        <mp-box>
          <mp-popover>
            <mp-popover-trigger>
              <mp-input-group>
                <mp-input-right-addon :with-background="false">
                  <mp-icon name="chevrons-down" size="sm" />
                </mp-input-right-addon>
                <mp-input
                  value="All branches"
                  is-read-only
                  width="200px"
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
                <mp-input placeholder="Search branch" />
              </mp-input-group>
              <mp-stack spacing="1">
                <mp-checkbox name="branch">Select all</mp-checkbox>
                <mp-checkbox name="branch">Aceh</mp-checkbox>
                <mp-checkbox name="branch">Bandung</mp-checkbox>
                <mp-checkbox name="branch">Bogor</mp-checkbox>
                <mp-checkbox name="branch">Depok</mp-checkbox>
                <mp-checkbox name="branch">Jakarta</mp-checkbox>
              </mp-stack>
            </mp-popover-content>
          </mp-popover>
        </mp-box>
      </mp-flex>

      <mp-flex gap="2" align-items="center">
        <mp-input-group>
          <mp-input-left-addon :with-background="false">
            <mp-icon name="search" size="sm" />
          </mp-input-left-addon>
          <mp-input placeholder="Search report name" />
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
  MpInput,
  MpInputGroup,
  MpInputLeftAddon,
  MpInputRightAddon,
  MpDatePicker,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
} from "@mekari/pixel";

export default {
  name: "PayrollReportFilter",
  components: {
    MpFlex,
    MpStack,
    MpBox,
    MpIcon,
    MpCheckbox,
    MpInput,
    MpInputGroup,
    MpInputLeftAddon,
    MpInputRightAddon,
    MpDatePicker,
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