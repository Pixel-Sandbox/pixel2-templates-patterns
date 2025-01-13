<template>
  <mp-accordion allow-toggle>
    <mp-accordion-item border-bottom-width="0px!important">
      <mp-accordion-header
        justify-content="space-between"
        padding-x="4"
        padding-y="2"
        border-radius="md"
        :background-color="isActive ? 'ice.50' : 'transparent'"
        :_hover="{
          color: 'blue.400',
          backgroundColor: isActive ? 'ice.50' : 'gray.50',
          cursor: 'pointer',
        }"
      >
        <mp-box>
          <mp-flex direction="column">
            <mp-pseudo-box
              flex="1"
              border-radius="sm"
              :color="isActive ? 'blue.400' : 'dark'"
            >
              <mp-stack direction="row" align="center">
                <mp-text :font-weight="isActive ? 'semibold' : 'regular'"
                  >Template</mp-text
                >
              </mp-stack>
            </mp-pseudo-box>
          </mp-flex>
        </mp-box>
        <mp-accordion-icon />
      </mp-accordion-header>
      <mp-accordion-panel padding-y="0">
        <mp-box>
          <mp-flex direction="column">
            <mp-pseudo-box
              flex="1"
              role="group"
              as="router-link"
              to="/layout-child-menu"
              border-radius="sm"
              padding-left="8"
              padding-y="2"
              color="dark"
              :_hover="{
                color: 'dark',
                cursor: 'pointer',
              }"
            >
              <mp-stack direction="row" align="center">
                <mp-text font-weight="semibold"> Email </mp-text>
              </mp-stack>
            </mp-pseudo-box>
          </mp-flex>
        </mp-box>
        <mp-box>
          <mp-flex direction="column">
            <mp-pseudo-box
              flex="1"
              role="group"
              border-radius="sm"
              padding-left="8"
              padding-y="2"
              color="gray.600"
              font-weight="inherit"
              :_hover="{
                color: 'blue.400',
                cursor: 'pointer',
              }"
            >
              <mp-stack direction="row" align="center">
                <mp-text>PDF</mp-text>
              </mp-stack>
            </mp-pseudo-box>
          </mp-flex>
        </mp-box>
        <mp-box>
          <mp-flex direction="column">
            <mp-pseudo-box
              flex="1"
              role="group"
              border-radius="sm"
              padding-left="8"
              padding-y="2"
              color="gray.600"
              font-weight="inherit"
              :_hover="{
                color: 'blue.400',
                cursor: 'pointer',
              }"
            >
              <mp-stack direction="row" align="center">
                <mp-text>Whatsapp</mp-text>
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
  MpBox,
  MpPseudoBox,
  MpFlex,
  MpStack,
  MpText,
  MpAccordion,
  MpAccordionItem,
  MpAccordionHeader,
  MpAccordionIcon,
  MpAccordionPanel,
} from "@mekari/pixel";
export default {
  components: {
    MpBox,
    MpPseudoBox,
    MpFlex,
    MpStack,
    MpText,
    MpAccordion,
    MpAccordionItem,
    MpAccordionHeader,
    MpAccordionIcon,
    MpAccordionPanel,
  },
  props: {
    isActive: Boolean,
  },
};
</script>
