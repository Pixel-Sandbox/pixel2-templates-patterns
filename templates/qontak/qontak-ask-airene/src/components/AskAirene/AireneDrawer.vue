<template>
  <mp-box
    flex="none"
    position="relative"
    width="316px"
    height="100%"
    bg="white"
  >
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
      :justify-content="isShowIntroduction ? 'flex-end' : 'flex-start'"
      :height="`calc(100% - 48px - ${inputWrapperHeight}px)`"
      overflow-y="auto"
      transition="height 250ms ease"
    >
      <mp-flex v-if="isShowIntroduction" direction="column" gap="4" p="4">
        <AireneIntro
          name="Fajar"
          description="Is there anything Airene can help you with regarding your customer inquiries?"
          :is-show-hello="isShowIntroHello"
          :is-show-name="isShowIntroName"
          :is-show-other="isShowOtherIntro"
        />
        <AireneSuggestions
          :suggestions="suggestions"
          :is-show-suggestions="isShowSuggestions"
          :is-loading="isSuggestionsLoading"
          @click="handleClickSuggestion"
        />
      </mp-flex>
      <Transition name="fade">
        <mp-flex v-if="!isShowIntroduction" direction="column" gap="4" p="4">
          <AireneQuestion name="Anda" :question="prompt" />
          <mp-flex>
            <mp-airene-chat-bubble
              id="chat-bubble-with-other-content"
              :is-show-full-screen="false"
              :is-loading="isChatContentLoading"
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
                Silakan cabut dan sambungkan kembali mesin kopi Anda. Jika lampu
                masih berkedip merah, mohon periksa apakah tangki air sudah
                penuh. Apabila masalah masih berlanjut, silakan hubungi layanan
                pelanggan kami untuk bantuan lebih lanjut
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
                  <mp-button-icon
                    name="like"
                    @click="handleAlert('click like button')"
                  />
                  <mp-button-icon
                    name="dislike"
                    @click="handleAlert('click dislike button')"
                  />
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
                  <mp-text
                    color="gray.600"
                    font-weight="semibold"
                    font-size="sm"
                  >
                    Related sources
                  </mp-text>
                  <mp-button-icon
                    :name="isSourceOpen ? 'caret-up' : 'caret-down'"
                  />
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
          </mp-flex>
        </mp-flex>
      </Transition>
    </mp-flex>
    <!-- // END OF CHAT CONTENT -->

    <!-- // CHAT INPUT -->
    <Transition name="fade">
      <AireneInput
        v-if="isShowInput"
        :value="prompt"
        @height="handleInputHeight"
        @submit="handleInputSubmit"
      />
    </Transition>
    <!-- // END OF CHAT INPUT -->
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpText,
  MpImage,
  MpButtonIcon,
  MpAireneChatBubble,
  MpIcon,
  MpCollapse,
  MpSkeleton,
} from "@mekari/pixel";

import AireneIntro from "./AireneIntro.vue";
import AireneSuggestions from "./AireneSuggestions.vue";
import AireneInput from "./AireneInput.vue";
import AireneQuestion from "./AireneQuestion.vue";

export default {
  name: "AireneDrawer",
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpButtonIcon,
    MpImage,
    MpAireneChatBubble,
    MpIcon,
    MpCollapse,
    MpSkeleton,
    AireneIntro,
    AireneSuggestions,
    AireneInput,
    AireneQuestion,
  },
  data() {
    return {
      inputWrapperHeight: 118,

      // INTRODUCTION
      isShowIntroduction: true,
      isShowIntroHello: false,
      isShowIntroName: false,
      isShowOtherIntro: false,

      // SUGGESTIONS
      suggestions: "Cara memperbaiki mesin kopi dengan indikator berkedip ?",
      isShowSuggestions: false,
      isSuggestionsLoading: true,

      // ANSWER
      isChatContentLoading: false,

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

      // INPUT
      isShowInput: false,
      prompt: "",
    };
  },
  mounted() {
    setTimeout(() => {
      this.isShowIntroHello = true;
    }, 1000);

    setTimeout(() => {
      this.isShowIntroName = true;
    }, 2000);

    setTimeout(() => {
      this.isShowOtherIntro = true;
      this.isShowSuggestions = true;
      this.isShowInput = true;
    }, 3000);

    setTimeout(() => {
      this.isSuggestionsLoading = false;
    }, 4000);
  },
  methods: {
    handleAlert(message) {
      alert(message);
    },
    handleCloseAirene() {
      this.$emit("close");
    },
    handleClickSuggestion(val) {
      this.prompt = val;
    },
    handleInputHeight(val) {
      this.inputWrapperHeight = val;
    },
    handleInputSubmit(val) {
      console.log("SUBMIT", val);
      this.isShowIntroduction = false;
      this.isChatContentLoading = true;

      // DO SOMETHING
      setTimeout(() => {
        this.isChatContentLoading = false;
      }, 2000);
    },
    handleShowSource() {
      this.isSourceOpen = !this.isSourceOpen;
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
