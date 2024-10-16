<template>
  <mp-popover :close-on-select="true" v-slot="{ isOpen }">
    <mp-popover-trigger>
      <mp-flex gap="1.5" align-items="center">
        <mp-text font-size="sm" color="gray.400"> Topic </mp-text>
        <mp-flex
          align-items="center"
          cursor="pointer"
          gap="0.5"
          px="1"
          rounded="sm"
          bg="gray.50"
        >
          <mp-text font-size="sm">
            {{ topic }}
          </mp-text>
          <mp-icon
            transition="transform 0.2s"
            :name="isOpen ? 'caret-up' : 'caret-down'"
            size="sm"
          />
        </mp-flex>
      </mp-flex>
    </mp-popover-trigger>
    <mp-popover-content
      width="164px"
      bg="white"
      rounded="md"
      shadow="lg"
      border-width="1px"
      border-color="gray.400"
    >
      <mp-popover-list>
        <mp-popover-list-item
          v-for="option in options"
          :key="option"
          :is-active="option === topic"
          @click="handleSelectTopic(option)"
        >
          {{ option }}
        </mp-popover-list-item>
      </mp-popover-list>
    </mp-popover-content>
  </mp-popover>
</template>

<script>
import {
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
  MpIcon,
  MpFlex,
  MpText,
} from "@mekari/pixel";

export default {
  components: {
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
    MpIcon,
    MpFlex,
    MpText,
  },
  props: {
    topic: {
      type: String,
      default: "",
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleSelectTopic(topic) {
      this.$emit("select-topic", topic);
    },
  },
};
</script>
