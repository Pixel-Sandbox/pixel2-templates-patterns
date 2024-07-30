<template>
  <mp-flex :flex-direction="['column', 'row']">
    <mp-flex flex-direction="column" width="full">
      <mp-flex>
        <mp-flex flex="5 0 0%" padding-y="2">
          <slot name="left-side"></slot>
        </mp-flex>
        <mp-flex flex="6 0 0%" padding-y="2">
          <slot name="right-side"></slot>
        </mp-flex>
      </mp-flex>
    </mp-flex>
  </mp-flex>
</template>

<script>
import { MpFlex } from "@mekari/pixel";

export default {
  name: "DescriptionList",
  components: {
    MpFlex,
  },
};
</script>
