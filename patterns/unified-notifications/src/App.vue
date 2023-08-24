<template>
  <mp-box p="20">
    <mp-button @click="isShowMiniChat = true"> Open Mini Chat </mp-button>
    <mp-box
      v-show="isShowMiniChat"
      position="fixed"
      background="overlay"
      left="0"
      top="0"
      width="100vw"
      height="100vh"
      z-index="overlay"
    >
      <mp-box position="fixed" width="md" height="600px" bottom="0" right="6">
        <!-- header -->
        <mp-flex
          px="4"
          py="3"
          gap="3"
          position="absolute"
          width="full"
          top="0"
          background="white"
          border-top-left-radius="md"
          border-top-right-radius="md"
          :shadow="isShowShadow ? 'sm' : undefined"
        >
          <mp-flex
            flex="none"
            justify="center"
            align-items="center"
            width="10"
            height="10"
            rounded="full"
            background="gray.50"
          >
            <mp-icon name="chatbot" color="blue.500" />
          </mp-flex>
          <mp-flex direction="column" width="full">
            <mp-text font-weight="semibold">Preview bot</mp-text>
            <mp-text font-size="sm" color="gray.600"
              >Button & list only works on WA</mp-text
            >
          </mp-flex>
          <mp-flex gap="2" align-items="center">
            <mp-tooltip
              label="Restart bot"
              id="tooltip-restart-button"
              position="bottom"
            >
              <mp-button-icon
                size="md"
                name="redo"
                @click="isShowRestartButton = true"
              />
            </mp-tooltip>
            <mp-tooltip
              label="Close"
              id="tooltip-close-button"
              position="bottom"
            >
              <mp-button-icon
                size="md"
                name="close"
                @click="handleCloseModal"
              />
            </mp-tooltip>
          </mp-flex>
        </mp-flex>

        <!-- body -->
        <mp-flex
          direction="column"
          p="4"
          mt="16"
          width="full"
          :height="heightBody"
          overflow="auto"
          background="gray.50"
        >
          <!-- start chat -->
          <mp-box ref="body" />
          <mp-flex
            position="relative"
            direction="column"
            justify="center"
            align-items="center"
            mb="2"
          >
            <mp-text
              font-size="sm"
              font-weight="semibold"
              color="gray.400"
              background="gray.50"
              px="2"
              z-index="1"
              >Enter a message to start</mp-text
            >
            <mp-box
              width="full"
              height="1px"
              background="gray.100"
              position="absolute"
            />
          </mp-flex>
          <BubbleChat
            v-for="item in chatData"
            :key="item.id"
            :is-bot="item.isBot"
            :title="item.title"
            :chat="item.chat"
            :reply="item.reply"
            :reply-title="item.replyTitle"
            :has-margin-bottom="item.hasMarginBottom"
            :has-options="item.hasOptions"
            :has-actions="item.hasActions"
            :actions="item.actions"
            :media-type="item.mediaType"
            :media-title="item.mediaTitle"
            :media-src="item.mediaSrc"
            :media-alt="item.mediaAlt"
            :media-file="item.mediaFile"
            @click-options="isShowOptionsList = true"
            @click-actions="showAlert"
            @download-media="showAlert"
            @play-media="showAlert"
          />

          <!-- end chat -->
          <mp-flex
            position="relative"
            direction="column"
            justify="center"
            align-items="center"
            mt="2"
          >
            <mp-text
              font-size="sm"
              font-weight="semibold"
              color="gray.400"
              background="gray.50"
              px="2"
              z-index="1"
              >Conversation is auto resolved</mp-text
            >
            <mp-box
              width="full"
              height="1px"
              background="gray.100"
              position="absolute"
            />
          </mp-flex>
        </mp-flex>

        <!-- footer -->
        <mp-flex
          position="absolute"
          align-items="flex-end"
          width="full"
          bottom="0"
          pt="4"
          pb="6"
          px="4"
          gap="2"
          background="white"
          :shadow="isShowShadow ? 'sm' : undefined"
        >
          <mp-button
            v-if="isShowRestartButton"
            variant="outline"
            left-icon="redo"
            width="full"
            @click="isShowRestartButton = false"
            >Restart bot</mp-button
          >
          <template v-else>
            <mp-textarea
              v-model="text"
              placeholder="Type your message"
              resize="none"
              :height="heightTextArea"
              :min-height="heightTextArea"
              @keydown="handleKeydown"
            />
            <mp-button
              left-icon="sent"
              :is-disabled="!text"
              @click="showAlert('sent')"
            />
          </template>
        </mp-flex>

        <!-- Options Lists Sheet -->
        <mp-flex
          v-if="isShowOptionsList"
          position="absolute"
          bottom="0"
          width="full"
          z-index="1"
        >
          <OptionsList
            :title="listTitle"
            :lists="lists"
            @click="showAlert"
            @close="handleCloseOptionsList"
            @send="handleCloseOptionsList"
          />
        </mp-flex>
        <!-- Options Lists Overlay -->
        <mp-box
          v-if="isShowOptionsList"
          width="full"
          height="full"
          position="absolute"
          top="16"
          background="rgba(35, 41, 51, 0.4)"
          backdrop-filter="blur(2px)"
        />
      </mp-box>
    </mp-box>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpText,
  MpButton,
  MpIcon,
  MpButtonIcon,
  MpTextarea,
  MpTooltip,
} from "@mekari/pixel";

