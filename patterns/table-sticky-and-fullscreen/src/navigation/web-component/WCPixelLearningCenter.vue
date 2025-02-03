<template>
  <ThemeProvider id="__jurnal-pixel-sidebar">
    <PixelLearningCenter />
  </ThemeProvider>
</template>

<script>
import { ThemeProvider } from "@mekari/pixel";
import PixelLearningCenter from "../learning-center/PixelLearningCenter.vue";

export default {
  name: "WCPixelLearningCenter",
  components: {
    ThemeProvider,
    PixelLearningCenter,
  }
};
</script>
