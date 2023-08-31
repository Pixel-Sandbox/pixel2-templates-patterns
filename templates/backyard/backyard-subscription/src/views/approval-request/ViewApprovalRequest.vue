<template>
  <mp-box>
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 60px)">
      <Sidebar default-is-toggle />
      <SidebarChild />
      <mp-box
        as="section"
        data-id="content"
        width="100%"
        height="calc(100vh - 60px)"
        overflow-y="auto"
        background-color="background"
      >
        <mp-flex
          justify="space-between"
          align-items="center"
          :padding-x="['4', '6']"
          :display="['inline-block', 'flex']"
          padding-y="1.063rem"
        >
          <mp-box height="12">
            <mp-text font-size="sm" is-link>Approval request</mp-text>
            <mp-heading as="h1" font-size="2xl" font-weight="semibold">
              2002 - PT. Flora Kultura
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
              <mp-button variant="outline">View company</mp-button>
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
                    <mp-popover-list-item>Approve</mp-popover-list-item>
                    <mp-popover-list-item>Reject</mp-popover-list-item>
                    <mp-popover-list-item>Edit</mp-popover-list-item>
                    <mp-popover-list-item>Drop request</mp-popover-list-item>
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
                    Need approval
                  </mp-badge>
                </mp-flex>
              </mp-flex>
              <mp-flex>
                <mp-flex flex="3 0 0%" padding-y="2">
                  <mp-text color="gray.600" font-size="md" line-height="md">
                    Company
                  </mp-text>
                </mp-flex>
                <mp-flex
                  flex="4 0 0%"
                  justify-content="space-between"
                  padding-y="2"
                >
                  <mp-text font-size="md" line-height="md" is-link>
                    PT. Flora Kultura
                  </mp-text>
                </mp-flex>
              </mp-flex>
              <mp-flex>
                <mp-flex flex="3 0 0%" padding-y="2">
                  <mp-text color="gray.600" font-size="md" line-height="md">
                    Billing date
                  </mp-text>
                </mp-flex>
                <mp-flex
                  flex="4 0 0%"
                  justify-content="space-between"
                  padding-y="2"
                >
                  <mp-text font-size="md" line-height="md">
                    8 Jul 2022
                  </mp-text>
                </mp-flex>
              </mp-flex>
              <mp-flex>
                <mp-flex flex="3 0 0%" padding-y="2">
                  <mp-text color="gray.600" font-size="md" line-height="md">
                    Due on
                  </mp-text>
                </mp-flex>
                <mp-flex
                  flex="4 0 0%"
                  justify-content="space-between"
                  padding-y="2"
                >
                  <mp-text font-size="md" line-height="md">
                    11 Aug 2022 (3 days)
                  </mp-text>
                </mp-flex>
              </mp-flex>
              <mp-flex>
                <mp-flex flex="3 0 0%" padding-y="2">
                  <mp-text color="gray.600" font-size="md" line-height="md">
                    Duration
                  </mp-text>
                </mp-flex>
                <mp-flex
                  flex="4 0 0%"
                  justify-content="space-between"
                  padding-y="2"
                >
                  <mp-text font-size="md" line-height="md">
                    8 Aug 2022 - 8 Aug 2023 (12 months)
                  </mp-text>
                </mp-flex>
              </mp-flex>
              <mp-flex>
                <mp-flex flex="3 0 0%" padding-y="2">
                  <mp-text color="gray.600" font-size="md" line-height="md">
                    Free period
                  </mp-text>
                </mp-flex>
                <mp-flex
                  flex="4 0 0%"
                  justify-content="space-between"
                  padding-y="2"
                >
                  <mp-text color="gray.600" font-size="md" line-height="md">
                    No free period
                  </mp-text>
                </mp-flex>
              </mp-flex>
              <mp-flex>
                <mp-flex flex="3 0 0%" padding-y="2">
                  <mp-text color="gray.600" font-size="md" line-height="md">
                    Promotional code
                  </mp-text>
                </mp-flex>
                <mp-flex
                  flex="4 0 0%"
                  justify-content="space-between"
                  padding-y="2"
                >
                  <mp-text color="gray.600" font-size="md" line-height="md">
                    Not applied
                  </mp-text>
                </mp-flex>
              </mp-flex>
              <mp-flex>
                <mp-flex flex="3 0 0%" padding-y="2">
                  <mp-text color="gray.600" font-size="md" line-height="md">
                    Remarks
                  </mp-text>
                </mp-flex>
                <mp-flex
                  flex="4 0 0%"
                  justify-content="space-between"
                  padding-y="2"
                >
                  <mp-text font-size="md" line-height="md">
                    Have spesific needs on scheduler attendance
                  </mp-text>
                </mp-flex>
              </mp-flex>
              <mp-flex>
                <mp-flex flex="3 0 0%" padding-y="2">
                  <mp-text color="gray.600" font-size="md" line-height="md">
                    Salesperson
                  </mp-text>
                </mp-flex>
                <mp-flex
                  flex="4 0 0%"
                  justify-content="space-between"
                  padding-y="2"
                >
                  <mp-text font-size="md" line-height="md"
                    >Kevin Chandra</mp-text
                  >
                </mp-flex>
              </mp-flex>
              <mp-flex>
                <mp-flex flex="3 0 0%" padding-y="2">
                  <mp-text color="gray.600" font-size="md" line-height="md">
                    MMR tagging type
                  </mp-text>
                </mp-flex>
                <mp-flex
                  flex="4 0 0%"
                  justify-content="space-between"
                  padding-y="2"
                >
                  <mp-text font-size="md" line-height="md"> Renewal </mp-text>
                </mp-flex>
              </mp-flex>
              <mp-flex>
                <mp-flex flex="3 0 0%" padding-y="2">
                  <mp-text color="gray.600" font-size="md" line-height="md">
                    Leadsource
                  </mp-text>
                </mp-flex>
                <mp-flex
                  flex="4 0 0%"
                  justify-content="space-between"
                  padding-y="2"
                >
                  <mp-text font-size="md" line-height="md">
                    Direct source
                  </mp-text>
                </mp-flex>
              </mp-flex>
              <mp-flex>
                <mp-flex flex="3 0 0%" padding-y="2">
                  <mp-text color="gray.600" font-size="md" line-height="md">
                    Channel
                  </mp-text>
                </mp-flex>
                <mp-flex
                  flex="4 0 0%"
                  justify-content="space-between"
                  padding-y="2"
                >
                  <mp-text font-size="md" line-height="md">Inbound</mp-text>
                </mp-flex>
              </mp-flex>
              <mp-flex>
                <mp-flex flex="3 0 0%" padding-y="2">
                  <mp-text color="gray.600" font-size="md" line-height="md">
                    Attachment
                  </mp-text>
                </mp-flex>
                <mp-flex
                  flex="4 0 0%"
                  justify-content="space-between"
                  padding-y="2"
                >
                  <mp-flex>
                    <mp-button variant="link">
                      florakultura_MOM_contract.pdf
                    </mp-button>
                    <!-- <mp-icon name="newtab" variant="duotone" margin-left="2" /> -->
                  </mp-flex>
                </mp-flex>
              </mp-flex>
            </mp-flex>

            <mp-divider margin-y="6" :display="['block', 'none']" />

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
                    <mp-timeline-item status="need-approval">
                      <mp-timeline-title>
                        <mp-text
                          font-size="md"
                          line-height="md"
                          font-weight="semibold"
                        >
                          Approved
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
                    </mp-timeline-item>
                    <mp-timeline-item status="created">
                      <mp-timeline-title>
                        <mp-text
                          font-size="md"
                          line-height="md"
                          font-weight="semibold"
                        >
                          Edited
                          <mp-text
                            as="span"
                            color="gray.400"
                            font-weight="regular"
                          >
                            by
                          </mp-text>
                          Jessie Tan
                        </mp-text>
                      </mp-timeline-title>
                      <mp-timeline-caption> 01 Apr 2022 </mp-timeline-caption>
                    </mp-timeline-item>
                    <mp-timeline-item status="created">
                      <mp-timeline-title>
                        <mp-text
                          font-size="md"
                          line-height="md"
                          font-weight="semibold"
                        >
                          Requested
                          <mp-text
                            as="span"
                            color="gray.400"
                            font-weight="regular"
                          >
                            by
                          </mp-text>
                          Rizal Candra
                        </mp-text>
                      </mp-timeline-title>
                      <mp-timeline-caption> 01 Apr 2022 </mp-timeline-caption>
                    </mp-timeline-item>
                  </mp-timeline>
                </mp-flex>
              </mp-flex>
            </mp-flex>
          </mp-flex>

          <mp-divider margin-y="6" />

          <mp-flex flex-direction="column">
            <mp-flex flex="1 0 auto" padding-bottom="6">
              <mp-heading as="h2" color="dark" font-size="xl">
                Subscription package
              </mp-heading>
            </mp-flex>
          </mp-flex>

          <mp-table-container width="full" max-width="full" overflow="scroll">
            <mp-table>
              <mp-table-head>
                <mp-table-row cursor="pointer">
                  <mp-table-cell as="th">Application</mp-table-cell>
                  <mp-table-cell as="th">Service</mp-table-cell>
                  <mp-table-cell as="th">Description</mp-table-cell>
                  <mp-table-cell as="th">Type</mp-table-cell>
                  <mp-table-cell as="th">Qty</mp-table-cell>
                  <mp-table-cell as="th" text-align="right">
                    Unit price
                  </mp-table-cell>
                  <mp-table-cell as="th">Duration</mp-table-cell>
                  <mp-table-cell as="th">Discount</mp-table-cell>
                  <mp-table-cell as="th" text-align="right">
                    Total price
                  </mp-table-cell>
                  <mp-table-cell as="th" />
                </mp-table-row>
              </mp-table-head>
              <mp-table-body>
                <mp-table-row>
                  <mp-table-cell as="td">Jurnal</mp-table-cell>
                  <mp-table-cell as="td">Enterprise</mp-table-cell>
                  <mp-table-cell as="td">
                    JCI-010-2022 <br />
                    | Jurnal - Enterprise Package <br />
                    | Activate Next Month
                  </mp-table-cell>
                  <mp-table-cell as="td">Main package</mp-table-cell>
                  <mp-table-cell as="td">1</mp-table-cell>
                  <mp-table-cell as="td">
                    <mp-text text-align="right">Rp539.639,63</mp-text>
                  </mp-table-cell>
                  <mp-table-cell as="td"> 12 month </mp-table-cell>
                  <mp-table-cell as="td"> 0% </mp-table-cell>
                  <mp-table-cell as="td">
                    <mp-text text-align="right">Rp6.475.675,56</mp-text>
                  </mp-table-cell>
                  <mp-table-cell as="td">
                    <mp-icon name="doc" variant="duotone" margin-right="2" />
                  </mp-table-cell>
                </mp-table-row>
                <mp-table-row>
                  <mp-table-cell as="td">Jurnal</mp-table-cell>
                  <mp-table-cell as="td">Advance Invoicing</mp-table-cell>
                  <mp-table-cell as="td">-</mp-table-cell>
                  <mp-table-cell as="td">Add ons</mp-table-cell>
                  <mp-table-cell as="td">1</mp-table-cell>
                  <mp-table-cell as="td">
                    <mp-text text-align="right">Rp53.153,15</mp-text>
                  </mp-table-cell>
                  <mp-table-cell as="td"> 12 month </mp-table-cell>
                  <mp-table-cell as="td"> 0% </mp-table-cell>
                  <mp-table-cell as="td">
                    <mp-text text-align="right">Rp637.621,80</mp-text>
                  </mp-table-cell>
                  <mp-table-cell as="td">
                    <mp-icon name="doc" variant="duotone" margin-right="2" />
                  </mp-table-cell>
                </mp-table-row>
              </mp-table-body>
            </mp-table>
          </mp-table-container>

          <mp-flex
            :border="['1px solid', '0px solid']"
            border-color="gray.100"
            border-radius="md"
            :padding="['4', '0']"
            justify-content="end"
            position="relative"
            margin-top="11"
          >
            <mp-flex flex-basis="428px" flex-direction="column">
              <mp-flex justify-content="space-between" margin-bottom="2">
                <mp-flex>
                  <mp-text font-weight="semibold">Main package</mp-text>
                </mp-flex>
                <mp-flex>
                  <mp-text font-weight="semibold">Rp6.475.675,56</mp-text>
                </mp-flex>
              </mp-flex>
              <mp-flex justify-content="space-between">
                <mp-flex>
                  <mp-text font-weight="semibold">Add-ons</mp-text>
                </mp-flex>
                <mp-flex>
                  <mp-text font-weight="semibold">Rp637.621,80</mp-text>
                </mp-flex>
              </mp-flex>
              <mp-divider />
              <mp-flex justify-content="space-between" margin-bottom="2">
                <mp-flex>
                  <mp-text>Discount</mp-text>
                </mp-flex>
                <mp-flex>
                  <mp-text>-Rp0</mp-text>
                </mp-flex>
              </mp-flex>
              <mp-flex justify-content="space-between" margin-bottom="2">
                <mp-flex>
                  <mp-text>Additional discount</mp-text>
                </mp-flex>
                <mp-flex>
                  <mp-text>-Rp0</mp-text>
                </mp-flex>
              </mp-flex>
              <mp-flex justify-content="space-between">
                <mp-flex>
                  <mp-text font-weight="semibold">Subtotal before tax</mp-text>
                </mp-flex>
                <mp-flex>
                  <mp-text font-weight="semibold">Rp7.465.320</mp-text>
                </mp-flex>
              </mp-flex>
              <mp-divider />
              <mp-flex justify-content="space-between">
                <mp-flex>
                  <mp-text>Tax 11%</mp-text>
                </mp-flex>
                <mp-flex>
                  <mp-text>Rp821.185,2</mp-text>
                </mp-flex>
              </mp-flex>
              <mp-divider />
              <mp-flex justify-content="space-between">
                <mp-flex flex-direction="column">
                  <mp-text font-size="lg" font-weight="semibold">
                    Net amount
                  </mp-text>
                  <mp-text color="gray.600" font-size="sm">
                    *Rounding price
                  </mp-text>
                </mp-flex>
                <mp-flex flex-direction="column">
                  <mp-text font-size="lg" font-weight="semibold">
                    Rp13.668.000
                  </mp-text>
                </mp-flex>
              </mp-flex>
            </mp-flex>
          </mp-flex>
        </mp-box>
      </mp-box>
    </mp-flex>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpHeading,
  MpText,
  MpIcon,
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
  MpTableContainer,
  MpTable,
  MpTableHead,
  MpTableBody,
  MpTableRow,
  MpTableCell,
} from "@mekari/pixel";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import SidebarChild from "../../components/SidebarChild";

export default {
  name: "ViewApprovalRequest",
  components: {
    MpBox,
    MpFlex,
    MpHeading,
    MpText,
    MpIcon,
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
    MpTableContainer,
    MpTable,
    MpTableHead,
    MpTableBody,
    MpTableRow,
    MpTableCell,
    Header,
    Sidebar,
    SidebarChild,
  },
};
</script>