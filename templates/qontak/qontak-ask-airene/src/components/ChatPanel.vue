<template>
  <mp-box
    ref="chatPanel"
    as="section"
    data-id="content"
    position="relative"
    width="100%"
    border-left="1px solid" 
    border-right="1px solid" 
    border-color="gray.100"
  >
    <mp-flex
      justify="space-between"
      align-items="center"
      height="12"
      background="white"
      px="4"
      border-bottom="1px solid"
      border-color="gray.100"
    >
      <mp-flex gap=2 align-items="center">
        <mp-text>Assigned to:</mp-text>
        <mp-text font-weight="semibold">Christin</mp-text>
        <mp-button variant="outline" size="sm">Handover</mp-button>
      </mp-flex>
      <mp-flex gap=2 align-items="center">
        <mp-button-icon name="block-user" />
        <mp-button right-icon="caret-down" size="sm">Resolve</mp-button>
      </mp-flex>
    </mp-flex>

    <mp-flex
      direction="column"
      height="calc(100% - 48px - 63px)"
      background="#F1F5F9"
      overflow-y="auto"
    >
      <ChatConversation @click-airene="handleShowAirene"/>
    </mp-flex>

    <ChatInput />
  </mp-box>
</template>

<script>
import { MpBox, MpFlex, MpText, MpButton, MpButtonIcon, } from "@mekari/pixel";
import ChatConversation from "./ChatConversation";
import ChatInput from "./ChatInput";

export default {
  name: "ChatPanel",
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpButton,
    MpButtonIcon,
    ChatConversation,
    ChatInput,
  },
  data() {
    return {};
  },
  methods: {
    handleShowAirene() {
      this.$emit('show-airene')
    },
  }
};
</script>
