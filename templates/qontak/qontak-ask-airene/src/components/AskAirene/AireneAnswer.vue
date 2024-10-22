<template>
  <mp-flex>
    <mp-airene-chat-bubble
      id="chat-bubble-with-other-content"
      :is-show-full-screen="false"
      :is-loading="isLoading"
      @click-full-screen="handleAlert('click button full screen')"
    >
      <template #loading>
        <mp-skeleton
          variant-color="purple"
          width="100%"
          height="12px"
          rounded="full"
        />
        <mp-skeleton
          variant-color="purple"
          width="50%"
          height="12px"
          rounded="full"
        />
        <mp-skeleton
          variant-color="purple"
          width="80%"
          height="12px"
          rounded="full"
        />
      </template>
      <template #text>
        {{ text }}
      </template>
      <template #footer>
        <mp-flex
          as="button"
          align-items="center"
          gap="2"
          outline="none"
          rounded="sm"
          color="blue.400"
          :_focus="{
            boxShadow: 'outer',
          }"
          @click="handleAlert('click copy button')"
        >
          <mp-icon name="draft" size="sm" variant="duotone" />
          <mp-text color="blue.400"> Use response </mp-text>
        </mp-flex>
        <mp-flex gap="2">
          <mp-button-icon
            name="like"
            :variant="isSubmitFeedback ? 'fill' : 'outline'"
            :color="isSubmitFeedback ? 'blue.400' : 'gray.600'"
            v-mp-tooltip="'Good response'"
            @click="handleShowFeedbackModal"
          />
          <mp-button-icon
            v-if="!isSubmitFeedback"
            name="dislike"
            v-mp-tooltip="'Bad response'"
            @click="handleShowFeedbackModal"
          />
        </mp-flex>
      </template>
      <template #source>
        <mp-flex
          width="full"
          justify-content="space-between"
          align-items="center"
          cursor="pointer"
          @click="handleShowSource"
        >
          <mp-text color="gray.600" font-weight="semibold" font-size="sm">
            Related sources
          </mp-text>
          <mp-button-icon :name="isSourceOpen ? 'caret-up' : 'caret-down'" />
        </mp-flex>
        <mp-collapse :is-open="isSourceOpen">
          <mp-flex direction="column" gap="1">
            <mp-flex
              v-for="(source, index) in sourceData"
              :key="index"
              as="a"
              target="_blank"
              align-items="center"
              gap="2"
              color="gray.600"
              py="0.5"
              :href="source.url"
              :_hover="{
                color: 'blue.400',
              }"
            >
              <mp-icon :name="source.icon" size="sm" color="inherit" />
              <mp-text color="inherit" font-size="sm">
                {{ source.name }}
              </mp-text>
            </mp-flex>
            <mp-text font-size="sm" is-link> View all </mp-text>
          </mp-flex>
        </mp-collapse>
      </template>
    </mp-airene-chat-bubble>
    <mp-modal :is-open="isShowFeedbackModal">
      <mp-modal-content>
        <mp-modal-header>Give feedback for Mekari Airene</mp-modal-header>
        <mp-modal-close-button @click="handleShowFeedbackModal" />
        <mp-modal-body>
          <mp-flex direction="column" gap="2">
            <mp-text>What is the main reason of your feedback?</mp-text>
            <mp-form-control control-id="reason-option">
              <mp-form-label>Please select one option</mp-form-label>
              <mp-radio-group v-model="reasonOption" name="reason-option" spacing="1">
                <mp-radio id="1" value="response_accuracy">
                  Response accuracy
                </mp-radio>
                <mp-radio id="2" value="response_time">
                  Response time
                </mp-radio>
                <mp-radio id="3" value="other">
                  Other
                </mp-radio>
              </mp-radio-group>
            </mp-form-control>
            <mp-form-control control-id="input-feedback">
              <mp-form-label>Give feedback</mp-form-label>
              <mp-textarea v-model="reasonFedback" placeholder="Enter your feedback" />
            </mp-form-control>
          </mp-flex>
        </mp-modal-body>
        <mp-modal-footer>
          <mp-button
            variant="ghost"
            margin-right="3"
            @click="handleShowFeedbackModal"
            >Cancel</mp-button
          >
          <mp-button @click="handleSubmitFeedback">Submit</mp-button>
        </mp-modal-footer>
      </mp-modal-content>
      <mp-modal-overlay />
    </mp-modal>
  </mp-flex>
</template>

<script>
import {
  MpFlex,
  MpText,
  MpIcon,
  MpButton,
  MpCollapse,
  MpButtonIcon,
  MpSkeleton,
  MpAireneChatBubble,
  MpModal,
  MpModalContent,
  MpModalHeader,
  MpModalBody,
  MpModalFooter,
  MpModalOverlay,
  MpModalCloseButton,
  MpFormControl,
  MpFormLabel,
  MpRadioGroup,
  MpRadio,
  MpTextarea,
} from "@mekari/pixel";

export default {
  name: "AireneQuestion",
  components: {
    MpFlex,
    MpText,
    MpIcon,
    MpButton,
    MpCollapse,
    MpButtonIcon,
    MpSkeleton,
    MpAireneChatBubble,
    MpModal,
    MpModalContent,
    MpModalHeader,
    MpModalBody,
    MpModalFooter,
    MpModalOverlay,
    MpModalCloseButton,
    MpFormControl,
    MpFormLabel,
    MpRadioGroup,
    MpRadio,
    MpTextarea,
  },
  props: {
    text: {
      type: String,
      default: "",
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      // SOURCE
      isSourceOpen: true,
      sourceData: [
        { icon: "doc", name: "Mesin kopi rusak berkedip", url: "#" },
        {
          icon: "doc",
          name: "Mesin Kopi Tidak Berjalan dengan Lancar",
          url: "#",
        },
        {
          icon: "inbox",
          name: "Mesin mati tapi lampu power berkedip",
          url: "#",
        },
      ],

      // FEEDBACK
      isShowFeedbackModal: false,
      isSubmitFeedback: false,
      reasonOption: '',
      reasonFedback: ''
    };
  },
  methods: {
    handleAlert(message) {
      alert(message);
    },
    handleShowSource() {
      this.isSourceOpen = !this.isSourceOpen;
    },
    handleShowFeedbackModal() {
      this.isShowFeedbackModal = !this.isShowFeedbackModal;
    },
    handleSubmitFeedback() {
      this.isSubmitFeedback = true
      this.handleShowFeedbackModal()
    }
  },
};
</script>
