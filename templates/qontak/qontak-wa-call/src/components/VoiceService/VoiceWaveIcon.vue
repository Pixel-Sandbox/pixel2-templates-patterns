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
      default: false,
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
    this.startWaveAnimation(true);
  },
  methods: {
    startWaveAnimation(isStart) {
      this.dots.forEach((_, i) => {
        const dotElement = this.$refs[`dot${i}`][0].$el;
        const animation = anime({
          autoplay: false,
          targets: dotElement,
          height: [2, 10],
          easing: "easeInOutSine",
          direction: "alternate",
          duration: 300,
          loop: true,
          delay: i * 100,
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
