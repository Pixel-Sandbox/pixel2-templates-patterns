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
        <mp-box as="a" to="/">
          <img
            src="../assets/mekari-backyard-logo.svg"
            width="148px"
            height="40px"
          />
        </mp-box>
        <mp-divider orientation="vertical" margin-x="0" margin-y="2" />
        <mp-popover use-portal>
          <mp-popover-trigger>
            <mp-button variant="link" right-icon="caret-down" margin-y="2">
              Marketplace
            </mp-button>
          </mp-popover-trigger>
          <mp-popover-content
            max-width="64"
            bg="white"
            rounded="md"
            shadow="lg"
            border-width="1px"
            border-color="gray.400"
          >
            <mp-popover-list>
              <mp-popover-list-item is-active>Marketplace</mp-popover-list-item>
              <mp-popover-list-item>Mekari one backyard</mp-popover-list-item>
              <mp-popover-list-item>Subscriptions</mp-popover-list-item>
            </mp-popover-list>
          </mp-popover-content>
        </mp-popover>
      </mp-flex>
      <mp-box>
        <mp-flex justify-content="space-between" align-items="center">
          <mp-stack is-inline spacing="2">
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
  MpStack,
  MpButton,
  MpButtonIcon,
  MpTooltip,
  MpDivider,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
} from "@mekari/pixel";
import SwitchAccount from "../components/SwitchAccount";
import SidebarMobile from "../components/SidebarMobile";

export default {
  name: "Header",
  components: {
    MpBox,
    MpFlex,
    MpStack,
    MpButton,
    MpButtonIcon,
    MpTooltip,
    MpDivider,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
    SwitchAccount,
    SidebarMobile,
  },
  data: function () {
    return {
      isSidebarMenuOpen: false,
    };
  },
  methods: {
    onSidebarMenuToggle: function () {
      this.isSidebarMenuOpen = !this.isSidebarMenuOpen;
    },
  },
};
</script>
