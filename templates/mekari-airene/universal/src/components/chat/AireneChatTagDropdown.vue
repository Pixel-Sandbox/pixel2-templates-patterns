<template>
  <mp-box>
    <mp-popover
      :is-keep-alive="false"
      :use-portal="true"
      v-slot="{ onClose, isOpen }"
    >
      <mp-popover-trigger>
        <mp-box
          display="flex"
          align-items="center"
          gap="0.5"
          bg="gray.50"
          px="1"
          rounded="sm"
          cursor="pointer"
        >
          {{ label }}

          <mp-icon
            name="caret-down"
            transition="all 0.3s ease-in-out"
            :transform="isOpen ? 'rotate(180deg)' : ''"
          />
        </mp-box>
      </mp-popover-trigger>
      <mp-popover-content
        max-width="148px"
        bg="white"
        rounded="md"
        shadow="lg"
        border-width="1px"
        border-color="gray.400"
        z-index="modal"
        max-height="183px"
        overflow-y="auto"
      >
        <mp-popover-list>
          <mp-popover-list-item
            v-for="item in items"
            :key="item.id"
            @click="[handleSelect(item), onClose()]"
            :is-active="label === item"
          >
            {{ item.name || item }}
          </mp-popover-list-item>
        </mp-popover-list>
      </mp-popover-content>
    </mp-popover>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpIcon,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
} from "@mekari/pixel";

export default {
  components: {
    MpBox,
    MpIcon,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
  },
  props: {
    label: {
      type: String,
      default: "",
      required: true,
    },
    items: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  methods: {
    handleSelect(payload) {
      this.$emit("select", payload);
    },
  },
};
</script>
