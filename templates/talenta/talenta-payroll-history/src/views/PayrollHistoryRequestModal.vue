<template>
  <mp-modal size="lg" :is-open="isModalOpen">
    <mp-modal-overlay />
    <mp-modal-content>
      <mp-modal-header>Request payroll approval</mp-modal-header>
      <mp-modal-close-button @click="onModalToggle(false)" />
      <mp-modal-body>
        <mp-box>
          <mp-flex>
            <mp-flex flex="3 0 0%">
              <mp-text color="gray.600" margin-bottom="4">
                Payroll period
              </mp-text>
            </mp-flex>
            <mp-flex flex="4 0 0%">
              <mp-text margin-bottom="4"> Apr 2022 </mp-text>
            </mp-flex>
          </mp-flex>
          <mp-flex>
            <mp-flex flex="3 0 0%">
              <mp-text color="gray.600" margin-bottom="4"> Branch </mp-text>
            </mp-flex>
            <mp-flex flex="4 0 0%">
              <mp-text margin-bottom="4"> All branch </mp-text>
            </mp-flex>
          </mp-flex>
          <mp-flex>
            <mp-flex flex="3 0 0%">
              <mp-text color="gray.600" margin-bottom="4">
                Payment schedule
              </mp-text>
            </mp-flex>
            <mp-flex flex="4 0 0%">
              <mp-text margin-bottom="4"> All schedule </mp-text>
            </mp-flex>
          </mp-flex>

          <mp-banner variant="info">
            <mp-banner-icon />
            <mp-banner-description>
              If payroll calculations are run after the request is approved, the
              status will return to the initial stage and another approval is
              required.
            </mp-banner-description>
          </mp-banner>
        </mp-box>
      </mp-modal-body>
      <mp-modal-footer>
        <mp-button mr="3" variant="ghost" @click="onModalToggle(false)">
          Cancel
        </mp-button>
        <mp-button>Request payroll approval</mp-button>
      </mp-modal-footer>
    </mp-modal-content>
  </mp-modal>
</template>

<script>
import {
  MpBox,
  MpFlex,
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
  name: "PayrollHistoryRequestModal",
  components: {
    MpBox,
    MpFlex,
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
    resignModalName: [String],
    onModalToggle: [Function],
  },
};
</script>