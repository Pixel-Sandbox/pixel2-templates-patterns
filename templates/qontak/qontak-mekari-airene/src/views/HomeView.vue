<template>
  <mp-box>
    <Header></Header>
    <mp-flex as="main" max-height="calc(100vh - 60px)">
      <Sidebar is-alternate is-custom />
      <LeftPanel />
      <ChatPanel />
      <InfoPanel />
    </mp-flex>  
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
} from "@mekari/pixel";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import LeftPanel from "@/components/LeftPanel";
import ChatPanel from "@/components/ChatPanel"
import InfoPanel from "@/components/InfoPanel";

export default {
  name: "HomeView",
  components: {
    Header,
    MpBox,
    MpFlex,
    Sidebar,
    LeftPanel,
    ChatPanel,
    InfoPanel
  },
  data() {
    return {}  
  },
  methods: {},
};
</script>
