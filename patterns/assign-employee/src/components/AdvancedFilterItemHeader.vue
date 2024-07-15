<template>
  <mp-flex gap="4" align-items="center">
    <mp-box>
      <mp-text text-align="justify" font-weight="semibold">{{ name }}</mp-text>
      <mp-text text-align="justify" font-size="sm">Is any of</mp-text>
    </mp-box>
  </mp-flex>
</template>

<script>
import { MpBox, MpFlex, MpText } from "@mekari/pixel";

export default {
  name: "AdvancedFilterItemHeader",
  components: {
    MpBox,
    MpFlex,
    MpText,
  },
  props: {
    name: [String],
  },
};
</script>
