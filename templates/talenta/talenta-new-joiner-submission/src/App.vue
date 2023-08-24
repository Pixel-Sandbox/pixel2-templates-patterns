<template>
  <Wrapper>
    <Form />
  </Wrapper>
</template>

<script>
import Wrapper from "./components/Wrapper";
import Form from "./views/Form";

export default {
  name: "App",
  components: {
    Wrapper,
    Form,
  },
};
</script>
