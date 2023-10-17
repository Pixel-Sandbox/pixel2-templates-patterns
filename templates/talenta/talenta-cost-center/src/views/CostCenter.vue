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
              Cost Center
            </mp-heading>
          </mp-box>
          <mp-button variant="outline" @click="onModalToggle(true)">
            Cost center list
          </mp-button>
        </mp-flex>
        <mp-box
          min-height="calc(100vh - 132px)"
          border-top-width="1px"
          background-color="white"
          padding="6"
        >
          <CostCenterFilter />
          <CostCenterTable />
          <CostCenterListModal
            :isModalOpen="isModalOpen"
            :onModalToggle="onModalToggle"
          />
        </mp-box>
      </mp-box>
    </mp-flex>
  </mp-box>
</template>

<script>
import { MpBox, MpFlex, MpHeading, MpText, MpButton } from "@mekari/pixel";
import Header from "../components/Header";
import CostCenterFilter from "./CostCenterFilter";
import CostCenterTable from "./CostCenterTable";
import CostCenterListModal from "./CostCenterListModal";

export default {
  name: "CostCenter",
  components: {
    MpBox,
    MpFlex,
    MpHeading,
    MpText,
    MpButton,
    Header,
    CostCenterFilter,
    CostCenterTable,
    CostCenterListModal,
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