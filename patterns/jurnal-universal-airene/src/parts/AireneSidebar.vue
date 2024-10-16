<template>
  <mp-box
    as="nav"
    data-component="AireneSidebar"
    body-scroll-lock-ignore="true"
    p="2"
    :width="!isPinned || (isPinned && isHovered) ? '264px' : '56px'"
    transition="width 600ms cubic-bezier(0.4, 0, 0.2, 1)"
    height="100%"
    position="relative"
    bg="#F5F9FF"
    v-bind="$attrs"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <mp-flex
      position="relative"
      flex-direction="column"
      bg="#F5F9FF"
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
        :pr="!isPinned || (isPinned && isHovered) ? '2' : '0'"
      >
        <mp-flex position="relative" white-space="nowrap">
          <img
            v-show="isPinned && !isHovered"
            style="height: 28px; width: 28px"
            src="/airene-icon.svg"
            alt=""
          />

          <img
            v-show="!isPinned || (isPinned && isHovered)"
            src="/airene-logo.svg"
            alt=""
          />
        </mp-flex>

        <mp-tooltip
          :label="isPinned ? 'Kunci navigasi' : 'Perkecil'"
          position="right"
        >
          <mp-box
            as="button"
            :style="{
              'content-visibility':
                !isPinned || (isPinned && isHovered) ? 'visible' : 'hidden',
            }"
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
        mt="4"
        h="calc(100%)"
        overflow="hidden"
      >
        <mp-button
          data-element="new-chat"
          white-space="nowrap"
          variant="outline"
          w="full"
        >
          <mp-icon name="add" size="sm" mr="2" color="blue.500" />
          Percakapan baru
        </mp-button>

        <mp-flex
          data-element="thread-list"
          flex-direction="column"
          mt="5"
          h="75%"
          overflow-y="scroll"
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
                <AireneSkeleton w="50%" h="20px" rounded="full" />
                <AireneSkeleton mt="2" w="full" h="20px" rounded="full" />
              </mp-box>
            </AireneChatGroup>
          </mp-flex>
        </mp-flex>
      </mp-flex>

      <mp-box
        transition="opacity 600ms cubic-bezier(0.4, 0, 0.2, 1)"
        position="absolute"
        bottom="0"
        left="0"
        w="full"
        bg="#F5F9FF"
        rounded-bottom="md"
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
} from "@mekari/pixel";

// Airene components
import AireneSkeleton from "../components/utility/AireneSkeleton.vue";
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

    // Airene components
    AireneSkeleton,
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
      chatsHistory: [
        {
          groupName: "Hari ini",
          datas: [{ id: "a1b2c3d4", name: "Percakapan baru" }],
        },
        {
          groupName: "Minggu ini",
          datas: [
            { id: "e5f6g7h8", name: "Stok yang harus segera dibeli" },
            { id: "i9j0k1l2", name: "Saran proyeksi pembelian produk" },
          ],
        },
        {
          groupName: "30 hari terakhir",
          datas: [
            {
              id: "m3n4o5p6",
              name: "Pembelian yang harus segera dilunasi",
            },
            {
              id: "q7r8s9t0",
              name: "Bagaimana performa penjualan bulan ini dibandingkan bulan lalu?",
            },
            {
              id: "u1v2w3x4",
              name: "Produk apa yang paling laris saat ini?",
            },
            {
              id: "y5z6a7b8",
              name: "Apakah ada produk yang penjualannya menurun drastis?",
            },
            {
              id: "c9d0e1f2",
              name: "Siapa pelanggan terbesar bulan ini?",
            },
            {
              id: "g3h4i5j6",
              name: "Berapa rata-rata nilai transaksi penjualan?",
            },
            {
              id: "k7l8m9n0",
              name: "Apakah ada faktur penjualan yang belum lunas?",
            },
          ],
        },
      ],

      // Assertion
      isOpenDeleteDialog: false,
      isOpenRenameChat: false,
      isOpenVideoTutorial: false,
      isContextualSugestion: false, //  Saran kontekstual
    };
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

    // Select chat
    handleSelectChat(chat) {
      this.context.handleSetCurrentActiveChat(chat.id);
    },

    // Rename chat
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
  },
};
</script>
