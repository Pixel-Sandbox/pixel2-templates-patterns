<template>
  <mp-box p="4">
    <mp-button variant="outline" @click="handleOpen">Open</mp-button>

    <JurnalMekariAirene :is-open="isOpen" @close="handleClose" />

    <mp-box position="fixed" top="4" right="4" z-index="10">
      <MekariAireneContextual />
    </mp-box>
  </mp-box>
</template>

<script>
import { MpBox, MpButton } from "@mekari/pixel";
import JurnalMekariAirene from "./JurnalUniversalMekariAirene.vue";
import MekariAireneContextual from "./components/MekariAireneContextual.vue";

export default {
  components: {
    MpBox,
    MpButton,
    JurnalMekariAirene,
    MekariAireneContextual,
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    handleOpen() {
      this.isOpen = true;
    },
    handleClose() {
      this.isOpen = false;
    },
  },
};
</script>
