<template>
  <mp-box>
    <mp-flex :flex-direction="['column', 'row']">
      <mp-flex flex-direction="column" :width="['100%', '700px']">
        <mp-flex>
          <mp-flex flex="3 0 0%" padding-y="2">
            <mp-text
              color="gray.600"
              font-size="md"
              line-height="md"
              :margin-right="[4, 0]"
            >
              Status
            </mp-text>
          </mp-flex>
          <mp-flex flex="4 0 0%" justify-content="space-between" padding-y="2">
            <mp-badge variant="subtle" variant-color="red">
              Outstanding
            </mp-badge>
          </mp-flex>
        </mp-flex>
        <mp-flex>
          <mp-flex flex="3 0 0%" padding-y="2">
            <mp-text
              color="gray.600"
              font-size="md"
              line-height="md"
              :margin-right="[4, 0]"
            >
              Company legal name
            </mp-text>
          </mp-flex>
          <mp-flex flex="4 0 0%" justify-content="space-between" padding-y="2">
            <mp-text font-size="md" line-height="md" is-link>
              PT. Flora Kultura
            </mp-text>
          </mp-flex>
        </mp-flex>
        <mp-flex>
          <mp-flex flex="3 0 0%" padding-y="2">
            <mp-text
              color="gray.600"
              font-size="md"
              line-height="md"
              :margin-right="[4, 0]"
            >
              Net amount
            </mp-text>
          </mp-flex>
          <mp-flex flex="4 0 0%" justify-content="space-between" padding-y="2">
            <mp-text font-size="md" line-height="md"> Rp13.668.000 </mp-text>
          </mp-flex>
        </mp-flex>
        <mp-flex>
          <mp-flex flex="3 0 0%" padding-y="2">
            <mp-text
              color="gray.600"
              font-size="md"
              line-height="md"
              :margin-right="[4, 0]"
            >
              Paid amount
            </mp-text>
          </mp-flex>
          <mp-flex flex="4 0 0%" justify-content="space-between" padding-y="2">
            <mp-text font-size="md" line-height="md"> Rp0 </mp-text>
          </mp-flex>
        </mp-flex>
        <mp-flex>
          <mp-flex flex="3 0 0%" padding-y="2">
            <mp-text
              color="gray.600"
              font-size="md"
              line-height="md"
              :margin-right="[4, 0]"
            >
              Outstanding amount
            </mp-text>
          </mp-flex>
          <mp-flex flex="4 0 0%" justify-content="space-between" padding-y="2">
            <mp-text font-size="md" line-height="md"> Rp13.668.000 </mp-text>
          </mp-flex>
        </mp-flex>
      </mp-flex>
      <mp-flex flex-direction="column" :width="['100%', '700px']">
        <mp-flex>
          <mp-flex flex="3 0 0%" padding-y="2">
            <mp-text
              color="gray.600"
              font-size="md"
              line-height="md"
              :margin-right="[4, 0]"
            >
              Proforma invoice ID
            </mp-text>
          </mp-flex>
          <mp-flex flex="4 0 0%" justify-content="space-between" padding-y="2">
            <mp-text font-size="md" line-height="md" is-link>
              BPI/2022/08/00499
            </mp-text>
          </mp-flex>
        </mp-flex>
        <mp-flex>
          <mp-flex flex="3 0 0%" padding-y="2">
            <mp-text
              color="gray.600"
              font-size="md"
              line-height="md"
              :margin-right="[4, 0]"
            >
              Jurnal SI
            </mp-text>
          </mp-flex>
          <mp-flex flex="4 0 0%" justify-content="space-between" padding-y="2">
            <mp-text font-size="md" line-height="md" is-link> 89102 </mp-text>
          </mp-flex>
        </mp-flex>
      </mp-flex>
    </mp-flex>

    <mp-divider margin-y="6" />

    <mp-flex flex-direction="column">
      <mp-flex flex="1 0 auto" padding-bottom="6">
        <mp-heading as="h2" color="dark" font-size="xl">
          Payment receipt
        </mp-heading>
      </mp-flex>
    </mp-flex>

    <mp-flex gap="4" justify-content="space-between" margin-bottom="5">
      <mp-flex gap="4">
        <mp-box :display="['none', 'block']">
          <mp-select size="md" value="all-status" width="200px">
            <option value="all-status">All status</option>
            <option value="outstanding">Outstanding</option>
            <option value="paid">Paid</option>
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
              ID
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Payment ID
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Type
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Date created
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Method
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th" text-align="right">
              Net amount
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Payment status
              <mp-icon name="sort-default" />
            </mp-table-cell>
          </mp-table-row>
        </mp-table-head>
        <mp-table-body>
          <mp-table-row>
            <mp-table-cell as="td">4084</mp-table-cell>
            <mp-table-cell as="td">BP/2022/08/00185</mp-table-cell>
            <mp-table-cell as="td">SI Payment</mp-table-cell>
            <mp-table-cell as="td">1/1/2022</mp-table-cell>
            <mp-table-cell as="td">Bank transfer</mp-table-cell>
            <mp-table-cell as="td">
              <mp-text text-align="right">Rp8.184.000</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td">
              <mp-badge variant="subtle" variant-color="green"> Paid </mp-badge>
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
  MpIcon,
  MpButton,
  MpBadge,
  MpText,
  MpHeading,
  MpDivider,
  MpTableContainer,
  MpTable,
  MpTableHead,
  MpTableBody,
  MpTableRow,
  MpTableCell,
  MpSelect,
  MpInput,
  MpInputGroup,
  MpInputLeftAddon,
} from "@mekari/pixel";
import Pagination from "../../components/Pagination";

export default {
  name: "ViewClientInvoiceTabA",
  components: {
    MpBox,
    MpFlex,
    MpIcon,
    MpButton,
    MpBadge,
    MpText,
    MpHeading,
    MpDivider,
    MpTableContainer,
    MpTable,
    MpTableHead,
    MpTableBody,
    MpTableRow,
    MpTableCell,
    MpSelect,
    MpInput,
    MpInputGroup,
    MpInputLeftAddon,
    Pagination,
  },
};
</script>
