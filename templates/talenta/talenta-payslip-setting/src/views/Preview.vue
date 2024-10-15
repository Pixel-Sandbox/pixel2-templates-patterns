<template>
  <mp-box background-color="gray.25" border="1px" border-color="gray.100" border-radius="md">
    <mp-tabs padding-x="4" padding-top="1" padding-bottom="4">
      <mp-tab-list>
        <mp-tab>Super admin view</mp-tab>
        <mp-tab>Employee view</mp-tab>
      </mp-tab-list>
      <mp-tab-panels max-height="366px" overflow-y="scroll">
        <mp-tab-panel>
          <mp-box background-color="white" padding="3" border-radius="md">
            <mp-flex justify-content="space-between" align-items="center" margin-bottom="3">
              <img src="../assets/box.png" width="64px" />
              <mp-text font-size="10px" color="red.400">
                CONFIDENTIAL
              </mp-text>
            </mp-flex>

            <mp-text font-size="9px" font-weight="semibold" margin-bottom="3">
              Company name
            </mp-text>

            <mp-flex gap="4" justify-content="space-between">
              <mp-flex flex-direction="column" width="50%">
                <mp-flex justify-content="space-between">
                  <mp-text font-size="9px">
                    Payroll period
                  </mp-text>
                  <mp-text font-size="9px" width="60px">
                    January 2024
                  </mp-text>
                </mp-flex>
                <mp-flex justify-content="space-between">
                  <mp-text font-size="9px">
                    Employee name/ID
                  </mp-text>
                  <mp-text font-size="9px" width="60px">
                    {Employee name/ID}
                  </mp-text>
                </mp-flex>
                <mp-flex v-if="setting.jobPosition" justify-content="space-between">
                  <mp-text font-size="9px">
                    Job position
                  </mp-text>
                  <mp-text font-size="9px" width="60px">
                    {Job position}
                  </mp-text>
                </mp-flex>
                <mp-flex v-if="setting.organization" justify-content="space-between">
                  <mp-text font-size="9px">
                    Organization
                  </mp-text>
                  <mp-text font-size="9px" width="60px">
                    {Organization}
                  </mp-text>
                </mp-flex>
              </mp-flex>
              <mp-flex flex-direction="column" width="50%">
                <mp-flex v-if="setting.grade" justify-content="space-between">
                  <mp-text font-size="9px">
                    Grade/Level
                  </mp-text>
                  <mp-text font-size="9px" width="60px">
                    {Grade/Level}
                  </mp-text>
                </mp-flex>
                <mp-flex v-if="setting.ptktStatus" justify-content="space-between">
                  <mp-text font-size="9px">
                    PTKP status
                  </mp-text>
                  <mp-text font-size="9px" width="60px">
                    {PTKP status}
                  </mp-text>
                </mp-flex>
                <mp-flex v-if="setting.npwpNumber" justify-content="space-between">
                  <mp-text font-size="9px">
                    NPWP
                  </mp-text>
                  <mp-text font-size="9px" width="60px">
                    {NPWP number}
                  </mp-text>
                </mp-flex>
              </mp-flex>
            </mp-flex>

            <mp-flex background-color="gray.25" margin-top="3" margin-bottom="1">
              <mp-text font-size="9px" font-weight="semibold" padding="2" width="50%">
                Earnings
              </mp-text>
              <mp-text font-size="9px" font-weight="semibold" padding="2" width="50%">
                Deductions
              </mp-text>
            </mp-flex>

            <mp-flex gap="4" justify-content="space-between">
              <mp-flex flex-direction="column" width="50%">
                <mp-flex v-for="(item, index) in earning" :key="index" justify-content="space-between">
                  <mp-text font-size="9px">
                    {{ item.name }}
                  </mp-text>
                  <mp-text font-size="9px" width="60px" text-align="right">
                    Rp0
                  </mp-text>
                </mp-flex>
                <mp-text font-size="9px" font-weight="semibold" margin-top="1">
                  Additional earnings
                </mp-text>
                <mp-flex justify-content="space-between">
                  <mp-text font-size="9px">
                    Allowance One Time A
                  </mp-text>
                  <mp-text font-size="9px" width="60px" text-align="right">
                    Rp0
                  </mp-text>
                </mp-flex>
                <mp-flex justify-content="space-between">
                  <mp-text font-size="9px">
                    Allowance One Time B
                  </mp-text>
                  <mp-text font-size="9px" width="60px" text-align="right">
                    Rp0
                  </mp-text>
                </mp-flex>
                <mp-flex justify-content="space-between">
                  <mp-text font-size="9px">
                    Allowance One Time C
                  </mp-text>
                  <mp-text font-size="9px" width="60px" text-align="right">
                    Rp0
                  </mp-text>
                </mp-flex>
                <mp-flex justify-content="space-between">
                  <mp-text font-size="9px">
                    Allowance One Time D
                  </mp-text>
                  <mp-text font-size="9px" width="60px" text-align="right">
                    Rp0
                  </mp-text>
                </mp-flex>
              </mp-flex>
              <mp-flex flex-direction="column" width="50%">
                <mp-flex justify-content="space-between">
                  <mp-text font-size="9px">
                    JKK
                  </mp-text>
                  <mp-text font-size="9px" width="60px" text-align="right">
                    Rp0
                  </mp-text>
                </mp-flex>
                <mp-flex justify-content="space-between">
                  <mp-text font-size="9px">
                    JHT Company
                  </mp-text>
                  <mp-text font-size="9px" width="60px" text-align="right">
                    Rp0
                  </mp-text>
                </mp-flex>
                <mp-flex justify-content="space-between">
                  <mp-text font-size="9px">
                    BPJS Kesehatan Company
                  </mp-text>
                  <mp-text font-size="9px" width="60px" text-align="right">
                    Rp0
                  </mp-text>
                </mp-flex>
                <mp-flex justify-content="space-between">
                  <mp-text font-size="9px">
                    JP company
                  </mp-text>
                  <mp-text font-size="9px" width="60px" text-align="right">
                    Rp0
                  </mp-text>
                </mp-flex>
                <mp-text font-size="9px" font-weight="semibold" margin-top="1">
                  Additional earnings
                </mp-text>
                <mp-flex justify-content="space-between">
                  <mp-text font-size="9px">
                    Loan
                  </mp-text>
                  <mp-text font-size="9px" width="60px" text-align="right">
                    Rp0
                  </mp-text>
                </mp-flex>
                <mp-flex justify-content="space-between">
                  <mp-text font-size="9px">
                    Clock in late
                  </mp-text>
                  <mp-text font-size="9px" width="60px" text-align="right">
                    Rp0
                  </mp-text>
                </mp-flex>
              </mp-flex>
            </mp-flex>

            <mp-flex gap="4" background-color="white" margin-top="3" margin-bottom="1">
              <mp-flex justify-content="space-between" width="50%">
                <mp-text font-size="9px" font-weight="semibold">
                  Total earnings
                </mp-text>
                <mp-text font-size="9px" text-align="right">
                  Rp0
                </mp-text>
              </mp-flex>
              <mp-flex justify-content="space-between" width="50%">
                <mp-text font-size="9px" font-weight="semibold">
                  Total deductions
                </mp-text>
                <mp-text font-size="9px" text-align="right">
                  Rp0
                </mp-text>
              </mp-flex>
            </mp-flex>

            <mp-flex v-if="setting.takeHomePay" flex-direction="column" justify-content="center" align-items="center" background-color="gray.25"
              margin-top="3" margin-bottom="1" padding="2">
              <mp-text font-size="9px">
                Total earnings
              </mp-text>
              <mp-text font-size="10px" font-weight="semibold">
                Rp0
              </mp-text>
            </mp-flex>

            <mp-flex gap="4" background-color="white" margin-top="3" margin-bottom="1">
              <mp-text font-size="9px" font-weight="semibold" width="50%">
                Benefits*
              </mp-text>
              <mp-text font-size="9px" font-weight="semibold" width="50%">
                Attendance Summary
              </mp-text>
            </mp-flex>

            <mp-flex gap="4" justify-content="space-between">
              <mp-flex flex-direction="column" width="50%">
                <mp-flex justify-content="space-between">
                  <mp-text font-size="9px">
                    Reimbursement A
                  </mp-text>
                  <mp-text font-size="9px" width="60px" text-align="right">
                    Rp0
                  </mp-text>
                </mp-flex>
                <mp-flex justify-content="space-between">
                  <mp-text font-size="9px">
                    Reimbursement B
                  </mp-text>
                  <mp-text font-size="9px" width="60px" text-align="right">
                    Rp0
                  </mp-text>
                </mp-flex>
                <mp-flex justify-content="space-between">
                  <mp-text font-size="9px">
                    Reimbursement C
                  </mp-text>
                  <mp-text font-size="9px" width="60px" text-align="right">
                    Rp0
                  </mp-text>
                </mp-flex>
                <mp-flex justify-content="space-between">
                  <mp-text font-size="9px">
                    Reimbursement D
                  </mp-text>
                  <mp-text font-size="9px" width="60px" text-align="right">
                    Rp0
                  </mp-text>
                </mp-flex>
              </mp-flex>
              <mp-flex flex-direction="column" width="50%">
                <mp-flex justify-content="space-between">
                  <mp-text font-size="9px">
                    Actual Working Day
                  </mp-text>
                  <mp-text font-size="9px" width="60px" text-align="right">
                    0d
                  </mp-text>
                </mp-flex>
                <mp-flex justify-content="space-between">
                  <mp-text font-size="9px">
                    Schedule Working Day
                  </mp-text>
                  <mp-text font-size="9px" width="60px" text-align="right">
                    0d
                  </mp-text>
                </mp-flex>
                <mp-flex justify-content="space-between">
                  <mp-text font-size="9px">
                    Dayoff
                  </mp-text>
                  <mp-text font-size="9px" width="60px" text-align="right">
                    0d
                  </mp-text>
                </mp-flex>
                <mp-flex justify-content="space-between">
                  <mp-text font-size="9px">
                    National holiday
                  </mp-text>
                  <mp-text font-size="9px" width="60px" text-align="right">
                    0d
                  </mp-text>
                </mp-flex>
              </mp-flex>
            </mp-flex>

            <mp-flex gap="4" background-color="white" margin-top="3" margin-bottom="1">
              <mp-flex direction="column" width="50%">
                <mp-text v-if="setting.notes" font-size="9px" font-weight="semibold">
                  Notes
                </mp-text>
                <mp-text v-if="setting.notes" font-size="9px" color="gray.600" margin-bottom="4">
                  Thank you for your hardwork!
                </mp-text>
              </mp-flex>
              <mp-flex direction="column" width="50%">
                <mp-text v-if="setting.primarySignature" font-size="9px" font-weight="semibold" margin-bottom="4">
                  Signature
                </mp-text>
                <mp-text v-if="setting.primarySignature" font-size="9px" color="gray.600" margin-bottom="4">
                  Signature will appear <br /> here 
                </mp-text>
                <mp-text v-if="setting.primarySignature" font-size="9px">
                  No selected employee
                </mp-text>
              </mp-flex>
            </mp-flex>

            <mp-flex v-if="setting.additionalInfo" gap="4" background-color="white" margin-top="3" margin-bottom="1">
              <mp-text font-size="9px" font-weight="semibold">
                Additional information
              </mp-text>
            </mp-flex>

            <mp-flex v-if="setting.additionalInfo" gap="4" justify-content="space-between">
              <mp-flex flex-direction="column" width="50%">
                <mp-flex justify-content="space-between">
                  <mp-text font-size="9px">
                    Branch
                  </mp-text>
                  <mp-text font-size="9px" width="60px" text-align="right">
                    {Branch name}
                  </mp-text>
                </mp-flex>
              </mp-flex>
              
            </mp-flex>
          </mp-box>
        </mp-tab-panel>
        <mp-tab-panel>
          <mp-text>-</mp-text>
        </mp-tab-panel>
      </mp-tab-panels>
    </mp-tabs>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpText,
  MpTabs,
  MpTabList,
  MpTab,
  MpTabPanels,
  MpTabPanel,
} from "@mekari/pixel";
export default {
  name: "CreatePayslipSetting3",
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpTabs,
    MpTabList,
    MpTab,
    MpTabPanels,
    MpTabPanel,
  },
  props: {
    setting: [Object],
    earning: [Array]
  }
};
</script>