<template>
  <mp-box>
    <Header />
    <mp-flex as="main" position="relative" height="calc(100vh - 56px)">
      <Sidebar default-is-toggle />
      <LeftPanel />
      <ChatPanel @show-airene="onShowAirene" />
      <Transition name="fade" mode="out-in">
        <!-- <AireneIntro /> -->
        <AireneDrawer v-if="isShowAskAirene" @close="onCloseAirene"/>
        <InfoPanel v-if="isShowInfoPanel" />
      </Transition>
      <mp-flex
        flex='none'
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
          :is-active="isShowInfoPanel"
          @click="onCloseAirene"
        />
        <AireneIcon :is-active="isShowAskAirene" @click="onShowAirene" />
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
  </mp-box>
</template>

<script>
import { MpBox, MpFlex, MpButtonIcon } from "@mekari/pixel";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import LeftPanel from "@/components/LeftPanel";
import ChatPanel from "@/components/ChatPanel";
import InfoPanel from "@/components/InfoPanel";
import { AireneDrawer, AireneIcon } from "@/components/AskAirene";

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
    AireneDrawer,
    AireneIcon,
  },
  data() {
    return {
      isShowInfoPanel: true,
      isShowAskAirene: false,
    };
  },
  methods: {
    onShowAirene() {
      this.isShowAskAirene = true;
      this.isShowInfoPanel = false;
    },
    onCloseAirene() {
      this.isShowAskAirene = false;
      this.isShowInfoPanel = true;
    },
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
