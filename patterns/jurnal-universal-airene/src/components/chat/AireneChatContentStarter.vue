<template>
  <mp-box
    as="section"
    ref="container"
    pt="var(--chat-content-body-padding-top)"
  >
    <mp-flex gap="1">
      <mp-heading
        data-animation-for="welcome-title-halo"
        class="airene_gradient_text"
      >
        Halo,
      </mp-heading>

      <mp-heading
        data-animation-for="welcome-title-name"
        class="airene_gradient_text"
      >
        {{ welcomeTitle }}
      </mp-heading>
    </mp-flex>

    <mp-text data-animation-for="welcome-message" line-height="1sm" mt="1">
      {{ welcomeMessage }}
    </mp-text>

    <AireneSuggestedQuestion
      data-animation-for="suggested-question"
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

    <AireneBannerPrivacyAndPolicy
      data-animation-for="banner-privacy-and-policy"
      mt="4"
    />
  </mp-box>
</template>

<script>
import anime from "animejs";
import { MpBox, MpText, MpHeading, MpFlex } from "@mekari/pixel";

import AireneChatTagDropdown from "../chat/AireneChatTagDropdown.vue";
import AireneSuggestedQuestion from "./AireneSuggestedQuestion.vue";
import AireneSuggestedQuestionItem from "./AireneSuggestedQuestionItem.vue";
import AireneBannerPrivacyAndPolicy from "../utility/AireneBannerPrivacyAndPolicy.vue";

export default {
  components: {
    MpHeading,
    MpBox,
    MpText,
    MpFlex,
    AireneChatTagDropdown,
    AireneSuggestedQuestion,
    AireneSuggestedQuestionItem,
    AireneBannerPrivacyAndPolicy,
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
  mounted() {
    setTimeout(() => {
      this.handleAnimate();
    });
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

    // Animation
    handleAnimate() {
      var tl = anime.timeline({
        easing: "easeInSine",
        duration: 300,
        delay: 200,
      });

      tl.add({
        targets: "[data-animation-for='welcome-title-halo']",
        delay: 600,
        opacity: [0, 1],
        translateY: ["-16px", 0],
      })
        .add({
          targets: "[data-animation-for='welcome-title-name']",
          delay: 300,
          opacity: [0, 1],
        })
        .add({
          targets: [
            "[data-animation-for='welcome-message']",
            "[data-animation-for='suggested-question']",
            "[data-animation-for='airene-input-chat']",
          ],
          opacity: [0, 1],
          translateY: [8, 0],
        });
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
