<template>
  <mp-flex
    bg="white"
    position="sticky"
    bottom="0"
    p="4"
    pb="6"
  >
    <mp-form-control control-id="chat-input-with-form-control" width="500px">
      <mp-airene-chat-input
        ref="input"
        id="airene-chat-input-1"
        v-model="prompt"
        maxlength="200"
        :is-force-focus="isForceFocus"
        @input="handleInput"
        @click="handleClick"
        @keydown="handleKeydown"
        @focus="handleFocus"
        @blur="handleBlur"
      />
      <mp-form-error-message>You must fill in chat input</mp-form-error-message>
      <mp-form-help-text>
        Airene responses can be inaccurate or misleading.
        <mp-text
          as="span"
          font-size="sm"
          is-link
          @click.native="handleShowModal"
        >
          Learn more
        </mp-text>
      </mp-form-help-text>
    </mp-form-control>
    <mp-modal :is-open="isShowModal">
      <mp-modal-content>
        <mp-modal-header>
          <mp-image
            src="https://cdn.mekari.design/logo/airine/default.png"
            :width="70"
            :height="21"
          />
        </mp-modal-header>
        <mp-modal-close-button @click="handleShowModal" />
        <mp-modal-body>
          <mp-text> As you use Airene, please keep in mind: </mp-text>
          <mp-text as="ul" mt="2" ml="18px">
            <li>
              <b>Airene will not always right,</b> and may provide inaccurate or
              inappropriate responses.
            </li>
            <li>
              <b>Airene will get better with your feedback,</b> Please rate
              responses and flag anything that may be inaccurate.
            </li>
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
  MpImage,
  MpAireneChatInput,
  MpFormControl,
  MpFormHelpText,
  MpFormErrorMessage,
  MpModal,
  MpModalOverlay,
  MpModalContent,
  MpModalHeader,
  MpModalBody,
  MpModalCloseButton,
} from "@mekari/pixel";

export default {
  name: "AireneInput",
  components: {
    MpFlex,
    MpText,
    MpImage,
    MpAireneChatInput,
    MpFormControl,
    MpFormHelpText,
    MpFormErrorMessage,
    MpModal,
    MpModalOverlay,
    MpModalContent,
    MpModalHeader,
    MpModalBody,
    MpModalCloseButton,
  },
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      prompt: this.value,
      isForceFocus: false,
      isShowModal: false,
    };
  },
  watch: {
    value(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.prompt = newVal;
        this.isForceFocus = true;
      }
    },
  },
  methods: {
    handleShowModal() {
      this.isShowModal = !this.isShowModal;
    },
    handleInput(val) {
      console.log("INPUT", val); 
    },
    handleFocus() {
      console.log("FOCUS");
    },
    handleBlur() {
      console.log("BLUR");
    },
    handleClick(val, id) {
      this.$emit("submit", val, id);
      this.prompt = '';
    },
    handleKeydown(e) {
      if (e.keyCode === 13 && !e.shiftKey) {
        e.preventDefault(); // Prevent the default behavior of create new line
        this.$emit("submit", this.prompt);
        this.prompt = '';
      }
    },
  },
};
</script>
