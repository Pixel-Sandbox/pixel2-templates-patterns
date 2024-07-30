<template>
  <mp-box>
    <mp-date-picker
      v-if="!isRange"
      v-model="valueA"
      value-type="date"
      format="D MMM YYYY"
      placeholder="Select date"
    />
    <mp-date-picker
      v-if="isRange"
      v-model="valueB"
      format="D MMM YYYY"
      type="date"
      range
      range-separator=" - "
      placeholder="Start date - End date"
    />
  </mp-box>
</template>

<script>
import { MpBox, MpDatePicker } from "@mekari/pixel";

export default {
  name: "AdvancedFilterItemDate",
  components: {
    MpBox,
    MpDatePicker,
  },
  props: {
    isRange: [Boolean],
  },
  data() {
    return {
      valueA: null,
      valueB: null,
    };
  },
};
</script>
