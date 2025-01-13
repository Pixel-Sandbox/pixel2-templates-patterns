<template>
  <div>
    <PixelNavbar />

    <main style="display: flex">
      <PixelSidebar />
      <RouterView />
    </main>
  </div>
</template>

<script>
import PixelNavbar from "./navigation/navbar/PixelNavbar.vue";
import PixelSidebar from "./navigation/sidebar/PixelSidebar.vue";

export default {
  components: {
    PixelNavbar,
    PixelSidebar,
  },
};
</script>
