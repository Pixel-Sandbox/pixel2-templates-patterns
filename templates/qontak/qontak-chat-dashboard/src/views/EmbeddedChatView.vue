<template>
  <mp-flex
    justify-content="center"
    align-items="center"
    height="100vh"
    background="background"
  >
    <mp-box
      width="378px"
      height="718px"
      p="2"
      box-shadow="xl"
      border-radius="32px"
      border="1px solid"
      border-color="gray.50"
      background="white"
    >
      <mp-box
        position="relative"
        width="full"
        height="full"
        background="background"
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
              color="white"
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
            <mp-icon name="arrows-left" color="white" />
            <mp-flex direction="column">
              <mp-text color="white" font-size="lg" font-weight="semibold">{{
                title
              }}</mp-text>
              <mp-text color="white" font-size="sm">{{ description }}</mp-text>
            </mp-flex>
          </mp-flex>
        </mp-flex>
        <!-- // Body -->
        <mp-flex
          position="relative"
          background="white"
          direction="column"
          px="3"
          py="3"
          width="full"
          height="516px"
          overflow="auto"
        >
          <!-- start chat -->
          <mp-flex
            position="relative"
            direction="column"
            justify="center"
            align="center"
            mb="2"
          >
            <mp-text
              background="gray.50"
              font-size="sm"
              color="gray.600"
              border-radius="12px"
              px="2"
              py="0.5"
              z-index="1"
              >Today</mp-text
            >
          </mp-flex>
          <BubbleChat
            v-for="item in chatData"
            :key="item.id"
            :id="item.id"
            :agent-color="agentColor"
            :customer-color="customerColor"
            :is-agent="item.isAgent"
            :title="item.title"
            :chat="item.chat"
            :time="item.time"
            :status="item.status"
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
            :media-icon="item.mediaIcon"
            :media-audio-size="item.mediaAudioSize"
            :media-audio-time="item.mediaAudioTime"
            :is-media-play="item.isMediaPlay"
            @click-options="isShowOptionsList = true"
            @click-actions="showAlert"
            @download-media="showAlert"
            @play-media="showAlert"
            @play-audio="showAlert"
          />
        </mp-flex>
        <!-- // Footer -->
        <mp-flex pl="2" pr="3" pt="3" gap="2">
          <mp-button-icon
            name="add-circular"
            size="md"
            @click="isShowOptionsList = true"
          />
          <mp-input
            v-model="inputChat"
            placeholder="Enter message"
            border-radius="full"
          />
          <mp-button
            left-icon="sent"
            rounded="full"
            :is-disabled="!inputChat"
          />
        </mp-flex>
        <mp-flex justify-content="center" align="center" gap="1.5" py="3">
          <mp-text color="gray.600" font-weight="semibold" font-size="xs"
            >Powered by</mp-text
          >
          <img
            src="../assets/logo-qontak.svg"
            alt="logo qontak"
            style="height: 16px"
          />
        </mp-flex>

        <!-- Options Lists Sheet -->
        <transition name="slide-fade">
          <mp-flex
            v-if="isShowOptionsList"
            position="absolute"
            bottom="0"
            width="full"
            z-index="modal"
          >
            <OptionsList
              @click="showAlert"
              @close="isShowOptionsList = false"
            />
          </mp-flex>
        </transition>
        <!-- Options Lists Overlay -->
        <mp-box
          v-if="isShowOptionsList"
          width="full"
          height="516px"
          position="absolute"
          top="97px"
          background="overlay"
          z-index="overlay"
          @click="isShowOptionsList = false"
        />
      </mp-box>
    </mp-box>
  </mp-flex>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpIcon,
  MpText,
  MpButtonIcon,
  MpButton,
  MpInput,
} from "@mekari/pixel";

import BubbleChat from "../components/BubbleChat";
import OptionsList from "../components/OptionsList";

