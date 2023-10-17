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
        background-color="#F1F5F9"
      >
        <mp-flex
          justify="space-between"
          align-items="center"
          :padding-x="['4', '6']"
          :display="['inline-block', 'flex']"
          padding-y="1.063rem"
        >
          <mp-box height="12">
            <mp-text font-size="sm" is-link>Disbursement</mp-text>
            <mp-heading as="h1" font-size="2xl" font-weight="semibold">
              Create disbursement
            </mp-heading>
          </mp-box>
          <mp-box
            :width="['100%', 'auto']"
            :position="['fixed', 'relative']"
            :top="['100%', '0']"
            :left="['50%', '0']"
            :transform="['translate(-50%, -100%)', 'translate(0%, 0%)']"
            :border-top="['1px solid', '0px solid']"
            :padding-y="['2', '0']"
            :padding-x="['4', '0']"
            :background-color="['white', 'transparent']"
            border-color="gray.100"
            z-index="100"
          >
            <mp-flex gap="2" :flex-direction="['column-reverse', 'row']">
              <mp-button variant="outline" left-icon="help">
                Guidebook
              </mp-button>
            </mp-flex>
          </mp-box>
        </mp-flex>

        <mp-box
          min-height="calc(100vh - 142px)"
          border-top-width="1px"
          border-left-width="1px"
          border-top-left-radius="md"
          border-color="gray.100"
          background-color="white"
          :padding="['4', '6']"
        >
          <CreateDisbursementStat />
          <CreateDisbursementFilter />
          <CreateDisbursementTable :data="data" />
          <Pagination />
          <mp-flex
            gap="2"
            justify-content="flex-end"
            align-items="center"
            margin-top="24px"
          >
            <mp-button variant="ghost">Cancel</mp-button>
            <mp-button @click="onSubmitModalToggle(true)">Submit</mp-button>
          </mp-flex>
        </mp-box>
      </mp-box>
    </mp-flex>
    <CreateDisbursementSubmitModal
      :isModalOpen="isSubmitModalOpen"
      :onModalToggle="onSubmitModalToggle"
    />
  </mp-box>
</template>

<script>
import { MpBox, MpFlex, MpHeading, MpText, MpButton } from "@mekari/pixel";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import CreateDisbursementStat from "./CreateDisbursementStat";
import CreateDisbursementFilter from "./CreateDisbursementFilter";
import CreateDisbursementTable from "./CreateDisbursementTable";
import CreateDisbursementSubmitModal from "./CreateDisbursementSubmitModal";
import Pagination from "../components/Pagination";
import data from "../assets/table-data.json";

export default {
  name: "CreateDisbursement",
  components: {
    MpBox,
    MpFlex,
    MpHeading,
    MpText,
    MpButton,
    Header,
    Sidebar,
    CreateDisbursementStat,
    CreateDisbursementFilter,
    CreateDisbursementTable,
    CreateDisbursementSubmitModal,
    Pagination,
  },
  data: () => {
    return {
      data: data.table_data_c,
      isSubmitModalOpen: false,
    };
  },
  methods: {
    onSubmitModalToggle: function (data) {
      this.isSubmitModalOpen = data;
    },
  },
};
</script>
