<template>
  <mp-box>
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 60px)">
      <mp-box
        as="section"
        data-id="content"
        width="100%"
        height="calc(100vh - 60px)"
        overflow-y="auto"
        background-color="background"
      >
        <mp-flex
          justify="space-between"
          align-items="center"
          padding-x="6"
          padding-y="1.063rem"
        >
          <mp-box>
            <mp-heading as="h1" font-size="2xl" font-weight="semibold">
              Employees
            </mp-heading>
          </mp-box>
          <mp-flex gap="2">
            <mp-popover>
              <mp-popover-trigger>
                <mp-button variant="outline" right-icon="caret-down">
                  More
                </mp-button>
              </mp-popover-trigger>
              <mp-popover-content
                max-width="48"
                background-color="white"
                box-shadow="lg"
                border="1px solid"
                border-color="gray.400"
                border-radius="md"
                z-index="popover"
              >
                <mp-popover-list>
                  <mp-popover-list-item>Mass resign</mp-popover-list-item>
                  <mp-popover-list-item>
                    Import / export prorate
                  </mp-popover-list-item>
                  <mp-popover-list-item>
                    PTKP status adjusment
                  </mp-popover-list-item>
                </mp-popover-list>
              </mp-popover-content>
            </mp-popover>
            <mp-button variant="outline">Employee transfer</mp-button>
            <mp-popover>
              <mp-popover-trigger>
                <mp-button variant="primary" right-icon="caret-down">
                  Add employee
                </mp-button>
              </mp-popover-trigger>
              <mp-popover-content
                max-width="40"
                background-color="white"
                box-shadow="lg"
                border="1px solid"
                border-color="gray.400"
                border-radius="md"
                z-index="popover"
              >
                <mp-popover-list>
                  <mp-popover-list-item>Add new employee</mp-popover-list-item>
                  <mp-popover-list-item>Bulk add employee</mp-popover-list-item>
                </mp-popover-list>
              </mp-popover-content>
            </mp-popover>
          </mp-flex>
        </mp-flex>
        <mp-box
          min-height="calc(100vh - 132px)"
          border-top-width="1px"
          background-color="white"
          padding="6"
        >
          <EmployeeFilter />
          <EmployeeTable />
        </mp-box>
      </mp-box>
    </mp-flex>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpHeading,
  MpButton,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
} from "@mekari/pixel";
import Header from "../components/Header";
import EmployeeFilter from "./EmployeeFilter";
import EmployeeTable from "./EmployeeTable";

export default {
  name: "Employee",
  components: {
    MpBox,
    MpFlex,
    MpHeading,
    MpButton,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
    Header,
    EmployeeFilter,
    EmployeeTable,
  },
};
</script>