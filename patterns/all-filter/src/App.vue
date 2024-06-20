<template>
  <mp-flex
    gap="4"
    justify-content="flex-start"
    align-items="center"
    padding="10"
    height="100vh"
  >
    <mp-button variant="outline" @click="handleOpen">
      <mp-box position="relative">
        <mp-icon name="filter" variant="duotone" margin-right="2" />
        <mp-badge
          variant-color="red"
          position="absolute"
          top="-4px"
          right="6px"
          width="6px"
          height="6px"
          padding="1"
          border-width="2px"
          border-color="white"
          border-radius="full"
        />
      </mp-box>
      All filter
    </mp-button>
    <mp-button variant="outline" @click="handleOpenBlank">
      <mp-icon name="filter" variant="duotone" margin-right="2" />
      All filter (blank)
    </mp-button>
    <advanced-filter :isOpen="isOpen" @open="handleOpen" @close="handleClose" />
    <advanced-filter-blank
      :isOpen="isOpenBlank"
      @open="handleOpenBlank"
      @close="handleCloseBlank"
    />
  </mp-flex>
</template>

<script>
import { MpFlex, MpButton, MpBox, MpBadge, MpIcon } from "@mekari/pixel";
import AdvancedFilter from "./components/AdvancedFilter";
import AdvancedFilterBlank from "./components/AdvancedFilterBlank";

export default {
  name: "App",
  components: {
    MpFlex,
    MpBox,
    MpBadge,
    MpIcon,
    MpButton,
    AdvancedFilter,
    AdvancedFilterBlank,
  },
  data() {
    return {
      isOpen: false,
      isOpenBlank: false,
    };
  },
  methods: {
    handleOpen() {
      this.isOpen = true;
    },
    handleClose() {
      this.isOpen = false;
    },
    handleOpenBlank() {
      this.isOpenBlank = true;
    },
    handleCloseBlank() {
      this.isOpenBlank = false;
    },
  },
};
</script>