import BubbleChat from "./components/BubbleChat.vue";
import OptionsList from "./components/OptionsList.vue";

export default {
  name: "App",
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpButton,
    MpIcon,
    MpButtonIcon,
    MpTextarea,
    MpTooltip,
    BubbleChat,
    OptionsList,
  },
  data() {
    return {
      isShowShadow: false,
      isShowMiniChat: false,
      isShowOptionsList: false,
      isShowRestartButton: false,
      isForceExpandTextArea: false,
      text: "",
      heightTextArea: "36px",
      heightBody: "458px",
      listTitle: "Options list",
      lists: [
        {
          id: "list-1",
          text: "Store Information",
        },
        {
          id: "list-2",
          text: "Order Status",
        },
        {
          id: "list-3",
          text: "Feedback",
        },
        {
          id: "list-4",
          text: "Change Language",
        },
      ],
      chatData: [
        {
          id: 1,
          isBot: false,
          title: "You",
          chat: "This is regular bubble",
          hasMarginBottom: true,
        },
        {
          id: 2,
          isBot: true,
          title: "Bot",
          chat: "Hej, Welcome to IKEA Indonesia! How can I help you today? Please select from the below options to start!",
          hasMarginBottom: true,
        },
        {
          id: 3,
          isBot: false,
          title: "You",
          replyTitle: "Bot",
          reply: "Hej, Welcome to IKEA Indonesia! How can I help you today?",
          chat: "This is reply bubble",
        },
        {
          id: 4,
          isBot: false,
          chat: "I want to complained about product that I was ordered last week!",
          hasMarginBottom: true,
        },
        {
          id: 5,
          isBot: true,
          title: "Bot",
          chat: "Hej, Welcome to IKEA Indonesia! Please select from the below options to start!",
          hasMarginBottom: true,
          hasOptions: true,
        },
        {
          id: 6,
          isBot: false,
          title: "You",
          chat: "Change Language",
        },
        {
          id: 7,
          isBot: true,
          title: "Bot",
          chat: "Hej, Welcome to IKEA Indonesia! Please click one of button below!",
          hasMarginBottom: true,
          hasActions: true,
          actions: [
            {
              id: "action-1",
              text: "English",
            },
            {
              id: "action-2",
              text: "Indonesian",
            },
          ],
        },
        {
          id: 8,
          isBot: true,
          title: "Bot",
          chat: "Is this the product photo ?",
          mediaTitle: "IKEA Lerberg",
          mediaType: "image",
          mediaSrc: "https://via.placeholder.com/296x296/D0D6DD/FFFFFF",
          mediaAlt: "product image",
        },
        {
          id: 9,
          isBot: true,
          chat: "Is this the product video ?",
          mediaTitle: "IKEA Lerberg",
          mediaType: "video",
          mediaSrc: "https://via.placeholder.com/296x166/D0D6DD/FFFFFF",
          mediaAlt: "video thumbnail",
        },
        {
          id: 10,
          isBot: true,
          // chat: "This is the invoice, Thank you! please leave us a message if you already paid the invoice",
          mediaType: "document",
          mediaFile: "INV_01_106612312_2022-12-21.pdf",
        },
        {
          id: 11,
          isBot: true,
          mediaTitle: "Shipping invoince",
          mediaType: "document",
          mediaSrc: "https://via.placeholder.com/296x92/D0D6DD/FFFFFF",
          mediaFile: "INV_01_106612312_2022-12-21.pdf",
        },
        {
          id: 12,
          isBot: false,
          title: "You",
          replyTitle: "Bot",
          reply: "Shipping invoince",
          chat: "Thanks!",
        },
      ],
    };
  },
  watch: {
    text(newValue) {
      if (newValue.length > 40) {
        this.heightTextArea = "72px";
        this.heightBody = "424px";
      } else {
        if (this.isForceExpandTextArea) {
          this.heightTextArea = "72px";
          this.heightBody = "424px";
        } else {
          this.heightTextArea = "36px";
          this.heightBody = "458px";
        }
      }
    },
  },
  mounted() {
    this.handleSticky();
  },
  methods: {
    handleCloseModal() {
      this.isShowMiniChat = false;
    },
    handleCloseOptionsList() {
      this.isShowOptionsList = false;
    },
    showAlert(message) {
      alert(message);
    },
    handleKeydown(e) {
      if (e.keyCode === 13 && !this.text) {
        e.preventDefault();
        return;
      }

      if (e.keyCode === 8) {
        this.isForceExpandTextArea = false;
      }

      if (e.keyCode === 13 && e.shiftKey) {
        this.isForceExpandTextArea = true;
      }

      if (e.keyCode === 13 && !e.shiftKey) {
        // Don't generate a new line
        e.preventDefault();
        // Do something
        this.showAlert("sent");
      }
    },
    handleSticky() {
      const el = this.$refs.body.$el;
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting === false) {
            this.isShowShadow = true;
          } else {
            this.isShowShadow = false;
          }
        },
        { threshold: [0] }
      );

      observer.observe(el);
    },
  },
};
</script>
