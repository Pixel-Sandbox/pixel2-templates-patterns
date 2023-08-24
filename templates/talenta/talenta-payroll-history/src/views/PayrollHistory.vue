<template>
  <mp-box>
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 60px)">
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
            <mp-text as="p" font-size="sm" is-link>Payroll</mp-text>
            <mp-heading as="h1" font-size="2xl" font-weight="semibold">
              Payroll history
            </mp-heading>
          </mp-box>
          <mp-box>
            <mp-button variant="outline" margin-right="1">
              Download e-banking
            </mp-button>
            <mp-button variant="outline" margin-left="1">
              Disbursement
            </mp-button>
          </mp-box>
        </mp-flex>
        <mp-box
          min-height="calc(100vh - 132px)"
          border-top-width="1px"
          background-color="white"
          padding="6"
        >
          <PayrollHistoryFilter />
          <PayrollHistoryTable />
        </mp-box>
      </mp-box>
    </mp-flex>
  </mp-box>
</template>

<script>
import { MpBox, MpFlex, MpHeading, MpText, MpButton } from "@mekari/pixel";
import Header from "../components/Header";
import PayrollHistoryFilter from "./PayrollHistoryFilter";
import PayrollHistoryTable from "./PayrollHistoryTable";

export default {
  name: "PayrollHistory",
  components: {
    MpBox,
    MpFlex,
    MpHeading,
    MpText,
    MpButton,
    Header,
    PayrollHistoryFilter,
    PayrollHistoryTable,
  },
  data: function () {
    return {
      isModalOpen: false,
    };
  },
  methods: {
    onModalToggle: function (data) {
      this.isModalOpen = data;
    },
  },
};
</script>