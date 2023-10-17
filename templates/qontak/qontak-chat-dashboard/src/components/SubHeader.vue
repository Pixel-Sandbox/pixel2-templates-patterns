<template>
  <mp-flex justify="space-between" align-items="center" height="72px" mx="6">
    <mp-box>
      <mp-text v-if="desc" is-link>{{ desc }}</mp-text>
      <mp-heading as="h1" font-size="2xl" font-weight="semibold">
        {{ title }}
      </mp-heading>
    </mp-box>
    <mp-flex gap="2">
      <template v-if="type === 'home'">
        <mp-button variant="ghost" left-icon="settings"
          >Personalize dashboard</mp-button
        >
        <mp-button variant="outline">Request custom report</mp-button>
      </template>
      <template v-if="type === 'properties'">
        <mp-button>Action Button</mp-button>
      </template>
      <template v-if="type === 'contacts'">
        <mp-popover id="popover-title">
          <mp-popover-trigger>
            <mp-button variant="outline" right-icon="caret-down">Actions</mp-button>
          </mp-popover-trigger>
          <mp-popover-content
            max-width="150px"
            bg="white"
            rounded="md"
            shadow="lg"
            border-width="1px"
            border-color="gray.400"
          >
            <mp-popover-list>
              <mp-popover-list-item>Edit properties</mp-popover-list-item>
              <mp-popover-list-item>Create automation</mp-popover-list-item>
              <mp-popover-list-item>Facebook connect</mp-popover-list-item>
              <mp-popover-list-item>Download all</mp-popover-list-item>
            </mp-popover-list>
          </mp-popover-content>
        </mp-popover>
        <mp-button variant="outline" left-icon="upload"
          >Upload contacts</mp-button
        >
        <mp-button variant="solid">Create contact</mp-button>
      </template>
      <template v-if="type === 'broadcast'">
        <mp-popover id="popover-title">
          <mp-popover-trigger>
            <mp-button variant="solid" right-icon="caret-down">Create recipient list</mp-button>
          </mp-popover-trigger>
          <mp-popover-content
            max-width="240px"
            bg="white"
            rounded="md"
            shadow="lg"
            border-width="1px"
            border-color="gray.400"
          >
            <mp-popover-list>
              <mp-popover-list-item>Upload file </mp-popover-list-item>
              <mp-popover-list-item>Select contacts</mp-popover-list-item>
            </mp-popover-list>
          </mp-popover-content>
        </mp-popover>
      </template>
    </mp-flex>
  </mp-flex>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpText,
  MpHeading,
  MpButton,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
} from "@mekari/pixel";

export default {
  name: "SubHeader",
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpHeading,
    MpButton,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
  },
  props: {
    title: [String],
    desc: [String],
    type: [String],
  },
};
</script>
