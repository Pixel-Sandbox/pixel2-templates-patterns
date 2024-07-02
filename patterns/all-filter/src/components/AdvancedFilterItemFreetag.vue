<template>
  <mp-input-tag
    :suggestions="['Rizal Chandra', 'Steven Santoso']"
    :key-code="['Enter', ';', ',']"
    is-show-suggestions
  />
</template>

<script>
import { MpInputTag } from "@mekari/pixel";

export default {
  name: "AdvancedFilterItemFreetag",
  components: {
    MpInputTag,
  },
};
</script>
