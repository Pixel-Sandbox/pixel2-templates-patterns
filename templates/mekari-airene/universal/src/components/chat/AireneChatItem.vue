<template>
  <mp-box
    data-element="chat-item"
    role="group"
    position="relative"
    py="2"
    pl="2"
    pr="0"
    rounded="md"
    :bg="isActive ? 'blue.50' : defaultBackground"
    cursor="pointer"
    transition="all 0.3s ease-in-out"
    :_hover="{ pr: '5', bg: 'blue.50' }"
    @click="handleSelect"
  >
    <mp-text is-truncated :line-clamp="1">
      <slot />
    </mp-text>

    <!-- use portal to render popover outside of the component -->
    <!-- use is-kee-alive=false to reduce DOM size. Popover instance init if open, and removed when closed -->
    <mp-popover :is-keep-alive="false" :use-portal="true" v-slot="{ onClose }">
      <mp-popover-trigger>
        <mp-box
          as="button"
          data-element="button-menu-kebab"
          transition="all 0.3s ease-in-out"
          position="absolute"
          top="2"
          right="1"
          opacity="0"
          transform="translateX(4px)"
          :_groupHover="{
            opacity: 1,
            transform: 'translateX(0)',
          }"
        >
          <mp-icon name="menu-kebab" size="sm" />
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
      >
        <mp-popover-list>
          <mp-popover-list-item @click="[handleEdit(), onClose()]">
            <mp-box display="flex" align-items="center">
              <mp-icon name="edit" mr="2" /> Ubah nama
            </mp-box>
          </mp-popover-list-item>
          <mp-popover-list-item @click="[handleDelete(), onClose()]">
            <mp-box display="flex" align-items="center">
              <mp-icon name="delete" mr="2" color="red.500" /> Hapus
            </mp-box>
          </mp-popover-list-item>
        </mp-popover-list>
      </mp-popover-content>
    </mp-popover>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpText,
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
    MpText,
    MpIcon,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
  },
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
    defaultBackground: {
      type: String,
      default: "#F5F9FF",
    },
  },
  methods: {
    handleEdit() {
      this.$emit("edit");
    },
    handleDelete() {
      this.$emit("delete");
    },
    handleSelect(e) {
      const srcElement = e.srcElement;
      const kebabMenuButton = this.$el.querySelector(
        '[data-element="button-menu-kebab"]'
      );

      // If click on kebabMenuButton, do nothing. Expect only show popover.
      if (kebabMenuButton.contains(srcElement)) return;

      this.$emit("select");
    },
  },
};
</script>
