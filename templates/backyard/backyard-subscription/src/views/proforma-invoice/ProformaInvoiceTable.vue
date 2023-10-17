<template>
  <mp-box>
    <mp-table-container width="full" max-width="full" overflow="scroll">
      <mp-table>
        <mp-table-head is-fixed>
          <mp-table-row cursor="pointer">
            <mp-table-cell as="th" width="210px" min-width="210px">
              Proforma invoice ID
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th" width="210px" min-width="210px">
              Jurnal SO ID
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
              Client invoice status
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th" width="210px" min-width="210px">
              Proforma invoice status
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell
              as="th"
              width="auto"
              min-width="auto"
              z-index="base"
              top="0"
              right="0"
              :display="['none', 'table-cell']"
              :box-shadow="['inherit', 'inset 2px 0px #D0D6DD']"
              is-fixed
            />
            <mp-table-cell
              as="th"
              width="auto"
              min-width="auto"
              border-bottom="0px"
              :display="['table-cell', 'none']"
            />
          </mp-table-row>
        </mp-table-head>
        <mp-table-body>
          <mp-table-row>
            <mp-table-cell as="td">
              <mp-text as="a" is-link>BPI/2022/08/00499</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td">
              <mp-text as="a" is-link>28192</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td">
              <mp-text as="p">PT. Agro Tekno</mp-text>
              <mp-text as="p" color="gray.600" font-size="sm"> 192504 </mp-text>
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
              Rp13.668.000
            </mp-table-cell>
            <mp-table-cell as="td">
              <mp-badge variant="subtle" variant-color="gray">
                Outstanding
              </mp-badge>
            </mp-table-cell>
            <mp-table-cell as="td">
              <mp-badge variant="subtle" variant-color="green">
                Active
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
                      to="/view-proforma-invoice"
                    >
                      View detail
                    </mp-popover-list-item>
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
              <mp-button
                variant="outline"
                rightIcon="caret-down"
                @click="onActionDrawerToggle(true)"
              >
                Actions
              </mp-button>
            </mp-table-cell>
          </mp-table-row>
          <mp-table-row>
            <mp-table-cell as="td">
              <mp-text as="a" is-link>BPI/2022/08/00490</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td">
              <mp-text as="a" is-link>28191</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td">
              <mp-text as="p">PT. Agro Tekno</mp-text>
              <mp-text as="p" color="gray.600" font-size="sm"> 192504 </mp-text>
            </mp-table-cell>
            <mp-table-cell as="td">
              <mp-text as="p">Talenta</mp-text>
              <mp-text as="p" color="gray.600" font-size="sm">
                Enterprise
              </mp-text>
            </mp-table-cell>
            <mp-table-cell as="td">1/7/2022</mp-table-cell>
            <mp-table-cell as="td">7/7/2022</mp-table-cell>
            <mp-table-cell as="td" text-align="right"> Rp0 </mp-table-cell>
            <mp-table-cell as="td">
              <mp-badge variant="subtle" variant-color="red"> Voided </mp-badge>
            </mp-table-cell>
            <mp-table-cell as="td">
              <mp-badge variant="subtle" variant-color="red"> Voided </mp-badge>
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
                    <mp-popover-list-item> View detail </mp-popover-list-item>
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

    <mp-drawer
      size="sm"
      placement="bottom"
      :is-open="isActionDrawerOpen"
      :on-close="onActionDrawerClose"
      scroll-behavior="inside"
    >
      <mp-drawer-content
        border-top-right-radius="md"
        border-top-left-radius="md"
      >
        <mp-flex padding-x="4" padding-top="6" padding-bottom="2">
          <mp-button
            variant="link"
            color="dark"
            as="router-link"
            to="/view-proforma-invoice"
          >
            View detail
          </mp-button>
        </mp-flex>
        <mp-flex padding-x="4" padding-y="2">
          <mp-button variant="link" color="dark">
            View Jurnal sales invoice
          </mp-button>
        </mp-flex>
        <mp-flex padding-x="4" padding-top="2" padding-bottom="6">
          <mp-button variant="link" color="dark"> View payment link </mp-button>
        </mp-flex>
      </mp-drawer-content>
      <mp-drawer-overlay />
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

export default {
  name: "ProvormaInvoiceTable",
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
  },
  data: function () {
    return {
      isActionDrawerOpen: false,
    };
  },
  methods: {
    onActionDrawerToggle: function (data) {
      this.isActionDrawerOpen = data;
    },
    onActionDrawerClose: function () {
      this.isActionDrawerOpen = false;
    },
  },
};
</script>