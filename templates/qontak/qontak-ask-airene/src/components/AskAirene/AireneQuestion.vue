<template>
  <mp-airene-chat-bubble variant="question" :title="name">
    <template #text>
      {{ question }}
    </template>
  </mp-airene-chat-bubble>
</template>

<script>
import { MpAireneChatBubble } from "@mekari/pixel";

export default {
  name: "AireneQuestion",
  components: {
    MpAireneChatBubble,
  },
  props: {
    name: {
      type: String,
      default: "Anda",
    },
    question: {
      type: String,
      default: "",
    },
  },
};
</script>
