<template>
  <mp-box>
    <mp-table-container width="full" max-width="full" overflow="scroll">
      <mp-table>
        <mp-table-head>
          <mp-table-row cursor="pointer">
            <mp-table-cell as="th">
              Emp ID
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Full name
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Branch
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Organization
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Cost center
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th" colspan="2">
              Cost center category
              <mp-icon name="sort-default" />
            </mp-table-cell>
          </mp-table-row>
        </mp-table-head>
        <mp-table-body>
          <mp-table-row>
            <mp-table-cell as="td">EMP2022</mp-table-cell>
            <mp-table-cell as="td">Ridwan Hanif</mp-table-cell>
            <mp-table-cell as="td">PT. Digital Talenta</mp-table-cell>
            <mp-table-cell as="td">Personalian Department</mp-table-cell>
            <mp-table-cell as="td">1000001 - Sales</mp-table-cell>
            <mp-table-cell as="td">Direct</mp-table-cell>
            <mp-table-cell as="td" text-align="right">
              <mp-tooltip label="Edit" position="left">
                <mp-button-icon name="edit" size="sm" />
              </mp-tooltip>
            </mp-table-cell>
          </mp-table-row>
          <mp-table-row>
            <mp-table-cell as="td">EMP2023</mp-table-cell>
            <mp-table-cell as="td">Boyke Sumanjaya</mp-table-cell>
            <mp-table-cell as="td">PT. Digital Talenta</mp-table-cell>
            <mp-table-cell as="td">Account Executive</mp-table-cell>
            <mp-table-cell as="td">1000001 - Sales</mp-table-cell>
            <mp-table-cell as="td">Direct</mp-table-cell>
            <mp-table-cell as="td" text-align="right">
              <mp-tooltip label="Edit" position="left">
                <mp-button-icon name="edit" size="sm" />
              </mp-tooltip>
            </mp-table-cell>
          </mp-table-row>
          <mp-table-row>
            <mp-table-cell as="td">EMP2024</mp-table-cell>
            <mp-table-cell as="td">Fikka Rhesy</mp-table-cell>
            <mp-table-cell as="td">PT. Digital Talenta</mp-table-cell>
            <mp-table-cell as="td">People Development</mp-table-cell>
            <mp-table-cell as="td">1000001 - Sales</mp-table-cell>
            <mp-table-cell as="td">Direct</mp-table-cell>
            <mp-table-cell as="td" text-align="right">
              <mp-tooltip label="Edit" position="left">
                <mp-button-icon name="edit" size="sm" />
              </mp-tooltip>
            </mp-table-cell>
          </mp-table-row>
          <mp-table-row>
            <mp-table-cell as="td">EMP2025</mp-table-cell>
            <mp-table-cell as="td">Dirga Prakesha</mp-table-cell>
            <mp-table-cell as="td">PT. Digital Talenta</mp-table-cell>
            <mp-table-cell as="td">People Development</mp-table-cell>
            <mp-table-cell as="td">1000001 - Sales</mp-table-cell>
            <mp-table-cell as="td">In-direct</mp-table-cell>
            <mp-table-cell as="td" text-align="right">
              <mp-tooltip label="Edit" position="left">
                <mp-button-icon name="edit" size="sm" />
              </mp-tooltip>
            </mp-table-cell>
          </mp-table-row>
          <mp-table-row>
            <mp-table-cell as="td">EMP2026</mp-table-cell>
            <mp-table-cell as="td">Eki Pratama</mp-table-cell>
            <mp-table-cell as="td">PT. Digital Talenta</mp-table-cell>
            <mp-table-cell as="td">People Development</mp-table-cell>
            <mp-table-cell as="td">1000001 - Sales</mp-table-cell>
            <mp-table-cell as="td">In-direct</mp-table-cell>
            <mp-table-cell as="td" text-align="right">
              <mp-tooltip label="Edit" position="left">
                <mp-button-icon name="edit" size="sm" />
              </mp-tooltip>
            </mp-table-cell>
          </mp-table-row>
        </mp-table-body>
      </mp-table>
    </mp-table-container>

    <CostCenterPagination />
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpIcon,
  MpButtonIcon,
  MpTooltip,
  MpTableContainer,
  MpTable,
  MpTableHead,
  MpTableBody,
  MpTableRow,
  MpTableCell,
} from "@mekari/pixel";
import CostCenterPagination from "./CostCenterPagination";

export default {
  name: "CostCenterTable",
  components: {
    MpBox,
    MpIcon,
    MpButtonIcon,
    MpTooltip,
    MpTableContainer,
    MpTable,
    MpTableHead,
    MpTableBody,
    MpTableRow,
    MpTableCell,
    CostCenterPagination,
  },
};
</script>