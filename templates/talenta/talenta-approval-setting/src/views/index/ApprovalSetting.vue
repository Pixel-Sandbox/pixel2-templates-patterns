<template>
  <mp-box>
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 60px)">
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
          padding-x="6"
          padding-y="1.063rem"
        >
          <mp-box height="12">
            <mp-heading as="h1" font-size="2xl" font-weight="bold">
              Employee Self-Service
            </mp-heading>
          </mp-box>
        </mp-flex>
        <mp-flex justify="space-between" align-items="center" padding-x="6">
          <mp-tabs @change="onHandleTab">
            <mp-tab-list margin-bottom="0" border-bottom="0">
              <mp-tab>Approval</mp-tab>
              <mp-tab>Delegation</mp-tab>
              <mp-tab>Module</mp-tab>
            </mp-tab-list>
          </mp-tabs>
        </mp-flex>
        <mp-box
          min-height="calc(100vh - 192px)"
          border-top-width="1px"
          background-color="white"
          padding="6"
        >
          <mp-box v-if="this.tabIndex === 0">
            <ApprovalSettingTabA />
          </mp-box>
          <mp-box v-if="this.tabIndex === 1"> - </mp-box>
          <mp-box v-if="this.tabIndex === 2"> - </mp-box>
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
  MpTabs,
  MpTabList,
  MpTab,
} from "@mekari/pixel";
import Header from "../../components/Header";
import ApprovalSettingTabA from "./ApprovalSettingTabA";

export default {
  name: "ApprovalSetting",
  components: {
    MpBox,
    MpFlex,
    MpHeading,
    MpTabs,
    MpTabList,
    MpTab,
    Header,
    ApprovalSettingTabA,
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