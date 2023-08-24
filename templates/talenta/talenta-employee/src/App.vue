<template>
  <Wrapper>
    <Employee />
  </Wrapper>
</template>

<script>
import Wrapper from "./components/Wrapper";
import Employee from "./views/Employee";

export default {
  name: "App",
  components: {
    Wrapper,
    Employee,
  },
};
</script>
