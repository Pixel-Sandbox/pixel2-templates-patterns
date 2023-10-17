<template>
  <mp-flex
    :id="`buble-chat-${id}`"
    direction="column"
    width="full"
    :align="bubbleStyle.align"
    :mb="hasMarginBottom ? '4' : '1'"
  >
    <mp-text v-if="title" font-size="sm">{{ title }}</mp-text>
    <mp-flex direction="column">
      <mp-flex
        direction="column"
        p="3"
        max-width="280px"
        :rounded-bottom="bubbleStyle.roundedBottom"
        :background="bubbleStyle.background"
        :rounded-top-left="bubbleStyle.roundedTopLeft"
        :rounded-top-right="bubbleStyle.roundedTopRight"
      >
        <mp-flex
          v-if="reply && replyTitle"
          mb="1"
          p="1"
          direction="column"
          background="gray.25"
          rounded="md"
        >
          <mp-text line-height="lg" font-weight="semibold">{{
            replyTitle
          }}</mp-text>
          <mp-text
            line-height="lg"
            :line-clamp="2"
            is-truncated
            :color="bubbleStyle.color"
            >{{ reply }}</mp-text
          >
        </mp-flex>

        <MediaChat
          v-if="mediaType"
          :is-agent="isAgent"
          :type="mediaType"
          :title="mediaTitle"
          :src="mediaSrc"
          :alt="mediaAlt"
          :file="mediaFile"
          :icon="mediaIcon"
          :audio-time="mediaAudioTime"
          :audio-size="mediaAudioSize"
          :is-play="isMediaPlay"
          @download="handleDownloadMedia"
          @play="handlePlayMedia"
          @audio="handlePlayAudio"
        />
        <mp-text v-if="chat" line-height="lg" :color="bubbleStyle.color">{{
          chat
        }}</mp-text>
        <mp-flex mt="1" gap="1" justify-content="end">
          <mp-text font-size="sm" color="gray.400">
            {{ time }}
          </mp-text>
          <img
            v-if="status === 'read'"
            src="../assets/icon-chat-read.svg"
            alt="icon red"
          />
          <img
            v-if="status === 'sent'"
            src="../assets/icon-chat-sent.svg"
            alt="icon sent"
          />
          <img
            v-if="status === 'unset'"
            src="../assets/icon-chat-unsent.svg"
            alt="icon unsent"
          />
        </mp-flex>
      </mp-flex>
    </mp-flex>
  </mp-flex>
</template>

<script>
import { MpFlex, MpText } from "@mekari/pixel";
import MediaChat from "./MediaChat.vue";

export default {
  name: "BubbleChat",
  components: {
    MpFlex,
    MpText,
    MediaChat,
  },
  props: {
    id: { type: Number, default: 0 },
    title: { type: String, default: "" },
    agentColor: { type: String, default: "" },
    customerColor: { type: String, default: "" },
    chat: { type: String, default: "" },
    time: { type: String, default: "" },
    status: { type: String, default: "" },
    replyTitle: { type: String, default: "" },
    reply: { type: String, default: "" },
    mediaType: { type: String, default: "" },
    mediaSrc: { type: String, default: "" },
    mediaAlt: { type: String, default: "" },
    mediaTitle: { type: String, default: "" },
    mediaFile: { type: String, default: "" },
    mediaIcon: { type: String, default: "pdf-document" },
    mediaAudioSize: { type: String, default: "0 KB" },
    mediaAudioTime: { type: String, default: "0:00" },
    actions: { type: Array, default: () => [] },
    isAgent: { type: Boolean, default: false },
    isMediaPlay: { type: Boolean, default: false },
    hasMarginBottom: { type: Boolean, default: false },
  },
  data() {
    return {};
  },
  computed: {
    bubbleStyle() {
      if (!this.isAgent) {
        return {
          background: this.customerColor,
          color: this.calculateTextColorOutput(this.customerColor),
          align: "flex-end",
          roundedTopRight: "0",
          roundedTopLeft: "xl",
          roundedBottom: "xl",
        };
      }

      return {
        background: this.agentColor,
        color: this.calculateTextColorOutput(this.agentColor),
        align: "flex-start",
        roundedTopRight: "xl",
        roundedTopLeft: "0",
        roundedBottom: "xl",
      };
    },
  },
  methods: {
    handleClickOptions() {
      this.$emit("click-options", this.id);
    },
    handleClickAction(id) {
      this.$emit("click-actions", id);
    },
    handleDownloadMedia() {
      this.$emit("download-media", this.id);
    },
    handlePlayMedia() {
      this.$emit("play-media", this.id);
    },
    handlePlayAudio(val) {
      this.$emit("play-audio", val, this.id);
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
