<template>
  <mp-box>
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 60px)">
      <Sidebar default-is-toggle is-custom with-child />
      <mp-box as="section" data-id="content" width="100%" height="calc(100vh - 60px)" overflow-y="auto"
        background-color="background" position="relative">
        <mp-flex justify="space-between" align-items="center" padding-x="6" padding-y="3">
          <mp-box height="12">
            <mp-text as="p" font-size="sm" is-link>Payslip</mp-text>
            <mp-heading as="h1" font-size="2xl" font-weight="semibold">
              Template details
            </mp-heading>
          </mp-box>
          <mp-box>
            <mp-button variant="outline">
              Preview payslip
            </mp-button>
          </mp-box>
        </mp-flex>
        <mp-box min-height="calc(100vh - 132px)" border-top-width="1px" border-left-width="1px"
          border-top-left-radius="md" border-color="gray.100" background-color="white" padding="6">
          <mp-flex direction="column" margin-bottom="6">
            <mp-flex margin-bottom="4">
              <mp-text v-if="!toggle.infoDetail" width="264px" color="gray.600">Template name</mp-text>
              <mp-text v-if="!toggle.infoDetail" width="456px">Headoffice</mp-text>
              <mp-text v-if="toggle.infoDetail" width="264px" color="gray.600">Policy name</mp-text>
              <mp-form-control v-if="toggle.infoDetail" width="456px" control-id="policy-name">
                <mp-input value="Headoffice" />
              </mp-form-control>
              <mp-button-icon v-if="!toggle.infoDetail" name="edit" margin-left="6" @click="toggle.infoDetail = true" />
            </mp-flex>
            <mp-flex margin-bottom="4">
              <mp-text width="264px" color="gray.600">Description</mp-text>
              <mp-text v-if="!toggle.infoDetail" width="456px">Payslip settings for employee within the headoffice or headquarter at Jakarta with additional signature.</mp-text>
              <mp-form-control v-if="toggle.infoDetail" width="456px" control-id="description">
                <mp-textarea value="Payslip settings for employee within the headoffice or headquarter at Jakarta with additional signature." />
              </mp-form-control>
            </mp-flex>
            <mp-flex margin-bottom="4">
              <mp-text width="264px" color="gray.600">Effective period</mp-text>
              <mp-text v-if="!toggle.infoDetail" width="456px">Jan 2024</mp-text>
                <mp-form-control v-show="toggle.infoDetail" width="456px" control-id="effective-period">
                  <mp-date-picker v-model="effectivePeriod" format="MMM YYYY" />
                </mp-form-control>
            </mp-flex>
            <mp-flex v-if="!toggle.infoDetail" margin-bottom="4">
              <mp-text width="264px" color="gray.600">Created by</mp-text>
              <mp-box width="456px">
                <mp-text>Rizal Candra</mp-text>
                <mp-text color="gray.600" font-size="sm">12 Mar 2024, 19:34</mp-text>
              </mp-box>
            </mp-flex>
            <mp-flex v-if="!toggle.infoDetail" margin-bottom="4">
              <mp-text width="264px" color="gray.600">Last modified by</mp-text>
              <mp-box width="456px">
                <mp-text>Rizal Candra</mp-text>
                <mp-text color="gray.600" font-size="sm">14 Mar 2024, 19:34</mp-text>
              </mp-box>
            </mp-flex>
            <mp-flex width="800px" gap="2" v-if="toggle.infoDetail" justify="flex-end">
              <mp-button variant="ghost">Cancel</mp-button>
              <mp-button @click="toggle.infoDetail = false">Save</mp-button>
            </mp-flex>
          </mp-flex>

          <mp-tabs>
            <mp-tab-list>
              <mp-tab>
                Employee assignment
              </mp-tab>
              <mp-tab>
                Payslip customization
              </mp-tab>
            </mp-tab-list>
            <mp-tab-panels>
              <mp-tab-panel>
                <EmployeeAssignmentTab />
              </mp-tab-panel>
              <mp-tab-panel>
                <PayslipCustomizationTab />
              </mp-tab-panel>
            </mp-tab-panels>
          </mp-tabs>
        </mp-box>
      </mp-box>
    </mp-flex>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpHeading,
  MpText,
  MpButtonIcon,
  MpButton,
  MpDatePicker,
  MpTabs,
  MpTabList,
  MpTab,
  MpTabPanels,
  MpTabPanel,
  MpInput,
  MpTextarea,
  MpFormControl,
} from "@mekari/pixel"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import EmployeeAssignmentTab from "./EmployeeAssignmentTab"
import PayslipCustomizationTab from "./PayslipCustomizationTab"

export default {
  name: "EditPayslipSetting",
  components: {
    MpBox,
    MpFlex,
    MpHeading,
    MpText,
    MpButtonIcon,
    MpButton,
    MpDatePicker,
    MpTabs,
    MpTabList,
    MpTab,
    MpTabPanels,
    MpTabPanel,
    MpInput,
    MpTextarea,
    MpFormControl,
    Header,
    Sidebar,
    EmployeeAssignmentTab,
    PayslipCustomizationTab
  },
  data: function () {
    return {
      effectivePeriod: new Date('10/01/2024'),
      toggle: {
        infoDetail: false,
      }
    }
  },
}
</script>