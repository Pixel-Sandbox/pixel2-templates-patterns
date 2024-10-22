<template>
  <mp-popover :id="id" placement="bottom-start" :use-portal="true" v-slot="{ onClose }">
    <mp-popover-trigger>
      <mp-box>
        <slot></slot>
      </mp-box>
    </mp-popover-trigger>
    <mp-popover-content
      width="360px"
      bg="white"
      rounded="md"
      shadow="lg"
      border-width="1px"
      border-color="gray.400"
    >
      <mp-box>
        <mp-flex
          align-items="center"
          justify-content="space-between"
          py="3"
          px="4"
          bg="background"
          rounded-top="md"
          border-bottom-width="1px"
          border-color="gray.100"
        >
          <mp-text font-weight="semibold" font-size="md">
            Give feedback for Mekari Airene
          </mp-text>

          <mp-button-icon name="close" @click="handleClose(onClose)" />
        </mp-flex>

        <mp-flex direction="column" gap="2" p="4">
          <mp-text>What is the main reason of your feedback?</mp-text>
          <mp-form-control control-id="reason-option">
            <mp-form-label>Please select one option</mp-form-label>
            <mp-radio-group
              v-model="reasonOption"
              name="reason-option"
              spacing="1"
            >
              <mp-radio id="1" value="response_accuracy">
                Response accuracy
              </mp-radio>
              <mp-radio id="2" value="response_time"> Response time </mp-radio>
              <mp-radio id="3" value="other"> Other </mp-radio>
            </mp-radio-group>
          </mp-form-control>
          <mp-form-control control-id="input-feedback">
            <mp-form-label>Give feedback</mp-form-label>
            <mp-textarea
              v-model="reasonFedback"
              placeholder="Enter your feedback"
            />
          </mp-form-control>
        </mp-flex>

        <mp-flex justify-content="flex-end" p="4" pt="1">
          <mp-button-group>
            <mp-button variant="ghost" @click="handleClose(onClose)"> Cancel </mp-button>
            <mp-button @click="handleSubmit(onClose)"> Submit </mp-button>
          </mp-button-group>
        </mp-flex>
      </mp-box>
    </mp-popover-content>
  </mp-popover>
</template>

<script>
import {
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpFlex,
  MpText,
  MpBox,
  MpButtonIcon,
  MpButtonGroup,
  MpButton,
  MpFormControl,
  MpFormLabel,
  MpRadioGroup,
  MpRadio,
  MpTextarea,
} from "@mekari/pixel";

export default {
  name: "AireneFeedback",
  components: {
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpFlex,
    MpText,
    MpBox,
    MpButtonIcon,
    MpButtonGroup,
    MpButton,
    MpFormControl,
    MpFormLabel,
    MpRadioGroup,
    MpRadio,
    MpTextarea,
  },
  props: {
    id: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      reasonOption: "",
      reasonFedback: "",
    };
  },
  methods: {
    handleClose(handleClose) {
      this.$emit('close', this.id)
      handleClose()
    },
    handleSubmit(handleClose) {
      this.$emit('submit', this.id)
      handleClose()
    }
  }
};
</script>
