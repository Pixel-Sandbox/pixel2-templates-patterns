<template>
  <mp-box>
    <mp-table-container width="full" max-width="full" overflow="scroll">
      <mp-table>
        <mp-table-head is-fixed>
          <mp-table-row cursor="pointer">
            <mp-table-cell as="th" width="210px" min-width="210px">
              Request ID
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th" width="210px" min-width="210px">
              Requester
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th" width="210px" min-width="210px">
              Company
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th" width="210px" min-width="210px">
              Application
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th" width="210px" min-width="210px">
              Active date
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th" width="210px" min-width="210px">
              End date
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell
              as="th"
              width="160px"
              min-width="160px"
              text-align="right"
            >
              Net amount
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
            <mp-table-cell as="td">
              <mp-text as="a" is-link>2002</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td">
              <mp-text>Rizal Candra</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td">
              <mp-text as="p">PT. Agro Tekno</mp-text>
              <mp-text as="p" color="gray.600" font-size="sm">192504</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td">
              <mp-text as="p">Jurnal</mp-text>
              <mp-text as="p" color="gray.600" font-size="sm">
                Enterprise Plus
              </mp-text>
            </mp-table-cell>
            <mp-table-cell as="td">1/1/2023</mp-table-cell>
            <mp-table-cell as="td">1/1/2024</mp-table-cell>
            <mp-table-cell as="td" text-align="right">
              Rp8.100.000
            </mp-table-cell>
            <mp-table-cell as="td">
              <mp-badge variant="subtle" variant-color="gray">
                Need approval
              </mp-badge>
            </mp-table-cell>
            <mp-table-cell
              as="td"
              right="0"
              box-shadow="inset 2px 0px #D0D6DD"
              z-index="5"
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
                    <mp-popover-list-item
                      as="router-link"
                      to="/view-approval-request"
                    >
                      View detail
                    </mp-popover-list-item>
                    <mp-popover-list-item @click="onApproveModalToggle(true)">
                      Approve
                    </mp-popover-list-item>
                    <mp-popover-list-item @click="onRejectModalToggle(true)">
                      Reject
                    </mp-popover-list-item>
                    <mp-popover-list-item>Edit request</mp-popover-list-item>
                    <mp-popover-list-item>Edit approver</mp-popover-list-item>
                    <mp-popover-list-item @click="onDropModalToggle(true)">
                      Drop request
                    </mp-popover-list-item>
                  </mp-popover-list>
                </mp-popover-content>
              </mp-popover>
            </mp-table-cell>
            <mp-table-cell as="td" :display="['table-cell', 'none']">
              <mp-button
                variant="outline"
                rightIcon="caret-down"
                @click="onActionDrawerToggleA(true)"
              >
                Actions
              </mp-button>
            </mp-table-cell>
          </mp-table-row>
          <mp-table-row>
            <mp-table-cell as="td">
              <mp-text as="a" is-link>2001</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td">
              <mp-text>Rizal Candra</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td">
              <mp-text as="p">PT. Agro Tekno</mp-text>
              <mp-text as="p" color="gray.600" font-size="sm">192504</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td">
              <mp-text as="p">Jurnal</mp-text>
              <mp-text as="p" color="gray.600" font-size="sm">
                Enterprise Plus
              </mp-text>
            </mp-table-cell>
            <mp-table-cell as="td">1/1/2023</mp-table-cell>
            <mp-table-cell as="td">1/1/2024</mp-table-cell>
            <mp-table-cell as="td" text-align="right">
              Rp4.100.000
            </mp-table-cell>
            <mp-table-cell as="td">
              <mp-badge variant="subtle" variant-color="green">
                Approved
              </mp-badge>
            </mp-table-cell>
            <mp-table-cell
              as="th"
              scope="col"
              width="auto"
              min-width="auto"
              top="0"
              right="0"
              box-shadow="inset 2px 0px #D0D6DD"
              is-fixed
              :display="['none', 'table-cell']"
            >
              <mp-popover use-portal>
                <mp-popover-trigger>
                  <mp-button variant="outline" rightIcon="caret-down">
                    Actions
                  </mp-button>
                </mp-popover-trigger>
                <mp-popover-content
                  max-width="48"
                  bg="white"
                  rounded="md"
                  shadow="lg"
                  border="1px solid"
                  border-color="gray.400"
                >
                  <mp-popover-list display="grid">
                    <mp-popover-list-item>
                      View request detail
                    </mp-popover-list-item>
                    <mp-popover-list-item>
                      View proforma invoice
                    </mp-popover-list-item>
                  </mp-popover-list>
                </mp-popover-content>
              </mp-popover>
            </mp-table-cell>
            <mp-table-cell as="td" :display="['table-cell', 'none']">
              <mp-button
                variant="outline"
                rightIcon="caret-down"
                @click="onActionDrawerToggleB(true)"
              >
                Actions
              </mp-button>
            </mp-table-cell>
          </mp-table-row>

          <mp-table-row>
            <mp-table-cell as="td">
              <mp-text as="a" is-link>2000</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td">
              <mp-text>Pam Beesly</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td">
              <mp-text as="p">PT. Agro Tekno</mp-text>
              <mp-text as="p" color="gray.600" font-size="sm">192504</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td">
              <mp-text as="p">Jurnal</mp-text>
              <mp-text as="p" color="gray.600" font-size="sm">
                Enterprise Plus
              </mp-text>
            </mp-table-cell>
            <mp-table-cell as="td">1/1/2023</mp-table-cell>
            <mp-table-cell as="td">1/1/2024</mp-table-cell>
            <mp-table-cell as="td" text-align="right">
              Rp2.100.000
            </mp-table-cell>
            <mp-table-cell as="td">
              <mp-badge variant="subtle" variant-color="red">
                Rejected
              </mp-badge>
            </mp-table-cell>
            <mp-table-cell
              as="td"
              right="0"
              box-shadow="inset 2px 0px #D0D6DD"
              z-index="5"
              :display="['none', 'table-cell']"
              is-fixed
            >
            </mp-table-cell>
            <mp-table-cell as="td" :display="['table-cell', 'none']">
            </mp-table-cell>
          </mp-table-row>
        </mp-table-body>
      </mp-table>
    </mp-table-container>
    <Pagination />
    <ApprovalRequestApproveModal
      :isModalOpen="isApproveModalOpen"
      :onModalToggle="onApproveModalToggle"
    />
    <ApprovalRequestRejectModal
      :isModalOpen="isRejectModalOpen"
      :onModalToggle="onRejectModalToggle"
    />
    <ApprovalRequestDropModal
      :isModalOpen="isDropModalOpen"
      :onModalToggle="onDropModalToggle"
    />
    <mp-drawer
      size="sm"
      placement="bottom"
      :is-open="isActionDrawerOpenA"
      :on-close="onActionDrawerClose"
      scroll-behavior="inside"
    >
      <mp-drawer-overlay />
      <mp-drawer-content
        border-top-right-radius="md"
        border-top-left-radius="md"
      >
        <mp-flex padding-x="4" padding-top="6" padding-bottom="2">
          <mp-button
            variant="link"
            color="dark"
            as="router-link"
            to="/view-approval-request"
          >
            View detail
          </mp-button>
        </mp-flex>
        <mp-flex padding-x="4" padding-y="2">
          <mp-button
            variant="link"
            color="dark"
            @click="onApproveModalToggle(true)"
          >
            Approve
          </mp-button>
        </mp-flex>
        <mp-flex padding-x="4" padding-y="2">
          <mp-button
            variant="link"
            color="dark"
            @click="onRejectModalToggle(true)"
          >
            Reject
          </mp-button>
        </mp-flex>
        <mp-flex padding-x="4" padding-y="2">
          <mp-button variant="link" color="dark">Edit request</mp-button>
        </mp-flex>
        <mp-flex padding-x="4" padding-y="2">
          <mp-button variant="link" color="dark">Edit approver</mp-button>
        </mp-flex>
        <mp-flex padding-x="4" padding-top="2" padding-bottom="6">
          <mp-button
            variant="link"
            color="dark"
            @click="onDropModalToggle(true)"
          >
            Drop
          </mp-button>
        </mp-flex>
      </mp-drawer-content>
    </mp-drawer>

    <mp-drawer
      size="sm"
      placement="bottom"
      :is-open="isActionDrawerOpenB"
      :on-close="onActionDrawerClose"
      scroll-behavior="inside"
    >
      <mp-drawer-overlay />
      <mp-drawer-content
        border-top-right-radius="md"
        border-top-left-radius="md"
      >
        <mp-flex padding-x="4" padding-top="6" padding-bottom="2">
          <mp-button variant="link" color="dark">
            View request detail
          </mp-button>
        </mp-flex>
        <mp-flex padding-x="4" padding-top="2" padding-bottom="6">
          <mp-button variant="link" color="dark">
            View proforma invoice
          </mp-button>
        </mp-flex>
      </mp-drawer-content>
    </mp-drawer>
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
  MpDrawer,
  MpDrawerOverlay,
  MpDrawerContent,
} from "@mekari/pixel";
import Pagination from "../../components/Pagination";
import ApprovalRequestApproveModal from "./ApprovalRequestApproveModal";
import ApprovalRequestRejectModal from "./ApprovalRequestRejectModal";
import ApprovalRequestDropModal from "./ApprovalRequestDropModal";

