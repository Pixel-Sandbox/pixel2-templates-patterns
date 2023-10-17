<template>
  <mp-flex gap="4" align-items="center">
    <mp-text font-weight="semibold">{{ name }}</mp-text>
    <mp-popover>
      <mp-popover-trigger>
        <mp-button variant="link" right-icon="caret-down"> Contains </mp-button>
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
          <mp-popover-list-item>Contains</mp-popover-list-item>
          <mp-popover-list-item>Does not contains</mp-popover-list-item>
          <mp-popover-list-item>Contains all</mp-popover-list-item>
          <mp-popover-list-item>Is not empty</mp-popover-list-item>
          <mp-popover-list-item>Is empty</mp-popover-list-item>
        </mp-popover-list>
      </mp-popover-content>
    </mp-popover>
  </mp-flex>
</template>

<script>
  import {
    MpFlex,
    MpText,
    MpButton,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
  } from "@mekari/pixel";

  export default {
    name: "AdvancedFilterItemHeader",
    components: {
      MpFlex,
      MpText,
      MpButton,
      MpPopover,
      MpPopoverTrigger,
      MpPopoverContent,
      MpPopoverList,
      MpPopoverListItem,
    },
    props: {
      name: [String],
    },
  };
</script>
