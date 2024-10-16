<template>
  <mp-box
    as="section"
    ref="container"
    pt="var(--chat-content-body-padding-top)"
  >
    <mp-heading class="airene_gradient_text"> {{ welcomeTitle }} </mp-heading>

    <mp-text line-height="1sm" mt="1">
      {{ welcomeMessage }}
    </mp-text>

    <AireneSuggestedQuestion
      v-if="suggestedQuestions.length"
      mt="4"
      title="Saran pertanyaan"
      :current-page="currentPage"
      :total-page="totalPage"
      :is-show-refresh-button="isShowRefreshButton"
      :is-show-pagination="isShowPagination"
      :is-loading="isLoading"
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
  props: {
    welcomeTitle: {
      type: String,
      default: "",
    },
    welcomeMessage: {
      type: String,
      default: "",
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    suggestedQuestions: {
      type: Array,
      default: () => [],
    },
    isShowRefreshButton: {
      type: Boolean,
      default: false,
    },
    isShowPagination: {
      type: Boolean,
      default: false,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
    totalPage: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    // Suggested Question
    handleChangeSuggestedQuestion(index, childIndex, data) {
      this.$emit("change-suggested-question", { index, childIndex, data });
    },
    handleReloadSuggestion() {
      this.$emit("click-reload");
    },
    handleNextSuggestion() {
      this.$emit("click-next");
    },
    handlePreviousSuggestion() {
      this.$emit("click-prev");
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
