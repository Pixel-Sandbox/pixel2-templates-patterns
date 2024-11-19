<template>
  <mp-box
    id="airene-body"
    data-component="AireneBody"
    as="main"
    body-scroll-lock-ignore="true"
    v-bind="{ ...bodyAttrs, ...$attrs }"
  >
    <!-- Content header -->
    <AireneHeader
      v-if="!isFloating"
      @close="handleClose"
      @minimize="handleMinimize"
    />

    <!-- Blank slate -->
    <AireneBlankSlate
      v-if="isShowBlankSlate"
      :title="blankSlateProp.title"
      :description="blankSlateProp.description"
    />

    <!-- Main content -->
    <mp-flex
      v-else
      data-element="content-body"
      position="relative"
      flex-direction="column"
      gap="4"
      min-h="full"
      v-bind="mainContentAttrs"
    >
      <!-- Starter -->
      <AireneChatContentStarter
        v-if="chatResults.length === 0"
        :is-show-intro-animation="isShowIntroAnimation"
        :is-loading="starterChatContent.isLoading"
        :welcome-title="starterChatContent.welcomeTitle"
        :welcome-message="starterChatContent.welcomeMessage"
        :suggested-questions="starterChatContent.suggestedQuestions"
        :is-show-refresh-button="starterChatContent.isShowRefreshButton"
        :is-show-pagination="starterChatContent.isShowPagination"
        :current-page="starterChatContent.currentPage"
        :total-page="starterChatContent.totalPage"
        @click-next="handleNextSuggestedQuestion"
        @click-prev="handlePrevSuggestedQuestion"
        @click-reload="handleReloadSuggestedQuestion"
        @change-suggested-question="handleChangeSuggestedQuestion"
        @finish-animation="handleFinishAnimation"
      />

      <!-- Result -->
      <template v-else>
        <AireneChatResult
          v-for="chatResult in chatResults"
          :key="chatResult.id"
          :is-show-full-screen="chatResult.isShowFullScreen"
          :type="chatResult.type"
          :text-question="chatResult.textQuestion"
          :text-answer="chatResult.textAnswer"
          :is-show-data-visualization="chatResult.isShowDataVisualization"
          :data-visualization-type="chatResult.dataVisualizationType"
          :table-visualization-data="chatResult.tableVisualizationData"
          :chart-visualization-data="chatResult.chartVisualizationData"
          :is-show-button-suggestion="chatResult.isShowButtonSuggestion"
          :button-suggestion-datas="chatResult.buttonSuggestionDatas"
          :is-show-action="chatResult.isShowAction"
          :is-show-upgrade-package="chatResult.isShowUpgradePackage"
          :action-type="chatResult.actionType"
          :action-url="chatResult.actionUrl"
          :action-label="chatResult.actionLabel"
          :rate-answer="chatResult.rateAnswer"
          :is-show-data-source="chatResult.isShowDataSource"
          :data-sources="chatResult.dataSources"
          :is-show-followup-questions="chatResult.isShowFollowupQuestions"
          :followup-questions-datas="chatResult.followupQuestionsDatas"
          :is-floating="isFloating"
          @export-answer="handleExportAnswer"
          @click-button-suggestion="handleClickButtonSuggestion"
          @click-thumb-up="handleClickThumbUp"
          @click-thumb-down="handleClickThumbDown"
        />
      </template>

      <mp-airene-chat-bubble
        v-if="isAnswerLoading"
        :is-loading="isAnswerLoading"
      >
        <template #loading>
          <mp-skeleton h="12px" w="50%" rounded="full" variant-color="purple" />
          <mp-skeleton h="12px" w="40%" rounded="full" variant-color="purple" />
          <mp-skeleton h="12px" w="45%" rounded="full" variant-color="purple" />
        </template>
      </mp-airene-chat-bubble>

      <!-- Feedback -->
      <AireneFeedback
        @click-thumb-up="handleClickThumbUp"
        @click-thumb-down="handleClickThumbDown"
      />
    </mp-flex>

    <AireneFooter v-if="!isShowBlankSlate" :is-floating="isFloating">
      <mp-form-control
        data-animation-for="airene-input-chat"
        bg="white"
        control-id="airene-input-chat"
      >
        <mp-airene-chat-input v-model="prompt" @keydown="handleKeydown">
          <AireneChatTopic
            :topic="currentTopic"
            :options="availableTopics"
            :is-topic-change-confirmation-needed="chatResults.length > 0"
            @select-topic="handleSelectTopic"
          />
        </mp-airene-chat-input>

        <mp-form-error-message>
          You must fill in chat input
        </mp-form-error-message>

        <mp-form-help-text>
          Tanggapan Airene dapat tidak akurat atau kurang tepat.

          <mp-text
            as="span"
            font-size="sm"
            is-link
            @click.native="isOpenModalDisclaimer = true"
          >
            Pelajari lebih lanjut
          </mp-text>
        </mp-form-help-text>
      </mp-form-control>
    </AireneFooter>

    <AireneModalFeedback
      :is-open="isOpenModalFeedback"
      @close="isOpenModalFeedback = false"
      @confirm="handleConfirmFeedback"
    />

    <AireneModalDisclaimer
      :is-open="isOpenModalDisclaimer"
      @close="isOpenModalDisclaimer = false"
    />
  </mp-box>
