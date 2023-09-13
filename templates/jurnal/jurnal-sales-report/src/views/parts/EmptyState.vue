<template>
  <mp-flex direction="column" align-items="center" justify-content="center">
    <img
      v-if="type === 'no-data'"
      src="../../assets/illustration/chart.png"
      alt=""
    />
    <img
      v-if="type === 'data-not-found'"
      src="../../assets/illustration/not_result_found.png"
      alt=""
    />
    
    <mp-text font-weight="semibold" mt="4"> {{ title }} </mp-text>
    <slot v-if="$slots.default" />
    <mp-text v-else font-size="sm" color="gray.600" text-align="center"
      >{{ description }}
    </mp-text>
  </mp-flex>
</template>

<script>
import { MpFlex, MpText } from "@mekari/pixel";
export default {
  props: {
    type: { type: String, default: "no-data" },
    title: String,
    description: String,
  },
  components: {
    MpFlex,
    MpText,
  },
};
</script>
