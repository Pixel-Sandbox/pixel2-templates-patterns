<template>
  <mp-box
    position="absolute"
    left="0"
    top="0"
    z-index="1000"
    pointer-events="none"
    height="100vh"
    width="100vw"
  >
    <mp-box
      v-if="isDragging"
      pointer-events="none"
      h="100vh"
      w="100vw"
      position="fixed"
      top="0"
      left="0"
      z-index="modal"
      p="4"
      display="flex"
      justify-content="flex-end"
    >
      <mp-box
        height="full"
        width="300px"
        border-width="3px"
        :border-color="isShowHighlight ? 'blue.400' : 'gray.200'"
        bg="gray.25"
        rounded="xl"
        opacity="1"
      />
    </mp-box>

    <mp-box position="fixed" height="100vh" width="100vw" z-index="modal">
      <mp-flex
        ref="container"
        position="relative"
        pointer-events="auto"
        width="376px"
        height="80vh"
        box-shadow="0px 10px 15px -3px rgba(0, 0, 0, 0.10), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)"
        rounded="xl"
        flex-direction="column"
        overflow="hidden"
        border-width="1px"
        :border-color="isDragging ? 'blue.400' : 'transparent'"
      >
        <mp-flex
          ref="header"
          as="header"
          justify-content="space-between"
          align-items="center"
          padding="3"
          cursor="move"
          :bg="isDragging ? 'gray.25' : 'white'"
        >
          <mp-flex align="center" gap="0">
            <mp-button
              variant="unstyled"
              cursor="pointer"
              @click="handleClickMenu"
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.75 16H27.25M8.75 20H27.25"
                  stroke="#626B79"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </mp-button>
          </mp-flex>

          <mp-flex align="center" gap="0">
            <mp-popover close-on-select use-portal>
              <mp-popover-trigger>
                <mp-button-icon name="menu-meatball" />
              </mp-popover-trigger>

              <mp-popover-content
                width="180px"
                bg="white"
                rounded="md"
                shadow="lg"
                border-width="1px"
                border-color="gray.400"
              >
                <mp-popover-list>
                  <mp-popover-list-item>
                    <mp-box display="flex" align-items="center">
                      <mp-icon name="full-screen" mr="2" />
                      Chat in full page
                    </mp-box>
                  </mp-popover-list-item>

                  <mp-popover-list-item>
                    <mp-box display="flex" align-items="center">
                      <mp-icon name="help-centre" mr="2" />
                      Help
                    </mp-box>
                  </mp-popover-list-item>

                  <mp-popover-list-item>
                    <mp-box display="flex" align-items="center">
                      <mp-icon name="settings" mr="2" />
                      Settings
                    </mp-box>
                  </mp-popover-list-item>
                </mp-popover-list>
              </mp-popover-content>
            </mp-popover>

            <mp-button-icon name="restore" @click="toggleThreads(true)" />
            <mp-button-icon name="close" @click="handleClose" />
          </mp-flex>
        </mp-flex>

        <mp-box
          position="relative"
          p="4"
          height="full"
          width="full"
          overflow="auto"
          :opacity="isDragging ? 0.5 : 1"
        >
          <!-- Main content -->
          <mp-flex
            data-element="content-body"
            position="relative"
            flex-direction="column"
            gap="4"
            height="full"
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
                <mp-skeleton
                  h="12px"
                  w="50%"
                  rounded="full"
                  variant-color="purple"
                />
                <mp-skeleton
                  h="12px"
                  w="40%"
                  rounded="full"
                  variant-color="purple"
                />
                <mp-skeleton
                  h="12px"
                  w="45%"
                  rounded="full"
                  variant-color="purple"
                />
              </template>
            </mp-airene-chat-bubble>

            <!-- Feedback -->
            <AireneFeedback
              @click-thumb-up="handleClickThumbUp"
              @click-thumb-down="handleClickThumbDown"
            />
          </mp-flex>

          <AireneFooter is-floating>
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

              <mp-form-error-message
                >You must fill in chat input</mp-form-error-message
              >
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
        </mp-box>

        <mp-box
          v-show="isShowThreads"
          position="absolute"
          top="0"
          left="0"
          right="0"
          height="full"
          bg="white"
        >
          <mp-flex
            ref="threadHeader"
            align="center"
            gap="2"
            px="4"
            py="3"
            cursor="move"
          >
            <mp-button-icon @click="toggleThreads(false)" name="arrows-left" />
            <mp-text> Threads </mp-text>
          </mp-flex>

          <mp-flex flex-direction="column" height="full" p="4">
            <mp-button left-icon="add" variant="outline" is-full-width>
              New chat
            </mp-button>

            <mp-flex
              data-element="thread-list"
              class="airene-custom-scrollbar"
              flex-direction="column"
              mt="5"
              h="100%"
              overflow-y="auto"
              bg="white"
            >
              <mp-flex
                as="ul"
                data-element="thread-list-body"
                flex-direction="column"
                gap="5"
              >
                <AireneChatGroup
                  v-for="group in getChatHistory"
                  :key="group.groupName"
                  :title="group.groupName"
                >
                  <AireneChatItem
                    v-for="chat in group.datas"
                    :key="chat.id"
                    :is-active="isChatActive(chat.id)"
                    @select="handleSelectChat(chat)"
                    @delete="handleDeleteChat(chat)"
                    @edit="handleRenameChat(chat)"
                    defaultBackground="transparent"
                  >
                    {{ chat.label }}
                  </AireneChatItem>
                </AireneChatGroup>
              </mp-flex>
            </mp-flex>
          </mp-flex>
        </mp-box>
      </mp-flex>
    </mp-box>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpButtonIcon,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverList,
  MpPopoverListItem,
  MpPopoverContent,
  MpIcon,
  MpButton,
  MpText,
  MpFormControl,
  MpFormErrorMessage,
  MpFormHelpText,
  MpAireneChatInput,
} from "@mekari/pixel";
import { Draggable } from "@neodrag/vanilla";
import { groupChatsByDate } from "../utils";

