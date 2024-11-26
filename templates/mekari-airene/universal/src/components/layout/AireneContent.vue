<template>
  <Transition
    :css="false"
    :appear="true"
    @before-enter="handleBeforeEnterContainer"
    @enter="enterAnimationContainer"
    @leave="leaveAnimationContainer"
  >
    <mp-box
      v-if="context.isShowContent"
      w="100vw"
      h="100vh"
      position="fixed"
      top="0"
      left="0"
      z-index="modal"
      pointer-events="none"
      display="flex"
      justify-content="center"
      align-items="flex-end"
      pb="4"
      v-scroll-lock="true"
    >
      <mp-box
        data-component="AireneContent"
        bg="#F5F9FF"
        width="90%"
        height="95%"
        rounded="lg"
        display="flex"
        overflow="hidden"
        border-width="1px"
        border-color="gray.200"
        pointer-events="auto"
        position="relative"
        v-bind="$attrs"
      >
        <slot />
      </mp-box>
    </mp-box>
  </Transition>
</template>

<script>
import { MpBox } from "@mekari/pixel";
import anime from "animejs";

export default {
  components: {
    MpBox,
  },
  // Inject the context from the parent component (UniversalMekariAirene.vue)
  inject: ["$AireneContext"],
  computed: {
    context() {
      return this.$AireneContext();
    },
  },
  methods: {
    handleClose() {
      this.context.handleCloseContent();
    },
    handleFinishAnimation() {
      this.context.handleUnrender();
    },

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
          this.handleFinishAnimation();
        },
      });
    },
  },
};
</script>
