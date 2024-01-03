<template>
  <mp-box position="absolute" top="120" left="0" right="0" z-index="toast">
    <mp-flex
      width="689px"
      margin="auto"
      py="2"
      px="3"
      gap="2"
      align-items="center"
      border-width="1px"
      :border-color="color"
      border-radius="md"
      box-shadow="md"
      background="white"
    >
      <mp-icon
        :name="iconName"
        :variant="iconVariant"
        :color="color"
        size="sm"
      />
      <mp-text width="full">{{ message }}</mp-text>
      <mp-button-icon name="close" @click="handleClose" />
    </mp-flex>
  </mp-box>
</template>

<script>
import { MpBox, MpFlex, MpText, MpIcon, MpButtonIcon } from "@mekari/pixel";

export default {
  name: "StickyToast",
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpIcon,
    MpButtonIcon,
  },
  props: {
    message: {
      type: String,
      default: "message",
    },
    iconName: {
      type: String,
      default: "info",
    },
    iconVariant: {
      type: String,
      default: "duotone",
    },
    variant: {
      type: String,
      default: "info",
    },
    duration: {
      type: Number,
      default: 3000,
    },
  },
  data() {
    return {
      timeout: null,
    };
  },
  computed: {
    color() {
      if (this.variant === "error") {
        return "red.400";
      }
      if (this.variant === "success") {
        return "green.400";
      }
      return "blue.400";
    },
  },
  mounted() {
    this.timeout = setTimeout(() => {
      this.handleClose();
    }, this.duration);
  },
  destroyed() {
    clearTimeout(this.timeout);
  },
  methods: {
    handleClose() {
      this.$emit("close");
    },
  },
};
</script>
