<template>
  <mp-flex v-show="steps > 0" flex="1 0 auto">
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
              <mp-icon name="talenta-brand" />
            </mp-flex>
            <mp-flex flex-direction="column">
              <mp-text color="gray.600" font-size="sm">Trigger</mp-text>
              <mp-text v-show="steps === 1" font-weight="semibold">
                Talenta
              </mp-text>
              <mp-text v-show="steps > 1" font-weight="semibold">
                Employee clock in late
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

                <mp-form-control control-id="event" margin-top="4">
                  <mp-form-label>Event</mp-form-label>
                  <mp-autocomplete
                    placeholder="Select event"
                    :data="[
                      {
                        value: 'New attendance',
                        description:
                          'Triggers when an employee clock in or clock out',
                      },
                      {
                        value: 'New time off request',
                        description:
                          'Triggers when an employee submit time off request',
                      },
                      {
                        value: 'New overtime request',
                        description:
                          'Triggers when an employee submit overtime request',
                      },
                      {
                        value: 'New reimbursement',
                        description:
                          'Triggers whenever a new reimbursement is created',
                      },
                    ]"
                    :content-style="{ width: 'full' }"
                  >
                    <template slot-scope="props">
                      <mp-flex flex-direction="column">
                        <mp-text>
                          {{ props.item.value }}
                        </mp-text>
                        <mp-text color="gray.600" font-size="sm">
                          {{ props.item.description }}
                        </mp-text>
                      </mp-flex>
                    </template>
                  </mp-autocomplete>
                </mp-form-control>
              </mp-accordion-panel>
            </mp-accordion-item>
            <mp-accordion-item border="0px">
              <mp-accordion-header padding-top="6" padding-bottom="0">
                <mp-box flex="1" text-align="left">
                  <mp-heading as="h3" font-size="lg">
                    Trigger
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
                <mp-form-control control-id="attendance">
                  <mp-form-label>Attendance</mp-form-label>
                  <mp-autocomplete
                    placeholder="Select attendance"
                    :data="[
                      'Employee clock in late',
                      'Employee clock out early',
                      'Employee without clock in',
                      'Employee without clock out',
                      'Employee without clock in & clock out (Absent)',
                    ]"
                    :content-style="{ width: 'full' }"
                  />
                </mp-form-control>

                <mp-flex gap="4" margin-top="4">
                  <mp-form-control control-id="condition" flex="1 0 auto">
                    <mp-form-label>Condition</mp-form-label>
                    <mp-autocomplete
                      placeholder="Select condition"
                      :data="['# of weekly late in', '# of monthly late in']"
                      :content-style="{ width: 'full' }"
                    />
                  </mp-form-control>
                  <mp-form-control control-id="value" flex="4 0 auto">
                    <mp-form-label>Value</mp-form-label>
                    <mp-input />
                    <mp-form-help-text>
                      Value to represent the condition
                    </mp-form-help-text>
                  </mp-form-control>
                </mp-flex>
              </mp-accordion-panel>
            </mp-accordion-item>
          </mp-accordion>
          <mp-button
            margin-top="9"
            width="full"
            @click="
              setCollapse();
              setStep(2);
            "
          >
            Continue
          </mp-button>
        </mp-box>
      </mp-collapse>
    </mp-box>

    <WorkflowDeleteModal
      type="trigger"
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
} from "@mekari/pixel";
import WorkflowDeleteModal from "../WorkflowDeleteModal";

export default {
  name: "TriggerBox",
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