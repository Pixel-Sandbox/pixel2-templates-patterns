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
          :color="color.default.icon"
          :_hover="{
            color: color.hover.icon,
          }"
        >
          <svg
            v-if="variant === 'mute'"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.75 6.5C6.75 3.60051 9.1005 1.25 12 1.25C14.8995 1.25 17.25 3.60051 17.25 6.5V12C17.25 14.8995 14.8995 17.25 12 17.25C9.1005 17.25 6.75 14.8995 6.75 12V6.5ZM4.60607 9.25754C5.01612 9.31612 5.30105 9.69602 5.24247 10.1061C4.77487 13.3793 5.79115 15.5049 7.20572 16.8271C8.65597 18.1826 10.587 18.75 11.9839 18.75C13.3813 18.75 15.321 18.1823 16.7796 16.8258C18.202 15.5029 19.2249 13.3775 18.7575 10.1061C18.699 9.69602 18.9839 9.31612 19.3939 9.25754C19.804 9.19896 20.1839 9.48388 20.2425 9.89393C20.7751 13.6225 19.6044 16.2471 17.8011 17.9242C16.2785 19.3402 14.347 20.0426 12.7339 20.21V22C12.7339 22.4142 12.3981 22.75 11.9839 22.75C11.5697 22.75 11.2339 22.4142 11.2339 22V20.21C9.62232 20.0425 7.69724 19.3397 6.18147 17.9229C4.38633 16.2451 3.22514 13.6207 3.75754 9.89393C3.81612 9.48388 4.19602 9.19896 4.60607 9.25754Z"
              fill="currentColor"
            />
          </svg>
          <svg
            v-if="variant === 'unmute'"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 1.25C9.10051 1.25 6.75 3.60051 6.75 6.5V12C6.75 13.1789 7.13925 14.2679 7.79526 15.1441L6.67332 16.266C5.55102 14.9295 4.83595 12.9516 5.24247 10.1061C5.30105 9.69602 5.01612 9.31612 4.60607 9.25754C4.19602 9.19896 3.81612 9.48388 3.75754 9.89393C3.28425 13.207 4.14929 15.6493 5.60939 17.3299L1.46967 21.4697C1.17678 21.7626 1.17678 22.2374 1.46967 22.5303C1.76256 22.8232 2.23744 22.8232 2.53033 22.5303L22.5303 2.53033C22.8232 2.23744 22.8232 1.76256 22.5303 1.46967C22.2374 1.17678 21.7626 1.17678 21.4697 1.46967L17.1959 5.74345C16.8292 3.20242 14.6426 1.25 12 1.25Z"
              fill="currentColor"
            />
            <path
              d="M20.2425 9.89393C20.1839 9.48388 19.804 9.19896 19.3939 9.25754C18.9839 9.31612 18.699 9.69602 18.7575 10.1061C19.2249 13.3775 18.202 15.5029 16.7796 16.8258C15.321 18.1823 13.3813 18.75 11.9839 18.75C11.2319 18.75 10.3083 18.5845 9.38286 18.2065C8.99941 18.0498 8.56158 18.2337 8.40493 18.6171C8.24829 19.0006 8.43215 19.4384 8.8156 19.5951C9.63602 19.9302 10.4671 20.1304 11.2339 20.2101V22C11.2339 22.4142 11.5697 22.75 11.9839 22.75C12.3981 22.75 12.7339 22.4142 12.7339 22V20.21C14.347 20.0426 16.2785 19.3402 17.8011 17.9242C19.6044 16.2471 20.7751 13.6225 20.2425 9.89393Z"
              fill="currentColor"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.25 11.5C17.25 11.1967 17.0673 10.9232 16.787 10.8071C16.5068 10.691 16.1842 10.7552 15.9697 10.9697L10.9945 15.9449C10.79 16.1493 10.7213 16.4531 10.8178 16.7256C10.9144 16.9982 11.159 17.1909 11.4465 17.2211C11.6286 17.2402 11.8133 17.25 12 17.25C14.8995 17.25 17.25 14.8995 17.25 12V11.5Z"
              fill="currentColor"
            />
          </svg>
        </mp-flex>
      </mp-flex>
      <mp-popover 
        placement="top-end"
      >
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
  name: "VoiceButtonPopover",
  components: {
    MpFlex,
    MpText,
    MpIcon,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
  },
  props: {
    variant: {
      type: String,
      default: "", // mute, unmute,
    },
    label: {
      type: String,
      default: "Label",
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
      let color = {
        default: {
          icon: "white",
          background: "#3a3f4b",
        },
        hover: {
          icon: "white",
          background: "#4f555b",
        },
        focus: {
          background: "#313642",
          border: "1px solid white",
          boxShadow: "0px 0px 0px 2px #313642",
        },
        active: {
          icon: "white",
          background: "#3a3f4b",
        },
      };

      if (this.isDisabled) {
        return (color = {
          default: {
            icon: "gray.600",
            background: "#3a3f4b",
          },
          hover: {
            icon: "gray.600",
            background: "#3a3f4b",
          },
          focus: {
            background: "#3a3f4b",
            border: "none",
            boxShadow: "none",
          },
          active: {
            icon: "gray.600",
            background: "#3a3f4b",
          },
        });
      }

      if (this.variant === "mute") {
        color = {
          default: {
            icon: "green.400",
            background: "#3a3f4b",
          },
          hover: {
            icon: "green.400",
            background: "#4f555b",
          },
          focus: {
            border: "1px solid white",
            background: "#313642",
            boxShadow: "0px 0px 0px 2px #313642",
          },
          active: {
            icon: "white",
            background: "#3a3f4b",
          },
        };
      }

      if (this.variant === "unmute") {
        color = {
          default: {
            icon: "red.400",
            background: "#3a3f4b",
          },
          hover: {
            icon: "red.400",
            background: "#4f555b",
          },
          focus: {
            border: "1px solid white",
            background: "#313642",
            boxShadow: "0px 0px 0px 2px #313642",
          },
          active: {
            icon: "white",
            background: "#3a3f4b",
          },
        };
      }

      return color;
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
