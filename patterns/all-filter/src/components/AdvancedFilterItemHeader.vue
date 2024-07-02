<template>
  <mp-flex gap="4" align-items="center">
    <mp-box>
      <mp-text text-align="justify" font-weight="semibold">{{ name }}</mp-text>
      <mp-popover>
        <mp-popover-trigger>
          <mp-flex gap="1" align-items="center" :_hover="{ cursor: 'pointer' }">
            <mp-text v-if="!isDateOption" font-size="sm">Is any of</mp-text>
            <mp-text v-if="!selectCursor && isDateOption" font-size="sm"
              >Is on</mp-text
            >
            <mp-text v-if="selectCursor" font-size="sm">{{
              selectCursor
            }}</mp-text>
            <mp-icon size="sm" name="caret-down" />
          </mp-flex>
        </mp-popover-trigger>
        <mp-popover-content
          max-width="40"
          background-color="white"
          border-radius="md"
          border-width="1px"
          border-color="gray.400"
          box-shadow="lg"
        >
          <mp-popover-list>
            <mp-popover-list-item v-if="!isDateOption" is-active>
              Is any of
            </mp-popover-list-item>
            <mp-popover-list-item v-if="!isDateOption">
              Is not
            </mp-popover-list-item>
            <mp-popover-list-item
              v-if="isDateOption"
              :is-active="selectCursor === 'Is on'"
            >
              Is on
            </mp-popover-list-item>
            <mp-popover-list-item
              v-if="isDateOption"
              :is-active="selectCursor === 'Is between'"
            >
              Is between
            </mp-popover-list-item>
            <mp-popover-list-item
              v-if="isDateOption"
              :is-active="selectCursor === 'Is after'"
            >
              Is after
            </mp-popover-list-item>
            <mp-popover-list-item
              v-if="isDateOption"
              :is-active="selectCursor === 'Is before'"
            >
              Is before
            </mp-popover-list-item>
          </mp-popover-list>
        </mp-popover-content>
      </mp-popover>
    </mp-box>
  </mp-flex>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpText,
  MpIcon,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
} from "@mekari/pixel";

export default {
  name: "AdvancedFilterItemHeader",
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpIcon,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
  },
  props: {
    name: [String],
    isDateOption: [Boolean],
    selectCursor: [String],
  },
};
</script>
