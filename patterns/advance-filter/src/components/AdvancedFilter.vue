<template>
  <mp-drawer size="md" :is-open="currentopen" :on-close="handleClose">
    <mp-drawer-overlay />
    <mp-drawer-content>
      <mp-drawer-header>All filter</mp-drawer-header>
      <mp-drawer-close-button />
      <mp-drawer-body
        max-height="calc(100vh)"
        overflow="hidden auto"
        padding="0"
        padding-x="4"
      >
        <mp-box>
          <mp-accordion
            allow-toggle
            allow-multiple
            :default-index="[0, 1, 2, 3]"
          >
            <mp-accordion-item>
              <mp-accordion-header
                padding-x="3"
                padding-y="0"
                :is-clickable="false"
              >
                <mp-flex
                  flex="1 0 0"
                  justify-content="space-between"
                  height="13"
                >
                  <advanced-filter-item-header name="Branch" />
                  <mp-flex align-items="center">
                    <mp-button-icon name="minus-circular" />
                    <mp-box>
                      <mp-accordion-icon name="chevrons-down" padding="3px" />
                    </mp-box>
                  </mp-flex>
                </mp-flex>
              </mp-accordion-header>
              <mp-accordion-panel
                padding-x="3"
                padding-top="0"
                padding-bottom="6"
              >
                <advanced-filter-item-multiset />
              </mp-accordion-panel>
            </mp-accordion-item>
            <mp-accordion-item>
              <mp-accordion-header
                padding-x="3"
                padding-y="0"
                :is-clickable="false"
              >
                <mp-flex
                  flex="1 0 0"
                  justify-content="space-between"
                  height="13"
                >
                  <advanced-filter-item-header name="Name" />
                  <mp-flex align-items="center">
                    <mp-button-icon name="minus-circular" />
                    <mp-box>
                      <mp-accordion-icon name="chevrons-down" padding="3px" />
                    </mp-box>
                  </mp-flex>
                </mp-flex>
              </mp-accordion-header>
              <mp-accordion-panel padding-x="3" padding-top="0">
                <advanced-filter-item-freetag />
              </mp-accordion-panel>
            </mp-accordion-item>
            <mp-accordion-item>
              <mp-accordion-header
                padding-x="3"
                padding-y="0"
                :is-clickable="false"
              >
                <mp-flex
                  flex="1 0 0"
                  justify-content="space-between"
                  height="13"
                >
                  <advanced-filter-item-header name="Gender" />
                  <mp-flex align-items="center">
                    <mp-button-icon name="minus-circular" />
                    <mp-box>
                      <mp-accordion-icon name="chevrons-down" padding="3px" />
                    </mp-box>
                  </mp-flex>
                </mp-flex>
              </mp-accordion-header>
              <mp-accordion-panel padding-x="3" padding-top="0">
                <advanced-filter-item-singleset />
              </mp-accordion-panel>
            </mp-accordion-item>
            <mp-accordion-item>
              <mp-accordion-header
                padding-x="3"
                padding-y="0"
                :is-clickable="false"
              >
                <mp-flex
                  flex="1 0 0"
                  justify-content="space-between"
                  height="13"
                >
                  <advanced-filter-item-header name="Service length" />
                  <mp-flex align-items="center">
                    <mp-button-icon name="minus-circular" />
                    <mp-box>
                      <mp-accordion-icon name="chevrons-down" padding="3px" />
                    </mp-box>
                  </mp-flex>
                </mp-flex>
              </mp-accordion-header>
              <mp-accordion-panel padding-x="3" padding-top="0">
                <advanced-filter-item-timelength />
              </mp-accordion-panel>
            </mp-accordion-item>
          </mp-accordion>
        </mp-box>
        <mp-box
          @mouseover="isoutsidepopover = false"
          @mouseleave="isoutsidepopover = true"
        >
          <mp-popover
            :is-open="ispopoveropen"
            initial-focus-ref="#filter-search"
            placement="top"
            is-manual
          >
            <mp-popover-trigger>
              <mp-box
                position="absolute"
                bottom="104px"
                left="50%"
                transform="translate(-50%, 0)"
                box-shadow="xl"
                border-radius="md"
                z-index="1"
              >
                <mp-button variant="outline" @click="handleOpenPopover">
                  <mp-icon
                    name="add-circular"
                    variant="duotone"
                    size="sm"
                    margin-right="2"
                  />
                  Add filter
                </mp-button>
              </mp-box>
            </mp-popover-trigger>
            <mp-popover-content
              max-width="416px"
              background-color="white"
              border-radius="md"
              border-width="1px"
              border-color="gray.400"
              box-shadow="lg"
              padding-y="2"
              @click.native="handleForceInputFocus"
            >
              <mp-box margin-top="2" margin-bottom="2" padding-x="3">
                <mp-input-group>
                  <mp-input-left-addon :with-background="false">
                    <mp-icon name="search" size="sm" />
                  </mp-input-left-addon>
                  <mp-input
                    id="filter-search"
                    placeholder="Search..."
                    @focus="handleFocus"
                    @blur="handleClickOutside"
                  />
                </mp-input-group>
              </mp-box>
              <mp-box>
                <mp-popover-list padding="0">
                  <mp-box width="full" padding-x="3" padding-y="2">
                    <mp-text color="gray.600" text-align="left" font-size="sm">
                      EMPLOYMENT DATA
                    </mp-text>
                  </mp-box>
                  <mp-popover-list-item>Organization</mp-popover-list-item>
                  <mp-popover-list-item>Grade</mp-popover-list-item>
                </mp-popover-list>
              </mp-box>
            </mp-popover-content>
          </mp-popover>
        </mp-box>
      </mp-drawer-body>
      <mp-drawer-footer
        justify-content="space-between"
        align-items="center"
        padding-x="6"
        padding-y="5"
        border-top="1px solid"
        border-color="gray.100"
      >
        <mp-flex>
          <mp-button
            variant="link"
            color="gray.600"
            :_hover="{ color: 'gray.600' }"
          >
            Clear filter
          </mp-button>
        </mp-flex>
        <mp-flex gap="2">
          <mp-button variant="ghost" @click="handleClose">Cancel</mp-button>
          <mp-button>Apply</mp-button>
        </mp-flex>
      </mp-drawer-footer>
    </mp-drawer-content>
  </mp-drawer>
