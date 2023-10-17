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
        <mp-box :display="['none', 'block']">
          <img
            src="../assets/mekari-talenta-logo.svg"
            width="125px"
            height="36px"
          />
        </mp-box>
        <mp-box :display="['block', 'none']">
          <mp-icon name="talenta-brand" size="lg" />
        </mp-box>
        <mp-divider
          orientation="vertical"
          margin-x="0"
          margin-y="2"
          :display="['none', 'block']"
        />
        <mp-popover :display="['none', 'block']" use-portal>
          <mp-popover-trigger>
            <mp-button
              color="gray.600"
              variant="link"
              right-icon="caret-down"
              margin-y="2"
              :display="['none', 'block']"
            >
              HRIS
            </mp-button>
          </mp-popover-trigger>
          <mp-popover-content
            max-width="64"
            background-color="white"
            rounded="md"
            shadow="lg"
            border-width="1px"
            border-color="gray.400"
          >
            <mp-popover-list>
              <mp-box width="full" padding-x="3" padding-y="2">
                <mp-text color="gray.600" font-size="sm" text-align="left">
                  SELECT APPS
                </mp-text>
              </mp-box>
              <mp-popover-list-item>
                HRIS (Main product)
                <mp-icon name="check" size="sm" margin-right="2" />
              </mp-popover-list-item>
              <mp-popover-list-item> Insights </mp-popover-list-item>
              <mp-popover-list-item>
                Performance management
              </mp-popover-list-item>
            </mp-popover-list>
          </mp-popover-content>
        </mp-popover>
      </mp-flex>

      <mp-box>
        <mp-flex justify-content="space-between" align-items="center">
          <mp-stack is-inline spacing="2">
            <mp-box>
              <SmartButton
                id="smart-assist-tour"
                title="Ask Airene"
                :is-show-tour="isStartTour"
                @click="onOpenSmartAssist"
              />
              <SmartAssist
                :is-open="isShowSmartAssist"
                :onClose="onCloseSmartAssist"
                :nextOpen="onCloseModalToggle"
              />
            </mp-box>
            <mp-box>
              <mp-popover close-on-select use-portal>
                <mp-popover-trigger>
                  <mp-box>
                    <mp-tooltip
                      position="bottom"
                      label="Quick action [q]"
                      use-portal
                    >
                      <mp-button-icon
                        id="button-quick-action"
                        name="add"
                        size="md"
                      />
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
                        CREATE
                      </mp-text>
                    </mp-box>
                    <mp-popover-list-item
                      background-color="transparent"
                      color="white"
                      :_hover="{
                        color: 'sky.100',
                      }"
                    >
                      New employee
                    </mp-popover-list-item>
                    <mp-popover-list-item
                      background-color="transparent"
                      color="white"
                      :_hover="{
                        color: 'sky.100',
                      }"
                    >
                      Employee transfer
                    </mp-popover-list-item>
                    <mp-box width="full" padding-x="3" padding-y="2">
                      <mp-text color="gray.100" text-align="left">
                        REQUEST
                      </mp-text>
                    </mp-box>
                    <mp-popover-list-item
                      background-color="transparent"
                      color="white"
                      :_hover="{
                        color: 'sky.100',
                      }"
                    >
                      Live attendance
                    </mp-popover-list-item>
                    <mp-popover-list-item
                      background-color="transparent"
                      color="white"
                      :_hover="{
                        color: 'sky.100',
                      }"
                    >
                      Overtime
                    </mp-popover-list-item>
                    <mp-popover-list-item
                      background-color="transparent"
                      color="white"
                      :_hover="{
                        color: 'sky.100',
                      }"
                    >
                      Time off
                    </mp-popover-list-item>
                    <mp-popover-list-item
                      background-color="transparent"
                      color="white"
                      :_hover="{
                        color: 'sky.100',
                      }"
                    >
                      Change shift
                    </mp-popover-list-item>
                    <mp-popover-list-item
                      background-color="transparent"
                      color="white"
                      :_hover="{
                        color: 'sky.100',
                      }"
                    >
                      Attendance
                    </mp-popover-list-item>
                    <mp-popover-list-item
                      background-color="transparent"
                      color="white"
                      :_hover="{
                        color: 'sky.100',
                      }"
                    >
                      Reimbursement
                    </mp-popover-list-item>
                  </mp-popover-list>
                </mp-popover-content>
              </mp-popover>
            </mp-box>
            <mp-box>
              <mp-tooltip position="bottom" label="Search [/]" use-portal>
                <mp-button-icon
                  name="search"
                  size="md"
                  @click="onSearchModalToggle(true)"
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
                        >
                          3
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
    <NotificationMobile
      :isNotificationMenuOpen="isNotificationMenuOpen"
      :onNotificationMenuToggle="onNotificationMenuToggle"
    />
    <SearchBox :isModalOpen="isSearchModalOpen" @change="onSearchModalChange" />
    <SmartAssistCloseModal
      :isModalOpen="isCloseModalOpen"
      :onModalToggle="onCloseModalToggle"
    />
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpIcon,
  MpStack,
  MpText,
  MpButtonIcon,
  MpButton,
  MpDivider,
  MpBadge,
  MpTooltip,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
} from "@mekari/pixel";
import SwitchApp from "../components/SwitchApp";
import SwitchAccount from "../components/SwitchAccount";
import SidebarMobile from "../components/SidebarMobile";
import Notification from "../components/Notification";
import NotificationMobile from "../components/NotificationMobile";
import SearchBox from "../components/SearchBox";
import SmartButton from "../components/SmartButton";
import SmartAssist from "../components/SmartAssist";
import SmartAssistCloseModal from "./SmartAssistCloseModal";

