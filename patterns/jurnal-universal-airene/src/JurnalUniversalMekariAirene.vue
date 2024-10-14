<template>
  <mp-box
    :visibility="isOpen ? 'visible' : 'hidden'"
    position="fixed"
    top="0"
    right="0"
    bottom="0"
    left="0"
    z-index="modal"
  >
    <Transition
      :css="false"
      :appear="true"
      @before-enter="handleBeforeEnterOverlay"
      @enter="enterAnimationOverlay"
      @leave="leaveAnimationOverlay"
    >
      <mp-box
        data-element="airene-overlay"
        v-if="isShowContent"
        h="100vh"
        w="100vw"
        position="fixed"
        top="0"
        left="0"
        bg="overlay"
        bg-opacity="0.8"
        z-index="modal"
        @click="handleClose"
      />
    </Transition>

    <Transition
      :css="false"
      :appear="true"
      @before-enter="handleBeforeEnterContainer"
      @enter="enterAnimationContainer"
      @leave="leaveAnimationContainer"
    >
      <mp-box
        v-if="isShowContent"
        w="100vw"
        position="fixed"
        h="100vh"
        top="0"
        left="0"
        z-index="modal"
        pointer-events="none"
      >
        <mp-box
          display="flex"
          justify-content="center"
          align-items="flex-end"
          h="full"
          w="full"
          pb="4"
        >
          <AireneContainer pointer-events="auto">
            <AireneSidebar />
            <AireneBody @close="handleClose" />
          </AireneContainer>
        </mp-box>
      </mp-box>
    </Transition>
  </mp-box>
</template>

<script>
import { MpBox } from "@mekari/pixel";
import anime from "animejs";

import AireneContainer from "./parts/AireneContainer.vue";
import AireneSidebar from "./parts/AireneSidebar.vue";
import AireneBody from "./parts/AireneBody.vue";

export default {
  components: {
    AireneContainer,
    AireneSidebar,
    AireneBody,
    MpBox,
  },
  props: {
    isOpen: Boolean,
  },
  data() {
    return {
      isShowContent: false,
    };
  },
  watch: {
    isOpen(newValue) {
      this.isShowContent = newValue;
    },
  },
  mounted() {
    this.isShowContent = this.isOpen;
  },
  methods: {
    handleClose() {
      this.isShowContent = false;
    },
    handleEmitClose() {
      this.$emit("close");
    },

    // overlay
    handleBeforeEnterOverlay(el) {
      el.style.setProperty("will-change", "opacity");
    },
    enterAnimationOverlay(el, complete) {
      anime({
        targets: el,
        opacity: [0, 1],
        easing: "easeOutSine",
        duration: 600,
        complete,
      });
    },
    leaveAnimationOverlay(el, complete) {
      anime({
        targets: el,
        opacity: [1, 0],
        easing: "easeInSine",
        duration: 600,
        complete: () => {
          complete();
          this.handleEmitClose();
        },
      });
    },

    // container
    handleBeforeEnterContainer(el) {
      el.style.setProperty("will-change", "opacity, transform");
      el.style.setProperty("transform", "translateY(100%)");
    },
    enterAnimationContainer(el, complete) {
      anime({
        targets: el,
        translateY: ["100%", "0%"],
        easing: "easeOutSine",
        duration: 600,
        complete,
      });
    },
    leaveAnimationContainer(el, complete) {
      anime({
        targets: el,
        translateY: ["0%", "100%"],
        easing: "easeInSine",
        duration: 600,
        complete: () => {
          complete();
          this.handleEmitClose();
        },
      });
    },
  },
};
</script>
