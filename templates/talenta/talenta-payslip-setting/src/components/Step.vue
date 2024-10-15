<template>
  <mp-flex
    justify-content="space-between"
    align-items="flex-start"
    flex-direction="row"
    flex="1 1 0%"
    width="830px"
  >
    <slot />
  </mp-flex>
</template>

<script>
import { MpFlex } from "@mekari/pixel";

export default {
  name: "Step",
  components: { MpFlex },
};
</script>
