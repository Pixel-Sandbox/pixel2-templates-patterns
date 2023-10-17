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
        border-left="1px solid"
        border-color="gray.100"
        z-index="1"
      >
        <mp-box @mouseover="isOutside = false" @mouseleave="isOutside = true">
          <mp-popover
            :is-open="isPopoverOpen"
            is-manual
            initial-focus-ref="#input-breakdown-filter"
          >
            <mp-popover-trigger>
              <mp-form-control control-id="breakdown-by">
                <mp-form-label>Breakdown by</mp-form-label>
                <mp-input-group>
                  <mp-input-right-addon :with-background="false">
                    <mp-icon name="chevrons-down" size="sm" />
                  </mp-input-right-addon>
                  <mp-input
                    id="input-breakdown-filter"
                    value="Gender"
                    is-read-only
                    cursor="pointer"
                    @focus="handleFocus"
                    @blur="handleClickOutside"
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
              @click.native="handleForceInputFocus"
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
                <mp-popover-list-item>Branch</mp-popover-list-item>
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
                <mp-popover-list-item is-active>Gender</mp-popover-list-item>
                <mp-popover-list-item>Age</mp-popover-list-item>
                <mp-popover-list-item>Latest Education</mp-popover-list-item>
                <mp-popover-list-item>Religion</mp-popover-list-item>
                <mp-popover-list-item>PTKP Status</mp-popover-list-item>
              </mp-popover-list>
            </mp-popover-content>
          </mp-popover>
        </mp-box>
        <mp-flex flex-direction="column">
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
        title="Headcount breakdown"
        :type="basic.type"
        :data="basic.data"
        :options="basic.options"
        color-pattern="comparison"
        :color-start="5"
        width-chart="70%"
        :is-show-data-labels="true"
        :is-horizontal="true"
      >
        <template #action>
          <mp-flex gap="4">
            <mp-checkbox is-checked>Compare with last period</mp-checkbox>
            <mp-box>
              <mp-input-group>
                <mp-input-left-addon :with-background="false">
                  <mp-icon name="search" size="sm" />
                </mp-input-left-addon>
                <mp-input placeholder="Search keyword" width="250px" />
              </mp-input-group>
            </mp-box>
            <mp-popover use-portal>
              <mp-popover-trigger>
                <mp-button variant="outline">
                  <mp-icon name="download" variant="duotone" margin-right="2" />
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
                  <mp-text
                    font-size="sm"
                    font-weight="semibold"
                    margin-right="1"
                  >
                    {{ item.formattedValue }}
                  </mp-text>
                  <mp-flex align="center">
                    <mp-text font-size="sm" color="red.500"> ↓10% </mp-text>
                  </mp-flex>
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
  MpHeading,
  MpText,
  MpDivider,
  MpTooltip,
  MpFormControl,
  MpFormLabel,
} from "@mekari/pixel";

export default {
  name: "NewActiveEmployeeHeadcountBreakdown",
  components: {
    MpFlex,
    MpCheckbox,
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
    MpHeading,
    MpText,
    MpDivider,
    MpTooltip,
    MpFormControl,
    MpFormLabel,
  },
  data() {
    return {
      isPopoverOpen: false,
      isFocused: false,
      isOutside: true,
      hoveredItem: "",
      filterData: {
        filterA: [],
        filterB: [],
      },
      filterFillData: {
        filterA: ["parent", "child"],
      },
      filterState: {
        filterA: true,
        filterB: true,
      },
      basic: {
        data: {
          labels: ["Male", "Female", "Not provide"],
          datasets: [
            {
              label: "Dec 2020",
              data: [259, 120, 1],
              barPercentage: 0.9,
              categoryPercentage: 0.5,
            },
            {
              label: "Nov 2020",
              data: [140, 100, 1],
              barPercentage: 0.9,
              categoryPercentage: 0.5,
            },
          ],
        },
        options: {
          interaction: {
            intersect: false,
            mode: "index",
          },
          scales: {
            x: {
              min: 0,
              max: 500,
              ticks: {
                stepSize: 50,
              },
            },
            y: {
              min: 0,
              max: 500,
              ticks: {
                stepSize: 50,
              },
            },
          },
        },
      },
    };
  },
  methods: {
    // Popover
    handleFocus() {
      this.isFocused = true;
      if (!this.isPopoverOpen) this.handleOpenPopover();
      if (this.isPopoverOpen) this.handleForceInputFocus();
    },
    handleForceInputFocus() {
      if (this.isFocused) {
        const input = document.getElementById("input-breakdown-filter");
        input.focus();
      }
    },
    handleOpenPopover() {
      this.isPopoverOpen = true;
    },
    handleClosePopover() {
      this.isFocused = false;
      this.isPopoverOpen = false;
    },
    handleClickOutside() {
      if (this.isOutside) {
        this.handleClosePopover();
        this.isOutside = false;
      }
    },

    handleChangeFilter(index, values, e) {
      if (e) {
        if (e.target.checked) this.filterData[index] = values;
        else this.filterData[index] = [];
      } else {
        this.filterData[index] = values;
      }
    },

    // utils
    isCheckAll(index, options) {
      if (this.filterData[index].length === 0) return false;
      else if (this.filterData[index].length === options.length) return true;
      else return false;
    },
    isIndeterminate(index, options) {
      return (
        this.filterData[index].some((item) => options.includes(item)) &&
        !this.isCheckAll(index, options)
      );
    },
  },
};
</script>
