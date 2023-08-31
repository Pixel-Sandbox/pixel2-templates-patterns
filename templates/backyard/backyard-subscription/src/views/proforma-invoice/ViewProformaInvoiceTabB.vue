<template>
  <mp-box>
    <mp-flex gap="4" justify-content="space-between" margin-bottom="5">
      <mp-flex gap="4">
        <mp-box :display="['none', 'block']">
          <mp-select size="md" value="all-status" width="200px">
            <option value="all-status">All status</option>
            <option value="outstanding">Outstanding</option>
            <option value="paid">Paid</option>
            <option value="overdue">Overdue</option>
            <option value="voided">Voided</option>
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
              Invoice ID
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Created date
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th" text-align="right">
              Billing amount
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th" colspan="2">
              Payment status
              <mp-icon name="sort-default" />
            </mp-table-cell>
          </mp-table-row>
        </mp-table-head>
        <mp-table-body>
          <mp-table-row>
            <mp-table-cell as="td">
              <mp-text as="a" is-link>BI/2022/08/00286</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td">1/1/2023</mp-table-cell>
            <mp-table-cell as="td">
              <mp-text text-align="right">Rp13.668.000</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td">
              <mp-badge variant="subtle" variant-color="gray">
                Outstanding
              </mp-badge>
            </mp-table-cell>
            <mp-table-cell as="td">
              <mp-button variant="outline" right-icon="caret-down">
                Actions
              </mp-button>
            </mp-table-cell>
          </mp-table-row>
          <mp-table-row>
            <mp-table-cell as="td">
              <mp-text as="a" is-link>BI/2022/08/00285</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td">1/2/2021</mp-table-cell>
            <mp-table-cell as="td">
              <mp-text text-align="right">Rp0</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td">
              <mp-badge variant="subtle" variant-color="green"> Paid </mp-badge>
            </mp-table-cell>
            <mp-table-cell as="td">
              <mp-button variant="outline" right-icon="caret-down">
                Actions
              </mp-button>
            </mp-table-cell>
          </mp-table-row>
          <mp-table-row>
            <mp-table-cell as="td">
              <mp-text as="a" is-link>BI/2022/08/00284</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td">3/4/2020</mp-table-cell>
            <mp-table-cell as="td">
              <mp-text text-align="right">Rp0</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td">
              <mp-badge variant="subtle" variant-color="red">
                Overdue
              </mp-badge>
            </mp-table-cell>
            <mp-table-cell as="td">
              <mp-button variant="outline" right-icon="caret-down">
                Actions
              </mp-button>
            </mp-table-cell>
          </mp-table-row>
          <mp-table-row>
            <mp-table-cell as="td">
              <mp-text as="a" is-link>BI/2022/08/00283</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td">8/7/2020</mp-table-cell>
            <mp-table-cell as="td">
              <mp-text text-align="right">Rp0</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td">
              <mp-badge variant="subtle" variant-color="red">
                Uncollectible
              </mp-badge>
            </mp-table-cell>
            <mp-table-cell as="td">
              <mp-button variant="outline" right-icon="caret-down">
                Actions
              </mp-button>
            </mp-table-cell>
          </mp-table-row>
          <mp-table-row>
            <mp-table-cell as="td">
              <mp-text as="a" is-link>BI/2022/08/00283</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td">8/7/2020</mp-table-cell>
            <mp-table-cell as="td">
              <mp-text text-align="right">Rp0</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td">
              <mp-badge variant="subtle" variant-color="red"> Voided </mp-badge>
            </mp-table-cell>
            <mp-table-cell as="td">
              <mp-button variant="outline" right-icon="caret-down">
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
  MpTableContainer,
  MpTable,
  MpTableHead,
  MpTableBody,
  MpTableRow,
  MpTableCell,
} from "@mekari/pixel";
import Pagination from "../../components/Pagination";

export default {
  name: "ViewProformaInvoiceTabB",
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
    MpTableContainer,
    MpTable,
    MpTableHead,
    MpTableBody,
    MpTableRow,
    MpTableCell,
    Pagination,
  },
};
</script>
