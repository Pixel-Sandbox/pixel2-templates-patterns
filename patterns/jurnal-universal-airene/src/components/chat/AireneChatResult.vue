<template>
  <mp-flex data-element="airene-chat-result" flex-direction="column" gap="2">
    <mp-flex
      data-element="airene-buble-chat-header"
      gap="1"
      align-items="center"
    >
      <mp-avatar
        v-if="type === 'question'"
        :name="avatarFullName"
        :src="avatarUrl"
        height="16px"
        width="16px"
      />

      <svg
        v-else
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.7694 8.21727L10.3917 8.16931C9.0534 7.99838 8.00084 6.94379 7.83127 5.60546L7.786 5.24875C7.71236 4.66437 7.13677 4.27051 6.53077 4.27051C5.93152 4.27051 5.35728 4.64816 5.28026 5.23051L5.23229 5.60816C5.06137 6.9465 4.00678 7.99906 2.66845 8.16863L2.31174 8.21389C1.71453 8.29159 1.3335 8.86313 1.3335 9.46913C1.3335 10.0751 1.69426 10.6467 2.2935 10.7196L2.67115 10.7676C4.00949 10.9385 5.06205 11.9931 5.23162 13.3314L5.27688 13.6882C5.35052 14.2962 5.92612 14.6664 6.53212 14.6664C7.13136 14.6664 7.71304 14.2583 7.78263 13.7064L7.83059 13.3287C8.00151 11.9904 9.0561 10.9379 10.3944 10.7683L10.7511 10.723C11.3517 10.6467 11.7294 10.0738 11.7294 9.46778C11.7294 8.86178 11.3524 8.29024 10.7694 8.21727Z"
          fill="#651FFF"
        />
        <path
          d="M14.1864 3.30639L13.9979 3.28207C13.329 3.19627 12.8021 2.66931 12.7176 2.00049L12.6953 1.82213C12.6582 1.5296 12.3704 1.33301 12.0677 1.33301C11.7678 1.33301 11.4813 1.5215 11.4421 1.81335L11.4178 2.00184C11.332 2.67067 10.8051 3.19762 10.1362 3.28207L9.95787 3.30436C9.65926 3.34355 9.46875 3.62932 9.46875 3.93198C9.46875 4.23464 9.64913 4.52109 9.94909 4.55757L10.1376 4.58189C10.8064 4.66769 11.3334 5.19465 11.4178 5.86348L11.4401 6.04183C11.4766 6.34584 11.7651 6.53095 12.0677 6.53095C12.3677 6.53095 12.6582 6.32693 12.6933 6.05061L12.7176 5.86213C12.8034 5.1933 13.3304 4.66634 13.9992 4.58189L14.1776 4.5596C14.4782 4.52177 14.6667 4.23464 14.6667 3.93198C14.6667 3.62932 14.4782 3.34355 14.1864 3.30639Z"
          fill="#651FFF"
        />
      </svg>

      <mp-text font-weight="semibold" font-size="sm">
        {{ type === "question" ? "Anda" : "Airene" }}
      </mp-text>
    </mp-flex>

    <mp-flex
      v-if="isAnswerLoading"
      data-element="airene-buble-chat-body"
      flex-direction="column"
      gap="2"
      w="full"
    >
      <AireneSkeleton h="12px" w="50%" rounded="full" variant-color="purple" />
      <AireneSkeleton h="12px" w="40%" rounded="full" variant-color="purple" />
      <AireneSkeleton h="12px" w="45%" rounded="full" variant-color="purple" />
    </mp-flex>

    <mp-box v-else data-element="airene-buble-chat-body">
      <!-- Question -->
      <mp-box
        v-if="type === 'question'"
        font-size="md"
        color="black"
        v-html="textQuestion"
      >
      </mp-box>

      <!-- Answer -->
      <mp-box v-else>
        <mp-box
          position="relative"
          p="3"
          rounded="lg"
          bg="radial-gradient(108.28% 139.29% at 0% 0%, #E9F1FD 0%, #F4F0FF 100%)"
        >
          <mp-flex gap="2">
            <mp-box
              v-html="textAnswer"
              font-size="md"
              color="black"
              style="list-style-position: inside"
            ></mp-box>

            <mp-button-icon
              v-if="isShowFullScreen"
              v-mp-tooltip="'Perbesar jawaban'"
              name="full-screen"
              flex="none"
              @click="handleShowFullScreen"
            />
          </mp-flex>

          <mp-box v-if="isShowDataVisualization && getAnswerComponent" mt="3">
            <Component
              :is="getAnswerComponent"
              v-bind="{
                ...tableVisualizationData,
                ...chartVisualizationData,
              }"
            />
          </mp-box>
        </mp-box>
      </mp-box>
    </mp-box>

    <mp-flex
      v-if="type === 'answer'"
      data-element="airene-buble-chat-footer"
      flex-direction="column"
      gap="2"
    >
      <AireneChatAnswerAction
        v-if="isShowAction"
        :action-type="actionType"
        :export-options="exportOptions"
        @copy-text="handleCopyText"
        @export-answer="handleExportAnswer"
        @like="handleLike"
        @dislike="handleDislike"
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

    <mp-box v-if="isShowFullScreen">
      <AireneAnswerFullView
        :is-open="isFullScreenOpen"
        @close="handleCloseFullScreen"
      >
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
      </AireneAnswerFullView>
    </mp-box>
  </mp-flex>
</template>

<script>
import { MpBox, MpAvatar, MpText, MpFlex, MpButtonIcon } from "@mekari/pixel";
import AireneSkeleton from "../utility/AireneSkeleton.vue";

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
    AireneSkeleton,
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

    // AireneChatAnswerAction
    isShowAction: {
      type: Boolean,
      default: false,
    },
    actionType: {
      type: String,
      default: "copy-text", // copy-text, export-answer
    },
    exportOptions: {
      type: Array,
      default: () => ["PDF", "CSV"],
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

    handleCopyText() {
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
    handleLike() {
      this.$emit("like");
    },
    handleDislike() {
      this.$emit("dislike");
    },
    handleExportAnswer(option) {
      this.$emit("export-answer", option);
    },
  },
};
</script>
