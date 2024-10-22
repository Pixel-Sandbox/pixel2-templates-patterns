<template>
  <mp-box
    flex="none"
    position="relative"
    width="316px"
    height="100%"
    overflow="auto"
    bg="white"
  >
    <AireneIntro v-if="isShowIntroduction" @finish="handleFinishIntro" />
    <template v-else>
      <mp-flex
        justify-content="space-between"
        align-items="center"
        width="full"
        height="12"
        px="4"
        border-bottom="1px solid"
        border-color="gray.100"
      >
        <mp-image
          src="https://cdn.mekari.design/logo/airine/default.png"
          :width="102"
          :height="30"
        />
        <mp-button-icon name="close" @click="handleCloseAirene" />
      </mp-flex>

      <!-- // CHAT CONTENT -->
      <mp-flex
        position="relative"
        direction="column"
        :justify-content="isShowGreetings ? 'flex-end' : 'flex-start'"
        :height="`calc(100% - 48px - 118px)`"
        overflow-y="auto"
        transition="height 250ms ease"
      >
        <mp-flex v-if="isShowGreetings" direction="column" gap="4" p="4">
          <AireneGreetings
            name="Fajar"
            description="Is there anything Airene can help you with regarding your customer inquiries?"
            :is-show-hello="isShowGreetingsHello"
            :is-show-name="isShowGreetingsName"
            :is-show-other="isShowOtherGreetings"
          />
          <AireneSuggestions
            :suggestions="suggestions"
            :is-show-suggestions="isShowSuggestions"
            :is-loading="isSuggestionsLoading"
            @click="handleClickSuggestion"
          />
        </mp-flex>
        <Transition name="fade">
          <mp-flex v-if="!isShowGreetings" direction="column" gap="4" p="4">
            <AireneQuestion name="Anda" :question="question" />
            <AireneAnswer :text="answer" :is-loading="isChatContentLoading" />
          </mp-flex>
        </Transition>
      </mp-flex>
      <!-- // END OF CHAT CONTENT -->

      <!-- // CHAT INPUT -->
      <Transition name="fade">
        <AireneInput
          v-if="isShowInput"
          :value="prompt"
          @submit="handleInputSubmit"
        />
      </Transition>
      <!-- // END OF CHAT INPUT -->
    </template>
  </mp-box>
</template>

<script>
import { MpBox, MpFlex, MpImage, MpButtonIcon } from "@mekari/pixel";

import AireneIntro from "./AireneIntro.vue";
import AireneGreetings from "./AireneGreetings.vue";
import AireneSuggestions from "./AireneSuggestions.vue";
import AireneInput from "./AireneInput.vue";
import AireneQuestion from "./AireneQuestion.vue";
import AireneAnswer from "./AireneAnswer.vue";

export default {
  name: "AireneDrawer",
  components: {
    MpBox,
    MpFlex,
    MpButtonIcon,
    MpImage,
    AireneIntro,
    AireneGreetings,
    AireneSuggestions,
    AireneInput,
    AireneQuestion,
    AireneAnswer,
  },
  data() {
    return {
      // INTRO
      isShowIntroduction: true,

      // Greetings
      isShowGreetings: true,
      isShowGreetingsHello: false,
      isShowGreetingsName: false,
      isShowOtherGreetings: false,

      // SUGGESTIONS
      suggestions: "Cara memperbaiki mesin kopi dengan indikator berkedip ?",
      isShowSuggestions: false,
      isSuggestionsLoading: true,

      //QUESTION
      question: "",

      // ANSWER
      isChatContentLoading: false,
      answer:
        "Silakan cabut dan sambungkan kembali mesin kopi Anda. Jika lampu masih berkedip merah, mohon periksa apakah tangki air sudah penuh. Apabila masalah masih berlanjut, silakan hubungi layanan pelanggan kami untuk bantuan lebih lanjut",

      // INPUT
      isShowInput: false,
      prompt: "",
    };
  },
  mounted() {},
  methods: {
    handleCloseAirene() {
      this.$emit("close");
    },
    handleClickSuggestion(val) {
      this.prompt = val;
    },
    handleInputSubmit(val) {
      console.log("SUBMIT", val);
      this.question = val;
      this.isShowIntroduction = false;
      this.isChatContentLoading = true;

      // DO SOMETHING
      setTimeout(() => {
        this.isChatContentLoading = false;
      }, 2000);
    },
    handleFinishIntro() {
      this.isShowIntroduction = false;
      setTimeout(() => {
        this.isShowGreetingsHello = true;
      }, 500);

      setTimeout(() => {
        this.isShowGreetingsName = true;
      }, 1000);

      setTimeout(() => {
        this.isShowOtherGreetings = true;
        this.isShowSuggestions = true;
        this.isShowInput = true;
      }, 1500);

      setTimeout(() => {
        this.isSuggestionsLoading = false;
      }, 2500);
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 300ms;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
