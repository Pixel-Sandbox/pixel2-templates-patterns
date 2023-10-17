<template>
  <mp-flex
    as="button"
    align="center"
    gap="2"
    width="auto"
    height="8"
    pl="1"
    pr="2"
    :background="isDisabled ? 'gray.25' : 'white'"
    border-radius="100px"
    border="1px solid"
    border-color="gray.100"
    :cursor="isDisabled ? 'not-allowed' : 'pointer'"
    transition="all 250ms"
    :disabled="isDisabled"
    :_hover="{
      borderColor: isDisabled ? 'gray.100' : 'blue.400',
      boxShadow: isDisabled ? 'none' : 'sm',
    }"
    @click="handleClick"
  >
    <IconAsk :is-disabled="isDisabled" :is-animate="!showTour" />
    <mp-text size="sm" :color="isDisabled ? 'gray.600' : 'dark'">{{ title }}</mp-text>
    <mp-badge size="sm">BETA</mp-badge>
  </mp-flex>
</template>

<script>
import { MpFlex, MpText, MpBadge } from "@mekari/pixel";
import IconAsk from "./IconAsk";

export default {
  name: "SmartButton",
  components: {
    MpFlex,
    MpText,
    MpBadge,
    IconAsk
  },
  props: {
    title: [String],
    isDisabled: [Boolean],
    isShowTour: [Boolean]
  },
  computed: {
    showTour() {
      return this.isShowTour
    }
  },
  methods: {
    handleClick() {
      if(this.isDisabled) {
        return
      }
      
      this.$emit("click");
    },
  },
};
</script>