</template>

<script>
/**
 * @typedef {import('../examples-datasets/chat-results').ChatResult} ChatResult
 */

import {
  MpBox,
  MpFlex,
  MpText,
  MpAireneChatInput,
  MpFormControl,
  MpFormHelpText,
  MpFormErrorMessage,
  MpSkeleton,
  MpAireneChatBubble,
} from "@mekari/pixel";

import {
  EXAMPLE_CHAT_RESULT,
  getChatResult,
  genRandomId,
} from "../examples-datasets/chat-results";

// Layout components
import AireneFooter from "../components/layout/AireneFooter.vue";
import AireneHeader from "../components/layout/AireneHeader.vue";
import AireneBlankSlate from "../components/layout/AireneBlankSlate.vue";

// Chat components
import AireneChatContentStarter from "../components/chat/AireneChatContentStarter.vue";
import AireneFeedback from "../components/chat/AireneFeedback.vue";
import AireneChatResult from "../components/chat/AireneChatResult.vue";
import AireneChatTopic from "../components/chat/AireneChatTopic.vue";

// Modal components
import AireneModalDisclaimer from "../components/modal/AireneModalDisclaimer.vue";
import AireneModalFeedback from "../components/modal/AireneModalFeedback.vue";

export default {
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpAireneChatInput,
    MpFormControl,
    MpFormHelpText,
    MpFormErrorMessage,
    MpSkeleton,
    MpAireneChatBubble,
    AireneChatContentStarter,
    AireneFooter,
    AireneHeader,
    AireneBlankSlate,
    AireneFeedback,
    AireneModalDisclaimer,
    AireneChatResult,
    AireneChatTopic,
    AireneModalFeedback,
  },
  props: {
    isShowIntroAnimation: {
      type: Boolean,
      default: false,
    },
    isFloating: {
      type: Boolean,
      default: false,
    },
  },
  inject: ["$AireneContext"],
  data() {
    return {
      isShowBlankSlate: false,
      blankSlateProp: {
        title: "Tidak dapat memuat percakapan",
        description: "Silakan cek koneksi internet Anda atau coba lagi nanti.",
      },

      isAnswerLoading: false,
      prompt: "",
      currentTopic: "Penjualan",
      availableTopics: [
        "Kas & bank",
        "Penjualan",
        "Pembelian",
        "Biaya",
        "Kontak",
        "Produk",
        "Akun",
        "Aset",
      ],
      isOpenModalDisclaimer: false,
      isOpenModalFeedback: false,

      /**
       *
       * @see AireneChatResult.vue props.
       * @type {ChatResult[]}
       */
      chatResults: [],

      /**
       * @see AireneChatContentStarter.vue props.
       */
      starterChatContent: {
        welcomeTitle: "Rizal Chandra!",
        welcomeMessage:
          "Apakah ada yang bisa dibantu oleh Airene terkait data penjualan, pembelian atau terkait akuntansi lainnya?",
        isLoading: false,
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
              periode: [
                "Bulan ini",
                "Bulan lalu",
                "Quarter ini",
                "Quarter lalu",
                "Tahun ini",
                "Tahun lalu",
                "2 tahun lalu",
                "3 tahun lalu",
                "4 tahun lalu",
              ],
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
        isShowRefreshButton: true,
        isShowPagination: true,
        currentPage: 1,
        totalPage: 4,
      },
    };
  },
  computed: {
    context() {
      return this.$AireneContext();
    },
    bodyAttrs() {
      if (!this.isFloating) {
        return {
          bg: "white",
          roundedTopLeft: "xl",
          w: "full",
          h: "full",
          borderLeftWidth: "1px",
          borderTopWidth: "1px",
          borderColor: "gray.400",
          position: "relative",
          overflow: "auto",
        };
      }

      return {
        bg: "white",
        w: "full",
        h: "full",
        position: "relative",
        overflow: "auto",
      };
    },
    mainContentAttrs() {
      if (!this.isFloating) {
        return {
          maxWidth: "50%",
          marginX: "auto",
          minHeight: "calc(100% - 63px - 108px)",
          paddingTop: "6",
          style: { "--chat-content-body-padding-top": "140px" },
        };
      }

      return {};
    },
  },
  watch: {
    "context.currentActiveChat": {
      handler(newValue) {
        // Reset chat-related data when the active chat changes

        this.isAnswerLoading = false;
        this.handleEmptyChatInput();

        // Simulate blank slate.
        if (newValue === 2) {
          this.isShowBlankSlate = true;
          return;
        }

        this.isShowBlankSlate = false;

        // Simulate New chat
        if (newValue === "" || newValue === 0) {
          this.chatResults = [];
          return;
        }

        // Simulate chat results
        this.chatResults = EXAMPLE_CHAT_RESULT;
        this.$nextTick(() => {
          this.handleScrollToTop();
        });
      },
      immediate: true,
    },
  },
  methods: {
    handleClose() {
      this.$emit("close");
    },
    handleMinimize() {
      this.$emit("minimize");
    },

    // Chat Input handler
    handleSelectTopic(topic) {
      this.currentTopic = topic;
    },
    handleKeydown(e) {
      if (e.keyCode === 13 && !e.shiftKey) {
        e.preventDefault(); // Prevent the default behavior of create new line
        this.handleSubmitPrompt();
      }
    },
    async handleSubmitPrompt() {
      // Prevent submit if prompt is empty or answer is loading
      if (this.prompt.length === 0 || this.isAnswerLoading) return;

      let restPrompt = JSON.stringify(this.prompt);

      const question = {
        id: genRandomId(),
        type: "question",
        textQuestion: this.prompt,
      };
      this.chatResults.push(question);

      this.isAnswerLoading = true;

      this.$nextTick(() => {
        this.handleEmptyChatInput();

        // Scroll to end of element
        const aireneBody = document.getElementById("airene-body");
        const shouldAdjustScroll = aireneBody && this.chatResults.length > 1;
        if (shouldAdjustScroll) {
          aireneBody.scrollTo({
            top: aireneBody.scrollHeight,
            behavior: "smooth",
          });
        }
      });

      // Simulate chat result using FAKE_CHAT_RESULT
      try {
        /**
         *
         * @type {ChatResult}
         */
        const result = await getChatResult(restPrompt);
        this.chatResults.push(result);
        this.isAnswerLoading = false;

        console.log("CHAT RESULTS", this.chatResults);
      } catch (error) {
        console.error("Error getting chat result:", error);
        this.isAnswerLoading = false;
      }
    },

    // Button Suggestion
    handleClickButtonSuggestion(value) {
      alert(value);
    },

    // Chat Answer Action
    handleExportAnswer(value) {
      alert(value);
    },
    handleClickThumbUp() {
      this.handleOpenModalFeedback();
    },
    handleClickThumbDown() {
      this.handleOpenModalFeedback();
    },

    // Chat Starter handler
    handleReloadSuggestedQuestion() {
      alert("reload");
    },
    handleChangeSuggestedQuestion(ctx) {
      const { index, childIndex, data } = ctx;
      const suggestedQuestion =
        this.starterChatContent.suggestedQuestions[index];

      // Update the value of the selected dropdown
      suggestedQuestion.content[childIndex].value = data;

      // Set loading state
      suggestedQuestion.isLoading = true;

      // Simulate loading suggested question with a 1-second delay
      setTimeout(() => {
        suggestedQuestion.isLoading = false;
      }, 1000);
    },
    handleNextSuggestedQuestion() {
      alert("next");
    },
    handlePrevSuggestedQuestion() {
      alert("prev");
    },

    // Modal Feedback
    handleOpenModalFeedback() {
      this.isOpenModalFeedback = true;
    },
    handleConfirmFeedback() {
      this.isOpenModalFeedback = false;

      this.$toast({
        id: "test",
        variant: "success",
        title: "Saran berhasil dikirim",
        position: "top",
        zIndex: 9999, // Custom zIndex
      });
    },

    // Utils
    handleScrollToTop() {
      const aireneBody = document.getElementById("airene-body");
      if (aireneBody) {
        aireneBody.scrollTo({
          top: 0,
        });
      }
    },
    handleEmptyChatInput() {
      const chatInputElement = document.getElementById("airene-input-chat");

      if (chatInputElement) {
        const textareaElement = chatInputElement.querySelector("textarea");

        // Reset textarea value
        this.prompt = "";
        textareaElement.value = "";
        textareaElement.dispatchEvent(new Event("input", { bubbles: true }));
      }
    },

    // Animation
    handleFinishAnimation() {
      this.context.handleToggleAnimation("chatContentStarter", true);
    },
  },
};
</script>
