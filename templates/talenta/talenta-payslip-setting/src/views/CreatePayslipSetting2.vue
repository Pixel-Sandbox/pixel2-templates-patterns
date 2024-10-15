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
            <StepItem id="1" label="Payslip information" is-completed />
            <StepItem id="2" label="Employee assignment" is-current />
            <StepItem id="3" label="Payslip customization" is-disabled is-last />
          </Step>

          <mp-box :width="selectedData.length === 0 ? '610px' : 'full'">
            <mp-flex justify-content="space-between" margin-top="6">
              <mp-box>
                <mp-heading as="h2" font-size="xl">
                  Employee assignment
                </mp-heading>
                <mp-text color="gray.600" margin-bottom="5">
                  Assign employees to this payslip template for their payroll.
                </mp-text>
              </mp-box>
              <mp-button variant="outline" @click="handleOpen">Assign employee</mp-button>
            </mp-flex>

            <mp-flex v-if="selectedData.length !== 0" justify-content="space-between" align-items="center" margin-bottom="6">
              <mp-flex gap="4" align-items="center">
                <mp-box width="160px">
                  <mp-select value="all">
                    <option value="all">All branch</option>
                  </mp-select>
                </mp-box>
                <mp-button variant="link">
                  All filters
                </mp-button>
              </mp-flex>

              <mp-flex gap="2">
                <mp-button-icon name="column-settings" size="md" />
                <mp-input-group width="240px">
                  <mp-input-left-addon :with-background="false">
                    <mp-icon name="search" size="sm" />
                  </mp-input-left-addon>
                  <mp-input placeholder="Search..." />
                </mp-input-group>
              </mp-flex>
            </mp-flex>

            <mp-table-container v-if="selectedData.length !== 0" width="full" max-width="full" overflow="scroll">
              <mp-table-lite>
                <mp-table-head-lite>
                  <mp-table-row-lite cursor="pointer">
                    <mp-table-cell-lite as="th">
                      Employee name
                      <mp-icon name="sort-default" />
                    </mp-table-cell-lite>
                    <mp-table-cell-lite as="th">
                      Branch
                      <mp-icon name="sort-default" />
                    </mp-table-cell-lite>
                    <mp-table-cell-lite as="th">
                      Organization
                      <mp-icon name="sort-default" />
                    </mp-table-cell-lite>
                    <mp-table-cell-lite as="th">
                      Job level
                      <mp-icon name="sort-default" />
                    </mp-table-cell-lite>
                    <mp-table-cell-lite as="th" colspan="2">
                      Employment status
                      <mp-icon name="sort-default" />
                    </mp-table-cell-lite>
                  </mp-table-row-lite>
                </mp-table-head-lite>
                <mp-table-body-lite>
                  <mp-table-row-lite v-for="(item, index) in selectedData" :key="index">
                    <mp-table-cell-lite as="td">
                      <mp-box display="inline-flex" align-items="center">
                        <mp-avatar :name="item.name" background-color="stone" />
                        <mp-flex flex-direction="column" align-items="flex-start">
                          <mp-text margin-left="4">
                            {{ item.name }}
                          </mp-text>
                          <mp-text color="gray.600" font-size="sm" margin-left="4">
                            {{ item.extra }}
                          </mp-text>
                        </mp-flex>
                      </mp-box>
                    </mp-table-cell-lite>
                    <mp-table-cell-lite as="td">
                      Kantor Pusat
                    </mp-table-cell-lite>
                    <mp-table-cell-lite as="td">
                      Sales
                    </mp-table-cell-lite>
                    <mp-table-cell-lite as="td">
                      Staff
                    </mp-table-cell-lite>
                    <mp-table-cell-lite as="td">
                      Contract
                    </mp-table-cell-lite>
                    <mp-table-cell-lite as="td" text-align="end">
                      <mp-button-icon name="minus-circular" size="md" v-mp-tooltip="'Remove'" />
                    </mp-table-cell-lite>
                  </mp-table-row-lite>
                </mp-table-body-lite>
              </mp-table-lite>
            </mp-table-container>

            <Pagination v-if="selectedData.length !== 0" />

            <assign-employee :isDrawerOpen="isOpen" :handleDrawerOpen="handleOpen" :handleDrawerClose="handleClose"
              @update-data="handleUpdateData" />

            <mp-flex gap="2" justify-content="flex-end" margin-top="12">
              <mp-button variant="ghost" as="router-link" to="/">Cancel</mp-button>
              <mp-button variant="outline" as="router-link" to="/create/step-1">Back</mp-button>
              <mp-button as="router-link" to="/create/step-3">Continue</mp-button>
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
  MpButtonIcon,
  MpIcon,
  MpSelect,
  MpAvatar,
  MpInput,
  MpInputGroup,
  MpInputLeftAddon,
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
import Pagination from "../components/Pagination.vue";
import AssignEmployee from "../components/AssignEmployee"

export default {
  name: "CreatePayslipSetting2",
  components: {
    MpBox,
    MpFlex,
    MpHeading,
    MpText,
    MpButton,
    MpButtonIcon,
    MpIcon,
    MpSelect,
    MpAvatar,
    MpInput,
    MpInputGroup,
    MpInputLeftAddon,
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
    Pagination,
    AssignEmployee
  },
  data() {
    return {
      isOpen: false,
      selectedData: []
    };
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