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
            <mp-heading as="h1" font-size="2xl" font-weight="bold" color="dark">
              Programs
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

          <mp-table-container width="full" max-width="full" overflow="scroll">
            <mp-table>
              <mp-table-head>
                <mp-table-row cursor="pointer">
                  <mp-table-cell as="th">
                    Program
                    <mp-icon name="sort-default" />
                  </mp-table-cell>
                  <mp-table-cell as="th">
                    Product
                    <mp-icon name="sort-default" />
                  </mp-table-cell>
                  <mp-table-cell as="th">
                    Total clicks
                    <mp-icon name="sort-default" />
                  </mp-table-cell>
                  <mp-table-cell as="th">
                    Total lead
                    <mp-icon name="sort-default" />
                  </mp-table-cell>
                  <mp-table-cell as="th">
                    Total won
                    <mp-icon name="sort-default" />
                  </mp-table-cell>
                  <mp-table-cell as="th">
                    Conversion rate
                    <mp-icon name="sort-default" />
                  </mp-table-cell>
                  <mp-table-cell as="th" colspan="2">
                    Status
                    <mp-icon name="sort-default" />
                  </mp-table-cell>
                </mp-table-row>
              </mp-table-head>
              <mp-table-body>
                <mp-table-row>
                  <mp-table-cell as="td">Jurnal Reseller Program</mp-table-cell>
                  <mp-table-cell as="td">Jurnal</mp-table-cell>
                  <mp-table-cell as="td">320</mp-table-cell>
                  <mp-table-cell as="td">10</mp-table-cell>
                  <mp-table-cell as="td">5</mp-table-cell>
                  <mp-table-cell as="td">50%</mp-table-cell>
                  <mp-table-cell as="td">
                    <mp-badge variant="subtle" variant-color="green">
                      Active
                    </mp-badge>
                  </mp-table-cell>
                  <mp-table-cell as="td" text-align="right">
                    <mp-button
                      as="router-link"
                      to="/offers-detail"
                      variant="outline"
                      >See detail</mp-button
                    >
                  </mp-table-cell>
                </mp-table-row>
                <mp-table-row>
                  <mp-table-cell as="td">Qontak Reseller Program</mp-table-cell>
                  <mp-table-cell as="td">Qontak</mp-table-cell>
                  <mp-table-cell as="td">320</mp-table-cell>
                  <mp-table-cell as="td">10</mp-table-cell>
                  <mp-table-cell as="td">5</mp-table-cell>
                  <mp-table-cell as="td">50%</mp-table-cell>
                  <mp-table-cell as="td">
                    <mp-badge variant="subtle" variant-color="green">
                      Active
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

          <mp-divider orientation="horizontal" margin-y="6" />

          <mp-box>
            <mp-heading as="h2" font-size="xl">
              Add more product offer
            </mp-heading>
            <mp-text color="gray.600">
              Quick register to offer more product for our Mekari products
            </mp-text>
          </mp-box>

          <mp-flex gap="6" margin-top="5" margin-bottom="6">
            <mp-flex
              flex="1 0 0 "
              background="white"
              padding-x="4"
              padding-y="3"
              border-radius="md"
              border-width="1px"
              flex-direction="column"
            >
              <mp-icon name="talenta-brand" margin-bottom="3" />
              <mp-text font-weight="semibold" margin-bottom="2">
                Mekari Talenta
              </mp-text>
              <mp-text color="gray.600" font-size="sm" margin-bottom="6">
                HRIS & Payroll automation Software
              </mp-text>
              <mp-text is-link>Join partners</mp-text>
            </mp-flex>
            <mp-flex
              flex="1 0 0 "
              background="white"
              padding-x="4"
              padding-y="3"
              border-radius="md"
              border-width="1px"
              flex-direction="column"
            >
              <mp-icon name="klikpajak-brand" margin-bottom="3" />
              <mp-text font-weight="semibold" margin-bottom="2">
                Mekari Klikpajak
              </mp-text>
              <mp-text color="gray.600" font-size="sm" margin-bottom="6">
                Online tax management Software
              </mp-text>
              <mp-text is-link>Join partners</mp-text>
            </mp-flex>
            <mp-flex
              flex="1 0 0 "
              background="white"
              padding-x="4"
              padding-y="3"
              border-radius="md"
              border-width="1px"
              flex-direction="column"
            >
              <mp-icon name="sign-brand" margin-bottom="3" />
              <mp-text font-weight="semibold" margin-bottom="2">
                Mekari e-Sign
              </mp-text>
              <mp-text color="gray.600" font-size="sm" margin-bottom="6">
                Document authorization software
              </mp-text>
              <mp-text is-link>Join partners</mp-text>
            </mp-flex>
            <mp-flex
              flex="1 0 0 "
              background="white"
              padding-x="4"
              padding-y="3"
              border-radius="md"
              border-width="1px"
              flex-direction="column"
            >
              <mp-icon name="flex-brand" margin-bottom="3" />
              <mp-text font-weight="semibold" margin-bottom="2">
                Mekari Flex
              </mp-text>
              <mp-text color="gray.600" font-size="sm" margin-bottom="6">
                Employee Benefit & Welfare Software
              </mp-text>
              <mp-text is-link>Join partners</mp-text>
            </mp-flex>
          </mp-flex>

          <mp-flex>
            <mp-text color="gray.600" margin-right="2"
              >Looking for other products?
            </mp-text>
            <mp-text is-link>See more</mp-text>
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
  MpIcon,
  MpHeading,
  MpText,
  MpButton,
  MpBadge,
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
  MpDivider,
} from "@mekari/pixel";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Pagination from "../components/Pagination";

export default {
  name: "Offers",
  components: {
    MpBox,
    MpFlex,
    MpIcon,
    MpHeading,
    MpText,
    MpButton,
    MpBadge,
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
    MpDivider,
    Pagination,
    Header,
    Sidebar,
  },
};
</script>