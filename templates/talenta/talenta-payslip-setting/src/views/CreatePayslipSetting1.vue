<template>
  <mp-box>
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 60px)">
      <Sidebar default-is-toggle is-custom with-child />
      <mp-box as="section" data-id="content" width="100%" height="calc(100vh - 60px)" overflow-y="auto"
        background-color="background">
        <mp-flex justify="space-between" align-items="center" padding-x="6" padding-y="3">
          <mp-box height="12">
            <mp-text as="p" font-size="sm" is-link>Payslip</mp-text>
            <mp-heading as="h1" font-size="2xl" font-weight="semibold">
              Create template
            </mp-heading>
          </mp-box>
        </mp-flex>
        <mp-box min-height="calc(100vh - 132px)" border-top-width="1px" border-left-width="1px"
          border-top-left-radius="md" border-color="gray.100" background-color="white" padding="6">
          <Step>
            <StepItem id="1" label="Payslip information" is-current />
            <StepItem id="2" label="Employee assignment" is-disabled />
            <StepItem id="3" label="Payslip customization" is-disabled is-last />
          </Step>

          <mp-heading as="h2" font-size="xl" margin-top="6" margin-bottom="5">
            Payslip information
          </mp-heading>

          <mp-box width="552px">
            <mp-form-control control-id="structure-name" is-required margin-bottom="5">
              <mp-form-label display="block">
                Template name
                <mp-text as="span" color="gray.600" order="3" float="right"> 60/60 </mp-text>
              </mp-form-label>
              <mp-input placeholder="Example: Headoffice Payslip" />
            </mp-form-control>

            <mp-form-control control-id="description" margin-bottom="5">
              <mp-form-label>
                Description
              </mp-form-label>
              <mp-box position="relative">
                <mp-textarea v-model="description" placeholder="Example: Payslip settings for employee within the headoffice" />
                <mp-box
                  position="absolute"
                  bottom="0"
                  padding-x="2"
                  padding-y="2"
                  width="full"
                  display="flex"
                  justify-content="flex-end"
                  user-select="none"
                  pointer-events="none"
                >
                  <mp-text color="gray.600" padding-x="1" border-radius="sm">
                    {{ valueLength }}/{{ maxLength }}
                  </mp-text>
                </mp-box>
              </mp-box>
            </mp-form-control>

            <mp-flex gap="6">
              <mp-form-control control-id="period" is-required margin-bottom="3">
                <mp-form-label> Effective period </mp-form-label>
                <mp-box width="264px">
                  <mp-date-picker v-model="date1" type="month" format="MMMM YYYY"
                    placeholder="Select effective period" />
                </mp-box>
              </mp-form-control>
              <mp-form-control v-if="isExpiredPeriod" control-id="expired-period" margin-bottom="3">
                <mp-form-label> 
                  Expiration period 
                  <mp-icon name="info" size="sm" margin-left="1" v-mp-tooltip="'If you set an expiration period, the payslip will only be valid until that period. After the expiration period, the default payslip will be applied.'" />
                </mp-form-label>
                <mp-box width="264px">
                  <mp-date-picker v-model="date2" type="month" format="MMMM YYYY"
                    placeholder="Select expiration period" />
                </mp-box>
              </mp-form-control>
            </mp-flex>

            <mp-form-control control-id="is-expired-period">
              <mp-checkbox v-model="isExpiredPeriod">
                Set expiration period
              </mp-checkbox>
            </mp-form-control>

            <mp-flex gap="2" justify-content="flex-end" margin-top="12">
              <mp-button variant="ghost" as="router-link" to="/">Cancel</mp-button>
              <mp-button as="router-link" to="/create/step-2">Continue</mp-button>
            </mp-flex>
          </mp-box>
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
  MpButton,
  MpFormControl,
  MpFormLabel,
  MpInput,
  MpIcon,
  MpCheckbox,
  MpDatePicker,
  MpTextarea,
} from "@mekari/pixel";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Step from "../components/Step";
import StepItem from "../components/StepItem";

export default {
  name: "CreatePayslipSetting1",
  components: {
    MpBox,
    MpFlex,
    MpHeading,
    MpText,
    MpButton,
    MpFormControl,
    MpFormLabel,
    MpInput,
    MpIcon,
    MpCheckbox,
    MpDatePicker,
    MpTextarea,
    Header,
    Sidebar,
    Step,
    StepItem,
  },
  data: function () {
    return {
      date1: "",
      date2: "",
      isExpiredPeriod: false,
      description: "",
      maxLength: 60,
    };
  },
  computed: {
    valueLength() {
      return this.description.length;
    },
  },
};
</script>