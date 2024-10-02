<template>
  <mp-box>
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 60px)">
      <Sidebar default-is-toggle is-custom with-child />
      <mp-box
        as="section"
        data-id="content"
        width="100%"
        height="calc(100vh - 60px)"
        overflow-y="auto"
        background-color="background"
      >
        <mp-flex
          justify="space-between"
          align-items="center"
          padding-x="6"
          padding-y="3"
        >
          <mp-box height="12">
            <mp-text as="p" font-size="sm" is-link>Salary structure</mp-text>
            <mp-heading as="h1" font-size="2xl" font-weight="semibold">
              Create salary structure
            </mp-heading>
          </mp-box>
          <mp-box>
            <mp-button variant="outline" right-icon="caret-down">
              Help
            </mp-button>
          </mp-box>
        </mp-flex>
        <mp-box
          min-height="calc(100vh - 132px)"
          border-top-width="1px"
          border-left-width="1px"
          border-top-left-radius="md"
          border-color="gray.100"
          background-color="white"
          padding="6"
        >
          <Step>
            <StepItem id="1" label="Structure information" is-current />
            <StepItem id="2" label="Criteria & benchmark" is-disabled />
            <StepItem id="3" label="Method & structure" is-disabled is-last />
          </Step>

          <mp-heading as="h2" font-size="xl" margin-top="6" margin-bottom="5">
            Define structure information
          </mp-heading>

          <mp-box width="552px">
            <mp-form-control control-id="structure-name" margin-bottom="5">
              <mp-form-label justify-content="space-between">
                Structure name
                <mp-text as="span" color="gray.600"> 60/60 </mp-text>
              </mp-form-label>
              <mp-input />
            </mp-form-control>

            <mp-form-control control-id="payroll-component" margin-bottom="5">
              <mp-form-label>
                Payroll component
                <mp-icon name="info" size="sm" margin-left="1" />
              </mp-form-label>
              <mp-input-group width="264px">
                <mp-input-right-addon :with-background="false">
                  <mp-icon name="chevrons-down" size="sm" />
                </mp-input-right-addon>
                <mp-input
                  value="All salary component"
                  is-read-only
                  cursor="pointer"
                />
              </mp-input-group>
            </mp-form-control>

            <mp-form-control control-id="period" margin-bottom="5">
              <mp-form-label> Period </mp-form-label>
              <mp-box width="264px">
                <mp-date-picker
                  v-model="date1"
                  type="month"
                  format="MMMM YYYY"
                  placeholder="Select date"
                />
              </mp-box>
            </mp-form-control>

            <mp-form-control control-id="description">
              <mp-form-label justify-content="space-between">
                Description
                <mp-text as="span" color="gray.600"> 60/60 </mp-text>
              </mp-form-label>
              <mp-textarea />
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
  MpInputGroup,
  MpInputRightAddon,
  MpIcon,
  MpDatePicker,
  MpTextarea,
} from "@mekari/pixel";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Step from "../components/Step";
import StepItem from "../components/StepItem";

export default {
  name: "CreateSalaryStructure1",
  components: {
    MpBox,
    MpFlex,
    MpHeading,
    MpText,
    MpButton,
    MpFormControl,
    MpFormLabel,
    MpInput,
    MpInputGroup,
    MpInputRightAddon,
    MpIcon,
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
    };
  },
};
</script>