<template>
  <mp-box>
    <mp-flex align-items="flex-end">
      <mp-form-control control-id="location-name" is-required margin-bottom="5">
        <mp-form-label>Location name</mp-form-label>
        <mp-input width="448px" />
      </mp-form-control>
    </mp-flex>

    <mp-form-control control-id="gps-location" margin-bottom="5">
      <mp-form-label>GPS setting</mp-form-label>
      <mp-radio-group
        name="gps-location"
        spacing="6"
        is-inline
        default-value="flexible"
        @change="handleToggleGPSLocation"
      >
        <mp-radio value="flexible"> Flexible </mp-radio>
        <mp-radio value="set-location"> Set location </mp-radio>
      </mp-radio-group>
    </mp-form-control>

    <mp-form-control control-id="break-feature" margin-bottom="5">
      <mp-form-label>Break setting</mp-form-label>
      <mp-flex gap="6">
        <mp-box>
          <mp-checkbox v-model="enableBreak">Enable break feature</mp-checkbox>
          <mp-tooltip
            label="Employee will be able to take a break based on their shift."
            position="right"
          >
            <mp-icon name="info" size="sm" margin-left="2" />
          </mp-tooltip>
        </mp-box>
        <mp-box v-show="enableBreak">
          <mp-checkbox>Apply for start break</mp-checkbox>
          <mp-tooltip
            label="Employee must be in the location that has been set to start break."
            position="right"
          >
            <mp-icon name="info" size="sm" margin-left="2" />
          </mp-tooltip>
        </mp-box>
        <mp-box v-show="enableBreak">
          <mp-checkbox>Apply for end break</mp-checkbox>
          <mp-tooltip
            label="Employee must be in the location that has been set to end break."
            position="right"
          >
            <mp-icon name="info" size="sm" margin-left="2" />
          </mp-tooltip>
        </mp-box>
      </mp-flex>
    </mp-form-control>
  </mp-box>
</template>

<script>
import {
  MpFlex,
  MpIcon,
  MpBox,
  MpFormControl,
  MpFormLabel,
  MpInput,
  MpRadioGroup,
  MpRadio,
  MpCheckbox,
  MpTooltip,
} from "@mekari/pixel";

export default {
  name: "LocationSettingFilter",
  components: {
    MpFlex,
    MpIcon,
    MpBox,
    MpFormControl,
    MpFormLabel,
    MpInput,
    MpRadioGroup,
    MpRadio,
    MpCheckbox,
    MpTooltip,
  },
  props: {
    handleToggleGPSLocation: [Function],
  },
  data: function () {
    return {
      enableBreak: false,
    };
  },
};
</script>