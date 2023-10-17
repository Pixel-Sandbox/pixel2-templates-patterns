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
          :padding-x="['4', '6']"
          :display="['inline-block', 'flex']"
          padding-y="1.063rem"
        >
          <mp-box height="12">
            <mp-text font-size="sm" is-link>Subscriptions</mp-text>
            <mp-heading as="h1" font-size="2xl" font-weight="semibold">
              MS-22070000003 - PT. Flora Kultura
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
              <mp-button variant="outline">View company</mp-button>
              <mp-button
                as="router-link"
                to="/create-performa-invoice"
                variant="primary"
              >
                Create proforma invoice
              </mp-button>
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
              <mp-tab>Subscription</mp-tab>
              <mp-tab>Activity log</mp-tab>
            </mp-tab-list>
          </mp-tabs>
        </mp-flex>
        <mp-box
          min-height="calc(100vh - 192px)"
          border-top-width="1px"
          background-color="white"
          :padding-x="['4', '6']"
          :padding-bottom="['32', '0']"
        >
          <mp-box v-if="this.tabIndex === 0">
            <ViewSubscriptionTabA />
          </mp-box>
          <mp-box v-if="this.tabIndex === 1">
            <ViewSubscriptionTabB />
          </mp-box>
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
import ViewSubscriptionTabA from "./ViewSubscriptionTabA";
import ViewSubscriptionTabB from "./ViewSubscriptionTabB";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import SidebarChild from "../../components/SidebarChild";

export default {
  name: "ViewSubscription",
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
    ViewSubscriptionTabA,
    ViewSubscriptionTabB,
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