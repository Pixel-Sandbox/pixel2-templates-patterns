<template>
  <mp-box
    background-color="white"
    border="1px solid"
    border-radius="md"
    border-color="gray.100"
    padding="6"
    margin-bottom="6"
  >
    <mp-box position="relative">
      <mp-box
        position="absolute"
        padding-y="6"
        padding-x="6"
        top="60px"
        right="0"
        width="290px"
        min-height="310px"
        border-left="1px solid"
        border-color="gray.100"
        z-index="1"
      >
        <mp-box @mouseover="isOutsideB = false" @mouseleave="isOutsideB = true">
          <mp-popover
            :is-open="isPopoverOpenB"
            is-manual
            initial-focus-ref="#input-rate-b-filter"
          >
            <mp-popover-trigger>
              <mp-form-control control-id="breakdown-by">
                <mp-form-label>Breakdown by</mp-form-label>
                <mp-input-group>
                  <mp-input-right-addon :with-background="false">
                    <mp-icon name="chevrons-down" size="sm" />
                  </mp-input-right-addon>
                  <mp-input
                    id="input-rate-b-filter"
                    value="Branch"
                    is-read-only
                    cursor="pointer"
                    @focus="handleFocusB"
                    @blur="handleClickOutsideB"
                  />
                </mp-input-group>
              </mp-form-control>
            </mp-popover-trigger>
            <mp-popover-content
              max-width="64"
              background-color="white"
              box-shadow="lg"
              border="1px solid"
              border-color="gray.400"
              border-radius="md"
              @click.native="handleForceInputFocusB"
            >
              <mp-popover-list
                border-radius="md"
                max-height="400px"
                overflow-y="auto"
              >
                <mp-popover-list-item cursor="default!important" is-disabled>
                  <mp-text font-size="sm" color="gray.600">
                    EMPLOYMENT DATA
                  </mp-text>
                </mp-popover-list-item>
                <mp-popover-list-item is-active>Branch</mp-popover-list-item>
                <mp-popover-list-item>Organization</mp-popover-list-item>
                <mp-popover-list-item>Job level</mp-popover-list-item>
                <mp-popover-list-item>Job position</mp-popover-list-item>
                <mp-popover-list-item>Grade</mp-popover-list-item>
                <mp-popover-list-item>Class</mp-popover-list-item>
                <mp-popover-list-item>
                  Employement status
                </mp-popover-list-item>
                <mp-popover-list-item>Service length</mp-popover-list-item>
                <mp-popover-list-item cursor="default!important" is-disabled>
                  <mp-text font-size="sm" color="gray.600">
                    DEMOGRAPHY
                  </mp-text>
                </mp-popover-list-item>
                <mp-popover-list-item>Gender</mp-popover-list-item>
                <mp-popover-list-item>Age</mp-popover-list-item>
                <mp-popover-list-item>Latest Education</mp-popover-list-item>
                <mp-popover-list-item>Religion</mp-popover-list-item>
                <mp-popover-list-item>PTKP Status</mp-popover-list-item>
              </mp-popover-list>
            </mp-popover-content>
          </mp-popover>

          <mp-form-control
            v-show="viewPeriod !== 'Single period'"
            control-id="view-by"
            margin-top="5"
          >
            <mp-form-label>View by</mp-form-label>
            <mp-box
              @mouseover="isOutsideC = false"
              @mouseleave="isOutsideC = true"
            >
              <mp-popover
                :is-open="isPopoverOpenC"
                is-manual
                initial-focus-ref="#input-rate-c-filter"
              >
                <mp-popover-trigger>
                  <mp-input-group>
                    <mp-input-right-addon :with-background="false">
                      <mp-icon name="chevrons-down" size="sm" />
                    </mp-input-right-addon>
                    <mp-input
                      id="input-rate-c-filter"
                      value="5 selected branch"
                      is-read-only
                      cursor="pointer"
                      @focus="handleFocusC"
                      @blur="handleClickOutsideC"
                    />
                  </mp-input-group>
                </mp-popover-trigger>
                <mp-popover-content
                  max-width="350px"
                  background-color="white"
                  border="1px solid"
                  border-color="gray.400"
                  border-radius="md"
                  box-shadow="lg"
                  max-height="300px"
                  overflow-y="auto"
                  @click.native="handleForceInputFocusC"
                >
                  <mp-box padding-x="3" padding-top="3">
                    <mp-input-group>
                      <mp-input-left-addon :with-background="false">
                        <mp-icon name="search" size="sm" />
                      </mp-input-left-addon>
                      <mp-input placeholder="Search..." />
                    </mp-input-group>
                  </mp-box>
                  <mp-popover-list>
                    <mp-popover-list-item padding-y="1">
                      <mp-checkbox> Select all </mp-checkbox>
                    </mp-popover-list-item>
                    <mp-popover-list-item
                      v-for="item in viewData"
                      :key="item"
                      padding-y="1"
                    >
                      <mp-checkbox> {{ item }} </mp-checkbox>
                    </mp-popover-list-item>
                    <mp-popover-list-item v-if="isLoading">
                      <mp-flex align-items="center">
                        <mp-spinner size="sm" mr="2" />
                        Loading...
                      </mp-flex>
                    </mp-popover-list-item>

                    <div id="observer" />
                  </mp-popover-list>
                </mp-popover-content>
              </mp-popover>
            </mp-box>
          </mp-form-control>
        </mp-box>
        <mp-flex v-if="viewPeriod === 'Single period'" flex-direction="column">
          <mp-flex flex-direction="column" margin-top="4" margin-bottom="2">
            <mp-flex justify-content="space-between">
              <mp-flex align-items="center">
                <mp-icon name="team" size="sm" margin-right="1" />
                <mp-heading
                  as="h2"
                  color="dark"
                  font-size="xl"
                  transition="all .2s ease"
                >
                  18%
                </mp-heading>
              </mp-flex>
            </mp-flex>
            <mp-flex justify-content="flex-start" align-items="center">
              <mp-text color="gray.600" font-size="md">
                Female supervisor (%)
              </mp-text>
              <mp-tooltip
                label="The percentage of female supervisor in the company."
                position="bottom"
              >
                <mp-icon name="help" size="sm" margin-left="1" />
              </mp-tooltip>
            </mp-flex>
          </mp-flex>

          <mp-flex flex-direction="column" margin-bottom="2">
            <mp-flex justify-content="space-between">
              <mp-flex align-items="center">
                <mp-icon name="team" size="sm" margin-right="1" />
                <mp-heading
                  as="h2"
                  color="dark"
                  font-size="xl"
                  transition="all .2s ease"
                >
                  35%
                </mp-heading>
              </mp-flex>
            </mp-flex>
            <mp-flex justify-content="flex-start" align-items="center">
              <mp-text color="gray.600" font-size="md">
                Male supervisor (%)
              </mp-text>
              <mp-tooltip
                label="The percentage of male supervisor in the company."
                position="bottom"
              >
                <mp-icon name="help" size="sm" margin-left="1" />
              </mp-tooltip>
            </mp-flex>
          </mp-flex>

          <mp-flex flex-direction="column">
            <mp-flex justify-content="space-between">
              <mp-flex align-items="center">
                <mp-icon name="team" size="sm" margin-right="1" />
                <mp-heading
                  as="h2"
                  color="dark"
                  font-size="xl"
                  transition="all .2s ease"
                >
                  60:40
                </mp-heading>
              </mp-flex>
            </mp-flex>
            <mp-flex justify-content="flex-start" align-items="center">
              <mp-text color="gray.600" font-size="md">
                Ratio male to female
              </mp-text>
              <mp-tooltip
                label="The quantitive comparison between male and female supervisor."
                position="bottom"
              >
                <mp-icon name="help" size="sm" margin-left="1" />
              </mp-tooltip>
            </mp-flex>
          </mp-flex>
        </mp-flex>
      </mp-box>
      <mp-chart
        id="turnover-breakdown"
        ref="turnoverBreakdown"
        title="Turnover breakdown"
        :type="viewPeriod === 'Single period' ? basic.type : stacked.type"
        :data="viewPeriod === 'Single period' ? basic.data : stacked.data"
        :options="
          viewPeriod === 'Single period' ? basic.options : stacked.options
        "
        :color-pattern="
          viewPeriod === 'Single period' ? 'comparison' : 'categorical'
        "
        :color-start="viewPeriod === 'Single period' ? 5 : 1"
        :color-ratio="0.1"
        :is-show-data-labels="viewPeriod === 'Single period'"
        :is-stacked="viewPeriod !== 'Single period'"
        :is-horizontal="viewPeriod === 'Single period'"
        :width-container="viewPeriod === 'Single period' ? '74%' : '72%'"
        height-container="280px"
        :width-chart="viewPeriod === 'Single period' ? '100%' : '100%'"
        :height-chart="
          viewPeriod === 'Single period' ? `${heightChart}px` : 'auto'
        "
      >
        <template #action>
          <mp-flex
            justify-content="space-between"
            align-items="center"
            flex="1 0 auto"
          >
            <mp-flex>
              <mp-divider
                orientation="vertical"
                margin-x="2"
                margin-y="0"
                :display="['none', 'block']"
              />
              <mp-popover :display="['none', 'block']" use-portal>
                <mp-popover-trigger>
                  <mp-button
                    variant="link"
                    color="gray.600"
                    right-icon="caret-down"
                    :display="['none', 'block']"
                  >
                    View by numbers
                  </mp-button>
                </mp-popover-trigger>
                <mp-popover-content
                  max-width="48"
                  bg="white"
                  rounded="md"
                  shadow="lg"
                  border-width="1px"
                  border-color="gray.400"
                >
                  <mp-popover-list>
                    <mp-popover-list-item is-active>
                      View by numbers
                    </mp-popover-list-item>
                    <mp-popover-list-item>
                      View by percentage
                    </mp-popover-list-item>
                  </mp-popover-list>
                </mp-popover-content>
              </mp-popover>
            </mp-flex>
            <mp-flex gap="4">
              <mp-box>
                <mp-input-group>
                  <mp-input-left-addon :with-background="false">
                    <mp-icon name="search" size="sm" />
                  </mp-input-left-addon>
                  <mp-input placeholder="Search keyword" width="250px" />
                </mp-input-group>
              </mp-box>
              <mp-box
                @mouseover="isOutsideA = false"
                @mouseleave="isOutsideA = true"
              >
                <mp-popover
                  :is-open="isPopoverOpenA"
                  is-manual
                  initial-focus-ref="#input-rate-a-filter"
                >
                  <mp-popover-trigger>
                    <mp-input-group>
                      <mp-input-right-addon :with-background="false">
                        <mp-icon name="chevrons-down" size="sm" />
                      </mp-input-right-addon>
                      <mp-input
                        :value="viewPeriod"
                        is-read-only
                        cursor="pointer"
                        width="200px"
                        id="input-rate-a-filter"
                        @focus="handleFocusA"
                        @blur="handleClickOutsideA"
                      />
                    </mp-input-group>
                  </mp-popover-trigger>
                  <mp-popover-content
                    max-width="240px"
                    background-color="white"
                    border-radius="md"
                    border-width="1px"
                    border-color="gray.400"
                    box-shadow="lg"
                    @click.native="handleForceInputFocusA"
                  >
                    <mp-popover-list>
                      <mp-box width="full" padding-x="3" padding-y="2">
                        <mp-text
                          color="gray.600"
                          text-align="left"
                          font-size="sm"
                        >
                          VIEW PERIOD BY
                        </mp-text>
                      </mp-box>
                      <mp-popover-list-item
                        :is-active="viewPeriod === 'Single period'"
                        @click="handleSelectPopover('Single period')"
                      >
                        Single period
                      </mp-popover-list-item>
                      <mp-popover-list-item
                        :is-active="viewPeriod === 'Range period'"
                        @click="handleSelectPopover('Range period')"
                      >
                        Range period
                      </mp-popover-list-item>
                    </mp-popover-list>
                    <mp-box width="full" padding-x="3" padding-bottom="2">
                      <mp-divider margin-top="1" />
                      <mp-box v-if="viewPeriod !== 'Single period'">
                        <mp-tooltip
                          label="You can only compare in single period."
                        >
                          <mp-checkbox is-checked is-disabled>
                            Compare with last period das
                          </mp-checkbox>
                        </mp-tooltip>
                      </mp-box>
                      <mp-checkbox v-else is-checked>
                        Compare with last period sad
                      </mp-checkbox>
                    </mp-box>
                  </mp-popover-content>
                </mp-popover>
              </mp-box>
              <mp-popover use-portal>
                <mp-popover-trigger>
                  <mp-button variant="outline">
                    <mp-icon
                      name="download"
                      variant="duotone"
                      margin-right="2"
                    />
                    Download
                  </mp-button>
                </mp-popover-trigger>
                <mp-popover-content
                  max-width="32"
                  bg="white"
                  rounded="md"
                  shadow="lg"
                  border="1px solid"
                  border-color="gray.400"
                >
                  <mp-popover-list display="grid">
                    <mp-popover-list-item>CSV</mp-popover-list-item>
                    <mp-popover-list-item>XLSX</mp-popover-list-item>
                    <mp-popover-list-item>PDF</mp-popover-list-item>
                  </mp-popover-list>
                </mp-popover-content>
              </mp-popover>
            </mp-flex>
          </mp-flex>
        </template>
        <template #tooltip="tooltip">
          <mp-flex width="260px" padding="4" direction="column">
            <mp-text font-size="sm" color="gray.600" margin-bottom="2">
              {{ `${tooltip && tooltip.dataPoints[0].label}` }}
            </mp-text>
            <template v-if="tooltip">
              <mp-flex
                v-for="(item, index) in tooltip.dataPoints"
                :key="index"
                justify="space-between"
                margin-bottom="1"
              >
                <mp-flex align="center">
                  <mp-flex
                    width="2"
                    height="2"
                    margin-right="2"
                    border-radius="xs"
                    :background-color="item.dataset.backgroundColor"
                  />
                  <mp-text font-size="sm">
                    {{ item.dataset.label }}
                  </mp-text>
                </mp-flex>
                <mp-flex align="center">
                  <mp-flex align="center">
                    <mp-text font-size="sm" color="red.500"> ↓10% </mp-text>
                  </mp-flex>
                  <mp-text
                    font-size="sm"
                    font-weight="semibold"
                    margin-left="1"
                  >
                    {{ item.formattedValue }}
                  </mp-text>
                </mp-flex>
              </mp-flex>
              <mp-divider />
              <mp-text font-size="sm" color="gray.600">
                The percentage shows a comparison to the last period. See the
                calculation details in the Guidebook.
              </mp-text>
            </template>
          </mp-flex>
        </template>
      </mp-chart>
    </mp-box>
  </mp-box>
