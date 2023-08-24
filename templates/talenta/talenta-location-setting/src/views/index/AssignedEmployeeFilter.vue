<template>
  <mp-box>
    <mp-flex justify-content="space-between" margin-bottom="5">
      <mp-flex gap="4">
        <mp-segmented-control
          default-value="employee"
          :data="[
            {
              label: 'Employee',
              value: 'employee',
              icon: 'employee',
            },
            {
              label: 'Location',
              value: 'location',
              icon: 'location',
            },
          ]"
          @change="onChangeSegment"
        />
        <mp-popover>
          <mp-popover-trigger>
            <mp-input-group>
              <mp-input-right-addon :with-background="false">
                <mp-icon name="chevrons-down" size="sm" />
              </mp-input-right-addon>
              <mp-input
                value="Filter"
                is-read-only
                width="200px"
                cursor="pointer"
              />
            </mp-input-group>
          </mp-popover-trigger>
          <mp-popover-content
            max-width="56"
            background-color="white"
            box-shadow="lg"
            border="1px solid"
            border-color="gray.400"
            border-radius="md"
            z-index="popover"
          >
            <mp-popover-list>
              <mp-popover-list-item is-arrow>Branch</mp-popover-list-item>
              <mp-popover-list-item is-arrow>
                Employement Status
              </mp-popover-list-item>
              <mp-popover-list-item is-arrow>Location</mp-popover-list-item>
              <mp-popover-list-item is-arrow>Organization</mp-popover-list-item>
              <mp-popover-list-item is-arrow>Job position</mp-popover-list-item>
              <mp-popover-list-item is-arrow>Job level</mp-popover-list-item>
            </mp-popover-list>
          </mp-popover-content>
        </mp-popover>
      </mp-flex>
      <mp-flex gap="2" align-items="center">
        <mp-popover>
          <mp-popover-trigger>
            <mp-box>
              <mp-tooltip label="Adjust column" position="bottom">
                <mp-button-icon size="md" name="table-view-column" />
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
              <mp-checkbox name="filter-table">Branch</mp-checkbox>
              <mp-checkbox name="filter-table">Employment status</mp-checkbox>
              <mp-checkbox name="filter-table">Organization</mp-checkbox>
              <mp-checkbox name="filter-table">Job position</mp-checkbox>
              <mp-checkbox name="filter-table">Job level</mp-checkbox>
            </mp-stack>
          </mp-popover-content>
        </mp-popover>
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
  MpSegmentedControl,
  MpIcon,
  MpCheckbox,
  MpInput,
  MpInputGroup,
  MpInputLeftAddon,
  MpInputRightAddon,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
  MpTooltip,
} from "@mekari/pixel";

export default {
  name: "AssignedEmployeeFilter",
  components: {
    MpFlex,
    MpStack,
    MpBox,
    MpButtonIcon,
    MpSegmentedControl,
    MpIcon,
    MpCheckbox,
    MpInput,
    MpInputGroup,
    MpInputLeftAddon,
    MpInputRightAddon,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
    MpTooltip,
  },
  props: {
    onChangeSegment: [Function],
  },
};
</script>