import { getChatResult, genRandomId } from "../examples-datasets/chat-results";

// Airene components
import AireneChatItem from "../components/chat/AireneChatItem.vue";
import AireneChatGroup from "../components/chat/AireneChatGroup.vue";
import AireneFooter from "../components/layout/AireneFooter.vue";
import AireneChatTopic from "../components/chat/AireneChatTopic.vue";

export default {
  components: {
    MpBox,
    MpFlex,
    MpButtonIcon,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverList,
    MpPopoverListItem,
    MpPopoverContent,
    MpIcon,
    MpButton,
    MpText,
    MpFormControl,
    MpFormErrorMessage,
    MpFormHelpText,
    MpAireneChatInput,

    // Airene components
    AireneChatItem,
    AireneChatGroup,
    AireneFooter,
    AireneChatTopic,
  },
  inject: ["$AireneContext"],
  data() {
    return {
      dragInstance: null,
      isDragging: false,
      isMaxWidth: false,
      isFixedOnRight: false,
      isShowHighlight: false,
      position: { x: 0, y: 0 },

      isShowThreads: false,
      SIDEBAR_DATAS: [
        {
          id: 0,
          created_at: new Date().toISOString(),
          label: "Percakapan baru",
        },
        {
          id: 1,
          created_at: "2024-10-24T09:15:23.123456",
          label: "Analisis penjualan Q3 2024",
        },
        {
          id: 2,
          created_at: "2024-10-22T14:30:45.678901",
          label: "Proyeksi laba bersih November 2024",
        },
        {
          id: 3,
          created_at: "2024-10-18T11:05:37.246810",
          label: "Evaluasi kinerja karyawan bulan Oktober",
        },
        {
          id: 4,
          created_at: "2024-10-10T16:45:12.135790",
          label: "Analisis tren penjualan produk baru",
        },
        {
          id: 5,
          created_at: "2024-09-28T08:20:54.987654",
          label: "Laporan keuangan September 2024",
        },
        {
          id: 6,
          created_at: "2024-09-15T13:40:33.246135",
          label: "Strategi pemasaran Q4 2024",
        },
        {
          id: 7,
          created_at: "2024-08-30T10:55:18.753951",
          label: "Analisis kompetitor Agustus 2024",
        },
        {
          id: 8,
          created_at: "2024-08-12T15:25:42.159753",
          label: "Perencanaan anggaran 2025",
        },
        {
          id: 9,
          created_at: "2024-07-28T09:10:36.852147",
          label: "Evaluasi kinerja tim sales Juli 2024",
        },
        {
          id: 10,
          created_at: "2024-07-15T14:50:27.369258",
          label: "Analisis kepuasan pelanggan Q2 2024",
        },
        {
          id: 11,
          created_at: "2024-06-30T11:35:49.741852",
          label: "Laporan keuangan semester I 2024",
        },
        {
          id: 12,
          created_at: "2024-06-18T16:05:33.159357",
          label: "Strategi ekspansi pasar untuk Q3 2024",
        },
      ],

      // Chat
      /**
       *
       * @see AireneChatResult.vue props.
       * @type {ChatResult[]}
       */
      chatResults: [],
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
    };
  },
  mounted() {
    const containerEl = this.$refs.container.$el;
    const headerElement = this.$refs.header.$el;
    const threadHeaderElement = this.$refs.threadHeader.$el;

    this.dragInstance = new Draggable(containerEl, {
      bounds: {
        left: 16,
        right: 16,
        top: 16,
        bottom: 16,
      },
      handle: [headerElement, threadHeaderElement],
      onDragStart: (data) => {
        console.log("Dragging started", data);
      },
      onDrag: (data) => {
        console.log("Dragging", data);

        this.isDragging = true;
        const windowWidth = window.innerWidth;

        const containerEl = this.$refs.container.$el;
        const containerWidth = containerEl.offsetWidth;
        const maxWidth = windowWidth - containerWidth - 16 - 16 - 100;

        if (data.offsetX >= maxWidth) {
          this.isMaxWidth = true;
          this.isShowHighlight = true;

          console.log("Max width reached");
        } else {
          this.isMaxWidth = false;
          this.isShowHighlight = false;

          console.log("Max width not reached");
        }
      },
      onDragEnd: (data) => {
        this.isDragging = false;
        console.log("Dragging stopped", data);

        if (this.isMaxWidth) {
          this.isFixedOnRight = true;
          this.$toast({
            variant: "success",
            title: "Max width reached",
            position: "top",
            zIndex: 9999, // Custom zIndex
          });
        } else {
          this.isFixedOnRight = false;
        }

        this.isShowHighlight = false;

        this.position = { x: 0, y: 0 };
      },
    });
  },
  computed: {
    context() {
      return this.$AireneContext();
    },
    getChatHistory() {
      const groupedDatas = groupChatsByDate(this.SIDEBAR_DATAS);
      console.log("4. groupedDatas", groupedDatas);
      return groupedDatas;
    },
  },
  methods: {
    handleClickMenu() {
      this.$emit("click-menu");
    },
    toggleThreads(value) {
      this.isShowThreads = value;
    },
    handleClose() {
      this.$emit("close");
    },

    // Chat
    handleSelectChat(chat) {
      this.$emit("select-chat", chat);

      this.toggleThreads(false);
    },
    isChatActive(chatId) {
      return this.context.currentActiveChat === chatId;
    },
    handleDeleteChat(chat) {
      this.$emit("delete-chat", chat);
    },
    handleRenameChat(chat) {
      this.$emit("rename-chat", chat);
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
  },
};
</script>
