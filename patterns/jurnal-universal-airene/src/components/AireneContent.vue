<template>
  <mp-box
    data-component="AireneContent"
    as="main"
    bg="white"
    rounded-top-left="xl"
    w="full"
    h="full"
    border-left-width="1px"
    border-top-width="1px"
    border-color="gray.400"
    position="relative"
    overflow="auto"
    v-bind="$attrs"
  >
    <!-- Content header -->
    <mp-flex
      position="sticky"
      top="0"
      bg="white"
      w="full"
      data-element="content-header"
      border-bottom-width="1px"
      border-color="gray.200"
      p="4"
      justify-content="flex-end"
      z-index="50"
    >
      <mp-button-icon name="close" @click="handleClose" />
    </mp-flex>

    <!-- Main content -->
    <mp-box
      data-element="content-body"
      position="relative"
      p="4"
      max-w="552px"
      mx="auto"
      min-h="calc(100% - 63px - 108px)"
      style="--chat-content-body-padding-top: 140px"
    >
      <AireneChatContentStarter />

      <AireneFeedback />
    </mp-box>

    <!-- Chat input -->
    <mp-box
      position="sticky"
      bottom="0"
      left="0"
      right="0"
      w="full"
      bg="white"
      z-index="50"
    >
      <mp-flex max-w="552px" flex-direction="column" mx="auto" pb="6" pt="4">
        <mp-flex w="full" position="relative">
          <mp-textarea
            v-model="chatText"
            placeholder="Tanya Airene"
            resize="none"
            rows="1"
            height="40px"
            min-height="40px"
            rounded="full"
            pt="10px"
            pb="0"
          />

          <mp-button-icon
            name="sent"
            position="absolute"
            right="10px"
            top="5px"
            rounded="full"
          />
        </mp-flex>

        <mp-text font-size="sm" color="gray.600" mt="1">
          Tanggapan Airene dapat tidak akurat atau kurang tepat.

          <mp-text
            as="span"
            is-link
            @click.native="isOpenModalDisclaimer = true"
          >
            Pelajari lebih lanjut
          </mp-text>
        </mp-text>
      </mp-flex>
    </mp-box>

    <AireneModalDisclaimer
      :is-open="isOpenModalDisclaimer"
      @close="isOpenModalDisclaimer = false"
    />
  </mp-box>
</template>

<script>
import { MpBox, MpFlex, MpButtonIcon, MpTextarea, MpText } from "@mekari/pixel";

import AireneChatContentStarter from "./AireneChatContentStarter.vue";
import AireneFeedback from "./AireneFeedback.vue";
import AireneModalDisclaimer from "./AireneModalDisclaimer.vue";

export default {
  components: {
    MpBox,
    MpFlex,
    MpButtonIcon,
    MpTextarea,
    MpText,
    AireneChatContentStarter,
    AireneFeedback,
    AireneModalDisclaimer,
  },
  data() {
    return {
      chatText: "",
      heightTextArea: "36px",

      isOpenModalDisclaimer: false,
    };
  },
  watch: {
    chatText(newValue) {
      if (newValue.length > 40) {
        this.heightTextArea = "72px";
      } else {
        if (this.isForceExpandTextArea) {
          this.heightTextArea = "72px";
        } else {
          this.heightTextArea = "36px";
        }
      }
    },
  },
  methods: {
    handleClose() {
      this.$emit("close");
    },
  },
};
</script>
