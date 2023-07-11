<template>
  <mp-box display="inline-flex" gap="4">
    <mp-input
      v-for="(value, index) in digits"
      :key="index"
      :ref="`otp-input`"
      :id="`${getId}-otp-input-${index}`"
      variant="unstyled"
      border-width="1px"
      rounded="lg"
      width="36px"
      px="1"
      text-align="center"
      height="48px"
      font-size="xl"
      font-weight="semibold"
      :_hover="{ borderColor: 'gray.400' }"
      :_focus="{ borderColor: 'blue.500', boxShadow: 'outer' }"
      :type="type"
      v-mask="'X'"
      @input="(e) => handleInput(e, index)"
      @focus="handleFocus"
      @keydown="handleKeydown"
      v-model="innerValue[index]"
    />
  </mp-box>
</template>

<script>
import { MpBox, MpInput } from "@mekari/pixel";
import { useId } from "@mekari/pixel-utils";
export default {
  components: {
    MpBox,
    MpInput,
  },
  props: {
    id: String,
    value: { type: [String, Number], default: "" },
    digits: {
      type: Number,
      default: 6,
    },
    type: {
      type: String,
      default: "number",
      validator(value) {
        return ["number", "text", "password"].includes(value);
      },
    },
  },
  data() {
    return {
      innerValue: new Array(this.digits).fill(""),
      currentFocus: "",
    };
  },
  computed: {
    getId() {
      return this.id || useId(6);
    },
    inputNode() {
      return this.$refs["otp-input"];
    },
    isCompleted() {
      return this.innerValue.every((item) => item !== "");
    },
  },
  watch: {
    value(val) {
      this.innerValue = this.valueToArray(val, this.digits);
    },
    innerValue() {
      this.$emit("input", this.arrayToValue(this.innerValue) || "");
    },
    isCompleted(newValue) {
      if (newValue) {
        this.$emit("completed", this.arrayToValue(this.innerValue));
      }
    },
  },
  created() {
    this.innerValue = this.valueToArray(this.value, this.digits);
  },
  methods: {
    handleInput() {
      if (!this.isCompleted) {
        this.handleForceFocus();
      }
    },
    handleKeydown(e) {
      if (
        e.code === "Backspace" &&
        !this.innerValue[this.currentFocus] &&
        this.currentFocus !== 0
      ) {
        const result = this.innerValue.map((item, index) =>
          index === this.currentFocus - 1 ? "" : item
        );

        this.innerValue = result;
        this.handleForceFocus();
      }
    },
    handleFocus(e) {
      if (!this.isCompleted) {
        // Set focus to empty input box.
        this.handleForceFocus();
      } else {
        // Set focus to last input box.
        this.inputNode[this.digits - 1].$el.children[0].focus();
      }
    },
    handleForceFocus() {
      const position = this.innerValue.findIndex((item) => item === "");
      if (position >= 0) {
        this.currentFocus = position;
        this.inputNode[position].$el.children[0].focus();
      }
    },

    // Utils
    valueToArray(value, digits) {
      const sources =
        this.type === "number"
          ? Array.from(String(value))
          : Array.from(String(value).toUpperCase());

      const target = new Array(digits).fill("");
      const result = target.map((item, index) => sources[index] || item);

      return result;
    },
    arrayToValue(value) {
      return String(value.join(""));
    },
  },
};
</script>
