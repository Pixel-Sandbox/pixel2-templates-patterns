<template>
  <mp-pseudo-box
    :as="isWebComponent ? 'a' : 'router-link'"
    :to="isWebComponent ? '' : link"
    :href="isWebComponent ? link : ''"
    flex="1"
    role="group"
    border-radius="md"
    padding="2"
    :color="isActive ? 'blue.400' : 'dark'"
    :background-color="isActive ? 'blue.100' : ''"
    transition="all 600ms cubic-bezier(0.4, 0, 0.2, 1) 0s"
    :_hover="{
      color: 'blue.400',
      cursor: 'pointer',
    }"
  >
    <mp-stack direction="row" align="center">
      <mp-text
        white-space="nowrap"
        color="inherit"
        :font-weight="isActive ? 'semibold' : 'regular'"
      >
        {{ name }}
      </mp-text>
    </mp-stack>
  </mp-pseudo-box>
</template>

<script>
import { MpPseudoBox, MpStack, MpText } from "@mekari/pixel";
export default {
  components: {
    MpPseudoBox,
    MpStack,
    MpText,
  },
  props: {
    name: String,
    link: {
      type: String,
      default: "/",
    },
  },
  computed: {
    isWebComponent() {
      return this.$route === undefined || this.$route === null;
    },
    isActive() {
      if (this.isWebComponent) {
        return window.location.pathname === this.link;
      }

      return this.$route.path === this.link;
    },
  },
};
</script>