export default {
  name: "EmbeddedChatView",
  components: {
    MpBox,
    MpFlex,
    MpIcon,
    MpText,
    MpButtonIcon,
    MpButton,
    MpInput,
    BubbleChat,
    OptionsList,
  },
  data() {
    return {
      title: "Display name",
      description: "Description",
      themeColor: "#2979FF",
      agentColor: "#EDF0F2",
      customerColor: "#E0EEFF",
      inputChat: "",
      isShowOptionsList: false,
      chatData: [
        {
          id: 1,
          isAgent: true,
          title: "Your agent",
          chat: "Halo, ada yang bisa kami bantu?",
          time: "07:13",
          status: "",
          hasMarginBottom: true,
        },
        {
          id: 2,
          isAgent: false,
          title: "Your customer",
          chat: "Saya butuh nomor pelacakan pesanan",
          time: "07:14",
          status: "read",
          hasMarginBottom: true,
        },
        {
          id: 3,
          isAgent: true,
          title: "Your agent",
          chat: "",
          mediaTitle: "",
          mediaType: "image",
          mediaSrc: "https://via.placeholder.com/280x280/D0D6DD/FFFFFF",
          mediaAlt: "product image",
          time: "07:15",
          status: "",
          hasMarginBottom: true,
        },
        {
          id: 5,
          isAgent: true,
          title: "Your agent",
          chat: "Is this the product video ?",
          mediaTitle: "Video title",
          mediaType: "video",
          mediaSrc: "https://via.placeholder.com/280x200/D0D6DD/FFFFFF",
          mediaAlt: "video thumbnail",
          time: "07:20",
          status: "",
          hasMarginBottom: true,
        },
        {
          id: 6,
          isAgent: false,
          title: "Your customer",
          chat: "Ini invoince nya ya",
          mediaType: "document",
          mediaFile: "INV_01_new.pdf",
          mediaSrc: "https://via.placeholder.com/280x100/D0D6DD/FFFFFF",
          mediaIcon: "pdf-document",
          time: "07:25",
          status: "read",
          hasMarginBottom: true,
        },
        {
          id: 7,
          isAgent: true,
          title: "Your agent",
          chat: "",
          mediaType: "document",
          mediaFile: "INV_01_106612312_2022-12-21.pdf",
          time: "07:30",
          status: "",
          hasMarginBottom: false,
        },
        {
          id: 71,
          isAgent: true,
          title: "",
          chat: "",
          mediaType: "document",
          mediaFile: "INV_02_106612312_2022-12-21.doc",
          mediaIcon: "word-document",
          time: "07:35",
          status: "",
          hasMarginBottom: false,
        },
        {
          id: 72,
          isAgent: true,
          title: "",
          chat: "",
          mediaType: "document",
          mediaFile: "INV_03_106612312_2022-12-21.xls",
          mediaIcon: "excel-document",
          time: "07:40",
          status: "",
          hasMarginBottom: true,
        },
        {
          id: 8,
          isAgent: false,
          title: "Your customer",
          chat: "",
          mediaType: "audio",
          mediaAudioSize: "75 KB",
          mediaAudioTime: "0:00",
          isMediaPlay: false,
          time: "08:14",
          status: "read",
          hasMarginBottom: true,
        },
        {
          id: 9,
          isAgent: true,
          title: "Your agent",
          chat: "",
          mediaType: "audio",
          mediaAudioSize: "105 KB",
          mediaAudioTime: "0:10",
          isMediaPlay: true,
          time: "08:20",
          status: "",
          hasMarginBottom: true,
        },
        {
          id: 12,
          isAgent: false,
          title: "You customer",
          chat: "Thanks!",
          time: "09:14",
          status: "sent",
          hasMarginBottom: true,
        },
      ],
    };
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
  },
};
</script>

<style>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .5s ease-in-out;
}
.slide-fade-leave-active {
  /* transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0); */
  transition: all .3s ease-in-out;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(100px);
  opacity: 0;
}
</style>
