<template>
  <mp-modal
    :is-open="isModalOpen"
    :on-close="handleClose"
    :close-on-overlay-click="false"
    :close-on-esc="false"
    :is-centered="false"
  >
    <mp-modal-content
      max-width="640px"
      bg="transparent"
      border="none"
      box-shadow="none"
    >
      <!-- // SMART INPUT -->
      <mp-flex
        align="center"
        justify="space-between"
        bg="white"
        p="3"
        mb="1"
        border="1px solid"
        border-color="gray.400"
        border-radius="md"
        box-shadow="lg"
      >
        <mp-flex width="full" gap="2" mr="4">
          <IconAsk />
          <mp-text size="sm">
            {{ input }}
          </mp-text>
        </mp-flex>
        <mp-flex>
          <mp-spinner v-if="isLoading" size="sm" />
        </mp-flex>
      </mp-flex>

      <!-- // SMART RESULT -->
      <transition name="fade">
        <mp-flex
          v-if="isWaiting || isShowResult"
          direction="column"
          width="full"
          :maxHeight="isWaiting ? '120px' : '480px'"
          bg="white"
          mb="1"
          border="1px solid"
          border-color="gray.400"
          border-radius="md"
          box-shadow="lg"
          transition="all 250ms"
        >
          <mp-flex width="full" px="6" my="6" overflow="auto">
            <mp-text v-if="isWaiting" color="gray.400"
              >Mekari Airene is writing...</mp-text
            >
            <mp-text v-if="isShowResult" size="sm">
              {{ result }}
            </mp-text>
          </mp-flex>
          <LearnMore />
        </mp-flex>
      </transition>

      <!-- // SMART ACTION -->
      <transition name="fade">
        <mp-flex
          v-if="isShowAction"
          width="280px"
          max-height="188px"
          overflow="auto"
          direction="column"
          bg="white"
          mb="1"
          pt="4"
          pb="2"
          border="1px solid"
          border-color="gray.400"
          border-radius="md"
          box-shadow="lg"
        >
          <mp-text
            v-if="type === 'summarize'"
            color="gray.400"
            px="3"
            mb="1"
            font-size="sm"
            >GENERATE FROM CONVERSATION</mp-text
          >

          <!-- // SUMMARIZE ACTION -->
          <mp-flex v-if="type === 'summarize'" direction="column">
            <mp-flex
              py="2"
              px="3"
              align="center"
              cursor="pointer"
              transition="all 250ms"
              :_hover="{ background: 'gray.50' }"
              @click="handleClose"
            >
              <mp-icon name="check" mr="2" />
              <mp-text>Done</mp-text>
            </mp-flex>
            <mp-flex
              py="2"
              px="3"
              align="center"
              cursor="pointer"
              transition="all 250ms"
              :_hover="{ background: 'gray.50' }"
              @click="handleInsert"
            >
              <mp-icon v-if="!isLoadingAction" name="chat" mr="2" />
              <mp-spinner v-if="isLoadingAction" size="sm" />
              <mp-flex direction="column">
                <template v-if="!isLoadingAction">
                  <mp-text>Insert into conversation</mp-text>
                  <mp-text font-size="sm" color="gray.600">
                    Only you can see this summary</mp-text
                  >
                </template>
                <template v-else>
                  <mp-text ml="3">Loading...</mp-text>
                </template>
              </mp-flex>
            </mp-flex>
          </mp-flex>

          <!-- // PARAPHRASE ACTION -->
          <mp-flex v-if="type === 'paraphrase'" direction="column">
            <mp-flex
              py="2"
              px="3"
              align="center"
              cursor="pointer"
              transition="all 250ms"
              :_hover="{ background: 'gray.50' }"
              @click="handleClose"
            >
              <mp-icon name="check" mr="2" />
              <mp-text>Use this writing</mp-text>
            </mp-flex>
            <mp-flex
              py="2"
              px="3"
              align="center"
              cursor="pointer"
              transition="all 250ms"
              :_hover="{ background: 'gray.50' }"
              @click="handleClose"
            >
              <mp-icon name="text-editor-align-left" mr="2" />
              <mp-text>Make it longer</mp-text>
            </mp-flex>
            <mp-flex
              py="2"
              px="3"
              align="center"
              cursor="pointer"
              transition="all 250ms"
              border-top="1px"
              border-color="gray.100"
              :_hover="{ background: 'gray.50' }"
              @click="handleClose"
            >
              <mp-icon name="undo" mr="2" />
              <mp-text>Try again</mp-text>
            </mp-flex>
            <mp-flex
              py="2"
              px="3"
              align="center"
              cursor="pointer"
              transition="all 250ms"
              :_hover="{ background: 'gray.50' }"
              @click="handleClose"
            >
              <mp-icon name="delete" mr="2" />
              <mp-text>Discard</mp-text>
            </mp-flex>
          </mp-flex>
        </mp-flex>
      </transition>
    </mp-modal-content>
    <mp-modal-overlay background="blackAlpha.400" />
  </mp-modal>
</template>

<script>
import {
  MpText,
  MpFlex,
  MpSpinner,
  MpIcon,
  MpModal,
  MpModalOverlay,
  MpModalContent,
} from "@mekari/pixel";

import LearnMore from "./LearnMore";
import IconAsk from "./IconAsk";

export default {
  name: "SmartAssist",
  components: {
    MpText,
    MpFlex,
    MpSpinner,
    MpIcon,
    MpModal,
    MpModalOverlay,
    MpModalContent,
    LearnMore,
    IconAsk,
  },
  props: {
    input: [String],
    result: [String],
    type: [String],
    isOpen: [Boolean],
  },
  data() {
    return {
      isLoading: true,
      isWaiting: false,
      isShowResult: false,
      isShowAction: false,
      isLoadingAction: false,
      countClickAction: 0,
    };
  },
  computed: {
    isModalOpen() {
      return this.isOpen;
    },
    actionType() {
      return this.type;
    },
  },
  watch: {
    isOpen(val) {
      if (val) {
        this.handleFetchData();
      } else {
        this.handleResetData();
      }
    },
  },
  methods: {
    handleResetData() {
      this.isLoading = true;
      this.isWaiting = false;
      this.isShowResult = false;
      this.isShowAction = false;
    },
    handleFetchData() {
      setTimeout(() => {
        this.isWaiting = true;
      }, 1000);

      setTimeout(() => {
        this.isLoading = false;
        this.isWaiting = false;
        this.isShowResult = true;
      }, 3000);

      setTimeout(() => {
        this.isShowAction = true;
      }, 4000);
    },
    handleClose() {
      this.$emit("close");
    },
    handleInsert() {
      this.countClickAction += 1;
      this.isLoadingAction = true;

      if (this.countClickAction > 1) {
        this.isLoadingAction = false;
        this.$emit("insert");
        this.handleClose();
      } else {
        setTimeout(() => {
          this.isLoadingAction = false;
          this.handleShowError();
        }, 1300);
      }
    },
    handleShowError() {
      this.$toast({
        variant: "error",
        title: "Something went wrong, please try again.",
        position: "top",
        duration: 2000,
      });
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
