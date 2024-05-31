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
          padding-y="1.063rem"
        >
          <mp-box>
            <mp-text
              @click.native="$router.push({ path: '/' })"
              font-size="sm"
              is-link
            >
              Reports
            </mp-text>
            <mp-heading as="h1" font-size="2xl" font-weight="bold">
              Salary detail december 2023
            </mp-heading>
          </mp-box>
        </mp-flex>
        <mp-box
          min-height="calc(100vh - 132px)"
          border-top-width="1px"
          border-left-width="1px"
          border-top-left-radius="md"
          border-color="gray.100"
          background-color="white"
          :padding="['4', '6']"
        >
          <PayrollReportDetailFilter />
          <PayrollReportDetailTable />
        </mp-box>
      </mp-box>
    </mp-flex>
  </mp-box>
</template>

<script>
import { MpBox, MpFlex, MpHeading, MpText } from "@mekari/pixel";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import PayrollReportDetailFilter from "./PayrollReportDetailFilter";
import PayrollReportDetailTable from "./PayrollReportDetailTable";

export default {
  name: "PayrollReportDetail",
  components: {
    MpBox,
    MpFlex,
    MpHeading,
    MpText,
    Header,
    Sidebar,
    PayrollReportDetailFilter,
    PayrollReportDetailTable,
  },
};
</script>