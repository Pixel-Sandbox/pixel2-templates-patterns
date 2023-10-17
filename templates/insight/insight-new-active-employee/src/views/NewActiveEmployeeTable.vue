<template>
  <mp-box>
    <mp-table-container width="full" max-width="full" overflow="scroll">
      <mp-table>
        <mp-table-head>
          <mp-table-row cursor="pointer">
            <mp-table-cell
              as="th"
              width="240px"
              min-width="240px"
              top="0"
              left="0"
              z-index="dropdown"
              box-shadow="inset -2px 0px #D0D6DD"
              is-fixed
            >
              Employee name
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Employee ID
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
              <mp-tooltip
                label="Effective date when employee is transferred."
                position="bottom"
              >
                <mp-icon name="info" size="sm" margin-left="1" />
              </mp-tooltip>
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
              <mp-tooltip
                label="Total of active and expired reprimand start from employee‘s join date."
                position="bottom"
              >
                <mp-icon name="info" size="sm" margin-left="1" />
              </mp-tooltip>
            </mp-table-cell>
            <mp-table-cell as="th">
              Reprimand type
              <mp-icon name="sort-default" />
              <mp-tooltip
                label="Shows the type of reprimand based on the latest reprimand that employees got."
                position="bottom"
              >
                <mp-icon name="info" size="sm" margin-left="1" />
              </mp-tooltip>
            </mp-table-cell>
            <mp-table-cell as="th">
              Reprimand status
              <mp-icon name="sort-default" />
              <mp-tooltip
                label="Shows the status of reprimand based on the latest reprimand that employees got."
                position="bottom"
              >
                <mp-icon name="info" size="sm" margin-left="1" />
              </mp-tooltip>
            </mp-table-cell>
          </mp-table-row>
        </mp-table-head>
        <mp-table-body>
          <mp-table-row>
            <mp-table-cell
              as="td"
              left="0"
              box-shadow="inset -2px 0px #D0D6DD"
              is-fixed
            >
              <mp-box display="inline-flex" align-items="center">
                <mp-avatar name="Ali Imran" />
                <mp-text margin-left="4">Ali Imran</mp-text>
              </mp-box>
            </mp-table-cell>
            <mp-table-cell as="td">CP-0203</mp-table-cell>
            <mp-table-cell as="td">Jakarta</mp-table-cell>
            <mp-table-cell as="td">Finance</mp-table-cell>
            <mp-table-cell as="td">Manager</mp-table-cell>
            <mp-table-cell as="td">Financial Sales Assistant</mp-table-cell>
            <mp-table-cell as="td">1</mp-table-cell>
            <mp-table-cell as="td">Class 1</mp-table-cell>
            <mp-table-cell as="td">Permanent</mp-table-cell>
            <mp-table-cell as="td">Joanna Evelyn</mp-table-cell>
            <mp-table-cell as="td">CP-0001</mp-table-cell>
            <mp-table-cell as="td">1 Jan 2020</mp-table-cell>
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
            <mp-table-cell
              as="td"
              left="0"
              box-shadow="inset -2px 0px #D0D6DD"
              is-fixed
            >
              <mp-box display="inline-flex" align-items="center">
                <mp-avatar name="Christin Purnama Sari" />
                <mp-text margin-left="4">Christin Purnama Sari</mp-text>
              </mp-box>
            </mp-table-cell>
            <mp-table-cell as="td">CP-4758</mp-table-cell>
            <mp-table-cell as="td">Jakarta</mp-table-cell>
            <mp-table-cell as="td">Development</mp-table-cell>
            <mp-table-cell as="td">Senior</mp-table-cell>
            <mp-table-cell as="td">Software Developer</mp-table-cell>
            <mp-table-cell as="td">2</mp-table-cell>
            <mp-table-cell as="td">Class 1</mp-table-cell>
            <mp-table-cell as="td">Permanent</mp-table-cell>
            <mp-table-cell as="td">Alfian Ramadhan</mp-table-cell>
            <mp-table-cell as="td">CP-0021</mp-table-cell>
            <mp-table-cell as="td">1 Jan 2020</mp-table-cell>
            <mp-table-cell as="td">-</mp-table-cell>
            <mp-table-cell as="td">1 Year 11 Month 1 Day</mp-table-cell>
            <mp-table-cell as="td">Female</mp-table-cell>
            <mp-table-cell as="td">35</mp-table-cell>
            <mp-table-cell as="td">S1</mp-table-cell>
            <mp-table-cell as="td">Christianity</mp-table-cell>
            <mp-table-cell as="td">Married</mp-table-cell>
            <mp-table-cell as="td">K/0</mp-table-cell>
            <mp-table-cell as="td">0</mp-table-cell>
            <mp-table-cell as="td">-</mp-table-cell>
            <mp-table-cell as="td">-</mp-table-cell>
          </mp-table-row>
          <mp-table-row>
            <mp-table-cell
              as="td"
              left="0"
              box-shadow="inset -2px 0px #D0D6DD"
              is-fixed
            >
              <mp-box display="inline-flex" align-items="center">
                <mp-avatar name="Alfian Ramadhan" />
                <mp-text margin-left="4">Alfian Ramadhan</mp-text>
              </mp-box>
            </mp-table-cell>
            <mp-table-cell as="td">CP-1021</mp-table-cell>
            <mp-table-cell as="td">Jakarta</mp-table-cell>
            <mp-table-cell as="td">Product</mp-table-cell>
            <mp-table-cell as="td">Manager</mp-table-cell>
            <mp-table-cell as="td">Team Leader</mp-table-cell>
            <mp-table-cell as="td">1</mp-table-cell>
            <mp-table-cell as="td">Class 2</mp-table-cell>
            <mp-table-cell as="td">Permanent</mp-table-cell>
            <mp-table-cell as="td">Joanna Evelyn</mp-table-cell>
            <mp-table-cell as="td">CP-0001</mp-table-cell>
            <mp-table-cell as="td">1 Jan 2020</mp-table-cell>
            <mp-table-cell as="td">25 Mar 2021</mp-table-cell>
            <mp-table-cell as="td">1 Year 11 Month 12 Day</mp-table-cell>
            <mp-table-cell as="td">Male</mp-table-cell>
            <mp-table-cell as="td">40</mp-table-cell>
            <mp-table-cell as="td">S1</mp-table-cell>
            <mp-table-cell as="td">Muslim</mp-table-cell>
            <mp-table-cell as="td">Married</mp-table-cell>
            <mp-table-cell as="td">K/0</mp-table-cell>
            <mp-table-cell as="td">0</mp-table-cell>
            <mp-table-cell as="td">-</mp-table-cell>
            <mp-table-cell as="td">-</mp-table-cell>
          </mp-table-row>
        </mp-table-body>
      </mp-table>
    </mp-table-container>

    <NewActiveEmployeePagination />
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
  MpTooltip,
} from "@mekari/pixel";
import NewActiveEmployeePagination from "./NewActiveEmployeePagination";

export default {
  name: "NewActiveEmployeeTable",
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
    MpTooltip,
    NewActiveEmployeePagination,
  },
};
</script>