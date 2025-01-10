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
              Create template
            </mp-heading>
          </mp-box>
        </mp-flex>
        <mp-box min-height="calc(100vh - 132px)" border-top-width="1px" border-left-width="1px"
          border-top-left-radius="md" border-color="gray.100" background-color="white" padding="6">
          <Step>
            <StepItem id="1" label="Payslip information" is-completed />
            <StepItem id="2" label="Employee assignment" is-completed />
            <StepItem id="3" label="Payslip customization" is-current is-last />
          </Step>

          <mp-box position="sticky" width="464px" top="6" right="6" margin-top="6" float="right">
            <mp-box padding="6" background-color="#FBFCFC" border="1px" border-color="gray.400" border-radius="md">
              <mp-heading as="h2" font-size="xl">
                Payslip preview
              </mp-heading>
              <mp-text color="gray.600">
                This preview shows how payslip will appear based on your customization.
              </mp-text>

              <mp-segmented-control default-value="option-1" :data="[
                    { value: 'option-1', label: 'Web view' },
                    { value: 'option-2', label: 'Mobile view', tooltip: 'View payslips on your mobile device via Employee Self-Service (ESS) will be available soon.', isDisabled: true }
                  ]" margin-top="3" margin-bottom="6">
                <template slot-scope="props">
                  <mp-box v-if="props.item.tooltip">
                    <mp-tooltip :id="props.item.id" :label="props.item.tooltip" position="top">
                      {{ props.item.label }}
                    </mp-tooltip>
                  </mp-box>
                  <mp-box v-else>
                    {{ props.item.label }}
                  </mp-box>
                </template>
              </mp-segmented-control>
              <Preview :setting="setting" :earning="selectedData" />
            </mp-box>
          </mp-box>

          <mp-box width="552px">
            <mp-heading as="h2" font-size="xl" margin-top="6">
              Payroll period format
            </mp-heading>
            <mp-text color="gray.600" margin-bottom="5">
              You can choose either a monthly or cut-off date format for the payroll period. This format appears at
              the top of the payslip and does not affect the payroll calculation.
              <mp-text is-link>Learn more</mp-text>
            </mp-text>

            <mp-text font-weight="semibold">
              Period format
            </mp-text>

            <mp-radio-group name="option" value="option-1" spacing="0">
              <mp-radio value="option-1">
                Monthly period
                <template #description>
                  The format will be displayed as <b>January 2024</b>.
                </template>
              </mp-radio>
              <mp-radio value="option-2">
                Payroll cut-off date
              </mp-radio>
            </mp-radio-group>

            <mp-heading as="h2" font-size="xl" margin-top="6">
              Employee information
            </mp-heading>
            <mp-text color="gray.600" margin-bottom="5">
              You can select which employee information to Displayed on the payslip.
              <mp-text display="inline-flex" is-link>Learn more</mp-text>
            </mp-text>

            <mp-heading as="h3" font-size="lg" margin-bottom="4">
              General employee information
            </mp-heading>

            <mp-flex gap="6" margin-bottom="5">
              <mp-text width="264px" font-weight="semibold">
                Employee name/ID
              </mp-text>
              <mp-toggle is-checked is-disabled>
                Displayed
              </mp-toggle>
            </mp-flex>

            <mp-flex gap="6" margin-bottom="5">
              <mp-text width="264px" font-weight="semibold">
                Job position
              </mp-text>
              <mp-toggle v-model="setting.jobPosition">
                Displayed
              </mp-toggle>
            </mp-flex>

            <mp-flex gap="6" margin-bottom="5">
              <mp-text width="264px" font-weight="semibold">
                Organization
              </mp-text>
              <mp-toggle v-model="setting.organization">
                Displayed
              </mp-toggle>
            </mp-flex>

            <mp-flex gap="6" margin-bottom="5">
              <mp-text width="264px" font-weight="semibold">
                Grade/Level
              </mp-text>
              <mp-toggle v-model="setting.grade">
                Displayed
              </mp-toggle>
            </mp-flex>

            <mp-flex gap="6" margin-bottom="5">
              <mp-text width="264px" font-weight="semibold">
                PTKP status
              </mp-text>
              <mp-toggle v-model="setting.ptktStatus">
                Displayed
              </mp-toggle>
            </mp-flex>

            <mp-flex gap="6" margin-bottom="5">
              <mp-text width="264px" font-weight="semibold">
                NPWP number
              </mp-text>
              <mp-toggle v-model="setting.npwpNumber">
                Displayed
              </mp-toggle>
            </mp-flex>

            <mp-heading as="h2" font-size="xl" margin-top="6">
              Earnings component
            </mp-heading>
            <mp-text color="gray.600" margin-bottom="5">
              Customize the visibility and reorder earnings component position on super admin or employee payslip.
              <mp-text display="inline-flex" is-link>Learn more</mp-text>
            </mp-text>

            <mp-heading as="h3" font-size="lg" margin-bottom="4">
              {{ selectedData.length }} component displayed
            </mp-heading>

            <mp-button variant="outline" margin-bottom="5" @click="handleOpen">
              <mp-icon name="edit" size="sm" variant="duotone" margin-right="2" />
              Set earnings component
            </mp-button>

            <mp-heading as="h3" font-size="lg" margin-bottom="4">
              4 additional earnings displayed
            </mp-heading>

            <mp-button variant="outline">
              <mp-icon name="edit" size="sm" variant="duotone" margin-right="2" />
              Set additional earnings
            </mp-button>

            <mp-heading as="h2" font-size="xl" margin-top="6">
              Deductions component
            </mp-heading>
            <mp-text color="gray.600" margin-bottom="5">
              Customize the visibility and reorder deductions component position on super admin or employee payslip.
              <mp-text display="inline-flex" is-link>Learn more</mp-text>
            </mp-text>

            <mp-heading as="h3" font-size="lg" margin-bottom="4">
              6 component displayed
            </mp-heading>

            <mp-button variant="outline" margin-bottom="5">
              <mp-icon name="edit" size="sm" variant="duotone" margin-right="2" />
              Set deductions component
            </mp-button>

            <mp-heading as="h3" font-size="lg" margin-bottom="4">
              2 additional deduction displayed
            </mp-heading>

            <mp-button variant="outline">
              <mp-icon name="edit" size="sm" variant="duotone" margin-right="2" />
              Set additional deduction
            </mp-button>

            <mp-heading as="h2" font-size="xl" margin-top="6">
              Take Home Pay
            </mp-heading>
            <mp-text color="gray.600" margin-bottom="5">
              You can choose to displayed the calculated Take Home Pay on the payslip.
              <mp-text display="inline-flex" is-link>Learn more</mp-text>
            </mp-text>

            <mp-flex gap="6">
              <mp-text width="264px" font-weight="semibold">
                Take Home Pay
              </mp-text>
              <mp-toggle v-model="setting.takeHomePay">
                Displayed
              </mp-toggle>
            </mp-flex>

            <mp-heading as="h2" font-size="xl" margin-top="6">
              Attendance & overtime information
            </mp-heading>
            <mp-text color="gray.600" margin-bottom="5">
              Attendance and overtime log summary will be displayed on a separate page of the payslip.
              <mp-text display="inline-flex" is-link>Learn more</mp-text>
            </mp-text>

            <mp-flex gap="6" margin-bottom="5">
              <mp-box width="264px">
                <mp-text font-weight="semibold">
                  Attendance summary
                </mp-text>
                <mp-text color="gray.600">
                  Display the attendance summary log below the payslip.
                </mp-text>
              </mp-box>
              <mp-toggle is-checked>
                Displayed
              </mp-toggle>
            </mp-flex>

            <mp-flex gap="6">
              <mp-box width="264px">
                <mp-text font-weight="semibold">
                  Attendance and overtime breakdown
                </mp-text>
                <mp-text color="gray.600">
                  Display attendance and overtime breakdown details on next page of payslip.
                </mp-text>
              </mp-box>
              <mp-toggle is-checked>
                Displayed
              </mp-toggle>
            </mp-flex>

            <mp-heading as="h2" font-size="xl" margin-top="6">
              Signature
            </mp-heading>
            <mp-text color="gray.600" margin-bottom="5">
              Displayed the company signature and optionally add another signature on the payslip.
              <mp-text display="inline-flex" is-link>Learn more</mp-text>
            </mp-text>

            <mp-flex gap="6" margin-bottom="5">
              <mp-box width="264px">
                <mp-text font-weight="semibold">
                  Primary signature
                </mp-text>
                <mp-text color="gray.600">
                  The primary signature will be taken from the Company info page.
                </mp-text>
              </mp-box>
              <mp-flex direction="column" flex="1 0 0">
                <mp-toggle v-model="setting.primarySignature">
                  Displayed
                </mp-toggle>
                <mp-box v-if="setting.primarySignature">
                  <mp-form-control control-id="employee-name" margin-top="2" margin-bottom="5">
                    <mp-form-label>Employee name</mp-form-label>
                    <mp-select width="full" placeholder="Select employee name" />
                  </mp-form-control>
                  <mp-form-control control-id="preview-signature" margin-bottom="4">
                    <mp-form-label>Preview signature</mp-form-label>
                    <mp-dropzone accept=".jpg, .jpeg, .png" description="" height="100px" min-height="100px" max-height="100px" />
                    <mp-form-help-text>Upload your scanned signature to be attached to the payslip. Suggested size: 100x50px in JPG, JPEG, or PNG format, with a maximum file size of 5MB.</mp-form-help-text>
                  </mp-form-control>
                  <!-- <mp-flex gap="1">
                    <mp-button variant="outline">Upload signature</mp-button>
                    <mp-button variant="ghost">Reset</mp-button>
                  </mp-flex> -->
                </mp-box>
              </mp-flex>
            </mp-flex>

            <mp-flex gap="6">
              <mp-box width="264px">
                <mp-text font-weight="semibold">
                  Additional signature
                </mp-text>
                <mp-text color="gray.600">
                  Adding an additional signature will create a new one.
                </mp-text>
              </mp-box>
              <mp-toggle>
                Displayed
              </mp-toggle>
            </mp-flex>

            <mp-heading as="h2" font-size="xl" margin-top="6">
              Payslip notes
            </mp-heading>
            <mp-text color="gray.600" margin-bottom="5">
              Notes will be displayed at the bottom of the payslip.
              <mp-text display="inline-flex" is-link>Learn more</mp-text>
            </mp-text>

            <mp-flex gap="6">
              <mp-text width="264px" font-weight="semibold">
                Notes
              </mp-text>
              <mp-flex direction="column">
                <mp-toggle v-model="setting.notes">
                  Displayed
                </mp-toggle>
                <mp-box width="264px" v-if="setting.notes">
                  <mp-form-control control-id="notes" margin-top="2" margin-bottom="5">
                    <mp-textarea min-width="264px" value="Thank you for your hardwork!" />
                  </mp-form-control>
                </mp-box>
              </mp-flex>
            </mp-flex>

            <mp-heading as="h2" font-size="xl" margin-top="6">
              Additional information
            </mp-heading>
            <mp-text color="gray.600" margin-bottom="5">
              Other data related to payroll can be displayed on the payslip.
              <mp-text display="inline-flex" is-link>Learn more</mp-text>
            </mp-text>

            <mp-flex gap="6">
              <mp-text width="264px" font-weight="semibold">
                Additional information
              </mp-text>
              <mp-flex direction="column" flex="1 0 0">
                <mp-toggle v-model="setting.additionalInfo">
                Displayed
              </mp-toggle>
                <mp-box v-if="setting.additionalInfo">
                  <mp-form-control control-id="employee-name" margin-top="2" margin-bottom="5">
                    <mp-form-label>Information</mp-form-label>
                    <mp-select width="full" placeholder="Select information" />
                  </mp-form-control>

                  <mp-flex justify="space-between" align="center" margin-bottom="1">
                    <mp-text color="gray.600">
                      Branch
                    </mp-text>
                    <mp-button-icon v-mp-tooltip="'Remove'" name="minus-circular" size="sm" />
                  </mp-flex>
                </mp-box>
              </mp-flex>
            </mp-flex>

            <mp-flex gap="2" justify-content="flex-end" margin-top="12">
              <mp-button variant="ghost" as="router-link" to="/">Cancel</mp-button>
              <mp-button variant="outline" as="router-link" to="/create/step-2">Back</mp-button>
              <mp-button>Save</mp-button>
            </mp-flex>
          </mp-box>
        </mp-box>
      </mp-box>
    </mp-flex>

    <assign-employee-custom :isDrawerOpen="isOpen" :handleDrawerOpen="handleOpen" :handleDrawerClose="handleClose"
      @update-data="handleUpdateData" />
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpHeading,
  MpText,
  MpButton,
  MpButtonIcon,
  MpRadioGroup,
  MpRadio,
  MpToggle,
  MpIcon,
  MpSegmentedControl,
  MpTooltip,
  MpFormControl,
  MpFormLabel,
  MpFormHelpText,
  MpSelect,
  MpTextarea,
  MpDropzone
} from "@mekari/pixel";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Step from "../components/Step";
import StepItem from "../components/StepItem";
import Preview from './Preview'
import AssignEmployeeCustom from "../components/AssignEmployeeCustom"

export default {
  name: "CreatePayslipSetting3",
  components: {
    MpBox,
    MpFlex,
    MpHeading,
    MpText,
    MpButton,
    MpButtonIcon,
    MpRadioGroup,
    MpRadio,
    MpToggle,
    MpIcon,
    MpSegmentedControl,
    MpTooltip,
    MpFormControl,
    MpFormLabel,
    MpFormHelpText,
    MpSelect,
    MpTextarea,
    MpDropzone,
    Header,
    Sidebar,
    Step,
    StepItem,
    Preview,
    AssignEmployeeCustom
  },
  data: function () {
    return {
      option: 'option-1',
      isOpen: false,
      selectedData: [
        {
          id: 7,
          name: "Basic salary"
        }
      ],
      setting: {
        jobPosition: true,
        organization: true,
        grade: true,
        ptktStatus: true,
        npwpNumber: true,
        takeHomePay: true,
        primarySignature: false,
        notes: false,
        additionalInfo: false,
      },
    }
  },
  methods: {
    handleOpen() {
      this.isOpen = true;
    },
    handleClose() {
      this.isOpen = false;
    },
    handleUpdateData(data) {
      this.selectedData = data
    }
  },
};
</script>