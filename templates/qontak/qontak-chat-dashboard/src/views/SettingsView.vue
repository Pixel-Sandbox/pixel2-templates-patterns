<template>
  <mp-box>
    <Header />
    <transition name="slide-down">
      <StickyToast
        v-if="isShowStickyToast"
        message="This is a short message you can dismiss."
        variant="info"
        icon-variant="duotone"
        icon-name="draft"
        @close="onClose"
      />
    </transition>
    <SelectAgentsDrawer
      :is-drawer-open="isDrawerOpen"
      :handle-drawer-open="handleDrawerOpen"
      :handle-drawer-close="handleDrawerClose"
    />
    <mp-flex as="main" max-height="calc(100vh - 56px)">
      <Sidebar is-alternate is-custom />
      <mp-box
        as="section"
        data-id="content"
        width="100%"
        height="calc(100vh - 56px)"
        overflow-y="auto"
        background-color="background"
      >
        <SubHeader title="Settings" type="" />
        <mp-box
          min-height="calc(100vh - 128px)"
          border-top-width="1px"
          border-left-width="1px"
          border-top-left-radius="md"
          border-color="gray.100"
          background-color="white"
          padding="6"
        >
          <mp-text>Place content here...</mp-text>
          <mp-flex mt="4" direction="column" align-items="flex-start" gap="4">
            <mp-button @click="isShowStickyToast = true"
              >Show Sticky Toast</mp-button
            >
            <mp-button @click="handleDrawerOpen">Show Drawer</mp-button>
          </mp-flex>
        </mp-box>
      </mp-box>
    </mp-flex>
  </mp-box>
</template>

<script>
import { MpBox, MpFlex, MpText, MpButton } from "@mekari/pixel";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import SubHeader from "../components/SubHeader";
import StickyToast from "../components/StickyToast";
import SelectAgentsDrawer from "@/components/SelectAgentsDrawer";

export default {
  name: "SettingsView",
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpButton,
    Header,
    Sidebar,
    SubHeader,
    StickyToast,
    SelectAgentsDrawer,
  },
  data() {
    return {
      isShowStickyToast: false,
      isDrawerOpen: false,
    };
  },
  methods: {
    onClose() {
      this.isShowStickyToast = false;
    },
    handleDrawerOpen() {
      this.isDrawerOpen = true;
    },
    handleDrawerClose() {
      this.isDrawerOpen = false;
    },
  },
};
</script>

<style>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-down-enter-active {
  transition: all 0.3s ease-in-out;
}
.slide-down-leave-active {
  /* transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0); */
  transition: all 0.3s ease-in-out;
}
.slide-down-enter, .slide-down-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-60px);
  opacity: 0;
}
</style>
