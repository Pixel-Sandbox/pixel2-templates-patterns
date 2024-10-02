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
            <StepItem id="1" label="Structure information" is-completed />
            <StepItem id="2" label="Criteria & benchmark" is-completed />
            <StepItem id="3" label="Method & structure" is-current is-last />
          </Step>

          <mp-box float="right" width="456px" margin-top="6">
            <mp-text font-weight="semibold">Source benchmark data</mp-text>
            <mp-box margin-bottom="6" padding="4" background-color="gray.25">
              <mp-text font-weight="semibold">
                Talenta benchmark salary
              </mp-text>
              <mp-text color="gray.600">
               Benchmark salary from your similar industry within Talenta.
               <mp-text display="inline-flex" is-link>Learn more</mp-text>
              </mp-text>
              <mp-text margin-top="4" is-link>Change benchmark data</mp-text>
            </mp-box>
          </mp-box>

          <mp-box width="552px">
            <mp-heading as="h2" font-size="xl" margin-top="6">
              Calibration method
            </mp-heading>
            <mp-text color="gray.600" margin-bottom="5">
              Calibrate the structure with a few method below.
            </mp-text>

            <mp-toggle margin-bottom="4" v-model="isToggleForm">
              Adjust structure
            </mp-toggle>

            <mp-box v-if="isToggleForm">
              <mp-text font-weight="semibold">Method</mp-text>
              
              <mp-radio-group v-model="option" position="relative">
                <mp-radio value="option-1">
                  Spread percentage
                  <mp-icon name="info" size="sm" margin-left="2" />
                  <template #description>
                    By multiply to spread percentage. Formulated based on salary strucuture KEPMEN 49 Tahun 2004. 
                    <mp-text display="inline-flex" is-link>Learn more</mp-text>
                  </template>
                </mp-radio>
                <mp-radio value="option-2">
                  Target percentile of benchmark data
                  <mp-icon name="info" size="sm" margin-left="2" />
                  <template  #description>
                    By multiply target percentile of benchmark data. 
                    <mp-text display="inline-flex" is-link>Learn more</mp-text>
                    <mp-collapse v-if="option === 'option-2'" :is-open="isToggleTargetControl" width="280px" margin-top="4">
                      <mp-form-control control-id="target-min-salary" :is-disabled="!isMinTargetChecked">
                        <mp-form-label color="dark">Target min. salary</mp-form-label>
                        <mp-input-group>
                          <mp-input v-model="minTargetValue" type="number"  />
                          <mp-input-right-addon>
                            <mp-text font-weight="bold" padding-x="3">
                              %
                            </mp-text>
                          </mp-input-right-addon>
                        </mp-input-group>
                        <mp-form-help-text>Determining the percentage difference from the benchmark data for the minimum range.</mp-form-help-text>
                      </mp-form-control>
                      <mp-checkbox margin-top="3" v-model="isMinTargetChecked">
                        Set target for all min. salary range
                      </mp-checkbox>

                      <mp-form-control control-id="target-mid-salary" :is-disabled="!isMidTargetChecked" margin-top="4">
                        <mp-form-label color="dark">Target mid. salary</mp-form-label>
                        <mp-input-group>
                          <mp-input v-model="midTargetValue" type="number" />
                          <mp-input-right-addon>
                            <mp-text font-weight="bold" padding-x="3">
                              %
                            </mp-text>
                          </mp-input-right-addon>
                        </mp-input-group>
                        <mp-form-help-text>Determining the percentage difference from the benchmark data for the midpoint range.</mp-form-help-text>
                      </mp-form-control>
                      <mp-checkbox margin-top="3" v-model="isMidTargetChecked">
                        Set target for all mid. salary range
                      </mp-checkbox>

                      <mp-form-control control-id="target-max-salary" :is-disabled="!isMaxTargetChecked" margin-top="4">
                        <mp-form-label color="dark">Target max. salary</mp-form-label>
                        <mp-input-group>
                          <mp-input  v-model="maxTargetValue" type="number" />
                          <mp-input-right-addon>
                            <mp-text font-weight="bold" padding-x="3">
                              %
                            </mp-text>
                          </mp-input-right-addon>
                        </mp-input-group>
                        <mp-form-help-text>Determining the percentage difference from the benchmark data for the maximum range.</mp-form-help-text>
                      </mp-form-control>
                      <mp-checkbox margin-top="3" v-model="isMaxTargetChecked">
                        Set target for all max. salary range
                      </mp-checkbox>
                    </mp-collapse>
                    <mp-button v-if="option === 'option-2'" variant="link" margin-top="3" @click="onToggle">See {{ isToggleTargetControl ? 'less' : 'more' }} target control</mp-button>
                  </template>
                </mp-radio>
                <mp-radio value="option-3">
                  Target percentile of actual salary
                  <mp-icon name="info" size="sm" margin-left="2" />
                  <template #description>
                    By multiply target percentile of actual salary.
                    <mp-text display="inline-flex" is-link>Learn more</mp-text>
                  </template>
                </mp-radio>
                <mp-radio value="option-4">
                  Custom amount
                  <template #description>
                    By setting target amount salary on each range.
                    <mp-text display="inline-flex" is-link>Learn more</mp-text>
                  </template>
                </mp-radio>
              </mp-radio-group>
            </mp-box>
          </mp-box>

          <mp-heading as="h2" font-size="xl" margin-top="6">
            Review structure
          </mp-heading>
          <mp-text color="gray.600" margin-bottom="5">
            Aggregated from 4 selected organizational unit and salary benchmark data.
          </mp-text>

          <mp-flex justify-content="space-between" margin-bottom="6">
            <mp-flex gap="4">
              <mp-button variant="outline" @click="onModalOpen">
                Import structure
              </mp-button>
              <mp-box width="160px">
                <mp-select value="all">
                  <option value="all">All job level</option>
                </mp-select>
              </mp-box>
            </mp-flex>

            <mp-flex gap="2">
              <mp-button-icon name="column-settings" size="md" />
              <mp-button-icon name="upload" size="md" />
            </mp-flex>
          </mp-flex>

          <mp-table-container width="full" max-width="full" overflow="scroll">
            <mp-table-lite>
              <mp-table-head-lite>
                <mp-table-row-lite>
                  <mp-table-cell-lite colspan="8" as="th">
                    Jakarta
                  </mp-table-cell-lite>
                </mp-table-row-lite>
              </mp-table-head-lite>
              <mp-table-head-lite>
                <mp-table-row-lite>
                  <mp-table-cell-lite colspan="8" as="th">
                    Customer Experience
                  </mp-table-cell-lite>
                </mp-table-row-lite>
              </mp-table-head-lite>
              <mp-table-head-lite>
                <mp-table-row-lite>
                  <mp-table-cell-lite colspan="8" as="th">
                    Customer Support
                  </mp-table-cell-lite>
                </mp-table-row-lite>
              </mp-table-head-lite>
              <mp-table-head-lite>
                <mp-table-row-lite cursor="pointer">
                  <mp-table-cell-lite width="100px" min-width="150px" as="th">
                    Job level
                    <mp-icon name="sort-default" />
                  </mp-table-cell-lite>
                  <mp-table-cell-lite width="100px" min-width="100px" as="th">
                    Salary benchmark
                    <mp-icon name="sort-default" />
                  </mp-table-cell-lite>
                  <mp-table-cell-lite width="100px" min-width="100px" as="th">
                    Actual min. salary
                    <mp-icon name="sort-default" />
                  </mp-table-cell-lite>
                  <mp-table-cell-lite width="100px" min-width="100px" as="th">
                    Target min. salary (Rp)
                    <mp-icon name="sort-default" />
                  </mp-table-cell-lite>
                  <mp-table-cell-lite width="100px" min-width="100px" as="th">
                    Actual mid. salary
                    <mp-icon name="sort-default" />
                  </mp-table-cell-lite>
                  <mp-table-cell-lite width="100px" min-width="100px" as="th">
                    Target mid. salary (Rp)
                    <mp-icon name="sort-default" />
                  </mp-table-cell-lite>
                  <mp-table-cell-lite width="100px" min-width="100px" as="th">
                    Actual max. salary
                    <mp-icon name="sort-default" />
                  </mp-table-cell-lite>
                  <mp-table-cell-lite width="100px" min-width="100px" as="th">
                    Target max. salary (Rp)
                    <mp-icon name="sort-default" />
                  </mp-table-cell-lite>
                </mp-table-row-lite>
              </mp-table-head-lite>
              <mp-table-body-lite>
                <mp-table-row-lite v-for="(_, index) in 5" :key="index">
                  <mp-table-cell-lite as="td">
                    Head
                  </mp-table-cell-lite>
                  <mp-table-cell-lite text-align="right" as="td">
                    Rp15.000.000
                  </mp-table-cell-lite>
                  <mp-table-cell-lite text-align="right" background-color="green.50" as="td">
                    Rp16.000.000
                  </mp-table-cell-lite>
                  <mp-table-cell-lite v-if="option === 'option-2'" as="td">
                    <mp-input-group>
                      <mp-input type="number" :value="minTargetValue" :is-disabled="isMinTargetChecked" />
                      <mp-input-right-addon>
                        <mp-text font-weight="bold" padding-x="3">
                          %
                        </mp-text>
                      </mp-input-right-addon>
                    </mp-input-group>
                  </mp-table-cell-lite>
                  <mp-table-cell-lite v-else text-align="right" background-color="green.50" as="td">
                    Rp16.000.000
                  </mp-table-cell-lite>
                  <mp-table-cell-lite text-align="right" background-color="orange.50" as="td">
                    Rp18.500.000
                  </mp-table-cell-lite>
                  <mp-table-cell-lite v-if="option === 'option-2'" as="td">
                    <mp-input-group>
                      <mp-input type="number" :value="midTargetValue" :is-disabled="isMidTargetChecked"  />
                      <mp-input-right-addon>
                        <mp-text font-weight="bold" padding-x="3">
                          %
                        </mp-text>
                      </mp-input-right-addon>
                    </mp-input-group>
                  </mp-table-cell-lite>
                  <mp-table-cell-lite v-else text-align="right" background-color="orange.50" as="td">
                    Rp18.500.000
                  </mp-table-cell-lite>
                  <mp-table-cell-lite text-align="right" background-color="red.50" as="td">
                    Rp20.000.000
                  </mp-table-cell-lite>
                  <mp-table-cell-lite v-if="option === 'option-2'" as="td">
                    <mp-input-group>
                      <mp-input type="number" :value="maxTargetValue" :is-disabled="isMaxTargetChecked"  />
                      <mp-input-right-addon>
                        <mp-text font-weight="bold" padding-x="3">
                          %
                        </mp-text>
                      </mp-input-right-addon>
                    </mp-input-group>
                  </mp-table-cell-lite>
                  <mp-table-cell-lite v-else text-align="right" background-color="red.50" as="td">
                    Rp20.000.000
                  </mp-table-cell-lite>
                </mp-table-row-lite>
              </mp-table-body-lite>
            </mp-table-lite>
          </mp-table-container>

          <mp-flex gap="2" justify-content="flex-end" margin-top="12">
            <mp-button variant="ghost" as="router-link" to="/">Cancel</mp-button>
            <mp-button variant="outline" as="router-link" to="/create/step-2">Back</mp-button>
            <mp-button as="router-link" to="/detail">Create structure</mp-button>
          </mp-flex>

          <CreateSalaryStructure3Modal 
            :isOpen="isOpen"
            :onClose="onModalClose"
            @update-modal-close-all="onModalClose"
          />
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
  MpButtonIcon,
  MpToggle,
  MpCheckbox,
  MpRadio, 
  MpRadioGroup,
  MpIcon,
  MpCollapse,
  MpFormControl,
  MpFormLabel,
  MpFormHelpText,
  MpSelect,
  MpInput,
  MpInputGroup,
  MpInputRightAddon,
  MpTableContainer,
  MpTableLite,
  MpTableHeadLite,
  MpTableBodyLite,
  MpTableRowLite,
  MpTableCellLite,
} from "@mekari/pixel";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Step from "../components/Step";
import StepItem from "../components/StepItem";
import CreateSalaryStructure3Modal from './CreateSalaryStructure3Modal.vue'

