<template>
  <mp-box>
    <mp-box
      position="absolute"
      top="0"
      left="0"
      h="full"
      w="full"
      v-if="isShowLoading"
      overflow="hidden"
    >
      <video
        autoplay
        loop
        muted
        playsinline
        style="
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1.1);
        "
      >
        <source src="/airene-intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </mp-box>

    <mp-box position="absolute" top="0" left="0" right="0" bottom="0">
      <mp-flex h="full" align-items="center" max-w="60%" mx="auto">
        <mp-flex flex-direction="column">
          <svg
            id="airene-intro-icon"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M37.7434 27.8701L36.2328 27.6782C30.8795 26.9945 26.6692 22.7762 25.9909 17.4228L25.8099 15.996C25.5153 13.6585 23.2129 12.083 20.7889 12.083C18.392 12.083 16.095 13.5936 15.7869 15.923L15.595 17.4336C14.9113 22.787 10.693 26.9972 5.33967 27.6755L3.91283 27.8566C1.52397 28.1673 -0.000152588 30.4535 -0.000152588 32.8775C-0.000152588 35.3015 1.4429 37.5877 3.83987 37.8795L5.35048 38.0714C10.7038 38.7551 14.914 42.9734 15.5923 48.3268L15.7734 49.7536C16.0679 52.1857 18.3703 53.6666 20.7943 53.6666C23.1913 53.6666 25.518 52.0344 25.7964 49.8266L25.9882 48.316C26.6719 42.9626 30.8903 38.7524 36.2436 38.0741L37.6704 37.893C40.0728 37.5877 41.5834 35.2961 41.5834 32.8721C41.5834 30.4481 40.0755 28.1619 37.7434 27.8701Z"
              fill="#651FFF"
            />
            <path
              d="M51.4119 8.22654L50.658 8.12925C47.9827 7.78606 45.8748 5.67823 45.537 3.00292L45.4479 2.2895C45.2992 1.11939 44.148 0.333008 42.9374 0.333008C41.7376 0.333008 40.5918 1.08696 40.435 2.25437L40.3377 3.00832C39.9945 5.68364 37.8867 7.79146 35.2114 8.12925L34.498 8.21843C33.3036 8.37516 32.5415 9.51825 32.5415 10.7289C32.5415 11.9395 33.263 13.0853 34.4629 13.2313L35.2168 13.3286C37.8921 13.6717 40 15.7796 40.3377 18.4549L40.4269 19.1683C40.5728 20.3844 41.7267 21.1248 42.9374 21.1248C44.1372 21.1248 45.2992 20.3087 45.4398 19.2034L45.537 18.4495C45.8802 15.7742 47.9881 13.6663 50.6634 13.3286L51.3768 13.2394C52.5793 13.088 53.3333 11.9395 53.3333 10.7289C53.3333 9.51825 52.5793 8.37516 51.4119 8.22654Z"
              fill="#651FFF"
            />
          </svg>

          <mp-box
            display="flex"
            align-items="center"
            gap="1"
            font-size="2xl"
            font-weight="semibold"
            mt="4"
            class="text-body"
          >
            <span ref="typedText" style="opacity: 0">|</span>
            <mp-box
              class="typed-cursor"
              w="2px"
              h="25px"
              bg="linear-gradient(96deg, #BD63F8 2.22%, #5F37E1 98.05%)"
              style="opacity: 0"
            ></mp-box>
          </mp-box>
        </mp-flex>
      </mp-flex>
    </mp-box>
  </mp-box>
</template>

<script>
import anime from "animejs";

import { MpBox, MpFlex } from "@mekari/pixel";

export default {
  components: {
    MpBox,
    MpFlex,
  },
  data() {
    return {
      typingAnimation: null,
      cursorAnimation: null,
    };
  },

  mounted() {
    // Start intro animation
    this.$nextTick(() => {
      this.animateIcon();
    });
  },
  methods: {
    // Intro animation
    animateTyping() {
      const textElement = this.$refs.typedText;
      const cursorElement = this.$el.querySelector(".typed-cursor");
      const text = "Hello, I'm Airene, your AI assistant";

      // Show cursor and text
      cursorElement.style.opacity = "1";
      textElement.style.opacity = "1";

      let currentText = "";
      const typeWriter = (text, i = 0) => {
        if (i < text.length) {
          currentText += text.charAt(i);
          textElement.textContent = currentText;
          i++;
          setTimeout(() => typeWriter(text, i), 25); // Adjust typing speed here
        } else {
          cursorElement.style.display = "none";

          this.$emit("finish");
        }
      };

      // Start the typewriter effect
      typeWriter(text);
    },
    animateIcon() {
      const iconElement = document.getElementById("airene-intro-icon");
      anime({
        targets: iconElement,
        opacity: [0, 1], // Fade in
        duration: 600,
        easing: "easeInSine",
        delay: 300, // Delay the start of the animation
        complete: () => {
          setTimeout(() => {
            this.animateTyping();
          }, 300);
        },
      });
    },
  },
};
</script>
