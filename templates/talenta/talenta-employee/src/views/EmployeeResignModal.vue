<template>
  <mp-modal size="lg" :is-open="isModalOpen">
    <mp-modal-content>
      <mp-modal-header>Create resignation</mp-modal-header>
      <mp-modal-close-button @click="onModalToggle(false)" />
      <mp-modal-body>
        <mp-box>
          <mp-text margin-bottom="4">
            Do you want to resign {{ resignModalName }} ?
          </mp-text>
          <mp-banner variant="warning">
            <mp-banner-icon />
            <mp-banner-title>Warning</mp-banner-title>
            <mp-banner-description>
              Resigning this employee will affect approval evel, payroll for
              next month, and this employee can't log in to Talenta anymore.
            </mp-banner-description>
          </mp-banner>
        </mp-box>
      </mp-modal-body>
      <mp-modal-footer>
        <mp-button mr="3" variant="ghost" @click="onModalToggle(false)">
          Cancel
        </mp-button>
        <mp-button>Yes, resign</mp-button>
      </mp-modal-footer>
    </mp-modal-content>
    <mp-modal-overlay />
  </mp-modal>
</template>

<script>
import {
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
  MpBannerTitle,
  MpBannerDescription,
} from "@mekari/pixel";

export default {
  name: "EmployeeResignModal",
  components: {
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
    MpBannerTitle,
    MpBannerDescription,
  },
  props: {
    isModalOpen: [Boolean],
    resignModalName: [String],
    onModalToggle: [Function],
  },
};
</script>