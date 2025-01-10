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
      :visibility="isDragging ? 'visible' : 'hidden'"
      :opacity="isDragging ? 1 : 0"
      transition="all 0.3s"
    >
      <mp-box
        height="full"
        :width="`${this.CONTAINER_WIDTH}px`"
        border-width="2px"
        :border-color="isShowSafeAreaHighlight ? 'blue.400' : 'gray.200'"
        bg="rgba(241, 245, 249, 0.5)"
        rounded="xl"
        opacity="1"
      />
    </mp-box>

    <mp-box position="fixed" height="100vh" width="100vw" z-index="modal">
      <mp-flex
        ref="container"
        position="relative"
        pointer-events="auto"
        :width="`${this.CONTAINER_WIDTH}px`"
        :height="isDocking ? 'calc(100vh - 16px - 16px)' : '80vh'"
        box-shadow="0px 10px 15px -3px rgba(0, 0, 0, 0.10), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)"
        rounded="xl"
        flex-direction="column"
        overflow="hidden"
        border-width="1px"
        :border-color="isDragging ? 'blue.400' : 'transparent'"
        :style="{
          transition: isDocking
            ? 'height 0.3s cubic-bezier(0.4, 0, 0.2, 1), transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
            : 'height 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }"
      >
        <!-- Header -->
        <mp-flex
          ref="header"
          as="header"
          justify-content="space-between"
          align-items="center"
          padding="3"
          :cursor="isDocking ? 'default' : 'move'"
          :bg="isDragging ? 'gray.25' : 'white'"
        >
          <mp-flex align="center" gap="0">
            <mp-button
              variant="unstyled"
              cursor="pointer"
              display="inline-flex"
              align-items="center"
              justify-content="center"
              rounded="sm"
              height="7.5"
              min-width="7"
              transition="all 0.2s"
              :_hover="{ bg: 'gray.50', color: 'gray.600' }"
              :_active="{
                boxShadow: 'inset 0px 2px 6px rgba(0, 0, 0, 0.12)',
                bg: 'ice.50',
                color: 'blue.400',
              }"
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
                  <mp-popover-list-item @click="handleClickMaximize">
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
            <mp-button-icon name="close" @click="handleClickClose" />
          </mp-flex>
        </mp-flex>

        <!-- Content -->
        <AireneBody
          :is-floating="true"
          px="4"
          pt="4"
          :background="isDragging ? 'rgba(255, 255, 255, 0.5)' : 'white'"
          :visibility="isShowThreads ? 'hidden' : 'visible'"
          :transform="isShowThreads ? 'translateX(-100%)' : 'translateX(0%)'"
          transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
        />

        <!-- Threads -->
        <mp-box
          :visibility="isShowThreads ? 'visible' : 'hidden'"
          :transform="isShowThreads ? 'translateX(0)' : 'translateX(100%)'"
          transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
          position="absolute"
          top="0"
          left="0"
          right="0"
          height="full"
          bg="white"
          overflow-y="auto"
        >
          <mp-flex
            ref="threadHeader"
            position="sticky"
            z-index="sticky"
            top="0"
            bg="white"
            align="center"
            gap="2"
            px="4"
            py="3"
            :cursor="isDocking ? 'default' : 'move'"
          >
            <mp-button-icon
              @click.prevent="toggleThreads(false)"
              name="arrows-left"
            />
            <mp-text> Threads </mp-text>
          </mp-flex>

          <mp-flex flex-direction="column" px="4" pb="4">
            <mp-button
              left-icon="add"
              variant="outline"
              is-full-width
              @click="handleClickNewChat"
            >
              New chat
            </mp-button>

            <mp-flex
              data-element="thread-list"
              class="airene-custom-scrollbar"
              flex-direction="column"
              mt="5"
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

    <AireneDeleteDialog
      :is-open="isOpenDeleteDialog"
      @close="handleCloseDeleteDialog"
      @confirm="handleConfirmDeleteDialog"
    />

    <AireneModalRenameChat
      :is-open="isOpenRenameChat"
      @close="handleCloseRenameChat"
      @confirm="handleConfirmRenameChat"
    />
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
} from "@mekari/pixel";
import { Draggable } from "@neodrag/vanilla";
import { groupChatsByDate, generateRelativeDate } from "../utils";

