<template>
  <div></div>
</template>

<script>
export default {
  name: "NotFound",
  mounted() {
    this.$router.push({ path: "/" });
  },
};
</script>