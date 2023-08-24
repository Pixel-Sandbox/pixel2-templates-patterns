<template>
  <mp-box>
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 60px)">
      <Sidebar default-is-toggle is-custom with-child />
      <mp-box
        as="section"
        data-id="content"
        width="100%"
        height="calc(100vh - 60px)"
        overflow-y="auto"
        background-color="#F1F5F9"
      >
        <mp-flex
          justify="space-between"
          align-items="center"
          :padding-x="['4', '6']"
          :display="['inline-block', 'flex']"
          padding-y="1.063rem"
        >
          <mp-box>
            <mp-heading as="h1" font-size="2xl" font-weight="semibold">
              Disbursement
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
              <mp-button as="router-link" to="/create-disbursement">
                Create disbursement
              </mp-button>
            </mp-flex>
          </mp-box>
        </mp-flex>
        <mp-flex
          justify="space-between"
          align-items="center"
          :padding-x="['4', '6']"
        >
          <mp-tabs @change="handleTab">
            <mp-tab-list margin-bottom="0" border-bottom="0">
              <mp-tab>
                Request
                <mp-badge
                  variant="solid"
                  variant-color="blue"
                  size="sm"
                  margin-left="2"
                >
                  3
                </mp-badge>
              </mp-tab>
              <mp-tab>History</mp-tab>
            </mp-tab-list>
          </mp-tabs>
        </mp-flex>
        <mp-box
          min-height="calc(100vh - 182px)"
          border-top-width="1px"
          border-left-width="1px"
          border-top-left-radius="md"
          border-color="gray.100"
          background-color="white"
          :padding="['4', '6']"
        >
          <mp-box v-if="this.tabIndex === 0">
            <DisbursementTabA />
          </mp-box>
          <mp-box v-if="this.tabIndex === 1">
            <DisbursementTabB />
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
  MpButton,
  MpTabs,
  MpTabList,
  MpTab,
  MpBadge,
} from "@mekari/pixel";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import DisbursementTabA from "./DisbursementTabA";
import DisbursementTabB from "./DisbursementTabB";

export default {
  name: "Disbursement",
  components: {
    MpBox,
    MpFlex,
    MpHeading,
    MpButton,
    MpTabs,
    MpTabList,
    MpTab,
    MpBadge,
    Header,
    Sidebar,
    DisbursementTabA,
    DisbursementTabB,
  },
  data() {
    return {
      tabIndex: 0,
    };
  },
  methods: {
    handleTab: function (e) {
      this.tabIndex = e;
    },
  },
};
</script>
