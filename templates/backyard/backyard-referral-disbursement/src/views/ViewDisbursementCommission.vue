<template>
  <mp-box>
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 60px)">
      <Sidebar is-alternate is-custom />
      <mp-box
        as="section"
        data-id="content"
        width="100%"
        height="calc(100vh - 60px)"
        overflow-y="auto"
        background-color="background"
        :margin-left="['0', '60px']"
      >
        <mp-flex
          justify="space-between"
          align-items="center"
          :padding-x="['4', '6']"
          :display="['inline-block', 'flex']"
          padding-y="1.063rem"
        >
          <mp-box height="12">
            <mp-text font-size="sm" is-link>Referral Disbursement</mp-text>
            <mp-heading as="h1" font-size="2xl" font-weight="semibold">
              27804529 - Budi Sudirman
            </mp-heading>
          </mp-box>

          <mp-box
            :width="['100%', 'auto']"
            :position="['fixed', 'relative']"
            :top="['100%', '0']"
            :left="['50%', '0']"
            :transform="['translate(-50%, -100%)', 'translate(0%, 0%)']"
            :border-top="['1px solid', '0px solid']"
            :padding-y="['2', '0']"
            :padding-x="['4', '0']"
            :background-color="['white', 'transparent']"
            border-color="gray.100"
            z-index="100"
          >
            <mp-flex gap="2" :flex-direction="['column-reverse', 'row']">
              <mp-button rightIcon="caret-down" :display="['block', 'none']">
                Actions
              </mp-button>
              <mp-popover use-portal>
                <mp-popover-trigger>
                  <mp-button
                    rightIcon="caret-down"
                    :display="['none', 'block']"
                  >
                    Actions
                  </mp-button>
                </mp-popover-trigger>
                <mp-popover-content
                  max-width="40"
                  bg="white"
                  rounded="md"
                  shadow="lg"
                  border="1px solid"
                  border-color="gray.400"
                >
                  <mp-popover-list display="grid">
                    <mp-popover-list-item>
                      Grant commission
                    </mp-popover-list-item>
                    <mp-popover-list-item>
                      Reject commission
                    </mp-popover-list-item>
                  </mp-popover-list>
                </mp-popover-content>
              </mp-popover>
            </mp-flex>
          </mp-box>
        </mp-flex>
        <mp-box
          min-height="calc(100vh - 192px)"
          border-top-width="1px"
          background-color="white"
          padding-top="6"
          :padding-x="['4', '6']"
          :padding-bottom="['32', '10']"
        >
          <mp-flex :flex-direction="['column', 'row']">
            <mp-flex flex-direction="column" :width="['100%', '700px']">
              <mp-heading as="h3" color="dark" font-size="lg" margin-bottom="4">
                Disbursement information
              </mp-heading>
              <mp-flex>
                <mp-flex flex="3 0 0%" padding-y="2">
                  <mp-text color="gray.600" font-size="md" line-height="md">
                    Status
                  </mp-text>
                </mp-flex>
                <mp-flex
                  flex="4 0 0%"
                  justify-content="space-between"
                  padding-y="2"
                >
                  <mp-badge variant="subtle" variant-color="orange">
                    Need granted
                  </mp-badge>
                </mp-flex>
              </mp-flex>
              <mp-flex>
                <mp-flex flex="3 0 0%" padding-y="2">
                  <mp-text color="gray.600" font-size="md" line-height="md">
                    Commission type
                  </mp-text>
                </mp-flex>
                <mp-flex
                  flex="4 0 0%"
                  justify-content="space-between"
                  padding-y="2"
                >
                  <mp-text font-size="md" line-height="md"> Standard </mp-text>
                </mp-flex>
              </mp-flex>
              <mp-divider margin-y="6" />
              <mp-heading as="h3" color="dark" font-size="lg" margin-bottom="4">
                Agent information
              </mp-heading>
              <mp-flex>
                <mp-flex flex="3 0 0%" padding-y="2">
                  <mp-text color="gray.600" font-size="md" line-height="md">
                    ID
                  </mp-text>
                </mp-flex>
                <mp-flex
                  flex="4 0 0%"
                  justify-content="space-between"
                  padding-y="2"
                >
                  <mp-text font-size="md" line-height="md">27804529</mp-text>
                </mp-flex>
              </mp-flex>
              <mp-flex>
                <mp-flex flex="3 0 0%" padding-y="2">
                  <mp-text color="gray.600" font-size="md" line-height="md">
                    SO number
                  </mp-text>
                </mp-flex>
                <mp-flex
                  flex="4 0 0%"
                  justify-content="space-between"
                  padding-y="2"
                >
                  <mp-text font-size="md" line-height="md">1842422</mp-text>
                </mp-flex>
              </mp-flex>
              <mp-flex>
                <mp-flex flex="3 0 0%" padding-y="2">
                  <mp-text color="gray.600" font-size="md" line-height="md">
                    Program
                  </mp-text>
                </mp-flex>
                <mp-flex
                  flex="4 0 0%"
                  justify-content="space-between"
                  padding-y="2"
                >
                  <mp-text font-size="md" line-height="md">
                    Referral Mekari Jurnal
                  </mp-text>
                </mp-flex>
              </mp-flex>
              <mp-flex>
                <mp-flex flex="3 0 0%" padding-y="2">
                  <mp-text color="gray.600" font-size="md" line-height="md">
                    Agent name
                  </mp-text>
                </mp-flex>
                <mp-flex
                  flex="4 0 0%"
                  justify-content="space-between"
                  padding-y="2"
                >
                  <mp-text font-size="md" line-height="md">
                    Budi Sudirman
                  </mp-text>
                </mp-flex>
              </mp-flex>
              <mp-flex>
                <mp-flex flex="3 0 0%" padding-y="2">
                  <mp-text color="gray.600" font-size="md" line-height="md">
                    Referral code
                  </mp-text>
                </mp-flex>
                <mp-flex
                  flex="4 0 0%"
                  justify-content="space-between"
                  padding-y="2"
                >
                  <mp-text font-size="md" line-height="md">
                    budisudirman21
                  </mp-text>
                </mp-flex>
              </mp-flex>
              <mp-flex>
                <mp-flex flex="3 0 0%" padding-y="2">
                  <mp-text color="gray.600" font-size="md" line-height="md">
                    Bank name
                  </mp-text>
                </mp-flex>
                <mp-flex
                  flex="4 0 0%"
                  justify-content="space-between"
                  padding-y="2"
                >
                  <mp-text font-size="md" line-height="md">Mandiri</mp-text>
                </mp-flex>
              </mp-flex>
              <mp-flex>
                <mp-flex flex="3 0 0%" padding-y="2">
                  <mp-text color="gray.600" font-size="md" line-height="md">
                    Bank account holder
                  </mp-text>
                </mp-flex>
                <mp-flex
                  flex="4 0 0%"
                  justify-content="space-between"
                  padding-y="2"
                >
                  <mp-text font-size="md" line-height="md">
                    Budi Sudirman
                  </mp-text>
                </mp-flex>
              </mp-flex>
              <mp-flex>
                <mp-flex flex="3 0 0%" padding-y="2">
                  <mp-text color="gray.600" font-size="md" line-height="md">
                    Bank account number
                  </mp-text>
                </mp-flex>
                <mp-flex
                  flex="4 0 0%"
                  justify-content="space-between"
                  padding-y="2"
                >
                  <mp-text font-size="md" line-height="md">430029101</mp-text>
                </mp-flex>
              </mp-flex>
              <mp-flex>
                <mp-flex flex="3 0 0%" padding-y="2">
                  <mp-text color="gray.600" font-size="md" line-height="md">
                    ID type
                  </mp-text>
                </mp-flex>
                <mp-flex
                  flex="4 0 0%"
                  justify-content="space-between"
                  padding-y="2"
                >
                  <mp-text font-size="md" line-height="md">
                    Personal NPWP
                  </mp-text>
                </mp-flex>
              </mp-flex>
              <mp-flex>
                <mp-flex flex="3 0 0%" padding-y="2">
                  <mp-text color="gray.600" font-size="md" line-height="md">
                    ID number
                  </mp-text>
                </mp-flex>
                <mp-flex
                  flex="4 0 0%"
                  justify-content="space-between"
                  padding-y="2"
                >
                  <mp-text font-size="md" line-height="md">
                    93.972.215.4-542.000
                  </mp-text>
                </mp-flex>
              </mp-flex>
              <mp-flex>
                <mp-flex flex="3 0 0%" padding-y="2">
                  <mp-text color="gray.600" font-size="md" line-height="md">
                    Address
                  </mp-text>
                </mp-flex>
                <mp-flex
                  flex="4 0 0%"
                  justify-content="space-between"
                  padding-y="2"
                >
                  <mp-text font-size="md" line-height="md">
                    Jl Bebek Angsa No.20. Jakarta Selatan. DKI Jakarta
                  </mp-text>
                </mp-flex>
              </mp-flex>
              <mp-flex>
                <mp-flex flex="3 0 0%" padding-y="2">
                  <mp-button variant="link" @click="onNoteModalToggle(true)">
                    Add notes
                  </mp-button>
                </mp-flex>
              </mp-flex>
              <mp-divider margin-y="6" />
              <mp-heading as="h3" color="dark" font-size="lg" margin-bottom="4">
                Commission information
              </mp-heading>
              <mp-flex>
                <mp-flex flex="3 0 0%" padding-y="2">
                  <mp-text color="gray.600" font-size="md" line-height="md">
                    Source
                  </mp-text>
                </mp-flex>
                <mp-flex
                  flex="4 0 0%"
                  justify-content="space-between"
                  padding-y="2"
                >
                  <mp-text font-size="md" line-height="md">Zoho</mp-text>
                </mp-flex>
              </mp-flex>
              <mp-flex>
                <mp-flex flex="3 0 0%" padding-y="2">
                  <mp-text color="gray.600" font-size="md" line-height="md">
                    Package
                  </mp-text>
                </mp-flex>
                <mp-flex
                  flex="4 0 0%"
                  justify-content="space-between"
                  padding-y="2"
                >
                  <mp-text font-size="md" line-height="md">
                    Trial Enterprise+
                  </mp-text>
                </mp-flex>
              </mp-flex>
              <mp-flex>
                <mp-flex flex="3 0 0%" padding-y="2">
                  <mp-text color="gray.600" font-size="md" line-height="md">
                    Subscription period
                  </mp-text>
                </mp-flex>
                <mp-flex
                  flex="4 0 0%"
                  justify-content="space-between"
                  padding-y="2"
                >
                  <mp-text font-size="md" line-height="md">1</mp-text>
                </mp-flex>
              </mp-flex>
              <mp-flex>
                <mp-flex flex="3 0 0%" padding-y="2">
                  <mp-text color="gray.600" font-size="md" line-height="md">
                    CID
                  </mp-text>
                </mp-flex>
                <mp-flex
                  flex="4 0 0%"
                  justify-content="space-between"
                  padding-y="2"
                >
                  <mp-text font-size="md" line-height="md">63163</mp-text>
                </mp-flex>
              </mp-flex>
              <mp-flex>
                <mp-flex flex="3 0 0%" padding-y="2">
                  <mp-text color="gray.600" font-size="md" line-height="md">
                    Company name
                  </mp-text>
                </mp-flex>
                <mp-flex
                  flex="4 0 0%"
                  justify-content="space-between"
                  padding-y="2"
                >
                  <mp-text font-size="md" line-height="md">
                    PT UAT Test
                  </mp-text>
                </mp-flex>
              </mp-flex>
              <mp-flex>
                <mp-flex flex="3 0 0%" padding-y="2">
                  <mp-text color="gray.600" font-size="md" line-height="md">
                    Subscription amount
                  </mp-text>
                </mp-flex>
                <mp-flex
                  flex="4 0 0%"
                  justify-content="space-between"
                  padding-y="2"
                >
                  <mp-text font-size="md" line-height="md">
                    Rp.6.300.000
                  </mp-text>
                </mp-flex>
              </mp-flex>
              <mp-flex>
                <mp-flex flex="3 0 0%" padding-y="2">
                  <mp-text color="gray.600" font-size="md" line-height="md">
                    Gross commission
                  </mp-text>
                </mp-flex>
                <mp-flex
                  flex="4 0 0%"
                  justify-content="space-between"
                  padding-y="2"
                >
                  <mp-text font-size="md" line-height="md">
                    Rp1.135.135
                  </mp-text>
                </mp-flex>
              </mp-flex>
              <mp-flex>
                <mp-flex flex="3 0 0%" padding-y="2">
                  <mp-text color="gray.600" font-size="md" line-height="md">
                    Tax rate
                  </mp-text>
                </mp-flex>
                <mp-flex
                  flex="4 0 0%"
                  justify-content="space-between"
                  padding-y="2"
                >
                  <mp-text font-size="md" line-height="md">2.50%</mp-text>
                </mp-flex>
              </mp-flex>
              <mp-flex>
                <mp-flex flex="3 0 0%" padding-y="2">
                  <mp-text color="gray.600" font-size="md" line-height="md">
                    Tax commission
                  </mp-text>
                </mp-flex>
                <mp-flex
                  flex="4 0 0%"
                  justify-content="space-between"
                  padding-y="2"
                >
                  <mp-text font-size="md" line-height="md">Rp28.378</mp-text>
                </mp-flex>
              </mp-flex>
              <mp-flex>
                <mp-flex flex="3 0 0%" padding-y="2">
                  <mp-text color="gray.600" font-size="md" line-height="md">
                    Net commission
                  </mp-text>
                </mp-flex>
                <mp-flex
                  flex="4 0 0%"
                  justify-content="space-between"
                  padding-y="2"
                >
                  <mp-text font-size="md" line-height="md">
                    Rp1.106.757
                  </mp-text>
                </mp-flex>
              </mp-flex>
            </mp-flex>

            <mp-flex flex-direction="column" :width="['100%', '700px']">
              <mp-flex :display="['block', 'flex']">
                <mp-flex flex="3 0 0%" padding-y="2">
                  <mp-text color="gray.600" font-size="md" line-height="md">
                    Approval history
                  </mp-text>
                </mp-flex>
                <mp-flex
                  flex="4 0 0%"
                  justify-content="space-between"
                  padding-y="2"
                >
                  <mp-timeline>
                    <mp-timeline-item status="approved">
                      <mp-timeline-title>
                        <mp-text
                          font-size="md"
                          line-height="md"
                          font-weight="semibold"
                        >
                          Tax approved
                          <mp-text
                            as="span"
                            color="gray.400"
                            font-weight="regular"
                          >
                            by
                          </mp-text>
                          Monica Salamanda
                        </mp-text>
                      </mp-timeline-title>
                      <mp-timeline-caption>01 Apr 2022</mp-timeline-caption>
                    </mp-timeline-item>
                    <mp-timeline-item status="created">
                      <mp-timeline-title>
                        <mp-text
                          font-size="md"
                          line-height="md"
                          font-weight="semibold"
                        >
                          Conversion approved
                          <mp-text
                            as="span"
                            color="gray.400"
                            font-weight="regular"
                          >
                            by
                          </mp-text>
                          Pam Beesly
                        </mp-text>
                      </mp-timeline-title>
                      <mp-timeline-caption>01 Apr 2022</mp-timeline-caption>
                    </mp-timeline-item>
                  </mp-timeline>
                </mp-flex>
              </mp-flex>
            </mp-flex>
          </mp-flex>
        </mp-box>
      </mp-box>
    </mp-flex>
    <ViewDisbursementNoteModal
      :isModalOpen="isNoteModalOpen"
      :onModalToggle="onNoteModalToggle"
    />
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpHeading,
  MpText,
  MpButton,
  MpBadge,
  MpDivider,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
  MpTimeline,
  MpTimelineItem,
  MpTimelineTitle,
  MpTimelineCaption,
} from "@mekari/pixel";
import ViewDisbursementNoteModal from "./ViewDisbursementNoteModal";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default {
  name: "ViewDisbursementCommission",
  components: {
    MpBox,
    MpFlex,
    MpHeading,
    MpText,
    MpButton,
    MpBadge,
    MpDivider,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
    MpTimeline,
    MpTimelineItem,
    MpTimelineTitle,
    MpTimelineCaption,
    ViewDisbursementNoteModal,
    Header,
    Sidebar,
  },
  data: function () {
    return {
      isNoteModalOpen: false,
    };
  },
  methods: {
    onNoteModalToggle: function (data) {
      this.isNoteModalOpen = data;
    },
  },
};
</script>