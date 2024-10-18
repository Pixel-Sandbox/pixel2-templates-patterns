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
    transition="width 600ms cubic-bezier(0.4, 0, 0.2, 1)"
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
        <mp-flex>
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
            v-show="!isPinned || (isPinned && isHovered)"
            @click="handleTogglePin"
          >
            <img v-if="!isPinned" src="/airene-sidebar-pinned.svg" alt="" />
            <img v-else src="/airene-sidebar-unpinned.svg" alt="" />
          </mp-box>
        </mp-tooltip>
      </mp-flex>

      <mp-flex
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
              v-for="(group, index) in chatsHistory"
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
                {{ chat.name }}
              </AireneChatItem>

              <mp-box
                v-if="index === chatsHistory.length - 1"
                data-element="chat-skeleton"
              >
                <MpSkeleton w="50%" h="20px" rounded="full" />
                <MpSkeleton mt="2" w="full" h="20px" rounded="full" />
              </mp-box>
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
        <mp-flex flex-direction="column" p="2">
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
  MpSkeleton,
} from "@mekari/pixel";

import { CHAT_HISTORY } from "../examples-datasets/chat-history";

// Airene components
import AireneChatItem from "../components/chat/AireneChatItem.vue";
import AireneChatGroup from "../components/chat/AireneChatGroup.vue";
import AireneDeleteDialog from "../components/modal/AireneDeleteDialog.vue";
import AireneModalRenameChat from "../components/modal/AireneModalRenameChat.vue";
import AireneModalVideoTutorial from "../components/modal/AireneModalVideoTutorial.vue";

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
    MpSkeleton,

    // Airene components
    AireneChatItem,
    AireneChatGroup,
    AireneDeleteDialog,
    AireneModalRenameChat,
    AireneModalVideoTutorial,
  },
  inject: ["$AireneContext"],
  data() {
    return {
      isPinned: false,
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
    };
  },
  mounted() {
    this.sidebarFooterHeight = this.$refs.sidebarFooter.$el.clientHeight;
  },
  computed: {
    context() {
      return this.$AireneContext();
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
