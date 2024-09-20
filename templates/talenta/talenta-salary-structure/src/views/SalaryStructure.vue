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
          padding-y="3"
        >
          <mp-flex height="12" align-items="center">
            <mp-heading as="h1" font-size="2xl" font-weight="semibold">
              Salary structure
            </mp-heading>
          </mp-flex>
          <mp-box>
            <mp-button as="router-link" to="/create/step-1">Create salary structure</mp-button>
          </mp-box>
        </mp-flex>
        <mp-box
          min-height="calc(100vh - 132px)"
          border-top-width="1px"
          border-left-width="1px"
          border-top-left-radius="md"
          border-color="gray.100"
          background-color="white"
          padding="6"
        >
          <SalaryStructureFilter />
          <SalaryStructureTable />
        </mp-box>
      </mp-box>
    </mp-flex>
  </mp-box>
</template>

<script>
import { MpBox, MpFlex, MpHeading, MpButton } from "@mekari/pixel";
import SalaryStructureFilter from "./SalaryStructureFilter.vue";
import SalaryStructureTable from "./SalaryStructureTable.vue";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default {
  name: "SalaryStructure",
  components: {
    MpBox,
    MpFlex,
    MpHeading,
    MpButton,
    Header,
    Sidebar,
    SalaryStructureFilter,
    SalaryStructureTable,
  },
};
</script>