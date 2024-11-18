<template>
  <mp-flex data-element="airene-chat-result" flex-direction="column" gap="2">
    <!-- Body -->
    <mp-box data-element="airene-buble-chat-body">
      <!-- Question -->
      <mp-box
        data-element="airene-buble-chat-body-question"
        v-if="type === 'question'"
      >
        <mp-flex
          data-element="airene-buble-chat-header"
          gap="1"
          align-items="center"
          mb="2"
        >
          <mp-avatar
            :name="avatarFullName"
            :src="avatarUrl"
            height="16px"
            width="16px"
          />

          <mp-text font-weight="semibold" font-size="sm"> Anda </mp-text>
        </mp-flex>
        <mp-box
          data-element="airene-buble-chat-body-question-text"
          font-size="md"
          color="black"
          v-html="textQuestion"
        >
        </mp-box>
      </mp-box>

      <!-- Answer -->
      <mp-airene-chat-bubble
        data-element="airene-buble-chat-body-answer"
        v-if="type === 'answer'"
        :is-show-full-screen="isShowFullScreen"
        @click-full-screen="handleShowFullScreen"
      >
        <template #text>
          <mp-box
            data-element="airene-buble-chat-body-answer-text"
            v-html="textAnswer"
            font-size="md"
            color="black"
            style="list-style-position: inside"
          />
        </template>

        <template #data v-if="isShowDataVisualization && getAnswerComponent">
          <Component
            data-element="airene-buble-chat-body-answer-data-visualization"
            :is="getAnswerComponent"
            v-bind="{
              ...tableVisualizationData,
              ...chartVisualizationData,
            }"
          />
        </template>
      </mp-airene-chat-bubble>
    </mp-box>

    <!-- Footer -->
    <mp-flex
      v-if="type === 'answer'"
      data-element="airene-buble-chat-footer"
      flex-direction="column"
      gap="2"
    >
      <!-- Button suggestion -->
      <mp-flex
        v-if="isShowButtonSuggestion && buttonSuggestionDatas.length"
        as="ul"
        gap="2"
        flex-direction="column"
        list-style-type="none"
      >
        <mp-box
          as="li"
          v-for="(value, index) in buttonSuggestionDatas"
          :key="index"
          :data-element="`airene-buble-chat-footer-button-suggestion-${index}`"
        >
          <mp-airene-button
            :is-show-badge="false"
            @click="handleClickButtonSuggestion(value)"
          >
            {{ value }}
          </mp-airene-button>
        </mp-box>
      </mp-flex>

      <!-- Action -->
      <AireneChatAnswerAction
        v-if="isShowAction"
        :is-show-upgrade-package="isShowUpgradePackage"
        :action-type="actionType"
        :export-options="exportOptions"
        :action-url="actionUrl"
        :action-label="actionLabel"
        :rate-answer="rateAnswer"
        @export-answer="handleExportAnswer"
        @click-copy-text="handleClickCopyText"
        @click-thumb-up="handleThumbUp"
        @click-thumb-down="handleThumbDown"
      />

      <AireneDataSource
        v-if="isShowDataSource && dataSources.length"
        :datas="dataSources"
      />

      <AireneFollowingUpQuestions
        v-if="isShowFollowupQuestions && followupQuestionsDatas.length"
        :datas="followupQuestionsDatas"
      />
    </mp-flex>

    <!-- Full screen -->
    <template v-if="isShowFullScreen">
      <AireneAnswerFullView
        :is-open="isFullScreenOpen"
        @close="handleCloseFullScreen"
        @select-export="handleSelectExport"
      >
        <mp-flex flex-direction="column" gap="4">
          <mp-box v-html="textAnswer" font-size="md" color="black"></mp-box>

          <Component
            v-if="isShowDataVisualization && getAnswerComponent"
            :is="getAnswerComponent"
            :show-in-full-view="true"
            v-bind="{
              ...tableVisualizationData,
              ...chartVisualizationData,
            }"
          />
        </mp-flex>
      </AireneAnswerFullView>
    </template>
  </mp-flex>
</template>

<script>
import {
  MpBox,
  MpAvatar,
  MpText,
  MpFlex,
  MpButtonIcon,
  MpAireneChatBubble,
  MpAireneButton,
} from "@mekari/pixel";

