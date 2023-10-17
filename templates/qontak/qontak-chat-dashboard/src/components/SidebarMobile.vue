<template>
  <mp-drawer
    :is-open="isSidebarMenuOpen"
    :on-close="onSidebarMenuToggle"
    :return-focus-on-close="false"
  >
    <mp-drawer-overlay :display="['none', 'block']" />
    <mp-drawer-content
      border="none"
      border-left="1px"
      border-left-color="gray.100"
      background-color="background"
      :max-width="['full', 'xs']"
      :margin-top="['56px', '0px']"
      :height="['calc(100vh - 56px)', '100vh']"
    >
      <mp-drawer-close-button top="13px" right="16px" />
      <mp-drawer-body
        background-color="background"
        padding="0"
        max-height="calc(100vh)"
        overflow="hidden auto"
      >
        <mp-flex
          align-items="center"
          border-radius="none"
          padding-x="4"
          padding-y="2.5"
          background-color="white"
        >
          <mp-avatar
            name="Rizal Chandra"
            src="https://i.pravatar.cc/300"
            size="md"
            margin-right="2"
            :show-border="false"
          />
          <mp-flex flex-direction="column">
            <mp-text font-weight="semibold" line-height="md">
              Rizal Chandra
            </mp-text>
            <mp-text font-size="sm" color="gray.600">
              PT Central Perk Indonesia
            </mp-text>
          </mp-flex>
        </mp-flex>
        <mp-box
          v-if="!isToggle"
          padding-x="2"
          padding-y="4"
          background-color="white"
        >
          <mp-flex flex-direction="column" v-for="menu in menus" :key="menu.id">
            <mp-pseudo-box
              v-if="!menu.isNested"
              as="router-link"
              :to="menu.link"
              role="group"
              flex="1"
              border-radius="sm"
              transition="all .2s ease"
              padding-x="2.5"
              padding-y="2"
              :background-color="menu.isActive ? 'ice.50' : 'inherit'"
              :_hover="{
                backgroundColor: 'ice.50',
                color: menu.isActive ? 'blue.400' : 'gray.600',
                cursor: 'pointer',
              }"
            >
              <mp-stack direction="row" align="center" justify="space-between">
                <mp-flex gap="2">
                  <mp-icon
                    :name="menu.icon"
                    :color="menu.isActive ? 'blue.400' : 'gray.600'"
                  />
                  <mp-text
                    white-space="nowrap"
                    :color="menu.isActive ? 'blue.400' : 'gray.600'"
                    :font-weight="menu.isActive ? 'semibold' : 'inherit'"
                  >
                    {{ menu.name }}
                  </mp-text>
                </mp-flex>
                <mp-icon
                  v-if="menu.isNested"
                  name="chevrons-right"
                  :color="black"
                />
              </mp-stack>
            </mp-pseudo-box>
            <mp-pseudo-box
              v-else
              as="router-link"
              :to="menu.link"
              role="group"
              flex="1"
              border-radius="sm"
              transition="all .2s ease"
              padding-x="2.5"
              padding-y="2"
              :background-color="menu.isActive ? 'ice.50' : 'inherit'"
              :_hover="{
                backgroundColor: 'ice.50',
                color: menu.isActive ? 'blue.400' : 'gray.600',
                cursor: 'pointer',
              }"
            >
              <mp-stack direction="row" align="center" justify="space-between">
                <mp-flex gap="2">
                  <mp-icon
                    :name="menu.icon"
                    :color="menu.isActive ? 'blue.400' : 'gray.600'"
                  />
                  <mp-text
                    white-space="nowrap"
                    :color="menu.isActive ? 'blue.400' : 'gray.600'"
                    :font-weight="menu.isActive ? 'semibold' : 'inherit'"
                  >
                    {{ menu.name }}
                  </mp-text>
                </mp-flex>
              </mp-stack>
            </mp-pseudo-box>
            <mp-divider v-if="menu.isNested" />
          </mp-flex>
        </mp-box>
        <mp-box padding="4">
          <mp-flex flex-direction="column">
            <mp-text as="a" href="#" color="gray.600" padding-y="2">
              Account settings
            </mp-text>
            <mp-text as="a" href="#" color="gray.600" padding-y="2">
              Company info
            </mp-text>
            <mp-text as="a" href="#" color="gray.600" padding-y="2">
              Company list
              <mp-icon name="chevrons-right" float="right" />
            </mp-text>
            <mp-text as="a" href="#" color="gray.600" padding-y="2">
              Help & Support
            </mp-text>
            <mp-text as="a" href="#" color="gray.600" padding-y="2">
              Change language
            </mp-text>
            <mp-divider />
            <mp-text as="a" href="#" color="gray.600" padding-y="2">
              Switch account
              <mp-icon name="chevrons-right" float="right" />
            </mp-text>
            <mp-text as="a" href="#" color="gray.600" padding-y="2">
              Sign out
              <mp-icon name="chevrons-right" float="right" />
            </mp-text>
            <mp-divider />
            <mp-text as="a" href="#" color="gray.600" padding-y="2">
              Privacy
            </mp-text>
            <mp-text as="a" href="#" color="gray.600" padding-y="2">
              Terms of Use
            </mp-text>
            <mp-text as="a" href="#" color="gray.600" padding-y="2">
              About Mekari Account
            </mp-text>
            <mp-text color="gray.600" padding-y="2">Mekari © 2022</mp-text>
          </mp-flex>
        </mp-box>
      </mp-drawer-body>
    </mp-drawer-content>
  </mp-drawer>
</template>

<script>
import {
  MpBox,
  MpPseudoBox,
  MpFlex,
  MpStack,
  MpText,
  MpIcon,
  MpAvatar,
  MpDivider,
  MpDrawer,
  MpDrawerOverlay,
  MpDrawerContent,
  MpDrawerCloseButton,
  MpDrawerBody,
} from "@mekari/pixel";

export default {
  name: "SidebarMobile",
  props: {
    isSidebarMenuOpen: [Boolean],
    onSidebarMenuToggle: [Function],
  },
  components: {
    MpBox,
    MpPseudoBox,
    MpFlex,
    MpStack,
    MpText,
    MpIcon,
    MpAvatar,
    MpDivider,
    MpDrawer,
    MpDrawerOverlay,
    MpDrawerContent,
    MpDrawerCloseButton,
    MpDrawerBody,
  },
  data() {
    return {
      isActive: 0,
      isToggle: false,
      menus: [
        {
          parentId: 11,
          name: "Inbox",
          icon: "inbox",
          link: "/",
          isActive: this.$route.name === "home",
          items: [],
        },
        {
          parentId: 12,
          name: "Broadcast",
          icon: "broadcast",
          link: "/broadcast",
          isActive: this.$route.name === "broadcast",
          items: [],
        },
        {
          parentId: 13,
          name: "Contacts",
          icon: "contact",
          link: "/contacts",
          isActive: this.$route.name === "contacts",
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
          isActive: this.$route.name === "integrations",
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
          hasDivider: false,
          items: [],
        },
      ],
    };
  },
};
</script>
