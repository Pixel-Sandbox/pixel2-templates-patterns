<template>
  <mp-box>
    <mp-flex justify-content="flex-end" margin-bottom="5">
      <mp-flex gap="2" align-items="center">
        <mp-tooltip label="Guidebook" position="bottom">
          <mp-button-icon size="md" name="help" />
        </mp-tooltip>
        <mp-input-group>
          <mp-input-left-addon :with-background="false">
            <mp-icon name="search" size="sm" />
          </mp-input-left-addon>
          <mp-input placeholder="Search..." />
        </mp-input-group>
      </mp-flex>
    </mp-flex>
  </mp-box>
</template>

<script>
import {
  MpFlex,
  MpBox,
  MpButtonIcon,
  MpIcon,
  MpInput,
  MpInputGroup,
  MpInputLeftAddon,
  MpTooltip,
} from "@mekari/pixel";

export default {
  name: "GlobalFilter",
  components: {
    MpFlex,
    MpBox,
    MpButtonIcon,
    MpIcon,
    MpInput,
    MpInputGroup,
    MpInputLeftAddon,
    MpTooltip,
  },
};
</script>