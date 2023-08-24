<template>
  <mp-box>
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 60px)">
      <Sidebar default-is-toggle is-custom with-child />
      <mp-box
        as="section"
        data-id="content"
        width="100%"
        height="calc(100vh - 60px)"
        overflow-y="auto"
        background-color="#F1F5F9"
      >
        <mp-flex
          justify="space-between"
          align-items="center"
          :padding-x="['4', '6']"
          :display="['inline-block', 'flex']"
          padding-y="1.063rem"
        >
          <mp-box height="12">
            <mp-text font-size="sm" is-link>Disbursement</mp-text>
            <mp-heading as="h1" font-size="2xl" font-weight="semibold">
              Transaction ID 230406
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
              <mp-button variant="outline">Download</mp-button>
            </mp-flex>
          </mp-box>
        </mp-flex>

        <mp-box
          min-height="calc(100vh - 142px)"
          border-top-width="1px"
          border-left-width="1px"
          border-top-left-radius="md"
          border-color="gray.100"
          background-color="white"
          :padding="['4', '6']"
        >
          <mp-flex gap="6">
            <mp-box :width="['full', '50%']">
              <DescriptionList>
                <template #left-side>
                  <mp-text color="gray.600">Employee name</mp-text>
                </template>
                <template #right-side>
                  <mp-flex align-items="center">
                    <mp-box margin-left="3">
                      <mp-text>A. Alvinnur Adly Widyaputra</mp-text>
                    </mp-box>
                  </mp-flex>
                </template>
              </DescriptionList>
              <DescriptionList>
                <template #left-side>
                  <mp-text color="gray.600">Reimbursement name</mp-text>
                </template>
                <template #right-side>
                  <mp-flex align-items="center">
                    <mp-box margin-left="3">
                      <mp-text>Medical outpatient</mp-text>
                    </mp-box>
                  </mp-flex>
                </template>
              </DescriptionList>
              <DescriptionList>
                <template #left-side>
                  <mp-text color="gray.600">Request date</mp-text>
                </template>
                <template #right-side>
                  <mp-flex align-items="center">
                    <mp-box margin-left="3">
                      <mp-text>12 Mar 2023</mp-text>
                    </mp-box>
                  </mp-flex>
                </template>
              </DescriptionList>
              <DescriptionList>
                <template #left-side>
                  <mp-text color="gray.600">Approval date</mp-text>
                </template>
                <template #right-side>
                  <mp-flex align-items="center">
                    <mp-box margin-left="3">
                      <mp-text>Approval date</mp-text>
                    </mp-box>
                  </mp-flex>
                </template>
              </DescriptionList>
              <DescriptionList>
                <template #left-side>
                  <mp-text color="gray.600">Status disbursement</mp-text>
                </template>
                <template #right-side>
                  <mp-flex align-items="center">
                    <mp-box margin-left="3">
                      <mp-badge mp variant="subtle" variant-color="green">
                        Ready to disburse
                      </mp-badge>
                    </mp-box>
                  </mp-flex>
                </template>
              </DescriptionList>
              <DescriptionList>
                <template #left-side>
                  <mp-text color="gray.600">Amount</mp-text>
                </template>
                <template #right-side>
                  <mp-flex align-items="center">
                    <mp-box margin-left="3">
                      <mp-text>Rp250.000</mp-text>
                    </mp-box>
                  </mp-flex>
                </template>
              </DescriptionList>
              <DescriptionList>
                <template #left-side>
                  <mp-text color="gray.600">File attached</mp-text>
                </template>
                <template #right-side>
                  <mp-flex align-items="center">
                    <mp-box margin-left="3"> - </mp-box>
                  </mp-flex>
                </template>
              </DescriptionList>
              <DescriptionList>
                <template #left-side>
                  <mp-text color="gray.600">Description</mp-text>
                </template>
                <template #right-side>
                  <mp-flex align-items="center">
                    <mp-box margin-left="3">
                      <mp-text>Biaya berobat ke rumah sakit dan opname</mp-text>
                    </mp-box>
                  </mp-flex>
                </template>
              </DescriptionList>
              <DescriptionList>
                <template #left-side>
                  <mp-text color="gray.600">Payment date</mp-text>
                </template>
                <template #right-side>
                  <mp-flex align-items="center">
                    <mp-box margin-left="3">
                      <mp-text>15 Mar 2023</mp-text>
                    </mp-box>
                  </mp-flex>
                </template>
              </DescriptionList>
              <DescriptionList>
                <template #left-side>
                  <mp-text color="gray.600">Total paid</mp-text>
                </template>
                <template #right-side>
                  <mp-flex align-items="center">
                    <mp-box margin-left="3">
                      <mp-text>Rp200.000</mp-text>
                    </mp-box>
                  </mp-flex>
                </template>
              </DescriptionList>
            </mp-box>
            <mp-box :width="['full', '50%']">
              <DescriptionList>
                <template #left-side>
                  <mp-text color="gray.600">Approval history</mp-text>
                </template>
              </DescriptionList>
              <mp-timeline margin-top="6">
                <mp-timeline-item status="need-approval">
                  <mp-timeline-title>
                    <mp-text
                      font-size="md"
                      line-height="md"
                      font-weight="semibold"
                    >
                      Waiting to disburse
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
                      Waiting approval
                      <mp-text as="span" color="gray.400" font-weight="regular">
                        by
                      </mp-text>
                      Andre Hermawan
                    </mp-text>
                  </mp-timeline-title>
                </mp-timeline-item>
                <mp-timeline-item status="approved">
                  <mp-timeline-title>
                    <mp-text
                      font-size="md"
                      line-height="md"
                      font-weight="semibold"
                    >
                      Approved
                      <mp-text as="span" color="gray.400" font-weight="regular">
                        by
                      </mp-text>
                      Diona Virona
                    </mp-text>
                  </mp-timeline-title>
                  <mp-timeline-caption>
                    11 Mar 2023, 17:32 (GMT +7)
                  </mp-timeline-caption>
                </mp-timeline-item>
                <mp-timeline-item status="approved">
                  <mp-timeline-title>
                    <mp-text
                      font-size="md"
                      line-height="md"
                      font-weight="semibold"
                    >
                      Approved
                      <mp-text as="span" color="gray.400" font-weight="regular">
                        by
                      </mp-text>
                      Cindy Yolanda Octaviana
                    </mp-text>
                  </mp-timeline-title>
                  <mp-timeline-caption>
                    10 Mar 2023, 16:24 (GMT +7)
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
                      A. Alvinnur Adly Widyaputra
                    </mp-text>
                  </mp-timeline-title>
                  <mp-timeline-caption>
                    10 Mar 2023, 10:24 (GMT +7)
                  </mp-timeline-caption>
                </mp-timeline-item>
              </mp-timeline>
            </mp-box>
          </mp-flex>

          <mp-divider margin-y="6" />

          <mp-flex flex-direction="column">
            <mp-flex flex="1 0 auto" padding-bottom="6">
              <mp-heading as="h2" color="dark" font-size="xl">
                Reimbursement requested
              </mp-heading>
            </mp-flex>
          </mp-flex>

          <mp-table-container width="full" max-width="full" overflow="scroll">
            <mp-table>
              <mp-table-head>
                <mp-table-row cursor="pointer">
                  <mp-table-cell as="th">
                    Transaction ID
                    <mp-icon name="sort-default" />
                  </mp-table-cell>
                  <mp-table-cell as="th">
                    Reimbursement name
                    <mp-icon name="sort-default" />
                  </mp-table-cell>
                  <mp-table-cell as="th">
                    Request amount
                    <mp-icon name="sort-default" />
                  </mp-table-cell>
                  <mp-table-cell as="th">
                    Paid amount
                    <mp-icon name="sort-default" />
                  </mp-table-cell>
                  <mp-table-cell as="th">
                    Min. next claim (months)
                    <mp-icon name="sort-default" />
                  </mp-table-cell>
                </mp-table-row>
              </mp-table-head>
              <mp-table-body>
                <mp-table-row>
                  <mp-table-cell as="td">230406</mp-table-cell>
                  <mp-table-cell as="td">Medical outpatient</mp-table-cell>
                  <mp-table-cell as="td">Rp250.000</mp-table-cell>
                  <mp-table-cell as="td">Rp200.000</mp-table-cell>
                  <mp-table-cell as="td">1</mp-table-cell>
                </mp-table-row>
              </mp-table-body>
            </mp-table>
          </mp-table-container>
          <Pagination />
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
  MpDivider,
  MpIcon,
  MpButton,
  MpBadge,
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
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import DescriptionList from "../components/DescriptionList";
import Pagination from "../components/Pagination";

export default {
  name: "DetailDisbursement",
  components: {
    MpBox,
    MpFlex,
    MpHeading,
    MpText,
    MpDivider,
    MpIcon,
    MpButton,
    MpBadge,
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
    DescriptionList,
    Pagination,
  },
};
</script>
