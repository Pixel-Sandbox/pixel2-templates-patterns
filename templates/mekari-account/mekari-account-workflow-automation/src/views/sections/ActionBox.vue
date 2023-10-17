<template>
  <mp-flex v-show="steps > 3" flex="1 0 auto">
    <mp-box
      width="620px"
      border="1px solid"
      border-color="gray.600"
      border-radius="md"
      box-shadow="md"
    >
      <mp-box
        background-color="background"
        padding="4"
        border-top-left-radius="md"
        border-top-right-radius="md"
        :border-bottom-left-radius="!isCollapse ? 'md' : null"
        :border-bottom-right-radius="!isCollapse ? 'md' : null"
        cursor="pointer"
        @click.native="setCollapse()"
      >
        <mp-flex justify-content="space-between" align-items="center">
          <mp-flex>
            <mp-flex
              padding="1.5"
              border="1px solid"
              border-color="gray.100"
              border-radius="md"
              margin-right="3"
              background-color="white"
            >
              <mp-icon name="notification" />
            </mp-flex>
            <mp-flex flex-direction="column">
              <mp-text color="gray.600" font-size="sm">Actions</mp-text>
              <mp-text font-weight="semibold">
                Send notification to Talenta
              </mp-text>
            </mp-flex>
          </mp-flex>
          <mp-button-icon
            name="delete"
            @click.stop="onDeleteModalToggle(true)"
          />
        </mp-flex>
      </mp-box>

      <mp-collapse :is-open="isCollapse">
        <mp-box
          background-color="white"
          padding-top="2"
          padding-bottom="5"
          padding-x="4"
          border-bottom-left-radius="md"
          border-bottom-right-radius="md"
        >
          <mp-accordion allow-toggle allow-multiple :default-index="[0, 1]">
            <mp-accordion-item padding-bottom="6">
              <mp-accordion-header padding-bottom="0">
                <mp-box flex="1" text-align="left">
                  <mp-heading as="h3" font-size="lg">
                    App & event
                    <mp-icon
                      name="done"
                      size="sm"
                      variant="fill"
                      color="green.400"
                      margin-left="2"
                    />
                  </mp-heading>
                </mp-box>
                <mp-accordion-icon />
              </mp-accordion-header>
              <mp-accordion-panel padding-top="3" padding-bottom="0">
                <mp-flex
                  border="1px solid"
                  border-radius="md"
                  border-color="gray.100"
                  padding="3"
                >
                  <mp-icon name="talenta-brand" margin-right="4" />
                  <mp-text font-weight="semibold">Talenta</mp-text>
                </mp-flex>

                <mp-form-control
                  control-id="event-notif"
                  is-disabled
                  margin-top="4"
                >
                  <mp-form-label>Event</mp-form-label>
                  <mp-autocomplete
                    value="Send inbox notification"
                    :data="['Send inbox notification']"
                    :content-style="{ width: 'full' }"
                  />
                </mp-form-control>
              </mp-accordion-panel>
            </mp-accordion-item>
            <mp-accordion-item border="0px">
              <mp-accordion-header padding-top="6" padding-bottom="0">
                <mp-box flex="1" text-align="left">
                  <mp-heading as="h3" font-size="lg">
                    Action
                    <mp-icon
                      name="done"
                      size="sm"
                      variant="fill"
                      color="green.400"
                      margin-left="2"
                    />
                  </mp-heading>
                </mp-box>
                <mp-accordion-icon />
              </mp-accordion-header>
              <mp-accordion-panel padding-bottom="0">
                <mp-form-control is-disabled control-id="receiver">
                  <mp-form-label>Receiver</mp-form-label>
                  <mp-autocomplete
                    value="Manager"
                    :data="['Manager']"
                    :content-style="{ width: 'full' }"
                  />
                  <mp-form-help-text>
                    The manager of the employee who has been appropriate to the
                    condition rule
                  </mp-form-help-text>
                </mp-form-control>
                <mp-form-control control-id="title" margin-top="4">
                  <mp-form-label>Title</mp-form-label>
                  <mp-input />
                </mp-form-control>
                <mp-form-control control-id="message" margin-top="4">
                  <mp-form-label>Message</mp-form-label>
                  <mp-textarea />
                  <mp-form-help-text>
                    If need using the attribute. Please select on available
                    fields
                  </mp-form-help-text>
                </mp-form-control>
              </mp-accordion-panel>
            </mp-accordion-item>
          </mp-accordion>
          <mp-button
            margin-top="9"
            width="full"
            @click="
              {
                setCollapse();
                setStep(5);
              }
            "
          >
            Continue
          </mp-button>
        </mp-box>
      </mp-collapse>
    </mp-box>

    <WorkflowDeleteModal
      type="action"
      :isModalOpen="isDeleteModalOpen"
      :onModalToggle="onDeleteModalToggle"
    />
  </mp-flex>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpCollapse,
  MpHeading,
  MpText,
  MpIcon,
  MpButton,
  MpButtonIcon,
  MpAccordion,
  MpAccordionItem,
  MpAccordionHeader,
  MpAccordionIcon,
  MpAccordionPanel,
  MpFormControl,
  MpFormLabel,
  MpFormHelpText,
  MpAutocomplete,
  MpInput,
  MpTextarea,
} from "@mekari/pixel";
import WorkflowDeleteModal from "../WorkflowDeleteModal";

export default {
  name: "ActionBox",
  components: {
    MpBox,
    MpFlex,
    MpCollapse,
    MpHeading,
    MpText,
    MpIcon,
    MpButton,
    MpButtonIcon,
    MpAccordion,
    MpAccordionItem,
    MpAccordionHeader,
    MpAccordionIcon,
    MpAccordionPanel,
    MpFormControl,
    MpFormLabel,
    MpFormHelpText,
    MpAutocomplete,
    MpInput,
    MpTextarea,
    WorkflowDeleteModal,
  },
  props: {
    steps: [Number],
    setStep: [Function],
  },
  data: function () {
    return {
      isCollapse: true,
      isDeleteModalOpen: false,
    };
  },
  methods: {
    setCollapse() {
      this.isCollapse = !this.isCollapse;
    },
    onDeleteModalToggle(data) {
      this.isDeleteModalOpen = data;
    },
  },
};
</script>