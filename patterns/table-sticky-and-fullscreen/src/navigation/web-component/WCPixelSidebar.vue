<template>
  <ThemeProvider id="__jurnal-pixel-sidebar">
    <PixelSidebar />
  </ThemeProvider>
</template>

<script>
import { ThemeProvider } from "@mekari/pixel";
import PixelSidebar from "../sidebar/PixelSidebar.vue";

export default {
  name: "WCPixelSidebar",
  components: {
    ThemeProvider,
    PixelSidebar,
  }
};
</script>
