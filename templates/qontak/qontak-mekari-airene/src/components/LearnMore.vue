<template>
  <mp-flex
    align="center"
    justify="space-between"
    bg="gray.25"
    py="2"
    px="3"
    border-bottom-radius="md"
  >
    <mp-text color="gray.600" font-size="sm"
      >Mekari Airene responses can be inaccurate or misleading.
      <mp-button variant="link" font-size="sm" @click="handleOpen"
        >Learn more</mp-button
      >
    </mp-text>
    <mp-flex gap="1">
      <mp-button-icon
        name="like"
        size="sm"
        transform="rotateX(180deg)"
        :is-active="isThumbsDown"
        @click="handleThumbsDown"
      />
      <mp-button-icon
        name="like"
        size="sm"
        :is-active="isThumbsUp"
        @click="handleThumbsUp"
      />
    </mp-flex>

    <mp-modal
      :is-open="isModalOpen"
      :on-close="handleClose"
    >
      <mp-modal-content>
        <mp-modal-header>
          <mp-flex align="center">
            <img
              src="https://cdn.mekari.design/template-assets/logo-mekari-airene.svg"
              alt="Logo Mekari Airene"
            />
            <mp-badge size="sm" ml="2">BETA</mp-badge>
          </mp-flex>
        </mp-modal-header>
        <mp-modal-close-button />
        <mp-modal-body>
          
            <mp-text>
              As you try Mekari Airene, please keep in mind:
              <ul style="margin-left: 16px">
                <li>
                  <b>Mekari Airene will not always right,</b> and may
                  provide inaccurate or inappropriate responses.
                </li>
                <li>
                  <b>Mekari Airene will get better with your feedback,</b>
                  Please rate responses and flag anything that may be
                  inaccurate.
                </li>
              </ul>
            </mp-text>
        
        </mp-modal-body>
      </mp-modal-content>
      <mp-modal-overlay />
    </mp-modal>
  </mp-flex>
</template>

<script>
import {
  MpFlex,
  MpText,
  MpButton,
  MpButtonIcon,
  MpBadge,
  MpModal,
  MpModalOverlay,
  MpModalContent,
  MpModalHeader,
  MpModalBody,
  MpModalCloseButton,
} from "@mekari/pixel";

export default {
  name: "LearnMore",
  components: {
    MpFlex,
    MpText,
    MpButton,
    MpButtonIcon,
    MpBadge,
    MpModal,
    MpModalOverlay,
    MpModalContent,
    MpModalHeader,
    MpModalBody,
    MpModalCloseButton,
  },
  data() {
    return {
      isModalOpen: false,
      isThumbsUp: false,
      isThumbsDown: false
    };
  },
  methods: {
    handleOpen() {
      this.isModalOpen = true;
    },
    handleClose() {
      this.isModalOpen = false;
    },
    handleThumbsUp() {
      this.isThumbsDown = false
      this.isThumbsUp = true
    },
    handleThumbsDown() {
      this.isThumbsUp = false
      this.isThumbsDown = true
    },
  },
};
</script>
