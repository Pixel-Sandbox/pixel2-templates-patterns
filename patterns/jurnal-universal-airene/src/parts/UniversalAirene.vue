<template>
  <AireneRoot :is-open="isRender">
    <AireneOverlay />

    <AireneContent>
      <AireneIntroAnimation
        v-if="isShowLoading"
        @finish="handleFinishIntroAnimation"
      />
      <template v-else>
        <AireneSidebar />
        <AireneBody @close="handleCloseContent" />
      </template>
    </AireneContent>
  </AireneRoot>
</template>

<script>
import AireneRoot from "../components/layout/AireneRoot.vue";
import AireneOverlay from "../components/layout/AireneOverlay.vue";
import AireneContent from "../components/layout/AireneContent.vue";
import AireneIntroAnimation from "../components/layout/AireneIntroAnimation.vue";

import AireneSidebar from "./AireneSidebar.vue";
import AireneBody from "./AireneBody.vue";

export default {
  components: {
    AireneRoot,
    AireneSidebar,
    AireneBody,
    AireneContent,
    AireneOverlay,
    AireneIntroAnimation,
  },
  props: {
    isOpen: Boolean,
  },
  data() {
    return {
      isRender: false,
      isShowContent: false,
      currentActiveChat: "a1b2c3d4",
      isShowLoading: true,
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

        // Method
        handleEmitClose: this.handleEmitClose,
        handleCloseContent: this.handleCloseContent,
        handleUnrender: this.handleUnrender,
        handleSetCurrentActiveChat: this.handleSetCurrentActiveChat,
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
  },
  mounted() {
    // Set the initial state of the content to be shown or hidden based on the isOpen prop
    this.isRender = this.isOpen;
    this.isShowContent = this.isOpen;

    // Start intro animation
    if (this.isOpen) {
      this.$nextTick(() => {
        this.animateIcon();
      });
    }
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
    },
  },
};
</script>
