<template>
  <mp-flex :margin-right="!withChild && ['0px', '60px']">
    <mp-box
      max-height="calc(100vh - 100px)"
      :border-right="
        isToggle
          ? isStacked
            ? withChild
              ? '1px'
              : '0px'
            : withChild
            ? '1px'
            : '0px'
          : isStacked
          ? withChild
            ? '1px'
            : '0px'
          : '0px'
      "
      border-color="gray.100"
      transition="all 600ms cubic-bezier(0.4, 0, 0.2, 1) 0s"
      :background-color="withChild ? 'ash.100' : 'background'"
      :position="isStacked ? 'relative' : 'absolute'"
      :width="isToggle ? '3.75rem' : '13.5rem'"
      :max-width="isToggle ? '3.75rem' : '13.5rem'"
      :display="['none', 'block']"
      margin-right="-60px"
      z-index="popover"
      :box-shadow="
        isToggle
          ? isStacked
            ? withChild
              ? 'lg'
              : 'none'
            : isChildToggle
            ? 'none'
            : 'lg'
          : isStacked
          ? withChild
            ? isChildToggle
              ? 'none'
              : 'lg'
            : 'none'
          : 'lg'
      "
    >
      <mp-box
        as="section"
        class="sidebar-content"
        data-id="sidebar"
        width="full"
        height="calc(100vh - 100px)"
        overflow-y="auto"
        overflow-x="hidden"
        padding-top="4"
        padding-x="2"
        padding-bottom="60px"
        @mouseenter="handleMouseEnter()"
        @mouseleave="handleMouseLeave()"
      >
        <mp-box v-for="menu in menus" :key="menu.parentId">
          <mp-flex flex-direction="column" v-if="menu.items.length === 0">
            <mp-pseudo-box
              role="group"
              flex="1"
              border-radius="md"
              transition="all 600ms cubic-bezier(0.4, 0, 0.2, 1) 0s"
              padding-x="2.5"
              padding-y="2"
              :as="menu.isLink ? 'a' : 'router-link'"
              :to="!menu.isLink ? menu.link : null"
              :href="menu.isLink ? menu.link : null"
              :target="!menu.isLink ? null : '_blank'"
              :background-color="menu.isActive ? 'blue.100' : 'inherit'"
              :color="menu.isActive ? 'blue.400' : 'inherit'"
            >
              <mp-stack direction="row" align="center">
                <mp-icon
                  :name="menu.icon"
                  :variant="menu.isActive ? 'fill' : 'outline'"
                  :color="menu.isActive ? 'blue.400' : 'gray.600'"
                  :_groupHover="{
                    color: 'blue.400',
                    cursor: 'pointer',
                  }"
                />
                <mp-text
                  white-space="nowrap"
                  :font-weight="menu.isActive ? 'semibold' : 'inherit'"
                  :color="menu.isActive ? 'blue.400' : 'dark'"
                  :opacity="isToggle ? '0' : '1'"
                  transition="all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0s"
                  :_groupHover="{
                    color: 'blue.400',
                    cursor: 'pointer',
                  }"
                >
                  {{ menu.name }}
                </mp-text>
              </mp-stack>
            </mp-pseudo-box>
            <mp-divider v-if="menu.withDivider" />
          </mp-flex>

          <mp-popover
            trigger="hover"
            placement="right-start"
            is-force-update-popper
          >
            <mp-popover-trigger>
              <mp-box>
                <mp-flex flex-direction="column" v-if="menu.items.length > 0">
                  <mp-pseudo-box
                    role="group"
                    flex="1"
                    border-radius="md"
                    transition="all 600ms cubic-bezier(0.4, 0, 0.2, 1) 0s"
                    padding-x="2.5"
                    padding-y="2"
                    :background-color="menu.isActive ? 'blue.100' : 'inherit'"
                    :color="menu.isActive ? 'blue.400' : 'inherit'"
                  >
                    <mp-stack
                      direction="row"
                      justify="space-between"
                      align="center"
                      :_groupHover="{
                        cursor: 'pointer',
                      }"
                    >
                      <mp-flex gap="2">
                        <mp-icon
                          :name="menu.icon"
                          :variant="menu.isActive ? 'fill' : 'outline'"
                          :color="
                            menu.isActive
                              ? 'blue.400'
                              : isHovered === menu.parentId
                              ? 'blue.400'
                              : 'gray.600'
                          "
                          :_groupHover="{
                            color: 'blue.400',
                          }"
                        />
                        <mp-text
                          white-space="nowrap"
                          :font-weight="menu.isActive ? 'semibold' : 'inherit'"
                          :color="
                            menu.isActive
                              ? 'blue.400'
                              : isHovered === menu.parentId
                              ? 'blue.400'
                              : 'dark'
                          "
                          :opacity="isToggle ? '0' : '1'"
                          transition="all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0s"
                          :_groupHover="{
                            color: 'blue.400',
                          }"
                        >
                          {{ menu.name }}
                        </mp-text>
                      </mp-flex>
                      <mp-icon
                        name="chevrons-right"
                        size="sm"
                        :color="
                          menu.isActive
                            ? 'blue.400'
                            : isHovered === menu.parentId
                            ? 'blue.400'
                            : 'gray.600'
                        "
                        :_groupHover="{
                          color: 'blue.400',
                        }"
                      />
                    </mp-stack>
                  </mp-pseudo-box>
                  <mp-divider v-if="menu.withDivider" />
                </mp-flex>
              </mp-box>
            </mp-popover-trigger>
            <mp-popover-content
              gutter="13"
              width="194px"
              max-width="194px"
              background-color="overlayFill"
              box-shadow="lg"
              border-radius="md"
              marginTop="-10px !important"
            >
              <mp-box>
                <mp-popover-list
                  v-for="(item, index) in menu.items"
                  :key="item.id"
                  @mouseenter="() => handleHovered(menu.parentId)"
                  @mouseleave="() => handleHovered(0)"
                  :padding-top="
                    index === 0
                      ? '3'
                      : index !== menu.items.length - 1
                      ? '3'
                      : '0'
                  "
                  :padding-bottom="
                    index === 0
                      ? menu.items.length > 1
                        ? '0'
                        : '2'
                      : index !== menu.items.length - 1
                      ? '0'
                      : '2'
                  "
                >
                  <mp-box
                    v-if="item.group !== null"
                    width="full"
                    padding-x="3"
                    padding-y="2"
                  >
                    <mp-text color="gray.100" text-align="left">
                      {{ item.group }}
                    </mp-text>
                  </mp-box>
                  <mp-popover-list-item
                    role="group"
                    v-for="item_child in item.items"
                    white-space="nowrap"
                    :as="item_child.isLink ? 'a' : 'router-link'"
                    :to="!item_child.isLink ? item_child.link : null"
                    :href="item_child.isLink ? item_child.link : null"
                    :target="!item_child.isLink ? null : '_blank'"
                    :color="item_child.isActive ? 'white' : 'white'"
                    :background-color="
                      item_child.isActive ? 'blue.400' : 'transparent'
                    "
                    :is-active="item_child.isActive"
                    :key="item_child.id"
                    :_hover="{
                      backgroundColor: 'blue.400',
                      color: 'white',
                      cursor: 'pointer',
                    }"
                    transition="all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0s"
                  >
                    {{ item_child.name }}
                    <mp-icon
                      v-if="item_child.isUpgradeable"
                      name="upgrade"
                      color="sky.100"
                      transition="all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0s"
                      :_groupHover="{
                        color: 'white',
                      }"
                      variant="fill"
                      size="sm"
                    />
                  </mp-popover-list-item>
                </mp-popover-list>
              </mp-box>
            </mp-popover-content>
          </mp-popover>
        </mp-box>
        <mp-flex
          gap="2"
          :background-color="withChild ? 'ash.100' : 'background'"
          flex-direction="row"
          align-items="center"
          position="absolute"
          border-top="1px solid"
          border-color="gray.100"
          bottom="0"
          left="0"
          right="0"
          padding="2"
          width="100%"
        >
          <mp-tooltip
            position="right"
            :show-delay="200"
            :label="
              !isForced
                ? 'Click to expand or shortcut [shift] + [x]'
                : 'Click to collapse or shortcut [shift] + [x]'
            "
            use-portal
          >
            <mp-pseudo-box
              role="group"
              border-radius="sm"
              transition="all 600ms cubic-bezier(0.4, 0, 0.2, 1) 0s"
              padding-x="2.5"
              padding-y="2"
              :_hover="{
                backgroundColor: 'blue.100',
                color: 'blue.400',
                cursor: 'pointer',
              }"
              @click="handleToggle"
            >
              <mp-stack direction="row" align="center">
                <mp-icon
                  :name="!isForced ? 'arrow-expand' : 'arrow-collapse'"
                  size="sm"
                />
              </mp-stack>
            </mp-pseudo-box>
          </mp-tooltip>
          <mp-text
            font-size="sm"
            color="dark"
            white-space="nowrap"
            :opacity="isToggle ? '0' : '1'"
            is-truncated
          >
            Company ID : 102938
          </mp-text>
        </mp-flex>
      </mp-box>
    </mp-box>
    <SidebarChild v-if="withChild && !isEmployee" @toggle="handleChildToggle" />
    <SidebarChildEmployee
      v-if="withChild && isEmployee"
      @toggle="handleChildToggle"
    />
  </mp-flex>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpIcon,
  MpText,
  MpStack,
  MpPseudoBox,
  MpDivider,
  MpTooltip,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
} from "@mekari/pixel";
import SidebarChild from "./SidebarChild";
import SidebarChildEmployee from "./SidebarChildEmployee";

