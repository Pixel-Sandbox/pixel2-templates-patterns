<template>
  <mp-flex
    width="6"
    height="6"
    :background="isDisabled ? 'gray.50' : '#D1E1FF'"
    border-radius="full"
    flex="none"
  >
    <img
      v-if="isAnimate && !isDisabled"
      src="https://cdn.mekari.design/template-assets/mekari-ask.gif"
      alt="smart assist icon"
      style="width: 24px"
    />
    <img
      v-else
      src="https://cdn.mekari.design/template-assets/mekari-ask.svg"
      alt="smart assist icon"
      style="width: 24px"
    />
  </mp-flex>
</template>

<script>
import { MpFlex } from "@mekari/pixel";

export default {
  name: "IconAsk",
  components: {
    MpFlex,
  },
  props: {
    isAnimate: [Boolean],
    isDisabled: [Boolean],
  },
};
</script>
