<template>
  <mp-box>
    <mp-table-container width="full" max-width="full" overflow="scroll">
      <mp-table>
        <mp-table-head>
          <mp-table-row cursor="pointer">
            <mp-table-cell as="th">
              Structure name
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Description
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Period
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Salary component
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th" colspan="2">
              Status
              <mp-icon name="sort-default" />
            </mp-table-cell>
          </mp-table-row>
        </mp-table-head>
        <mp-table-body>
          <mp-table-row>
            <mp-table-cell as="td">
              <mp-text is-link>
                Salary Structure Customer Support & <br />
                Marketing 2024
              </mp-text>
            </mp-table-cell>
            <mp-table-cell as="td">
              <mp-text>
                Salary structure by branch, organization, <br />
                and job position for Customer Support &
              </mp-text>
              <mp-text font-size="sm" is-link> View details </mp-text>
            </mp-table-cell>
            <mp-table-cell as="td">2024</mp-table-cell>
            <mp-table-cell as="td">Salary</mp-table-cell>
            <mp-table-cell as="td">
              <mp-badge variant="subtle" variant-color="gray">
                Unlocked
              </mp-badge>
            </mp-table-cell>
            <mp-table-cell as="td">
              <mp-flex justify-content="flex-end" align-items="center">
                <mp-popover>
                  <mp-popover-trigger>
                    <mp-button variant="outline" right-icon="caret-down">
                      Actions
                    </mp-button>
                  </mp-popover-trigger>
                  <mp-popover-content
                    max-width="40"
                    bg="white"
                    rounded="md"
                    shadow="lg"
                    border="1px solid"
                    border-color="gray.400"
                  >
                    <mp-popover-list display="grid">
                      <mp-popover-list-item as="router-link" to="/detail">View details</mp-popover-list-item>
                      <mp-popover-list-item>
                        Lock structure
                      </mp-popover-list-item>
                      <mp-popover-list-item>Send report</mp-popover-list-item>
                      <mp-popover-list-item>
                        Download report
                      </mp-popover-list-item>
                      <mp-popover-list-item>
                        Edit structure
                      </mp-popover-list-item>
                      <mp-popover-list-item>
                        Delete structure
                      </mp-popover-list-item>
                    </mp-popover-list>
                  </mp-popover-content>
                </mp-popover>
              </mp-flex>
            </mp-table-cell>
          </mp-table-row>
          <mp-table-row>
            <mp-table-cell as="td">
              <mp-text is-link> Benefit Structure Product Manager </mp-text>
            </mp-table-cell>
            <mp-table-cell as="td">
              <mp-text>
                Benefit structure by branch, organization, <br />
                and job position for Product Manager.
              </mp-text>
            </mp-table-cell>
            <mp-table-cell as="td">2024</mp-table-cell>
            <mp-table-cell as="td">Benefit</mp-table-cell>
            <mp-table-cell as="td">
              <mp-badge variant="subtle" variant-color="green">
                Locked
              </mp-badge>
            </mp-table-cell>
            <mp-table-cell as="td">
              <mp-flex justify-content="flex-end" align-items="center">
                <mp-popover>
                  <mp-popover-trigger>
                    <mp-button variant="outline" right-icon="caret-down">
                      Actions
                    </mp-button>
                  </mp-popover-trigger>
                  <mp-popover-content
                    max-width="40"
                    bg="white"
                    rounded="md"
                    shadow="lg"
                    border="1px solid"
                    border-color="gray.400"
                  >
                    <mp-popover-list display="grid">
                      <mp-popover-list-item>View details</mp-popover-list-item>
                      <mp-popover-list-item>
                        Lock structure
                      </mp-popover-list-item>
                      <mp-popover-list-item>Send report</mp-popover-list-item>
                      <mp-popover-list-item>
                        Download report
                      </mp-popover-list-item>
                      <mp-popover-list-item>
                        Edit structure
                      </mp-popover-list-item>
                      <mp-popover-list-item>
                        Delete structure
                      </mp-popover-list-item>
                    </mp-popover-list>
                  </mp-popover-content>
                </mp-popover>
              </mp-flex>
            </mp-table-cell>
          </mp-table-row>
        </mp-table-body>
      </mp-table>
    </mp-table-container>

    <Pagination />
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpText,
  MpButton,
  MpBadge,
  MpIcon,
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
import Pagination from "../components/Pagination.vue";

export default {
  name: "SalaryStructureTable",
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpButton,
    MpBadge,
    MpIcon,
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
    Pagination,
  },
};
</script>