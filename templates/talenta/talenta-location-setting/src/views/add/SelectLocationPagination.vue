<template>
  <mp-box padding-x="2" padding-y="4">
    <mp-flex justify-content="space-between">
      <mp-flex align-items="center">
        <mp-text
          color="gray.600"
          line-height="md"
          padding-right="1"
          padding-y="1"
        >
          Rows per page
        </mp-text>
        <mp-popover close-on-select>
          <mp-popover-trigger>
            <mp-box>
              <mp-tooltip label="Result per page" position="bottom">
                <mp-button
                  size="sm"
                  variant="unstyled"
                  height="7"
                  display="inline-flex"
                  padding-left="3"
                  padding-right="2"
                  padding-y="2"
                  :_hover="{ backgroundColor: 'gray.50' }"
                >
                  <mp-text font-weight="600" line-height="md">10</mp-text>
                  <mp-icon name="caret-down" size="sm" />
                </mp-button>
              </mp-tooltip>
            </mp-box>
          </mp-popover-trigger>
          <mp-popover-content
            max-width="16"
            background-color="white"
            rounded="md"
            shadow="lg"
            border-width="1px"
            border-color="gray.400"
          >
            <mp-popover-list>
              <mp-popover-list-item is-active>10</mp-popover-list-item>
              <mp-popover-list-item>25</mp-popover-list-item>
              <mp-popover-list-item>50</mp-popover-list-item>
              <mp-popover-list-item>100</mp-popover-list-item>
            </mp-popover-list>
          </mp-popover-content>
        </mp-popover>

        <mp-text
          color="gray.600"
          line-height="md"
          padding-left="5"
          padding-y="1"
        >
          Showing 120-130 of 242
        </mp-text>
      </mp-flex>
      <mp-flex align-items="center">
        <mp-tooltip label="Jump to page" position="bottom">
          <mp-autocomplete
            width="16"
            height="7.5"
            is-searchable
            :default-value="1"
            :is-full-width="false"
            :content-style="{ width: '40' }"
          />
        </mp-tooltip>
        <mp-text
          color="gray.600"
          line-height="md"
          padding-left="2"
          padding-right="4"
          padding-y="1"
        >
          of 24 page
        </mp-text>
        <mp-tooltip label="Prev page" position="bottom">
          <mp-button-icon name="chevrons-left" size="sm" padding-right="1" />
        </mp-tooltip>
        <mp-tooltip label="Next page" position="bottom">
          <mp-button-icon name="chevrons-right" size="sm" padding-left="1" />
        </mp-tooltip>
      </mp-flex>
    </mp-flex>
  </mp-box>
</template>

<script>
import {
  MpFlex,
  MpBox,
  MpText,
  MpIcon,
  MpButton,
  MpButtonIcon,
  MpAutocomplete,
  MpTooltip,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
} from "@mekari/pixel";

export default {
  name: "SelectLocationPagination",
  components: {
    MpFlex,
    MpBox,
    MpText,
    MpIcon,
    MpButton,
    MpButtonIcon,
    MpAutocomplete,
    MpTooltip,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
  },
};
</script>