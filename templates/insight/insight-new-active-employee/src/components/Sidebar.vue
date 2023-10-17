<template>
  <mp-box
    role="group"
    width="full"
    z-index="banner"
    max-height="calc(100vh - 60px)"
    border-right="1px"
    border-color="gray.100"
    transition="all .2s ease"
    background-color="white"
    :position="isStacked ? 'relative' : 'absolute'"
    :max-width="isToggle ? '3.75rem' : '13.5rem'"
    :display="['none', 'block']"
    margin-right="-60px"
    :box-shadow="
      isToggle
        ? '0 0 0 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0.0)'
        : isStacked
        ? '0 0 0 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0.0)'
        : '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
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
      padding-bottom="60px"
      @mouseenter="handleMouseEnter()"
      @mouseleave="handleMouseLeave()"
    >
      <mp-box v-for="menu in menus" :key="menu.parentId">
        <mp-text
          v-if="menu.group !== null"
          font-size="sm"
          font-weight="semibold"
          color="gray.400"
          padding-x="2"
          padding-y="2"
          :display="isToggle ? 'none' : 'block'"
          transition="all .2s ease"
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
              border-radius="sm"
              transition="all .2s ease"
              padding-x="2.5"
              padding-y="2"
              :background-color="items.isActive ? 'ice.50' : 'inherit'"
              :color="items.isActive ? 'blue.400' : 'inherit'"
              :_hover="{
                backgroundColor: 'ice.50',
                color: 'blue.400',
                cursor: 'pointer',
              }"
            >
              <mp-stack direction="row" align="center">
                <mp-icon
                  :name="items.icon"
                  :color="items.isActive ? 'blue.400' : 'gray.600'"
                />
                <mp-text
                  white-space="nowrap"
                  :font-weight="items.isActive ? 'semibold' : 'inherit'"
                  :color="items.isActive ? 'blue.400' : 'dark'"
                  :opacity="isToggle ? '0' : '1'"
                >
                  {{ items.name }}
                </mp-text>
              </mp-stack>
            </mp-pseudo-box>
          </mp-tooltip>
        </mp-flex>
        <mp-divider />
      </mp-box>
      <mp-flex
        gap="4"
        background-color="white"
        flex-direction="row"
        justify-content="space-between"
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
        <mp-text
          font-size="sm"
          color="gray.600"
          white-space="nowrap"
          padding-left="2.5"
          :display="isToggle ? 'none' : 'block'"
        >
          Company ID: 2087
        </mp-text>
        <mp-pseudo-box
          role="group"
          border-radius="sm"
          transition="all .2s ease"
          padding-x="2.5"
          padding-y="2"
          :_hover="{
            backgroundColor: 'ice.50',
            color: 'blue.400',
            cursor: 'pointer',
          }"
          @click="handleToggle"
        >
          <mp-stack direction="row" align="center">
            <mp-tooltip
              position="right"
              :label="!isForced ? 'Expand' : 'Collapse'"
              use-portal
            >
              <mp-icon
                :name="!isForced ? 'arrow-expand' : 'arrow-collapse'"
                size="sm"
              />
            </mp-tooltip>
          </mp-stack>
        </mp-pseudo-box>
      </mp-flex>
    </mp-box>
  </mp-box>
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

export default {
  name: "Sidebar",
  props: {
    isCollapsed: [Boolean],
    defaultIsToggle: [Boolean],
    isAlternate: [Boolean],
    isCustom: [Boolean],
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
  },
  data: function () {
    return {
      isStacked: !this.defaultIsToggle || false,
      isForced: this.isAlternate || false,
      isToggle: this.isCollapsed
        ? this.defaultIsToggle || true
        : this.defaultIsToggle || false,
      menus: [
        {
          parentId: 1,
          group: "EMPLOYEE",
          items: [
            {
              id: 1,
              name: "New & active",
              icon: "team",
              isActive: true,
            },
            {
              id: 2,
              name: "Headcount",
              icon: "team",
              isActive: false,
            },
            // {
            //   id: 3,
            //   name: "Employee turnover",
            //   icon: "user-response",
            //   isActive: false,
            // },
            // {
            //   id: 4,
            //   name: "Employee transfer",
            //   icon: "people",
            //   isActive: false,
            // },
            {
              id: 5,
              name: "Performance review",
              icon: "performance",
              isActive: false,
            },
            {
              id: 6,
              name: "Employee at risk",
              icon: "decrease-kpi",
              isActive: false,
            },
          ],
        },
        {
          parentId: 2,
          group: "TIME MANAGEMENT",
          items: [
            {
              id: 1,
              name: "Attendance",
              icon: "time",
              isActive: false,
            },
            {
              id: 2,
              name: "Overtime",
              icon: "overtime",
              isActive: false,
            },
          ],
        },
        {
          parentId: 3,
          group: "PAYROLL",
          items: [
            {
              id: 1,
              name: "Payroll",
              icon: "payroll",
              isActive: false,
            },
          ],
        },
        {
          parentId: 4,
          group: "INSIGHTS+",
          items: [
            {
              id: 1,
              name: "Custom dashboard",
              icon: "add-ons",
              isActive: false,
            },
            {
              id: 2,
              name: "Report builder",
              icon: "evaluation",
              isActive: false,
            },
          ],
        },
      ],
    };
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