<template>
  <ThemeProvider style="position: relative;">
    <MpReset />
    <slot />
  </ThemeProvider>
</template>

<script>
import { ThemeProvider, MpReset } from "@mekari/pixel";

export default {
  name: "WrapperDashboard",
  components: {
    ThemeProvider,
    MpReset,
  },
};
</script>
