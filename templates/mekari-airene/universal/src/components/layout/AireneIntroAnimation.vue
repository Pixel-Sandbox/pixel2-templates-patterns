<template>
  <mp-box ref="container">
    <mp-box
      ref="backgroundContainer"
      position="absolute"
      top="0"
      left="0"
      h="full"
      w="full"
      overflow="hidden"
      class="airene-intro-bg-gradient-animation"
    >
    </mp-box>

    <mp-box position="absolute" top="0" left="0" right="0" bottom="0">
      <mp-flex
        ref="contentContainer"
        flex-direction="column"
        justify-content="end"
        h="full"
        w="full"
        max-w="550px"
        mx="auto"
        pb="4"
      >
        <mp-flex
          ref="introContainer"
          flex-direction="column"
          :style="{
            transition: 'transform 0.3s ease-out',
            transform: 'translateY(200px)',
          }"
        >
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

          <mp-box mt="4">
            <mp-text font-size="2xl" font-weight="semibold">
              <span ref="typedText"></span
              ><span ref="dotSeparator" class="gradient-text" style="opacity: 0"
                >|
              </span>
            </mp-text>

            <mp-box ref="termsAndConditions" opacity="0" mt="2">
              <mp-box>
                <mp-text font-weight="semibold" line-height="md">
                  Iam here to help you generate insights, summaries, and data
                  analysis from your Jurnal.
                </mp-text>

                <mp-text mt="4" font-weight="semibold">
                  Before we start, here's what you need to know:
                </mp-text>

                <mp-box p="4" rounded="md" bg="white" mt="3">
                  <mp-flex>
                    <mp-flex
                      flex="none"
                      mr="4"
                      align-items="center"
                      justify-content="center"
                      w="10"
                      h="10"
                      bg="blue.50"
                      rounded="md"
                    >
                      <mp-icon name="policy" size="sm" />
                    </mp-flex>

                    <mp-box>
                      <mp-text font-weight="semibold"> Data Access </mp-text>

                      <mp-text line-height="md">
                        Airene can read and process data across Talenta
                        features. Your data access is governed by Role-Based
                        Access Control (RBAC), ensuring Airene only accesses the
                        information you are authorized to use based on your role
                        within the organization.
                      </mp-text>
                    </mp-box>
                  </mp-flex>

                  <mp-flex mt="4">
                    <mp-flex
                      flex="none"
                      mr="4"
                      align-items="center"
                      justify-content="center"
                      w="10"
                      h="10"
                      bg="blue.50"
                      rounded="md"
                    >
                      <mp-icon name="chat" size="sm" />
                    </mp-flex>

                    <mp-box>
                      <mp-text font-weight="semibold">
                        Conversation Review
                      </mp-text>

                      <mp-text line-height="md">
                        To improve your experience and enhance our answers,
                        flagged conversations may be periodically reviewed for
                        quality checks. Any review will be conducted with
                        privacy in mind.
                      </mp-text>
                    </mp-box>
                  </mp-flex>

                  <mp-text mt="4">
                    Learn about Mekari's
                    <mp-text
                      as="a"
                      is-link
                      href="https://mekari.com"
                      target="_blank"
                    >
                      Privacy Policy
                    </mp-text>
                    and
                    <mp-text
                      as="a"
                      is-link
                      href="https://mekari.com/lega"
                      target="_blank"
                    >
                      Terms of Service
                    </mp-text>
                    .
                  </mp-text>
                </mp-box>
              </mp-box>

              <mp-flex justify-content="flex-end" mt="3">
                <mp-button @click="animateLeaveIntroAnimation">
                  Continue
                </mp-button>
              </mp-flex>
            </mp-box>
          </mp-box>
        </mp-flex>
      </mp-flex>
    </mp-box>
  </mp-box>
</template>

<script>
import anime from "animejs";

import { MpBox, MpFlex, MpText, MpIcon, MpButton } from "@mekari/pixel";

export default {
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpIcon,
    MpButton,
  },
  data() {
    return {
      isAnimationFinished: false,
      typingText: "Hello, I'm Airene, your AI assistant",
    };
  },
  mounted() {
    // Start intro animation
    this.$nextTick(() => {
      this.animateIcon({
        onComplete: () => {
          this.animateTyping({
            onComplete: () => {
              this.animateContainer();
              this.animateTermsAndConditions();
            },
          });
        },
      });
    });
  },
  methods: {
    animateIcon({ onComplete }) {
      const iconElement = document.getElementById("airene-intro-icon");

      anime({
        targets: iconElement,
        opacity: [0, 1], // Fade in
        translateY: [16, 0], // Slide up
        easing: "easeOutSine",
        duration: 600,
        delay: 600, // Delay the start of the animation
        complete: () => {
          onComplete?.();
        },
      });
    },
    animateTyping({ onComplete }) {
      const typedTextElement = this.$refs.typedText;
      const dotSeparatorElement = this.$refs.dotSeparator;

      if (dotSeparatorElement) {
        dotSeparatorElement.style.opacity = 1;
      }

      let charIndex = 0;

      const typeNextChar = () => {
        if (charIndex < this.typingText.length) {
          if (typedTextElement) {
            typedTextElement.textContent += this.typingText.charAt(charIndex);

            charIndex++;
            setTimeout(typeNextChar, 35); // Adjust typing speed here (50ms between characters)
          }
        } else {
          if (dotSeparatorElement) {
            dotSeparatorElement.style.opacity = 0; // Hide dot separator
          }

          onComplete?.();
        }
      };

      typeNextChar();
    },
    animateContainer() {
      const introContainer = this.$refs.introContainer.$el;

      anime({
        targets: introContainer,
        translateY: 0,
        easing: "easeOutSine",
        duration: 300,
      });
    },
    animateTermsAndConditions() {
      const termsAndConditionsElement = this.$refs.termsAndConditions.$el;

      anime({
        targets: termsAndConditionsElement,
        opacity: [0, 1],
        translateY: [16, 0],
        easing: "easeOutSine",
        duration: 300,
      });
    },
    animateLeaveIntroAnimation() {
      const backgroundContainerElement = this.$refs.backgroundContainer.$el;
      const contentContainerElement = this.$refs.contentContainer.$el;

      anime({
        targets: contentContainerElement,
        opacity: [1, 0],
        translateY: [0, 16],
        duration: 300,
        easing: "easeOutSine",
      });
      anime({
        targets: backgroundContainerElement,
        opacity: [1, 0],
        translateY: [0, 16],
        duration: 300,
        easing: "easeOutSine",
        complete: () => {
          // Emit finish event
          this.$emit("finish");
        },
      });
    },
  },
};
</script>

<style scoped>
.gradient-text {
  background: var(--colors-deepPurple);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}

/* Keyframes for the gradient animation */
@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Applying the animated background to the body or any div */
.airene-intro-bg-gradient-animation {
  background: linear-gradient(270deg, #ede6ff, #f1f3fb, #dae2ff);
  background-size: 400% 400%; /* Large background size to allow smooth movement */
  animation: gradientAnimation 6s ease infinite; /* Animation settings */
}
</style>
