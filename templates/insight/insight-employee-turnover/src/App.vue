<template>
  <Wrapper>
    <EmployeeTurnover />
  </Wrapper>
</template>

<script>
import Wrapper from "./components/Wrapper";
import EmployeeTurnover from "./views/EmployeeTurnover";

export default {
  name: "App",
  components: {
    Wrapper,
    EmployeeTurnover,
  },
};
</script>
