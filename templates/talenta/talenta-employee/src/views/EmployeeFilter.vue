<template>
  <mp-box>
    <mp-flex justify-content="space-between" margin-bottom="5">
      <mp-flex gap="4">
        <mp-segmented-control
          default-value="directory"
          :data="[
            {
              label: 'Directory',
              value: 'directory',
              icon: 'table-view-list',
            },
            {
              label: 'Orgchart',
              value: 'org-chart',
              icon: 'organizations',
            },
          ]"
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
                is-clearable
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
              <mp-popover placement="right-start" trigger="hover">
                <mp-popover-trigger>
                  <mp-popover-list-item is-arrow>Status</mp-popover-list-item>
                </mp-popover-trigger>
                <mp-popover-content max-width="40">
                  <mp-box
                    background-color="white"
                    box-shadow="lg"
                    border="1px solid"
                    border-color="gray.400"
                    border-radius="md"
                    margin-left="0.5"
                    padding-top="3"
                    padding-bottom="2"
                    padding-x="3"
                  >
                    <mp-stack spacing="1">
                      <mp-checkbox name="status">Active</mp-checkbox>
                      <mp-checkbox name="status">Resign</mp-checkbox>
                    </mp-stack>
                  </mp-box>
                </mp-popover-content>
              </mp-popover>
              <mp-popover-list-item is-arrow>
                Employement Status
              </mp-popover-list-item>
              <mp-popover-list-item is-arrow>Branch</mp-popover-list-item>
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
            <mp-tooltip label="Adjust column" position="bottom">
              <mp-button-icon size="md" name="table-view-column" />
            </mp-tooltip>
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
            <mp-stack spacing="1">
              <mp-checkbox name="filter-table">Branch</mp-checkbox>
              <mp-checkbox name="filter-table">Organization</mp-checkbox>
              <mp-checkbox name="filter-table">Job position</mp-checkbox>
              <mp-checkbox name="filter-table">Job level</mp-checkbox>
              <mp-checkbox name="filter-table">Emp status</mp-checkbox>
            </mp-stack>
          </mp-popover-content>
        </mp-popover>
        <mp-tooltip label="Export" position="bottom">
          <mp-button-icon
            size="md"
            name="download"
            @click="onExportModalToggle(true)"
          />
        </mp-tooltip>
        <mp-tooltip label="Bulk update" position="bottom">
          <mp-button-icon size="md" name="edit" />
        </mp-tooltip>
        <mp-tooltip label="Insight" position="bottom">
          <mp-button-icon size="md" name="dashboard" />
        </mp-tooltip>
        <mp-tooltip label="Guidebook" position="bottom">
          <mp-button-icon size="md" name="help" />
        </mp-tooltip>
        <mp-input-group>
          <mp-input-left-addon :with-background="false">
            <mp-icon name="search" size="sm" />
          </mp-input-left-addon>
          <mp-input placeholder="Search employee..." />
        </mp-input-group>
      </mp-flex>
    </mp-flex>

    <EmployeeExportModal
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
  MpSegmentedControl,
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
import EmployeeExportModal from "./EmployeeExportModal";

export default {
  name: "EmployeeFilter",
  components: {
    MpFlex,
    MpStack,
    MpBox,
    MpButtonIcon,
    MpIcon,
    MpSegmentedControl,
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
    EmployeeExportModal,
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