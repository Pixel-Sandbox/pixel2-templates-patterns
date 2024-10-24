<template>
  <mp-box
    as="nav"
    data-component="AireneSidebar"
    :style="{
      '--sidebar-footer-height': sidebarFooterHeight + 'px',
    }"
    body-scroll-lock-ignore="true"
    p="2"
    :width="!isPinned || (isPinned && isHovered) ? '264px' : '56px'"
    transition="width 800ms cubic-bezier(0.4, 0, 0.2, 1)"
    height="100%"
    position="relative"
    bg="lightBlue"
    v-bind="$attrs"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <mp-flex
      position="relative"
      flex-direction="column"
      bg="lightBlue"
      rounded="md"
      transition="box-shadow 600ms cubic-bezier(0.4, 0, 0.2, 1)"
      :shadow="isPinned && isHovered ? 'md' : ''"
      h="100%"
    >
      <mp-flex
        as="header"
        data-element="sidebar-header"
        justify="space-between"
        align-items="center"
        h="60px"
        pl="2"
        position="relative"
        :pr="!isPinned || (isPinned && isHovered) ? '2' : '0'"
      >
        <mp-flex data-animation="true">
          <mp-icon
            name="airene-brand"
            position="absolute"
            top="4"
            left="2"
            transition-property="transform, opacity"
            transition-duration="300ms"
            transition-timing-function="cubic-bezier(0.4, 0, 0.2, 1)"
            :transition-delay="isPinned && !isHovered ? '300ms' : '0ms'"
            :opacity="isPinned && !isHovered ? 1 : 0"
          />

          <img
            src="https://cdn.mekari.design/logo/airine/default.svg"
            alt=""
            :style="{
              'transition-property': 'opacity',
              'transition-duration': '150ms',
              'transition-timing-function': 'cubic-bezier(0.4, 0, 0.2, 1)',
              'transition-delay':
                !isPinned || (isPinned && isHovered) ? '300ms' : '0ms',
              opacity: !isPinned || (isPinned && isHovered) ? 1 : 0,
            }"
          />
        </mp-flex>

        <mp-tooltip
          :label="isPinned ? 'Kunci navigasi' : 'Perkecil'"
          position="right"
        >
          <mp-box
            as="button"
            data-animation="true"
            v-show="!isPinned || (isPinned && isHovered)"
            @click="handleTogglePin"
          >
            <img v-if="!isPinned" src="/airene-sidebar-pinned.svg" alt="" />
            <img v-else src="/airene-sidebar-unpinned.svg" alt="" />
          </mp-box>
        </mp-tooltip>
      </mp-flex>

      <mp-flex
        data-animation="true"
        :visibility="
          !isPinned || (isPinned && isHovered) ? 'visible' : 'hidden'
        "
        :opacity="!isPinned || (isPinned && isHovered) ? 1 : 0"
        transition="all 300ms cubic-bezier(0.4, 0, 0.2, 1)"
        px="2"
        flex-direction="column"
        pt="4"
        h="calc(100%)"
        overflow="hidden"
      >
        <mp-button
          data-element="new-chat"
          white-space="nowrap"
          variant="outline"
          w="full"
          @click="handleClickNewChat"
        >
          <mp-icon name="add" size="sm" mr="2" color="blue.500" />
          Percakapan baru
        </mp-button>

        <mp-flex
          data-element="thread-list"
          class="airene-custom-scrollbar"
          flex-direction="column"
          mt="5"
          h="100%"
          overflow-y="auto"
          :pb="`var(--sidebar-footer-height)`"
        >
          <mp-flex
            as="header"
            data-element="thread-list-header"
            align-items="center"
            py="2"
            rounded="md"
          >
            <mp-icon name="chat" size="sm" mr="2" />

            <mp-text font-weight="semibold"> Threads </mp-text>
          </mp-flex>

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
              >
                {{ chat.label }}
              </AireneChatItem>
            </AireneChatGroup>
          </mp-flex>
        </mp-flex>
      </mp-flex>

      <mp-box
        ref="sidebarFooter"
        transition="opacity 600ms cubic-bezier(0.4, 0, 0.2, 1)"
        position="absolute"
        bottom="0"
        left="0"
        w="full"
        rounded-bottom="md"
        bg="lightBlue"
      >
        <mp-flex data-animation="true" flex-direction="column" p="2">
          <mp-box>
            <mp-popover v-slot="{ isOpen, onClose }">
              <mp-popover-trigger>
                <mp-flex
                  class="group"
                  data-element="thread-list-header"
                  align-items="center"
                  p="2"
                  rounded="md"
                  w="full"
                  :bg="isOpen ? 'blue.100' : 'inherit'"
                  :color="isOpen ? 'blue.400' : 'inherit'"
                  transition="all 300ms"
                  cursor="pointer"
                  :_hover="{ color: 'blue.400' }"
                >
                  <mp-icon
                    name="help-centre"
                    :variant="isOpen ? 'fill' : 'outline'"
                    size="sm"
                    mr="2"
                    :color="isOpen ? 'blue.400' : 'gray.600'"
                    :_groupHover="{ color: 'blue.400' }"
                  />
                  <mp-text
                    color="inherit"
                    :font-weight="isOpen ? 'semibold' : 'normal'"
                  >
                    Bantuan
                  </mp-text>
                </mp-flex>
              </mp-popover-trigger>

              <mp-popover-content
                bg="white"
                rounded="md"
                shadow="lg"
                border-width="1px"
                border-color="gray.400"
                width="190px"
              >
                <mp-popover-list>
                  <mp-popover-list-item
                    @click="[handleOpenVideoTutorial(), onClose()]"
                  >
                    <mp-box display="flex" align-items="center">
                      <mp-icon name="play-video" mr="2" /> Cara penggunaan
                    </mp-box>
                  </mp-popover-list-item>
                  <mp-popover-list-item
                    as="a"
                    href="https://www.google.com"
                    target="_blank"
                    @click="[onClose()]"
                  >
                    <mp-box display="flex" align-items="center">
                      <mp-icon name="book" mr="2" /> Buku panduan
                    </mp-box>
                  </mp-popover-list-item>
                </mp-popover-list>
              </mp-popover-content>
            </mp-popover>
          </mp-box>
        </mp-flex>
      </mp-box>
    </mp-flex>

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

    <AireneModalVideoTutorial
      :is-open="isOpenVideoTutorial"
      @close="isOpenVideoTutorial = false"
    />
  </mp-box>