export default {
  name: "Sidebar",
  props: {
    isCollapsed: [Boolean],
    defaultIsToggle: [Boolean],
    isAlternate: [Boolean],
    isCustom: [Boolean],
    isEmployee: [Boolean],
    withChild: [Boolean],
  },
  components: {
    MpBox,
    MpFlex,
    MpIcon,
    MpText,
    MpStack,
    MpPseudoBox,
    MpDivider,
    MpTooltip,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
    SidebarChild,
    SidebarChildEmployee,
  },
  data: function () {
    return {
      isStacked: !this.defaultIsToggle || false,
      isForced: this.isAlternate || false,
      isToggle: this.isCollapsed
        ? this.defaultIsToggle || true
        : this.defaultIsToggle || false,
      isChildToggle: true,
      isHovered: 0,
      menus: [
        {
          parentId: 1,
          name: "Dashboard",
          icon: "home",
          link: "/",
          withDivider: false,
          isActive: this.$router.currentRoute.name === "Dashboard",
          items: [],
        },
        {
          parentId: 9,
          name: "My info",
          icon: "profile",
          link: "/my-info",
          withDivider: false,
          isActive: this.$router.currentRoute.name === "My info",
          items: [],
        },
        {
          parentId: 2,
          name: "Employee",
          icon: "team",
          link: "/",
          withDivider: false,
          isActive: [
            "Employee directory",
            "Manpower planning",
            "Employee directory detail",
          ].includes(this.$router.currentRoute.name),
          items: [
            {
              id: 311,
              group: null,
              items: [
                {
                  id: 21,
                  name: "Employee directory",
                  link: "/employee-directory",
                  isActive: [
                    "Employee directory",
                    "Employee directory detail",
                  ].includes(this.$router.currentRoute.name),
                },
                {
                  id: 22,
                  name: "Manpower planning",
                  link: "/manpower-planning",
                  isActive:
                    this.$router.currentRoute.name === "Manpower planning",
                },
              ],
            },
          ],
        },
        {
          parentId: 3,
          name: "Time",
          icon: "time",
          link: "/",
          withDivider: false,
          isActive: [
            "Attendance",
            "Overtime",
            "Time off",
            "Scheduler",
            "Schedule",
            "Timesheet",
          ].includes(this.$router.currentRoute.name),
          items: [
            {
              id: 311,
              group: null,
              items: [
                {
                  id: 31,
                  name: "Attendance",
                  link: "/attendance",
                  isActive: this.$router.currentRoute.name === "Attendance",
                },
                {
                  id: 32,
                  name: "Overtime",
                  link: "/overtime",
                  isActive: this.$router.currentRoute.name === "Overtime",
                },
                {
                  id: 33,
                  name: "Time off",
                  link: "/time-off",
                  isActive: this.$router.currentRoute.name === "Time off",
                },
                {
                  id: 34,
                  name: "Scheduler",
                  link: "/scheduler",
                  isActive: this.$router.currentRoute.name === "Scheduler",
                },
                {
                  id: 35,
                  name: "Schedule",
                  link: "/schedule",
                  isActive: this.$router.currentRoute.name === "Schedule",
                },
                {
                  id: 36,
                  name: "Timesheet",
                  link: "/timesheet",
                  isActive: this.$router.currentRoute.name === "Timesheet",
                },
              ],
            },
            {
              id: 322,
              group: "ADD ONS",
              items: [
                {
                  id: 37,
                  name: "Liveness",
                  link: "https://www.talenta.co/fitur/attendance-management/",
                  isActive: false,
                  isLink: true,
                  isUpgradeable: true,
                },
              ],
            },
          ],
        },
        {
          parentId: 4,
          name: "Calendar",
          icon: "calendar",
          link: "/calendar",
          withDivider: false,
          isActive: this.$router.currentRoute.name === "Calendar",
          items: [],
        },
        {
          parentId: 5,
          name: "Finance",
          icon: "finance",
          link: "/",
          withDivider: false,
          isActive: ["Reimbursement", "Loan", "Payroll financing"].includes(
            this.$router.currentRoute.name
          ),
          items: [
            {
              id: 511,
              group: null,
              items: [
                {
                  id: 51,
                  name: "Reimbursement",
                  link: "/reimbursement",
                  isActive: this.$router.currentRoute.name === "Reimbursement",
                },
                {
                  id: 52,
                  name: "Loan",
                  link: "/loan",
                  isActive: this.$router.currentRoute.name === "Loan",
                },
                {
                  id: 53,
                  name: "Payroll financing",
                  link: "/payroll-financing",
                  isActive:
                    this.$router.currentRoute.name === "Payroll financing",
                },
              ],
            },
          ],
        },
        {
          parentId: 6,
          name: "Payroll",
          icon: "calculator",
          link: "/payroll",
          withDivider: false,
          isActive: this.$router.currentRoute.name === "Payroll",
          items: [],
        },
        {
          parentId: 7,
          name: "Company",
          icon: "company",
          link: "/",
          withDivider: true,
          isActive: [
            "Assets",
            "Announcement",
            "Reprimand",
            "Task",
            "Activity log",
            "Notification",
            "Onboarding",
            "Offboarding",
            "Files",
            "ReportBuilder",
            "All forms",
            "My submission",
            "Document template",
            "Company files",
          ].includes(this.$router.currentRoute.name),
          items: [
            {
              id: 711,
              group: null,
              items: [
                {
                  id: 71,
                  name: "Assets",
                  link: "/assets",
                  isActive: this.$router.currentRoute.name === "Assets",
                },
                {
                  id: 72,
                  name: "Announcement",
                  link: "/announcement",
                  isActive: this.$router.currentRoute.name === "Announcement",
                },
                {
                  id: 73,
                  name: "Reprimand",
                  link: "/reprimand",
                  isActive: this.$router.currentRoute.name === "Reprimand",
                },
                {
                  id: 74,
                  name: "Task",
                  link: "/task",
                  isActive: this.$router.currentRoute.name === "Task",
                },
                {
                  id: 75,
                  name: "Activity log",
                  link: "/activity-log",
                  isActive: this.$router.currentRoute.name === "Activity log",
                },
                {
                  id: 76,
                  name: "Notification",
                  link: "/notification",
                  isActive: this.$router.currentRoute.name === "Notification",
                },
                {
                  id: 77,
                  name: "Onboarding",
                  link: "/onboarding",
                  isActive: this.$router.currentRoute.name === "Onboarding",
                },
                {
                  id: 78,
                  name: "Offboarding",
                  link: "/offboarding",
                  isActive: this.$router.currentRoute.name === "Offboarding",
                },
                {
                  id: 79,
                  name: "Files",
                  link: "/files",
                  isActive: this.$router.currentRoute.name === "Files",
                },
                {
                  id: 710,
                  name: "Report builder",
                  link: "/report-builder",
                  isActive: this.$router.currentRoute.name === "ReportBuilder",
                },
                {
                  id: 711,
                  name: "Forms",
                  link: "/forms",
                  isActive: ["All forms", "My submission"].includes(
                    this.$router.currentRoute.name
                  ),
                },
                {
                  id: 712,
                  name: "Document template",
                  link: "/document-template",
                  isActive:
                    this.$router.currentRoute.name === "Document template",
                },
                {
                  id: 713,
                  name: "Company files",
                  link: "/company-files",
                  isActive: this.$router.currentRoute.name === "Company files",
                },
              ],
            },
          ],
        },
        {
          parentId: 8,
          name: "Applications",
          icon: "application",
          link: "/",
          withDivider: true,
          isActive: false,
          items: [
            {
              id: 811,
              group: null,
              items: [
                {
                  id: 81,
                  name: "Talenta Insight",
                  link: "/",
                  isActive: false,
                  isLink: true,
                  isUpgradeable: false,
                },
                {
                  id: 82,
                  name: "Performance Review",
                  link: "",
                  isActive: false,
                  isLink: true,
                  isUpgradeable: false,
                },
                {
                  id: 83,
                  name: "Recruitment",
                  link: "",
                  isActive: false,
                  isLink: true,
                  isUpgradeable: false,
                },
                {
                  id: 84,
                  name: "Mekari Expense",
                  link: "",
                  isActive: false,
                  isLink: true,
                  isUpgradeable: false,
                },
                {
                  id: 85,
                  name: "Mekari Flex",
                  link: "",
                  isActive: false,
                  isLink: true,
                  isUpgradeable: false,
                },
                {
                  id: 86,
                  name: "Marketplace",
                  link: "",
                  isActive: false,
                  isLink: true,
                  isUpgradeable: false,
                },
              ],
            },
          ],
        },
        {
          parentId: 10,
          name: "Integrations",
          icon: "add-ons",
          link: "/integrations",
          withDivider: false,
          isActive: this.$router.currentRoute.name === "Integrations",
          items: [],
        },
        {
          parentId: 11,
          name: "Settings",
          icon: "settings",
          link: "/account",
          withDivider: false,
          isActive: this.$router.currentRoute.name === "Account",
          items: [],
        },
      ],
    };
  },
  created() {
    window.addEventListener("keydown", this.handleKeydown);
    window.addEventListener("resize", this.handleScreenSizer);
  },
  beforeDestroy() {
    window.removeEventListener("keydown", this.handleKeydown);
    window.removeEventListener("resize", this.handleScreenSizer);
  },
  methods: {
    handleScreenSizer: function () {
      if (window.screen.width < 1024 && window.screen.width > 768) {
        this.isToggle = true;
        this.isForced = true;
        if (this.isCustom) {
          this.isToggle = true;
          this.isStacked = false;
        }
      } else {
        this.isToggle = false;
        this.isForced = false;
        if (this.isCustom) {
          this.isToggle = false;
          this.isStacked = true;
        }
      }
    },
    handleMouseEnter: function () {
      if (this.isForced) {
        return;
      } else {
        !this.isToggle && this.isCollapsed
          ? (this.isToggle = true)
          : (this.isToggle = false);
      }
    },
    handleMouseLeave: function () {
      if (this.isForced) {
        return;
      } else {
        !this.isToggle && this.isCollapsed
          ? (this.isToggle = false)
          : (this.isToggle = true);
      }
    },
    handleToggle: function () {
      this.isToggle = !this.isToggle;
      this.isForced = !this.isForced;
      if (this.isCustom) {
        this.isToggle = false;
        this.isStacked = !this.isStacked;
      }

      this.handleMouseLeave();
    },
    handleChildToggle: function (e) {
      this.isChildToggle = e;
    },
    handleKeydown(e) {
      const body = document.getElementsByTagName("body")[0];

      if (e.shiftKey && e.keyCode === 88 && e.srcElement === body) {
        this.handleToggle();
        this.handleMouseLeave();
      }
    },
    handleHovered(id) {
      this.isHovered = id;
    },
  },
};
</script>

<style>
/* custom scroll bar */
.sidebar-content::-webkit-scrollbar {
  width: 0px;
}
.sidebar-content::-webkit-scrollbar-thumb {
  background: transparent;
  border-radius: 10px;
}
.sidebar-content:hover::-webkit-scrollbar {
  width: 0px;
  position: absolute;
}
.sidebar-content:hover::-webkit-scrollbar-thumb {
  background: var(--colors-gray-400);
}
</style>