<template>
  <mp-box
    id="jurnalNavbar"
    position="fixed"
    top="0"
    left="0"
    right="0"
    z-index="1001"
  >
    <mp-box :height="isShowBroadcast ? '40px' : '0px'">
      <mp-broadcast v-if="isShowBroadcast" v-bind="broadcastAttrs" />
    </mp-box>

    <mp-box
      as="nav"
      border-bottom-color="gray.100"
      border-bottom-width="1px"
      border-style="solid"
      background-color="white"
      padding-x="6"
      padding-y="1.5"
      height="56px"
    >
      <mp-flex
        flex-direction="row"
        justify-content="space-between"
        align-items="center"
      >
        <mp-flex gap="6">
          <mp-box as="a" to="/">
            <img
              src="https://cdn.mekari.design/logo/jurnal/default.svg"
              alt=""
              height="56"
              width="auto"
            />
          </mp-box>
        </mp-flex>

        <mp-box>
          <mp-flex justify-content="space-between" align-items="center">
            <mp-stack is-inline spacing="2">
              <mp-box>
                <mp-popover use-portal>
                  <mp-popover-trigger>
                    <mp-box>
                      <mp-tooltip
                        position="bottom"
                        label="Quick action"
                        use-portal
                      >
                        <mp-button-icon name="add" size="md" />
                      </mp-tooltip>
                    </mp-box>
                  </mp-popover-trigger>
                  <mp-popover-content
                    max-width="56"
                    background-color="overlayFill"
                    box-shadow="lg"
                    border-radius="md"
                  >
                    <mp-popover-list>
                      <mp-box width="full" padding-x="3" padding-y="2">
                        <mp-text color="gray.100" text-align="left">
                          B U A T
                        </mp-text>
                      </mp-box>
                      <mp-popover-list-item
                        background-color="transparent"
                        color="white"
                        :_hover="{
                          background: 'blue.400',
                        }"
                      >
                        Penjualan
                      </mp-popover-list-item>
                      <mp-popover-list-item
                        background-color="transparent"
                        color="white"
                        :_hover="{
                          background: 'blue.400',
                        }"
                      >
                        Pembelian
                      </mp-popover-list-item>
                      <mp-popover-list-item
                        background-color="transparent"
                        color="white"
                        :_hover="{
                          background: 'blue.400',
                        }"
                      >
                        Biaya
                      </mp-popover-list-item>
                      <mp-box width="full" padding-x="3" padding-y="2">
                        <mp-text color="gray.100" text-align="left">
                          T A M B A H
                        </mp-text>
                      </mp-box>
                      <mp-popover-list-item
                        background-color="transparent"
                        color="white"
                        :_hover="{
                          background: 'blue.400',
                        }"
                      >
                        Kontak
                      </mp-popover-list-item>
                      <mp-popover-list-item
                        background-color="transparent"
                        color="white"
                        :_hover="{
                          background: 'blue.400',
                        }"
                      >
                        Produk
                      </mp-popover-list-item>
                      <mp-popover-list-item
                        background-color="transparent"
                        color="white"
                        :_hover="{
                          background: 'blue.400',
                        }"
                      >
                        Gudang
                      </mp-popover-list-item>
                    </mp-popover-list>
                  </mp-popover-content>
                </mp-popover>
              </mp-box>
              <mp-box>
                <mp-tooltip position="bottom" label="Referral" use-portal>
                  <mp-button-icon name="gift" size="md" />
                </mp-tooltip>
              </mp-box>
              <mp-box>
                <mp-tooltip
                  position="bottom"
                  label="Riwayat aktivitas"
                  use-portal
                >
                  <mp-button-icon
                    @click="isActivityLogOpen = true"
                    name="time"
                    size="md"
                  />
                </mp-tooltip>
              </mp-box>
              <mp-box>
                <mp-box position="relative" :display="['block', 'none']">
                  <mp-tooltip position="bottom" label="Notification" use-portal>
                    <mp-box>
                      <mp-button-icon
                        name="notification"
                        size="md"
                        @click="isNotificationMenuOpen = true"
                      />

                      <mp-badge
                        variant-color="red"
                        size="sm"
                        position="absolute"
                        top="0"
                        right="0"
                        border-width="2px"
                        border-color="white"
                      >
                        3
                      </mp-badge>
                    </mp-box>
                  </mp-tooltip>
                </mp-box>
                <mp-popover placement="bottom" use-portal>
                  <mp-popover-trigger>
                    <mp-box position="relative" :display="['none', 'block']">
                      <mp-tooltip
                        position="bottom"
                        label="Notification"
                        use-portal
                      >
                        <mp-box>
                          <mp-button-icon name="notification" size="md" />
                          <mp-badge
                            variant-color="red"
                            size="sm"
                            position="absolute"
                            top="0"
                            right="0"
                            border-width="2px"
                            border-color="white"
                            :animation="`${getPulseKeyframe} 1s cubic-bezier(0, 0, 0.2, 1) infinite`"
                          >
                            2
                          </mp-badge>
                          <mp-badge
                            variant-color="red"
                            size="sm"
                            position="absolute"
                            top="0"
                            right="0"
                            border-width="2px"
                            border-color="white"
                          >
                            2
                          </mp-badge>
                        </mp-box>
                      </mp-tooltip>
                    </mp-box>
                  </mp-popover-trigger>
                  <mp-popover-content
                    class="popover-content"
                    width="lg"
                    max-height="calc(100% - 96px)"
                    overflow="hidden auto"
                    background-color="white"
                    border-radius="md"
                    border-width="1px"
                    border-color="gray.400"
                    box-shadow="lg"
                    margin-right="6 !important"
                    z-index="popover"
                  >
                    <Notification />
                  </mp-popover-content>
                </mp-popover>
              </mp-box>
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
                    :name="isSidebarMenuOpen ? 'close' : 'burger'"
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
      <ActivityLog
        :isActivityLogOpen="isActivityLogOpen"
        :onActivityLogToggle="onActivityLogToggle"
      />
      <SwitchApp
        :isSwitchAppOpen="isSwitchAppOpen"
        :onSwitchAppToggle="onSwitchAppToggle"
      />
      <SidebarMobile
        :isSidebarMenuOpen="isSidebarMenuOpen"
        :onSidebarMenuToggle="onSidebarMenuToggle"
      />
      <NotificationMobile
        :isNotificationMenuOpen="isNotificationMenuOpen"
        :onNotificationMenuToggle="onNotificationMenuToggle"
      />
    </mp-box>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpStack,
  MpText,
  MpButtonIcon,
  MpBadge,
  MpTooltip,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
  MpBroadcast,
} from "@mekari/pixel";
import SwitchApp from "./SwitchApp.vue";
import SwitchAccount from "./SwitchAccount.vue";
import SidebarMobile from "./SidebarMobile.vue";
import Notification from "./Notification.vue";
import NotificationMobile from "./NotificationMobile.vue";
import ActivityLog from "./ActivityLog.vue";
import { keyframes } from "@emotion/css";
import { mapActions } from "vuex";

