<template>
  <mp-box>
    <mp-flex gap="4" justify-content="space-between" margin-bottom="5">
      <mp-box :display="['block', 'none']">
        <mp-button
          variant="outline"
          :padding-x="['2', '4']"
          @click="onFilterDrawerToggle(true)"
        >
          <mp-icon name="filter" variant="duotone" margin-right="0" />
        </mp-button>
      </mp-box>
      <mp-flex gap="4" :display="['none', 'flex']">
        <mp-select size="md" value="all-status" width="200px">
          <option value="all-status">All status</option>
          <option value="need-approval">Need approval</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </mp-select>
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

    <ApprovalRequestFilterDrawer
      :isDrawerOpen="isFilterDrawerOpen"
      :onDrawerToggle="onFilterDrawerToggle"
    />
  </mp-box>
</template>

<script>
import {
  MpFlex,
  MpBox,
  MpButton,
  MpSelect,
  MpIcon,
  MpInput,
  MpInputGroup,
  MpInputLeftAddon,
} from "@mekari/pixel";
import ApprovalRequestFilterDrawer from "./ApprovalRequestFilterDrawer";

export default {
  name: "ApprovalRequestFilter",
  components: {
    MpFlex,
    MpBox,
    MpButton,
    MpSelect,
    MpIcon,
    MpInput,
    MpInputGroup,
    MpInputLeftAddon,
    ApprovalRequestFilterDrawer,
  },
  data: function () {
    return {
      isFilterDrawerOpen: false,
    };
  },
  methods: {
    onFilterDrawerToggle: function (data) {
      this.isFilterDrawerOpen = data;
    },
  },
};
</script>