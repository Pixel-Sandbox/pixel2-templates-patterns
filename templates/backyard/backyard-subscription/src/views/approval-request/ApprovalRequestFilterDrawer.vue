<template>
  <mp-drawer size="sm" :is-open="isDrawerOpen" scroll-behavior="inside">
    <mp-drawer-content :max-width="['100%', 'sm']">
      <mp-drawer-header>All filter</mp-drawer-header>
      <mp-drawer-close-button @click="onDrawerToggle(false)" />
      <mp-drawer-body>
        <mp-form-control control-id="status" margin-bottom="5">
          <mp-form-label>Status</mp-form-label>
          <mp-select value="all-status">
            <option value="all-status">All status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="locked">Locked</option>
            <option value="voided">Voided</option>
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
  name: "ApprovalRequestFilterDrawer",
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