export default {
  name: "Header",
  components: {
    MpBox,
    MpFlex,
    MpIcon,
    MpStack,
    MpText,
    MpButtonIcon,
    MpButton,
    MpDivider,
    MpBadge,
    MpTooltip,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
    SwitchApp,
    SwitchAccount,
    SidebarMobile,
    Notification,
    NotificationMobile,
    SearchBox,
    SmartButton,
    SmartAssist,
    SmartAssistCloseModal,
  },
  data: function () {
    return {
      isSwitchAppOpen: false,
      isSidebarMenuOpen: false,
      isNotificationMenuOpen: false,
      isSearchModalOpen: false,
      isShowSmartAssist: false,
      isCloseModalOpen: false,
      isStartTour: true,
      steps: [
        {
          target: "#smart-assist-tour",
          content: {
            title: "Airene",
            description:
              "Airene uses the power of AI to provide you with insights, answers and more. Currently in beta phase, this trial feature is limited to 10 responds per day.",
            media: {
              src:
                "https://cdn.mekari.design/template-assets/mekari-ask-banner.gif",
              alt: "Image",
            },
            badge: {
              text: "BETA",
            },
            primaryAction: {
              text: "Try Airene",
              variant: "solid",
              isFullWidth: true,
            },
            isShowPrimaryAction: true,
            isClosable: true,
            isShowBadge: true,
          },
          options: {
            placement: "bottom",
          },
          isHighlighted: true,
          highlightColor: "blue",
          isScrollIntoElement: true,
        },
      ],
    };
  },
  mounted() {
    this.$tour(this.isStartTour, this.steps, {
      id: "basic-tour",
      stepIndex: 0,
      isDisableScroll: true,
      isDebug: false,
      next: this.closeTour,
      close: () => {
        this.$tour(false);
        this.isStartTour = false;
      },
    });
  },
  created() {
    window.addEventListener("keydown", this.handleKeydownSearch);
    window.addEventListener("keydown", this.handleKeydownQuickAction);
  },
  beforeDestroy() {
    window.removeEventListener("keydown", this.handleKeydownSearch);
    window.removeEventListener("keydown", this.handleKeydownQuickAction);
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
    onOpenSmartAssist: function () {
      this.isShowSmartAssist = true;
    },
    onCloseSmartAssist: function () {
      this.isShowSmartAssist = false;
    },
    onCloseModalToggle(data) {
      this.isShowSmartAssist = true;
      this.isCloseModalOpen = data;
    },
    closeTour() {
      this.$tour(false);
      this.isStartTour = false;
      this.onOpenSmartAssist();
    },
    handleKeydownSearch(e) {
      if (e.keyCode === 191) {
        this.isSearchModalOpen = true;
      }
    },
    handleKeydownQuickAction(e) {
      if (e.keyCode === 81) {
        const button = document.getElementById("button-quick-action");
        button.click();
      }
    },
  },
};
</script>