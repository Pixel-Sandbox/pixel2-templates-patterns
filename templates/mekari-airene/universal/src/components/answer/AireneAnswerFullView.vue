<template>
  <mp-modal
    size="2xl"
    :is-open="isOpen"
    :on-close="handleClose"
    is-centered
    scroll-behavior="auto"
    :return-focus-on-close="false"
  >
    <mp-modal-content>
      <mp-modal-header
        display="flex"
        justify-content="space-between"
        align-items="center"
      >
        <mp-text font-weight="semibold">Airene answer</mp-text>
        <mp-button-icon
          v-mp-tooltip="'Perkecil jawaban'"
          name="full-screen"
          @click="handleClose"
        />
      </mp-modal-header>
      <mp-modal-body>
        <slot />
      </mp-modal-body>

      <mp-modal-footer>
        <mp-popover close-on-select>
          <mp-popover-trigger>
            <mp-button variant="outline" right-icon="caret-down">
              Ekspor jawaban
            </mp-button>
          </mp-popover-trigger>
          <mp-popover-content
            w="174px"
            bg="white"
            rounded="md"
            shadow="lg"
            border-width="1px"
            border-color="gray.400"
            z-index="modal"
          >
            <mp-popover-list>
              <mp-popover-list-item @click="handleSelectExport('PDF')">
                PDF
              </mp-popover-list-item>
              <mp-popover-list-item @click="handleSelectExport('Excel')">
                Excel
              </mp-popover-list-item>
            </mp-popover-list>
          </mp-popover-content>
        </mp-popover>
      </mp-modal-footer>
    </mp-modal-content>
    <mp-modal-overlay />
  </mp-modal>
</template>

<script>
import {
  MpModal,
  MpModalOverlay,
  MpModalContent,
  MpModalHeader,
  MpModalBody,
  MpText,
  MpButtonIcon,
  MpModalFooter,
  MpButton,
  MpPopover,
  MpPopoverContent,
  MpPopoverTrigger,
  MpPopoverList,
  MpPopoverListItem,
} from "@mekari/pixel";

export default {
  name: "ModalWithScrollable",
  components: {
    MpModal,
    MpModalOverlay,
    MpModalContent,
    MpModalHeader,
    MpModalBody,
    MpText,
    MpButtonIcon,
    MpModalFooter,
    MpButton,
    MpPopover,
    MpPopoverContent,
    MpPopoverTrigger,
    MpPopoverList,
    MpPopoverListItem,
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClose() {
      this.$emit("close");
    },
    /**
     * Handles the export action
     * @param {("CSV"|"PDF")} target - The export format
     */
    handleSelectExport(target) {
      console.log("target", target);
      this.$emit("select-export", target);
    },
  },
};
</script>
