<template>
  <mp-box>
    <mp-flex gap="4" justify-content="space-between" margin-bottom="5">
      <mp-flex gap="4">
        <mp-box :display="['none', 'block']">
          <mp-select size="md" value="all-mmr-type" width="200px">
            <option value="all-mmr-type">All MMR type</option>
          </mp-select>
        </mp-box>
        <mp-box :display="['none', 'block']">
          <mp-select size="md" value="all-status" width="200px">
            <option value="all-status">All status</option>
            <option value="outstanding">Outstanding</option>
            <option value="paid">Paid</option>
          </mp-select>
        </mp-box>
        <mp-box :display="['block', 'none']">
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

    <ClientInvoiceFilterDrawer
      :isDrawerOpen="isFilterDrawerOpen"
      :onDrawerToggle="onFilterDrawerToggle"
    />
  </mp-box>
</template>

<script>
import {
  MpFlex,
  MpBox,
  MpText,
  MpButton,
  MpSelect,
  MpIcon,
  MpInput,
  MpInputGroup,
  MpInputLeftAddon,
} from "@mekari/pixel";
import ClientInvoiceFilterDrawer from "./ClientInvoiceFilterDrawer";

export default {
  name: "ClientInvoiceFilter",
  components: {
    MpFlex,
    MpBox,
    MpText,
    MpButton,
    MpSelect,
    MpIcon,
    MpInput,
    MpInputGroup,
    MpInputLeftAddon,
    ClientInvoiceFilterDrawer,
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