import AireneChatAnswerAction from "./AireneChatAnswerAction.vue";
import AireneDataSource from "./AireneDataSource.vue";
import AireneFollowingUpQuestions from "./AireneFollowingUpQuestions.vue";

import AireneAnswerFullView from "../answer/AireneAnswerFullView.vue";
import AireneAnswerTable from "../answer/AireneAnswerTable.vue";
import AireneAnswerBarChart from "../answer/AireneAnswerBarChart.vue";
import AireneAnswerPieChart from "../answer/AireneAnswerPieChart.vue";
import AireneAnswerLineChart from "../answer/AireneAnswerLineChart.vue";

export default {
  components: {
    MpBox,
    MpAvatar,
    MpText,
    MpFlex,
    MpButtonIcon,
    MpAireneChatBubble,
    MpAireneButton,
    AireneChatAnswerAction,
    AireneDataSource,
    AireneFollowingUpQuestions,

    // Answer
    AireneAnswerFullView,
    AireneAnswerTable,
    AireneAnswerBarChart,
    AireneAnswerPieChart,
    AireneAnswerLineChart,
  },
  props: {
    type: {
      type: String,
      default: "question", // question or answer
    },
    textQuestion: {
      type: String,
      default: "",
    },
    textAnswer: {
      type: String,
      default: "",
    },
    isShowDataVisualization: {
      type: Boolean,
      default: false,
    },
    dataVisualizationType: {
      type: String,
      default: "", // table, bar, pie, line
    },
    tableVisualizationData: {
      type: Object,
      default: () => {},
    },
    chartVisualizationData: {
      type: Object,
      default: () => {},
    },
    isAnswerLoading: {
      type: Boolean,
      default: false,
    },
    isShowFullScreen: {
      type: Boolean,
      default: false,
    },
    avatarFullName: {
      type: String,
      default: "",
    },
    avatarUrl: {
      type: String,
      default: "",
    },

    // Button suggestion
    isShowButtonSuggestion: {
      type: Boolean,
      default: false,
    },
    buttonSuggestionDatas: {
      type: Array,
      default: () => [],
    },

    // AireneChatAnswerAction
    isShowAction: {
      type: Boolean,
      default: false,
    },
    isShowUpgradePackage: {
      type: Boolean,
      default: false,
    },
    actionType: {
      type: String,
      default: "copy-text", // copy-text, export-answer
    },
    actionUrl: {
      type: String,
      default: "",
    },
    actionLabel: {
      type: String,
      default: "",
    },
    exportOptions: {
      type: Array,
      default: () => ["PDF", "CSV"],
    },
    rateAnswer: {
      type: String,
      default: "", // thumb-up, thumb-down
    },

    // AireneDataSource
    isShowDataSource: {
      type: Boolean,
      default: false,
    },
    dataSources: {
      type: Array,
      default: () => [],
    },

    // AireneFollowingUpQuestions
    isShowFollowupQuestions: {
      type: Boolean,
      default: false,
    },
    followupQuestionsDatas: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      isFullScreenOpen: false,
    };
  },
  computed: {
    getAnswerComponent() {
      if (!this.dataVisualizationType) return false;
      const component = {
        table: AireneAnswerTable,
        bar: AireneAnswerBarChart,
        pie: AireneAnswerPieChart,
        line: AireneAnswerLineChart,
      };

      return component[this.dataVisualizationType] || false;
    },
  },
  methods: {
    handleShowFullScreen() {
      this.isFullScreenOpen = true;
    },
    handleCloseFullScreen() {
      this.isFullScreenOpen = false;
    },
    handleClickCopyText() {
      navigator.clipboard
        ?.writeText(this.textAnswer)
        .then(() =>
          this.$toast({
            variant: "success",
            title: "Jawaban disalin",
            position: "top",
          })
        )
        .catch((err) => console.error("Failed to copy text:", err));
    },

    handleThumbUp() {
      this.$emit("click-thumb-up");
    },
    handleThumbDown() {
      this.$emit("click-thumb-down");
    },
    handleExportAnswer(option) {
      this.$emit("export-answer", option);
    },
    handleSelectExport(target) {
      alert(target);
    },
    handleClickButtonSuggestion(value) {
      this.$emit("click-button-suggestion", value);
    },
  },
};
</script>