import { getChatResult, genRandomId } from "../examples-datasets/chat-results";

// Airene components
import AireneBody from "./AireneBody.vue";
import AireneChatItem from "../components/chat/AireneChatItem.vue";
import AireneChatGroup from "../components/chat/AireneChatGroup.vue";
import AireneDeleteDialog from "../components/modal/AireneDeleteDialog.vue";
import AireneModalRenameChat from "../components/modal/AireneModalRenameChat.vue";

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
    AireneChatItem,
    AireneChatGroup,
    AireneBody,
    AireneDeleteDialog,
    AireneModalRenameChat,
  },
  inject: ["$AireneContext"],
  data() {
    return {
      // Default
      BOUNDS_OFFSET: 16, // in px
      CONTAINER_WIDTH: 376, // in px

      // Drag State
      dragInstance: null,
      isDragging: false,
      isMaxWidth: false,
      isShowSafeAreaHighlight: false,
      isDocking: false,

      // Thread Management
      isShowThreads: false,
      SIDEBAR_DATAS: [
        {
          id: 0,
          created_at: generateRelativeDate(0), // Today
          label: "Percakapan baru",
        },
        {
          id: 1,
          created_at: generateRelativeDate(-2), // 2 days ago
          label: "Analisis penjualan Q3 2024",
        },
        {
          id: 2,
          created_at: generateRelativeDate(-5), // 5 days ago
          label: "Proyeksi laba bersih November 2024",
        },
        {
          id: 3,
          created_at: generateRelativeDate(-7), // 7 days ago
          label: "Evaluasi kinerja karyawan bulan Oktober",
        },
        {
          id: 4,
          created_at: generateRelativeDate(-14), // 14 days ago
          label: "Analisis tren penjualan produk baru",
        },
        {
          id: 5,
          created_at: generateRelativeDate(-21), // 21 days ago
          label: "Laporan keuangan September 2024",
        },
        {
          id: 6,
          created_at: generateRelativeDate(-30), // 30 days ago
          label: "Strategi pemasaran Q4 2024",
        },
        {
          id: 7,
          created_at: generateRelativeDate(-45), // 45 days ago
          label: "Analisis kompetitor Agustus 2024",
        },
        {
          id: 8,
          created_at: generateRelativeDate(-60), // 60 days ago
          label: "Perencanaan anggaran 2025",
        },
        {
          id: 9,
          created_at: generateRelativeDate(-55), // 55 days ago
          label: "Rencana pengembangan produk 2025",
        },
        {
          id: 10,
          created_at: generateRelativeDate(-50), // 50 days ago
          label: "Analisis kepuasan pelanggan Q2 2024",
        },
        {
          id: 11,
          created_at: generateRelativeDate(-45), // 45 days ago
          label: "Laporan keuangan semester I 2024",
        },
        {
          id: 12,
          created_at: generateRelativeDate(-35), // 35 days ago
          label: "Strategi ekspansi pasar untuk Q3 2024",
        },
        {
          id: 13,
          created_at: generateRelativeDate(-25), // 25 days ago
          label: "Evaluasi strategi pemasaran Q1 2024",
        },
      ],
      isOpenDeleteDialog: false,
      isOpenRenameChat: false,
    };
  },
  mounted() {
    this.handleInitializeDragInstance();
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
    // Neodrag Functionality
    handleInitializeDragInstance() {
      const containerEl = this.$refs.container.$el;
      const headerElement = this.$refs.header.$el;
      const threadHeaderElement = this.$refs.threadHeader.$el;

      const BOUND = this.BOUNDS_OFFSET; // in px
      const maxOffsetX = this.getMaxOffsetX();

      let position = { x: maxOffsetX, y: BOUND };
      this.dragInstance = new Draggable(containerEl, {
        bounds: {
          left: BOUND,
          right: BOUND,
          top: BOUND,
          bottom: BOUND,
        },
        handle: [headerElement, threadHeaderElement],
        defaultPosition: position,
        position,
        onDrag: this.onDrag,
        onDragEnd: this.onDragEnd,
      });
    },
    onDrag(data) {
      this.isDragging = true;

      // Calculate safe area for docking (right side of screen)
      const safeArea = {
        start: this.getMaxOffsetX() - this.CONTAINER_WIDTH / 2,
      };

      // Check if dragged into safe area
      const isInSafeArea = data.offsetX >= safeArea.start;
      this.isMaxWidth = isInSafeArea;
      this.isShowSafeAreaHighlight = isInSafeArea;
    },
    onDragEnd() {
      this.isDragging = false;

      // Dock the window if it was released in the safe area
      if (this.isMaxWidth) {
        this.handleToggleDocking(true);
      }

      this.isShowSafeAreaHighlight = false;
    },
    handleUpdateDragPosition(payload) {
      const newPosition = { x: payload.x, y: payload.y };

      this.dragInstance.updateOptions({ position: newPosition });
    },
    getMaxOffsetX() {
      const windowWidth = window.innerWidth;
      const containerWidth = this.$refs.container.$el.offsetWidth;
      return windowWidth - containerWidth - this.BOUNDS_OFFSET || 0;
    },

    // UI Control Methods
    handleClickMenu() {
      const newDockingState = !this.isDocking;
      this.handleToggleDocking(newDockingState);
    },
    toggleThreads(value) {
      this.isShowThreads = value;
    },
    handleClickClose() {
      this.$emit("click-close");
    },
    handleClickMaximize() {
      this.$emit("click-maximize");
    },
    handleToggleDocking(value) {
      this.isDocking = value;

      this.handleUpdateDragPosition({
        x: this.getMaxOffsetX(),
        y: this.BOUNDS_OFFSET,
      });

      this.dragInstance.updateOptions({ disabled: value });
    },

    // Chat Thread Management
    handleClickNewChat() {
      this.toggleThreads(false);

      this.context.handleSetCurrentActiveChat(""); // Simulate new chat

      this.handleForceFocusChatInput();
    },
    handleSelectChat(chat) {
      this.context.handleSetCurrentActiveChat(chat.id);

      this.toggleThreads(false);

      this.handleForceFocusChatInput();
    },
    isChatActive(chatId) {
      return this.context.currentActiveChat === chatId;
    },
    handleRenameChat(value) {
      console.log("RENAME CHAT", value);
      this.isOpenRenameChat = true;
    },
    handleConfirmRenameChat() {
      this.isOpenRenameChat = false;

      this.$toast({
        id: "test",
        variant: "success",
        title: "Percakapan berhasil diubah",
        position: "top",
        zIndex: 9999,
      });
    },
    handleCloseRenameChat() {
      this.isOpenRenameChat = false;
    },
    handleDeleteChat() {
      this.handleOpenDeleteDialog();
    },
    handleConfirmDeleteDialog() {
      this.isOpenDeleteDialog = false;
      this.$toast({
        id: "test",
        variant: "success",
        title: "Percakapan berhasil dihapus",
        position: "top",
        zIndex: 9999,
      });
    },
    handleOpenDeleteDialog() {
      this.isOpenDeleteDialog = true;
    },
    handleCloseDeleteDialog() {
      this.isOpenDeleteDialog = false;
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

    // Utils
    handleForceFocusChatInput() {
      this.$nextTick(() => {
        const chatInputElement = document.getElementById("airene-input-chat");

        if (chatInputElement) {
          const textareaElement = chatInputElement.querySelector("textarea");

          setTimeout(() => {
            if (textareaElement) textareaElement.focus();
          }, 301); // Delay to ensure DOM is fully rendered
        }
      });
    },
  },
};
</script>