export default {
  name: "CreateSalaryStructure3",
  components: {
    MpBox,
    MpFlex,
    MpHeading,
    MpText,
    MpButton,
    MpButtonIcon,
    MpToggle,
    MpCheckbox,
    MpRadio, 
    MpRadioGroup,
    MpIcon,
    MpCollapse,
    MpFormControl,
    MpFormLabel,
    MpFormHelpText,
    MpSelect,
    MpInput,
    MpInputGroup,
    MpInputRightAddon,
    MpTableContainer,
    MpTableLite,
    MpTableHeadLite,
    MpTableBodyLite,
    MpTableRowLite,
    MpTableCellLite,
    Header,
    Sidebar,
    Step,
    StepItem,
    CreateSalaryStructure3Modal
  },
  data: function () {
    return {
      option: 'option-2',
      isToggleTargetControl: true,
      isToggleForm: true,
      isMinTargetChecked: true,
      minTargetValue: 0,
      isMidTargetChecked: true,
      midTargetValue: 0,
      isMaxTargetChecked: true,
      maxTargetValue: 0,
      isOpen: false
    }
  },
  methods: {
    onToggle() {
      this.isToggleTargetControl = !this.isToggleTargetControl
    },
    onModalOpen() {
      this.isOpen = true
    },
    onModalClose() {
      this.isOpen = false
    }
  }
};
</script>