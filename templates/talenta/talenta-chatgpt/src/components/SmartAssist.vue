<template>
  <mp-drawer
    id="smartassist"
    :is-open="isOpen"
    :on-close="handleNextClose"
    size="2xl"
    placement="bottom"
    scroll-behavior="inside"
  >
    <mp-drawer-content
      left="20"
      right="20"
      width="auto"
      height="90vh"
      border-top-right-radius="md"
      border-top-left-radius="md"
    >
      <mp-drawer-header bg="white">
        <img
          src="../assets/mekari-airene-logo.svg"
          width="149px"
          height="32px"
        />
      </mp-drawer-header>
      <mp-drawer-close-button top="15px!important" />
      <mp-drawer-body
        overflow="hidden"
        :bg="isOpenTopic ? 'background' : 'white'"
        padding-y="4"
        padding-x="0"
      >
        <mp-flex
          v-if="isOpenTopic"
          justify-content="center"
          align-items="center"
          height="100%"
        >
          <SmartAssistTopic :handleToggle="handleToggle" />
        </mp-flex>
        <mp-flex justify-content="center" v-else>
          <SmartAssistChat :handleToggle="handleToggle" />
        </mp-flex>
      </mp-drawer-body>
    </mp-drawer-content>
    <mp-drawer-overlay />
  </mp-drawer>
</template>

<script>
import {
  MpFlex,
  MpDrawer,
  MpDrawerOverlay,
  MpDrawerContent,
  MpDrawerHeader,
  MpDrawerBody,
  MpDrawerCloseButton,
} from "@mekari/pixel";

import SmartAssistChat from "./SmartAssistChat.vue";
import SmartAssistTopic from "./SmartAssistTopic.vue";

export default {
  name: "SmartAssist",
  components: {
    MpFlex,
    MpDrawer,
    MpDrawerOverlay,
    MpDrawerContent,
    MpDrawerHeader,
    MpDrawerBody,
    MpDrawerCloseButton,
    SmartAssistChat,
    SmartAssistTopic,
  },
  props: {
    isOpen: [Boolean],
    onClose: [Function],
    nextOpen: [Function],
  },
  data() {
    return {
      isOpenTopic: true,
    };
  },
  methods: {
    handleToggle: function (data) {
      this.isOpenTopic = data;
    },
    handleNextClose: function () {
      this.nextOpen(true);
    },
  },
};
</script>

<style scoped>
#active-smartassist > div > div {
  top: unset;
  bottom: 0;
  overflow: hidden;
}
</style>