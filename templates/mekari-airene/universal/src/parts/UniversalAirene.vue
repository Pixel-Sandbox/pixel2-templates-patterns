<template>
  <mp-box>
    <AireneRoot :is-open="isRender">
      <AireneOverlay />

      <AireneContent>
        <AireneIntroAnimation
          v-if="isShowLoading"
          @finish="handleFinishIntroAnimation"
        />
        <template v-else>
          <AireneSidebar :is-show-intro-animation="enableIntroAnimation" />
          <AireneBody
            @close="handleCloseContent"
            @minimize="handleMinimize"
            :is-show-intro-animation="enableIntroAnimation"
          />
        </template>
      </AireneContent>
    </AireneRoot>

    <AireneFloating
      v-if="isFloating"
      @click-close="handleClickCloseFloating"
      @click-maximize="handleClickMaximizeFloating"
    />
  </mp-box>
</template>

<script>
import { MpBox } from "@mekari/pixel";
import AireneRoot from "../components/layout/AireneRoot.vue";
import AireneOverlay from "../components/layout/AireneOverlay.vue";
import AireneContent from "../components/layout/AireneContent.vue";
import AireneIntroAnimation from "../components/layout/AireneIntroAnimation.vue";

import AireneSidebar from "./AireneSidebar.vue";
import AireneBody from "./AireneBody.vue";
import AireneFloating from "./AireneFloating.vue";

export default {
  components: {
    MpBox,
    AireneRoot,
    AireneSidebar,
    AireneBody,
    AireneContent,
    AireneOverlay,
    AireneIntroAnimation,
    AireneFloating,
  },
  props: {
    isOpen: Boolean,
    enableIntroAnimation: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isRender: false,
      isShowContent: false,
      currentActiveChat: "",
      isShowLoading: this.enableIntroAnimation,
      isShowIntroAnimation: this.enableIntroAnimation,
      animationFinishedStatus: {
        intro: false,
        sidebar: false,
        chatContentStarter: false,
      },
      isFloating: false,
    };
  },
  provide() {
    // Expose the context to the child components (AireneContent.vue, AireneOverlay.vue)
    return {
      $AireneContext: () => this.AireneContext,
    };
  },
  computed: {
    // Computed context to be used in child components. Exposed via provide, and consume with inject.
    AireneContext() {
      return {
        // State
        isShowContent: this.isShowContent,
        currentActiveChat: this.currentActiveChat,
        enableIntroAnimation: this.enableIntroAnimation,

        // Method
        handleEmitClose: this.handleEmitClose,
        handleCloseContent: this.handleCloseContent,
        handleUnrender: this.handleUnrender,
        handleSetCurrentActiveChat: this.handleSetCurrentActiveChat,
        handleToggleAnimation: this.handleToggleAnimation,
      };
    },
  },
  watch: {
    isOpen(newValue) {
      if (newValue) {
        !this.isShowContent && this.handleShowContent();
        this.handleRender();
      } else {
        this.isShowContent && this.handleCloseContent();
      }
    },
    animationFinishedStatus: {
      deep: true,
      handler(newValue) {
        console.log("animationFinishedStatus =>", newValue);
        if (newValue.intro && newValue.sidebar && newValue.chatContentStarter) {
          this.$emit("finish-animation");
        }
      },
    },
  },
  mounted() {
    // Set the initial state of the content to be shown or hidden based on the isOpen prop
    this.isRender = this.isOpen;
    this.isShowContent = this.isOpen;
  },
  methods: {
    handleShowContent() {
      this.isShowContent = true;
    },
    handleCloseContent() {
      this.isShowContent = false;
    },
    handleRender() {
      this.isRender = true;
    },
    handleUnrender() {
      this.isRender = false;
      this.handleEmitClose();
    },

    // Will be called after the animation is finished.
    handleEmitClose() {
      this.$emit("close");
    },

    handleSetCurrentActiveChat(chatId) {
      this.currentActiveChat = chatId;
    },

    handleFinishIntroAnimation() {
      this.isShowLoading = false;
      // Toggle the intro animation finished status to true
      this.handleToggleAnimation("intro", true);
    },

    handleToggleAnimation(target, value) {
      if (target === "intro") {
        this.animationFinishedStatus.intro = value;
      } else if (target === "sidebar") {
        this.animationFinishedStatus.sidebar = value;
      } else if (target === "chatContentStarter") {
        this.animationFinishedStatus.chatContentStarter = value;
      }
    },

    // Floating
    handleMinimize() {
      this.handleCloseContent();

      this.isFloating = true;
    },
    handleClickCloseFloating() {
      this.isFloating = false;
      this.handleCloseContent();
    },
    handleClickMaximizeFloating() {
      this.isFloating = false;
      this.handleShowContent();
      this.handleRender();
    },
  },
};
</script>
