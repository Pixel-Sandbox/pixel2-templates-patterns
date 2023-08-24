<template>
  <mp-box>
    <mp-flex justify-content="space-between" margin-bottom="5">
      <mp-flex gap="2">
        <mp-date-picker
          type="year"
          v-model="yearpicker"
          placeholder="Select year"
        />
        <mp-tooltip label="Previous year" position="bottom">
          <mp-button-icon name="chevrons-left" size="md" />
        </mp-tooltip>
        <mp-tooltip label="Next year" position="bottom">
          <mp-button-icon name="chevrons-right" size="md" />
        </mp-tooltip>
      </mp-flex>

      <mp-flex gap="2" align-items="center">
        <mp-tooltip label="Insight" position="bottom">
          <mp-button-icon size="md" name="dashboard" />
        </mp-tooltip>
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
  MpDatePicker,
  MpInput,
  MpInputGroup,
  MpInputLeftAddon,
  MpTooltip,
} from "@mekari/pixel";

export default {
  name: "PayrollHistoryFilter",
  components: {
    MpFlex,
    MpBox,
    MpButtonIcon,
    MpIcon,
    MpDatePicker,
    MpInput,
    MpInputGroup,
    MpInputLeftAddon,
    MpTooltip,
  },
  data: function () {
    return {
      yearpicker: "",
    };
  },
};
</script>