<template>
  <mp-box>
    <mp-input-group margin-bottom="6">
      <mp-input-left-addon :with-background="false">
        <mp-icon name="search" size="sm" />
      </mp-input-left-addon>
      <mp-input placeholder="Search..." />
    </mp-input-group>
    <mp-box max-height="196px" overflow-y="scroll">
      <mp-text
        color="gray.600"
        font-size="sm"
        margin-bottom="1"
        text-transform="uppercase"
      >
        0 selected branch
      </mp-text>
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
    name: "AdvancedFilterItemMultiset",
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
