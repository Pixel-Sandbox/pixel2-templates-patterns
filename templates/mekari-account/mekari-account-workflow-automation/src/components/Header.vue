<template>
  <mp-box
    as="nav"
    border-bottom-color="gray.100"
    border-bottom-width="1px"
    border-style="solid"
    background-color="white"
    padding-x="6"
    padding-y="1.5"
  >
    <mp-flex
      flex-direction="row"
      justify-content="space-between"
      align-items="center"
    >
      <mp-flex gap="6">
        <mp-box as="a" to="/" :display="['none', 'block']">
          <img
            src="../assets/mekari-account-logo.svg"
            width="132px"
            height="34px"
          />
        </mp-box>
        <mp-box as="a" to="/" :display="['block', 'none']">
          <mp-icon name="talenta-brand" size="lg" />
        </mp-box>
      </mp-flex>

      <mp-box>
        <mp-flex justify-content="space-between" align-items="center">
          <mp-stack is-inline spacing="2">
            <mp-box>
              <mp-tooltip position="bottom" label="Switch app" use-portal>
                <mp-button-icon
                  name="shortcuts"
                  size="md"
                  @click="isSwitchAppOpen = true"
                />
              </mp-tooltip>
            </mp-box>
            <mp-box :display="['block', 'none']">
              <mp-tooltip position="bottom" label="Menu" use-portal>
                <mp-button-icon
                  name="burger"
                  size="md"
                  @click="isSidebarMenuOpen = true"
                />
              </mp-tooltip>
            </mp-box>
          </mp-stack>
          <mp-box :display="['none', 'block']">
            <SwitchAccount />
          </mp-box>
        </mp-flex>
      </mp-box>
    </mp-flex>
    <SwitchApp
      :isSwitchAppOpen="isSwitchAppOpen"
      :onSwitchAppToggle="onSwitchAppToggle"
    />
    <SidebarMobile
      :isSidebarMenuOpen="isSidebarMenuOpen"
      :onSidebarMenuToggle="onSidebarMenuToggle"
    />
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpIcon,
  MpStack,
  MpButtonIcon,
  MpTooltip,
} from "@mekari/pixel";
import SwitchApp from "../components/SwitchApp";
import SwitchAccount from "../components/SwitchAccount";
import SidebarMobile from "../components/SidebarMobile";

export default {
  name: "Header",
  components: {
    MpBox,
    MpFlex,
    MpIcon,
    MpStack,
    MpButtonIcon,
    MpTooltip,
    SwitchApp,
    SwitchAccount,
    SidebarMobile,
  },
  data: function () {
    return {
      isSwitchAppOpen: false,
      isSidebarMenuOpen: false,
      isNotificationMenuOpen: false,
      isSearchModalOpen: false,
    };
  },
  methods: {
    onSwitchAppToggle: function () {
      this.isSwitchAppOpen = !this.isSwitchAppOpen;
    },
    onSidebarMenuToggle: function () {
      this.isSidebarMenuOpen = !this.isSidebarMenuOpen;
    },
    onNotificationMenuToggle: function () {
      this.isNotificationMenuOpen = !this.isNotificationMenuOpen;
    },
    onSearchModalToggle: function (data) {
      this.isSearchModalOpen = data;
    },
    onSearchModalChange: function (data) {
      this.isSearchModalOpen = data;
    },
  },
};
</script>
