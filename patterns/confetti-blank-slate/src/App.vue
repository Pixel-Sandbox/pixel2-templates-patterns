<template>
  <mp-flex
    gap="1"
    justify-content="center"
    align-items="center"
    width="376px"
    height="100vh"
    direction="column"
    margin="0 auto"
  >
    <mp-image
      src="https://cdn.mekari.design/illustration/progress-feedback/Approved_PB_L_01.png"
      :width="288"
      :height="240"
    />
    <mp-heading as="h3" font-size="lg"> You're All Set! </mp-heading>
    <mp-text color="gray.600" text-align="center" mb="7.5">
      Thank you, you have successfully reviewed all pending requests.
    </mp-text>
    <mp-text is-link> Back to all requests </mp-text>
    <mp-box position="absolute" bottom="0" right="0" margin="4">
      <mp-button @click="handleParty"> Let's party again! </mp-button>
    </mp-box>
  </mp-flex>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpButton,
  MpHeading,
  MpText,
  MpImage,
} from "@mekari/pixel";

export default {
  name: "App",
  components: {
    MpBox,
    MpFlex,
    MpButton,
    MpHeading,
    MpText,
    MpImage,
  },
  data() {
    return {
      isParty: false,
    };
  },
  mounted() {
    this.isParty = true;
    this.$confetti.start({
      particles: [
        {
          type: "rect",
        },
        {
          type: "circle",
        },
      ],
      defaultColors: [
        "#99FF99",
        "#66C4FFCC",
        "#FF66D9",
        "#FFC2C2",
        "#F0FF6699",
        "#6685FFCC",
        "#FFA366",
        "##6682FF1A",
      ],
    });

    setTimeout(() => {
      this.isParty = false;
      this.$confetti.stop();
    }, 3000);
  },
  methods: {
    handleParty() {
      this.isParty = true;
      this.$confetti.start({
        particles: [
          {
            type: "rect",
          },
          {
            type: "circle",
          },
        ],
        defaultColors: [
          "#99FF99",
          "#66C4FFCC",
          "#FF66D9",
          "#FFC2C2",
          "#F0FF6699",
          "#6685FFCC",
          "#FFA366",
          "##6682FF1A",
        ],
      });

      setTimeout(() => {
        this.isParty = false;
        this.$confetti.stop();
      }, 5000);
    },
  },
};
</script>
