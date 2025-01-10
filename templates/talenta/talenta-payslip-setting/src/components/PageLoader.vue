<template>
  <mp-box v-if="isLoading" position="absolute" top="0" right="0" left="0" bottom="0" background-color="#F1F5F9" z-index="1900">
    <mp-flex flex-direction="column" width="full" height="full" justify-content="center" align-items="center">
      <mp-loader :size="16" :spacing="16" />
      <mp-text margin-top="5" color="gray.600">Preparing your report...</mp-text>
    </mp-flex>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpText,
  MpLoader,
} from "@mekari/pixel";

export default {
  name: "PageLoader",
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpLoader,
  },
  props: {
    isLoading: [Boolean],
  },
};
</script>