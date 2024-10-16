<template>
  <mp-box
    as="section"
    ref="container"
    pt="var(--chat-content-body-padding-top)"
  >
    <mp-heading class="airene_gradient_text"> Halo, Rizal Chandra! </mp-heading>

    <mp-text line-height="1sm" mt="1">
      Apakah ada yang bisa dibantu oleh Airene terkait data penjualan, pembelian
      atau terkait akuntansi lainnya?
    </mp-text>

    <AireneSuggestedQuestion
      mt="4"
      title="Saran pertanyaan"
      :current-page="1"
      :total-page="4"
      is-show-refresh-button
      is-show-pagination
      :is-loading="isSuggestedQuestionLoading"
      @reload="handleReloadSuggestion"
      @next="handleNextSuggestion"
      @previous="handlePreviousSuggestion"
    >
      <AireneSuggestedQuestionItem
        v-for="(item, index) in suggestedQuestions"
        :key="item.id"
        description="Menampilkan analisa tren penjualan pada bulan ini"
        :is-loading="item.isLoading"
      >
        <template v-for="(data, childIndex) in item.content">
          <mp-text v-if="data.type === 'text'" as="span" :key="data.value">
            {{ data.value }}
          </mp-text>

          <AireneChatTagDropdown
            v-else-if="data.type === 'dropdown'"
            :key="data.value"
            :label="data.value"
            :items="item.meta[data.key]"
            @select="
              (data) => handleChangeSuggestedQuestion(index, childIndex, data)
            "
          />
        </template>
      </AireneSuggestedQuestionItem>
    </AireneSuggestedQuestion>
  </mp-box>
</template>

<script>
import { MpBox, MpText, MpHeading } from "@mekari/pixel";

import AireneChatTagDropdown from "../chat/AireneChatTagDropdown.vue";

import AireneSuggestedQuestion from "./AireneSuggestedQuestion.vue";
import AireneSuggestedQuestionItem from "./AireneSuggestedQuestionItem.vue";

export default {
  components: {
    MpHeading,
    MpBox,
    MpText,
    AireneChatTagDropdown,
    AireneSuggestedQuestion,
    AireneSuggestedQuestionItem,
  },
  data() {
    return {
      isLoading: true,
      isSuggestedQuestionLoading: true,
      suggestedQuestions: [
        {
          id: 1,
          description: "Menampilkan analisa tren penjualan pada bulan ini",
          isLoading: false,
          content: [
            { type: "text", value: "Analisa tren" },
            { type: "dropdown", value: "Penjualan", key: "kategori" },
            { type: "dropdown", value: "Bulan ini", key: "periode" },
          ],
          meta: {
            kategori: ["Penjualan", "Pembelian"],
            periode: ["Bulan ini", "Bulan lalu", "Tahun lalu", "Tahun ini"],
          },
        },
        {
          id: 2,
          description: "Menampilkan perbandingan pendapatan dan pengeluaran",
          isLoading: false,
          content: [
            { type: "text", value: "Bandingkan" },
            { type: "dropdown", value: "Pendapatan", key: "kategori1" },
            { type: "text", value: "dan" },
            { type: "dropdown", value: "Pengeluaran", key: "kategori2" },
            { type: "dropdown", value: "Tahun ini", key: "periode" },
          ],
          meta: {
            kategori1: [
              "Pendapatan",
              "Laba Kotor",
              "Laba Bersih",
              "Penjualan",
              "Arus Kas",
              "Piutang",
              "Aset",
              "Modal",
              "Ekuitas",
              "Investasi",
              "Pendapatan Operasional",
              "Pendapatan Non-Operasional",
              "Laba Sebelum Pajak",
              "Laba Setelah Pajak",
              "EBITDA",
              "Margin Kotor",
              "Margin Bersih",
              "ROI",
              "ROA",
              "ROE",
            ],
            kategori2: ["Pengeluaran", "Biaya Operasional", "Pajak"],
            periode: ["Tahun ini", "Tahun lalu", "5 tahun terakhir"],
          },
        },
        {
          id: 3,
          description: "Menampilkan analisis produk terlaris",
          isLoading: false,
          content: [
            { type: "text", value: "Tampilkan" },
            { type: "dropdown", value: "10", key: "jumlah" },
            { type: "text", value: "produk terlaris" },
            { type: "dropdown", value: "Bulan ini", key: "periode" },
          ],
          meta: {
            jumlah: ["5", "10", "20", "50"],
            periode: [
              "Bulan ini",
              "3 bulan terakhir",
              "6 bulan terakhir",
              "Tahun ini",
            ],
          },
        },
      ],
    };
  },
  mounted() {
    setTimeout(() => {
      this.isSuggestedQuestionLoading = false;
    }, 2000);
  },
  methods: {
    // Suggested Question
    handleChangeSuggestedQuestion(index, childIndex, data) {
      this.suggestedQuestions[index].content[childIndex].value = data;

      this.suggestedQuestions[index].isLoading = true;

      setTimeout(() => {
        this.suggestedQuestions[index].isLoading = false;
      }, 1000);
    },
    handleReloadSuggestion() {
      this.isSuggestedQuestionLoading = true;

      setTimeout(() => {
        this.isSuggestedQuestionLoading = false;
      }, 2000);
    },
    handleNextSuggestion() {
      console.log("next");
    },
    handlePreviousSuggestion() {
      console.log("previous");
    },
  },
};
</script>

<style scoped>
.airene_gradient_text {
  background: var(
    --Gradient-deep-purple,
    linear-gradient(96deg, #bd63f8 2.22%, #5f37e1 98.05%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
