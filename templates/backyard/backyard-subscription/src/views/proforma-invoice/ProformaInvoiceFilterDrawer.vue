<template>
  <mp-drawer size="sm" :is-open="isDrawerOpen">
    <mp-drawer-content :max-width="['100%', 'sm']">
      <mp-drawer-header>All filter</mp-drawer-header>
      <mp-drawer-close-button @click="onDrawerToggle(false)" />
      <mp-drawer-body>
        <mp-form-control control-id="application" margin-bottom="5">
          <mp-form-label>Application</mp-form-label>
          <mp-select value="all-application">
            <option value="all-application">All application</option>
            <option value="jurnal">Jurnal</option>
            <option value="talenta">Talenta</option>
          </mp-select>
        </mp-form-control>
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
        <mp-form-control control-id="company" margin-bottom="5">
          <mp-form-label>Company</mp-form-label>
          <mp-select value="all-company">
            <option value="all-company">All company</option>
          </mp-select>
        </mp-form-control>
        <mp-form-control control-id="mmr-type" margin-bottom="5">
          <mp-form-label>MMR type</mp-form-label>
          <mp-select value="all-type">
            <option value="all-type">All type</option>
          </mp-select>
        </mp-form-control>
        <mp-form-control control-id="active-date" margin-bottom="5">
          <mp-form-label>Active date</mp-form-label>
          <mp-date-picker v-model="activeDate" format="DD/MM/YYYY" />
        </mp-form-control>
        <mp-form-control control-id="end-date" margin-bottom="5">
          <mp-form-label>End date</mp-form-label>
          <mp-date-picker v-model="endDate" format="DD/MM/YYYY" />
        </mp-form-control>
        <mp-form-control control-id="paayment-date" margin-bottom="5">
          <mp-form-label>Payment date</mp-form-label>
          <mp-date-picker
            v-model="paymentDate"
            format="DD/MM/YYYY"
            range
            range-separator=" - "
          />
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
  MpDatePicker,
} from "@mekari/pixel";

export default {
  name: "ProformaInvoiceFilterDrawer",
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
    MpDatePicker,
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