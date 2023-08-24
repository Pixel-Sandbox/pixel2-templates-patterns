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
              Live attendance
            </mp-text>
            <mp-heading as="h1" font-size="2xl" font-weight="bold">
              Create location setting
            </mp-heading>
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
          <AddLocationSettingForm
            :isFlexible="isFlexible"
            :handleToggleGPSLocation="handleToggleGPSLocation"
          />
          <mp-divider />
          <SelectLocationFilter v-if="this.isFlexible === 'set-location'" />
          <SelectLocationTable v-if="this.isFlexible === 'set-location'" />
          <AssignEmployeeFilter />
          <AssignEmployeeTable />
          <mp-flex
            gap="4"
            justify-content="right"
            align-items="center"
            margin-top="6"
          >
            <mp-button variant="ghost">Cancel</mp-button>
            <mp-button>Save</mp-button>
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
  MpButton,
  MpDivider,
  MpHeading,
  MpText,
} from "@mekari/pixel";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import AddLocationSettingForm from "./AddLocationSettingForm";
import SelectLocationFilter from "./SelectLocationFilter";
import SelectLocationTable from "./SelectLocationTable";
import AssignEmployeeFilter from "./AssignEmployeeFilter";
import AssignEmployeeTable from "./AssignEmployeeTable";

export default {
  name: "AddLocationSetting",
  components: {
    MpBox,
    MpFlex,
    MpButton,
    MpDivider,
    MpHeading,
    MpText,
    Header,
    Sidebar,
    AddLocationSettingForm,
    SelectLocationFilter,
    SelectLocationTable,
    AssignEmployeeFilter,
    AssignEmployeeTable,
  },
  data: function () {
    return {
      isFlexible: "flexible",
    };
  },
  methods: {
    handleToggleGPSLocation: function (e) {
      this.isFlexible = e;
    },
  },
};
</script>