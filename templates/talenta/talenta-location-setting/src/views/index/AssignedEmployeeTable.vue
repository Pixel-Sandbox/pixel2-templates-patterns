<template>
  <mp-box>
    <mp-table-container width="full" max-width="full" overflow="scroll">
      <mp-table>
        <mp-table-head>
          <mp-table-row cursor="pointer">
            <mp-table-cell as="th">
              Employee
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Employee ID
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Job potision
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Branch
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Location setting
              <mp-icon name="sort-default" />
            </mp-table-cell>
          </mp-table-row>
        </mp-table-head>
        <mp-table-body>
          <mp-table-row>
            <mp-table-cell as="td">
              <mp-box display="inline-flex" align-items="center">
                <mp-avatar name="Ridwan Hanif" />
                <mp-text margin-left="4">Ridwan Hanif</mp-text>
              </mp-box>
            </mp-table-cell>
            <mp-table-cell as="td">EMP2022</mp-table-cell>
            <mp-table-cell as="td">Personalian Department</mp-table-cell>
            <mp-table-cell as="td">PT. Digital Talenta</mp-table-cell>
            <mp-table-cell as="td">Jakarta HQ</mp-table-cell>
          </mp-table-row>
          <mp-table-row>
            <mp-table-cell as="td">
              <mp-box display="inline-flex" align-items="center">
                <mp-avatar name="Boyke Sumanjaya" />
                <mp-text margin-left="4">Boyke Sumanjaya</mp-text>
              </mp-box>
            </mp-table-cell>
            <mp-table-cell as="td">EMP2023</mp-table-cell>
            <mp-table-cell as="td">Account Executive</mp-table-cell>
            <mp-table-cell as="td">PT. Digital Talenta</mp-table-cell>
            <mp-table-cell as="td">Jakarta HQ</mp-table-cell>
          </mp-table-row>
          <mp-table-row>
            <mp-table-cell as="td">
              <mp-box display="inline-flex" align-items="center">
                <mp-avatar name="Fikka Rhesy" />
                <mp-text margin-left="4">Fikka Rhesy</mp-text>
              </mp-box>
            </mp-table-cell>
            <mp-table-cell as="td">EMP2024</mp-table-cell>
            <mp-table-cell as="td">People Development</mp-table-cell>
            <mp-table-cell as="td">PT. Digital Talenta</mp-table-cell>
            <mp-table-cell as="td">Jakarta HQ</mp-table-cell>
          </mp-table-row>
          <mp-table-row>
            <mp-table-cell as="td">
              <mp-box display="inline-flex" align-items="center">
                <mp-avatar name="Dirga Prakesha" />
                <mp-text margin-left="4">Dirga Prakesha</mp-text>
              </mp-box>
            </mp-table-cell>
            <mp-table-cell as="td">EMP2025</mp-table-cell>
            <mp-table-cell as="td">People Development</mp-table-cell>
            <mp-table-cell as="td">PT. Digital Talenta</mp-table-cell>
            <mp-table-cell as="td">Jakarta HQ</mp-table-cell>
          </mp-table-row>
          <mp-table-row>
            <mp-table-cell as="td">
              <mp-box display="inline-flex" align-items="center">
                <mp-avatar name="Eki Pratama" />
                <mp-text margin-left="4">Eki Pratama</mp-text>
              </mp-box>
            </mp-table-cell>
            <mp-table-cell as="td">EMP2026</mp-table-cell>
            <mp-table-cell as="td">People Development</mp-table-cell>
            <mp-table-cell as="td">PT. Digital Talenta</mp-table-cell>
            <mp-table-cell as="td">Jakarta HQ</mp-table-cell>
          </mp-table-row>
        </mp-table-body>
      </mp-table>
    </mp-table-container>

    <AssignedEmployeePagination />
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpIcon,
  MpText,
  MpAvatar,
  MpTableContainer,
  MpTable,
  MpTableHead,
  MpTableBody,
  MpTableRow,
  MpTableCell,
} from "@mekari/pixel";
import AssignedEmployeePagination from "./AssignedEmployeePagination";

export default {
  name: "AssignedEmployeeTable",
  components: {
    MpBox,
    MpIcon,
    MpText,
    MpAvatar,
    MpTableContainer,
    MpTable,
    MpTableHead,
    MpTableBody,
    MpTableRow,
    MpTableCell,
    AssignedEmployeePagination,
  },
  data: function () {
    return {
      checks: [false, false, false, false, false],
    };
  },
  computed: {
    checkAll: function () {
      return this.checks.every(Boolean);
    },
    isIndeterminate: function () {
      return this.checks.some(Boolean) && !this.checkAll;
    },
  },
  methods: {
    resetAll: function () {
      this.checks = [false, false, false, false, false];
    },
  },
};
</script>