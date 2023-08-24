<template>
  <mp-box
    ref="chatPanel"
    as="section"
    data-id="content"
    position="relative"
    width="100%"
  >
    <mp-flex
      justify="space-between"
      align-items="center"
      height="12"
      background="green.50"
      px="4"
    >
      <mp-badge variant="solid" variant-color="green"> Resolved </mp-badge>
      <SmartButton
        id="smart-assist-tour"
        title="Summarize this conversation"
        :is-disabled="isShowSummarize"
        :is-show-tour="isStartTour"
        @click="handleClickSmartButton"
      />
      <SmartAssist
        :is-open="isShowSmartAssist"
        :input="smartAssistInput"
        :result="smartAssistResult"
        :type="smartAssistType"
        @close="onCloseSmartAssist"
        @insert="onInsertSummarize"
      />
    </mp-flex>
    <mp-flex
      direction="column"
      height="calc(100% - 48px)"
      background-color="background"
      pb="12"
      overflow-y="auto"
    >
      <ChatConversation
        :is-show-summarize="isShowSummarize"
        @close="onCloseSummarize"
      />
    </mp-flex>
    <ChatInput @input="onInputChat" @action="onClickInputAction" />
  </mp-box>
</template>

<script>
import { MpBox, MpFlex, MpBadge } from "@mekari/pixel";
import SmartButton from "./SmartButton";
import SmartAssist from "./SmartAssist";
import ChatConversation from "./ChatConversation";
import ChatInput from "./ChatInput";

export default {
  name: "ChatPanel",
  components: {
    MpBox,
    MpFlex,
    MpBadge,
    SmartButton,
    SmartAssist,
    ChatConversation,
    ChatInput,
  },
  data() {
    return {
      smartAssistType: "summarize",
      smartAssistInput: "",
      smartAssistResult: "",
      chatInput: "",
      isStartTour: true,
      isShowSmartAssist: false,
      isShowSummarize: false,
      steps: [
        {
          target: "#smart-assist-tour",
          content: {
            title: "Mekari Airene",
            description:
              "Use Mekari Airene to help you summarize this conversation.",
            media: {
              src: "https://cdn.mekari.design/template-assets/mekari-ask-banner.gif",
              alt: "Image",
            },
            primaryAction: {
              text: "Try Mekari Airene",
              variant: "solid",
              isFullWidth: true,
            },
            isShowPrimaryAction: true,
            isClosable: true,
          },
          options: {
            placement: "bottom",
          },
          isHighlighted: true,
          highlightColor: "blue",
          isScrollIntoElement: false,
        },
      ],
    };
  },
  mounted() {
    this.$tour(this.isStartTour, this.steps, {
      id: "basic-tour",
      stepIndex: 0,
      isDisableScroll: true,
      isDebug: false,
      next: this.closeTour,
      close: () => {
        this.$tour(false);
        this.isStartTour = false;
      },
    });
  },
  methods: {
    handleClickSmartButton() {
      this.smartAssistType = "summarize";
      this.smartAssistInput =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
      this.smartAssistResult = `Dalam percakapan ini, pelanggan Evelyn Bellinda menghubungi agen
              Christin untuk mengajukan klaim garansi untuk iPhone 14 mereka.
              Agen menyetujui untuk memproses klaim tersebut. Dalam percakapan
              ini, pelanggan Evelyn Bellinda menghubungi agen Christin untuk
              mengajukan klaim garansi untuk iPhone 14 mereka. Agen menyetujui
              untuk memproses klaim tersebut. Dalam percakapan ini, pelanggan
              Evelyn Bellinda menghubungi agen Christin untuk mengajukan klaim
              garansi untuk iPhone 14 mereka. Agen menyetujui untuk memproses
              klaim tersebut. Dalam percakapan ini, pelanggan Evelyn Bellinda
              menghubungi agen Christin untuk mengajukan klaim garansi untuk
              iPhone 14 mereka. Agen menyetujui untuk memproses klaim tersebut.
              Dalam percakapan ini, pelanggan Evelyn Bellinda menghubungi agen
              Christin untuk mengajukan klaim garansi untuk iPhone 14 mereka.
              Agen menyetujui untuk memproses klaim tersebut. Dalam percakapan
              ini, pelanggan Evelyn Bellinda menghubungi agen Christin untuk
              mengajukan klaim garansi untuk iPhone 14 mereka. Agen menyetujui
              untuk memproses klaim tersebut. Dalam percakapan ini, pelanggan
              Evelyn Bellinda menghubungi agen Christin untuk mengajukan klaim
              garansi untuk iPhone 14 mereka. Agen menyetujui untuk memproses
              klaim tersebut.
              Dalam percakapan ini, pelanggan Evelyn Bellinda menghubungi agen
              Christin untuk mengajukan klaim garansi untuk iPhone 14 mereka.
              Agen menyetujui untuk memproses klaim tersebut. Dalam percakapan
              ini, pelanggan Evelyn Bellinda menghubungi agen Christin untuk
              mengajukan klaim garansi untuk iPhone 14 mereka. Agen menyetujui
              untuk memproses klaim tersebut. Dalam percakapan ini, pelanggan
              Evelyn Bellinda menghubungi agen Christin untuk mengajukan klaim
              garansi untuk iPhone 14 mereka. Agen menyetujui untuk memproses
              klaim tersebut. Dalam percakapan ini, pelanggan Evelyn Bellinda
              menghubungi agen Christin untuk mengajukan klaim garansi untuk
              iPhone 14 mereka. Agen menyetujui untuk memproses klaim tersebut.
              Dalam percakapan ini, pelanggan Evelyn Bellinda menghubungi agen
              Christin untuk mengajukan klaim garansi untuk iPhone 14 mereka.
              Agen menyetujui untuk memproses klaim tersebut. Dalam percakapan
              ini, pelanggan Evelyn Bellinda menghubungi agen Christin untuk
              mengajukan klaim garansi untuk iPhone 14 mereka. Agen menyetujui
              untuk memproses klaim tersebut. Dalam percakapan ini, pelanggan
              Evelyn Bellinda menghubungi agen Christin untuk mengajukan klaim
              garansi untuk iPhone 14 mereka. Agen menyetujui untuk memproses
              klaim tersebut.`;
      this.handleOpenSmartAssist();
    },
    handleOpenSmartAssist() {
      this.isShowSmartAssist = true;
    },
    onCloseSmartAssist() {
      this.isShowSmartAssist = false;
    },
    onInsertSummarize() {
      this.isShowSummarize = true;
    },
    onCloseSummarize() {
      this.isShowSummarize = false;
    },
    closeTour() {
      this.$tour(false);
      this.isStartTour = false;
      this.handleClickSmartButton();
    },
    onClickInputAction() {
      this.smartAssistInput = this.chatInput;
      this.smartAssistType = "paraphrase";
      this.smartAssistResult =
        "Untuk memproses claim garansi iPhone 14 Anda, saya membutuhkan beberapa data pendukung seperti nomor IMEI dan tanggal pembelian.";
      this.handleOpenSmartAssist();
    },
    onInputChat(val) {
      this.chatInput = val;
    },
  },
};
</script>
