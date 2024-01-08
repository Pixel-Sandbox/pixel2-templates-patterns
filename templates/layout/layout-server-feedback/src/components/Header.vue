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
        <mp-box as="a" to="/" margin-y="1">
          <mp-icon name="mekari-brand" size="lg" />
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
  },
  data: function () {
    return {
      isSwitchAppOpen: false,
    };
  },
  methods: {
    onSwitchAppToggle: function () {
      this.isSwitchAppOpen = !this.isSwitchAppOpen;
    },
  },
};
</script>
