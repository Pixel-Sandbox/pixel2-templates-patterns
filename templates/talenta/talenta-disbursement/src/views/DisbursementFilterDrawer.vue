<template>
  <mp-drawer size="sm" :is-open="isDrawerOpen" scroll-behavior="inside">
    <mp-drawer-content :max-width="['100%', 'sm']">
      <mp-drawer-header>More filter</mp-drawer-header>
      <mp-drawer-close-button @click="onDrawerToggle(false)" />
      <mp-drawer-body>
        <mp-form-control control-id="reimbursement-name" margin-bottom="5">
          <mp-form-label>Reimbursement name</mp-form-label>
          <mp-popover>
            <mp-popover-trigger>
              <mp-input-group>
                <mp-input-right-addon :with-background="false">
                  <mp-icon name="chevrons-down" size="sm" />
                </mp-input-right-addon>
                <mp-input
                  placeholder="All reimbursement name"
                  is-read-only
                  cursor="pointer"
                />
              </mp-input-group>
            </mp-popover-trigger>
            <mp-popover-content
              max-width="350px"
              background-color="white"
              border="1px solid"
              border-color="gray.400"
              border-radius="md"
              box-shadow="lg"
            >
              <mp-popover-list>
                <mp-popover-list-item>Maternity</mp-popover-list-item>
                <mp-popover-list-item>Medical outpatient</mp-popover-list-item>
                <mp-popover-list-item>Transport claim</mp-popover-list-item>
                <mp-popover-list-item>Event claim</mp-popover-list-item>
                <mp-popover-list-item>Entertainment claim</mp-popover-list-item>
              </mp-popover-list>
            </mp-popover-content>
          </mp-popover>
        </mp-form-control>
        <mp-form-control control-id="approved-date" margin-bottom="5">
          <mp-form-label>Approved date</mp-form-label>
          <mp-date-picker
            v-model="valueA"
            format="DD/MM/YYYY"
            type="date"
            range
            range-separator=" - "
            placeholder="Select approved date"
          />
        </mp-form-control>
        <mp-form-control control-id="request-date" margin-bottom="5">
          <mp-form-label>Request date</mp-form-label>
          <mp-date-picker
            v-model="valueB"
            format="DD/MM/YYYY"
            type="date"
            range
            range-separator=" - "
            placeholder="Select request date"
          />
        </mp-form-control>
        <mp-form-control control-id="organization" margin-bottom="5">
          <mp-form-label>Organization</mp-form-label>
          <mp-popover>
            <mp-popover-trigger>
              <mp-input-group>
                <mp-input-right-addon :with-background="false">
                  <mp-icon name="chevrons-down" size="sm" />
                </mp-input-right-addon>
                <mp-input
                  placeholder="All organization"
                  is-read-only
                  cursor="pointer"
                />
              </mp-input-group>
            </mp-popover-trigger>
            <mp-popover-content
              max-width="350px"
              background-color="white"
              border="1px solid"
              border-color="gray.400"
              border-radius="md"
              box-shadow="lg"
            >
              <mp-box padding-x="3" padding-top="3">
                <mp-input-group>
                  <mp-input-left-addon :with-background="false">
                    <mp-icon name="search" size="sm" />
                  </mp-input-left-addon>
                  <mp-input placeholder="Search..." />
                </mp-input-group>
              </mp-box>
              <mp-popover-list>
                <mp-popover-list-item padding-y="1">
                  <mp-checkbox> People Operations </mp-checkbox>
                </mp-popover-list-item>
                <mp-popover-list-item padding-y="1">
                  <mp-checkbox> Finance </mp-checkbox>
                </mp-popover-list-item>
                <mp-popover-list-item padding-y="1">
                  <mp-checkbox> Technology </mp-checkbox>
                </mp-popover-list-item>
                <mp-popover-list-item padding-y="1">
                  <mp-checkbox> BOD </mp-checkbox>
                </mp-popover-list-item>
                <mp-popover-list-item padding-y="1">
                  <mp-checkbox> Product Design </mp-checkbox>
                </mp-popover-list-item>
              </mp-popover-list>
            </mp-popover-content>
          </mp-popover>
        </mp-form-control>
        <mp-form-control control-id="branch" margin-bottom="5">
          <mp-form-label>Branch</mp-form-label>
          <mp-popover>
            <mp-popover-trigger>
              <mp-input-group>
                <mp-input-right-addon :with-background="false">
                  <mp-icon name="chevrons-down" size="sm" />
                </mp-input-right-addon>
                <mp-input
                  placeholder="All branch"
                  is-read-only
                  cursor="pointer"
                />
              </mp-input-group>
            </mp-popover-trigger>
            <mp-popover-content
              max-width="350px"
              background-color="white"
              border="1px solid"
              border-color="gray.400"
              border-radius="md"
              box-shadow="lg"
            >
              <mp-box padding-x="3" padding-top="3">
                <mp-input-group>
                  <mp-input-left-addon :with-background="false">
                    <mp-icon name="search" size="sm" />
                  </mp-input-left-addon>
                  <mp-input placeholder="Search..." />
                </mp-input-group>
              </mp-box>
              <mp-popover-list>
                <mp-popover-list-item padding-y="1">
                  <mp-checkbox> Head Office </mp-checkbox>
                </mp-popover-list-item>
                <mp-popover-list-item padding-y="1">
                  <mp-checkbox> Surabaya </mp-checkbox>
                </mp-popover-list-item>
                <mp-popover-list-item padding-y="1">
                  <mp-checkbox> Bandung </mp-checkbox>
                </mp-popover-list-item>
                <mp-popover-list-item padding-y="1">
                  <mp-checkbox> Bali </mp-checkbox>
                </mp-popover-list-item>
                <mp-popover-list-item padding-y="1">
                  <mp-checkbox> Yogyakarta </mp-checkbox>
                </mp-popover-list-item>
                <mp-popover-list-item padding-y="1">
                  <mp-checkbox> Kalimantan </mp-checkbox>
                </mp-popover-list-item>
              </mp-popover-list>
            </mp-popover-content>
          </mp-popover>
        </mp-form-control>
        <mp-form-control control-id="job-position" margin-bottom="5">
          <mp-form-label>Job position</mp-form-label>
          <mp-popover>
            <mp-popover-trigger>
              <mp-input-group>
                <mp-input-right-addon :with-background="false">
                  <mp-icon name="chevrons-down" size="sm" />
                </mp-input-right-addon>
                <mp-input
                  placeholder="All job position"
                  is-read-only
                  cursor="pointer"
                />
              </mp-input-group>
            </mp-popover-trigger>
            <mp-popover-content
              max-width="350px"
              background-color="white"
              border="1px solid"
              border-color="gray.400"
              border-radius="md"
              box-shadow="lg"
            >
              <mp-box padding-x="3" padding-top="3">
                <mp-input-group>
                  <mp-input-left-addon :with-background="false">
                    <mp-icon name="search" size="sm" />
                  </mp-input-left-addon>
                  <mp-input placeholder="Search..." />
                </mp-input-group>
              </mp-box>
              <mp-popover-list>
                <mp-popover-list-item padding-y="1">
                  <mp-checkbox> UI/UX Designer </mp-checkbox>
                </mp-popover-list-item>
                <mp-popover-list-item padding-y="1">
                  <mp-checkbox> Fullstack Developer </mp-checkbox>
                </mp-popover-list-item>
                <mp-popover-list-item padding-y="1">
                  <mp-checkbox> Wordpress Developer </mp-checkbox>
                </mp-popover-list-item>
                <mp-popover-list-item padding-y="1">
                  <mp-checkbox> Software Engineer II </mp-checkbox>
                </mp-popover-list-item>
                <mp-popover-list-item padding-y="1">
                  <mp-checkbox> QA Engineer II </mp-checkbox>
                </mp-popover-list-item>
                <mp-popover-list-item padding-y="1">
                  <mp-checkbox> Customer Success Specialist </mp-checkbox>
                </mp-popover-list-item>
              </mp-popover-list>
            </mp-popover-content>
          </mp-popover>
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
  MpBox,
  MpText,
  MpIcon,
  MpButton,
  MpDrawer,
  MpDrawerOverlay,
  MpDrawerContent,
  MpDrawerHeader,
  MpDrawerBody,
  MpDrawerCloseButton,
  MpFormControl,
  MpFormLabel,
  MpCheckbox,
  MpDatePicker,
  MpInput,
  MpInputGroup,
  MpInputLeftAddon,
  MpInputRightAddon,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
} from "@mekari/pixel";

export default {
  name: "DisbursementFilterDrawer",
  components: {
    MpFlex,
    MpBox,
    MpText,
    MpIcon,
    MpButton,
    MpDrawer,
    MpDrawerOverlay,
    MpDrawerContent,
    MpDrawerHeader,
    MpDrawerBody,
    MpDrawerCloseButton,
    MpFormControl,
    MpFormLabel,
    MpCheckbox,
    MpDatePicker,
    MpInput,
    MpInputGroup,
    MpInputLeftAddon,
    MpInputRightAddon,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
  },
  props: {
    isDrawerOpen: [Boolean],
    onDrawerToggle: [Function],
  },
  data: function () {
    return {
      valueA: "",
      valueB: "",
    };
  },
};
</script>