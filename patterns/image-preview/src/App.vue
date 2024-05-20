<template>
  <div>
    <mp-button @click="handleOpen"> Preview </mp-button>
    <mp-modal :is-open="isModalOpen" :on-close="handleClose">
      <mp-modal-content
        max-width="full"
        height="full"
        bg="transparent"
        border="0"
        margin="0"
        box-shadow="none"
        z-index="skipLink"
      >
        <mp-flex
          justify="space-between"
          align="center"
          p="6"
          position="fixed"
          width="full"
        >
          <mp-flex gap="2" align="center">
            <mp-icon z-index="skipLink" color="white" name="file-image" />
            <mp-text z-index="skipLink" color="white">Label.jpg</mp-text>
          </mp-flex>
          <mp-flex gap="2" z-index="skipLink">
            <mp-button
              color="white"
              variant="unstyled"
              width="9"
              min-width="9"
              height="9"
              p="6px"
              left-icon="download"
              v-mp-tooltip="'Download'"
            />
            <mp-button
              color="white"
              variant="unstyled"
              width="9"
              min-width="9"
              height="9"
              p="6px"
              left-icon="close"
              v-mp-tooltip="'Close'"
              @click="handleClose"
            />
          </mp-flex>
        </mp-flex>
        <mp-carousel
          width="full"
          height="100vh"
          :auto-play-timeout="2000"
          :is-auto-play="false"
          :is-show-button-nav="true"
          :is-loop="false"
          :is-show-indicator="false"
          border-radius="xl"
          border="none"
          indicator-active-color="dark"
          bg="transparent"
          z-index="skipLink"
          margin-top="84px"
        >
          <mp-carousel-item
            v-for="(value, index) in 5"
            :key="index"
            width="full"
            height="auto"
            p="10"
            bg="transparent"
          >
            <mp-flex justify="center" align="center">
              <img
                src="https://via.placeholder.com/820x618/D0D6DD/FFFFFF"
                alt="alt"
              />
            </mp-flex>
          </mp-carousel-item>
        </mp-carousel>
      </mp-modal-content>
      <mp-modal-overlay />
    </mp-modal>
  </div>
</template>

<script>
import {
  MpFlex,
  MpText,
  MpIcon,
  MpButton,
  MpModal,
  // MpModalBody,
  MpModalContent,
  MpModalOverlay,
  MpCarousel,
  MpCarouselItem,
} from "@mekari/pixel";

export default {
  name: "App",
  components: {
    MpFlex,
    MpText,
    MpIcon,
    MpButton,
    MpModal,
    // MpModalBody,
    MpModalContent,
    MpModalOverlay,
    MpCarousel,
    MpCarouselItem,
  },
  data: function () {
    return {
      isModalOpen: false,
    };
  },
  methods: {
    handleOpen: function () {
      this.isModalOpen = true;
    },
    handleClose: function () {
      this.isModalOpen = false;
    },
  },
};
</script>
