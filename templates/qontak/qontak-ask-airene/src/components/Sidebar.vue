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
      z-index="3"
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
              as="router-link"
              transition="all 600ms cubic-bezier(0.4, 0, 0.2, 1) 0s"
              padding-x="2.5"
              padding-y="2"
              :to="menu.link"
              :background-color="menu.isActive ? 'blue.100' : 'inherit'"
              :color="menu.isActive ? 'blue.400' : 'inherit'"
            >
              <mp-flex
                position="relative"
                direction="row"
                align="center"
                justify="space-betwem"
              >
                <mp-box
                  v-if="menu.isShowBagde && isToggle"
                  position="absolute"
                  left="16px"
                  top="0"
                  width="3"
                  height="3"
                  border-radius="full"
                  background="rose.400"
                  border="2px solid"
                  
                  :border-color="withChild ? 'ash.100' : 'background'"
                />
                <mp-stack
                  width="full"
                  direction="row"
                  align="center"
                  justify="space-betwem"
                >
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
                    :_groupHover="{
                      color: 'blue.400',
                      cursor: 'pointer',
                    }"
                  >
                    {{ menu.name }}
                  </mp-text>
                </mp-stack>
                <mp-badge
                  v-if="menu.isShowBagde && !isToggle"
                  variant="solid"
                  variant-color="red"
                  >{{ menu.badgeText }}</mp-badge
                >
              </mp-flex>
            </mp-pseudo-box>
          </mp-flex>

          <mp-divider v-if="menu.hasDivider" />

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
                          :_groupHover="{
                            color: 'blue.400',
                          }"
                        >
                          {{ menu.name }}
                        </mp-text>
                      </mp-flex>
                      <mp-icon
                        name="chevrons-right"
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
                </mp-flex>
              </mp-box>
            </mp-popover-trigger>
            <mp-popover-content
              gutter="13"
              min-width="194px"
              background-color="overlayFill"
              box-shadow="lg"
              border-radius="md"
              v-pixel="{
                marginTop: '-10px !important',
              }"
            >
              <mp-popover-list
                @mouseenter="() => handleHovered(menu.parentId)"
                @mouseleave="() => handleHovered(0)"
              >
                <mp-popover-list-item
                  v-for="item in menu.items"
                  white-space="nowrap"
                  :color="item.isActive ? 'white' : 'white'"
                  :background-color="item.isActive ? 'blue.400' : 'transparent'"
                  :is-active="item.isActive"
                  :key="item.id"
                  :_hover="{
                    color: item.isActive ? 'white' : 'sky.100',
                  }"
                >
                  {{ item.name }}
                </mp-popover-list-item>
              </mp-popover-list>
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
            Company ID : 999999
          </mp-text>
        </mp-flex>
      </mp-box>
    </mp-box>
    <SidebarChild 
      v-if="withChild"
      :menu="childMenu"
      :title="childTitle"
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
  MpTooltip,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
  MpDivider,
  MpBadge,
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
    childTitle: [String],
    childMenu: [Array]
  },
  components: {
    MpBox,
    MpFlex,
    MpIcon,
    MpText,
    MpStack,
    MpPseudoBox,
    MpTooltip,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
    MpDivider,
    MpBadge,
    SidebarChild,
  },
  data() {
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
          parentId: 10,
          name: "Dashboard",
          icon: "dashboard",
          link: "/dashboard",
          isActive: this.$router.currentRoute.name === "dashboard",
          items: [],
        },
        {
          parentId: 11,
          name: "Inbox",
          icon: "inbox",
          link: "/",
          isActive: this.$router.currentRoute.name === "home",
          items: [],
        },
        {
          parentId: 12,
          name: "Broadcast",
          icon: "broadcast",
          link: "/broadcast",
          isActive: this.$router.currentRoute.name === "broadcast",
          items: [],
        },
        {
          parentId: 13,
          name: "Contacts",
          icon: "contact",
          link: "/contacts",
          isActive: this.$router.currentRoute.name === "contacts",
          items: [],
        },
        {
          parentId: 14,
          name: "Chatbot",
          icon: "chatbot",
          link: "",
          isActive: false,
          hasDivider: true,
          items: [],
        },
        {
          parentId: 21,
          name: "Report",
          icon: "reports",
          link: "",
          isActive: false,
          // isShowBagde: true,
          // badgeText: "9+",
          items: [],
        },
        {
          parentId: 22,
          name: "Package usage",
          icon: "transfer",
          link: "",
          isActive: false,
          hasDivider: true,
          items: [],
        },
        {
          parentId: 31,
          name: "Integrations",
          icon: "add-ons",
          link: "/integrations",
          isActive: this.$router.currentRoute.name === "integrations",
          items: [
            // {
            //   id: 1,
            //   name: "Dummy menu",
            //   isActive: false,
            // },
          ],
        },
        {
          parentId: 32,
          name: "Settings",
          icon: "settings",
          link: "",
          // isActive: this.$router.currentRoute.name === "properties",
          hasDivider: true,
          items: [],
        },
      ],
    };
  },
  mounted() {
    window.addEventListener("keydown", this.handleKeydown);
  },
  beforeDestroy() {
    window.removeEventListener("keydown", this.handleKeydown);
  },
  methods: {
    handleMouseEnter() {
      if (this.isForced) {
        return;
      } else {
        !this.isToggle && this.isCollapsed
          ? (this.isToggle = true)
          : (this.isToggle = false);
      }
    },
    handleMouseLeave() {
      if (this.isForced) {
        return;
      } else {
        !this.isToggle && this.isCollapsed
          ? (this.isToggle = false)
          : (this.isToggle = true);
      }
    },
    handleToggle() {
      this.isToggle = !this.isToggle;
      this.isForced = !this.isForced;
      if (this.isCustom) {
        this.isToggle = false;
        this.isStacked = !this.isStacked;
      }

      this.handleMouseLeave();
    },
    handleChildToggle(e) {
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