export default {
  name: "PixelNavbar",
  components: {
    MpBox,
    MpFlex,
    MpStack,
    MpText,
    MpButtonIcon,
    MpBadge,
    MpTooltip,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
    MpBroadcast,
    SwitchApp,
    SwitchAccount,
    SidebarMobile,
    Notification,
    NotificationMobile,
    ActivityLog,
  },
  data: function () {
    return {
      isSwitchAppOpen: false,
      isSidebarMenuOpen: false,
      isNotificationMenuOpen: false,
      isSearchModalOpen: false,
      isShowBroadcast: false,
      isActivityLogOpen: false,
      broadcastAttrs: {},
    };
  },
  computed: {
    getPulseKeyframe() {
      return keyframes`
      75%, 100% {
        transform: scale(1.8);
        opacity: 0;
      }
      `;
    },
  },
  mounted() {
    this.getBroadcast();
    this.getCompanyList();

    // Set navbar height to css variable
    this.calcNavbarHeightToCssVariable();
  },
  methods: {
    ...mapActions({
      getCompanyList: "navbar/getCompanyList",
    }),
    onActivityLogToggle: function () {
      this.isActivityLogOpen = false;
      console.log("Called");
    },
    onSwitchAppToggle: function () {
      this.isSwitchAppOpen = false;
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
    getBroadcast() {
      this.broadcastAttrs = {
        content:
          "Welcome to new Jurnal Interface, this page is only prototype, not all action worked. If you have any concerns feel free to drop feedback here.",
        variant: "information",
        "icon-name": "flag",
        "text-link": "",
        "is-closable": false,
        "text-link-href": "",
      };

      // this.isShowBroadcast = true;
      // this.$nextTick(() => {
      //   this.calcNavbarHeightToCssVariable();
      // });
    },
    calcNavbarHeightToCssVariable() {
      const root = document.documentElement;
      const navbarEl = document.getElementById("jurnalNavbar");
      root.style.setProperty(
        "--jurnal-navbar-height",
        `${navbarEl.clientHeight}px`
      );
    },
  },
};
</script>
