<template>
  <mp-flex :margin-right="!withChild && ['0px', '60px']">
    <mp-box
      max-height="calc(100vh - 60px)"
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
        height="calc(100vh - 60px)"
        overflow-y="auto"
        overflow-x="hidden"
        padding-top="4"
        padding-x="2"
        padding-bottom="100px"
        @mouseenter="handleMouseEnter()"
        @mouseleave="handleMouseLeave()"
      >
        <mp-box v-for="menu in menus" :key="menu.parentId">
          <mp-text
            v-if="menu.group !== null"
            white-space="nowrap"
            font-size="sm"
            font-weight="semibold"
            letter-spacing="2px"
            color="gray.600"
            padding-x="2"
            padding-y="2"
            :display="isToggle ? 'none' : 'block'"
            transition="all 600ms cubic-bezier(0.4, 0, 0.2, 1) 0s"
          >
            {{ menu.group }}
          </mp-text>

          <mp-flex
            flex-direction="column"
            v-for="items in menu.items"
            :key="items.id"
          >
            <mp-tooltip
              position="right"
              :label="items.name"
              :visibility="isToggle ? 'visible' : 'hidden'"
              use-portal
            >
              <mp-pseudo-box
                role="group"
                flex="1"
                border-radius="md"
                as="a"
                transition="all 600ms cubic-bezier(0.4, 0, 0.2, 1) 0s"
                padding-x="2.5"
                padding-y="2"
                :to="items.link"
                :background-color="items.isActive ? 'blue.100' : 'inherit'"
                :color="items.isActive ? 'blue.400' : 'inherit'"
              >
                <mp-stack direction="row" align="center">
                  <mp-icon
                    :name="items.icon"
                    :variant="items.isActive ? 'fill' : 'outline'"
                    :color="items.isActive ? 'blue.400' : 'gray.600'"
                    :opacity="isToggle ? '1' : '1'"
                    :_groupHover="{
                      color: 'blue.400',
                      cursor: 'pointer',
                    }"
                  />
                  <mp-text
                    white-space="nowrap"
                    :font-weight="items.isActive ? 'semibold' : 'inherit'"
                    :color="items.isActive ? 'blue.400' : 'dark'"
                    :opacity="isToggle ? '0' : '1'"
                    :_groupHover="{
                      color: 'blue.400',
                      cursor: 'pointer',
                    }"
                  >
                    {{ items.name }}
                  </mp-text>
                </mp-stack>
              </mp-pseudo-box>
            </mp-tooltip>
          </mp-flex>
          <mp-divider v-if="menu.parentId !== 5" />
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
            Company ID : 2087
          </mp-text>
        </mp-flex>
      </mp-box>
    </mp-box>
    <SidebarChild v-if="withChild" @toggle="handleChildToggle" />
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
} from "@mekari/pixel";
import SidebarChild from "./SidebarChild";

export default {
  name: "Sidebar",
  props: {
    isCollapsed: [Boolean],
    defaultIsToggle: [Boolean],
    isAlternate: [Boolean],
    isCustom: [Boolean],
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
    SidebarChild,
  },
  data: function () {
    return {
      isStacked: !this.defaultIsToggle || false,
      isForced: this.isAlternate || false,
      isToggle: this.isCollapsed
        ? this.defaultIsToggle || true
        : this.defaultIsToggle || false,
      isChildToggle: true,
      menus: [
        {
          parentId: 1,
          group: null,
          items: [
            {
              id: 1,
              name: "Dashboard",
              icon: "home",
              link: "/",
              isActive: false,
            },
            {
              id: 2,
              name: "Employee",
              icon: "team",
              link: "/employee",
              isActive: false,
            },
          ],
        },
        {
          parentId: 2,
          group: "TIME MANAGEMENT",
          items: [
            {
              id: 3,
              name: "Attendance",
              icon: "time",
              link: "/",
              isActive: false,
            },
            {
              id: 4,
              name: "Time Off",
              icon: "calendar",
              link: "/",
              isActive: false,
            },
            {
              id: 5,
              name: "Schedule",
              icon: "schedule",
              link: "/",
              isActive: false,
            },
            {
              id: 6,
              name: "Overtime",
              icon: "overtime",
              link: "/",
              isActive: false,
            },
            {
              id: 7,
              name: "Timesheet",
              icon: "log",
              link: "/",
              isActive: false,
            },
            {
              id: 8,
              name: "Calendar",
              icon: "calendar",
              link: "/",
              isActive: false,
            },
          ],
        },
        {
          parentId: 3,
          group: "FINANCE",
          items: [
            {
              id: 9,
              name: "Reimbursement",
              icon: "expenses",
              link: "/",
              isActive: false,
            },
            {
              id: 10,
              name: "Cash Advance",
              icon: "cash-advance",
              link: "/",
              isActive: false,
            },
            {
              id: 11,
              name: "Loan",
              icon: "loan",
              link: "/",
              isActive: false,
            },
            {
              id: 12,
              name: "Mekari Expense",
              icon: "expenses",
              link: "/",
              isActive: false,
            },
          ],
        },
        {
          parentId: 4,
          group: "PAYROLL",
          items: [
            {
              id: 13,
              name: "Payroll",
              icon: "calculator",
              link: "/",
              isActive: false,
            },
            {
              id: 14,
              name: "Mekari Flex",
              icon: "flex-outline",
              link: "/",
              isActive: false,
            },
          ],
        },
        {
          parentId: 5,
          group: "OTHERS",
          items: [
            {
              id: 15,
              name: "Company",
              icon: "company",
              link: "/report-builder",
              isActive: false,
            },
            {
              id: 16,
              name: "Integrations",
              icon: "add-ons",
              link: "/",
              isActive: false,
            },
            {
              id: 17,
              name: "Settings",
              icon: "settings",
              link: "/",
              isActive: true,
            },
          ],
        },
      ],
    };
  },
  created() {
    window.addEventListener("keydown", this.handleKeydown);
  },
  beforeDestroy() {
    window.removeEventListener("keydown", this.handleKeydown);
  },
  methods: {
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
      if (e.shiftKey && e.keyCode === 88) {
        this.handleToggle();
        this.handleMouseLeave();
      }
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