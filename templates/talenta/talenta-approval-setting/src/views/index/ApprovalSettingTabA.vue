<template>
  <mp-box>
    <mp-flex justify-content="space-between" margin-bottom="5">
      <mp-flex gap="4">
        <mp-button variant="outline" border-color="gray.100">
          <mp-icon name="table-view-sort" variant="duotone" margin-right="2" />
          Sort Z-A
        </mp-button>
      </mp-flex>
      <mp-flex gap="2" align-items="center">
        <mp-tooltip label="Guidebook" position="bottom">
          <mp-button-icon size="md" name="help" />
        </mp-tooltip>
        <mp-input-group>
          <mp-input-left-addon :with-background="false">
            <mp-icon name="search" size="sm" />
          </mp-input-left-addon>
          <mp-input placeholder="Search..." />
        </mp-input-group>
      </mp-flex>
    </mp-flex>

    <mp-grid gap="6" template-columns="repeat(4, 1fr)" margin-top="6">
      <mp-box
        position="relative"
        height="148px"
        border="1px"
        border-radius="md"
        border-color="gray.100"
        padding="4"
        v-for="menu in menus"
        :key="menu.id"
      >
        <mp-flex justify-content="space-between">
          <mp-icon :name="menu.icon" variant="duotone" size="lg" />
          <mp-toggle
            v-if="menu.withToggle"
            :is-checked="isInactiveOpen"
            @change="onInactiveToggle"
          />
        </mp-flex>
        <mp-heading as="h3" font-size="lg" margin-top="3">
          {{ menu.title }}
        </mp-heading>
        <mp-button
          as="router-link"
          :to="menu.link"
          variant="outline"
          size="sm"
          position="absolute"
          bottom="4"
        >
          Go to Settings
        </mp-button>
      </mp-box>
    </mp-grid>

    <ApprovalSettingInactiveModal
      :isModalOpen="isInactiveModalOpen"
      :onModalToggle="onInactiveModalToggle"
    />
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpButton,
  MpIcon,
  MpInput,
  MpInputGroup,
  MpInputLeftAddon,
  MpToggle,
  MpHeading,
  MpTooltip,
  MpGrid,
} from "@mekari/pixel";
import ApprovalSettingInactiveModal from "./ApprovalSettingInactiveModal";

export default {
  name: "ApprovalSettingTabA",
  components: {
    MpBox,
    MpFlex,
    MpButton,
    MpIcon,
    MpInput,
    MpInputGroup,
    MpInputLeftAddon,
    MpToggle,
    MpHeading,
    MpTooltip,
    MpGrid,
    ApprovalSettingInactiveModal,
  },
  data: function () {
    return {
      isInactiveModalOpen: false,
      isInactiveOpen: true,
      menus: [
        {
          id: 1,
          title: "Add employee",
          icon: "team",
          link: "/",
          withToggle: true,
        },
        {
          id: 2,
          title: "Attendance request",
          icon: "time",
          link: "/",
          withToggle: false,
        },
        {
          id: 3,
          title: "Cash advance request",
          icon: "loan",
          link: "/",
          withToggle: false,
        },
        {
          id: 4,
          title: "Cash advance settlement",
          icon: "finance",
          link: "/",
          withToggle: false,
        },
        {
          id: 5,
          title: "Change data request",
          icon: "id-card",
          link: "/",
          withToggle: false,
        },
        {
          id: 6,
          title: "Change shift request",
          icon: "schedule",
          link: "/",
          withToggle: false,
        },
        {
          id: 7,
          title: "Delegation request",
          icon: "employee",
          link: "/",
          withToggle: false,
        },
        {
          id: 8,
          title: "Employee transfer",
          icon: "refresh",
          link: "/",
          withToggle: false,
        },
        {
          id: 9,
          title: "Forms",
          icon: "chart-of-account",
          link: "/",
          withToggle: false,
        },
        {
          id: 10,
          title: "Goal",
          icon: "succesion-plan",
          link: "/",
          withToggle: false,
        },
        {
          id: 11,
          title: "Overtime request",
          icon: "overtime",
          link: "/",
          withToggle: false,
        },
        {
          id: 12,
          title: "Payroll",
          icon: "payroll",
          link: "/",
          withToggle: false,
        },
        {
          id: 13,
          title: "Reimbursement request",
          icon: "reimbursement",
          link: "/",
          withToggle: false,
        },
        {
          id: 14,
          title: "Time off request",
          icon: "calendar",
          link: "/time-off-request",
          withToggle: false,
        },
      ],
    };
  },
  methods: {
    onInactiveModalToggle: function (data) {
      this.isInactiveModalOpen = data;
      this.isInactiveOpen = !data;
    },
    onInactiveToggle: function (data) {
      this.isInactiveModalOpen = true;
      this.isInactiveOpen = data;
    },
  },
};
</script>
