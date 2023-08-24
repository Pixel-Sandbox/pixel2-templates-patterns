<template>
  <Wrapper>
    <PayrollHistory />
  </Wrapper>
</template>

<script>
import Wrapper from "./components/Wrapper";
import PayrollHistory from "./views/PayrollHistory";

export default {
  name: "App",
  components: {
    Wrapper,
    PayrollHistory,
  },
};
</script>
