<template>
  <mp-flex
    width="376px"
    height="312px"
    direction="column"
    align-items="center"
    justify="center"
    bg="white"
  >
    <mp-icon
      v-if="variant === 'icon'"
      :name="name"
      color="blue.400"
      width="56px"
      height="56px"
      mb="6"
    />
    <mp-image v-if="variant === 'illustration'" :src="src" :width="288" />
    <mp-text font-size="lg" font-weight="semibold" mb="1">{{ title }}</mp-text>
    <mp-text color="gray.600">{{ description }}</mp-text>
  </mp-flex>
</template>

<script>
import { MpText, MpFlex, MpImage, MpIcon } from "@mekari/pixel";

export default {
  name: "BlankSlate",
  components: {
    MpText,
    MpFlex,
    MpImage,
    MpIcon,
  },
  props: {
    variant: {
      type: String,
      default: "icon",
    },
    name: {
      type: String,
      default: "",
    },
    src: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "No data yet",
    },
    description: {
      type: String,
      default: "Your data will display here",
    },
  },
};
</script>
