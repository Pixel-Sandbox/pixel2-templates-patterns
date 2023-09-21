<template>
  <mp-box p="20" height="100vh" background="background">
    <BackgroundProcess />
  </mp-box>
</template>

<script>
import { MpBox } from "@mekari/pixel";

import BackgroundProcess from "./components/BackgroundProcess.vue";

export default {
  name: "App",
  components: {
    MpBox,
    BackgroundProcess,
  },
};
</script>

