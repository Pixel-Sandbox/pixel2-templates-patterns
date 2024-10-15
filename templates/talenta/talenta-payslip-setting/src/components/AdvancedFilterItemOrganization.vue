<template>
  <mp-box>
    <mp-input-group margin-bottom="4">
      <mp-input-left-addon :with-background="false">
        <mp-icon name="search" size="sm" />
      </mp-input-left-addon>
      <mp-input placeholder="Search..." />
    </mp-input-group>
    <mp-box max-height="208px" overflow-y="scroll">
      <mp-text color="gray.600" margin-bottom="2">
        0 selected organizations
      </mp-text>
      <mp-checkbox margin-y="0.5">Select all organizations</mp-checkbox>
      <mp-checkbox-group spacing="0">
        <mp-checkbox margin-y="0.5">Organization A</mp-checkbox>
        <mp-checkbox margin-y="0.5">Organization B</mp-checkbox>
        <mp-checkbox margin-y="0.5">Organization C</mp-checkbox>
        <mp-checkbox margin-y="0.5">Organization D</mp-checkbox>
        <mp-checkbox margin-y="0.5">Organization E</mp-checkbox>
        <mp-checkbox margin-y="0.5">Organization F</mp-checkbox>
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
  name: "AdvancedFilterItemOrganization",
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