</template>

<script>
  import {
    MpDrawer,
    MpDrawerOverlay,
    MpDrawerContent,
    MpDrawerCloseButton,
    MpDrawerHeader,
    MpDrawerBody,
    MpDrawerFooter,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
    MpInput,
    MpInputGroup,
    MpInputLeftAddon,
    MpAccordion,
    MpAccordionItem,
    MpAccordionHeader,
    MpAccordionIcon,
    MpAccordionPanel,
    MpBox,
    MpIcon,
    MpFlex,
    MpText,
    MpButton,
    MpButtonIcon,
  } from "@mekari/pixel";
  import AdvancedFilterItemHeader from "./AdvancedFilterItemHeader";
  import AdvancedFilterItemMultiset from "./AdvancedFilterItemMultiset";
  import AdvancedFilterItemSingleset from "./AdvancedFilterItemSingleset";
  import AdvancedFilterItemTimelength from "./AdvancedFilterItemTimelength";
  import AdvancedFilterItemFreetag from "./AdvancedFilterItemFreetag.vue";

  export default {
    name: "AdvancedFilter",
    components: {
      MpDrawer,
      MpDrawerOverlay,
      MpDrawerContent,
      MpDrawerCloseButton,
      MpDrawerHeader,
      MpDrawerBody,
      MpDrawerFooter,
      MpPopover,
      MpPopoverTrigger,
      MpPopoverContent,
      MpPopoverList,
      MpPopoverListItem,
      MpInput,
      MpInputGroup,
      MpInputLeftAddon,
      MpAccordion,
      MpAccordionItem,
      MpAccordionHeader,
      MpAccordionIcon,
      MpAccordionPanel,
      MpBox,
      MpIcon,
      MpFlex,
      MpText,
      MpButton,
      MpButtonIcon,
      AdvancedFilterItemHeader,
      AdvancedFilterItemMultiset,
      AdvancedFilterItemSingleset,
      AdvancedFilterItemTimelength,
      AdvancedFilterItemFreetag,
    },
    props: {
      isOpen: [Boolean],
    },
    data() {
      return {
        currentopen: false,
        ispopoveropen: false,
        ispopoverfocused: false,
        isoutsidepopover: true,
      };
    },
    watch: {
      isOpen(e) {
        this.currentopen = e;
      },
    },
    methods: {
      handleFocus() {
        this.ispopoverfocused = true;
        if (!this.ispopoveropen) this.handleOpenPopover();
        if (this.ispopoveropen) this.handleForceInputFocus();
      },
      handleForceInputFocus() {
        if (this.ispopoverfocused) {
          const input = document.getElementById("filter-search");
          input.focus();
        }
      },
      handleOpenPopover() {
        this.ispopoveropen = true;
      },
      handleClosePopover() {
        this.ispopoverfocused = false;
        this.ispopoveropen = false;
      },
      handleClickOutside() {
        if (this.isoutsidepopover) {
          this.handleClosePopover();
          this.isoutsidepopover = false;
        }
      },
      handleOpen(e) {
        this.currentopen = true;
        this.$emit("open", e);
      },
      handleClose(e) {
        this.currentopen = false;
        this.$emit("close", e);
      },
    },
  };
</script>
