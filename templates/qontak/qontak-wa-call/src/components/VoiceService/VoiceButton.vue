<template>
  <mp-flex direction="column" align-items="center" gap="1">
    <mp-flex
      as="button"
      justify-content="center"
      align-items="center"
      width="10"
      height="10"
      :background="color.default.background"
      border-radius="full"
      transition="box-shadow 250ms linear"
      outline="none"
      :_hover="{
        background: color.hover.background,
      }"
      :_focus="{
        background: color.focus.background,
        border: color.focus.border,
        boxShadow: color.focus.boxShadow,
      }"
      :_active="{
        background: color.active.background,
      }"
      @click="handleClick"
    >
      <mp-flex
        transition="all 250ms"
        :color="color.default.icon"
        :_hover="{
          color: color.hover.icon,
        }"
      >
        <mp-icon :name="getIcon" color="currentColor" variant="fill" />
      </mp-flex>
    </mp-flex>
    <mp-text
      v-if="label"
      :color="isDisabled ? 'gray.400' : 'white'"
      font-size="xs"
      >{{ label }}</mp-text
    >
  </mp-flex>
</template>

<script>
import { MpFlex, MpText, MpIcon } from "@mekari/pixel";

export default {
  name: "VoiceButton",
  components: {
    MpFlex,
    MpText,
    MpIcon,
  },
  props: {
    variant: {
      type: String,
      default: "default", // default, accept, decline, mute, unmute,
    },
    label: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  computed: {
    color() {
      if (this.isDisabled) {
        return {
          default: { icon: "gray.600", background: "#3a3f4b" },
          hover: { icon: "gray.600", background: "#3a3f4b" },
          focus: { background: "#3a3f4b", border: "none", boxShadow: "none" },
          active: { icon: "gray.600", background: "#3a3f4b" },
        };
      }

      const variants = {
        default: {
          default: { icon: "white", background: "#3a3f4b" },
          hover: { icon: "white", background: "#4f555b" },
          focus: {
            background: "#313642",
            border: "1px solid white",
            boxShadow: "0px 0px 0px 2px #313642",
          },
          active: { background: "#313642" },
        },
        accept: {
          default: { icon: "white", background: "green.400" },
          hover: { icon: "white", background: "green.500" },
          focus: {
            background: "green.400",
            border: "1px solid var(--colors-green-50)",
            boxShadow: "0px 0px 0px 2px var(--colors-green-400)",
          },
          active: { background: "green.700" },
        },
        decline: {
          default: { icon: "white", background: "red.400" },
          hover: { icon: "white", background: "red.500" },
          focus: {
            background: "red.500",
            border: "1px solid var(--colors-red-50)",
            boxShadow: "0px 0px 0px 2px var(--colors-red-400)",
          },
          active: { background: "red.700" },
        },
        mute: {
          default: { icon: "red.400", background: "#3a3f4b" },
          hover: { icon: "red.400", background: "#4f555b" },
          focus: {
            border: "1px solid white",
            background: "#313642",
            boxShadow: "0px 0px 0px 2px #313642",
          },
          active: { background: "#313642" },
        },
        unmute: {
          default: { icon: "green.400", background: "#3a3f4b" },
          hover: { icon: "green.400", background: "#4f555b" },
          focus: {
            border: "1px solid white",
            background: "#313642",
            boxShadow: "0px 0px 0px 2px #313642",
          },
          active: { background: "#313642" },
        },
      };

      return variants[this.variant];
    },
    getIcon() {
      const variantIcons = {
        accept: "phone",
        decline: "call-end",
        mute: "mic-mute",
        unmute: "mic",
      };

      return variantIcons[this.variant] || this.icon;
    },
  },
  methods: {
    handleClick() {
      if (this.isDisabled) {
        return;
      }
      this.$emit("click");
    },
  },
};
</script>
