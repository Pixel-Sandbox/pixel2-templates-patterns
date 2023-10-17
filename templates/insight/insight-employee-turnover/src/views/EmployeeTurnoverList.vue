<template>
  <mp-box
    background-color="white"
    border="1px solid"
    border-radius="md"
    border-color="gray.100"
    padding="6"
  >
    <mp-flex justify-content="space-between" margin-bottom="6">
      <mp-flex>
        <mp-heading as="h2" font-size="xl">Resigned employees</mp-heading>
      </mp-flex>
      <mp-flex gap="4">
        <mp-popover use-portal>
          <mp-popover-trigger>
            <mp-box>
              <mp-tooltip label="Adjust column" position="bottom">
                <mp-button-icon size="md" name="table-view-column" />
              </mp-tooltip>
            </mp-box>
          </mp-popover-trigger>
          <mp-popover-content
            max-width="240px"
            background-color="white"
            box-shadow="lg"
            border="1px solid"
            border-color="gray.400"
            border-radius="md"
            padding-top="3"
            padding-bottom="2"
            padding-x="3"
            max-height="400px"
            overflow-y="auto"
          >
            <mp-stack spacing="1">
              <mp-checkbox name="filter-table">Branch</mp-checkbox>
              <mp-checkbox name="filter-table">Organization</mp-checkbox>
              <mp-checkbox name="filter-table">Job level</mp-checkbox>
              <mp-checkbox name="filter-table">Job position</mp-checkbox>
              <mp-checkbox name="filter-table">Grade</mp-checkbox>
              <mp-checkbox name="filter-table">Classes</mp-checkbox>
              <mp-checkbox name="filter-table">Employement status</mp-checkbox>
              <mp-checkbox name="filter-table">Total reprimand</mp-checkbox>
              <mp-checkbox name="filter-table">Gender</mp-checkbox>
              <mp-checkbox name="filter-table">Age</mp-checkbox>
              <mp-checkbox name="filter-table">Latest education</mp-checkbox>
              <mp-checkbox name="filter-table">Religion</mp-checkbox>
              <mp-checkbox name="filter-table">Marital status</mp-checkbox>
              <mp-checkbox name="filter-table">PTKP status</mp-checkbox>
            </mp-stack>
          </mp-popover-content>
        </mp-popover>
        <mp-box>
          <mp-input-group>
            <mp-input-left-addon :with-background="false">
              <mp-icon name="search" size="sm" />
            </mp-input-left-addon>
            <mp-input placeholder="Search employee name or ID" width="260px" />
          </mp-input-group>
        </mp-box>
        <mp-popover use-portal>
          <mp-popover-trigger>
            <mp-button variant="outline">
              <mp-icon name="download" variant="duotone" margin-right="2" />
              Download
            </mp-button>
          </mp-popover-trigger>
          <mp-popover-content
            max-width="32"
            bg="white"
            rounded="md"
            shadow="lg"
            border="1px solid"
            border-color="gray.400"
          >
            <mp-popover-list display="grid">
              <mp-popover-list-item>CSV</mp-popover-list-item>
              <mp-popover-list-item>XLSX</mp-popover-list-item>
              <mp-popover-list-item>PDF</mp-popover-list-item>
            </mp-popover-list>
          </mp-popover-content>
        </mp-popover>
      </mp-flex>
    </mp-flex>
    <EmployeeTurnoverTable />
  </mp-box>
</template>

<script>
import {
  MpFlex,
  MpHeading,
  MpTooltip,
  MpBox,
  MpIcon,
  MpButton,
  MpButtonIcon,
  MpInput,
  MpInputGroup,
  MpInputLeftAddon,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
  MpStack,
  MpCheckbox,
} from "@mekari/pixel";
import EmployeeTurnoverTable from "./EmployeeTurnoverTable";

export default {
  name: "EmployeeTurnoverList",
  components: {
    MpFlex,
    MpHeading,
    MpTooltip,
    MpBox,
    MpIcon,
    MpButton,
    MpButtonIcon,
    MpInput,
    MpInputGroup,
    MpInputLeftAddon,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
    MpStack,
    MpCheckbox,
    EmployeeTurnoverTable,
  },
};
</script>
