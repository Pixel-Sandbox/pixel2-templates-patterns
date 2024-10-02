<template>
  <mp-box>
    <mp-flex justify-content="space-between" margin-bottom="5">
      <mp-flex gap="4">
        <mp-box>
          <mp-input-group>
            <mp-input-right-addon :with-background="false">
              <mp-icon name="chevrons-down" size="sm" />
            </mp-input-right-addon>
            <mp-input
              value="All salary component"
              is-read-only
              width="200px"
              cursor="pointer"
            />
          </mp-input-group>
        </mp-box>
        <mp-box width="200px">
          <mp-date-picker
            v-model="value"
            type="month"
            format="MMMM YYYY"
            placeholder="Select date"
          />
        </mp-box>
      </mp-flex>

      <mp-flex gap="2" align-items="center">
        <mp-button-icon name="upload" size="md" v-mp-tooltip="'Upload'" />
        <mp-input-group width="240px">
          <mp-input-left-addon :with-background="false">
            <mp-icon name="search" size="sm" />
          </mp-input-left-addon>
          <mp-input placeholder="Search structure name" />
        </mp-input-group>
      </mp-flex>
    </mp-flex>
  </mp-box>
</template>

<script>
import {
  MpFlex,
  MpBox,
  MpIcon,
  MpButtonIcon,
  MpInput,
  MpInputGroup,
  MpInputLeftAddon,
  MpInputRightAddon,
  MpDatePicker,
} from "@mekari/pixel";

export default {
  name: "SalaryStructureFilter",
  components: {
    MpFlex,
    MpBox,
    MpIcon,
    MpButtonIcon,
    MpInput,
    MpInputGroup,
    MpInputLeftAddon,
    MpInputRightAddon,
    MpDatePicker,
  },
  data: function () {
    return {
      value: null,
    };
  },
};
</script>