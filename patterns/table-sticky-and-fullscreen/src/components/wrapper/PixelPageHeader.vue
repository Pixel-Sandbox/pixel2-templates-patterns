<template>
  <mp-box id="pixelPageHeader">
    <slot v-if="$slots.default" />

    <mp-flex
      v-if="title && !$slots.default"
      justify="space-between"
      align-items="center"
      padding-x="6"
      padding-y="1.063rem"
    >
      <mp-heading as="h1" font-size="2xl" font-weight="semibold">
        {{ title }}
      </mp-heading>
    </mp-flex>
  </mp-box>
</template>

<script>
import { MpBox, MpFlex, MpHeading } from "@mekari/pixel";
export default {
  components: {
    MpBox,
    MpFlex,
    MpHeading,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped></style>
