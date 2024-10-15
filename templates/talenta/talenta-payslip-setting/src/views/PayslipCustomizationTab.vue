<template>
  <mp-box>
    <mp-flex width="800px" justify="space-between" margin-top="6" margin-bottom="5">
      <mp-heading as="h2" font-size="xl">
        Payroll period information
      </mp-heading>
      <mp-button-icon v-if="!toggle.payrollPeriod" name="edit" @click="toggle.payrollPeriod = true" />
    </mp-flex>
    <mp-flex gap="6" margin-bottom="5">
      <mp-text width="264px" color="gray.600">
        Payroll period
      </mp-text>
      <mp-box v-if="!toggle.payrollPeriod" width="456px">
        <mp-text>Monthly period</mp-text>
        <mp-text color="gray.600" font-size="sm">It will appear information on header payslip as monthly payroll period. Example: January 2024.</mp-text>
      </mp-box>
      <mp-radio-group value="monthly-period" v-if="toggle.payrollPeriod" width="456px" name="payroll-period" spacing="4">
        <mp-radio value="monthly-period">
          Monthly payroll period
          <template #description>
            It will appear information on header payslip as monthly payroll period. Example: January 2024.
          </template>
        </mp-radio>
        <mp-radio value="monthly-cutoff">
          Monthly payroll cut off
          <template #description>
            It will appear information on header payslip as cut off date. Example: 1 Jan 2024 - 31 Jan 2024.
          </template>
        </mp-radio>
      </mp-radio-group>
    </mp-flex>
    <mp-flex width="800px" gap="2" v-if="toggle.payrollPeriod" justify="flex-end">
      <mp-button variant="ghost">Cancel</mp-button>
      <mp-button @click="toggle.payrollPeriod = false">Save</mp-button>
    </mp-flex>

    <mp-flex width="800px" justify="space-between" margin-top="6" margin-bottom="5">
      <mp-heading as="h2" font-size="xl">
        Employee information
      </mp-heading>
      <mp-button-icon v-if="!toggle.employeeInfo" name="edit" @click="toggle.employeeInfo = true" />
    </mp-flex>
    <mp-flex gap="6" margin-bottom="5">
      <mp-text v-if="!toggle.employeeInfo" color="gray.600" width="264px">
        Information
      </mp-text>
      <mp-box v-if="!toggle.employeeInfo" width="456px">
        <mp-text margin-left="4">
          <ul>
            <li>Employee ID/name</li>
            <li>Job position</li>
            <li>Organization</li>
            <li>Grade/Level</li>
            <li>PTKP status</li>
            <li>NPWP number</li>
          </ul>
        </mp-text>
      </mp-box>
      <mp-box v-if="toggle.employeeInfo" width="750px">
        <mp-flex margin-bottom="4">
          <mp-text width="264px" font-weight="semibold">
            Employee name/ID
          </mp-text>
          <mp-toggle is-checked is-disabled>
            Displayed
          </mp-toggle>
        </mp-flex>
        <mp-flex margin-bottom="4">
          <mp-text width="264px" font-weight="semibold">
            Job position
          </mp-text>
          <mp-toggle is-checked>
            Displayed
          </mp-toggle>
        </mp-flex>
        <mp-flex margin-bottom="4">
          <mp-text width="264px" font-weight="semibold">
            Organization
          </mp-text>
          <mp-toggle is-checked>
            Displayed
          </mp-toggle>
        </mp-flex>
        <mp-flex margin-bottom="4">
          <mp-text width="264px" font-weight="semibold">
            Grade/Level
          </mp-text>
          <mp-toggle is-checked>
            Displayed
          </mp-toggle>
        </mp-flex>
        <mp-flex margin-bottom="4">
          <mp-text width="264px" font-weight="semibold">
            PTKP status
          </mp-text>
          <mp-toggle is-checked>
            Displayed
          </mp-toggle>
        </mp-flex>
        <mp-flex margin-bottom="4">
          <mp-text width="264px" font-weight="semibold">
            NPWP number
          </mp-text>
          <mp-toggle is-checked>
            Displayed
          </mp-toggle>
        </mp-flex>
      </mp-box>
    </mp-flex>
    <mp-flex width="800px" gap="2" v-if="toggle.employeeInfo" justify="flex-end">
      <mp-button variant="ghost">Cancel</mp-button>
      <mp-button @click="toggle.employeeInfo = false">Save</mp-button>
    </mp-flex>

    <mp-flex width="800px" justify="space-between" margin-top="6" margin-bottom="5">
      <mp-heading as="h2" font-size="xl">
        Earnings component
      </mp-heading>
      <mp-button-icon name="edit" />
    </mp-flex>
    <mp-flex gap="6" margin-bottom="5">
      <mp-text width="264px" color="gray.600">
        Components
      </mp-text>
      <mp-box width="456px">
        <mp-text margin-left="4">
          <ul>
            <li>Basic salary</li>
            <li>Allowance A</li>
            <li>Allowance B</li>
            <li>Allowance C</li>
            <li>Allowance D</li>
            <li>Allowance E</li>
          </ul>
        </mp-text>
        <mp-text color="gray.600" font-size="sm" margin-top="1">+10 more components</mp-text>
      </mp-box>
    </mp-flex>

    <mp-flex width="800px" justify="space-between" margin-top="6" margin-bottom="5">
      <mp-heading as="h2" font-size="xl">
        Additional earnings component
      </mp-heading>
      <mp-button-icon name="edit" />
    </mp-flex>
    <mp-flex gap="6" margin-bottom="5">
      <mp-text width="264px" color="gray.600">
        Additional earnings component
      </mp-text>
      <mp-box width="456px">
        <mp-text margin-left="4">
          <ul>
            <li>Allowance One Time A</li>
            <li>Allowance One Time B</li>
            <li>Allowance One Time C</li>
            <li>Allowance One Time D</li>
          </ul>
        </mp-text>
      </mp-box>
    </mp-flex>

    <mp-flex width="800px" justify="space-between" margin-top="6" margin-bottom="5">
      <mp-heading as="h2" font-size="xl">
        Deduction component
      </mp-heading>
      <mp-button-icon name="edit" />
    </mp-flex>
    <mp-flex gap="6" margin-bottom="5">
      <mp-text width="264px" color="gray.600">
        Components
      </mp-text>
      <mp-box width="456px">
        <mp-text margin-left="4">
          <ul>
            <li>JKK</li>
            <li>JHT Company</li>
            <li>BPJS Kesehatan Company</li>
            <li>Jaminan Pensiun Company</li>
          </ul>
        </mp-text>
      </mp-box>
    </mp-flex>

    <mp-flex width="800px" justify="space-between" margin-top="6" margin-bottom="5">
      <mp-heading as="h2" font-size="xl">
        Additional deduction component
      </mp-heading>
      <mp-button-icon name="edit" />
    </mp-flex>
    <mp-flex gap="6" margin-bottom="5">
      <mp-text width="264px" color="gray.600">
        Additional deduction component
      </mp-text>
      <mp-box width="456px">
        <mp-text margin-left="4">
          <ul>
            <li>Loan</li>
            <li>Clock in late</li>
          </ul>
        </mp-text>
      </mp-box>
    </mp-flex>

    <mp-flex width="800px" justify="space-between" margin-top="6" margin-bottom="5">
      <mp-heading as="h2" font-size="xl">
        Benefit component
      </mp-heading>
      <mp-button-icon name="edit" />
    </mp-flex>
    <mp-flex gap="6" margin-bottom="5">
      <mp-text width="264px" color="gray.600">
        Components
      </mp-text>
      <mp-box width="456px">
        <mp-text margin-left="4">
          <ul>
            <li>Reimbursement A</li>
            <li>Reimbursement B</li>
            <li>Reimbursement C</li>
            <li>Reimbursement D</li>
            <li>Reimbursement E</li>
            <li>Reimbursement F</li>
          </ul>
        </mp-text>
        <mp-text color="gray.600" font-size="sm" margin-top="1">+5 more components</mp-text>
      </mp-box>
    </mp-flex>

    <mp-flex width="800px" justify="space-between" margin-top="6" margin-bottom="5">
      <mp-heading as="h2" font-size="xl">
        Attendance & overtime information
      </mp-heading>
      <mp-button-icon v-if="!toggle.attendanceInfo" name="edit" @click="toggle.attendanceInfo = true" />
    </mp-flex>
    <mp-flex gap="6" margin-bottom="5">
      <mp-box width="264px">
        <mp-text color="gray.600">
          Attendance summary
        </mp-text>
        <mp-text color="gray.600" font-size="sm">
          Display log attendance summary on below of payslip.
        </mp-text>
      </mp-box>
      <mp-box width="456px">
        <mp-flex v-if="!toggle.attendanceInfo" gap="2">
          <mp-icon name="done" variant="duotone" />
          <mp-text>Displayed</mp-text>
        </mp-flex>
        <mp-toggle v-if="toggle.attendanceInfo" is-checked>
          Displayed
        </mp-toggle>
      </mp-box>
    </mp-flex>
    <mp-flex gap="6" margin-bottom="5">
      <mp-box width="264px">
        <mp-text color="gray.600">
          Attendance and overtime breakdown
        </mp-text>
        <mp-text color="gray.600" font-size="sm">
          Display attendance and overtime breakdown details on next page of payslip.
        </mp-text>
      </mp-box>
      <mp-box width="456px">
        <mp-flex v-if="!toggle.attendanceInfo" gap="2">
          <mp-icon name="done" variant="duotone" />
          <mp-text>Displayed</mp-text>
        </mp-flex>
        <mp-toggle v-if="toggle.attendanceInfo" is-checked>
          Displayed
        </mp-toggle>
      </mp-box>
    </mp-flex>
    <mp-flex width="800px" gap="2" v-if="toggle.attendanceInfo" justify="flex-end">
      <mp-button variant="ghost">Cancel</mp-button>
      <mp-button @click="toggle.attendanceInfo = false">Save</mp-button>
    </mp-flex>

    <mp-flex width="800px" justify="space-between" margin-top="6" margin-bottom="5">
      <mp-heading as="h2" font-size="xl">
        Take Home Pay on the payslip
      </mp-heading>
      <mp-button-icon v-if="!toggle.takeHomePay" name="edit" @click="toggle.takeHomePay = true" />
    </mp-flex>
    <mp-flex gap="6" margin-bottom="5">
      <mp-box width="264px">
        <mp-text color="gray.600">
          Take Home Pay
        </mp-text>
      </mp-box>
      <mp-box width="456px">
        <mp-flex v-if="!toggle.takeHomePay" gap="2">
          <mp-icon name="done" variant="duotone" />
          <mp-text>Displayed</mp-text>
        </mp-flex>
        <mp-toggle v-if="toggle.takeHomePay" is-checked>
          Displayed
        </mp-toggle>
      </mp-box>
    </mp-flex>
    <mp-flex width="800px" gap="2" v-if="toggle.takeHomePay" justify="flex-end">
      <mp-button variant="ghost">Cancel</mp-button>
      <mp-button @click="toggle.takeHomePay = false">Save</mp-button>
    </mp-flex>

    <mp-flex width="800px" justify="space-between" margin-top="6" margin-bottom="5">
      <mp-heading as="h2" font-size="xl">
        Signature on the payslip
      </mp-heading>
      <mp-button-icon v-if="!toggle.signature" name="edit" @click="toggle.signature = true" />
    </mp-flex>
    <mp-flex gap="6" margin-bottom="5">
      <mp-box width="264px">
        <mp-text color="gray.600">
          Primary signature
        </mp-text>
        <mp-text color="gray.600" font-size="sm">
          The primary signature will be taken from the Company info page.
        </mp-text>
      </mp-box>
      <mp-box width="456px">
        <mp-flex v-if="!toggle.signature" gap="2">
          <mp-icon name="done" variant="duotone" />
          <mp-text>Displayed</mp-text>
        </mp-flex>
        <mp-flex direction="column">
          <mp-toggle v-if="toggle.signature" v-model="setting.signature" is-checked>
            Displayed
          </mp-toggle>
          <mp-box width="264px" v-if="toggle.signature && setting.signature">
            <mp-form-control control-id="employee-name" margin-top="2" margin-bottom="5">
              <mp-form-label>Employee name</mp-form-label>
              <mp-select width="full" placeholder="Select employee name" />
            </mp-form-control>
            <mp-form-control control-id="preview-signature" margin-bottom="4">
              <mp-form-label>Preview signature</mp-form-label>
              <mp-dropzone accept=".jpg, .jpeg, .png" description="" height="100px" min-height="100px" max-height="100px" />
              <mp-form-help-text>Upload your scanned signature to be attached to the payslip. Suggested size: 100x50px in JPG, JPEG, or PNG format, with a maximum file size of 5MB.</mp-form-help-text>
            </mp-form-control>
            <mp-flex gap="1">
              <mp-button variant="outline">Upload signature</mp-button>
              <mp-button variant="ghost">Reset</mp-button>
            </mp-flex>
          </mp-box>
        </mp-flex>
      </mp-box>
    </mp-flex>
    <mp-flex gap="6" margin-bottom="5">
      <mp-box width="264px">
        <mp-text color="gray.600">
          Additional signature
        </mp-text>
        <mp-text color="gray.600" font-size="sm">
          Adding an additional signature will create a new one.
        </mp-text>
      </mp-box>
      <mp-box width="456px">
        <mp-flex v-if="!toggle.signature" gap="2">
          <mp-icon name="error" />
          <mp-text>Not displayed</mp-text>
        </mp-flex>
        <mp-toggle v-if="toggle.signature">
          Displayed
        </mp-toggle>
      </mp-box>
    </mp-flex>
    <mp-flex width="800px" gap="2" v-if="toggle.signature" justify="flex-end">
      <mp-button variant="ghost">Cancel</mp-button>
      <mp-button @click="toggle.signature = false">Save</mp-button>
    </mp-flex>

    <mp-flex width="800px" justify="space-between" margin-top="6" margin-bottom="5">
      <mp-heading as="h2" font-size="xl">
        Payslip notes
      </mp-heading>
      <mp-button-icon v-if="!toggle.notes" name="edit" @click="toggle.notes = true" />
    </mp-flex>
    <mp-flex gap="6" margin-bottom="5">
      <mp-box width="264px">
        <mp-text color="gray.600">
          Notes
        </mp-text>
      </mp-box>
      <mp-box width="456px">
        <mp-flex v-if="!toggle.notes" gap="2">
          <mp-icon name="done" variant="duotone" />
          <mp-flex direction="column">
            <mp-text>Displayed</mp-text>
            <mp-text color="gray.600" font-size="sm">Thank you for your hardwork!</mp-text>
          </mp-flex>
        </mp-flex>
        <mp-flex direction="column">
          <mp-toggle v-if="toggle.notes" v-model="setting.notes" is-checked>
            Displayed
          </mp-toggle>
          <mp-box width="264px" v-if="toggle.notes && setting.notes">
            <mp-form-control control-id="notes" margin-top="2" margin-bottom="5">
              <mp-textarea value="Thank you for your hardwork!" />
            </mp-form-control>
          </mp-box>
        </mp-flex>
      </mp-box>
    </mp-flex>
    <mp-flex width="800px" gap="2" v-if="toggle.notes" justify="flex-end">
      <mp-button variant="ghost">Cancel</mp-button>
      <mp-button @click="toggle.notes = false">Save</mp-button>
    </mp-flex>

    <mp-flex width="800px" justify="space-between" margin-top="6" margin-bottom="5">
      <mp-heading as="h2" font-size="xl">
        Additional information
      </mp-heading>
      <mp-button-icon v-if="!toggle.additionalInfo" name="edit" @click="toggle.additionalInfo = true" />
    </mp-flex>
    <mp-flex gap="6" margin-bottom="5">
      <mp-box width="264px">
        <mp-text color="gray.600">
          Additional information
        </mp-text>
      </mp-box>
      <mp-box width="456px">
        <mp-flex v-if="!toggle.additionalInfo" gap="2">
          <mp-icon name="done" variant="duotone" />
          <mp-flex direction="column">
            <mp-text>Displayed</mp-text>
            <mp-text color="gray.600" font-size="sm">
              Branch, Full Basic Salary, Bank Account, BPJS Ketengakerjaan, BPJS Kesehatan, Employment status, Tax status, Class, Approval line.
            </mp-text>
          </mp-flex>
        </mp-flex>
        <mp-flex direction="column">
          <mp-toggle v-if="toggle.additionalInfo" v-model="setting.additionalInfo" is-checked>
            Displayed
          </mp-toggle>
          <mp-box width="264px" v-if="toggle.additionalInfo && setting.additionalInfo">
            <mp-form-control control-id="additional-info" margin-top="2" margin-bottom="5">
              <mp-form-label>Information</mp-form-label>
              <mp-select width="full" placeholder="Select information" />
            </mp-form-control>
            <mp-flex justify="space-between" align="center" margin-bottom="1">
              <mp-text color="gray.600">
                Branch
              </mp-text>
              <mp-button-icon name="minus-circular" size="sm" />
            </mp-flex>
            <mp-flex justify="space-between" align="center" margin-bottom="1">
              <mp-text color="gray.600">
                Bank account
              </mp-text>
              <mp-button-icon name="minus-circular" size="sm" />
            </mp-flex>
            <mp-flex justify="space-between" align="center">
              <mp-text color="gray.600">
                BPJS Ketenagakerjaan
              </mp-text>
              <mp-button-icon name="minus-circular" size="sm" />
            </mp-flex>
          </mp-box>
        </mp-flex>
      </mp-box>
    </mp-flex>
    <mp-flex width="800px" gap="2" v-if="toggle.additionalInfo" justify="flex-end">
      <mp-button variant="ghost">Cancel</mp-button>
      <mp-button @click="toggle.additionalInfo = false">Save</mp-button>
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
  MpTextarea,
  MpRadio,
  MpRadioGroup,
  MpFormControl,
  MpFormLabel,
  MpFormHelpText,
  MpSelect,
  MpDropzone,
  MpToggle,
  MpIcon,
} from "@mekari/pixel"

export default {
  name: "PayslipCustomizationTab",
  components: {
    MpBox,
    MpFlex,
    MpHeading,
    MpText,
    MpButtonIcon,
    MpButton,
    MpTextarea,
    MpRadio,
    MpRadioGroup,
    MpFormControl,
    MpFormLabel,
    MpFormHelpText,
    MpSelect,
    MpDropzone,
    MpToggle,
    MpIcon,
  },
  data: function () {
    return {
      toggle: {
        payrollPeriod: false,
        employeeInfo: false,
        attendanceInfo: false,
        takeHomePay: false,
        signature: false,
        notes: false,
        additionalInfo: false,
      },
      setting: {
        signature: true,
        notes: true,
        additionalInfo: true
      }
    }
  },
}
</script>