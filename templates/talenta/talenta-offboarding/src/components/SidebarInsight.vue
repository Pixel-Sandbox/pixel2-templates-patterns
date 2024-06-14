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
      :background-color="withChild ? '#E7EDF5' : '#F1F5F9'"
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
                as="router-link"
                transition="all 600ms cubic-bezier(0.4, 0, 0.2, 1) 0s"
                padding-x="2.5"
                padding-y="2"
                :to="items.link"
                :background-color="items.isActive ? '#D6DFFF' : 'inherit'"
                :color="items.isActive ? 'blue.400' : 'inherit'"
              >
                <mp-stack direction="row" align="center">
                  <mp-icon
                    :name="items.icon"
                    :variant="items.isActive ? 'fill' : 'outline'"
                    :color="items.isActive ? 'blue.400' : 'gray.600'"
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
          <mp-divider v-if="menu.parentId !== 4" />
        </mp-box>
        <mp-flex
          gap="2"
          :background-color="withChild ? '#E7EDF5' : '#F1F5F9'"
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
                backgroundColor: '#D6DFFF',
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

export default {
  name: "SidebarInsight",
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
          group: "EMPLOYEE",
          items: [
            {
              id: 1,
              name: "New & active",
              icon: "team",
              link: "/new-active-employee",
              isActive: true,
            },
            {
              id: 2,
              name: "Headcount",
              icon: "team",
              link: "/new-active-employee",
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
              link: "/new-active-employee",
              isActive: false,
            },
            {
              id: 6,
              name: "Employee at risk",
              icon: "decrease-kpi",
              link: "/new-active-employee",
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
              link: "/new-active-employee",
              isActive: false,
            },
            {
              id: 2,
              name: "Overtime",
              icon: "overtime",
              link: "/new-active-employee",
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
              link: "/new-active-employee",
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
              link: "/new-active-employee",
              isActive: false,
            },
            {
              id: 2,
              name: "Report builder",
              icon: "evaluation",
              link: "/new-active-employee",
              isActive: false,
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
      const body = document.getElementsByTagName("body")[0];

      if (e.shiftKey && e.keyCode === 88 && e.srcElement === body) {
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