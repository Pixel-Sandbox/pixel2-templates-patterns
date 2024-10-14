<template>
  <mp-box
    data-component="AireneContent"
    as="main"
    bg="white"
    rounded-top-left="xl"
    w="full"
    h="full"
    border-left-width="1px"
    border-top-width="1px"
    border-color="gray.400"
    position="relative"
    overflow="auto"
    v-bind="$attrs"
  >
    <!-- Content header -->
    <mp-flex
      position="sticky"
      top="0"
      bg="white"
      w="full"
      data-element="content-header"
      border-bottom-width="1px"
      border-color="gray.200"
      p="4"
      justify-content="flex-end"
      z-index="50"
    >
      <mp-button-icon name="close" @click="handleClose" />
    </mp-flex>

    <!-- Main content -->
    <mp-flex
      data-element="content-body"
      position="relative"
      flex-direction="column"
      gap="4"
      max-w="50%"
      mx="auto"
      min-h="calc(100% - 63px - 108px)"
      style="--chat-content-body-padding-top: 140px"
    >
      <AireneChatContentStarter />

      <AireneDataSource :datas="dataSourceDatas" />
      <AireneFollowupQuestions :datas="followupQuestionsDatas" />

      <AireneAnswerTable :headers="table.headers" :rows="table.rows" />
      <AireneAnswerLineChart />
      <AireneAnswerBarChart />
      <AireneAnswerPieChart />

      <AireneFeedback />
    </mp-flex>

    <!-- Chat input -->
    <mp-box
      position="sticky"
      bottom="0"
      left="0"
      right="0"
      w="full"
      bg="white"
      z-index="50"
    >
      <mp-flex max-w="50%" flex-direction="column" mx="auto" pb="6" pt="4">
        <mp-flex w="full" position="relative">
          <mp-textarea
            v-model="chatText"
            placeholder="Tanya Airene"
            resize="none"
            rows="1"
            height="40px"
            min-height="40px"
            rounded="full"
            pt="10px"
            pb="0"
          />

          <mp-button-icon
            name="sent"
            position="absolute"
            right="10px"
            top="5px"
            rounded="full"
          />
        </mp-flex>

        <mp-text font-size="sm" color="gray.600" mt="1">
          Tanggapan Airene dapat tidak akurat atau kurang tepat.

          <mp-text
            as="span"
            is-link
            @click.native="isOpenModalDisclaimer = true"
          >
            Pelajari lebih lanjut
          </mp-text>
        </mp-text>
      </mp-flex>
    </mp-box>

    <AireneModalDisclaimer
      :is-open="isOpenModalDisclaimer"
      @close="isOpenModalDisclaimer = false"
    />

    <AireneAnswerFullView
      :is-open="isOpenAnswerFullView"
      @close="isOpenAnswerFullView = false"
    >
      <AireneAnswerBarChart :show-in-full-view="true" />
    </AireneAnswerFullView>
  </mp-box>
</template>

<script>
import { MpBox, MpFlex, MpButtonIcon, MpTextarea, MpText } from "@mekari/pixel";

import AireneChatContentStarter from "../components/AireneChatContentStarter.vue";
import AireneFeedback from "../components/AireneFeedback.vue";
import AireneModalDisclaimer from "../components/AireneModalDisclaimer.vue";

import AireneFollowupQuestions from "../components/AireneFollowupQuestions.vue";
import AireneDataSource from "../components/AireneDataSource.vue";

// Answer components
import AireneAnswerLineChart from "../components/AireneAnswerLineChart.vue";
import AireneAnswerBarChart from "../components/AireneAnswerBarChart.vue";
import AireneAnswerPieChart from "../components/AireneAnswerPieChart.vue";
import AireneAnswerTable from "../components/AireneAnswerTable.vue";
import AireneAnswerFullView from "../components/AireneAnswerFullView.vue";

export default {
  components: {
    MpBox,
    MpFlex,
    MpButtonIcon,
    MpTextarea,
    MpText,
    AireneChatContentStarter,
    AireneFeedback,
    AireneModalDisclaimer,
    AireneFollowupQuestions,
    AireneDataSource,
    AireneAnswerLineChart,
    AireneAnswerBarChart,
    AireneAnswerPieChart,
    AireneAnswerTable,
    AireneAnswerFullView,
  },
  data() {
    return {
      chatText: "",
      heightTextArea: "36px",

      isOpenModalDisclaimer: false,
      isOpenAnswerFullView: false,

      // FOLLOWUP QUESTIONS DATAS
      followupQuestionsDatas: [
        "Analisis margin keuntungan per produk untuk memastikan promosi tetap menguntungkan",
        "Identifikasi produk potensial untuk bundling dengan iPhone 13",
        "Evaluasi efektivitas strategi pemasaran untuk produk Apple terbaru",
        "Analisis tren penjualan aksesori Apple dalam 6 bulan terakhir",
      ],

      // DATA SOURCE DATAS
      dataSourceDatas: [
        { name: "Laporan penjualan September 2024", url: "#" },
        { name: "Analisis margin produk Q3 2024", url: "#" },
        { name: "Tren penjualan iPhone 2022-2024", url: "#" },
        { name: "Laporan inventaris terkini", url: "#" },
        { name: "Survei kepuasan pelanggan Agustus 2024", url: "#" },
      ],

      // EXAMPLE OF ANSWER DATAS
      table: {
        headers: ["Nama", "Qty terjual", "Nominal"],
        rows: [
          ["iPhone 14 Pro Max", "8 unit", "Rp90.000.000"],
          ["iPhone 14 Pro", "12 unit", "Rp120.000.000"],
          ["iPhone 13", "15 unit", "Rp105.000.000"],
          ['MacBook Pro 16"', "5 unit", "Rp150.000.000"],
          ["MacBook Air M2", "10 unit", "Rp180.000.000"],
          ['iPad Pro 12.9"', "7 unit", "Rp98.000.000"],
          ["iPad Air", "9 unit", "Rp72.000.000"],
          ["Apple Watch Series 8", "20 unit", "Rp80.000.000"],
          ["AirPods Pro", "25 unit", "Rp62.500.000"],
          ['iMac 24"', "3 unit", "Rp75.000.000"],
        ],
      },
    };
  },
  watch: {
    chatText(newValue) {
      if (newValue.length > 40) {
        this.heightTextArea = "72px";
      } else {
        if (this.isForceExpandTextArea) {
          this.heightTextArea = "72px";
        } else {
          this.heightTextArea = "36px";
        }
      }
    },
  },
  methods: {
    handleClose() {
      this.$emit("close");
    },
  },
};
</script>
