<template>
  <mp-flex v-show="steps === 0" flex="1 0 0%">
    <mp-flex
      border="1px solid"
      border-color="gray.600"
      border-radius="md"
      box-shadow="md"
    >
      <mp-box
        width="360px"
        background-color="white"
        padding="4"
        border-top-left-radius="md"
        border-bottom-left-radius="md"
      >
        <mp-text font-weight="semibold">App event</mp-text>
        <mp-text color="gray.600" font-size="sm">
          Runs the flow when something happens in an app.
        </mp-text>

        <mp-pseudo-box role="group" @click="setStep(1)">
          <mp-flex align-items="center" margin-top="4" cursor="pointer">
            <mp-flex
              padding="2.5"
              border="1px solid"
              border-color="gray.100"
              border-radius="md"
              margin-right="3"
              background-color="white"
              transition="all .2s ease"
              :_groupHover="{
                borderColor: 'blue.400',
                boxShadow: 'md',
              }"
            >
              <mp-icon name="talenta-brand" />
            </mp-flex>
            <mp-text font-weight="semibold">Talenta</mp-text>
          </mp-flex>
        </mp-pseudo-box>

        <mp-pseudo-box role="group">
          <mp-flex align-items="center" margin-top="4" cursor="pointer">
            <mp-flex
              padding="2.5"
              border="1px solid"
              border-color="gray.100"
              border-radius="md"
              margin-right="3"
              background-color="white"
              transition="all .2s ease"
              :_groupHover="{
                borderColor: 'blue.400',
                boxShadow: 'md',
              }"
            >
              <mp-icon name="qontak-brand" />
            </mp-flex>
            <mp-text font-weight="semibold">Qontak</mp-text>
          </mp-flex>
        </mp-pseudo-box>

        <mp-flex gap="1" margin-top="4">
          <mp-text font-size="sm">Can’t find your app? </mp-text>
          <mp-text
            font-size="sm"
            is-link
            @click.native="onFeedbackModalToggle(true)"
            >Request a specific app</mp-text
          >
        </mp-flex>

        <mp-divider margin-y="4" />

        <mp-text font-weight="semibold">Tools</mp-text>
        <mp-text color="gray.600" font-size="sm">
          Runs the flow when something happens in the tools.
        </mp-text>

        <mp-pseudo-box role="group">
          <mp-flex align-items="center" margin-top="4" cursor="pointer">
            <mp-flex
              padding="2.5"
              border="1px solid"
              border-color="gray.100"
              border-radius="md"
              margin-right="3"
              background-color="white"
              transition="all .2s ease"
              :_groupHover="{
                borderColor: 'blue.400',
                boxShadow: 'md',
              }"
            >
              <mp-icon name="calendar" />
            </mp-flex>
            <mp-box>
              <mp-text font-weight="semibold">Schedule</mp-text>
              <mp-text color="gray.600" font-size="sm">
                Start the flow every hour, day, week, or month.
              </mp-text>
            </mp-box>
          </mp-flex>
        </mp-pseudo-box>
      </mp-box>
      <mp-box
        width="680px"
        background-color="gray.25"
        padding="4"
        border-top-right-radius="md"
        border-bottom-right-radius="md"
      >
        <mp-flex margin-y="4">
          <mp-icon name="talenta-brand" size="sm" margin-right="3" />
          <mp-flex flex-direction="column">
            <mp-heading as="h3" font-size="lg">Talenta</mp-heading>
            <mp-text color="gray.600">
              Start workflow from popular templates with other Talenta users.
            </mp-text>
          </mp-flex>
        </mp-flex>

        <mp-flex gap="4">
          <mp-pseudo-box role="group" flex="1 0 0%">
            <mp-box
              background-color="white"
              border="1px solid"
              border-color="gray.100"
              border-radius="md"
              padding="4"
              cursor="pointer"
              transition="all .2s ease"
              :_groupHover="{
                borderColor: 'blue.400',
                boxShadow: 'md',
              }"
            >
              <mp-flex align-items="center" gap="2" margin-bottom="3">
                <mp-icon name="time" size="sm" />
                <mp-text color="gray.600" font-size="sm">Attendance</mp-text>
              </mp-flex>

              <mp-text font-weight="semibold">
                Notify when employee late in
              </mp-text>
              <mp-text color="gray.600" font-size="sm" margin-top="2">
                Send a notification to manager when employee late in with some
                criteria.
              </mp-text>
            </mp-box>
          </mp-pseudo-box>
          <mp-pseudo-box role="group" flex="1 0 0%">
            <mp-box
              background-color="white"
              border="1px solid"
              border-color="gray.100"
              border-radius="md"
              padding="4"
              cursor="pointer"
              transition="all .2s ease"
              :_groupHover="{
                borderColor: 'blue.400',
                boxShadow: 'md',
              }"
            >
              <mp-flex align-items="center" gap="2" margin-bottom="3">
                <mp-icon name="time" size="sm" />
                <mp-text color="gray.600" font-size="sm">Attendance</mp-text>
              </mp-flex>

              <mp-text font-weight="semibold">
                Notify when employee early out
              </mp-text>
              <mp-text color="gray.600" font-size="sm" margin-top="2">
                Send a notification to manage when employee early out with some
                criteria.
              </mp-text>
            </mp-box>
          </mp-pseudo-box>
        </mp-flex>

        <mp-flex margin-top="7" margin-bottom="4">
          <mp-icon name="qontak-brand" size="sm" margin-right="3" />
          <mp-flex flex-direction="column">
            <mp-heading as="h3" font-size="lg">Qontak</mp-heading>
            <mp-text color="gray.600">
              Start workflow from popular templates with other Qontak users.
            </mp-text>
          </mp-flex>
        </mp-flex>

        <mp-flex gap="4">
          <mp-pseudo-box role="group" flex="1 0 0%">
            <mp-box
              background-color="white"
              border="1px solid"
              border-color="gray.100"
              border-radius="md"
              padding="4"
              cursor="pointer"
              transition="all .2s ease"
              :_groupHover="{
                borderColor: 'blue.400',
                boxShadow: 'md',
              }"
            >
              <mp-flex align-items="center" gap="2" margin-bottom="3">
                <mp-icon name="chart-of-account" size="sm" />
                <mp-text color="gray.600" font-size="sm">Deals</mp-text>
              </mp-flex>

              <mp-text font-weight="semibold">
                Task reminder for created deals
              </mp-text>
              <mp-text color="gray.600" font-size="sm" margin-top="2">
                Create task reminder after deals are created.
              </mp-text>
            </mp-box>
          </mp-pseudo-box>
          <mp-pseudo-box role="group" flex="1 0 0%">
            <mp-box
              background-color="white"
              border="1px solid"
              border-color="gray.100"
              border-radius="md"
              padding="4"
              flex="1 0 0%"
              cursor="pointer"
              transition="all .2s ease"
              :_groupHover="{
                borderColor: 'blue.400',
                boxShadow: 'md',
              }"
            >
              <mp-flex align-items="center" gap="2" margin-bottom="3">
                <mp-icon name="chart-of-account" size="sm" />
                <mp-text color="gray.600" font-size="sm">Deals</mp-text>
              </mp-flex>

              <mp-text font-weight="semibold">
                Assign and distribute leads
              </mp-text>
              <mp-text color="gray.600" font-size="sm" margin-top="2">
                Automate assign leads to appropriate user.
              </mp-text>
            </mp-box>
          </mp-pseudo-box>
        </mp-flex>
      </mp-box>
    </mp-flex>

    <WorkflowFeedbackModal
      :isModalOpen="isFeedbackModalOpen"
      :onModalToggle="onFeedbackModalToggle"
      :onModalNext="onFeedbackSuccessModalToggle"
    />
    <WorkflowFeedbackSuccessModal
      :isModalOpen="isFeedbackSuccessModalOpen"
      :onModalToggle="onFeedbackSuccessModalToggle"
    />
  </mp-flex>
</template>

<script>
import {
  MpBox,
  MpPseudoBox,
  MpFlex,
  MpHeading,
  MpText,
  MpIcon,
  MpDivider,
} from "@mekari/pixel";
import WorkflowFeedbackModal from "../WorkflowFeedbackModal";
import WorkflowFeedbackSuccessModal from "../WorkflowFeedbackSuccessModal";

export default {
  name: "MainBox",
  components: {
    MpBox,
    MpPseudoBox,
    MpFlex,
    MpHeading,
    MpText,
    MpIcon,
    MpDivider,
    WorkflowFeedbackModal,
    WorkflowFeedbackSuccessModal,
  },
  props: {
    steps: [Number],
    setStep: [Function],
  },
  data: function () {
    return {
      isFeedbackModalOpen: false,
      isFeedbackSuccessModalOpen: false,
    };
  },
  methods: {
    onFeedbackModalToggle(data) {
      this.isFeedbackModalOpen = data;
    },
    onFeedbackSuccessModalToggle(data) {
      this.isFeedbackModalOpen = false;
      this.isFeedbackSuccessModalOpen = data;
    },
  },
};
</script>