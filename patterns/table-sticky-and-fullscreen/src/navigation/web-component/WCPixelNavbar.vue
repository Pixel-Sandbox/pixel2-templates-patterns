<template>
  <ThemeProvider id="__jurnal-pixel-navbar">
    <PixelNavbar  />
  </ThemeProvider>
</template>

<script>
import { ThemeProvider } from "@mekari/pixel";
import PixelNavbar from "../navbar/PixelNavbar.vue";

export default {
  name: "WCPixelNavbar",
  components: {
    ThemeProvider,
    PixelNavbar,
  }
};
</script>
