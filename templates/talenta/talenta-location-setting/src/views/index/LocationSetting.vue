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
          <mp-box height="12">
            <mp-text font-size="sm" is-link>Settings</mp-text>
            <mp-heading as="h1" font-size="2xl" font-weight="bold">
              Live attendance
            </mp-heading>
          </mp-box>
          <mp-flex gap="2">
            <mp-button
              v-if="this.tabIndex === 0"
              as="router-link"
              to="/add-location-setting"
              variant="primary"
            >
              Create location setting
            </mp-button>
          </mp-flex>
        </mp-flex>
        <mp-flex justify="space-between" align-items="center" padding-x="6">
          <mp-tabs @change="onHandleTab">
            <mp-tab-list margin-bottom="0" border-bottom="0">
              <mp-tab>Location setup</mp-tab>
              <mp-tab>Mobile setup</mp-tab>
              <mp-tab>Advance setup</mp-tab>
            </mp-tab-list>
          </mp-tabs>
        </mp-flex>
        <mp-box
          min-height="calc(100vh - 192px)"
          border-top-width="1px"
          border-left-width="1px"
          border-top-left-radius="md"
          border-color="gray.100"
          background-color="white"
          :padding="['4', '6']"
        >
          <mp-box v-if="this.tabIndex === 0">
            <mp-box v-if="this.checkIndex === 'employee'">
              <AssignedEmployeeFilter :onChangeSegment="onChangeSegment" />
              <AssignedEmployeeTable />
            </mp-box>
            <mp-box v-else>
              <LocationSettingFilter :onChangeSegment="onChangeSegment" />
              <LocationSettingTable />
            </mp-box>
          </mp-box>
          <mp-box v-else>-</mp-box>
        </mp-box>
      </mp-box>
    </mp-flex>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpHeading,
  MpText,
  MpButton,
  MpTabs,
  MpTabList,
  MpTab,
} from "@mekari/pixel";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import AssignedEmployeeFilter from "./AssignedEmployeeFilter";
import AssignedEmployeeTable from "./AssignedEmployeeTable";
import LocationSettingFilter from "./LocationSettingFilter";
import LocationSettingTable from "./LocationSettingTable";

export default {
  name: "LocationSetting",
  components: {
    MpBox,
    MpFlex,
    MpHeading,
    MpText,
    MpButton,
    MpTabs,
    MpTabList,
    MpTab,
    Header,
    Sidebar,
    AssignedEmployeeFilter,
    AssignedEmployeeTable,
    LocationSettingFilter,
    LocationSettingTable,
  },
  data: function () {
    return {
      tabIndex: 0,
      checkIndex: "employee",
    };
  },
  methods: {
    onHandleTab: function (e) {
      this.tabIndex = e;
    },
    onChangeSegment: function (e) {
      this.checkIndex = e;
    },
  },
};
</script>