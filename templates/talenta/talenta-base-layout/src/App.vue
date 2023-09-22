<template>
  <Wrapper>
    <router-view :key="$route.fullPath" />
  </Wrapper>
</template>

<script>
import Wrapper from "./components/Wrapper";

export default {
  name: "App",
  components: {
    Wrapper,
  },
};
</script>
