<template>
  <mp-drawer size="sm" :is-open="isDrawerOpen">
    <mp-drawer-content :max-width="['100%', 'sm']">
      <mp-drawer-header>All filter</mp-drawer-header>
      <mp-drawer-close-button @click="onDrawerToggle(false)" />
      <mp-drawer-body>
        <mp-form-control control-id="application" margin-bottom="5">
          <mp-form-label>All MMR type</mp-form-label>
          <mp-select size="md" value="all-mmr-type">
            <option value="all-mmr-type">All MMR type</option>
          </mp-select>
        </mp-form-control>
        <mp-form-control control-id="application" margin-bottom="5">
          <mp-form-label>All status</mp-form-label>
          <mp-select size="md" value="all-status">
            <option value="all-status">All status</option>
            <option value="outstanding">Outstanding</option>
            <option value="paid">Paid</option>
          </mp-select>
        </mp-form-control>

        <mp-flex justify-content="space-between" align-items="center">
          <mp-flex>
            <mp-text color="gray.600" text-decoration-line="underline">
              Clear filter
            </mp-text>
          </mp-flex>
          <mp-flex gap="2">
            <mp-button variant="ghost">Cancel</mp-button>
            <mp-button>Apply</mp-button>
          </mp-flex>
        </mp-flex>
      </mp-drawer-body>
    </mp-drawer-content>
    <mp-drawer-overlay />
  </mp-drawer>
</template>

<script>
import {
  MpFlex,
  MpText,
  MpButton,
  MpDrawer,
  MpDrawerOverlay,
  MpDrawerContent,
  MpDrawerHeader,
  MpDrawerBody,
  MpDrawerCloseButton,
  MpFormControl,
  MpFormLabel,
  MpSelect,
} from "@mekari/pixel";

export default {
  name: "ClientInvoiceFilterDrawer",
  components: {
    MpFlex,
    MpText,
    MpButton,
    MpDrawer,
    MpDrawerOverlay,
    MpDrawerContent,
    MpDrawerHeader,
    MpDrawerBody,
    MpDrawerCloseButton,
    MpFormControl,
    MpFormLabel,
    MpSelect,
  },
  props: {
    isDrawerOpen: [Boolean],
    onDrawerToggle: [Function],
  },
  data: function () {
    return {
      activeDate: "",
      endDate: "",
      paymentDate: "",
    };
  },
};
</script>