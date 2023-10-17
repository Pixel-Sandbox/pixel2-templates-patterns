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
            <mp-text font-size="sm" is-link>Client invoice</mp-text>
            <mp-heading as="h1" font-size="2xl" font-weight="semibold">
              Client invoice - BI/2022/08/00286
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
              <mp-button variant="outline">Proforma invoice</mp-button>
              <mp-button variant="outline">View SI in Jurnal</mp-button>
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
              <mp-tab>Detail</mp-tab>
              <mp-tab>Activity log</mp-tab>
            </mp-tab-list>
          </mp-tabs>
        </mp-flex>
        <mp-box
          min-height="calc(100vh - 192px)"
          border-top-width="1px"
          background-color="white"
          :padding="['4', '6']"
          :padding-bottom="['32', '10']"
        >
          <mp-box v-if="this.tabIndex === 0">
            <ViewClientInvoiceTabA />
          </mp-box>
          <mp-box v-if="this.tabIndex === 1"> </mp-box>
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
} from "@mekari/pixel";
import ViewClientInvoiceTabA from "./ViewClientInvoiceTabA";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import SidebarChild from "../../components/SidebarChild";

export default {
  name: "ViewClientInvoice",
  components: {
    MpBox,
    MpFlex,
    MpHeading,
    MpText,
    MpButton,
    MpTabs,
    MpTabList,
    MpTab,
    Header,
    Sidebar,
    SidebarChild,
    ViewClientInvoiceTabA,
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