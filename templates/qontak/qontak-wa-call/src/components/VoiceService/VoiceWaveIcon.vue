<template>
  <mp-flex
    justify="center"
    align-items="center"
    gap="0.5"
    width="6"
    height="6"
    rounded="full"
    bg="blue.100"
    shadow="lg"
  >
    <mp-box
      v-for="(dot, index) in dots"
      :key="index"
      :ref="'dot' + index"
      width="2px"
      height="2px"
      rounded="2px"
      bg="blue.700"
    />
  </mp-flex>
</template>

<script>
import anime from "animejs";
import { MpFlex, MpBox } from "@mekari/pixel";

export default {
  name: "VoiceWaveIcon",
  components: {
    MpFlex,
    MpBox,
  },
  props: {
    isStart: {
      type: Boolean,
      default: true,
    },
  },
  watch: {
    isStart(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.startWaveAnimation(newVal);
      }
    },
  },
  data() {
    return {
      dots: [0, 1, 2],
      waveAnimations: [],
    };
  },
  mounted() {
    this.startWaveAnimation();
  },
  methods: {
    startWaveAnimation(isStart = true) {
      this.dots.forEach((_, i) => {
        const dotElement = this.$refs[`dot${i}`][0].$el;
        const animation = anime({
          autoplay: false,
          targets: dotElement,
          height: [2, 10], // Animate height between 2px and 100px
          easing: "easeInOutSine", // Smooth oscillation
          direction: "alternate", // Go back and forth
          duration: 300, // Duration of one cycle
          loop: true, // Loop indefinitely
          delay: i * 100, // Add delay for wave effect
        });

        this.waveAnimations.push(animation);
      });

      this.waveAnimations.forEach((animation) =>
        isStart ? animation.play() : animation.pause()
      );
    },
  },
};
</script>
