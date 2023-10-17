<template>
  <mp-box>
    <mp-flex :flex-direction="['column', 'row']">
      <mp-flex flex-direction="column" :width="['100%', '700px']">
        <mp-flex>
          <mp-flex flex="3 0 0%" padding-y="2">
            <mp-text color="gray.600" font-size="md" line-height="md">
              Status
            </mp-text>
          </mp-flex>
          <mp-flex flex="4 0 0%" justify-content="space-between" padding-y="2">
            <mp-badge variant="subtle" variant-color="green">
              Success
            </mp-badge>
          </mp-flex>
        </mp-flex>
        <mp-flex>
          <mp-flex flex="3 0 0%" padding-y="2">
            <mp-text color="gray.600" font-size="md" line-height="md">
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
            <mp-text color="gray.600" font-size="md" line-height="md">
              Billing date
            </mp-text>
          </mp-flex>
          <mp-flex flex="4 0 0%" justify-content="space-between" padding-y="2">
            <mp-text font-size="md" line-height="md"> 8 Jul 2022 </mp-text>
          </mp-flex>
        </mp-flex>
        <mp-flex>
          <mp-flex flex="3 0 0%" padding-y="2">
            <mp-text color="gray.600" font-size="md" line-height="md">
              Due date
            </mp-text>
          </mp-flex>
          <mp-flex flex="4 0 0%" justify-content="space-between" padding-y="2">
            <mp-text font-size="md" line-height="md">
              11 Aug 2022 (3 days)
            </mp-text>
          </mp-flex>
        </mp-flex>
        <mp-flex>
          <mp-flex flex="3 0 0%" padding-y="2">
            <mp-text color="gray.600" font-size="md" line-height="md">
              Duration
            </mp-text>
          </mp-flex>
          <mp-flex flex="4 0 0%" justify-content="space-between" padding-y="2">
            <mp-text font-size="md" line-height="md">
              8 Aug 2022 - 8 Aug 2023 (12 months)
            </mp-text>
          </mp-flex>
        </mp-flex>
        <mp-flex>
          <mp-flex flex="3 0 0%" padding-y="2">
            <mp-text color="gray.600" font-size="md" line-height="md">
              Free period
            </mp-text>
          </mp-flex>
          <mp-flex flex="4 0 0%" justify-content="space-between" padding-y="2">
            <mp-text color="gray.600" font-size="md" line-height="md">
              No free period
            </mp-text>
          </mp-flex>
        </mp-flex>
        <mp-flex>
          <mp-flex flex="3 0 0%" padding-y="2">
            <mp-text color="gray.600" font-size="md" line-height="md">
              Promotional code
            </mp-text>
          </mp-flex>
          <mp-flex flex="4 0 0%" justify-content="space-between" padding-y="2">
            <mp-text color="gray.600" font-size="md" line-height="md">
              Not applied
            </mp-text>
          </mp-flex>
        </mp-flex>
        <mp-flex>
          <mp-flex flex="3 0 0%" padding-y="2">
            <mp-text color="gray.600" font-size="md" line-height="md">
              Remarks
            </mp-text>
          </mp-flex>
          <mp-flex flex="4 0 0%" justify-content="space-between" padding-y="2">
            <mp-text font-size="md" line-height="md">
              Have spesific needs on scheduler attendance
            </mp-text>
          </mp-flex>
        </mp-flex>
      </mp-flex>
      <mp-flex flex-direction="column" :width="['100%', '700px']">
        <mp-flex>
          <mp-flex flex="3 0 0%" padding-y="2">
            <mp-text color="gray.600" font-size="md" line-height="md">
              Salesperson
            </mp-text>
          </mp-flex>
          <mp-flex flex="4 0 0%" justify-content="space-between" padding-y="2">
            <mp-text font-size="md" line-height="md">Kevin Chandra</mp-text>
          </mp-flex>
        </mp-flex>
        <mp-flex>
          <mp-flex flex="3 0 0%" padding-y="2">
            <mp-text color="gray.600" font-size="md" line-height="md">
              MMR tagging type
            </mp-text>
          </mp-flex>
          <mp-flex flex="4 0 0%" justify-content="space-between" padding-y="2">
            <mp-text font-size="md" line-height="md"> Renewal </mp-text>
          </mp-flex>
        </mp-flex>
        <mp-flex>
          <mp-flex flex="3 0 0%" padding-y="2">
            <mp-text color="gray.600" font-size="md" line-height="md">
              Category
            </mp-text>
          </mp-flex>
          <mp-flex flex="4 0 0%" justify-content="space-between" padding-y="2">
            <mp-text font-size="md" line-height="md"> Partner </mp-text>
          </mp-flex>
        </mp-flex>
        <mp-flex>
          <mp-flex flex="3 0 0%" padding-y="2">
            <mp-text color="gray.600" font-size="md" line-height="md">
              Secondary person
            </mp-text>
          </mp-flex>
          <mp-flex flex="4 0 0%" justify-content="space-between" padding-y="2">
            <mp-text font-size="md" line-height="md"> Adinda Putri </mp-text>
          </mp-flex>
        </mp-flex>
        <mp-flex>
          <mp-flex flex="3 0 0%" padding-y="2">
            <mp-text color="gray.600" font-size="md" line-height="md">
              Telesales
            </mp-text>
          </mp-flex>
          <mp-flex flex="4 0 0%" justify-content="space-between" padding-y="2">
            <mp-text font-size="md" line-height="md"> Michelle Devina </mp-text>
          </mp-flex>
        </mp-flex>
        <mp-flex>
          <mp-flex flex="3 0 0%" padding-y="2">
            <mp-text color="gray.600" font-size="md" line-height="md">
              Leadsource
            </mp-text>
          </mp-flex>
          <mp-flex flex="4 0 0%" justify-content="space-between" padding-y="2">
            <mp-text font-size="md" line-height="md"> Direct source </mp-text>
          </mp-flex>
        </mp-flex>
        <mp-flex>
          <mp-flex flex="3 0 0%" padding-y="2">
            <mp-text color="gray.600" font-size="md" line-height="md">
              Attachment
            </mp-text>
          </mp-flex>
          <mp-flex flex="4 0 0%" justify-content="space-between" padding-y="2">
            <mp-button variant="link">
              florakultura_MOM_contract.pdf
            </mp-button>
          </mp-flex>
        </mp-flex>
        <mp-flex>
          <mp-flex flex="3 0 0%" padding-y="2">
            <mp-text color="gray.600" font-size="md" line-height="md">
              Jurnal sales order ID
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
          Subscription package
        </mp-heading>
      </mp-flex>
    </mp-flex>

    <mp-table-container width="full" max-width="full" overflow="scroll">
      <mp-table>
        <mp-table-head>
          <mp-table-row cursor="pointer">
            <mp-table-cell as="th">Application</mp-table-cell>
            <mp-table-cell as="th">Service</mp-table-cell>
            <mp-table-cell as="th">Description</mp-table-cell>
            <mp-table-cell as="th">Type</mp-table-cell>
            <mp-table-cell as="th">Qty</mp-table-cell>
            <mp-table-cell as="th" text-align="right">
              Unit price
            </mp-table-cell>
            <mp-table-cell as="th">Duration</mp-table-cell>
            <mp-table-cell as="th">Discount</mp-table-cell>
            <mp-table-cell as="th" text-align="right">
              Total price
            </mp-table-cell>
            <mp-table-cell as="th" />
          </mp-table-row>
        </mp-table-head>
        <mp-table-body>
          <mp-table-row>
            <mp-table-cell as="td">Jurnal</mp-table-cell>
            <mp-table-cell as="td">Enterprise</mp-table-cell>
            <mp-table-cell as="td">
              JCI-010-2022 <br />
              | Jurnal - Enterprise Package <br />
              | Activate Next Month
            </mp-table-cell>
            <mp-table-cell as="td">Main package</mp-table-cell>
            <mp-table-cell as="td">1</mp-table-cell>
            <mp-table-cell as="td">
              <mp-text text-align="right">Rp539.639,63</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td"> 12 month </mp-table-cell>
            <mp-table-cell as="td"> 0% </mp-table-cell>
            <mp-table-cell as="td">
              <mp-text text-align="right">Rp6.475.675,56</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td">
              <mp-icon name="doc" variant="duotone" margin-right="2" />
            </mp-table-cell>
          </mp-table-row>
          <mp-table-row>
            <mp-table-cell as="td">Jurnal</mp-table-cell>
            <mp-table-cell as="td">Advance Invoicing</mp-table-cell>
            <mp-table-cell as="td">-</mp-table-cell>
            <mp-table-cell as="td">Add ons</mp-table-cell>
            <mp-table-cell as="td">1</mp-table-cell>
            <mp-table-cell as="td">
              <mp-text text-align="right">Rp53.153,15</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td"> 12 month </mp-table-cell>
            <mp-table-cell as="td"> 0% </mp-table-cell>
            <mp-table-cell as="td">
              <mp-text text-align="right">Rp637.621,80</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td">
              <mp-icon name="doc" variant="duotone" margin-right="2" />
            </mp-table-cell>
          </mp-table-row>
        </mp-table-body>
      </mp-table>
    </mp-table-container>

    <mp-flex
      :border="['1px solid', '0px solid']"
      border-color="gray.100"
      border-radius="md"
      :padding="['4', '0']"
      justify-content="end"
      position="relative"
      margin-top="11"
    >
      <mp-flex flex-basis="428px" flex-direction="column">
        <mp-flex justify-content="space-between" margin-bottom="2">
          <mp-flex>
            <mp-text font-weight="semibold">Main package</mp-text>
          </mp-flex>
          <mp-flex>
            <mp-text font-weight="semibold">Rp6.475.675,56</mp-text>
          </mp-flex>
        </mp-flex>
        <mp-flex justify-content="space-between">
          <mp-flex>
            <mp-text font-weight="semibold">Add-ons</mp-text>
          </mp-flex>
          <mp-flex>
            <mp-text font-weight="semibold">Rp637.621,80</mp-text>
          </mp-flex>
        </mp-flex>
        <mp-divider />
        <mp-flex justify-content="space-between" margin-bottom="2">
          <mp-flex>
            <mp-text>Discount</mp-text>
          </mp-flex>
          <mp-flex>
            <mp-text>-Rp0</mp-text>
          </mp-flex>
        </mp-flex>
        <mp-flex justify-content="space-between" margin-bottom="2">
          <mp-flex>
            <mp-text>Additional discount</mp-text>
          </mp-flex>
          <mp-flex>
            <mp-text>-Rp0</mp-text>
          </mp-flex>
        </mp-flex>
        <mp-flex justify-content="space-between">
          <mp-flex>
            <mp-text font-weight="semibold">Subtotal before tax</mp-text>
          </mp-flex>
          <mp-flex>
            <mp-text font-weight="semibold">Rp7.465.320</mp-text>
          </mp-flex>
        </mp-flex>
        <mp-divider />
        <mp-flex justify-content="space-between">
          <mp-flex>
            <mp-text>Tax 11%</mp-text>
          </mp-flex>
          <mp-flex>
            <mp-text>Rp821.185,2</mp-text>
          </mp-flex>
        </mp-flex>
        <mp-divider />
        <mp-flex justify-content="space-between">
          <mp-flex flex-direction="column">
            <mp-text font-size="lg" font-weight="semibold">Net amount</mp-text>
            <mp-text color="gray.600" font-size="sm">*Rounding price</mp-text>
          </mp-flex>
          <mp-flex flex-direction="column">
            <mp-text font-size="lg" font-weight="semibold">
              Rp13.668.000
            </mp-text>
          </mp-flex>
        </mp-flex>
      </mp-flex>
    </mp-flex>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpButton,
  MpIcon,
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
} from "@mekari/pixel";

export default {
  name: "ViewProformaInvoiceTabA",
  components: {
    MpBox,
    MpFlex,
    MpButton,
    MpIcon,
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
  },
};
</script>
