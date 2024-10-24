<template>
  <mp-box height="52px" display="flex" align-items="center" position="relative">
    <mp-box
      cursor="pointer"
      z-index="10"
      position="absolute"
      :bg="barColor"
      rounded="md"
      h="24px"
      :_hover="{
        transition: 'filter 300ms ease-out',
        filter: 'brightness(0.9)',
      }"
      :style="barStyle"
      @mousemove="onMouseOver"
      @mouseleave="onMouseLeave"
    />
  </mp-box>
</template>

<script>
import { MpBox } from "@mekari/pixel";

export default {
  components: {
    MpBox,
  },
  props: {
    barStyle: {
      type: Object,
      required: true,
    },
    barColor: {
      type: String,
      required: true,
    },
  },
  methods: {
    onMouseOver(e) {
      this.$emit("hover", e);
    },
    onMouseLeave(e) {
      this.$emit("leave", e);
    },
  },
};
</script>
