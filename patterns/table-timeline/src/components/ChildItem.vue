<template>
  <mp-flex
    border-bottom-width="1px"
    py="2"
    height="52px"
    align-items="center"
    bg="gray.25"
    position="relative"
  >
    <mp-box
      position="absolute"
      top="0px"
      left="-2px"
      width="3px"
      bg="violet.400"
      h="full"
      z-index="10"
    />
    <mp-box pl="10">
      <mp-text color="dark"> {{ title }} </mp-text>
      <mp-text :color="color" line-height="1sm" font-size="sm">
        {{ description }}
      </mp-text>
    </mp-box>
  </mp-flex>
</template>

<script>
import { MpBox, MpFlex, MpText } from "@mekari/pixel";

export default {
  components: {
    MpBox,
    MpFlex,
    MpText,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "",
    },
  },
};
</script>
