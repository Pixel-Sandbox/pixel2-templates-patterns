<template>
  <mp-flex
    as="button"
    cursor="pointer"
    justify-content="center"
    align-items="center"
    width="9.5"
    height="9.5"
    :background="isActive ? 'ice.50' : 'white'"
    border-radius="sm"
    transition="all 250ms"
    outline="none"
    :_hover="{
      background: isActive ? 'ice.50' : 'gray.50',
    }"
    :_focus="{
      boxShadow: 'outer'
    }"
    @click="handleClick"
  > 
    <mp-icon v-if="isActive" name="airene-brand" size="md" />
    <img
      v-else
      src="https://cdn.mekari.design/template-assets/mekari-ask-airene.gif"
      alt="icon ask airene"
      style="width: 20px;"
    />

  </mp-flex>
</template>

<script>
import { MpFlex, MpIcon, } from "@mekari/pixel";

export default {
  name: "AireneIcon",
  components: {
    MpFlex,
    MpIcon,
  },
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClick() {
      this.$emit('click')
    }
  }
};
</script>
