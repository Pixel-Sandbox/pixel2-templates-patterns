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
    <img
      src="https://cdn.mekari.design/template-assets/mekari-ask-airene.gif"
      alt="icon ask airene"
      style="width: 24px;"
    />
  </mp-flex>
</template>

<script>
import { MpFlex } from "@mekari/pixel";

export default {
  name: "AireneIcon",
  components: {
    MpFlex,
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