</template>

<script>
import {
  MpFlex,
  MpCheckbox,
  MpSpinner,
  MpBox,
  MpChart,
  MpIcon,
  MpButton,
  MpInput,
  MpInputGroup,
  MpInputRightAddon,
  MpInputLeftAddon,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
  MpFormControl,
  MpFormLabel,
  MpHeading,
  MpText,
  MpDivider,
  MpTooltip,
} from "@mekari/pixel";

export default {
  name: "EmployeeTurnoverHeadcountRate",
  components: {
    MpFlex,
    MpCheckbox,
    MpSpinner,
    MpBox,
    MpChart,
    MpIcon,
    MpButton,
    MpInput,
    MpInputGroup,
    MpInputRightAddon,
    MpInputLeftAddon,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
    MpFormControl,
    MpFormLabel,
    MpHeading,
    MpText,
    MpDivider,
    MpTooltip,
  },
  computed: {
    heightChart() {
      return this.basic.data.labels.length * 2 * 33.33;
    },
  },
  data() {
    return {
      viewPeriod: "Single period",
      isPopoverOpenA: false,
      isFocusedA: false,
      isOutsideA: true,
      isPopoverOpenB: false,
      isFocusedB: false,
      isOutsideB: true,
      isPopoverOpenC: false,
      isFocusedC: false,
      isOutsideC: true,
      viewData: [
        "Jakarta Barat",
        "Jakarta Utara",
        "Jakarta Selatan",
        "Jakarta Pusat",
        "Jakarta Timur",
        "Tangerang",
      ],
      isLoading: false,
      process: false,
      observer: null,
      basic: {
        data: {
          labels: ["Jakarta", "Depok", "Tangerang", "Bogor", "Bandung"],
          datasets: [
            {
              label: "This period",
              data: [259, 120, 230, 11, 223],
              barPercentage: 0.9,
              categoryPercentage: 0.5,
            },
            {
              label: "Last period",
              data: [140, 100, 122, 231, 195],
              barPercentage: 0.9,
              categoryPercentage: 0.5,
            },
          ],
        },
        options: {
          interaction: {
            intersect: true,
            mode: "index",
            axis: "y",
          },
          scales: {
            y: {
              min: 0,
              max: 500,
              ticks: {
                padding: 10,
                stepSize: 50,
              },
            },
            x: {
              ticks: {
                padding: 10,
                callback: function (value) {
                  return value + "%";
                },
              },
            },
          },
        },
      },
      stacked: {
        type: "bar",
        data: {
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          datasets: [
            {
              label: "Jakarta Barat",
              data: [2, 3, 8, 2, 5, 1, 1, 1, 8, 2, 1, 0],
            },
            {
              label: "Jakarta Utara",
              data: [5, 1, 1, 5, 5, 15, 5, 5, 2, 1, 5, 0],
            },
            {
              label: "Jakarta Selatan",
              data: [2, 1, 2, 1, 1, 7, 2, 1, 2, 1, 1, 7],
            },
            {
              label: "Jakarta Timur",
              data: [5, 5, 5, 5, 1, 2, 2, 1, 2, 1, 1, 7],
            },
            {
              label: "Jakarta Pusat",
              data: [1, 5, 5, 1, 3, 2, 7, 2, 1, 2, 1, 1, 7],
            },
            {
              label: "Jawa Barat",
              data: [1, 5, 5, 5, 3, 2, 7, 2, 1, 2, 5, 5, 7],
            },
            {
              label: "Jawa Tengah",
              data: [5, 5, 5, 5, 3, 2, 7, 2, 1, 2, 5, 5, 7],
            },
            {
              label: "Jawa Timur",
              data: [5, 5, 5, 5, 3, 2, 4, 2, 1, 2, 5, 5, 4],
            },
            {
              label: "Sumatra Utara",
              data: [5, 5, 5, 5, 1, 2, 4, 2, 1, 2, 5, 5, 4],
            },
            {
              label: "Sumatra Barat",
              data: [5, 5, 5, 5, 1, 2, 4, 2, 1, 2, 5, 5, 4],
            },
            {
              label: "Sumatra Selatan",
              data: [5, 5, 5, 5, 1, 2, 7, 2, 1, 2, 5, 5, 7],
            },
            {
              label: "Banten",
              data: [5, 5, 5, 5, 1, 2, 7, 2, 1, 2, 5, 5, 7],
            },
          ],
        },
        options: {
          interaction: {
            intersect: false,
            mode: "index",
          },
          plugins: {
            tooltip: {
              external: (context) => {
                const { tooltip, chart } = context;

                this.$refs.turnoverBreakdown.tooltip = {
                  opacity: tooltip.opacity,
                  left: chart.canvas.offsetLeft + tooltip.caretX + 30, // Adding offset left
                  top: chart.canvas.offsetTop + tooltip.caretY - 100, // Adding offset top
                  data: tooltip,
                };
              },
            },
          },
          scales: {
            y: {
              min: 0,
              max: 80,
              ticks: {
                padding: 10,
                stepSize: 50,
              },
            },
          },
        },
      },
    };
  },
  created() {
    for (var a = 1; a <= 50; a++) {
      this.basic.data.labels.unshift(a);
      this.basic.data.datasets[0].data.unshift(a + 100);
      this.basic.data.datasets[1].data.unshift(a + 100);
    }
  },
  mounted() {
    document.getElementById("legend-turnover-breakdown").style.width = "72%";
    document.getElementById("legend-turnover-breakdown").style.gap = "8px 16px";

    this.observer = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) {
        if (!this.process) {
          this.loadNextData();
        }
      }
    }, {});

    const element = document.getElementById("observer");
    this.observer.observe(element);
  },
  destroyed() {
    this.observer.disconnect();
  },
  methods: {
    loadNextData() {
      this.process = true;
      this.isLoading = true;

      setTimeout(() => {
        const length = this.viewData.length + 1;
        this.viewData.push(...Array.from({ length: 6 }, (_, i) => length + i));

        this.isLoading = false;
        this.process = false;
      }, 1000);
    },
    // Popover A
    handleFocusA() {
      this.isFocusedA = true;
      if (!this.isPopoverOpenA) this.handleOpenPopoverA();
      if (this.isPopoverOpenA) this.handleForceInputFocusA();
    },
    handleForceInputFocusA() {
      if (this.isFocusedA) {
        const input = document.getElementById("input-rate-a-filter");
        input.focus();
      }
    },
    handleOpenPopoverA() {
      this.isPopoverOpenA = true;
    },
    handleClosePopoverA() {
      this.isFocusedA = false;
      this.isPopoverOpenA = false;
    },
    handleClickOutsideA() {
      if (this.isOutsideA) {
        this.handleClosePopoverA();
        this.isOutsideA = false;
      }
    },
    handleSelectPopover(value) {
      this.viewPeriod = value;
      this.handleClosePopoverA();
    },

    // Popover B
    handleFocusB() {
      this.isFocusedB = true;
      if (!this.isPopoverOpenB) this.handleOpenPopoverB();
      if (this.isPopoverOpenB) this.handleForceInputFocusB();
    },
    handleForceInputFocusB() {
      if (this.isFocusedB) {
        const input = document.getElementById("input-rate-b-filter");
        input.focus();
      }
    },
    handleOpenPopoverB() {
      this.isPopoverOpenB = true;
    },
    handleClosePopoverB() {
      this.isFocusedB = false;
      this.isPopoverOpenB = false;
    },
    handleClickOutsideB() {
      if (this.isOutsideB) {
        this.handleClosePopoverB();
        this.isOutsideB = false;
      }
    },

    // Popover C
    handleFocusC() {
      this.isFocusedC = true;
      if (!this.isPopoverOpenC) this.handleOpenPopoverC();
      if (this.isPopoverOpenC) this.handleForceInputFocusC();
    },
    handleForceInputFocusC() {
      if (this.isFocusedC) {
        const input = document.getElementById("input-rate-c-filter");
        input.focus();
      }
    },
    handleOpenPopoverC() {
      this.isPopoverOpenC = true;
    },
    handleClosePopoverC() {
      this.isFocusedC = false;
      this.isPopoverOpenC = false;
    },
    handleClickOutsideC() {
      if (this.isOutsideC) {
        this.handleClosePopoverC();
        this.isOutsideC = false;
      }
    },
  },
};
</script>
