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
      height="100vh"
      :max-width="['full', 'xs']"
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
          padding-x="2"
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
              PT. Mid Solusi Nusantara
            </mp-text>
          </mp-flex>
        </mp-flex>

        <mp-box
          v-if="!isToggle"
          padding-x="2.5"
          padding-y="4"
          background-color="white"
        >
          <mp-box background-color="white">
            <mp-select size="md" value="subscriptions" is-full-width>
              <option value="subscriptions">Subscriptions</option>
              <option value="marketplace">Marketplace</option>
              <option value="mekari-one-backyard">Mekari one backyard</option>
            </mp-select>
          </mp-box>
          <mp-divider margin-y="4" />
          <mp-flex flex-direction="column" v-for="menu in menus" :key="menu.id">
            <mp-pseudo-box
              v-if="!menu.isNested"
              role="group"
              flex="1"
              border-radius="sm"
              as="router-link"
              transition="all .2s ease"
              padding-x="2.5"
              padding-y="2"
              :to="menu.link"
              :background-color="menu.isActive ? 'ice.50' : 'inherit'"
              :color="menu.isActive ? 'blue.400' : 'inherit'"
              :_hover="{
                backgroundColor: 'ice.50',
                color: 'blue.400',
                cursor: 'pointer',
              }"
            >
              <mp-stack direction="row" align="center" justify="space-between">
                <mp-flex gap="2">
                  <mp-icon
                    :name="menu.icon"
                    :color="menu.isActive ? 'blue.400' : 'inherit'"
                  />
                  <mp-text
                    white-space="nowrap"
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
              role="group"
              flex="1"
              border-radius="sm"
              transition="all .2s ease"
              padding-x="2.5"
              padding-y="2"
              :background-color="menu.isActive ? 'ice.50' : 'inherit'"
              :color="menu.isActive ? 'blue.400' : 'inherit'"
              :_hover="{
                backgroundColor: 'ice.50',
                color: 'blue.400',
                cursor: 'pointer',
              }"
              @click="handleToggle(true)"
            >
              <mp-stack direction="row" align="center" justify="space-between">
                <mp-flex gap="2">
                  <mp-icon
                    :name="menu.icon"
                    :color="menu.isActive ? 'blue.400' : 'inherit'"
                  />
                  <mp-text
                    white-space="nowrap"
                    :font-weight="menu.isActive ? 'semibold' : 'inherit'"
                  >
                    {{ menu.name }}
                  </mp-text>
                </mp-flex>
                <mp-icon v-if="menu.isNested" name="chevrons-right" />
              </mp-stack>
            </mp-pseudo-box>
          </mp-flex>
        </mp-box>
        <mp-box v-else padding-x="2" padding-y="4" background-color="white">
          <mp-flex flex-direction="column">
            <mp-pseudo-box
              role="group"
              flex="1"
              border-radius="sm"
              transition="all .2s ease"
              padding-x="2.5"
              padding-y="2"
              :_hover="{
                backgroundColor: 'ice.50',
                color: 'blue.400',
                cursor: 'pointer',
              }"
              @click="handleToggle(false)"
            >
              <mp-stack direction="row" align="center" justify="space-between">
                <mp-flex gap="2">
                  <mp-icon name="arrows-left" />
                  <mp-text white-space="nowrap"> Back </mp-text>
                </mp-flex>
              </mp-stack>
            </mp-pseudo-box>
          </mp-flex>
          <mp-divider />
          <mp-box>
            <mp-text
              font-size="md"
              font-weight="semibold"
              color="blue.400"
              padding-x="4"
              padding-y="2"
            >
              SUBSCRIPTION
            </mp-text>
            <mp-box>
              <mp-flex direction="column">
                <mp-pseudo-box
                  flex="1"
                  role="group"
                  as="router-link"
                  to="/"
                  border-radius="sm"
                  padding-x="4"
                  padding-y="2"
                  color="dark"
                  font-weight="regular"
                  :_hover="{
                    color:
                      this.$router.currentRoute.name === 'Subscription' ||
                      this.$router.currentRoute.name === 'CreateSubscription' ||
                      this.$router.currentRoute.name === 'ViewSubscription'
                        ? 'dark'
                        : 'blue.400',
                    cursor: 'pointer',
                  }"
                >
                  <mp-stack direction="row" align="center">
                    <mp-text
                      :font-weight="
                        this.$router.currentRoute.name === 'Subscription' ||
                        this.$router.currentRoute.name ===
                          'CreateSubscription' ||
                        this.$router.currentRoute.name === 'ViewSubscription'
                          ? 'semibold'
                          : 'regular'
                      "
                      >All subscription</mp-text
                    >
                  </mp-stack>
                </mp-pseudo-box>
              </mp-flex>
            </mp-box>
            <mp-box>
              <mp-flex direction="column">
                <mp-pseudo-box
                  flex="1"
                  role="group"
                  as="router-link"
                  to="/approval-request"
                  border-radius="sm"
                  padding-x="4"
                  padding-y="2"
                  color="dark"
                  font-weight="inherit"
                  :_hover="{
                    color:
                      this.$router.currentRoute.name === 'ApprovalRequest' ||
                      this.$router.currentRoute.name === 'ViewApprovalRequest'
                        ? 'dark'
                        : 'blue.400',
                    cursor: 'pointer',
                  }"
                >
                  <mp-stack
                    direction="row"
                    aalign-items="center"
                    justify-content="space-between"
                  >
                    <mp-text
                      :font-weight="
                        this.$router.currentRoute.name === 'ApprovalRequest' ||
                        this.$router.currentRoute.name === 'ViewApprovalRequest'
                          ? 'semibold'
                          : 'regular'
                      "
                      >Approval request</mp-text
                    >
                    <mp-badge variant="solid" variant-color="red"> 1 </mp-badge>
                  </mp-stack>
                </mp-pseudo-box>
              </mp-flex>
            </mp-box>
            <mp-box>
              <mp-flex direction="column">
                <mp-pseudo-box
                  flex="1"
                  role="group"
                  as="router-link"
                  to="/proforma-invoice"
                  border-radius="sm"
                  padding-x="4"
                  padding-y="2"
                  color="dark"
                  font-weight="inherit"
                  :_hover="{
                    color:
                      this.$router.currentRoute.name === 'ProformaInvoice' ||
                      this.$router.currentRoute.name === 'ViewProformaInvoice'
                        ? 'dark'
                        : 'blue.400',
                    cursor: 'pointer',
                  }"
                >
                  <mp-stack direction="row" align="center">
                    <mp-text
                      :font-weight="
                        this.$router.currentRoute.name === 'ProformaInvoice' ||
                        this.$router.currentRoute.name === 'ViewProformaInvoice'
                          ? 'semibold'
                          : 'regular'
                      "
                      >Proforma invoice</mp-text
                    >
                  </mp-stack>
                </mp-pseudo-box>
              </mp-flex>
            </mp-box>
            <mp-box>
              <mp-flex direction="column">
                <mp-pseudo-box
                  flex="1"
                  role="group"
                  as="router-link"
                  to="/client-invoice"
                  border-radius="sm"
                  padding-x="4"
                  padding-y="2"
                  color="dark"
                  font-weight="inherit"
                  :_hover="{
                    color:
                      this.$router.currentRoute.name === 'ClientInvoice' ||
                      this.$router.currentRoute.name === 'ViewClientInvoice'
                        ? 'dark'
                        : 'blue.400',
                    cursor: 'pointer',
                  }"
                >
                  <mp-stack direction="row" align="center">
                    <mp-text
                      :font-weight="
                        this.$router.currentRoute.name === 'ClientInvoice' ||
                        this.$router.currentRoute.name === 'ViewClientInvoice'
                          ? 'semibold'
                          : 'regular'
                      "
                      >Client invoice</mp-text
                    >
                  </mp-stack>
                </mp-pseudo-box>
              </mp-flex>
            </mp-box>
          </mp-box>
        </mp-box>
        <mp-box padding="4">
          <mp-flex flex-direction="column">
            <mp-text as="a" href="#" color="gray.600" padding-y="2">
              Account settings
            </mp-text>
            <mp-text as="a" href="#" color="gray.600" padding-y="2">
              Sign out
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
  MpBadge,
  MpText,
  MpIcon,
  MpAvatar,
  MpSelect,
  MpDivider,
  MpDrawer,
  MpDrawerOverlay,
  MpDrawerCloseButton,
  MpDrawerContent,
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
    MpBadge,
    MpText,
    MpIcon,
    MpAvatar,
    MpSelect,
    MpDivider,
    MpDrawer,
    MpDrawerOverlay,
    MpDrawerCloseButton,
    MpDrawerContent,
    MpDrawerBody,
  },
  data: function () {
    return {
      isActive: 0,
      isToggle: false,
      menus: [
        {
          id: 1,
          name: "Subscription",
          icon: "chart-of-account",
          link: "/",
          isNested: true,
          isActive:
            this.$router.currentRoute.name === "Subscription" ||
            this.$router.currentRoute.name === "CreateSubscription" ||
            this.$router.currentRoute.name === "ViewSubscription" ||
            this.$router.currentRoute.name === "ApprovalRequest" ||
            this.$router.currentRoute.name === "ViewApprovalRequest" ||
            this.$router.currentRoute.name === "ProformaInvoice" ||
            this.$router.currentRoute.name === "ViewProformaInvoice" ||
            this.$router.currentRoute.name === "ClientInvoice" ||
            this.$router.currentRoute.name === "ViewClientInvoice",
        },
      ],
    };
  },
  methods: {
    handleToggle: function (data) {
      this.isToggle = data;
    },
    handleChange: function (data) {
      this.isActive = data;
    },
  },
};
</script>
