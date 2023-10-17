<template>
  <Wrapper>
    <CostCenter />
  </Wrapper>
</template>

<script>
import Wrapper from "./components/Wrapper";
import CostCenter from "./views/CostCenter";

export default {
  name: "App",
  components: {
    Wrapper,
    CostCenter,
  },
};
</script>
