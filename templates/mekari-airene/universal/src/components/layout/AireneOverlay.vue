<template>
  <Transition
    :css="false"
    :appear="true"
    @before-enter="handleBeforeEnterOverlay"
    @enter="enterAnimationOverlay"
    @leave="leaveAnimationOverlay"
  >
    <mp-box
      data-element="airene-overlay"
      v-if="context.isShowContent"
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
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
