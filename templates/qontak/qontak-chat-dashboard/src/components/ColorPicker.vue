<template>
  <mp-box :width="width" ref="popover">
    <mp-text v-if="title" mb="1" font-weight="semibold">{{ title }}</mp-text>
    <mp-popover
      :id="`color-picker-${id}`"
      :initial-focus-ref="`#color-picker-${id}`"
      :is-open="isPopoverOpen"
      is-manual
    >
      <mp-popover-trigger>
        <mp-flex
          position="relative"
          direction="row"
          align-items="center"
          py="1"
          pl="1"
          pr="3"
          border-radius="md"
          border="1px solid"
          :border-color="borderColor"
          :box-shadow="isPopoverOpen && !isInvalidColor && 'outline'"
          :_hover="{
            borderColor:
              isPopoverOpen && !isInvalidColor ? 'blue.500' : 'gray.400',
          }"
        >
          <mp-box
            flex="none"
            width="7"
            height="7"
            mr="3"
            border-radius="sm"
            :background="colors.hex"
          ></mp-box>
          <input
            v-pixel
            :value="colorInput"
            :id="`color-picker-${id}`"
            type="text"
            :placeholder="placeholder"
            autocomplete="off"
            font-size="14px"
            :_focus="{
              outline: 'none',
            }"
            @input="handleInput"
            @focus="handleOpenPopover"
            @blur="handleBlur"
          />
          <mp-icon
            position="absolute"
            right="3"
            name="chevrons-down"
            size="sm"
            is-hoverable="false"
            ml="3"
            :_focus="{
              outline: 'none',
            }"
          />
        </mp-flex>
      </mp-popover-trigger>
      <mp-popover-content
        width="240px"
        background="white"
        border="1px solid"
        border-color="gray.100"
        box-shadow="lg"
        border-radius="md"
        z-index="popover"
      >
        <sketch-picker
          ref="colorPicker"
          id="color-picker"
          v-model="colors"
          :preset-colors="presetColors"
        />
      </mp-popover-content>
    </mp-popover>
    <mp-text v-if="isInvalidColor" mt="1" font-size="sm" color="red.400">{{
      errorMessage
    }}</mp-text>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpText,
  MpIcon,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
} from "@mekari/pixel";

import { Sketch } from "vue-color";

export default {
  name: "ColorPicker",
  components: {
    MpBox,
    MpFlex,
    MpText,

    MpIcon,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,

    "sketch-picker": Sketch,
  },
  props: {
    title: [String],
    width: [String],
    id: {
      type: String,
      default: "default",
    },
    placeholder: {
      type: String,
      default: "Hex color value",
    },
    defaultColor: {
      type: String,
      default: "#2979FF",
    },
    errorMessage: {
      type: String,
      default: "Invalid hex value",
    },
    isInvalid: [Boolean],
  },
  data() {
    return {
      isInvalidColor: this.isInvalid,
      isPopoverOpen: false,
      colorInput: this.defaultColor,
      colors: {
        hex: this.defaultColor,
      },
      presetColors: [
        "#3B82F6",
        "#14B8A6",
        "#8B5CF6",
        "#F59E0B",
        "#EF4444",
        "#71717A",
        "#84CC16",
        "#D0E1FD",
        "#C7EEEA",
        "#E3D8FD",
        "#FDE8C5",
        "#FBD2D2",
        "#DDDDDF",
        "#E2F3C7",
      ],
    };
  },
  watch: {
    colors(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.$emit("color", this.colors);
      }
    },
  },
  computed: {
    isFocused() {
      return this.isPopoverOpen;
    },
    borderColor() {
      if (this.isInvalidColor) {
        return "red.400";
      }

      if (!this.isInvalidColor && this.isFocused) {
        return "blue.400";
      }

      return "gray.100";
    },
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.handleClickOutside);
  },
  methods: {
    isValidHex(val) {
      return /^#[0-9A-F]{6}$/i.test(val);
    },
    handleInput(e) {
      this.colorInput = e.target.value;
      this.colors = {
        hex: this.colorInput,
      };
      this.$emit("input", this.colorInput);
    },
    handleBlur() {
      this.$emit("blur", this.id);
    },
    handleOpenPopover() {
      this.isPopoverOpen = true;
      this.$emit("open", this.id);
    },
    handleClosePopover() {
      this.isPopoverOpen = false;
      this.colorInput = this.colors.hex;
      this.isInvalidColor = !this.isValidHex(this.colorInput);
      this.$emit("close", this.id);
    },
    handleClickOutside(e) {
      const el = this.$refs.popover.$el;
      const isClickOutside = e.target !== el && !el.contains(e.target);

      isClickOutside && this.handleClosePopover();
    },
  },
};
</script>

<style>
#color-picker.vc-sketch {
  position: relative;
  width: auto;
  padding: 12px;
  box-sizing: initial;
  background: #fff;
  border-radius: 6px;
  box-shadow: none;
}

#color-picker .vc-sketch-saturation-wrap {
  width: 100%;
  height: 150px;
  padding-bottom: 0;
  margin-bottom: 12px;
  position: relative;
  overflow: hidden;
}

#color-picker .vc-editable-input {
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
}

#color-picker .vc-sketch-field {
  display: flex;
  padding-top: 0;
  margin-top: 8px;
  margin-bottom: 12px;
}

#color-picker .vc-sketch-field .vc-input__label {
  display: block;
  text-align: left;
  font-size: 12px;
  color: #232933;
  padding-top: 0;
  padding-bottom: 2px;
  text-transform: capitalize;
}

#color-picker .vc-sketch-active-color {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 2px;
  box-shadow: none;
  z-index: 2;
}

#color-picker .vc-sketch-field .vc-input__input {
  width: 100%;
  padding: 6px;
  border: 1px solid #d0d6dd;
  box-shadow: none;
  font-size: 12px;
  border-radius: 6px;
}

#color-picker .vc-sketch-presets {
  margin-right: 0;
  margin-left: 0;
  padding-left: 0;
  padding-top: 12px;
  border-top: 1px solid #d0d6dd;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;
}

#color-picker .vc-sketch-presets-color {
  border-radius: 2px;
  overflow: hidden;
  position: relative;
  display: inline-block;
  margin: 0;
  vertical-align: top;
  cursor: pointer;
  width: 20px;
  height: 20px;
  box-shadow: none;
}
</style>
