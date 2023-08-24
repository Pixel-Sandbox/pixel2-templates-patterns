<template>
  <mp-box>
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 60px)">
      <Sidebar default-is-toggle is-custom with-child />
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
            <mp-heading as="h1" font-size="2xl" font-weight="bold">
              Auto generate format
            </mp-heading>
          </mp-box>
          <mp-flex gap="2">
            <mp-button variant="outline">
              <mp-icon
                name="help"
                variant="duotone"
                size="sm"
                margin-right="2"
              />
              Guidebook
            </mp-button>
            <mp-button>Create format</mp-button>
          </mp-flex>
        </mp-flex>
        <mp-box
          min-height="calc(100vh - 132px)"
          border-top-width="1px"
          border-left-width="1px"
          border-top-left-radius="md"
          border-color="gray.100"
          background-color="white"
          padding="6"
        >
          <mp-table-container width="full" max-width="full" overflow="scroll">
            <mp-table>
              <mp-table-head>
                <mp-table-row cursor="pointer">
                  <mp-table-cell as="th">Type</mp-table-cell>
                  <mp-table-cell as="th">Component</mp-table-cell>
                  <mp-table-cell as="th">New format</mp-table-cell>
                  <mp-table-cell as="th">Last format</mp-table-cell>
                  <mp-table-cell as="th" />
                </mp-table-row>
              </mp-table-head>
              <mp-table-body>
                <mp-table-row>
                  <mp-table-cell as="td">Employee ID</mp-table-cell>
                  <mp-table-cell as="td">
                    <mp-flex gap="2">
                      <mp-tag size="sm" variant="gray">Text</mp-tag>
                      <mp-tag size="sm" variant="gray">Join date</mp-tag>
                      <mp-tag size="sm" variant="gray">Increment number</mp-tag>
                    </mp-flex>
                  </mp-table-cell>
                  <mp-table-cell as="td">MKR-170823001</mp-table-cell>
                  <mp-table-cell as="td">MKR-170823089</mp-table-cell>
                  <mp-table-cell as="td" text-align="right">
                    <mp-popover>
                      <mp-popover-trigger>
                        <mp-button variant="outline" right-icon="caret-down">
                          Actions
                        </mp-button>
                      </mp-popover-trigger>
                      <mp-popover-content
                        max-width="40"
                        background-color="white"
                        border-radius="md"
                        box-shadow="lg"
                        border-width="1px"
                        border-color="gray.400"
                      >
                        <mp-popover-list>
                          <mp-popover-list-item as="router-link" to="/edit">
                            Edit
                          </mp-popover-list-item>
                          <mp-popover-list-item>Delete</mp-popover-list-item>
                        </mp-popover-list>
                      </mp-popover-content>
                    </mp-popover>
                  </mp-table-cell>
                </mp-table-row>
              </mp-table-body>
            </mp-table>
          </mp-table-container>
        </mp-box>
      </mp-box>
    </mp-flex>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpIcon,
  MpButton,
  MpHeading,
  MpTag,
  MpTableContainer,
  MpTable,
  MpTableHead,
  MpTableBody,
  MpTableRow,
  MpTableCell,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
} from "@mekari/pixel";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default {
  name: "AutoGenerateFormat",
  components: {
    MpBox,
    MpFlex,
    MpIcon,
    MpButton,
    MpHeading,
    MpTag,
    MpTableContainer,
    MpTable,
    MpTableHead,
    MpTableBody,
    MpTableRow,
    MpTableCell,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
    Header,
    Sidebar,
  },
};
</script>