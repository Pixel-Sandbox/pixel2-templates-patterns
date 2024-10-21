<template>
  <mp-flex gap="1.5" align-items="center">
    <mp-text font-size="sm" color="gray.400"> Topic </mp-text>

    <mp-popover placement="top-start" v-slot="{ isOpen, onClose }">
      <mp-popover-trigger>
        <mp-flex
          as="button"
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
      </mp-popover-trigger>
      <mp-popover-content
        :width="isShowConfirmation ? '330px' : '164px'"
        bg="white"
        rounded="md"
        shadow="lg"
        border-width="1px"
        border-color="gray.400"
      >
        <mp-box v-if="isShowConfirmation">
          <mp-flex
            align-items="center"
            justify-content="space-between"
            py="3"
            px="4"
            bg="background"
            rounded-top="md"
            border-bottom-width="1px"
            border-color="gray.100"
          >
            <mp-text font-weight="semibold" font-size="md">
              Konfirmasi penggantian topik
            </mp-text>

            <mp-button-icon name="close" />
          </mp-flex>

          <mp-box px="4" py="3">
            <mp-text>
              Percakapan ini akan disimpan dan Anda akan diarahkan ke percakapan
              baru.
            </mp-text>
          </mp-box>

          <mp-flex justify-content="flex-end" px="4" py="3">
            <mp-button-group>
              <mp-button variant="ghost" @click="handleCancelChangeTopic">
                Batalkan
              </mp-button>
              <mp-button @click="handleConfirmChangeTopic">
                Konfirmasikan
              </mp-button>
            </mp-button-group>
          </mp-flex>
        </mp-box>

        <mp-popover-list v-else>
          <mp-popover-list-item
            v-for="option in options"
            :key="option"
            :is-active="option === topic"
            @click="handleSelectTopic(option, onClose)"
          >
            {{ option }}
          </mp-popover-list-item>
        </mp-popover-list>
      </mp-popover-content>
    </mp-popover>
  </mp-flex>
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
  MpBox,
  MpButtonIcon,
  MpButtonGroup,
  MpButton,
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
    MpBox,
    MpButtonIcon,
    MpButtonGroup,
    MpButton,
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
    isTopicChangeConfirmationNeeded: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isShowConfirmation: false,
      selectedTopic: this.topic,
      onClosePopover: () => {},
    };
  },
  methods: {
    handleSelectTopic(topic, onClosePopover = () => {}) {
      // If the selected topic is the same as the current one, close the popover without any action
      if (this.topic === topic) {
        onClosePopover();
        return;
      }

      // If isTopicChangeConfirmationNeeded is true, show confirmation modal
      if (this.isTopicChangeConfirmationNeeded) {
        // Store onClosePopover to be used in confirmation modal
        this.onClosePopover = onClosePopover;
        // Show confirmation modals
        this.isShowConfirmation = true;

        // Store the selected topic to be used in confirmation modal
        this.selectedTopic = topic;
        return;
      }

      this.$emit("select-topic", topic);
      onClosePopover();
    },
    handleConfirmChangeTopic() {
      this.isShowConfirmation = false;
      this.$emit("select-topic", this.selectedTopic);
      this.onClosePopover();

      // Reset selected topic
      this.selectedTopic = this.topic;
      this.isShowConfirmation = false;
    },
    handleCancelChangeTopic() {
      // Close confirmation modal. Back to list.
      this.isShowConfirmation = false;
    },
  },
};
</script>
