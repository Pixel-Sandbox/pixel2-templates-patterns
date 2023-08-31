<template>
  <mp-modal size="lg" :is-open="isModalOpen">
    <mp-modal-content>
      <mp-modal-header>Request access details</mp-modal-header>
      <mp-modal-close-button @click="onModalToggle(false)" />
      <mp-modal-body>
        <mp-box>
          <mp-flex>
            <mp-flex flex="2 0 0%">
              <mp-text color="gray.600" margin-bottom="4">Requester</mp-text>
            </mp-flex>
            <mp-flex flex="4 0 0%">
              <mp-text margin-bottom="4">EMP0219 - Rizal Chandra</mp-text>
            </mp-flex>
          </mp-flex>
          <mp-flex>
            <mp-flex flex="2 0 0%">
              <mp-text color="gray.600" margin-bottom="4">
                Job position
              </mp-text>
            </mp-flex>
            <mp-flex flex="4 0 0%">
              <mp-text margin-bottom="4">Head of sales</mp-text>
            </mp-flex>
          </mp-flex>
          <mp-flex>
            <mp-flex flex="2 0 0%">
              <mp-text color="gray.600" margin-bottom="4">Product</mp-text>
            </mp-flex>
            <mp-flex flex="4 0 0%">
              <mp-text margin-bottom="4">Jurnal</mp-text>
            </mp-flex>
          </mp-flex>
          <mp-flex>
            <mp-flex flex="2 0 0%">
              <mp-text color="gray.600" margin-bottom="4">
                Access to grant
              </mp-text>
            </mp-flex>
            <mp-flex flex="4 0 0%">
              <mp-text margin-bottom="4">Subscription</mp-text>
            </mp-flex>
          </mp-flex>
          <mp-flex>
            <mp-flex flex="2 0 0%">
              <mp-text color="gray.600" margin-bottom="4">Status</mp-text>
            </mp-flex>
            <mp-flex flex="4 0 0%">
              <mp-badge variant="subtle" variant-color="gray">
                Waiting approval
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
              <mp-text margin-bottom="4">30 Apr 2022</mp-text>
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
                      Awaiting approval
                      <mp-text as="span" color="gray.400" font-weight="regular">
                        from
                      </mp-text>
                      Alfiana Sibuea
                    </mp-text>
                  </mp-timeline-title>
                </mp-timeline-item>
                <mp-timeline-item status="need-approval">
                  <mp-timeline-title>
                    <mp-text
                      font-size="md"
                      line-height="md"
                      font-weight="semibold"
                    >
                      Awaiting approval
                      <mp-text as="span" color="gray.400" font-weight="regular">
                        from
                      </mp-text>
                      Kevin Helma
                    </mp-text>
                  </mp-timeline-title>
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
                  <mp-timeline-content>
                    <mp-text font-size="md" line-height="md" color="dark">
                      Need access to Jurnal admin backyard
                    </mp-text>
                  </mp-timeline-content>
                </mp-timeline-item>
              </mp-timeline>
            </mp-flex>
          </mp-flex>
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
  MpTimelineContent,
} from "@mekari/pixel";

export default {
  name: "AllBackyardApprovalModal",
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
    MpTimelineContent,
  },
  props: {
    isModalOpen: [Boolean],
    resignModalName: [String],
    onModalToggle: [Function],
  },
};
</script>