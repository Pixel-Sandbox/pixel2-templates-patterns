<template>
  <Wrapper>
    <NewActiveEmployee />
  </Wrapper>
</template>

<script>
import Wrapper from "./components/Wrapper";
import NewActiveEmployee from "./views/NewActiveEmployee";

export default {
  name: "App",
  components: {
    Wrapper,
    NewActiveEmployee,
  },
};
</script>
