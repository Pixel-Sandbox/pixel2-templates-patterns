<template>
  <mp-box m="4" p="4">
    <mp-flex
      position="relative"
      direction="column"
      justify="center"
      align="center"
      mb="4"
    >
      <mp-text
        font-size="sm"
        font-weight="semibold"
        color="gray.400"
        background="background"
        px="2"
        z-index="1"
      >
        Friday, 23 December 2022
      </mp-text>
      <mp-box
        width="full"
        height="1px"
        background="gray.100"
        position="absolute"
      />
    </mp-flex>
    <mp-flex
      background="white"
      border-radius="md"
      height="xs"
      p="4"
      justify="center"
      align="center"
    >
      CHAT CONVERSATION
    </mp-flex>

    <!-- // SUMMARIZE CONVERSATION -->
    <mp-flex
      v-if="isShowSummarize"
      direction="column"
      border-radius="md"
      background="white"
      mt="4"
    >
      <mp-flex gap="4" mx="3" mt="3" mb="2">
        <IconAsk />
        <mp-flex direction="column" width="full">
          <mp-text font-weight="semibold" mb="0.5" line-height="1">
            Conversation summary
          </mp-text>
          <mp-flex align="center">
            <mp-icon name="security" size="sm" width="3" height="3" mr="2" />
            <mp-text font-size="sm" color="gray.600">Only you can see this summary</mp-text>
          </mp-flex>
        </mp-flex>
        <mp-tooltip
          id="tooltip-button-close"
          label="Remove conversation summary"
        >
          <mp-button-icon name="close" flex="none" align-self="center" @click="handleClose" />
        </mp-tooltip>
      </mp-flex>
      <mp-flex
        max-height="458px"
        overflow="auto"
        mr="3"
        ml="52px"
        mb="2"
        pr="3"
      >
        <mp-text>
          This document provides a detailed summary of a chat session between a
          customer and a customer support representative. In the chat, the
          customer expressed their frustration and disappointment regarding the
          delay in the delivery of their order. The customer had been waiting
          for a considerable amount of time, and they had not received any
          updates from the company regarding the status of their order. They had
          also attempted to reach out to the company multiple times, but no one
          had responded to their inquiries. The customer support representative
          was empathetic and apologized for the inconvenience caused. They tried
          to assist the customer by checking the status of their order, which
          was still in transit. However, this did not seem to satisfy the
          customer, who was already upset and angry about the situation. The
          customer accused the company of having terrible customer service and
          not taking their concerns seriously. The representative apologized
          once again and promised to do their best to ensure that the order was
          delivered as soon as possible. They assured the customer that they
          would follow up with the delivery team and provide them with regular
          updates until the order was delivered safely. The representative also
          offered a discount code as a token of appreciation for the customer's
          patience and understanding. The conversation ended with the customer
          still feeling angry and unsatisfied with the company's service.
          However, the representative made sure to assure the customer that
          their feedback was valuable and that they would take the necessary
          steps to improve their services in the future. The representative also
          promised to follow up with the customer after the order was delivered
          to ensure that they were satisfied with their purchase. Overall, the
          chat session highlighted the importance of effective communication and
          customer service in promoting customer satisfaction and loyalty. The
          incident also underscored the need for companies to be proactive in
          addressing customer concerns and providing timely updates regarding
          order status and delivery times.

          <br /><br />
          Conversation sentiment: Neutral
        </mp-text>
      </mp-flex>
      <LearnMore />
    </mp-flex>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpText,
  MpButtonIcon,
  MpIcon,
  MpTooltip,
} from "@mekari/pixel";

import LearnMore from "./LearnMore";
import IconAsk from "./IconAsk";

export default {
  name: "ChatConversation",
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpButtonIcon,
    MpIcon,
    MpTooltip,
    LearnMore,
    IconAsk,
  },
  props: {
    isShowSummarize: [Boolean],
  },
  methods: {
    handleAlert(val) {
      alert(val);
    },
    handleClose() {
      this.$emit("close");
    },
  },
};
</script>
