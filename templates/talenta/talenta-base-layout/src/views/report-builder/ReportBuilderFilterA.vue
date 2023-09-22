<template>
  <mp-box>
    <mp-flex gap="4" justify-content="space-between" margin-bottom="5">
      <mp-flex gap="4">
        <mp-box :display="['none', 'block']">
          <mp-select size="md" value="all-type" width="200px">
            <option value="all-type">All type</option>
          </mp-select>
        </mp-box>
      </mp-flex>

      <mp-flex gap="2" :flex="['1 0 auto', '0 0 auto']" align-items="center">
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
  MpSelect,
  MpIcon,
  MpInput,
  MpInputGroup,
  MpInputLeftAddon,
} from "@mekari/pixel";

export default {
  name: "ReportBuilderFilterA",
  components: {
    MpFlex,
    MpBox,
    MpSelect,
    MpIcon,
    MpInput,
    MpInputGroup,
    MpInputLeftAddon,
  },
};
</script>