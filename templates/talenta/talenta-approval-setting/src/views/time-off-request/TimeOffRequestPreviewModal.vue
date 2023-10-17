<template>
  <mp-modal size="lg" :is-open="isModalOpen">
    <mp-modal-content>
      <mp-modal-header>Preview approval layer</mp-modal-header>
      <mp-modal-close-button @click="onModalToggle(false)" />
      <mp-modal-body>
        <mp-box>
          <mp-form-control control-id="approval-setting" margin-bottom="5">
            <mp-form-label>Approval setting</mp-form-label>
            <mp-select value="annual-leave">
              <option value="annual-leave">Annual leave</option>
            </mp-select>
          </mp-form-control>
          <mp-form-control control-id="employee">
            <mp-form-label>Employee</mp-form-label>
            <mp-select value="CPC06 - Jessie Tan">
              <option value="CPC06 - Jessie Tan">CPC06 - Jessie Tan</option>
            </mp-select>
          </mp-form-control>
        </mp-box>
      </mp-modal-body>
      <mp-modal-footer>
        <mp-button
          margin-right="3"
          variant="ghost"
          @click="onModalToggle(false)"
        >
          Cancel
        </mp-button>
        <mp-button>Preview</mp-button>
      </mp-modal-footer>
      <mp-box background-color="gray.50" padding="4">
        <mp-heading as="h3" font-size="lg" margin-bottom="2">
          Layers of approval
        </mp-heading>
        <mp-timeline>
          <mp-timeline-item status="created" position="first">
            <mp-timeline-title>
              <mp-text font-weight="semibold" font-size="md" line-height="md">
                Approval 1
                <mp-text as="span" font-weight="regular" color="gray.400">
                  by
                </mp-text>
                MR005 - Alfian Ramadhan
              </mp-text>
            </mp-timeline-title>
          </mp-timeline-item>
          <mp-timeline-item status="created" position="last">
            <mp-timeline-title>
              <mp-text font-weight="semibold" font-size="md" line-height="md">
                Approval 2
                <mp-text as="span" font-weight="regular" color="gray.400">
                  by
                </mp-text>
                MR012 - Rio Priyono
              </mp-text>
            </mp-timeline-title>
          </mp-timeline-item>
        </mp-timeline>
      </mp-box>
    </mp-modal-content>
    <mp-modal-overlay />
  </mp-modal>
</template>

<script>
import {
  MpBox,
  MpText,
  MpHeading,
  MpButton,
  MpFormControl,
  MpFormLabel,
  MpSelect,
  MpModal,
  MpModalOverlay,
  MpModalContent,
  MpModalHeader,
  MpModalBody,
  MpModalFooter,
  MpModalCloseButton,
  MpTimeline,
  MpTimelineItem,
  MpTimelineTitle,
} from "@mekari/pixel";

export default {
  name: "TimeOffRequestPreviewModal",
  components: {
    MpBox,
    MpText,
    MpHeading,
    MpButton,
    MpFormControl,
    MpFormLabel,
    MpSelect,
    MpModal,
    MpModalOverlay,
    MpModalContent,
    MpModalHeader,
    MpModalBody,
    MpModalFooter,
    MpModalCloseButton,
    MpTimeline,
    MpTimelineItem,
    MpTimelineTitle,
  },
  props: {
    isModalOpen: [Boolean],
    onModalToggle: [Function],
  },
};
</script>