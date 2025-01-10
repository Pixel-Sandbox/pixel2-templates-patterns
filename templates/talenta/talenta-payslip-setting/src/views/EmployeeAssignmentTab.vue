<template>
  <mp-box>
    <mp-flex justify-content="space-between" margin-top="6">
      <mp-box>
        <mp-heading as="h3" font-size="lg">
          Assigned employees
          <mp-heading as="h3" display="inline-flex" color="gray.600" font-weight="regular" font-size="lg">
            (90 employees)
          </mp-heading>
        </mp-heading>
        <mp-text color="gray.600" margin-bottom="5">
          Employees will receive this payslip template.
        </mp-text>
      </mp-box>
      <mp-button variant="outline">
        <mp-icon name="edit" variant="duotone" size="sm" margin-right="2" />
        Update employee
      </mp-button>
    </mp-flex>

    <mp-flex justify-content="space-between" align-items="center" margin-bottom="6">
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

    <mp-table-container width="full" max-width="full" overflow="scroll">
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
            <mp-table-cell-lite as="th">
              Employment status
              <mp-icon name="sort-default" />
            </mp-table-cell-lite>
          </mp-table-row-lite>
        </mp-table-head-lite>
        <mp-table-body-lite>
          <mp-table-row-lite v-for="(_, index) in 5" :key="index">
            <mp-table-cell-lite as="td">
              <mp-box display="inline-flex" align-items="center">
                <mp-avatar name="Jessie Tan" background-color="stone" />
                <mp-flex flex-direction="column" align-items="flex-start">
                  <mp-text margin-left="4">
                    Jessie Tan
                  </mp-text>
                  <mp-text color="gray.600" font-size="sm" margin-left="4">
                    CP092 | Sales Representative
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
          </mp-table-row-lite>
        </mp-table-body-lite>
      </mp-table-lite>
    </mp-table-container>

    <Pagination />
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
  MpInput,
  MpInputGroup,
  MpInputLeftAddon,
  MpIcon,
  MpAvatar,
  MpTableContainer,
  MpTableLite,
  MpTableHeadLite,
  MpTableBodyLite,
  MpTableRowLite,
  MpTableCellLite,
  MpSelect,
} from "@mekari/pixel"
import Pagination from "../components/Pagination"

export default {
  name: "EmployeeAssignmentTab",
  components: {
    MpBox,
    MpFlex,
    MpHeading,
    MpText,
    MpButtonIcon,
    MpButton,
    MpInput,
    MpInputGroup,
    MpInputLeftAddon,
    MpIcon,
    MpAvatar,
    MpTableContainer,
    MpTableLite,
    MpTableHeadLite,
    MpTableBodyLite,
    MpTableRowLite,
    MpTableCellLite,
    MpSelect,
    Pagination
  }
}
</script>