export default {
  name: "RequestTable",
  components: {
    MpBox,
    MpFlex,
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
    MpDrawer,
    MpDrawerOverlay,
    MpDrawerContent,
    Pagination,
    ApprovalRequestApproveModal,
    ApprovalRequestRejectModal,
    ApprovalRequestDropModal,
  },
  data: function () {
    return {
      isApproveModalOpen: false,
      isRejectModalOpen: false,
      isDropModalOpen: false,
      isActionDrawerOpenA: false,
      isActionDrawerOpenB: false,
    };
  },
  methods: {
    onApproveModalToggle: function (data) {
      this.isApproveModalOpen = data;
      this.isActionDrawerOpenA = false;
    },
    onRejectModalToggle: function (data) {
      this.isRejectModalOpen = data;
      this.isActionDrawerOpenA = false;
    },
    onDropModalToggle: function (data) {
      this.isDropModalOpen = data;
      this.isActionDrawerOpenA = false;
    },
    onActionDrawerToggleA: function (data) {
      this.isActionDrawerOpenA = data;
    },
    onActionDrawerToggleB: function (data) {
      this.isActionDrawerOpenB = data;
    },
    onActionDrawerClose: function () {
      this.isActionDrawerOpenA = false;
      this.isActionDrawerOpenB = false;
    },
  },
};
</script>