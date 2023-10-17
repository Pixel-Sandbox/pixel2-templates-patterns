<template>
  <mp-modal size="xl" :is-open="isModalOpen">
    <mp-modal-content>
      <mp-modal-header>Sample template</mp-modal-header>
      <mp-modal-close-button @click="onModalToggle(false)" />
      <mp-modal-body>
        <mp-box>
          <mp-flex margin-bottom="5">
            <mp-flex flex="1 0 0%" padding-y="2">
              <mp-text font-weight="semibold" font-size="md">
                Report name
              </mp-text>
            </mp-flex>
            <mp-flex flex="5 0 0%" padding-y="2">
              <mp-text font-size="md">Employment report</mp-text>
            </mp-flex>
          </mp-flex>
          <mp-banner variant="info" is-inline>
            <mp-banner-icon />
            <mp-banner-description>
              This template is a sample. You can create a template similar to
              this by clicking the 'Create this template' button below.
            </mp-banner-description>
          </mp-banner>

          <mp-box height="calc(100vh - 450px)" margin-top="6" />
        </mp-box>
      </mp-modal-body>
      <mp-modal-footer>
        <mp-button
          margin-right="3"
          variant="ghost"
          @click="onModalToggle(false)"
        >
          Cancel
        </mp-button>
        <mp-button>Create this template</mp-button>
      </mp-modal-footer>
    </mp-modal-content>
    <mp-modal-overlay />
  </mp-modal>
</template>

<script>
import {
  MpFlex,
  MpBox,
  MpText,
  MpButton,
  MpModal,
  MpModalOverlay,
  MpModalContent,
  MpModalHeader,
  MpModalBody,
  MpModalFooter,
  MpModalCloseButton,
  MpBanner,
  MpBannerIcon,
  MpBannerDescription,
} from "@mekari/pixel";

export default {
  name: "CreateReportBuilderPreviewModal",
  components: {
    MpFlex,
    MpBox,
    MpText,
    MpButton,
    MpModal,
    MpModalOverlay,
    MpModalContent,
    MpModalHeader,
    MpModalBody,
    MpModalFooter,
    MpModalCloseButton,
    MpBanner,
    MpBannerIcon,
    MpBannerDescription,
  },
  props: {
    isModalOpen: [Boolean],
    onModalToggle: [Function],
  },
};
</script>