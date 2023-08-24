<template>
  <mp-modal size="xl" :is-open="isOpen" :on-close="onClose">
    <mp-modal-content>
      <mp-modal-close-button />
      <mp-modal-body padding-y="11" padding-x="6">
        <mp-flex :display="['block', 'flex']" gap="6">
          <mp-box :width="['full', '70%']" margin-bottom="6">
            <mp-heading as="h1" font-size="2xl" margin-bottom="4">
              Conduct exit interview
            </mp-heading>
            <mp-text>
              Schedule an exit interview with the resignee to discuss the reasons for leaving and
              obtain feedback experience to the company.
            </mp-text>
            <mp-box margin-top="4">
              <mp-flex
                v-for="(item, index) in data.file_list"
                :key="item.id"
                justify-content="space-between"
                align-items="center"
                border="1px solid"
                border-color="gray.100"
                border-radius="md"
                :border-bottom-left-radius="index !== data.file_list.length - 1 ? 'none' : 'md'"
                :border-bottom-right-radius="index !== data.file_list.length - 1 ? 'none' : 'md'"
                :border-top-left-radius="index !== data.file_list.length - 1 ? 'md' : 'none'"
                :border-top-right-radius="index !== data.file_list.length - 1 ? 'md' : 'none'"
                :border-top="index !== data.file_list.length - 1 ? '1px solid gray.100' : '0px'"
                padding-x="4"
                padding-y="1"
              >
                <mp-flex gap="4" align-items="center">
                  <mp-icon :name="item.icon" />
                  <mp-text>{{ item.name }}</mp-text>
                </mp-flex>
                <mp-flex gap="4" align-items="center">
                  <mp-text color="gray.600" font-size="sm">{{ item.size }}</mp-text>
                  <mp-button-icon name="download" size="md" variant="duotone" />
                </mp-flex>
              </mp-flex>
            </mp-box>
            <mp-box margin-top="8">
              <mp-heading as="h3" font-size="lg" margin-bottom="4">Activity</mp-heading>
              <mp-form-control control-id="activity">
                <mp-input-group>
                  <mp-input />
                  <mp-input-right-addon :with-background="false">
                    <mp-icon name="attachment" size="sm" />
                  </mp-input-right-addon>
                </mp-input-group>
                <mp-form-help-text>Your activity will be emailed.</mp-form-help-text>
              </mp-form-control>
            </mp-box>
            <mp-box margin-top="8">
              <mp-flex align-items="center">
                <mp-avatar name="Alfian ramadhan" size="md" background-color="stone" />
                <mp-text font-weight="semibold" margin-left="3">
                  Alfian ramadhan create this task
                </mp-text>
                <mp-text color="gray.600" font-size="sm" margin-left="2">Today at 11:05</mp-text>
              </mp-flex>
            </mp-box>
          </mp-box>
          <mp-box :width="['full', '30%']">
            <mp-box margin-bottom="5">
              <mp-text color="gray.600" margin-bottom="1">Status</mp-text>
              <mp-button variant="outline" size="sm" right-icon="caret-down">To do</mp-button>
            </mp-box>
            <mp-box margin-bottom="5">
              <mp-text color="gray.600" margin-bottom="1">Assignee</mp-text>
              <mp-flex align-items="center">
                <mp-avatar name="Jessie Tan" size="md" background-color="stone" />
                <mp-text margin-left="3">Jessie Tan</mp-text>
              </mp-flex>
            </mp-box>
            <mp-box>
              <mp-text color="gray.600" margin-bottom="1">Due date</mp-text>
              <mp-heading as="h3" font-size="lg">23 Mar 2023</mp-heading>
            </mp-box>
          </mp-box>
        </mp-flex>
      </mp-modal-body>
    </mp-modal-content>
    <mp-modal-overlay />
  </mp-modal>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpIcon,
  MpAvatar,
  MpHeading,
  MpText,
  MpButton,
  MpButtonIcon,
  MpFormControl,
  MpFormHelpText,
  MpInput,
  MpInputGroup,
  MpInputRightAddon,
  MpModal,
  MpModalOverlay,
  MpModalContent,
  MpModalBody,
  MpModalCloseButton,
} from '@mekari/pixel';

export default {
  name: 'MpxOffboardingTodoModal',
  components: {
    MpBox,
    MpFlex,
    MpIcon,
    MpAvatar,
    MpHeading,
    MpText,
    MpButton,
    MpButtonIcon,
    MpFormControl,
    MpFormHelpText,
    MpInput,
    MpInputGroup,
    MpInputRightAddon,
    MpModal,
    MpModalOverlay,
    MpModalContent,
    MpModalBody,
    MpModalCloseButton,
  },
  props: {
    data: [Object],
    isOpen: [Boolean],
    onOpen: [Function],
    onClose: [Function],
  },
};
</script>
