<template>
  <mp-box
    role="group"
    width="full"
    position="relative"
    height="2"
    bg="#ffffff33"
    rounded="full"
    cursor="pointer"
    @click="onClick"
    @mousedown="startDragging"
  >
    <mp-box
      position="relative"
      height="full"
      bg="blue.400"
      transition="width 0.2s linear"
      rounded="full"
      :style="{ width: `${computedProgress}%` }"
      class="progress-bar"
    >
      <!-- Progress pointer -->
      <mp-box
        position="absolute"
        :right="barSize === 'sm' ? '-6px' : '-8px'"
        :top="barSize === 'sm' ? '-25%' : '-50%'"
        :width="barSize === 'sm' ? '12px' : '16px'"
        :height="barSize === 'sm' ? '12px' : '16px'"
        bg="white"
        rounded="full"
        transition="transform 0.2s linear"
        :_groupHover="{
          transform: 'scale(1.1)',
        }"
      />
    </mp-box>
  </mp-box>
</template>

<script>
import { MpBox } from "@mekari/pixel";
export default {
  name: "CustomProgressBar",
  components: {
    MpBox,
  },
  props: {
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    value: {
      type: Number,
      default: 0,
    },
    barSize: {
      type: String,
      default: "md", // sm | md
    },
  },
  data() {
    return {
      isDragging: false,
      innerValue: this.value,
    };
  },
  watch: {
    value(newValue) {
      this.innerValue = newValue; // Sync internal state with v-model
    },
  },
  computed: {
    computedProgress() {
      const value =
        ((this.innerValue - this.min) / (this.max - this.min)) * 100;
      return value;
    },
  },
  methods: {
    onClick(event) {
      this.updateValueFromEvent(event);
    },
    startDragging(event) {
      this.isDragging = true;
      this.updateValueFromEvent(event);
      document.addEventListener("mousemove", this.onDrag);
      document.addEventListener("mouseup", this.stopDragging);
    },
    stopDragging() {
      if (this.isDragging) {
        this.isDragging = false;
        document.removeEventListener("mousemove", this.onDrag);
        document.removeEventListener("mouseup", this.stopDragging);
      }
    },
    onDrag(event) {
      if (this.isDragging) {
        this.updateValueFromEvent(event);
      }
    },
    updateValueFromEvent(event) {
      const rect = this.$el.getBoundingClientRect();
      const position = Math.max(
        0,
        Math.min(1, (event.clientX - rect.left) / rect.width)
      );
      const newValue = this.min + position * (this.max - this.min);

      this.innerValue = newValue;

      // v-model
      this.$emit("input", newValue);
      this.$emit("update-position", position);
    },
  },
};
</script>
