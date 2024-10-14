<template>
  <mp-box
    data-component="AireneContainer"
    bg="#F5F9FF"
    width="90%"
    height="95%"
    rounded="lg"
    display="flex"
    overflow="hidden"
    border-width="1px"
    border-color="gray.200"
    v-bind="$attrs"
  >
    <slot />
  </mp-box>
</template>

<script>
import { MpBox } from '@mekari/pixel'

export default {
  components: {
    MpBox
  }
}
</script>
