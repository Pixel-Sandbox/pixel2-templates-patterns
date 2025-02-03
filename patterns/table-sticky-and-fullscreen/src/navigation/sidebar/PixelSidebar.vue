<template>
  <mp-flex
    id="jurnalSidebar"
    :margin-right="!isShowSidebarChild && ['0px', '60px']"
    position="fixed"
    top="0"
    left="0"
    bottom="0"
    z-index="1000"
  >
    <mp-box
      height="100vh"
      padding-top="var(--jurnal-navbar-height)"
      :border-right="
        isToggle
          ? isStacked
            ? isShowSidebarChild
              ? '1px'
              : '0px'
            : isShowSidebarChild
            ? '1px'
            : '0px'
          : isStacked
          ? isShowSidebarChild
            ? '1px'
            : '0px'
          : '0px'
      "
      border-color="gray.100"
      transition="all 600ms cubic-bezier(0.4, 0, 0.2, 1) 0s"
      :background-color="isShowSidebarChild ? 'ash.100' : 'background'"
      :position="isStacked ? 'relative' : 'absolute'"
      :width="isToggle ? '3.75rem' : '13.5rem'"
      :max-width="isToggle ? '3.75rem' : '13.5rem'"
      :display="['none', 'block']"
      margin-right="-60px"
      z-index="3"
      :box-shadow="
        isToggle
          ? isStacked
            ? isShowSidebarChild
              ? 'lg'
              : 'none'
            : isChildToggle
            ? 'none'
            : 'lg'
          : isStacked
          ? isShowSidebarChild
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
        height="calc(100vh - var(--jurnal-navbar-height))"
        overflow-y="auto"
        overflow-x="hidden"
        padding-top="4"
        padding-x="2"
        padding-bottom="60px"
        @mouseenter="handleMouseEnter()"
        @mouseleave="handleMouseLeave()"
      >
        <mp-box v-for="(menu, index) in menus" :key="index">
          <mp-flex flex-direction="column">
            <mp-pseudo-box
              v-if="menu.name"
              :as="isWebComponent ? 'a' : 'router-link'"
              :to="isWebComponent ? '' : menu.link"
              :href="isWebComponent ? menu.link : ''"
              role="group"
              flex="1"
              border-radius="md"
              transition="all 600ms cubic-bezier(0.4, 0, 0.2, 1) 0s"
              padding-x="2.5"
              padding-y="2"
              :background-color="
                isActiveMenu(menu.link) ? 'blue.100' : 'inherit'
              "
              :color="isActiveMenu(menu.link) ? 'blue.400' : 'inherit'"
            >
              <mp-stack direction="row" align="center">
                <mp-icon
                  :name="menu.icon"
                  :variant="isActiveMenu(menu.link) ? 'fill' : 'outline'"
                  :color="isActiveMenu(menu.link) ? 'blue.400' : 'gray.600'"
                  :_groupHover="{
                    color: 'blue.400',
                    cursor: 'pointer',
                  }"
                />
                <mp-text
                  white-space="nowrap"
                  :font-weight="
                    isActiveMenu(menu.link) ? 'semibold' : 'inherit'
                  "
                  :color="isActiveMenu(menu.link) ? 'blue.400' : 'dark'"
                  :opacity="isToggle ? '0' : '1'"
                  :_groupHover="{
                    color: 'blue.400',
                    cursor: 'pointer',
                  }"
                >
                  {{ menu.name }}
                </mp-text>
              </mp-stack>
            </mp-pseudo-box>

            <mp-divider v-else />
          </mp-flex>
        </mp-box>
      </mp-box>

      <mp-flex
        gap="2"
        :background-color="isShowSidebarChild ? 'ash.100' : 'background'"
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
    <SidebarChild v-if="isShowSidebarChild" @toggle="handleChildToggle" />
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
  MpDivider,
} from "@mekari/pixel";
import SidebarChild from "./SidebarChild.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "PixelSidebar",
  props: {
    isCollapsed: [Boolean],
    defaultIsToggle: [Boolean],
    isAlternate: {
      type: Boolean,
      default: true,
    },
    isCustom: {
      type: Boolean,
      default: true,
    },
    withChild: [Boolean],
  },
  components: {
    MpBox,
    MpFlex,
    MpIcon,
    MpText,
    MpStack,
    MpPseudoBox,
    MpTooltip,
    MpDivider,
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
      isHovered: 0,
      hasSidebarChild: false,
    };
  },
  computed: {
    ...mapState({
      menus: (state) => state.sidebar.datas,
    }),
    isShowSidebarChild() {
      return this.hasSidebarChild;
    },
    currentPath() {
      if (this.isWebComponent) {
        return window.location.pathname;
      }

      return this.$route.path;
    },
    isWebComponent() {
      return this.$route === undefined || this.$route === null;
    },
  },
  watch: {
    currentPath: {
      handler: function (value) {
        this.hasSidebarChild = false;

        if (value.startsWith("/pengaturan")) {
          this.hasSidebarChild = true;
          if (this.isForced) {
            this.handleToggle();
          }
        }
      },
      deep: true,
      immediate: true,
    },
    isToggle: {
      handler: function (value) {
        document.documentElement.style.setProperty(
          "--jurnal-sidebar-width",
          value ? "3.75rem" : "13.5rem"
        );
      },
      immediate: true,
    },
  },
  created() {
    window.addEventListener("keydown", this.handleKeydown);

    this.getMenus();
  },
  beforeDestroy() {
    window.removeEventListener("keydown", this.handleKeydown);
  },
  methods: {
    ...mapActions({
      getMenus: "sidebar/getData",
    }),
    isActiveMenu(link) {
      if (this.isWebComponent) {
        return window.location.pathname.startsWith(link);
      }

      return this.$route.path.startsWith(link);
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
