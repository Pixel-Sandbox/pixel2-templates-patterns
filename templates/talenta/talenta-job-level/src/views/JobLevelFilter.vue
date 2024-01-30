<template>
  <mp-box>
    <mp-flex justify-content="space-between" margin-bottom="5">
      <mp-flex gap="4">
        <mp-popover>
          <mp-popover-trigger>
            <mp-input-group>
              <mp-input-right-addon :with-background="false">
                <mp-icon name="chevrons-down" size="sm" />
              </mp-input-right-addon>
              <mp-input
                value="All status"
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
            <mp-stack spacing="1">
              <mp-checkbox name="job-level">Select all</mp-checkbox>
              <mp-checkbox name="job-level">Active</mp-checkbox>
              <mp-checkbox name="job-level">Inactive</mp-checkbox>
            </mp-stack>
          </mp-popover-content>
        </mp-popover>
      </mp-flex>

      <mp-flex gap="2" align-items="center">
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
  MpStack,
  MpBox,
  MpButtonIcon,
  MpIcon,
  MpCheckbox,
  MpInput,
  MpInputGroup,
  MpInputLeftAddon,
  MpInputRightAddon,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpTooltip,
} from "@mekari/pixel";

export default {
  name: "JoLevelFilter",
  components: {
    MpFlex,
    MpStack,
    MpBox,
    MpButtonIcon,
    MpIcon,
    MpCheckbox,
    MpInput,
    MpInputGroup,
    MpInputLeftAddon,
    MpInputRightAddon,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpTooltip,
  },
};
</script>