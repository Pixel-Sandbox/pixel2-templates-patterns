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
              Job level
            </mp-heading>
          </mp-box>
          <mp-flex gap="2">
            <mp-button as="router-link" to="/import" variant="outline">
              <mp-icon
                name="download"
                variant="duotone"
                size="sm"
                margin-right="2"
              />
              Import
            </mp-button>
            <mp-button variant="outline">
              <mp-icon
                name="upload"
                variant="duotone"
                size="sm"
                margin-right="2"
              />
              Export
            </mp-button>
            <mp-button variant="primary" @click="onAddModalToggle(true)">
              Add job level
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
          <JobLevelFilter />
          <JobLevelTable />
        </mp-box>
      </mp-box>
    </mp-flex>

    <JobLevelAddModal
      :isModalOpen="isAddModalOpen"
      :onModalToggle="onAddModalToggle"
    />
  </mp-box>
</template>

<script>
import { MpBox, MpFlex, MpHeading, MpButton, MpIcon } from "@mekari/pixel";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import JobLevelFilter from "./JobLevelFilter";
import JobLevelTable from "./JobLevelTable";
import JobLevelAddModal from "./JobLevelAddModal";

export default {
  name: "JobLevel",
  components: {
    MpBox,
    MpFlex,
    MpHeading,
    MpButton,
    MpIcon,
    Header,
    Sidebar,
    JobLevelFilter,
    JobLevelTable,
    JobLevelAddModal,
  },
  data: function () {
    return {
      isAddModalOpen: false,
    };
  },
  methods: {
    onAddModalToggle: function (data) {
      this.isAddModalOpen = data;
    },
  },
};
</script>