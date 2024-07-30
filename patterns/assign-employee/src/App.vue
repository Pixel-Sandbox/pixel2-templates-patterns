<template>
  <mp-flex
    gap="4"
    justify-content="flex-start"
    align-items="center"
    padding="10"
    height="100vh"
  >
    <mp-button variant="outline" @click="handleOpen">
      <mp-icon name="add-circular" variant="duotone" margin-right="2" />
      Add employee
    </mp-button>
    <assign-employee
      :isDrawerOpen="isOpen"
      :handleDrawerOpen="handleOpen"
      :handleDrawerClose="handleClose"
    />
  </mp-flex>
</template>

<script>
import { MpFlex, MpButton, MpIcon } from "@mekari/pixel";
import AssignEmployee from "./components/AssignEmployee";

export default {
  name: "App",
  components: {
    MpFlex,
    MpIcon,
    MpButton,
    AssignEmployee,
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    handleOpen() {
      this.isOpen = true;
    },
    handleClose() {
      this.isOpen = false;
    },
  },
};
</script>
