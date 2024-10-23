<template>
  <mp-box
    ref="drawer"
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
        <mp-flex
          v-if="isShowGreetings || isShowSuggestions"
          direction="column"
          gap="4"
          p="4"
        >
          <AireneGreetings
            v-if="isShowGreetings"
            name="Fajar"
            description="Is there anything Airene can help you with regarding your customer inquiries?"
            @finish="handleFinishGreetings"
          />
          
          <Transition name="fade" mode="out-in">
            <AireneSuggestions
              v-if="isShowSuggestions"
              :suggestions="suggestions"
              :is-loading="isSuggestionsLoading"
              @click="handleClickSuggestion"
            />
            <mp-box v-if="!isShowSuggestions" height="98px" bg="white" />
          </Transition>
        </mp-flex>

        <Transition name="fade">
          <mp-flex v-if="isShowQuestion" direction="column" gap="4" p="4">
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
      isShowGreetings: false,

      // SUGGESTIONS
      isShowSuggestions: false,
      isSuggestionsLoading: false,
      suggestions: "Cara memperbaiki mesin kopi dengan indikator berkedip",

      //QUESTION
      isShowQuestion: false,
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
      this.isShowGreetings = false;
      this.isShowSuggestions = false;

      this.question = val;
      this.isShowQuestion = true;
      this.isChatContentLoading = true;

      // DO SOMETHING
      setTimeout(() => {
        this.isChatContentLoading = false;
      }, 2000);
    },
    handleFinishIntro() {
      this.isShowIntroduction = false;
      this.isShowGreetings = true;
    },
    handleFinishGreetings() {
      this.isShowInput = true;
      this.isShowSuggestions = true;
      this.isSuggestionsLoading = true;

      setTimeout(() => {
        this.isSuggestionsLoading = false;
      }, 2000);
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 200ms;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
