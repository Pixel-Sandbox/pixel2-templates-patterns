<template>
  <mp-box
    role="group"
    width="full"
    max-height="calc(100vh - 60px)"
    border-right="1px"
    border-color="gray.100"
    transition="all .2s ease"
    :max-width="isToggle ? '3.75rem' : '13.5rem'"
  >
    <mp-box position="relative">
      <mp-pseudo-box
        v-if="!isCollapsed"
        opacity="0"
        position="absolute"
        top="1.375rem"
        right="-0.938rem"
        background-color="white"
        border="1px solid"
        border-color="gray.400"
        border-radius="full"
        box-shadow="md"
        transition="all .2s ease"
        :_groupHover="{ opacity: '1' }"
      >
        <mp-tooltip position="right" :label="isToggle ? 'Expand' : 'Collapsed'">
          <mp-box
            as="button"
            height="7.5"
            width="7.5"
            display="flex"
            align-items="center"
            justify-content="center"
            @click="isToggle = !isToggle"
          >
            <mp-icon :name="isToggle ? 'chevrons-right' : 'chevrons-left'" />
          </mp-box>
        </mp-tooltip>
      </mp-pseudo-box>
    </mp-box>
    <mp-box
      as="section"
      class="sidebar-content"
      data-id="sidebar"
      width="full"
      height="calc(100vh - 60px)"
      overflow-y="auto"
      overflow-x="hidden"
      padding-y="4"
      padding-x="2"
    >
      <mp-flex flex-direction="column" v-for="menu in menus" :key="menu.id">
        <mp-tooltip
          position="right"
          :label="menu.name"
          :visibility="isToggle ? 'visible' : 'hidden'"
        >
          <mp-pseudo-box
            role="group"
            flex="1"
            border-radius="sm"
            as="router-link"
            transition="all .2s ease"
            padding-x="2.5"
            padding-y="2"
            :to="menu.link"
            :background-color="menu.isActive ? 'ice.50' : 'inherit'"
            :font-weight="menu.isActive ? 'semibold' : 'inherit'"
            :color="menu.isActive ? 'blue.400' : 'inherit'"
            :_hover="{
              backgroundColor: 'ice.50',
              color: 'blue.400',
              cursor: 'pointer',
            }"
          >
            <mp-stack direction="row" align="center">
              <mp-icon
                :name="menu.icon"
                :color="menu.isActive ? 'blue.400' : 'inherit'"
              />
              <mp-text
                white-space="nowrap"
                transition="all .2s ease"
                :opacity="isToggle ? '0' : '1'"
              >
                {{ menu.name }}
              </mp-text>
            </mp-stack>
          </mp-pseudo-box>
        </mp-tooltip>
      </mp-flex>
      <mp-divider />
      <mp-text
        v-if="!isToggle"
        color="gray.600"
        font-size="sm"
        padding-left="4"
        padding-top="2"
      >
        User ID: 2802
      </mp-text>
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
  name: "Header",
  props: {
    isCollapsed: [Boolean],
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
      isToggle: this.isCollapsed ? true : false,
      menus: [
        {
          id: 1,
          name: "Mulai dari sini",
          icon: "flag",
          link: "/",
          isActive: false,
        },
        {
          id: 2,
          name: "Produk",
          icon: "home",
          link: "/",
          isActive: false,
        },
        {
          id: 3,
          name: "Akun Anda",
          icon: "profile",
          link: "/",
          isActive: false,
        },
        {
          id: 4,
          name: "Info perusahaan",
          icon: "company",
          link: "/",
          isActive: false,
        },
        {
          id: 5,
          name: "Tagihan",
          icon: "billing",
          link: "/",
          isActive: false,
        },
        {
          id: 6,
          name: "Keamanan",
          icon: "security",
          link: "/",
          isActive: false,
        },
        {
          id: 7,
          name: "Marketplace",
          icon: "application",
          link: "/",
          isActive: true,
        },
        {
          id: 8,
          name: "Settings",
          icon: "settings",
          link: "/",
          isActive: false,
        },
      ],
    };
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
  width: 5px;
  position: absolute;
}
.sidebar-content:hover::-webkit-scrollbar-thumb {
  background: var(--colors-gray-400);
}
</style>