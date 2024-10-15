<template>
  <mp-box>
    <mp-input-group margin-bottom="4">
      <mp-input-left-addon :with-background="false">
        <mp-icon name="search" size="sm" />
      </mp-input-left-addon>
      <mp-input placeholder="Search..." />
    </mp-input-group>
    <mp-box max-height="208px" overflow-y="scroll">
      <mp-text color="gray.600" margin-bottom="2"> 0 selected branch </mp-text>
      <mp-checkbox margin-y="0.5">Select all branch</mp-checkbox>
      <mp-checkbox-group spacing="0">
        <mp-checkbox margin-y="0.5">Branch A</mp-checkbox>
        <mp-checkbox margin-y="0.5">Branch B</mp-checkbox>
        <mp-checkbox margin-y="0.5">Branch C</mp-checkbox>
        <mp-checkbox margin-y="0.5">Branch D</mp-checkbox>
        <mp-checkbox margin-y="0.5">Branch E</mp-checkbox>
        <mp-checkbox margin-y="0.5">Branch F</mp-checkbox>
      </mp-checkbox-group>
    </mp-box>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpText,
  MpIcon,
  MpInput,
  MpInputGroup,
  MpInputLeftAddon,
  MpCheckbox,
  MpCheckboxGroup,
} from "@mekari/pixel";

export default {
  name: "AdvancedFilterItemBranch",
  components: {
    MpBox,
    MpText,
    MpIcon,
    MpInput,
    MpInputGroup,
    MpInputLeftAddon,
    MpCheckbox,
    MpCheckboxGroup,
  },
};
</script>
