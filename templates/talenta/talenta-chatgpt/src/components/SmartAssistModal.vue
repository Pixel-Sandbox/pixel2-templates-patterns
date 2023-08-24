<template>
  <mp-modal size="md" :is-open="isModalOpen">
    <mp-modal-content>
      <mp-modal-header>
        <img src="../assets/mekari-airene-logo.svg" width="110px" />
      </mp-modal-header>
      <mp-modal-close-button @click="onModalToggle(false)" />
      <mp-modal-body>
        <mp-box>
          <mp-text margin-bottom="4">
            As you try Airene, please keep in mind:
            <ul style="margin-left: 20px">
              <li>
                <b>Airene will not always right</b>, and may provide inaccurate
                or inappropriate responses.
              </li>
              <li>
                <b>Airene will get better with your feedback</b>, Please rate
                responses and flag anything that may be inaccurate.
              </li>
            </ul>
          </mp-text>
        </mp-box>
      </mp-modal-body>
    </mp-modal-content>
    <mp-modal-overlay />
  </mp-modal>
</template>

<script>
import {
  MpBox,
  MpText,
  MpModal,
  MpModalOverlay,
  MpModalContent,
  MpModalHeader,
  MpModalBody,
  MpModalCloseButton,
} from "@mekari/pixel";

export default {
  name: "SmartAssistModal",
  components: {
    MpBox,
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