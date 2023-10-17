<template>
  <mp-box>
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 60px)">
      <Sidebar is-alternate is-custom />
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
          :padding-x="['4', '6']"
          :display="['inline-block', 'flex']"
          padding-y="1.063rem"
        >
          <mp-box>
            <mp-heading as="h1" font-size="2xl" font-weight="semibold">
              Automation
            </mp-heading>
          </mp-box>
          <mp-button as="router-link" to="/builder" variant="primary">
            Create workflow
          </mp-button>
        </mp-flex>
        <mp-box
          min-height="calc(100vh - 132px)"
          border-top-width="1px"
          border-left-width="1px"
          border-top-left-radius="md"
          border-color="gray.100"
          background-color="white"
          :padding="['4', '6']"
        >
          <mp-box margin-bottom="5">
            <mp-heading as="h2" font-size="xl">Use our template</mp-heading>
          </mp-box>

          <mp-flex gap="6">
            <mp-pseudo-box role="group" flex="1 0 0%">
              <mp-box
                background-color="white"
                border="1px solid"
                border-color="gray.100"
                border-radius="md"
                padding="4"
                min-height="134px"
                cursor="pointer"
                transition="all .2s ease"
                :_groupHover="{
                  borderColor: 'blue.400',
                  boxShadow: 'md',
                }"
              >
                <mp-flex align-items="center" gap="2" margin-bottom="3">
                  <mp-icon name="talenta-brand" />
                  <mp-text color="gray.600" font-size="sm">Talenta</mp-text>
                </mp-flex>

                <mp-text font-weight="semibold">
                  Notify when employee late in
                </mp-text>
                <mp-text color="gray.600" font-size="sm" margin-top="2">
                  Send a notification to manager when employee late in with some
                  criteria.
                </mp-text>
              </mp-box>
            </mp-pseudo-box>
            <mp-pseudo-box role="group" flex="1 0 0%">
              <mp-box
                background-color="white"
                border="1px solid"
                border-color="gray.100"
                border-radius="md"
                padding="4"
                min-height="134px"
                cursor="pointer"
                transition="all .2s ease"
                :_groupHover="{
                  borderColor: 'blue.400',
                  boxShadow: 'md',
                }"
              >
                <mp-flex align-items="center" gap="2" margin-bottom="3">
                  <mp-icon name="talenta-brand" />
                  <mp-text color="gray.600" font-size="sm">Talenta</mp-text>
                </mp-flex>

                <mp-text font-weight="semibold">
                  Notify when employee early out
                </mp-text>
                <mp-text color="gray.600" font-size="sm" margin-top="2">
                  Send a notification to manager when employee early out with
                  some criteria.
                </mp-text>
              </mp-box>
            </mp-pseudo-box>
            <mp-pseudo-box role="group" flex="1 0 0%">
              <mp-box
                background-color="white"
                border="1px solid"
                border-color="gray.100"
                border-radius="md"
                padding="4"
                min-height="134px"
                cursor="pointer"
                transition="all .2s ease"
                :_groupHover="{
                  borderColor: 'blue.400',
                  boxShadow: 'md',
                }"
              >
                <mp-flex align-items="center" gap="2" margin-bottom="3">
                  <mp-icon name="talenta-brand" />
                  <mp-text color="gray.600" font-size="sm">Talenta</mp-text>
                </mp-flex>

                <mp-text font-weight="semibold">
                  Scheduler attendance report
                </mp-text>
                <mp-text color="gray.600" font-size="sm" margin-top="2">
                  Get attendance report by scheduler to send the report to
                  appropriate person.
                </mp-text>
              </mp-box>
            </mp-pseudo-box>
            <mp-pseudo-box role="group" flex="1 0 0%">
              <mp-box
                background-color="white"
                border="1px solid"
                border-color="gray.100"
                border-radius="md"
                padding="4"
                min-height="134px"
                cursor="pointer"
                transition="all .2s ease"
                :_groupHover="{
                  borderColor: 'blue.400',
                  boxShadow: 'md',
                }"
              >
                <mp-flex align-items="center" gap="2" margin-bottom="3">
                  <mp-icon name="qontak-brand" />
                  <mp-text color="gray.600" font-size="sm">Qontak</mp-text>
                </mp-flex>

                <mp-text font-weight="semibold">
                  Task reminder for created deals
                </mp-text>
                <mp-text color="gray.600" font-size="sm" margin-top="2">
                  Create task reminder after deals are created.
                </mp-text>
              </mp-box>
            </mp-pseudo-box>
          </mp-flex>

          <mp-divider margin-y="8" />

          <mp-box margin-bottom="5">
            <mp-heading as="h2" font-size="xl">Workflows</mp-heading>
          </mp-box>

          <mp-table-container width="full" max-width="full" overflow="scroll">
            <mp-table>
              <mp-table-head>
                <mp-table-row cursor="pointer">
                  <mp-table-cell as="th">Name</mp-table-cell>
                  <mp-table-cell as="th">Last edit</mp-table-cell>
                  <mp-table-cell as="th" colspan="2">Status</mp-table-cell>
                </mp-table-row>
              </mp-table-head>
              <mp-table-body>
                <mp-table-row>
                  <mp-table-cell as="td">
                    <mp-text is-link>Untitled workflow</mp-text>
                  </mp-table-cell>
                  <mp-table-cell as="td">21 Jan 2023 at 09:20</mp-table-cell>
                  <mp-table-cell as="td">
                    <mp-badge variant="subtle" variant-color="green">
                      Active
                    </mp-badge>
                  </mp-table-cell>
                  <mp-table-cell as="td" text-align="right">
                    <mp-button variant="outline"> See detail </mp-button>
                  </mp-table-cell>
                </mp-table-row>
              </mp-table-body>
            </mp-table>
          </mp-table-container>

          <Pagination />
        </mp-box>
      </mp-box>
    </mp-flex>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpPseudoBox,
  MpFlex,
  MpIcon,
  MpDivider,
  MpHeading,
  MpText,
  MpButton,
  MpBadge,
  MpTableContainer,
  MpTable,
  MpTableHead,
  MpTableBody,
  MpTableRow,
  MpTableCell,
} from "@mekari/pixel";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Pagination from "../components/Pagination";

export default {
  name: "Workflow",
  components: {
    MpBox,
    MpPseudoBox,
    MpFlex,
    MpIcon,
    MpDivider,
    MpHeading,
    MpText,
    MpButton,
    MpBadge,
    MpTableContainer,
    MpTable,
    MpTableHead,
    MpTableBody,
    MpTableRow,
    MpTableCell,
    Header,
    Sidebar,
    Pagination,
  },
};
</script>