<template>
  <mp-box>
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 60px)">
      <Sidebar is-alternate is-custom />
      <mp-box
        as="section"
        data-id="content"
        width="100%"
        height="calc(100vh - 60px)"
        overflow-y="auto"
        background-color="background"
        :margin-left="['0', '60px']"
      >
        <mp-flex
          justify="space-between"
          align-items="center"
          :padding-x="['4', '6']"
          :display="['inline-block', 'flex']"
          padding-y="1.063rem"
        >
          <mp-box height="12">
            <mp-text font-size="sm" is-link>Referral Disbursement</mp-text>
            <mp-heading as="h1" font-size="2xl" font-weight="semibold">
              Disbursement
            </mp-heading>
          </mp-box>
        </mp-flex>
        <mp-flex
          justify="space-between"
          align-items="center"
          :padding-x="['4', '6']"
        >
          <mp-tabs :default-index="defaultIndex" @change="handleChangeTab">
            <mp-tab-list margin-bottom="0" border-bottom="0">
              <mp-tab>
                Need tax review
                <mp-badge
                  margin-left="2"
                  variant="solid"
                  :variant-color="
                    currentTab === 'need-tax-review' ? 'blue' : 'gray'
                  "
                >
                  2
                </mp-badge>
              </mp-tab>
              <mp-tab>
                Need granted
                <mp-badge
                  margin-left="2"
                  variant="solid"
                  :variant-color="
                    currentTab === 'need-granted' ? 'blue' : 'gray'
                  "
                >
                  119
                </mp-badge>
              </mp-tab>
              <mp-tab>Disbursement history</mp-tab>
            </mp-tab-list>
          </mp-tabs>
        </mp-flex>
        <mp-box
          min-height="calc(100vh - 192px)"
          border-top-width="1px"
          background-color="white"
          :padding="['4', '6']"
        >
          <mp-box v-if="this.currentTab === 'need-tax-review'">
            <DisbursementTabA />
          </mp-box>
          <mp-box v-if="this.currentTab === 'need-granted'">
            <DisbursementTabB />
          </mp-box>
          <mp-box v-if="this.currentTab === 'disbursement-history'">
            <DisbursementTabC />
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
  MpBadge,
  MpTabs,
  MpTabList,
  MpTab,
} from "@mekari/pixel";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import DisbursementTabA from "./DisbursementTabA";
import DisbursementTabB from "./DisbursementTabB";
import DisbursementTabC from "./DisbursementTabC";

export default {
  name: "Disbursement",
  components: {
    MpBox,
    MpFlex,
    MpHeading,
    MpText,
    MpBadge,
    MpTabs,
    MpTabList,
    MpTab,
    Header,
    Sidebar,
    DisbursementTabA,
    DisbursementTabB,
    DisbursementTabC,
  },
  data: function () {
    return {
      tabs: ["need-tax-review", "need-granted", "disbursement-history"],
      defaultIndex: 0,
      currentTab: null,
    };
  },
  mounted() {
    this.handleChangeTab(this.defaultIndex);
  },
  methods: {
    onHandleTab(e) {
      this.tabIndex = e;
    },
    handleChangeTab(e) {
      this.currentTab = this.tabs[e];
    },
  },
};
</script>