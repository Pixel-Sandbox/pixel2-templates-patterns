<template>
  <mp-modal size="md" :is-open="isModalOpen">
    <mp-modal-content>
      <mp-modal-header>Package detail</mp-modal-header>
      <mp-modal-close-button @click="onModalToggle(false)" />
      <mp-modal-body>
        <mp-flex flex-direction="row">
          <mp-flex flex-direction="column" width="700px">
            <mp-flex>
              <mp-flex flex="2 0 0%" padding-y="2">
                <mp-text color="gray.600" font-size="md" line-height="md">
                  Application
                </mp-text>
              </mp-flex>
              <mp-flex
                flex="4 0 0%"
                justify-content="space-between"
                padding-y="2"
              >
                <mp-text font-size="md" line-height="md"> Jurnal </mp-text>
              </mp-flex>
            </mp-flex>
            <mp-flex>
              <mp-flex flex="2 0 0%" padding-y="2">
                <mp-text color="gray.600" font-size="md" line-height="md">
                  Package
                </mp-text>
              </mp-flex>
              <mp-flex
                flex="4 0 0%"
                justify-content="space-between"
                padding-y="2"
              >
                <mp-text font-size="md" line-height="md"> Enterprise </mp-text>
              </mp-flex>
            </mp-flex>
            <mp-flex>
              <mp-flex flex="2 0 0%" padding-y="2">
                <mp-text color="gray.600" font-size="md" line-height="md">
                  Description
                </mp-text>
              </mp-flex>
              <mp-flex
                flex="4 0 0%"
                justify-content="space-between"
                padding-y="2"
              >
                <mp-text font-size="md" line-height="md">
                  Package created from migration
                </mp-text>
              </mp-flex>
            </mp-flex>
            <mp-flex>
              <mp-flex flex="2 0 0%" padding-y="2">
                <mp-text color="gray.600" font-size="md" line-height="md">
                  Components
                </mp-text>
              </mp-flex>
              <mp-flex
                flex="4 0 0%"
                justify-content="space-between"
                padding-y="2"
              >
                <mp-text font-size="md" line-height="md">
                  <ul :style="{ marginLeft: '20px' }">
                    <li>Jurnal User - 5</li>
                    <li>Jurnal Touch - 1</li>
                    <li>Moka POS - 1</li>
                    <li>Generik POS - 1</li>
                  </ul>
                </mp-text>
              </mp-flex>
            </mp-flex>
          </mp-flex>
        </mp-flex>
      </mp-modal-body>
    </mp-modal-content>
    <mp-modal-overlay />
  </mp-modal>
</template>

<script>
import {
  MpFlex,
  MpText,
  MpModal,
  MpModalOverlay,
  MpModalContent,
  MpModalHeader,
  MpModalBody,
  MpModalCloseButton,
} from "@mekari/pixel";

export default {
  name: "CreateSubscriptionDetailModal",
  components: {
    MpFlex,
    MpText,
    MpModal,
    MpModalOverlay,
    MpModalContent,
    MpModalHeader,
    MpModalBody,
    MpModalCloseButton,
  },
  props: {
    isModalOpen: [Boolean],
    onModalToggle: [Function],
  },
};
</script>