<template>
  <mp-accordion allow-toggle>
    <mp-accordion-item border-bottom-width="0px!important">
      <mp-accordion-header
        gap="1"
        padding="2"
        border-radius="md"
        :background-color="isActive ? 'blue.100' : 'transparent'"
        transition="all 600ms cubic-bezier(0.4, 0, 0.2, 1) 0s"
        :_hover="{
          color: 'blue.400',
          backgroundColor: isActive ? 'blue.100' : 'blue.100',
          cursor: 'pointer',
        }"
        justify-content="space-between"
      >
        <mp-box>
          <mp-flex direction="column">
            <mp-pseudo-box flex="1" border-radius="sm">
              <mp-stack direction="row" align="center">
                <mp-text
                  white-space="nowrap"
                  :color="isActive ? 'blue.400' : 'dark'"
                  :font-weight="isActive ? 'semibold' : 'regular'"
                >
                  {{ name }}
                </mp-text>
              </mp-stack>
            </mp-pseudo-box>
          </mp-flex>
        </mp-box>
        <mp-accordion-icon />
      </mp-accordion-header>
      <mp-accordion-panel padding-y="0">
        <mp-box v-for="value in menus" :key="value.id">
          <mp-flex direction="column">
            <mp-pseudo-box
              :as="isWebComponent ? 'a' : 'router-link'"
              :to="isWebComponent ? '' : value.link"
              :href="isWebComponent ? value.link : ''"
              flex="1"
              role="group"
              border-radius="md"
              padding-left="4"
              padding-y="2"
              color="gray.600"
              font-weight="regular"
              transition="all 600ms cubic-bezier(0.4, 0, 0.2, 1) 0s"
              :_hover="{
                color: 'blue.400',
                cursor: 'pointer',
              }"
            >
              <mp-stack direction="row" align="center">
                <mp-text
                  white-space="nowrap"
                  :color="$route.path === value.link ? 'black' : 'inherit'"
                  :font-weight="
                    $route.path === value.link ? 'semibold' : 'regular'
                  "
                >
                  {{ value.name }}
                </mp-text>
              </mp-stack>
            </mp-pseudo-box>
          </mp-flex>
        </mp-box>
      </mp-accordion-panel>
    </mp-accordion-item>
  </mp-accordion>
</template>

<script>
import {
  MpAccordion,
  MpAccordionItem,
  MpAccordionHeader,
  MpAccordionIcon,
  MpAccordionPanel,
  MpBox,
  MpFlex,
  MpText,
  MpStack,
  MpPseudoBox,
} from "@mekari/pixel";

export default {
  props: {
    name: String,
    menus: Array,
  },
  components: {
    MpAccordion,
    MpAccordionItem,
    MpAccordionHeader,
    MpAccordionIcon,
    MpAccordionPanel,
    MpBox,
    MpFlex,
    MpText,
    MpStack,
    MpPseudoBox,
  },
  computed: {
    isActive() {
      return this.menus.filter((v) => v.link === this.$route.path).length > 0;
    },
    isWebComponent() {
      return this.$route === undefined || this.$route === null;
    },
  },
};
</script>
