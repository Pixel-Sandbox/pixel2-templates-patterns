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
          padding-y="1.125rem"
        >
          <mp-box>
            <mp-text font-size="sm" is-link>Programs</mp-text>
            <mp-heading as="h1" font-size="2xl" font-weight="bold" color="dark">
              Jurnal reseller program
              <mp-badge variant="solid" variant-color="green" margin-left="2">
                Active
              </mp-badge>
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
          <mp-flex gap="6">
            <mp-box width="60%">
              <mp-heading as="h2" font-size="xl" margin-bottom="5">
                Performance
              </mp-heading>

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
                          Clicks
                        </mp-text>
                      </mp-flex>
                    </mp-flex>
                    <mp-flex align-items="center">
                      <mp-heading as="h2" color="dark" font-size="xl">
                        320
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
                          Conversion
                        </mp-text>
                      </mp-flex>
                    </mp-flex>
                    <mp-flex align-items="center">
                      <mp-heading as="h2" color="dark" font-size="xl">
                        20
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
                          Conversion rate
                        </mp-text>
                      </mp-flex>
                    </mp-flex>
                    <mp-flex align-items="center">
                      <mp-heading as="h2" color="dark" font-size="xl">
                        20%
                      </mp-heading>
                    </mp-flex>
                  </mp-flex>
                </mp-box>
              </mp-flex>

              <mp-heading as="h2" font-size="xl" margin-y="5">
                Commission
              </mp-heading>

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
                          Total gross commission
                        </mp-text>
                      </mp-flex>
                    </mp-flex>
                    <mp-flex align-items="center">
                      <mp-heading as="h2" color="dark" font-size="xl">
                        Rp46.500.000
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
                          Total net commission
                        </mp-text>
                      </mp-flex>
                    </mp-flex>
                    <mp-flex align-items="center">
                      <mp-heading as="h2" color="dark" font-size="xl">
                        Rp43.200.000
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
                          Payout commission this month
                        </mp-text>
                      </mp-flex>
                    </mp-flex>
                    <mp-flex align-items="center">
                      <mp-heading as="h2" color="dark" font-size="xl">
                        Rp12.200.000
                      </mp-heading>
                    </mp-flex>
                  </mp-flex>
                </mp-box>
              </mp-flex>
            </mp-box>
            <mp-box width="40%">
              <mp-box background-color="gray.25" padding="6" border-radius="md">
                <mp-flex justify-content="space-between">
                  <mp-heading as="h2" font-size="xl">
                    Referral link
                  </mp-heading>

                  <mp-segmented-control
                    default-value="option-1"
                    :data="[
                      {
                        label: 'Link',
                        value: 'option-1',
                      },
                      {
                        label: 'Code',
                        value: 'option-2',
                      },
                    ]"
                  />
                </mp-flex>

                <mp-form-control margin-top="4">
                  <mp-input-group>
                    <mp-input
                      id="button-copy"
                      value="https://mekari.partner.com/rizalchandra"
                      is-read-only
                    />
                    <mp-input-right-addon :with-background="false">
                      <mp-button-icon
                        @click="onCopyClipboard('button-copy')"
                        name="copy"
                      />
                    </mp-input-right-addon>
                  </mp-input-group>
                  <mp-form-help-text>
                    This is your personal unique link to promote this program
                    and get claim commission from this link.
                  </mp-form-help-text>
                </mp-form-control>
              </mp-box>
            </mp-box>
          </mp-flex>

          <mp-divider orientation="horizontal" margin-y="6" />

          <mp-heading as="h2" font-size="xl" margin-bottom="5">
            Leads
          </mp-heading>

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
                      Total lead
                    </mp-text>
                  </mp-flex>
                </mp-flex>
                <mp-flex align-items="center">
                  <mp-icon name="people" margin-right="2" />
                  <mp-heading as="h2" color="dark" font-size="xl">
                    150
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
                    <mp-badge variant="subtle" variant-color="gray">
                      Total new
                    </mp-badge>
                  </mp-flex>
                </mp-flex>
                <mp-flex align-items="center">
                  <mp-heading as="h2" color="dark" font-size="xl">
                    5
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
                    <mp-badge variant="subtle" variant-color="orange">
                      Total on process
                    </mp-badge>
                  </mp-flex>
                </mp-flex>
                <mp-flex align-items="center">
                  <mp-heading as="h2" color="dark" font-size="xl">
                    5
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
                    <mp-badge variant="subtle" variant-color="green">
                      Total won
                    </mp-badge>
                  </mp-flex>
                </mp-flex>
                <mp-flex align-items="center">
                  <mp-heading as="h2" color="dark" font-size="xl">
                    20
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
                    <mp-badge variant="subtle" variant-color="red">
                      Total lost
                    </mp-badge>
                  </mp-flex>
                </mp-flex>
                <mp-flex align-items="center">
                  <mp-heading as="h2" color="dark" font-size="xl">
                    5
                  </mp-heading>
                </mp-flex>
              </mp-flex>
            </mp-box>
          </mp-flex>

          <mp-flex
            justify-content="space-between"
            margin-top="4"
            margin-bottom="6"
          >
            <mp-flex gap="4">
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

          <mp-table-container width="full" max-width="full" overflow="scroll">
            <mp-table>
              <mp-table-head>
                <mp-table-row cursor="pointer">
                  <mp-table-cell as="th">
                    Company name
                    <mp-icon name="sort-default" />
                  </mp-table-cell>
                  <mp-table-cell as="th">
                    PIC name
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
                  <mp-table-cell as="th" colspan="2"> Status </mp-table-cell>
                </mp-table-row>
              </mp-table-head>
              <mp-table-body>
                <mp-table-row>
                  <mp-table-cell as="td">
                    <mp-text is-link>PT Indo Sejahtera</mp-text>
                  </mp-table-cell>
                  <mp-table-cell as="td">
                    <mp-text>Rizal Chandra</mp-text>
                    <mp-text color="gray.600" font-size="sm">
                      rizal@flora.com
                    </mp-text>
                  </mp-table-cell>
                  <mp-table-cell as="td" text-align="right">
                    Rp6.300.000
                  </mp-table-cell>
                  <mp-table-cell as="td" text-align="right">
                    Rp1.291.500
                  </mp-table-cell>
                  <mp-table-cell as="td" text-align="right">
                    Rp1.260.000
                  </mp-table-cell>
                  <mp-table-cell as="td">
                    <mp-badge variant="subtle" variant-color="green">
                      Won
                    </mp-badge>
                  </mp-table-cell>
                  <mp-table-cell as="td" text-align="right">
                    <mp-button
                      as="router-link"
                      to="/offers-overview"
                      variant="outline"
                    >
                      See detail
                    </mp-button>
                  </mp-table-cell>
                </mp-table-row>
                <mp-table-row>
                  <mp-table-cell as="td">
                    <mp-text is-link>PT Arine Makmur</mp-text>
                  </mp-table-cell>
                  <mp-table-cell as="td">
                    <mp-text>Alwin Besto</mp-text>
                    <mp-text color="gray.600" font-size="sm">
                      alwin@arine.com
                    </mp-text>
                  </mp-table-cell>
                  <mp-table-cell as="td" text-align="right">
                    Rp6.300.000
                  </mp-table-cell>
                  <mp-table-cell as="td" text-align="right">
                    Rp1.291.500
                  </mp-table-cell>
                  <mp-table-cell as="td" text-align="right">
                    Rp1.260.000
                  </mp-table-cell>
                  <mp-table-cell as="td">
                    <mp-badge variant="subtle" variant-color="orange">
                      On process
                    </mp-badge>
                  </mp-table-cell>
                  <mp-table-cell as="td" text-align="right">
                    <mp-button variant="outline">See detail</mp-button>
                  </mp-table-cell>
                </mp-table-row>
                <mp-table-row>
                  <mp-table-cell as="td">
                    <mp-text is-link>PT Beisedorf</mp-text>
                  </mp-table-cell>
                  <mp-table-cell as="td">
                    <mp-text>Loli Nur</mp-text>
                    <mp-text color="gray.600" font-size="sm">
                      loli@beisedorf.com
                    </mp-text>
                  </mp-table-cell>
                  <mp-table-cell as="td" text-align="right">
                    Rp6.300.000
                  </mp-table-cell>
                  <mp-table-cell as="td" text-align="right">
                    Rp1.291.500
                  </mp-table-cell>
                  <mp-table-cell as="td" text-align="right">
                    Rp1.260.000
                  </mp-table-cell>
                  <mp-table-cell as="td">
                    <mp-badge variant="subtle" variant-color="red">
                      Lost
                    </mp-badge>
                  </mp-table-cell>
                  <mp-table-cell as="td" text-align="right">
                    <mp-button variant="outline">See detail</mp-button>
                  </mp-table-cell>
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
  MpIcon,
  MpHeading,
  MpText,
  MpButton,
  MpButtonIcon,
  MpBadge,
  MpSelect,
  MpInput,
  MpInputGroup,
  MpInputLeftAddon,
  MpInputRightAddon,
  MpTableContainer,
  MpTable,
  MpTableHead,
  MpTableBody,
  MpTableRow,
  MpTableCell,
  MpDivider,
  MpSegmentedControl,
  MpFormControl,
  MpFormHelpText,
} from "@mekari/pixel";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Pagination from "../components/Pagination";

export default {
  name: "OffersDetail",
  components: {
    MpBox,
    MpFlex,
    MpIcon,
    MpHeading,
    MpText,
    MpButton,
    MpButtonIcon,
    MpBadge,
    MpSelect,
    MpInput,
    MpInputGroup,
    MpInputLeftAddon,
    MpInputRightAddon,
    MpTableContainer,
    MpTable,
    MpTableHead,
    MpTableBody,
    MpTableRow,
    MpTableCell,
    MpDivider,
    MpSegmentedControl,
    MpFormControl,
    MpFormHelpText,
    Pagination,
    Header,
    Sidebar,
  },
  methods: {
    onCopyClipboard(button) {
      const copyText = document.getElementById(button);

      copyText.select();
      copyText.setSelectionRange(0, 99999);
      if (window.isSecureContext && navigator.clipboard) {
        navigator.clipboard.writeText(copyText.value);
      } else {
        document.execCommand("copy");
      }

      this.$toast({
        variant: "success",
        title: "Copied to clipboard successfully!",
        position: "bottom",
      });
    },
  },
};
</script>