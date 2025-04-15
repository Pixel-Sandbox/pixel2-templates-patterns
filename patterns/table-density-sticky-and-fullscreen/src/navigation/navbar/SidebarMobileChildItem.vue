<template>
  <mp-pseudo-box
    flex="1"
    role="group"
    border-radius="sm"
    padding-x="4"
    padding-y="2"
    :color="isActive ? 'blue.400' : 'dark'"
    :background-color="isActive ? 'blue.100' : ''"
    font-weight="regular"
    :_hover="{
      color: 'blue.400',
      cursor: 'pointer',
    }"
  >
    <mp-stack direction="row" align="center">
      <mp-text
        :font-weight="isActive ? 'semibold' : 'regular'"
        :color="isActive ? 'blue.400' : 'dark'"
      >
        <slot />
      </mp-text>
    </mp-stack>
  </mp-pseudo-box>
</template>

<script>
import { MpPseudoBox, MpStack, MpText } from "@mekari/pixel";
export default {
  components: {
    MpPseudoBox,
    MpStack,
    MpText,
  },
  props: {
    isActive: Boolean,
  },
};
</script>

