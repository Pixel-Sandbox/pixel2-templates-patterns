<template>
  <div>
    <SearchBox />
  </div>
</template>

<script>
import SearchBox from "./components/SearchBox";

export default {
  name: "CustomBox",
  components: { SearchBox },
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>
