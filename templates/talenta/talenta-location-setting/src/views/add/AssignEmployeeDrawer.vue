<template>
  <mp-drawer :is-open="isDrawerOpen" :on-close="handleDrawerClose">
    <mp-drawer-overlay />
    <mp-drawer-content width="800px" max-width="800px">
      <mp-drawer-header>Select employee</mp-drawer-header>
      <mp-drawer-close-button />
      <mp-drawer-body overflow-x="auto" padding="0">
        <mp-flex height="100vh">
          <mp-box width="50%" border-right="1px" border-color="gray.100">
            <mp-flex
              justify-content="space-between"
              align-items="center"
              padding-x="6"
              padding-top="6"
            >
              <mp-text font-weight="bold">
                Total {{ this.employees.length }} employee(s)
              </mp-text>
              <mp-button variant="link">Select all</mp-button>
            </mp-flex>

            <mp-flex
              gap="4"
              justify-content="space-between"
              align-items="center"
              margin-top="4"
              margin-bottom="4"
              padding-x="6"
            >
              <mp-input-group>
                <mp-input-left-addon :with-background="false">
                  <mp-icon name="search" size="sm" />
                </mp-input-left-addon>
                <mp-input placeholder="Search..." />
              </mp-input-group>
              <mp-box>
                <mp-button variant="outline" left-icon="filter">
                  Filter
                </mp-button>
              </mp-box>
            </mp-flex>

            <mp-flex
              v-for="(employee, index) in employees"
              :key="employee.name"
              role="group"
              justify-content="space-between"
              align-items="center"
              padding-y="3"
              padding-x="6"
              border-bottom="1px"
              border-color="gray.100"
              cursor="pointer"
              :_hover="{
                backgroundColor: 'ice.50',
              }"
              @click="() => handleSelectEmployee(employee, index)"
            >
              <mp-flex align-items="center">
                <mp-avatar :name="employee.name" />
                <mp-box margin-left="4">
                  <mp-text>{{ employee.name }}</mp-text>
                  <mp-text font-size="sm">{{ employee.extra }}</mp-text>
                </mp-box>
              </mp-flex>
              <mp-box
                text-align="right"
                opacity="0"
                visibility="hidden"
                transition="all .2s ease"
                :_groupHover="{
                  opacity: '1',
                  visibility: 'visible',
                }"
              >
                <mp-icon name="add-circular" variant="duotone" />
              </mp-box>
            </mp-flex>
          </mp-box>
          <mp-box width="50%">
            <mp-flex
              justify-content="space-between"
              align-items="center"
              padding-x="6"
              padding-top="6"
              margin-bottom="4"
            >
              <mp-text font-weight="bold">
                {{ this.selectedEmployees.length }} employee(s) selected
              </mp-text>
              <mp-button variant="link" variant-color="gray">
                Clear section
              </mp-button>
            </mp-flex>

            <mp-box
              v-if="this.selectedEmployees.length === 0"
              text-align="center"
              margin-top="12"
              padding-x="6"
            >
              <mp-heading as="h3" font-size="lg" font-weight="bold">
                No employee selected
              </mp-heading>
              <mp-text color="gray.600" margin-top="2">
                Select at least one from employee list from the sidebar.
              </mp-text>
            </mp-box>

            <mp-flex
              v-for="(employee, index) in selectedEmployees"
              :key="employee.name"
              role="group"
              justify-content="space-between"
              align-items="center"
              padding-y="3"
              padding-x="6"
              border-bottom="1px"
              border-color="gray.100"
              cursor="pointer"
              :_hover="{
                backgroundColor: 'ice.50',
              }"
              @click="() => handleUnselectEmployee(employee, index)"
            >
              <mp-flex align-items="center">
                <mp-avatar :name="employee.name" />
                <mp-box margin-left="4">
                  <mp-text>{{ employee.name }}</mp-text>
                  <mp-text font-size="sm">{{ employee.extra }}</mp-text>
                </mp-box>
              </mp-flex>
              <mp-box
                text-align="right"
                opacity="0"
                visibility="hidden"
                transition="all .2s ease"
                :_groupHover="{
                  opacity: '1',
                  visibility: 'visible',
                }"
              >
                <mp-icon name="minus-circular" variant="duotone" />
              </mp-box>
            </mp-flex>
          </mp-box>
        </mp-flex>
      </mp-drawer-body>
      <mp-drawer-footer border-top="1px" border-color="gray.100" padding="6">
        <mp-button variant="ghost" mr="3" @click="handleDrawerClose">
          Cancel
        </mp-button>
        <mp-button>Submit</mp-button>
      </mp-drawer-footer>
    </mp-drawer-content>
  </mp-drawer>
</template>

<script>
import {
  MpFlex,
  MpBox,
  MpText,
  MpHeading,
  MpAvatar,
  MpIcon,
  MpButton,
  MpInput,
  MpInputGroup,
  MpInputLeftAddon,
  MpDrawer,
  MpDrawerOverlay,
  MpDrawerContent,
  MpDrawerCloseButton,
  MpDrawerHeader,
  MpDrawerBody,
  MpDrawerFooter,
} from "@mekari/pixel";

export default {
  name: "AssignEmployeeDrawer",
  components: {
    MpFlex,
    MpBox,
    MpText,
    MpHeading,
    MpAvatar,
    MpIcon,
    MpButton,
    MpInput,
    MpInputGroup,
    MpInputLeftAddon,
    MpDrawer,
    MpDrawerOverlay,
    MpDrawerContent,
    MpDrawerCloseButton,
    MpDrawerHeader,
    MpDrawerBody,
    MpDrawerFooter,
  },
  props: {
    isDrawerOpen: [Boolean],
    handleDrawerOpen: [Function],
    handleDrawerClose: [Function],
  },
  data: function () {
    return {
      employees: [
        {
          name: "Fikka Rhesy",
          extra: "EMP2024 - People Development",
        },
        {
          name: "Dirga Prakesha",
          extra: "EMP2025 - People Development",
        },
        {
          name: "Eki Pratama",
          extra: "EMP2026 - People Development",
        },
      ],
      selectedEmployees: [
        {
          name: "Ridwan Hanif",
          extra: "EMP2022 - Personalian Departement",
        },
        {
          name: "Boyke Sumanjaya",
          extra: "EMP2023 - Account Executive",
        },
      ],
    };
  },
  methods: {
    handleSelectEmployee: function (data, index) {
      this.employees.splice(index, 1);
      this.selectedEmployees.push(data);
    },
    handleUnselectEmployee: function (data, index) {
      this.selectedEmployees.splice(index, 1);
      this.employees.push(data);
    },
  },
};
</script>