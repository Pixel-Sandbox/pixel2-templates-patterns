<template>
  <mp-box>
    <mp-heading as="h3" font-size="lg" margin-y="6">
      Select location
    </mp-heading>
    <mp-flex justify-content="space-between" margin-bottom="5">
      <mp-flex gap="4">
        <mp-button variant="outline" @click="handleDrawerOpen">
          <mp-icon name="add-circular" variant="duotone" margin-right="2" />
          Add location
        </mp-button>
      </mp-flex>
      <mp-flex gap="2" align-items="center">
        <mp-input-group>
          <mp-input-left-addon :with-background="false">
            <mp-icon name="search" size="sm" />
          </mp-input-left-addon>
          <mp-input placeholder="Search..." />
        </mp-input-group>
      </mp-flex>
    </mp-flex>

    <SelectLocationDrawer
      :isDrawerOpen="isDrawerOpen"
      :handleDrawerOpen="handleDrawerOpen"
      :handleDrawerClose="handleDrawerClose"
    />
  </mp-box>
</template>

<script>
import {
  MpFlex,
  MpHeading,
  MpBox,
  MpButton,
  MpIcon,
  MpInput,
  MpInputGroup,
  MpInputLeftAddon,
} from "@mekari/pixel";
import SelectLocationDrawer from "./SelectLocationDrawer";

export default {
  name: "SelectLocationFilter",
  components: {
    MpFlex,
    MpHeading,
    MpBox,
    MpButton,
    MpIcon,
    MpInput,
    MpInputGroup,
    MpInputLeftAddon,
    SelectLocationDrawer,
  },
  data: function () {
    return {
      isDrawerOpen: false,
    };
  },
  methods: {
    handleDrawerOpen: function () {
      this.isDrawerOpen = true;
    },
    handleDrawerClose: function () {
      this.isDrawerOpen = false;
    },
  },
};
</script>