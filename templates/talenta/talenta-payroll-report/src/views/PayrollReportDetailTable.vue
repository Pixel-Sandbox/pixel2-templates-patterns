<template>
  <mp-box>
    <mp-table-container width="full" overflow="scroll">
      <mp-table>
        <mp-table-head is-fixed>
          <mp-table-row>
            <mp-table-cell
              as="th"
              scope="col"
              width="240px"
              min-width="240px"
              top="0"
              left="0"
              is-fixed
            >
              Employee name
            </mp-table-cell>
            <mp-table-cell
              as="th"
              scope="col"
              width="120px"
              min-width="120px"
              top="0"
              left="240"
              box-shadow="inset -2px 0px #D0D6DD"
              is-fixed
            >
              Employee ID
            </mp-table-cell>
            <mp-table-cell as="th" scope="col" width="160px" min-width="160px">
              Branch
            </mp-table-cell>
            <mp-table-cell as="th" scope="col" width="160px" min-width="160px">
              Job position
            </mp-table-cell>
            <mp-table-cell as="th" scope="col" width="160px" min-width="160px">
              Organization
            </mp-table-cell>
            <mp-table-cell as="th" scope="col" width="160px" min-width="160px">
              Basic salary
            </mp-table-cell>
            <mp-table-cell
              bg="blue.50"
              as="th"
              scope="col"
              width="160px"
              min-width="160px"
            >
              JHT employee allowance
            </mp-table-cell>
          </mp-table-row>
        </mp-table-head>
        <mp-table-body>
          <mp-table-row v-for="employee in employees" :key="employee.id">
            <mp-table-cell as="td" scope="row" left="0" is-fixed>
              <mp-tooltip
                :id="`dfHlk-` + employee.id"
                :label="employee.name"
                position="right"
              >
                <mp-box display="inline-flex" align-items="center">
                  <mp-avatar :name="employee.name" background-color="stone" />
                  <mp-text ml="4">
                    {{ employee.name }}
                  </mp-text>
                </mp-box>
              </mp-tooltip>
            </mp-table-cell>
            <mp-table-cell
              as="td"
              scope="row"
              left="240"
              box-shadow="inset -2px 0px #D0D6DD"
              is-fixed
            >
              {{ employee.name_id }}
            </mp-table-cell>
            <mp-table-cell as="td" scope="row">
              {{ employee.branch }}
            </mp-table-cell>
            <mp-table-cell as="td" scope="row">
              {{ employee.job_position }}
            </mp-table-cell>
            <mp-table-cell as="td" scope="row">
              {{ employee.organization }}
            </mp-table-cell>
            <mp-table-cell as="td" scope="row">
              {{ employee.salary }}
            </mp-table-cell>
            <mp-table-cell as="td" scope="row">
              {{ employee.jht }}
            </mp-table-cell>
          </mp-table-row>
        </mp-table-body>
        <mp-table-body>
          <mp-table-row>
            <mp-table-cell
              bg="gray.25"
              colspan="2"
              as="td"
              scope="row"
              left="0"
              is-fixed
            >
              <mp-text font-weight="semibold">Grand total</mp-text>
            </mp-table-cell>

            <mp-table-cell bg="gray.25" colspan="3" as="td" scope="row" />
            <mp-table-cell bg="gray.25" as="td" scope="row">
              <mp-text font-weight="semibold">Rp50.000.000</mp-text>
            </mp-table-cell>
            <mp-table-cell bg="gray.25" as="td" scope="row">
              <mp-text font-weight="semibold">Rp1.000.000</mp-text>
            </mp-table-cell>
          </mp-table-row>
        </mp-table-body>
      </mp-table>
    </mp-table-container>
    <Pagination />
  </mp-box>
</template>

<script>
import {
  MpTable,
  MpTableContainer,
  MpTableHead,
  MpTableBody,
  MpTableRow,
  MpTableCell,
  MpBox,
  MpText,
  MpAvatar,
  MpTooltip,
} from "@mekari/pixel";
import Pagination from "../components/Pagination";

export default {
  name: "PayrollReportDetailTable",
  components: {
    MpTable,
    MpTableContainer,
    MpTableHead,
    MpTableBody,
    MpTableRow,
    MpTableCell,
    MpBox,
    MpText,
    MpAvatar,
    MpTooltip,
    Pagination,
  },
  data: function () {
    return {
      employees: [
        {
          id: 1,
          name: "Andy Bernard",
          name_id: "MKR-010",
          branch: "HQ Jakarta",
          job_position: "UI Designer",
          organization: "Product",
          salary: "Rp10.000.000",
          jht: "Rp200.000",
        },
        {
          id: 2,
          name: "Angela Martin",
          name_id: "MKR-011",
          branch: "HQ Jakarta",
          job_position: "UI Designer",
          organization: "Product",
          salary: "Rp10.000.000",
          jht: "Rp200.000",
        },
        {
          id: 3,
          name: "Dwight Schrute",
          name_id: "MKR-012",
          branch: "HQ Jakarta",
          job_position: "UI Designer",
          organization: "Product",
          salary: "Rp10.000.000",
          jht: "Rp200.000",
        },
        {
          id: 4,
          name: "Jim Helpert",
          name_id: "MKR-013",
          branch: "HQ Jakarta",
          job_position: "UI Designer",
          organization: "Product",
          salary: "Rp10.000.000",
          jht: "Rp200.000",
        },
        {
          id: 5,
          name: "Kevin Malone",
          name_id: "MKR-014",
          branch: "HQ Jakarta",
          job_position: "UI Designer",
          organization: "Product",
          salary: "Rp10.000.000",
          jht: "Rp200.000",
        },
      ],
    };
  },
};
</script>