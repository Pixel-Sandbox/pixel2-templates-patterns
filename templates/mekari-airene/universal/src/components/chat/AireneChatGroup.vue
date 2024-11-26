<template>
  <mp-flex
    airene-data-component="AireneChatGroup"
    data-element="chat-group"
    as="li"
    flex-direction="column"
  >
    <mp-text
      data-element="chat-group-title"
      white-space="nowrap"
      font-weight="semibold"
      font-size="sm"
      color="gray.400"
      py="1"
      text-transform="uppercase"
    >
      {{ title }}
    </mp-text>

    <slot />
  </mp-flex>
</template>

<script>
import { MpFlex, MpText } from "@mekari/pixel";

export default {
  components: {
    MpFlex,
    MpText,
  },
  props: {
    title: {
      type: String,
      default: "",
      required: true,
    },
  },
};
</script>
