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
      >
        <mp-flex
          justify="space-between"
          align-items="center"
          padding-x="6"
          padding-y="1.063rem"
        >
          <mp-box>
            <mp-heading as="h1" font-size="2xl" font-weight="bold">
              Commission
            </mp-heading>
          </mp-box>
        </mp-flex>
        <mp-box
          min-height="calc(100vh - 132px)"
          border-top-width="1px"
          border-left-width="1px"
          border-top-left-radius="md"
          border-color="gray.100"
          background-color="white"
          padding="6"
        >
          <mp-banner variant="info" margin-bottom="6" is-inline>
            <mp-banner-icon />
            <mp-banner-description>
              <mp-flex gap="1" align-items="center">
                Commission tracking currently limited to
                <b>Jurnal Referral Program.</b> We're working to expand it.
                Please contact our team for further assistance.
                <mp-text is-link>Contact us</mp-text>
              </mp-flex>
            </mp-banner-description>
            <mp-banner-close-button />
          </mp-banner>

          <mp-box>
            <mp-heading as="h2" font-size="xl">Overview</mp-heading>
            <mp-text color="gray.600" margin-bottom="5">
              Track and monitor your commission across all programs.
            </mp-text>

            <mp-flex justify-content="space-between" margin-bottom="6">
              <mp-flex gap="4">
                <mp-box>
                  <mp-select value="all" width="56">
                    <option value="all">All program</option>
                  </mp-select>
                </mp-box>
                <mp-box>
                  <mp-select value="all" width="56">
                    <option value="all">All status</option>
                  </mp-select>
                </mp-box>
              </mp-flex>

              <mp-box>
                <mp-input-group>
                  <mp-input-left-addon :with-background="false">
                    <mp-icon name="search" size="sm" />
                  </mp-input-left-addon>
                  <mp-input placeholder="Search..." width="56" />
                </mp-input-group>
              </mp-box>
            </mp-flex>

            <mp-box
              border="1px solid"
              border-color="gray.100"
              border-radius="md"
              padding-y="8"
              padding-x="6"
              margin-bottom="6"
            >
              <mp-flex>
                <mp-box
                  display="inline-flex"
                  flex="1 0 auto"
                  padding-right="4"
                  padding-y="3"
                  border-radius="md"
                >
                  <mp-flex flex-direction="column">
                    <mp-flex justify-content="space-between">
                      <mp-flex align-items="center">
                        <mp-text
                          color="gray.600"
                          font-size="md"
                          line-height="md"
                          text-align="left"
                        >
                          Work in progress
                        </mp-text>
                      </mp-flex>
                    </mp-flex>
                    <mp-flex align-items="center">
                      <mp-heading as="h2" color="dark" font-size="xl">
                        Rp3.780.000
                        <mp-icon
                          name="info"
                          size="sm"
                          margin-left="2"
                          v-mp-tooltip="
                            'These commmission will be paid out after we review the conversion.'
                          "
                        />
                      </mp-heading>
                    </mp-flex>
                  </mp-flex>
                </mp-box>
                <mp-divider orientation="vertical" margin-x="2" />
                <mp-box
                  display="inline-flex"
                  flex="1 0 auto"
                  padding-x="4"
                  padding-y="3"
                  border-radius="md"
                >
                  <mp-flex flex-direction="column">
                    <mp-flex justify-content="space-between">
                      <mp-flex align-items="center">
                        <mp-text
                          color="gray.600"
                          font-size="md"
                          line-height="md"
                          text-align="left"
                        >
                          On hold
                        </mp-text>
                      </mp-flex>
                    </mp-flex>
                    <mp-flex align-items="center">
                      <mp-heading as="h2" color="dark" font-size="xl">
                        Rp2.520.000
                      </mp-heading>
                    </mp-flex>
                    <mp-popover>
                      <mp-popover-trigger>
                        <mp-text is-link>Resolving on hold commission</mp-text>
                      </mp-popover-trigger>
                      <mp-popover-content
                        max-width="496px"
                        bg="white"
                        rounded="md"
                        shadow="lg"
                        border-width="1px"
                        border-color="gray.400"
                        padding-x="3"
                        padding-y="6"
                      >
                        <mp-text
                          color="gray.400"
                          font-size="sm"
                          margin-bottom="3"
                        >
                          HOW TO RESOLVE THIS ISSUE
                        </mp-text>
                        <mp-text margin-bottom="2">
                          We have received your conversion; however, it seems
                          there is an issue with the provided data. To resolve
                          it, please follow these steps:
                        </mp-text>
                        <ul style="margin-left: 20px">
                          <li>
                            <mp-text>
                              For <b>Tax rejected</b> status: Verify your NPWP
                              type and number.
                            </mp-text>
                          </li>
                          <li>
                            <mp-text>
                              For <b>Commission rejected</b> status: Check your
                              bank details (bank name, account number, and
                              account holder).
                            </mp-text>
                          </li>
                        </ul>
                        <mp-flex margin-top="2" align-items="center">
                          <mp-text>
                            Please contact our team for further assistance.
                          </mp-text>
                          <mp-flex align-items="center">
                            <mp-text margin-left="1" margin-right="2" is-link>
                              Contact us
                            </mp-text>
                            <mp-icon
                              name="newtab"
                              variant="duotone"
                              size="sm"
                            />
                          </mp-flex>
                        </mp-flex>
                      </mp-popover-content>
                    </mp-popover>
                  </mp-flex>
                </mp-box>
                <mp-divider orientation="vertical" margin-x="2" />
                <mp-box
                  display="inline-flex"
                  flex="1 0 auto"
                  padding-x="4"
                  padding-y="3"
                  border-radius="md"
                >
                  <mp-flex flex-direction="column">
                    <mp-flex justify-content="space-between">
                      <mp-flex align-items="center">
                        <mp-text
                          color="gray.600"
                          font-size="md"
                          line-height="md"
                          text-align="left"
                        >
                          In disbursement
                        </mp-text>
                      </mp-flex>
                    </mp-flex>
                    <mp-flex align-items="center">
                      <mp-heading as="h2" color="dark" font-size="xl">
                        Rp1.260.000
                        <mp-icon
                          name="info"
                          size="sm"
                          margin-left="2"
                          v-mp-tooltip="
                            'Commission amount that has been approved and is being transferred to your bank account.'
                          "
                        />
                      </mp-heading>
                    </mp-flex>
                  </mp-flex>
                </mp-box>
                <mp-divider orientation="vertical" margin-x="2" />
                <mp-box
                  display="inline-flex"
                  flex="1 0 auto"
                  padding-left="4"
                  padding-y="3"
                  border-radius="md"
                >
                  <mp-flex flex-direction="column">
                    <mp-flex justify-content="space-between">
                      <mp-flex align-items="center">
                        <mp-text
                          color="gray.600"
                          font-size="md"
                          line-height="md"
                          text-align="left"
                        >
                          Commission paid
                        </mp-text>
                      </mp-flex>
                    </mp-flex>
                    <mp-flex align-items="center">
                      <mp-heading as="h2" color="dark" font-size="xl">
                        Rp12.200.000
                        <mp-icon
                          name="info"
                          size="sm"
                          margin-left="2"
                          v-mp-tooltip="
                            'Commission amount that has been transferred to your bank account.'
                          "
                        />
                      </mp-heading>
                    </mp-flex>
                    <mp-text
                      color="gray.600"
                      font-weight="semibold"
                      margin-top="2"
                    >
                      Last payment: Rp2.000.000
                    </mp-text>
                  </mp-flex>
                </mp-box>
              </mp-flex>
            </mp-box>

            <mp-table-container width="full" max-width="full" overflow="scroll">
              <mp-table>
                <mp-table-head>
                  <mp-table-row cursor="pointer">
                    <mp-table-cell as="th">
                      Company name
                      <mp-icon name="sort-default" />
                    </mp-table-cell>
                    <mp-table-cell as="th">
                      Program
                      <mp-icon name="sort-default" />
                    </mp-table-cell>
                    <mp-table-cell as="th">
                      Product
                      <mp-icon name="sort-default" />
                    </mp-table-cell>
                    <mp-table-cell as="th" text-align="right">
                      Subscription amount
                      <mp-icon name="sort-default" />
                    </mp-table-cell>
                    <mp-table-cell as="th" text-align="right">
                      Gross commission
                      <mp-icon name="sort-default" />
                    </mp-table-cell>
                    <mp-table-cell as="th" text-align="right">
                      Net commission
                      <mp-icon name="sort-default" />
                    </mp-table-cell>
                    <mp-table-cell as="th">
                      Status
                      <mp-icon name="sort-default" />
                    </mp-table-cell>
                  </mp-table-row>
                </mp-table-head>
                <mp-table-body>
                  <mp-table-row>
                    <mp-table-cell as="td">
                      <mp-text is-link>PT Indo Sejahtera</mp-text>
                      <mp-text font-size="sm" color="gray.600">
                        2123304
                      </mp-text>
                    </mp-table-cell>
                    <mp-table-cell as="td">
                      Jurnal Reseller Program
                    </mp-table-cell>
                    <mp-table-cell as="td">Jurnal</mp-table-cell>
                    <mp-table-cell as="td" text-align="right">
                      Rp6.300.000
                    </mp-table-cell>
                    <mp-table-cell as="td" text-align="right">
                      Rp8.200.000
                    </mp-table-cell>
                    <mp-table-cell as="td" text-align="right">
                      Rp1.260.000
                    </mp-table-cell>
                    <mp-table-cell as="td">
                      <mp-badge variant="subtle" variant-color="gray">
                        In tax review
                      </mp-badge>
                    </mp-table-cell>
                  </mp-table-row>
                  <mp-table-row>
                    <mp-table-cell as="td">
                      <mp-text is-link>PT Arine Makmur</mp-text>
                      <mp-text font-size="sm" color="gray.600">
                        2123302
                      </mp-text>
                    </mp-table-cell>
                    <mp-table-cell as="td">
                      Qontak Reseller Program
                    </mp-table-cell>
                    <mp-table-cell as="td">Qontak</mp-table-cell>
                    <mp-table-cell as="td" text-align="right">
                      Rp6.300.000
                    </mp-table-cell>
                    <mp-table-cell as="td" text-align="right">
                      Rp8.200.000
                    </mp-table-cell>
                    <mp-table-cell as="td" text-align="right">
                      Rp1.260.000
                    </mp-table-cell>
                    <mp-table-cell as="td">
                      <mp-badge variant="subtle" variant-color="orange">
                        Awaiting granted
                      </mp-badge>
                    </mp-table-cell>
                  </mp-table-row>
                  <mp-table-row>
                    <mp-table-cell as="td">
                      <mp-text is-link>PT Flora ultura</mp-text>
                      <mp-text font-size="sm" color="gray.600">
                        2123302
                      </mp-text>
                    </mp-table-cell>
                    <mp-table-cell as="td">
                      Jurnal Reseller Program
                    </mp-table-cell>
                    <mp-table-cell as="td">Jurnal</mp-table-cell>
                    <mp-table-cell as="td" text-align="right">
                      Rp6.300.000
                    </mp-table-cell>
                    <mp-table-cell as="td" text-align="right">
                      Rp8.200.000
                    </mp-table-cell>
                    <mp-table-cell as="td" text-align="right">
                      Rp1.260.000
                    </mp-table-cell>
                    <mp-table-cell as="td">
                      <mp-badge variant="subtle" variant-color="red">
                        Tax rejected
                      </mp-badge>
                    </mp-table-cell>
                  </mp-table-row>
                </mp-table-body>
              </mp-table>
            </mp-table-container>

            <Pagination />
          </mp-box>
        </mp-box>
      </mp-box>
    </mp-flex>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpBadge,
  MpHeading,
  MpText,
  MpIcon,
  MpDivider,
  MpSelect,
  MpInput,
  MpInputGroup,
  MpInputLeftAddon,
  MpTableContainer,
  MpTable,
  MpTableHead,
  MpTableBody,
  MpTableRow,
  MpTableCell,
  MpBanner,
  MpBannerIcon,
  MpBannerDescription,
  MpBannerCloseButton,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
} from "@mekari/pixel";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Pagination from "../components/Pagination";

export default {
  name: "Commision",
  components: {
    MpBox,
    MpFlex,
    MpBadge,
    MpHeading,
    MpText,
    MpIcon,
    MpDivider,
    MpSelect,
    MpInput,
    MpInputGroup,
    MpInputLeftAddon,
    MpTableContainer,
    MpTable,
    MpTableHead,
    MpTableBody,
    MpTableRow,
    MpTableCell,
    MpBanner,
    MpBannerIcon,
    MpBannerDescription,
    MpBannerCloseButton,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    Header,
    Sidebar,
    Pagination,
  },
  data: function () {
    return {
      tabIndex: 0,
      valueA: new Date("2022/10/10"),
    };
  },
  methods: {
    onHandleTab: function (e) {
      this.tabIndex = e;
    },
  },
};
</script>