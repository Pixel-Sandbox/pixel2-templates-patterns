<template>
  <mp-flex width="full" justify-content="space-between" align-items="center">
    <mp-flex align-items="center" gap="1">
      <mp-flex
        v-if="actionType === 'copy-text'"
        data-element="copy-text"
        as="button"
        align-items="center"
        gap="2"
        cursor="pointer"
        @click="handleCopyText"
      >
        <mp-icon name="copy" variant="duotone" />
        <mp-text is-link> Copy text </mp-text>
      </mp-flex>

      <mp-box v-if="actionType === 'export-answer'">
        <mp-popover
          data-element="export-answer"
          placement="top"
          v-slot="{ isOpen, onClose }"
        >
          <mp-popover-trigger>
            <mp-flex as="button" align-items="center" gap="2" cursor="pointer">
              <mp-text is-link> Ekspor jawaban </mp-text>

              <mp-icon
                name="caret-down"
                size="sm"
                color="blue.400"
                transition="transform 0.3s"
                :transform="isOpen ? 'rotate(180deg)' : ''"
              />
            </mp-flex>
          </mp-popover-trigger>

          <mp-popover-content
            max-width="124px"
            bg="white"
            rounded="md"
            shadow="lg"
            border-width="1px"
            border-color="gray.400"
            z-index="modal"
          >
            <mp-popover-list>
              <mp-popover-list-item
                v-for="option in exportOptions"
                :key="option"
                @click="[handleExportAnswer(option), onClose()]"
              >
                {{ option }}
              </mp-popover-list-item>
            </mp-popover-list>
          </mp-popover-content>
        </mp-popover>
      </mp-box>
    </mp-flex>

    <mp-flex>
      <mp-button-icon name="like" @click="handleLike" />
      <mp-button-icon name="dislike" @click="handleDislike" />
    </mp-flex>
  </mp-flex>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpText,
  MpButtonIcon,
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
    MpFlex,
    MpText,
    MpButtonIcon,
    MpIcon,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
  },
  props: {
    actionType: {
      type: String,
      default: "copy-text", // copy-text, export-answer
    },
    exportOptions: {
      type: Array,
      default: () => ["PDF", "CSV"],
    },
  },
  methods: {
    handleCopyText() {
      this.$emit("copy-text");
    },
    handleLike() {
      this.$emit("like");
    },
    handleDislike() {
      this.$emit("dislike");
    },

    handleExportAnswer(option) {
      this.$emit("export-answer", option);
    },
  },
};
</script>
