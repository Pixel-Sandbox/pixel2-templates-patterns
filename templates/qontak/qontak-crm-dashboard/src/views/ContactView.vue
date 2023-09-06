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
      >
        <SubHeader title="Contacts" type="contacts" />
        <mp-tabs
          id="tabs-contacts"
          :default-index="defaultIndex"
          :is-show-border="false"
          @change="handleChange"
        >
          <mp-tab-list mb="0" pb="1px" px="6">
            <mp-tab> All contacts </mp-tab>
            <mp-tab> My lists </mp-tab>
          </mp-tab-list>
          <mp-tab-panels>
            <mp-tab-panel>
              <mp-box
                min-height="calc(100vh - 132px)"
                border-top-width="1px"
                border-left-width="1px"
                border-top-left-radius="md"
                border-color="gray.100"
                background-color="white"
                padding="6"
              >
                <mp-text>All contacts content here...</mp-text>
              </mp-box>
            </mp-tab-panel>
            <mp-tab-panel>
              <mp-box
                min-height="calc(100vh - 132px)"
                border-top-width="1px"
                border-left-width="1px"
                border-top-left-radius="md"
                border-color="gray.100"
                background-color="white"
                padding="6"
              >
                <mp-text>My list content here...</mp-text>
              </mp-box>
            </mp-tab-panel>
          </mp-tab-panels>
        </mp-tabs>
      </mp-box>
    </mp-flex>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpText,
  MpTabs,
  MpTabList,
  MpTab,
  MpTabPanels,
  MpTabPanel,
} from "@mekari/pixel";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import SubHeader from "../components/SubHeader";

export default {
  name: "HomeView",
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpTabs,
    MpTabList,
    MpTab,
    MpTabPanels,
    MpTabPanel,
    Header,
    Sidebar,
    SubHeader,
  },
  data() {
    return {
      tabs: ["all-contacts", "my-lists"],
      defaultIndex: 0,
      currentTab: null,
    };
  },
  mounted() {
    this.handleChange(this.defaultIndex);
  },
  methods: {
    handleChange(e) {
      this.currentTab = this.tabs[e];
    },
  },
};
</script>
