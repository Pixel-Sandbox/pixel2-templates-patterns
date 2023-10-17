<template>
  <mp-box>
    <mp-table-container width="full" max-width="full" overflow="scroll">
      <mp-table>
        <mp-table-head>
          <mp-table-row cursor="pointer">
            <mp-table-cell as="th">
              Period
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Last updates
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Total employee
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Report
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th" colspan="2">
              Payroll status
              <mp-tooltip
                position="bottom"
                label="The status will change to complete if the process of calculating payroll, approving payroll, and sending payslip is complete."
              >
                <mp-icon name="info" />
              </mp-tooltip>
              <mp-icon name="sort-default" />
            </mp-table-cell>
          </mp-table-row>
        </mp-table-head>
        <mp-table-body>
          <mp-table-row>
            <mp-table-cell as="td">April 2022</mp-table-cell>
            <mp-table-cell as="td">
              <mp-text as="p">Rizal Chandra</mp-text>
              <mp-text as="p" color="gray.600" font-size="sm">
                30 Apr 2022 21:00
              </mp-text>
            </mp-table-cell>
            <mp-table-cell as="td">110</mp-table-cell>
            <mp-table-cell as="td">
              <mp-flex gap="1">
                <mp-icon name="doc" size="sm" variant="duotone" />
                <mp-button variant="link">View</mp-button>
              </mp-flex>
            </mp-table-cell>
            <mp-table-cell as="td">
              <mp-badge variant="subtle" variant-color="orange">
                Need approval
              </mp-badge>
            </mp-table-cell>
            <mp-table-cell as="td">
              <mp-flex justify-content="flex-end" align-items="center">
                <mp-button
                  width="156px"
                  margin-right="4"
                  @click="onRequestModalToggle(true)"
                >
                  Request approval
                </mp-button>
                <mp-tooltip label="Lock run payroll" position="bottom">
                  <mp-button-icon name="unlock" margin-right="2" />
                </mp-tooltip>
                <mp-popover>
                  <mp-popover-trigger>
                    <mp-button-icon name="menu-kebab" margin-left="2" />
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
                      <mp-popover-list-item>
                        Approval history
                      </mp-popover-list-item>
                      <mp-popover-list-item>Disbursement</mp-popover-list-item>
                      <mp-popover-list-item
                        @click="onDownloadModalToggle(true)"
                      >
                        Download e-Banking
                      </mp-popover-list-item>
                    </mp-popover-list>
                  </mp-popover-content>
                </mp-popover>
              </mp-flex>
            </mp-table-cell>
          </mp-table-row>
          <mp-table-row>
            <mp-table-cell as="td">Mar 2022</mp-table-cell>
            <mp-table-cell as="td">
              <mp-text as="p">Ajeng Maharani</mp-text>
              <mp-text as="p" color="gray.600" font-size="sm">
                30 Mar 2022 21:00
              </mp-text>
            </mp-table-cell>
            <mp-table-cell as="td">115</mp-table-cell>
            <mp-table-cell as="td">
              <mp-flex gap="1">
                <mp-icon name="doc" size="sm" variant="duotone" />
                <mp-button variant="link">View</mp-button>
              </mp-flex>
            </mp-table-cell>
            <mp-table-cell as="td">
              <mp-badge variant="subtle" variant-color="blue">
                Ready to publish
              </mp-badge>
            </mp-table-cell>
            <mp-table-cell as="td" text-align="right">
              <mp-flex justify-content="flex-end" align-items="center">
                <mp-button
                  variant="outline"
                  width="156px"
                  margin-right="4"
                  @click="onPublishModalToggle(true)"
                >
                  Publish payslip
                </mp-button>
                <mp-tooltip label="Lock run payroll" position="bottom">
                  <mp-button-icon name="unlock" margin-right="2" />
                </mp-tooltip>
                <mp-button-icon name="menu-kebab" margin-left="2" />
              </mp-flex>
            </mp-table-cell>
          </mp-table-row>
          <mp-table-row>
            <mp-table-cell as="td">Jan 2022</mp-table-cell>
            <mp-table-cell as="td">
              <mp-text as="p">Rizal Chandra</mp-text>
              <mp-text as="p" color="gray.600" font-size="sm">
                30 Jan 2022 21:00
              </mp-text>
            </mp-table-cell>
            <mp-table-cell as="td">88</mp-table-cell>
            <mp-table-cell as="td">
              <mp-flex gap="1">
                <mp-icon name="doc" size="sm" variant="duotone" />
                <mp-button variant="link">View</mp-button>
              </mp-flex>
            </mp-table-cell>
            <mp-table-cell as="td">
              <mp-badge variant="subtle" variant-color="green">
                Completed
              </mp-badge>
            </mp-table-cell>
            <mp-table-cell as="td" text-align="right">
              <mp-flex justify-content="flex-end" align-items="center">
                <mp-button
                  variant="outline"
                  width="156px"
                  margin-right="4"
                  @click="onApprovalModalToggle(true)"
                >
                  View approval
                </mp-button>
                <mp-tooltip label="Unlock to run payroll" position="bottom">
                  <mp-button-icon
                    name="security"
                    variant="duotone"
                    margin-right="2"
                  />
                </mp-tooltip>
                <mp-button-icon name="menu-kebab" margin-left="2" />
              </mp-flex>
            </mp-table-cell>
          </mp-table-row>
        </mp-table-body>
      </mp-table>
    </mp-table-container>

    <PayrollHistoryPagination />
    <PayrollHistoryRequestModal
      :isModalOpen="isRequestModalOpen"
      :onModalToggle="onRequestModalToggle"
    />
    <PayrollHistoryApprovalModal
      :isModalOpen="isApprovalModalOpen"
      :onModalToggle="onApprovalModalToggle"
    />
    <PayrollHistoryPublishModal
      :isModalOpen="isPublishModalOpen"
      :onModalToggle="onPublishModalToggle"
    />
    <PayrollHistoryDownloadModal
      :isModalOpen="isDownloadModalOpen"
      :onModalToggle="onDownloadModalToggle"
    />
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
  MpButtonIcon,
  MpTooltip,
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
import PayrollHistoryPagination from "./PayrollHistoryPagination";
import PayrollHistoryRequestModal from "./PayrollHistoryRequestModal";
import PayrollHistoryApprovalModal from "./PayrollHistoryApprovalModal";
import PayrollHistoryPublishModal from "./PayrollHistoryPublishModal";
import PayrollHistoryDownloadModal from "./PayrollHistoryDownloadModal";

export default {
  name: "PayrollHistoryTable",
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpButton,
    MpBadge,
    MpIcon,
    MpButtonIcon,
    MpTooltip,
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
    PayrollHistoryPagination,
    PayrollHistoryRequestModal,
    PayrollHistoryApprovalModal,
    PayrollHistoryPublishModal,
    PayrollHistoryDownloadModal,
  },
  data: function () {
    return {
      isRequestModalOpen: false,
      isApprovalModalOpen: false,
      isPublishModalOpen: false,
      isDownloadModalOpen: false,
    };
  },
  methods: {
    onRequestModalToggle: function (data) {
      this.isRequestModalOpen = data;
    },
    onApprovalModalToggle: function (data) {
      this.isApprovalModalOpen = data;
    },
    onPublishModalToggle: function (data) {
      this.isPublishModalOpen = data;
    },
    onDownloadModalToggle: function (data) {
      this.isDownloadModalOpen = data;
    },
  },
};
</script>