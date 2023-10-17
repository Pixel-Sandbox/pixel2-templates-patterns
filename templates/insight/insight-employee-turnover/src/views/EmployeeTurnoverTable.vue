<template>
  <mp-box>
    <mp-table-container width="full" max-width="full" overflow="scroll">
      <mp-table>
        <mp-table-head>
          <mp-table-row cursor="pointer">
            <mp-table-cell as="th">
              Employee name
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Employee ID
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Resignation date
              <mp-tooltip
                label="Effective date when employee apply resignation."
              >
                <mp-icon name="info" size="sm" />
              </mp-tooltip>
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Resignation type
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Resignation reason
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
              Job level
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Job position
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Grade
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Class
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Employement status
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Approval line name
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Approval line ID
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Join date
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Transfer date
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Working period
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Gender
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Age
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Latest education
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Religion
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Marital status
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              PTKP status
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Total reprimand
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Reprimand type
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Reprimand status
              <mp-icon name="sort-default" />
            </mp-table-cell>
          </mp-table-row>
        </mp-table-head>
        <mp-table-body>
          <mp-table-row>
            <mp-table-cell as="td">
              <mp-box display="inline-flex" align-items="center">
                <mp-avatar name="Ali Imran" />
                <mp-text margin-left="4">Ali Imran</mp-text>
              </mp-box>
            </mp-table-cell>
            <mp-table-cell as="td">CP-0203</mp-table-cell>
            <mp-table-cell as="td">21 Nov 2021</mp-table-cell>
            <mp-table-cell as="td">Involuntary</mp-table-cell>
            <mp-table-cell as="td">
              Mengundurkan diri tanpa tekanan
            </mp-table-cell>
            <mp-table-cell as="td">Jakarta</mp-table-cell>
            <mp-table-cell as="td">Finance</mp-table-cell>
            <mp-table-cell as="td">Manager</mp-table-cell>
            <mp-table-cell as="td">Financial Sales Assistant</mp-table-cell>
            <mp-table-cell as="td">1</mp-table-cell>
            <mp-table-cell as="td">Class 1</mp-table-cell>
            <mp-table-cell as="td">Permanent</mp-table-cell>
            <mp-table-cell as="td">CP-0001</mp-table-cell>
            <mp-table-cell as="td">1 Jan 2020</mp-table-cell>
            <mp-table-cell as="td">1 Year 10 Month 10 Day</mp-table-cell>
            <mp-table-cell as="td">-</mp-table-cell>
            <mp-table-cell as="td">1 Year 10 Month 10 Day</mp-table-cell>
            <mp-table-cell as="td">Male</mp-table-cell>
            <mp-table-cell as="td">31</mp-table-cell>
            <mp-table-cell as="td">S1</mp-table-cell>
            <mp-table-cell as="td">Muslim</mp-table-cell>
            <mp-table-cell as="td">Married</mp-table-cell>
            <mp-table-cell as="td">K/0</mp-table-cell>
            <mp-table-cell as="td">1</mp-table-cell>
            <mp-table-cell as="td">SP 1</mp-table-cell>
            <mp-table-cell as="td">Active</mp-table-cell>
          </mp-table-row>
          <mp-table-row>
            <mp-table-cell as="td">
              <mp-box display="inline-flex" align-items="center">
                <mp-avatar name="Christin Purnama Sari" />
                <mp-text margin-left="4">Christin Purnama Sari</mp-text>
              </mp-box>
            </mp-table-cell>
            <mp-table-cell as="td">CP-4758</mp-table-cell>
            <mp-table-cell as="td">21 Nov 2021</mp-table-cell>
            <mp-table-cell as="td">Involuntary</mp-table-cell>
            <mp-table-cell as="td">
              Mengundurkan diri tanpa tekanan
            </mp-table-cell>
            <mp-table-cell as="td">Jakarta</mp-table-cell>
            <mp-table-cell as="td">Development</mp-table-cell>
            <mp-table-cell as="td">Senior</mp-table-cell>
            <mp-table-cell as="td">Software Developer</mp-table-cell>
            <mp-table-cell as="td">2</mp-table-cell>
            <mp-table-cell as="td">Class 1</mp-table-cell>
            <mp-table-cell as="td">Permanent</mp-table-cell>
            <mp-table-cell as="td">CP-1021</mp-table-cell>
            <mp-table-cell as="td">1 Jan 2020</mp-table-cell>
            <mp-table-cell as="td">1 Year 11 Month 1 Day</mp-table-cell>
            <mp-table-cell as="td">-</mp-table-cell>
            <mp-table-cell as="td">1 Year 10 Month 10 Day</mp-table-cell>
            <mp-table-cell as="td">Female</mp-table-cell>
            <mp-table-cell as="td">31</mp-table-cell>
            <mp-table-cell as="td">S1</mp-table-cell>
            <mp-table-cell as="td">Christianity</mp-table-cell>
            <mp-table-cell as="td">Married</mp-table-cell>
            <mp-table-cell as="td">K/0</mp-table-cell>
            <mp-table-cell as="td">0</mp-table-cell>
            <mp-table-cell as="td">-</mp-table-cell>
            <mp-table-cell as="td">-</mp-table-cell>
          </mp-table-row>
          <mp-table-row>
            <mp-table-cell as="td">
              <mp-box display="inline-flex" align-items="center">
                <mp-avatar name="Alfian Ramadhan" />
                <mp-text margin-left="4">Alfian Ramadhan</mp-text>
              </mp-box>
            </mp-table-cell>
            <mp-table-cell as="td">CP-1021</mp-table-cell>
            <mp-table-cell as="td">21 Nov 2021</mp-table-cell>
            <mp-table-cell as="td">Involuntary</mp-table-cell>
            <mp-table-cell as="td">
              Pekerja memasuki usia pensiun
            </mp-table-cell>
            <mp-table-cell as="td">Jakarta</mp-table-cell>
            <mp-table-cell as="td">Product</mp-table-cell>
            <mp-table-cell as="td">Manager</mp-table-cell>
            <mp-table-cell as="td">Team Leader</mp-table-cell>
            <mp-table-cell as="td">1</mp-table-cell>
            <mp-table-cell as="td">Class 2</mp-table-cell>
            <mp-table-cell as="td">Permanent</mp-table-cell>
            <mp-table-cell as="td">CP-0001</mp-table-cell>
            <mp-table-cell as="td">1 Jan 2020</mp-table-cell>
            <mp-table-cell as="td">1 Year 10 Month 10 Day</mp-table-cell>
            <mp-table-cell as="td">-</mp-table-cell>
            <mp-table-cell as="td">1 Year 10 Month 10 Day</mp-table-cell>
            <mp-table-cell as="td">Male</mp-table-cell>
            <mp-table-cell as="td">31</mp-table-cell>
            <mp-table-cell as="td">S1</mp-table-cell>
            <mp-table-cell as="td">Muslim</mp-table-cell>
            <mp-table-cell as="td">Married</mp-table-cell>
            <mp-table-cell as="td">K/0</mp-table-cell>
            <mp-table-cell as="td">1</mp-table-cell>
            <mp-table-cell as="td">SP 1</mp-table-cell>
            <mp-table-cell as="td">Active</mp-table-cell>
          </mp-table-row>

          <mp-table-row v-for="item in items" :key="item">
            <mp-table-cell as="td">
              <mp-box display="inline-flex" align-items="center">
                <mp-avatar name="-" />
                <mp-text margin-left="4">-</mp-text>
              </mp-box>
            </mp-table-cell>
            <mp-table-cell as="td">CP-000{{ item }}</mp-table-cell>
            <mp-table-cell as="td">-</mp-table-cell>
            <mp-table-cell as="td">-</mp-table-cell>
            <mp-table-cell as="td">-</mp-table-cell>
            <mp-table-cell as="td">-</mp-table-cell>
            <mp-table-cell as="td">-</mp-table-cell>
            <mp-table-cell as="td">-</mp-table-cell>
            <mp-table-cell as="td">-</mp-table-cell>
            <mp-table-cell as="td">-</mp-table-cell>
            <mp-table-cell as="td">-</mp-table-cell>
            <mp-table-cell as="td">-</mp-table-cell>
            <mp-table-cell as="td">-</mp-table-cell>
            <mp-table-cell as="td">-</mp-table-cell>
            <mp-table-cell as="td">-</mp-table-cell>
            <mp-table-cell as="td">-</mp-table-cell>
            <mp-table-cell as="td">-</mp-table-cell>
            <mp-table-cell as="td">-</mp-table-cell>
            <mp-table-cell as="td">-</mp-table-cell>
            <mp-table-cell as="td">-</mp-table-cell>
            <mp-table-cell as="td">-</mp-table-cell>
            <mp-table-cell as="td">-</mp-table-cell>
            <mp-table-cell as="td">-</mp-table-cell>
            <mp-table-cell as="td">-</mp-table-cell>
            <mp-table-cell as="td">-</mp-table-cell>
            <mp-table-cell as="td">-</mp-table-cell>
          </mp-table-row>
        </mp-table-body>
      </mp-table>
    </mp-table-container>

    <EmployeeTurnoverPagination />
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpIcon,
  MpText,
  MpTooltip,
  MpAvatar,
  MpTableContainer,
  MpTable,
  MpTableHead,
  MpTableBody,
  MpTableRow,
  MpTableCell,
} from "@mekari/pixel";
import EmployeeTurnoverPagination from "./EmployeeTurnoverPagination";

export default {
  name: "EmployeeTurnoverTable",
  components: {
    MpBox,
    MpIcon,
    MpText,
    MpTooltip,
    MpAvatar,
    MpTableContainer,
    MpTable,
    MpTableHead,
    MpTableBody,
    MpTableRow,
    MpTableCell,
    EmployeeTurnoverPagination,
  },
  created() {
    for (var a = 1; a <= 30; a++) {
      this.items.push(a);
    }
  },
  data() {
    return {
      items: [],
    };
  },
};
</script>