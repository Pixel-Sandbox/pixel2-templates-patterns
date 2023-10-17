<template>
  <mp-modal size="2xl" :is-open="isModalOpen">
    <mp-modal-content>
      <mp-modal-header>Payroll approval details</mp-modal-header>
      <mp-modal-close-button @click="onModalToggle(false)" />
      <mp-modal-body>
        <mp-box>
          <mp-flex>
            <mp-flex flex="2 0 0%">
              <mp-text color="gray.600" margin-bottom="4">
                Requested by
              </mp-text>
            </mp-flex>
            <mp-flex flex="4 0 0%">
              <mp-text margin-bottom="4"> EMP0219 - Rizal Chandra </mp-text>
            </mp-flex>
          </mp-flex>
          <mp-flex>
            <mp-flex flex="2 0 0%">
              <mp-text color="gray.600" margin-bottom="4">
                Payroll period
              </mp-text>
            </mp-flex>
            <mp-flex flex="4 0 0%">
              <mp-text margin-bottom="4"> Apr 2022 </mp-text>
            </mp-flex>
          </mp-flex>
          <mp-flex>
            <mp-flex flex="2 0 0%">
              <mp-text color="gray.600" margin-bottom="4"> Branch </mp-text>
            </mp-flex>
            <mp-flex flex="4 0 0%">
              <mp-text margin-bottom="4"> All branch </mp-text>
            </mp-flex>
          </mp-flex>
          <mp-flex>
            <mp-flex flex="2 0 0%">
              <mp-text color="gray.600" margin-bottom="4">
                Payment schedule
              </mp-text>
            </mp-flex>
            <mp-flex flex="4 0 0%">
              <mp-text margin-bottom="4"> All schedule </mp-text>
            </mp-flex>
          </mp-flex>
          <mp-flex>
            <mp-flex flex="2 0 0%">
              <mp-text color="gray.600" margin-bottom="4"> Status </mp-text>
            </mp-flex>
            <mp-flex flex="4 0 0%">
              <mp-badge variant="subtle" variant-color="gray">
                Pending
              </mp-badge>
            </mp-flex>
          </mp-flex>
          <mp-flex>
            <mp-flex flex="2 0 0%">
              <mp-text color="gray.600" margin-bottom="4">
                Request date
              </mp-text>
            </mp-flex>
            <mp-flex flex="4 0 0%">
              <mp-text margin-bottom="4"> 30 Apr 2022 </mp-text>
            </mp-flex>
          </mp-flex>

          <mp-flex>
            <mp-flex flex="2 0 0%">
              <mp-text color="gray.600" margin-bottom="4">
                Request history
              </mp-text>
            </mp-flex>
            <mp-flex flex="4 0 0%">
              <mp-timeline>
                <mp-timeline-item status="need-approval">
                  <mp-timeline-title>
                    <mp-text
                      font-size="md"
                      line-height="md"
                      font-weight="semibold"
                    >
                      Need approval from
                      <mp-text as="span" color="gray.400" font-weight="regular">
                        from
                      </mp-text>
                      Verrel Radiman
                    </mp-text>
                  </mp-timeline-title>
                  <mp-timeline-caption>
                    02 May 2021, 21:15 PM
                  </mp-timeline-caption>
                </mp-timeline-item>
                <mp-timeline-item status="created">
                  <mp-timeline-title>
                    <mp-text
                      font-size="md"
                      line-height="md"
                      font-weight="semibold"
                    >
                      Requested
                      <mp-text as="span" color="gray.400" font-weight="regular">
                        by
                      </mp-text>
                      Rizal Chandra
                    </mp-text>
                  </mp-timeline-title>
                  <mp-timeline-caption>
                    30 Apr 2021, 21:15 PM
                  </mp-timeline-caption>
                </mp-timeline-item>
              </mp-timeline>
            </mp-flex>
          </mp-flex>
        </mp-box>
      </mp-modal-body>
      <mp-modal-footer>
        <mp-button mr="3" variant="ghost" @click="onModalToggle(false)">
          Cancel
        </mp-button>
        <mp-button variant="outline">Cancel request</mp-button>
      </mp-modal-footer>
    </mp-modal-content>
    <mp-modal-overlay />
  </mp-modal>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpText,
  MpBadge,
  MpButton,
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
  MpTimelineCaption,
} from "@mekari/pixel";

export default {
  name: "PayrollHistoryApprovalModal",
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpBadge,
    MpButton,
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
    MpTimelineCaption,
  },
  props: {
    isModalOpen: [Boolean],
    resignModalName: [String],
    onModalToggle: [Function],
  },
};
</script>