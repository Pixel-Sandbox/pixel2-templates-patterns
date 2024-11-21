<template>
  <mp-flex direction="column" align-items="center" gap="1">
    <mp-flex height="10" gap="1" padding="2" rounded="100px" bg="#3a3f4b">
      <mp-flex
        as="button"
        justify-content="center"
        align-items="center"
        width="6"
        height="6"
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
        @click="handleClick"
      >
        <mp-flex
          transition="all 250ms"
          rounded="full"
          :background="color.default.background"
          :color="color.default.icon"
          :_hover="{
            background: color.hover.background,
            color: color.hover.icon,
          }"
        >
          <mp-flex
            v-show="variant === 'unmute'"
            position="relative"
            width="20px"
            height="20px"
            overflow="hidden"
            rounded="full"
          >
            <mp-box
              position="absolute"
              top="0"
              left="0"
              width="20px"
              height="20px"
            >
              <mp-icon
                name="mic"
                color="currentColor"
                variant="fill"
                width="20px"
                height="20px"
                display="block"
              />
            </mp-box>
            <mp-box
              ref="mic"
              position="absolute"
              top="0"
              left="0"
              width="20px"
              height="20px"
              :background="color.default.background"
              :_hover="{
                background: color.hover.background,
              }"
            >
              <mp-icon
                name="mic"
                color="currentColor"
                variant="outline"
                width="20px"
                height="20px"
                display="block"
              />
            </mp-box>
          </mp-flex>

          <mp-icon
            v-if="variant === 'mute'"
            name="mic-mute"
            color="currentColor"
            variant="fill"
            width="20px"
            height="20px"
            display="block"
          />
        </mp-flex>
      </mp-flex>
      <mp-popover placement="top-end">
        <mp-popover-trigger>
          <mp-flex
            as="button"
            justify-content="center"
            align-items="center"
            width="6"
            height="6"
            :background="color.default.background"
            border-radius="full"
            transition="box-shadow 250ms linear"
            outline="none"
            color="gray.600"
            :_hover="{
              background: color.hover.background,
              color: 'white',
            }"
            :_focus="{
              background: color.focus.background,
              border: color.focus.border,
              boxShadow: color.focus.boxShadow,
            }"
          >
            <mp-icon name="caret-down" color="currentColor" />
          </mp-flex>
        </mp-popover-trigger>
        <mp-popover-content
          max-width="220px"
          bg="dark"
          rounded="md"
          shadow="md"
          border-width="1px"
          border-color="gray.600"
          py="1"
        >
          <slot> Popover Content </slot>
        </mp-popover-content>
      </mp-popover>
    </mp-flex>
    <mp-text :color="isDisabled ? 'gray.400' : 'white'" font-size="xs">{{
      label
    }}</mp-text>
  </mp-flex>
</template>

<script>
import anime from "animejs";
import {
  MpFlex,
  MpText,
  MpIcon,
  MpBox,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
} from "@mekari/pixel";

export default {
  name: "VoiceButtonDropdown",
  components: {
    MpFlex,
    MpText,
    MpIcon,
    MpBox,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
  },
  props: {
    variant: {
      type: String,
      default: "default", // default, mute, unmute,
    },
    label: {
      type: String,
      default: "Label",
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    isSpeaking: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    isSpeaking(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.startMicAnimation(newVal);
      }
    },
  },
  data() {
    return {
      micAnimation: null,
    };
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
  },
  mounted() {
    this.startMicAnimation(false);
  },
  methods: {
    startMicAnimation(isStart) {
      const micElement = this.$refs.mic.$el;
      this.micAnimation = anime({
        autoplay: false,
        targets: micElement,
        height: [20, 0],
        easing: "easeInOutSine",
        direction: "normal",
        duration: 2000,
        loop: true,
        delay: 0,
      });

      isStart ? this.micAnimation.play() : this.micAnimation.pause();
    },
    handleClick() {
      if (this.isDisabled) {
        return;
      }
      this.$emit("click");
    },
  },
};
</script>
