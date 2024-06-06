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
            <mp-heading as="h1" font-size="2xl" font-weight="bold">
              Reports
            </mp-heading>
          </mp-box>
          <mp-flex gap="2">
            <mp-button variant="outline"> Import E-Bupot </mp-button>
            <mp-button variant="outline">
              <mp-icon
                name="dashboard"
                variant="duotone"
                size="sm"
                margin-right="2"
              />
              Insights
            </mp-button>
          </mp-flex>
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
          <PayrollReportFilter />
          <PayrollReportContent />
        </mp-box>
      </mp-box>
    </mp-flex>
  </mp-box>
</template>

<script>
import { MpBox, MpFlex, MpHeading, MpButton, MpIcon } from "@mekari/pixel";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import PayrollReportFilter from "./PayrollReportFilter";
import PayrollReportContent from "./PayrollReportContent";

export default {
  name: "PayrollReport",
  components: {
    MpBox,
    MpFlex,
    MpHeading,
    MpButton,
    MpIcon,
    Header,
    Sidebar,
    PayrollReportFilter,
    PayrollReportContent,
  },
};
</script>