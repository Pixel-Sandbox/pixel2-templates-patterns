<template>
  <mp-flex
    :id="`buble-chat-${id}`"
    direction="column"
    width="full"
    :align="bubbleStyle.align"
    :mb="hasMarginBottom ? '2' : '0.5'"
  >
    <mp-text v-if="title" color="gray.600" font-size="sm">{{ title }}</mp-text>
    <mp-flex direction="column">
      <mp-flex
        direction="column"
        p="2"
        max-width="312px"
        :rounded-bottom="bubbleStyle.roundedBottom"
        :background="bubbleStyle.background"
        :rounded-top-left="bubbleStyle.roundedTopLeft"
        :rounded-top-right="bubbleStyle.roundedTopRiht"
      >
        <mp-flex
          v-if="reply && replyTitle"
          mb="1"
          p="1"
          direction="column"
          background="#1966E4"
          border-left-width="3px"
          border-color="teal.100"
          rounded="sm"
        >
          <mp-text line-height="lg" font-weight="semibold" color="teal.100">{{
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
          :type="mediaType"
          :title="mediaTitle"
          :src="mediaSrc"
          :alt="mediaAlt"
          :file="mediaFile"
          @download="handleDownloadMedia"
          @play="handlePlayMedia"
        />
        <mp-text v-if="chat" line-height="lg" :color="bubbleStyle.color">{{
          chat
        }}</mp-text>
      </mp-flex>
      <mp-button
        v-if="hasOptions"
        left-icon="table-view-list"
        variant="outline"
        rounded-top="0"
        border-bottom-width="0"
        border-left-width="0"
        border-right-width="0"
        border-top-width="1px"
        border-top-color="gray.100"
        @click="handleClickOptions"
        >Options</mp-button
      >
      <mp-flex v-if="hasActions" direction="column" gap="4px" mt="1">
        <mp-button
          v-for="item in actions"
          :key="item.id"
          variant="outline"
          @click="handleClickAction(item.id)"
          >{{ item.text }}</mp-button
        >
      </mp-flex>
    </mp-flex>
  </mp-flex>
</template>

<script>
import { MpFlex, MpText, MpButton } from "@mekari/pixel";
import MediaChat from "./MediaChat.vue";

export default {
  name: "BubbleChat",
  components: {
    MpFlex,
    MpText,
    MpButton,
    MediaChat,
  },
  props: {
    id: { type: Number, default: 0 },
    title: { type: String, default: "" },
    color: { type: String, default: "white" },
    chat: { type: String, default: "" },
    replyTitle: { type: String, default: "" },
    reply: { type: String, default: "" },
    mediaType: { type: String, default: "" },
    mediaSrc: { type: String, default: "" },
    mediaAlt: { type: String, default: "" },
    mediaTitle: { type: String, default: "" },
    mediaFile: { type: String, default: "" },
    actions: { type: Array, default: () => [] },
    isBot: { type: Boolean, default: false },
    hasOptions: { type: Boolean, default: false },
    hasActions: { type: Boolean, default: false },
    hasMarginBottom: { type: Boolean, default: false },
  },
  data() {
    return {};
  },
  computed: {
    bubbleStyle() {
      if (!this.isBot) {
        return {
          background: "sky.400",
          color: "white",
          align: "flex-end",
          roundedTopRiht: "0",
          roundedTopLeft: "lg",
          roundedBottom: this.hasOptions ? "0" : "lg",
        };
      }

      return {
        background: "white",
        color: "dark",
        align: "flex-start",
        roundedTopRiht: "lg",
        roundedTopLeft: "0",
        roundedBottom: this.hasOptions ? "0" : "lg",
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
  },
};
</script>
