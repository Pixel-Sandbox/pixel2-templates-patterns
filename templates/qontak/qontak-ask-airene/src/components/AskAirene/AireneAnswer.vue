<template>
  <mp-airene-chat-bubble
    id="chat-bubble-with-other-content"
    :is-show-full-screen="false"
    :is-loading="isLoading"
    @click-full-screen="handleAlert('click button full screen')"
  >
    <template #loading>
      <mp-skeleton
        variant-color="purple"
        width="100%"
        height="12px"
        rounded="full"
      />
      <mp-skeleton
        variant-color="purple"
        width="50%"
        height="12px"
        rounded="full"
      />
      <mp-skeleton
        variant-color="purple"
        width="80%"
        height="12px"
        rounded="full"
      />
    </template>
    <template #text>
      {{ text }}
    </template>
    <template #footer>
      <mp-flex
        as="button"
        align-items="center"
        gap="2"
        outline="none"
        rounded="sm"
        color="blue.400"
        :_focus="{
          boxShadow: 'outer',
        }"
        @click="handleAlert('click copy button')"
      >
        <mp-icon name="draft" size="sm" variant="duotone" />
        <mp-text color="blue.400"> Use response </mp-text>
      </mp-flex>
      <mp-flex gap="2">
        <mp-box v-if="isShowLikeButton">
          <AireneFeedback id="like" @submit="handleSubmitFeedback">
            <mp-button-icon
              name="like"
              :variant="feedbackType === 'like' ? 'fill' : 'outline'"
              :color="feedbackType === 'like' ? 'blue.400' : 'gray.600'"
              v-mp-tooltip="'Good response'"
            />
          </AireneFeedback>
        </mp-box>
        <mp-box v-if="isShowDislikeButton">
          <AireneFeedback id="dislike" @submit="handleSubmitFeedback">
            <mp-button-icon
              name="dislike"
              :variant="feedbackType === 'dislike' ? 'fill' : 'outline'"
              :color="feedbackType === 'dislike' ? 'blue.400' : 'gray.600'"
              v-mp-tooltip="'Bad response'"
              @submit="handleSubmitFeedback"
            />
          </AireneFeedback>
        </mp-box>
      </mp-flex>
    </template>
    <template #source>
      <mp-flex
        width="full"
        justify-content="space-between"
        align-items="center"
        cursor="pointer"
        @click="handleShowSource"
      >
        <mp-text color="gray.600" font-weight="semibold" font-size="sm">
          Related sources
        </mp-text>
        <mp-button-icon :name="isSourceOpen ? 'caret-up' : 'caret-down'" />
      </mp-flex>
      <mp-collapse :is-open="isSourceOpen">
        <mp-flex direction="column" gap="1">
          <mp-flex
            v-for="(source, index) in sourceData"
            :key="index"
            as="a"
            target="_blank"
            align-items="center"
            gap="2"
            color="gray.600"
            py="0.5"
            :href="source.url"
            :_hover="{
              color: 'blue.400',
            }"
          >
            <mp-icon :name="source.icon" size="sm" color="inherit" />
            <mp-text color="inherit" font-size="sm">
              {{ source.name }}
            </mp-text>
          </mp-flex>
          <mp-text font-size="sm" is-link> View all </mp-text>
        </mp-flex>
      </mp-collapse>
    </template>
  </mp-airene-chat-bubble>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpText,
  MpIcon,
  MpCollapse,
  MpButtonIcon,
  MpSkeleton,
  MpAireneChatBubble,
} from "@mekari/pixel";

import AireneFeedback from "./AireneFeedback.vue";

export default {
  name: "AireneQuestion",
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpIcon,
    MpCollapse,
    MpButtonIcon,
    MpSkeleton,
    MpAireneChatBubble,
    AireneFeedback,
  },
  props: {
    text: {
      type: String,
      default: "",
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      // SOURCE
      isSourceOpen: true,
      sourceData: [
        { icon: "doc", name: "Mesin kopi rusak berkedip", url: "#" },
        {
          icon: "doc",
          name: "Mesin Kopi Tidak Berjalan dengan Lancar",
          url: "#",
        },
        {
          icon: "inbox",
          name: "Mesin mati tapi lampu power berkedip",
          url: "#",
        },
      ],

      // FEEDBACK
      isShowLikeButton: true,
      isShowDislikeButton: true,
      feedbackType: "",
    };
  },
  methods: {
    handleAlert(message) {
      alert(message);
    },
    handleShowSource() {
      this.isSourceOpen = !this.isSourceOpen;
    },
    handleSubmitFeedback(type) {
      this.feedbackType = type;

      if (type === "like") {
        this.isShowLikeButton = true;
        this.isShowDislikeButton = false;
      }

      if (type === "dislike") {
        this.isShowLikeButton = false;
        this.isShowDislikeButton = true;
      }
    },
  },
};
</script>