</template>

<script>
import {
  parseISO,
  isToday,
  isThisWeek,
  isSameMonth,
  subMonths,
  format,
} from "date-fns";

import anime from "animejs";

import {
  MpBox,
  MpFlex,
  MpButton,
  MpIcon,
  MpText,
  MpTooltip,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
} from "@mekari/pixel";

import { CHAT_HISTORY } from "../examples-datasets/chat-history";

// Airene components
import AireneChatItem from "../components/chat/AireneChatItem.vue";
import AireneChatGroup from "../components/chat/AireneChatGroup.vue";
import AireneDeleteDialog from "../components/modal/AireneDeleteDialog.vue";
import AireneModalRenameChat from "../components/modal/AireneModalRenameChat.vue";
import AireneModalVideoTutorial from "../components/modal/AireneModalVideoTutorial.vue";

import { groupBy, convertToGroupArray } from "../utils";
export default {
  components: {
    MpBox,
    MpFlex,
    MpButton,
    MpIcon,
    MpText,
    MpTooltip,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,

    // Airene components
    AireneChatItem,
    AireneChatGroup,
    AireneDeleteDialog,
    AireneModalRenameChat,
    AireneModalVideoTutorial,
  },
  props: {
    isShowIntroAnimation: {
      type: Boolean,
      default: false,
    },
  },
  inject: ["$AireneContext"],
  data() {
    return {
      isPinned: this.isShowIntroAnimation, // Set to true if intro animation is shown
      isHovered: false,

      // Chats
      currentChatActive: "a1b2c3d4",
      chatsHistory: CHAT_HISTORY,

      // Assertion
      isOpenDeleteDialog: false,
      isOpenRenameChat: false,
      isOpenVideoTutorial: false,
      isContextualSugestion: false, //  Saran kontekstual

      // Utils
      sidebarFooterHeight: 0,

      // Example
      SIDEBAR_DATAS: [
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
    };
  },
  mounted() {
    this.sidebarFooterHeight = this.$refs.sidebarFooter.$el.clientHeight;

    // Reset the pinned state after intro animation is finished
    this.$nextTick(() => {
      if (this.isShowIntroAnimation) {
        this.isPinned = false;
        this.handleAnimateSidebarItem();
      }
    });

    console.log("getChatHistory", this.getChatHistory);
  },
  computed: {
    context() {
      return this.$AireneContext();
    },
    getChatHistory() {
      const today = new Date();
      const lastMonth = subMonths(today, 1);
      const twoMonthsAgo = subMonths(today, 2);

      const rawDatas = this.SIDEBAR_DATAS.map((item) => {
        const date = parseISO(item.created_at);

        let groupName;
        if (isToday(date)) {
          groupName = "Today";
        } else if (isThisWeek(date, { weekStartsOn: 1 })) {
          // Assuming week starts on Monday
          groupName = "This Week";
        } else if (isSameMonth(date, today)) {
          groupName = "This Month";
        } else if (isSameMonth(date, lastMonth)) {
          groupName = format(lastMonth, "MMMM");
        } else if (isSameMonth(date, twoMonthsAgo)) {
          groupName = format(twoMonthsAgo, "MMMM");
        } else {
          groupName = null; // Set groupName to null for older items
        }

        return {
          ...item,
          groupName,
        };
      });

      const filteredDatas = rawDatas.filter((v) => v.groupName);
      const groupedDatas = convertToGroupArray(
        groupBy(filteredDatas, "groupName")
      );

      console.log("1. rawDatas", rawDatas);
      console.log("2. filteredDatas", filteredDatas);
      console.log("3. groupedDatas", groupedDatas);

      return groupedDatas;
    },
  },
  methods: {
    handleTogglePin() {
      this.isPinned = !this.isPinned;

      if (this.isHovered) {
        this.isHovered = false;
      }
    },
    handleMouseEnter() {
      console.log("enter");
      if (this.isPinned) {
        this.isHovered = true;
      }
    },
    handleMouseLeave() {
      if (this.isPinned) {
        this.isHovered = false;
      }
    },

    isChatActive(chatId) {
      return this.context.currentActiveChat === chatId;
    },

    handleClickNewChat() {
      this.context.handleSetCurrentActiveChat(""); // Simulate new chat

      this.$nextTick(() => {
        this.handleForceFocusChatInput();
      });
    },
    handleSelectChat(chat) {
      this.context.handleSetCurrentActiveChat(chat.id);
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

    // Delete dialog
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

    // Video tutorial
    handleOpenVideoTutorial() {
      this.isOpenVideoTutorial = true;
    },

    // Utils
    handleForceFocusChatInput() {
      this.$nextTick(() => {
        const chatInputElement = document.getElementById("airene-input-chat");

        if (chatInputElement) {
          const textareaElement = chatInputElement.querySelector("textarea");

          if (textareaElement) textareaElement.focus();
        }
      });
    },

    // Animation
    handleAnimateSidebarItem() {
      anime({
        targets: '[data-animation="true"]',
        opacity: [0, 1],
        translateY: [-4, 0],
        duration: 300,
        easing: "cubicBezier(0.4, 0, 0.2, 1)",
        delay: anime.stagger(100, { start: 500 }), // delay starts at 500ms then increase by 100ms for each elements.
      });
    },
  },
};
</script>

<style scoped>
/* custom scroll bar */
.airene-custom-scrollbar::-webkit-scrollbar {
  width: 0px;
}
.airene-custom-scrollbar::-webkit-scrollbar-thumb {
  background: transparent;
  border-radius: 10px;
}
.airene-custom-scrollbar:hover::-webkit-scrollbar {
  width: 0px;
  position: absolute;
}
.airene-custom-scrollbar:hover::-webkit-scrollbar-thumb {
  background: var(--colors-gray-400);
}
</style>
