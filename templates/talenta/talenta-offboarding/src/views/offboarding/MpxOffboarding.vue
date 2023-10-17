<template>
  <mp-box>
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 60px)">
      <Sidebar is-alternate is-custom />
      <mp-box
        as="section"
        data-id="content"
        width="full"
        height="calc(100vh - 60px)"
        overflow-y="auto"
        background-color="background"
      >
        <mpx-titlebar
          title="Offboarding"
          :links="[{ name: 'Company', link: '#' }]"
        >
          <template #action>
            <mpx-offboarding-action />
          </template>
          <template #addon>
            <mp-icon name="info" size="md" />
          </template>
        </mpx-titlebar>
        <mp-box
          :padding="['4', '6']"
          min-height="calc(100vh - 142px)"
          background-color="white"
          border-top-width="1px"
          border-left-width="1px"
          border-top-left-radius="md"
          border-color="gray.100"
        >
          <mpx-offboarding-filter :data="filterOptionData" />
          <mpx-offboarding-table :data="tableData" />
          <mpx-pagination />
          <mp-flex gap="2">
            <mpx-offboarding-modal :data="modalData" />
            <mpx-offboarding-detail-modal :data="modalData" />
          </mp-flex>
        </mp-box>
      </mp-box>
    </mp-flex>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpIcon,
} from "@mekari/pixel";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import MpxTitlebar from "../../components/other/MpxTitlebar.vue";
import MpxPagination from "../../components/other/MpxPagination.vue";
import MpxOffboardingAction from "./MpxOffboardingAction.vue";
import MpxOffboardingFilter from "./MpxOffboardingFilter.vue";
import MpxOffboardingTable from "./MpxOffboardingTable.vue";
import MpxOffboardingModal from "./MpxOffboardingModal.vue";
import MpxOffboardingDetailModal from "./MpxOffboardingDetailModal.vue";
import offboardingData from "../../assets/offboarding-data.json";

export default {
  name: "MpxOffboarding",
  components: {
    MpBox,
    MpFlex,
    MpIcon,
    Header,
    Sidebar,
    MpxTitlebar,
    MpxPagination,
    MpxOffboardingAction,
    MpxOffboardingFilter,
    MpxOffboardingTable,
    MpxOffboardingModal,
    MpxOffboardingDetailModal,
  },
  data: () => {
    return {
      filterOptionData: offboardingData.filter_option,
      tableData: offboardingData.table_data,
      modalData: offboardingData.modal_data,
    };
  },
};
</script>
