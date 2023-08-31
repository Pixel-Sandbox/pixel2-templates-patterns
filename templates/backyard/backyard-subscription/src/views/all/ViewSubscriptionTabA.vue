<template>
  <mp-box>
    <mp-box :width="['100%', '700px']">
      <mp-flex flex="1 0 auto" padding-top="6" padding-bottom="3">
        <mp-heading as="h2" color="dark" font-size="xl">
          Trial Enterprise
          <mp-badge variant="subtle" variant-color="green" margin-left="2">
            Active
          </mp-badge>
        </mp-heading>
      </mp-flex>
      <mp-flex>
        <mp-flex flex="2 0 0%" padding-y="2">
          <mp-text color="gray.600" font-size="md" line-height="md">
            Application
          </mp-text>
        </mp-flex>
        <mp-flex flex="4 0 0%" justify-content="space-between" padding-y="2">
          <mp-text font-size="md" line-height="md">Jurnal</mp-text>
        </mp-flex>
      </mp-flex>
      <mp-flex>
        <mp-flex flex="2 0 0%" padding-y="2">
          <mp-text color="gray.600" font-size="md" line-height="md">
            Company
          </mp-text>
        </mp-flex>
        <mp-flex flex="4 0 0%" justify-content="space-between" padding-y="2">
          <mp-text font-size="md" line-height="md" is-link>
            PT. Flora Kultura
          </mp-text>
        </mp-flex>
      </mp-flex>
      <mp-flex>
        <mp-flex flex="2 0 0%" padding-y="2">
          <mp-text color="gray.600" font-size="md" line-height="md">
            Duration
          </mp-text>
        </mp-flex>
        <mp-flex flex="4 0 0%" justify-content="space-between" padding-y="2">
          <mp-text font-size="md" line-height="md">
            1 Aug 2022 - 7 Aug 2023 (7 days)
          </mp-text>
        </mp-flex>
      </mp-flex>
      <mp-flex>
        <mp-flex flex="2 0 0%" padding-y="2">
          <mp-text color="gray.600" font-size="md" line-height="md">
            Package quota
          </mp-text>
        </mp-flex>
        <mp-flex flex="4 0 0%" justify-content="space-between" padding-y="2">
          <mp-text font-size="md" line-height="md">7 users</mp-text>
        </mp-flex>
      </mp-flex>
      <mp-flex>
        <mp-flex flex="2 0 0%" padding-y="2">
          <mp-text color="gray.600" font-size="md" line-height="md">
            Additional quota
          </mp-text>
        </mp-flex>
        <mp-flex flex="4 0 0%" justify-content="space-between" padding-y="2">
          <mp-text font-size="md" line-height="md">1 users</mp-text>
        </mp-flex>
      </mp-flex>
      <mp-flex>
        <mp-flex flex="2 0 0%" padding-y="2">
          <mp-text color="gray.600" font-size="md" line-height="md">
            Add-ons
          </mp-text>
        </mp-flex>
        <mp-flex flex="4 0 0%" justify-content="space-between" padding-y="2">
          <mp-text color="gray.600" font-size="md" line-height="md">
            No active add-ons
          </mp-text>
        </mp-flex>
      </mp-flex>
    </mp-box>

    <mp-divider margin-y="6" />

    <mp-flex flex="1 0 auto" padding-bottom="6">
      <mp-heading as="h2" color="dark" font-size="xl">
        Proforma invoice
      </mp-heading>
    </mp-flex>
    <mp-flex gap="4" justify-content="space-between" margin-bottom="5">
      <mp-flex gap="4">
        <mp-box :display="['none', 'block']">
          <mp-select size="md" value="all-status" width="200px">
            <option value="all-status">All billing status</option>
            <option value="active">Active</option>
            <option value="pending">Pending</option>
            <option value="expired">Expired</option>
            <option value="voided">Voided</option>
            <option value="not-enabled">Not enabled</option>
          </mp-select>
        </mp-box>
        <mp-box :display="['block', 'none']">
          <mp-button variant="outline" :padding-x="['2', '4']">
            <mp-icon name="filter" variant="duotone" :margin-right="[0, 2]" />
          </mp-button>
        </mp-box>
      </mp-flex>
      <mp-flex gap="2" :flex="['1 0 auto', '0 0 auto']" align-items="center">
        <mp-input-group>
          <mp-input-left-addon :with-background="false">
            <mp-icon name="search" size="sm" />
          </mp-input-left-addon>
          <mp-input placeholder="Search..." />
        </mp-input-group>
      </mp-flex>
    </mp-flex>

    <mp-table-container width="full" max-width="full" overflow="scroll">
      <mp-table>
        <mp-table-head>
          <mp-table-row cursor="pointer">
            <mp-table-cell as="th">
              Proforma ID
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Created date
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Active date
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              End date
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th" text-align="right">
              Billing amount
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Billing status
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Payment status
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th" />
          </mp-table-row>
        </mp-table-head>
        <mp-table-body>
          <mp-table-row>
            <mp-table-cell as="td">
              <mp-text as="a" is-link>BPI/2022/08/00498</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td">1/1/2023</mp-table-cell>
            <mp-table-cell as="td">1/1/2024</mp-table-cell>
            <mp-table-cell as="td">1/1/2024</mp-table-cell>
            <mp-table-cell as="td">
              <mp-text text-align="right">Rp0</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td">
              <mp-badge variant="subtle" variant-color="green">
                Active
              </mp-badge>
            </mp-table-cell>
            <mp-table-cell as="td">
              <mp-badge variant="subtle" variant-color="green">Paid</mp-badge>
            </mp-table-cell>
            <mp-table-cell as="td" :display="['none', 'table-cell']">
              <mp-popover use-portal>
                <mp-popover-trigger>
                  <mp-button variant="outline" rightIcon="caret-down">
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
                    <mp-popover-list-item>View detail</mp-popover-list-item>
                    <mp-popover-list-item>
                      View SO in Jurnal
                    </mp-popover-list-item>
                    <mp-popover-list-item>
                      View payment link
                    </mp-popover-list-item>
                  </mp-popover-list>
                </mp-popover-content>
              </mp-popover>
            </mp-table-cell>
            <mp-table-cell as="td" :display="['table-cell', 'none']">
              <mp-button variant="outline" rightIcon="caret-down">
                Actions
              </mp-button>
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
  MpButton,
  MpIcon,
  MpSelect,
  MpBadge,
  MpInput,
  MpInputGroup,
  MpInputLeftAddon,
  MpText,
  MpHeading,
  MpDivider,
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
import Pagination from "../../components/Pagination";

export default {
  name: "ViewSubscriptionTabA",
  components: {
    MpBox,
    MpFlex,
    MpButton,
    MpIcon,
    MpSelect,
    MpBadge,
    MpInput,
    MpInputGroup,
    MpInputLeftAddon,
    MpText,
    MpHeading,
    MpDivider,
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
