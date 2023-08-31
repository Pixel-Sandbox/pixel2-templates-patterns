<template>
  <mp-box>
    <mp-table-container width="full" max-width="full" overflow="scroll">
      <mp-table>
        <mp-table-head is-fixed>
          <mp-table-row cursor="pointer">
            <mp-table-cell as="th" width="160px" min-width="160px">
              Created at
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th" width="160px" min-width="160px">
              No. sales order
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th" width="210px" min-width="210px">
              Program
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th" width="210px" min-width="210px">
              Referral code
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th" width="180px" min-width="180px">
              Agent name
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell
              as="th"
              width="180px"
              min-width="180px"
              text-align="right"
            >
              Subscription amount
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell
              as="th"
              width="180px"
              min-width="180px"
              text-align="right"
            >
              Gross commission
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell
              as="th"
              width="160px"
              min-width="160px"
              text-align="right"
            >
              Tax rate
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell
              as="th"
              width="160px"
              min-width="160px"
              text-align="right"
            >
              Tax commission
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell
              as="th"
              width="160px"
              min-width="160px"
              text-align="right"
            >
              Net commission
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th" width="140px" min-width="140px">
              Bank name
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell
              as="th"
              width="160px"
              min-width="160px"
              text-align="right"
            >
              Bank account number
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th" width="210px" min-width="210px">
              Bank account holder
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th" width="120px" min-width="120px">
              ID type
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell
              as="th"
              width="180px"
              min-width="180px"
              text-align="right"
            >
              ID number
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th" width="300px" min-width="300px">
              Address
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th" width="210px" min-width="210px">
              Status
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell
              as="th"
              width="auto"
              min-width="auto"
              z-index="base"
              top="0"
              right="0"
              box-shadow="inset 2px 0px #D0D6DD"
              is-fixed
              :display="['none', 'table-cell']"
            />
            <mp-table-cell
              as="th"
              width="auto"
              min-width="auto"
              border-bottom="0px"
              z-index="base"
              :display="['table-cell', 'none']"
            />
          </mp-table-row>
        </mp-table-head>
        <mp-table-body>
          <mp-table-row>
            <mp-table-cell as="td">1/1/2023</mp-table-cell>
            <mp-table-cell as="td">
              <mp-text as="a" is-link>18129211</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td">Referral Mekari Jurnal</mp-table-cell>
            <mp-table-cell as="td">budisudirman21</mp-table-cell>
            <mp-table-cell as="td">Budi Sudirman</mp-table-cell>
            <mp-table-cell as="td" text-align="right">
              Rp6.300.000
            </mp-table-cell>
            <mp-table-cell as="td" text-align="right">
              Rp1.135.135
            </mp-table-cell>
            <mp-table-cell as="td" text-align="right">2.50%</mp-table-cell>
            <mp-table-cell as="td" text-align="right">Rp28.378</mp-table-cell>
            <mp-table-cell as="td" text-align="right">
              Rp1.106.757
            </mp-table-cell>
            <mp-table-cell as="td">Mandiri</mp-table-cell>
            <mp-table-cell as="td" text-align="right">9029212333</mp-table-cell>
            <mp-table-cell as="td">Budi Sudirman</mp-table-cell>
            <mp-table-cell as="td">
              Personal <br />
              NPWP
            </mp-table-cell>
            <mp-table-cell as="td" text-align="right">
              93.972.215.4-542.000
            </mp-table-cell>
            <mp-table-cell as="td">
              Jl. Terusan cigadung No. 21 Bandung
            </mp-table-cell>
            <mp-table-cell as="td">
              <mp-badge variant="subtle" variant-color="orange">
                Need granted
              </mp-badge>
            </mp-table-cell>
            <mp-table-cell
              as="td"
              right="0"
              box-shadow="inset 2px 0px #D0D6DD"
              :display="['none', 'table-cell']"
              is-fixed
            >
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
                    <mp-popover-list-item @click="onApproveModalToggle(true)">
                      Grant commission
                    </mp-popover-list-item>
                    <mp-popover-list-item @click="onRejectModalToggle(true)">
                      Reject commission
                    </mp-popover-list-item>
                    <mp-popover-list-item
                      as="router-link"
                      to="/view-commission"
                    >
                      View detail
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
          <mp-table-row>
            <mp-table-cell as="td">1/1/2023</mp-table-cell>
            <mp-table-cell as="td">
              <mp-text as="a" is-link>18129211</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td">Referral Mekari Jurnal</mp-table-cell>
            <mp-table-cell as="td">budisudirman21</mp-table-cell>
            <mp-table-cell as="td">Budi Sudirman</mp-table-cell>
            <mp-table-cell as="td" text-align="right">
              Rp6.300.000
            </mp-table-cell>
            <mp-table-cell as="td" text-align="right">
              Rp1.135.135
            </mp-table-cell>
            <mp-table-cell as="td" text-align="right">2.50%</mp-table-cell>
            <mp-table-cell as="td" text-align="right">Rp28.378</mp-table-cell>
            <mp-table-cell as="td" text-align="right">
              Rp1.106.757
            </mp-table-cell>
            <mp-table-cell as="td">Mandiri</mp-table-cell>
            <mp-table-cell as="td" text-align="right">9029212333</mp-table-cell>
            <mp-table-cell as="td">Budi Sudirman</mp-table-cell>
            <mp-table-cell as="td">
              Personal <br />
              NPWP
            </mp-table-cell>
            <mp-table-cell as="td" text-align="right">
              93.972.215.4-542.000
            </mp-table-cell>
            <mp-table-cell as="td">
              Jl. Terusan cigadung No. 21 Bandung
            </mp-table-cell>
            <mp-table-cell as="td">
              <mp-badge variant="subtle" variant-color="red">
                Commission rejected
              </mp-badge>
            </mp-table-cell>
            <mp-table-cell
              as="td"
              right="0"
              box-shadow="inset 2px 0px #D0D6DD"
              :display="['none', 'table-cell']"
              is-fixed
            >
              <mp-button variant="outline" rightIcon="caret-down">
                Actions
              </mp-button>
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
    <DisbursementRejectCommissionModal
      :isModalOpen="isRejectModalOpen"
      :onModalToggle="onRejectModalToggle"
    />
    <DisbursementApproveCommissionModal
      :isModalOpen="isApproveModalOpen"
      :onModalToggle="onApproveModalToggle"
    />
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpIcon,
  MpButton,
  MpBadge,
  MpText,
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
import DisbursementRejectCommissionModal from "./DisbursementRejectCommissionModal";
import DisbursementApproveCommissionModal from "./DisbursementApproveCommissionModal";

export default {
  name: "DisbursementTableTabB",
  components: {
    MpBox,
    MpIcon,
    MpButton,
    MpBadge,
    MpText,
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
    DisbursementRejectCommissionModal,
    DisbursementApproveCommissionModal,
  },
  data: function () {
    return {
      isRejectModalOpen: false,
      isApproveModalOpen: false,
    };
  },
  methods: {
    onRejectModalToggle: function (data) {
      this.isRejectModalOpen = data;
    },
    onApproveModalToggle: function (data) {
      this.isApproveModalOpen = data;
    },
  },
};
</script>