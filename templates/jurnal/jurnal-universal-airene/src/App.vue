<template>
  <mp-box p="4">
    <mp-airene-button @click="handleOpen">
      Analisis performa penjualan
    </mp-airene-button>

    <UniversalAirene
      :is-open="isOpen"
      @close="handleClose"
      :enable-intro-animation="isShowIntroAnimation"
      @finish-animation="handleFinishAnimation"
    />
    <mp-box
      v-if="isShowAireneContextual"
      position="fixed"
      top="4"
      right="4"
      z-index="10"
    >
      <AireneContextual
        :option-lists="contextOptionLists"
        @select="handleSelectOption"
        @close="handleCloseContextual"
      />
    </mp-box>
  </mp-box>
</template>

<script>
import { MpBox, MpAireneButton } from "@mekari/pixel";
import UniversalAirene from "./parts/UniversalAirene.vue";
import AireneContextual from "./parts/AireneContextual.vue";

export default {
  components: {
    MpBox,
    MpAireneButton,
    UniversalAirene,
    AireneContextual,
  },
  data() {
    return {
      isOpen: false,
      isShowIntroAnimation: true,
      isShowAireneContextual: true,

      contextOptionLists: [
        {
          id: 1,
          name: "Beri ringkasan laporan",
        },
        {
          id: 2,
          name: "Cek anomali bulan ini",
        },
        {
          id: 3,
          name: "Proyeksi laba bersih kuartal depan",
        },
      ],
      typingText: "Hello, I'm Airene, your AI assistant",
    };
  },
  methods: {
    handleOpen() {
      this.isOpen = true;
    },
    handleClose() {
      this.isOpen = false;
    },
    handleSelectOption(option) {
      console.log(option);

      this.handleOpen();
    },
    handleCloseContextual(payload) {
      console.log(payload);
      this.isShowAireneContextual = false;
    },
    handleFinishAnimation() {
      this.isShowIntroAnimation = false;
    },
  },
};
</script>
