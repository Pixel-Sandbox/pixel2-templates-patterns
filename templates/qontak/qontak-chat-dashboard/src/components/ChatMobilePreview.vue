<template>
  <mp-box
    width="378px"
    height="718px"
    p="2"
    box-shadow="xl"
    border-radius="32px"
    border="1px solid"
    border-color="gray.50"
  >
    <mp-box
      width="full"
      height="full"
      background="white"
      border-radius="24px"
      border="1px solid"
      border-color="gray.50"
    >
      <!-- // App Bar -->
      <mp-flex
        direction="column"
        :background="themeColor"
        border-top-radius="24px"
      >
        <mp-flex py="3" px="2" justify-content="space-between">
          <mp-text
            ml="5"
            :color="calculateTextColorOutput(themeColor)"
            font-size="17px"
            font-weight="semibold"
            >{{ time }}</mp-text
          >
          <mp-flex gap="1">
            <img src="../assets/signal.svg" alt="signal" />
            <img src="../assets/wifi.svg" alt="wifi" />
            <img src="../assets/battery.svg" alt="wifi" />
          </mp-flex>
        </mp-flex>
        <mp-flex py="1" px="4" gap="4" align-items="center">
          <mp-icon name="arrows-left" :color="calculateTextColorOutput(themeColor)" />
          <mp-flex direction="column">
            <mp-text
              :color="calculateTextColorOutput(themeColor)"
              font-size="lg"
              font-weight="semibold"
              >{{ title || "Title App" }}</mp-text
            >
            <mp-text
              :color="calculateTextColorOutput(themeColor)"
              font-size="sm"
              >{{ description || "Description" }}</mp-text
            >
          </mp-flex>
        </mp-flex>
      </mp-flex>
      <!-- // Body -->
      <mp-flex
        direction="column"
        px="3"
        py="2"
        width="full"
        height="516px"
        overflow="auto"
      >
        <!-- start chat -->
        <mp-box ref="body" />
        <mp-flex
          position="relative"
          direction="column"
          justify="center"
          align="center"
          mb="2"
        >
          <mp-text
            font-size="sm"
            color="gray.600"
            background="white"
            px="2"
            z-index="1"
            >Today</mp-text
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
          :agent-color="agentColor"
          :customer-color="customerColor"
          :is-agent="item.isAgent"
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
      </mp-flex>
      <!-- // Footer -->
      <mp-flex px="3" pt="3" gap="2">
        <mp-button-icon name="add-circular" variant="duotone" size="md" />
        <mp-input placeholder="Enter message" border-radius="full" />
      </mp-flex>
      <mp-flex justify-content="center" align="center" gap="1.5" pt="3">
        <mp-text color="gray.600" font-weight="semibold" font-size="xs"
          >Powered by</mp-text
        >
        <img
          src="../assets/logo-qontak.svg"
          alt="logo qontak"
          style="height: 16px"
        />
      </mp-flex>
    </mp-box>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpIcon,
  MpText,
  MpButtonIcon,
  MpInput,
} from "@mekari/pixel";

import BubbleChat from "./BubbleChat";

export default {
  name: "ChatMobilePreview",
  components: {
    MpBox,
    MpFlex,
    MpIcon,
    MpText,
    MpButtonIcon,
    MpInput,
    BubbleChat,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    greetings: {
      type: String,
      default: "",
    },
    themeColor: {
      type: String,
      default: "",
    },
    agentColor: {
      type: String,
      default: "",
    },
    customerColor: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      isShowOptionsList: false,
      chatData: [
        {
          id: 1,
          isAgent: true,
          title: "Your agent",
          chat: this.greetings,
          hasMarginBottom: true,
        },
        {
          id: 2,
          isAgent: false,
          title: "Your customer",
          chat: "Saya butuh nomor pelacakan pesanan",
          hasMarginBottom: true,
        },
        {
          id: 3,
          isAgent: true,
          title: "Your agent",
          replyTitle: "Your customer",
          reply: "Saya butuh nomor pelacakan pesanan",
          chat: "This is reply bubble",
        },
        {
          id: 4,
          isAgent: true,
          chat: "Boleh saya minta nomor pesanan nya",
          hasMarginBottom: true,
        },
        // {
        //   id: 5,
        //   isAgent: true,
        //   title: "Bot",
        //   chat: "Hej, Welcome to IKEA Indonesia! Please select from the below options to start!",
        //   hasMarginBottom: true,
        //   hasOptions: true,
        // },
        // {
        //   id: 6,
        //   isAgent: false,
        //   title: "You",
        //   chat: "Change Language",
        // },
        // {
        //   id: 7,
        //   isAgent: true,
        //   title: "Bot",
        //   chat: "Hej, Welcome to IKEA Indonesia! Please click one of button below!",
        //   hasMarginBottom: true,
        //   hasActions: true,
        //   actions: [
        //     {
        //       id: "action-1",
        //       text: "English",
        //     },
        //     {
        //       id: "action-2",
        //       text: "Indonesian",
        //     },
        //   ],
        // },
        {
          id: 8,
          isAgent: true,
          title: "Your agent",
          chat: "Is this the product photo ?",
          mediaTitle: "Image title",
          mediaType: "image",
          mediaSrc: "https://via.placeholder.com/300x400/D0D6DD/FFFFFF",
          mediaAlt: "product image",
          hasMarginBottom: true,
        },
        {
          id: 9,
          isAgent: false,
          title: "Your customer",
          chat: "Is this the product video ?",
          mediaTitle: "Video title",
          mediaType: "video",
          mediaSrc: "https://via.placeholder.com/200x200/D0D6DD/FFFFFF",
          mediaAlt: "video thumbnail",
          hasMarginBottom: true,
        },
        {
          id: 10,
          isAgent: false,
          title: "Your customer",
          chat: "Ini resi nya ya",
          mediaType: "document",
          mediaFile: "INV_01_106612312_2022-12-21.pdf",
          hasMarginBottom: true,
        },
        {
          id: 11,
          isAgent: true,
          title: "Your agent",
          chat: "Ini report nya ya",
          mediaTitle: "Media title",
          mediaType: "document",
          mediaSrc: "https://via.placeholder.com/200x100/D0D6DD/FFFFFF",
          mediaFile: "INV_01_106612312_2022-12-21.pdf",
          hasMarginBottom: true,
        },
        {
          id: 12,
          isAgent: false,
          title: "You customer",
          chat: "Thanks!",
        },
      ],
    };
  },
  watch: {
    greetings(oldVal, NewVal) {
      if (oldVal !== NewVal) {
        this.chatData[0].chat = NewVal;
      }
    },
  },
  computed: {
    time() {
      const time = new Date();
      return `${time.getHours()}:${time.getMinutes()}`;
    },
  },
  methods: {
    showAlert(message) {
      alert(message);
    },
    calculateTextColorOutput(mainColor) {
      if (mainColor.length === 7) mainColor = mainColor.substring(1);
      const R = parseInt(mainColor.substring(0, 2), 16);
      const G = parseInt(mainColor.substring(2, 4), 16);
      const B = parseInt(mainColor.substring(4, 6), 16);
      const brightneess = Math.sqrt(
        R * R * 0.241 + G * G * 0.691 + B * B * 0.068
      );

      return brightneess < 130 ? "white" : "dark";
    },
  },
};
</script>
