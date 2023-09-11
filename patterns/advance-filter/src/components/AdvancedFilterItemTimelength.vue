<template>
  <mp-radio-group v-model="check" spacing="0">
    <mp-radio margin-y="0.5" value="is-exactly">Is exactly</mp-radio>
    <mp-input v-if="check === 'is-exactly'" margin-left="6" />
    <mp-radio margin-y="0.5" value="is-less-than">Is less than</mp-radio>
    <mp-input v-if="check === 'is-less-than'" margin-left="6" />
    <mp-radio margin-y="0.5" value="is-greater-than">
      Is greater than
    </mp-radio>
    <mp-input v-if="check === 'is-greater-than'" margin-left="6" />
  </mp-radio-group>
</template>

<script>
  import { MpRadio, MpRadioGroup, MpInput } from "@mekari/pixel";

  export default {
    name: "AdvancedFilterItemTimelength",
    components: {
      MpRadio,
      MpRadioGroup,
      MpInput,
    },
    data() {
      return {
        check: "is-exactly",
      };
    },
  };
</script>
