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
          <mp-box>
            <mp-heading as="h1" font-size="2xl" font-weight="semibold">
              Time off
            </mp-heading>
          </mp-box>
          <mp-flex gap="2">
            <mp-button
              as="router-link"
              to="/add-overtime-compensation"
              variant="primary"
            >
              Create compensation rule
            </mp-button>
          </mp-flex>
        </mp-flex>
        <mp-flex justify="space-between" align-items="center" padding-x="6">
          <mp-tabs @change="onHandleTab">
            <mp-tab-list margin-bottom="0" border-bottom="0">
              <mp-tab>Time off policy</mp-tab>
              <mp-tab>Overtime compensation</mp-tab>
            </mp-tab-list>
          </mp-tabs>
        </mp-flex>
        <mp-box
          min-height="calc(100vh - 192px)"
          border-top-width="1px"
          background-color="white"
          padding="6"
        >
          <mp-box v-if="this.tabIndex === 1">
            <OvertimeCompensationForm />
          </mp-box>
          <mp-box v-else></mp-box>
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
} from "@mekari/pixel";
import OvertimeCompensationForm from "./OvertimeCompensationForm";
import Header from "../../components/Header";

export default {
  name: "OvertimeCompensation",
  components: {
    MpBox,
    MpFlex,
    MpHeading,
    MpButton,
    MpTabs,
    MpTabList,
    MpTab,
    OvertimeCompensationForm,
    Header,
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