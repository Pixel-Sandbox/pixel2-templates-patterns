<template>
  <mp-box>
    <Header />
    <mp-flex
      id="drag-container"
      as="main"
      position="relative"
      height="calc(100vh - 56px)"
    >
      <Sidebar default-is-toggle />
      <LeftPanel />
      <ChatPanel />
      <Transition name="fade" mode="out-in">
        <InfoPanel />
      </Transition>
      <mp-flex
        flex="none"
        direction="column"
        align-items="center"
        gap="2"
        width="48px"
        py="2"
        border-left="1px solid"
        border-color="gray.100"
      >
        <mp-button-icon
          name="employee"
          color="sky.400"
          size="md"
          variant="fill"
        />
        <mp-button-icon
          name="help-centre"
          color="pink.400"
          size="md"
          variant="fill"
        />
        <mp-button-icon
          name="talent-management"
          color="apricot.400"
          size="md"
          variant="fill"
        />
      </mp-flex>
    </mp-flex>
    <VoiceWidget />
  </mp-box>
</template>

<script>
import { MpBox, MpFlex, MpButtonIcon } from "@mekari/pixel";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import LeftPanel from "@/components/LeftPanel";
import ChatPanel from "@/components/ChatPanel";
import InfoPanel from "@/components/InfoPanel";

import { VoiceWidget } from "../components/VoiceService";

export default {
  name: "HomeView",
  components: {
    MpBox,
    MpFlex,
    MpButtonIcon,
    Header,
    Sidebar,
    LeftPanel,
    ChatPanel,
    InfoPanel,
    VoiceWidget,
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 500ms;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
