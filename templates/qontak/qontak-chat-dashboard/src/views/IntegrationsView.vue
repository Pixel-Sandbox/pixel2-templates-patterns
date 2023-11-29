<template>
  <mp-box>
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 56px)">
      <Sidebar
        child-title="Intergrations"
        :child-menu="integrationsMenu"
        with-child 
        is-custom 
        default-is-toggle
      />
      <mp-box
        as="section"
        data-id="content"
        width="100%"
        height="calc(100vh - 56px)"
        overflow-y="auto"
        background-color="background"
      >
        <SubHeader title="Central Perk App" />
        <mp-tabs
          id="tabs-contacts"
          :default-index="defaultIndex"
          :is-show-border="false"
          @change="handleChangeTab"
        >
          <mp-tab-list mb="0" pb="1px" px="6">
            <mp-tab> Widget installation </mp-tab>
            <mp-tab> Widget content & appearance </mp-tab>
            <mp-tab> Push notification </mp-tab>
            <mp-tab> </mp-tab>
          </mp-tab-list>
          <mp-tab-panels>
            <mp-tab-panel>
              <mp-box
                min-height="calc(100vh - 128px)"
                border-top-width="1px"
                border-left-width="1px"
                border-top-left-radius="md"
                border-color="gray.100"
                background-color="white"
                padding="6"
              >
                <mp-text>Widget installation...</mp-text>
              </mp-box>
            </mp-tab-panel>
            <mp-tab-panel>
              <mp-flex
                min-height="calc(100vh - 128px)"
                border-top-width="1px"
                border-left-width="1px"
                border-top-left-radius="md"
                border-color="gray.100"
                background-color="white"
                padding="6"
                gap="120px"
              >
                <mp-flex flex="none" direction="column" width="552px">
                  <mp-text font-size="xl" font-weight="semibold">
                    Content
                  </mp-text>
                  <mp-text color="gray.600">
                    Create your chat identity and greetings.
                  </mp-text>
                  <mp-form-control mt="5" control-id="display-name">
                    <mp-form-label justify-content="space-between">
                      Display name
                      <mp-text as="span" color="gray.400">
                        {{ handleCountChar(displayName.length) }}
                      </mp-text>
                    </mp-form-label>
                    <mp-input-group>
                      <mp-input
                        v-model="displayName"
                        autocomplete="off"
                        placeholder="Example: XYZ Customer Care"
                        maxlength="65"
                      />
                    </mp-input-group>
                  </mp-form-control>
                  <mp-form-control mt="5" control-id="description">
                    <mp-form-label justify-content="space-between">
                      Description
                      <mp-text as="span" color="gray.400">
                        {{ handleCountChar(description.length) }}
                      </mp-text>
                    </mp-form-label>
                    <mp-input-group>
                      <mp-input
                        v-model="description"
                        autocomplete="off"
                        placeholder="Example: Business hours (09:00–17:00)"
                        maxlength="65"
                      />
                    </mp-input-group>
                  </mp-form-control>
                  <mp-form-control mt="5" mb="6" control-id="greetings">
                    <mp-form-label justify-content="space-between">
                      Greetings
                      <mp-text as="span" color="gray.400">
                        {{ handleCountChar(greetings.length) }}
                      </mp-text>
                    </mp-form-label>
                    <mp-input-group>
                      <mp-input
                        v-model="greetings"
                        autocomplete="off"
                        placeholder="Example: XYZ Customer Care"
                        maxlength="65"
                      />
                    </mp-input-group>
                  </mp-form-control>
                  <mp-text font-size="xl" font-weight="semibold">
                    Appearance
                  </mp-text>
                  <mp-text color="gray.600">
                    Pick colors that suitable for your company and complete chat
                    identity with a photo.
                  </mp-text>
                  <mp-flex mt="5" mb="5" wrap="wrap" gap="6">
                    <ColorPicker
                      id="theme"
                      width="264px"
                      title="Theme color"
                      default-color="#2979FF"
                      @color="(colors) => (this.themeColor = colors.hex)"
                    />
                    <ColorPicker
                      id="agent"
                      width="264px"
                      title="Agent message color"
                      default-color="#EDF0F2"
                      @color="(colors) => (this.agentColor = colors.hex)"
                    />
                    <ColorPicker
                      id="customer"
                      width="264px"
                      title="Customer message color"
                      default-color="#E0EEFF"
                      @color="(colors) => (this.customerColor = colors.hex)"
                    />
                  </mp-flex>
                  <ChatProfileDropzone />
                  <mp-flex justify-content="end" mt="5" pt="1" pb="5">
                    <mp-button variant="ghost">Cancel</mp-button>
                    <mp-button>Save changes</mp-button>
                  </mp-flex>
                </mp-flex>
                <mp-flex direction="column" width="456px">
                  <mp-text font-size="lg" font-weight="semibold">
                    Chat widget preview
                  </mp-text>
                  <mp-text color="gray.600" mb="2">
                    This is how your customers view your chat widget.
                  </mp-text>
                  <ChatMobilePreview
                    :title="displayName"
                    :description="description"
                    :greetings="greetings"
                    :themeColor="themeColor"
                    :agent-color="agentColor"
                    :customer-color="customerColor"
                  />
                </mp-flex>
              </mp-flex>
            </mp-tab-panel>
            <mp-tab-panel>
              <mp-box
                min-height="calc(100vh - 128px)"
                border-top-width="1px"
                border-left-width="1px"
                border-top-left-radius="md"
                border-color="gray.100"
                background-color="white"
                padding="6"
              >
                <mp-text>Push notification...</mp-text>
              </mp-box>
            </mp-tab-panel>
          </mp-tab-panels>
        </mp-tabs>
      </mp-box>
    </mp-flex>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpText,
  MpButton,
  MpTabs,
  MpTabList,
  MpTab,
  MpTabPanels,
  MpTabPanel,
  MpInput,
  MpInputGroup,
  MpFormControl,
  MpFormLabel
} from "@mekari/pixel";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import SubHeader from "../components/SubHeader";
import ColorPicker from "../components/ColorPicker";
import ChatProfileDropzone from "../components/ChatProfileDropzone";
import ChatMobilePreview from "../components/ChatMobilePreview";

export default {
  name: "IntegrationsView",
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpButton,
    MpTabs,
    MpTabList,
    MpTab,
    MpTabPanels,
    MpTabPanel,
    MpInput,
    MpInputGroup,
    MpFormControl,
    MpFormLabel,
    Header,
    Sidebar,
    SubHeader,
    ColorPicker,
    ChatProfileDropzone,
    ChatMobilePreview,
  },
  data() {
    return {
      tabs: ["tab-0", "tab-1", "tab-2"],
      defaultIndex: 1,
      currentTab: null,
      displayName: "",
      description: "",
      greetings: "Halo, ada yang bisa kami bantu?",
      themeColor: "#2979FF",
      agentColor: "#EDF0F2",
      customerColor: "#E0EEFF",
      integrationsMenu: [
      {
          name: "Mobile chat",
          isActive: true,
          isOpen: 0,
        },
        {
          name: "Tokopedia",
          isActive: false,
        },
        {
          name: "Web chat",
          isActive: false,
        },
        {
          name: "Whatsapp",
          isActive: false,
        },
      ]
    };
  },
  mounted() {
    this.handleChangeTab(this.defaultIndex);
  },
  methods: {
    handleChangeTab(e) {
      this.currentTab = this.tabs[e];
    },
    handleCountChar(number) {
      return `${number} / 65`;
    }
  },
};
</script>
