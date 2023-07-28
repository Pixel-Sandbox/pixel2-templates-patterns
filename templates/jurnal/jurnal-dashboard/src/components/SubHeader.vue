<template>
  <mp-flex
    justify="space-between"
    align-items="center"
    padding-right="6"
    padding-y="1.063rem"
  >
    <mp-box>
      <mp-heading as="h1" font-size="2xl" font-weight="semibold">
        {{ title }}
      </mp-heading>
    </mp-box>
    <mp-button variant="outline"> 
      <mp-icon name="help" size="sm" variant="duotone" mr="2" />
      Kunjungi pusat bantuan</mp-button>
  </mp-flex>
</template>

<script>
import { MpBox, MpFlex, MpHeading, MpButton, MpIcon } from "@mekari/pixel";

export default {
  name: "SubHeader",
  props: {
    title: [String],
  },
  components: {
    MpBox,
    MpFlex,
    MpHeading,
    MpButton,
    MpIcon
  },
};
</script>
