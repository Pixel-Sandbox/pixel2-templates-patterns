<template>
  <mp-flex
    :border-bottom-width="isOpen ? '0px' : '1px'"
    py="2"
    height="52px"
    align-items="center"
  >
    <MpButtonIcon
      name="caret-right"
      mr="2"
      transition="transform 300ms"
      :transform="isOpen ? 'rotate(90deg)' : 'rotate(0deg)'"
      @click="$emit('toggle')"
    />
    <mp-box>
      <mp-flex align-items="center" gap="1">
        <mp-text is-link> {{ title }} </mp-text>
        <mp-box h="12px" width="12px" rounded="sm" :bg="color" />
      </mp-flex>
      <mp-text color="gray.600" line-height="1sm" font-size="sm">
        {{ description }}
      </mp-text>
    </mp-box>
  </mp-flex>
</template>

<script>
import { MpBox, MpFlex, MpText, MpButtonIcon } from "@mekari/pixel";

export default {
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpButtonIcon
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  },
};
</script>
