<template>
  <mp-box>
    <mp-flex gap="4" justify-content="space-between" margin-bottom="5">
      <mp-flex gap="4">
        <mp-box :display="['none', 'block']">
          <mp-select size="md" value="all-application" width="200px">
            <option value="all-application">All application</option>
            <option value="jurnal">Jurnal</option>
            <option value="talenta">Talenta</option>
          </mp-select>
        </mp-box>
        <mp-box :display="['none', 'block']">
          <mp-select size="md" value="all-status" width="200px">
            <option value="all-status">All status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="locked">Locked</option>
            <option value="voided">Voided</option>
          </mp-select>
        </mp-box>
        <mp-box>
          <mp-button
            variant="outline"
            :padding-x="['2', '4']"
            @click="onFilterDrawerToggle(true)"
          >
            <mp-icon name="filter" variant="duotone" :margin-right="[0, 2]" />
            <mp-text :display="['none', 'block']" font-weight="semibold">
              All filter
            </mp-text>
          </mp-button>
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

    <SubscriptionFilterDrawer
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
  MpText,
  MpInput,
  MpInputGroup,
  MpInputLeftAddon,
} from "@mekari/pixel";
import SubscriptionFilterDrawer from "./SubscriptionFilterDrawer";

export default {
  name: "SubscriptionFilter",
  components: {
    MpFlex,
    MpBox,
    MpButton,
    MpSelect,
    MpIcon,
    MpText,
    MpInput,
    MpInputGroup,
    MpInputLeftAddon,
    SubscriptionFilterDrawer,
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