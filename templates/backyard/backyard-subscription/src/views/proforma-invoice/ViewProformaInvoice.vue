<template>
  <mp-box>
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 60px)">
      <Sidebar default-is-toggle />
      <SidebarChild />
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
          padding-y="1.063rem"
          :padding-x="['4', '6']"
          :display="['inline-block', 'flex']"
        >
          <mp-box height="12">
            <mp-text font-size="sm" is-link> Proforma invoice </mp-text>
            <mp-heading as="h1" font-size="2xl" font-weight="semibold">
              Proforma invoice - BPI/2022/08/00499
            </mp-heading>
          </mp-box>

          <mp-box
            :width="['100%', 'auto']"
            :position="['fixed', 'relative']"
            :top="['100%', '0']"
            :left="['50%', '0']"
            :transform="['translate(-50%, -100%)', 'translate(0%, 0%)']"
            :border-top="['1px solid', '0px solid']"
            :padding-y="['2', '0']"
            :padding-x="['4', '0']"
            :background-color="['white', 'transparent']"
            border-color="gray.100"
            z-index="100"
          >
            <mp-flex gap="2" :flex-direction="['column-reverse', 'row']">
              <mp-button variant="outline">View subscription</mp-button>
              <mp-button rightIcon="caret-down" :display="['block', 'none']">
                Actions
              </mp-button>
              <mp-popover use-portal>
                <mp-popover-trigger>
                  <mp-button
                    rightIcon="caret-down"
                    :display="['none', 'block']"
                  >
                    Actions
                  </mp-button>
                </mp-popover-trigger>
                <mp-popover-content
                  max-width="64"
                  bg="white"
                  rounded="md"
                  shadow="lg"
                  border="1px solid"
                  border-color="gray.400"
                >
                  <mp-popover-list display="grid">
                    <mp-popover-list-item>
                      View Jurnal sales order
                    </mp-popover-list-item>
                    <mp-popover-list-item>
                      View payment link
                    </mp-popover-list-item>
                  </mp-popover-list>
                </mp-popover-content>
              </mp-popover>
            </mp-flex>
          </mp-box>
        </mp-flex>
        <mp-flex
          justify="space-between"
          align-items="center"
          :padding-x="['4', '6']"
        >
          <mp-tabs @change="onHandleTab">
            <mp-tab-list margin-bottom="0" border-bottom="0">
              <mp-tab>Proforma invoice</mp-tab>
              <mp-tab>Client invoice</mp-tab>
              <mp-tab>Activity log</mp-tab>
            </mp-tab-list>
          </mp-tabs>
        </mp-flex>
        <mp-box
          min-height="calc(100vh - 192px)"
          border-top-width="1px"
          background-color="white"
          padding-top="6"
          :padding-x="['4', '6']"
          :padding-bottom="['32', '10']"
        >
          <mp-box v-if="this.tabIndex === 0">
            <ViewProformaInvoiceTabA />
          </mp-box>
          <mp-box v-if="this.tabIndex === 1">
            <ViewProformaInvoiceTabB />
          </mp-box>
          <mp-box v-if="this.tabIndex === 2"> </mp-box>
        </mp-box>
      </mp-box>
    </mp-flex>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpHeading,
  MpText,
  MpButton,
  MpTabs,
  MpTabList,
  MpTab,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
} from "@mekari/pixel";
import ViewProformaInvoiceTabA from "./ViewProformaInvoiceTabA";
import ViewProformaInvoiceTabB from "./ViewProformaInvoiceTabB";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import SidebarChild from "../../components/SidebarChild";

export default {
  name: "ViewProformaInvoice",
  components: {
    MpBox,
    MpFlex,
    MpHeading,
    MpText,
    MpButton,
    MpTabs,
    MpTabList,
    MpTab,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
    Header,
    Sidebar,
    SidebarChild,
    ViewProformaInvoiceTabA,
    ViewProformaInvoiceTabB,
  },
  data: function () {
    return {
      tabIndex: 0,
    };
  },
  methods: {
    onHandleTab: function (e) {
      this.tabIndex = e;
    },
  },
};
</script>