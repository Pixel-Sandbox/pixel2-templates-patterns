<template>
  <mp-radio-group spacing="0">
    <mp-radio margin-y="0.5">Gender A</mp-radio>
    <mp-radio margin-y="0.5">Gender B</mp-radio>
  </mp-radio-group>
</template>

<script>
  import { MpRadio, MpRadioGroup } from "@mekari/pixel";

  export default {
    name: "AdvancedFilterItemSingleset",
    components: {
      MpRadio,
      MpRadioGroup,
    },
  };
</script>
