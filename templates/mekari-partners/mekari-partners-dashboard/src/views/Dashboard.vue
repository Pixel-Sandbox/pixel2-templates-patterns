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
              Dashboard
            </mp-heading>
          </mp-box>
        </mp-flex>
        <mp-box
          min-height="calc(100vh - 132px)"
          border-top-left-radius="md"
          padding-right="6"
          padding-bottom="6"
        >
          <mp-box padding-bottom="3">
            <mp-box
              background="white"
              padding="6"
              border-radius="md"
              border-width="1px"
            >
              <mp-flex justify-content="space-between" margin-bottom="6">
                <mp-heading as="h2" font-size="xl">Quick stats</mp-heading>
                <mp-flex gap="4">
                  <mp-select value="all" width="56">
                    <option value="all">All program</option>
                  </mp-select>
                  <mp-segmented-control
                    default-value="option-1"
                    :data="[
                      {
                        label: '7D',
                        value: 'option-1',
                      },
                      {
                        label: '14D',
                        value: 'option-2',
                      },
                      {
                        label: '30D',
                        value: 'option-3',
                      },
                      {
                        label: '90D',
                        value: 'option-4',
                      },
                    ]"
                  />
                </mp-flex>
              </mp-flex>

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
                          Total clicks
                        </mp-text>
                      </mp-flex>
                    </mp-flex>
                    <mp-flex align-items="center">
                      <mp-heading as="h2" color="dark" font-size="xl">
                        520
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
                          Total leads
                        </mp-text>
                      </mp-flex>
                    </mp-flex>
                    <mp-flex align-items="center">
                      <mp-heading as="h2" color="dark" font-size="xl">
                        270
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
                          Total conversion
                        </mp-text>
                      </mp-flex>
                    </mp-flex>
                    <mp-flex align-items="center">
                      <mp-heading as="h2" color="dark" font-size="xl">
                        130
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
                          Total payout commission
                        </mp-text>
                      </mp-flex>
                    </mp-flex>
                    <mp-flex align-items="center">
                      <mp-heading as="h2" color="dark" font-size="xl">
                        Rp20.000.000
                      </mp-heading>
                    </mp-flex>
                  </mp-flex>
                </mp-box>
              </mp-flex>
            </mp-box>
          </mp-box>

          <mp-box padding-y="3">
            <mp-box
              background="white"
              padding="6"
              border-radius="md"
              border-width="1px"
            >
              <mp-flex justify-content="space-between" margin-bottom="6">
                <mp-heading as="h2" font-size="xl">Lead funnel</mp-heading>
                <mp-flex gap="4">
                  <mp-select value="all" width="56">
                    <option value="all">All program</option>
                  </mp-select>
                  <mp-segmented-control
                    default-value="option-1"
                    :data="[
                      {
                        label: '7D',
                        value: 'option-1',
                      },
                      {
                        label: '14D',
                        value: 'option-2',
                      },
                      {
                        label: '30D',
                        value: 'option-3',
                      },
                      {
                        label: '90D',
                        value: 'option-4',
                      },
                    ]"
                  />
                </mp-flex>
              </mp-flex>

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
                          Total new
                        </mp-text>
                      </mp-flex>
                    </mp-flex>
                    <mp-flex align-items="center">
                      <mp-heading as="h2" color="dark" font-size="xl">
                        40
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
                          Total on process
                        </mp-text>
                      </mp-flex>
                    </mp-flex>
                    <mp-flex align-items="center">
                      <mp-heading as="h2" color="dark" font-size="xl">
                        30
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
                          Total won
                        </mp-text>
                      </mp-flex>
                    </mp-flex>
                    <mp-flex align-items="center">
                      <mp-heading as="h2" color="dark" font-size="xl">
                        10
                      </mp-heading>
                    </mp-flex>
                  </mp-flex>
                </mp-box>
              </mp-flex>

              <mp-chart
                :data="{
                  labels: [''],
                  datasets: [
                    {
                      label: 'New',
                      data: [40],
                      backgroundColor: '#DEB9FF',
                    },
                    {
                      label: 'On process',
                      data: [30],
                      backgroundColor: '#CAA8FF',
                    },
                    {
                      label: 'Won',
                      data: [10],
                      backgroundColor: '#B899FF',
                    },
                  ],
                }"
                :options="{
                  scales: {
                    y: {
                      min: 0,
                      ticks: {
                        stepSize: 10,
                      },
                    },
                  },
                }"
                color-pattern="dark-shades"
                :color-start="6"
                padding-top="5"
              />
            </mp-box>
          </mp-box>

          <!-- <mp-box padding-y="3">
            <mp-box
              background="white"
              padding="6"
              border-radius="md"
              border-width="1px"
            >
              <mp-flex justify-content="space-between" margin-bottom="6">
                <mp-heading as="h2" font-size="xl">Top partners</mp-heading>
                <mp-flex gap="4">
                  <mp-segmented-control
                    default-value="option-1"
                    :data="[
                      {
                        label: '7D',
                        value: 'option-1',
                      },
                      {
                        label: '14D',
                        value: 'option-2',
                      },
                      {
                        label: '30D',
                        value: 'option-3',
                      },
                      {
                        label: '90D',
                        value: 'option-4',
                      },
                    ]"
                  />
                </mp-flex>
              </mp-flex>

              <mp-table-container
                width="full"
                max-width="full"
                overflow="scroll"
              >
                <mp-table>
                  <mp-table-head>
                    <mp-table-row cursor="pointer">
                      <mp-table-cell as="th">
                        Rank
                        <mp-icon name="sort-default" />
                      </mp-table-cell>
                      <mp-table-cell as="th">
                        Partner name
                        <mp-icon name="sort-default" />
                      </mp-table-cell>
                      <mp-table-cell as="th">
                        Total lead submission
                        <mp-icon name="sort-default" />
                      </mp-table-cell>
                      <mp-table-cell as="th">
                        Total won lead
                        <mp-icon name="sort-default" />
                      </mp-table-cell>
                    </mp-table-row>
                  </mp-table-head>
                  <mp-table-body>
                    <mp-table-row>
                      <mp-table-cell as="td">1</mp-table-cell>
                      <mp-table-cell as="td">PT Tech Solution</mp-table-cell>
                      <mp-table-cell as="td">520</mp-table-cell>
                      <mp-table-cell as="td">140</mp-table-cell>
                    </mp-table-row>
                    <mp-table-row>
                      <mp-table-cell as="td">2</mp-table-cell>
                      <mp-table-cell as="td">PT Tumbuh Kembang</mp-table-cell>
                      <mp-table-cell as="td">330</mp-table-cell>
                      <mp-table-cell as="td">90</mp-table-cell>
                    </mp-table-row>
                    <mp-table-row>
                      <mp-table-cell as="td">3</mp-table-cell>
                      <mp-table-cell as="td">PT Nusantera Tech</mp-table-cell>
                      <mp-table-cell as="td">220</mp-table-cell>
                      <mp-table-cell as="td">20</mp-table-cell>
                    </mp-table-row>
                  </mp-table-body>
                </mp-table>
              </mp-table-container>

              <Pagination />
            </mp-box>
          </mp-box> -->
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
  MpSelect,
  MpSegmentedControl,
  MpDivider,
  MpChart,
} from "@mekari/pixel";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default {
  name: "Dashboard",
  components: {
    MpBox,
    MpFlex,
    MpHeading,
    MpText,
    MpSelect,
    MpSegmentedControl,
    MpDivider,
    MpChart,
    Header,
    Sidebar,
  },
};
</script>