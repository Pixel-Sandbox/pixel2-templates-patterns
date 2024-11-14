<template>
  <mp-flex ref="suggestions" direction="column" gap="3">
    <mp-text font-weight="semibold">{{ title }}</mp-text>
    <mp-flex
      v-if="isLoading"
      direction="column"
      gap="1"
      bg="gray.25"
      p="4"
      rounded="md"
      border-width="1px"
      border-style="solid"
      border-color="gray.50"
    >
      <mp-skeleton width="100%" height="12px" rounded="lg" />
      <mp-skeleton width="100%" height="12px" rounded="lg" />
    </mp-flex>
    <mp-flex
      v-else
      direction="row"
      align-items="center"
      gap="1"
      cursor="pointer"
      bg="gray.25"
      p="4"
      rounded="md"
      border-width="1px"
      border-style="solid"
      border-color="gray.50"
      transition="all 250ms ease"
      :_hover="{
        borderColor: 'blue.400',
        '& > svg': {
          transform: 'translateX(0px)',
          visibility: 'visible',
          position: 'relative',
          opacity: '1',
        },
      }"
      @click.native="handleClick"
    >
      <mp-text>{{ suggestions }}</mp-text>
      <mp-icon
        name="link"
        color="blue.400"
        transform="translateX(20px)"
        opacity="0"
        visibility="hidden"
        position="absolute"
        transition="visibility 0s, opacity 250ms ease, transform 500ms ease"
      />
    </mp-flex>
  </mp-flex>
</template>

<script>
import anime from "animejs";

import { MpFlex, MpText, MpIcon, MpSkeleton } from "@mekari/pixel";

export default {
  name: "AireneSuggestions",
  components: {
    MpFlex,
    MpText,
    MpSkeleton,
    MpIcon,
  },
  props: {
    title: {
      type: String,
      default: "Suggested question",
    },
    suggestions: {
      type: String,
      default: "",
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    this.animateSection();
  },
  methods: {
    handleClick() {
      this.$emit("click", this.suggestions);
    },
    animateSection() {
      const suggestionsElement = this.$refs.suggestions.$el;

      anime({
        targets: suggestionsElement,
        easing: "easeOutSine",
        opacity: [0, 1],
        duration: 300,
        delay: 200,
      });
    },
  },
};
</script>
