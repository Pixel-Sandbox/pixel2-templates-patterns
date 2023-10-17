<template>
  <mp-box
    background-color="white"
    border="1px solid"
    border-radius="md"
    border-color="gray.100"
    padding="6"
    margin-bottom="6"
  >
    <mp-chart
      title="Headcount trend"
      :type="basic.type"
      :data="basic.data"
      :is-show-data-labels="isShow"
      :options="basic.options"
    >
      <template #action>
        <mp-flex gap="4">
          <mp-checkbox :is-checked="isShow" @change="onHandleToggle">
            Show value number
          </mp-checkbox>
          <mp-popover use-portal>
            <mp-popover-trigger>
              <mp-button variant="outline">
                <mp-icon name="download" variant="duotone" margin-right="2" />
                Download
              </mp-button>
            </mp-popover-trigger>
            <mp-popover-content
              max-width="132px"
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
            {{ `${tooltip && tooltip.dataPoints[0].label} 2022` }}
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
                <mp-text font-size="sm" font-weight="semibold" margin-right="1">
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
</template>

<script>
import {
  MpFlex,
  MpBox,
  MpChart,
  MpText,
  MpDivider,
  MpIcon,
  MpButton,
  MpCheckbox,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
} from "@mekari/pixel";

export default {
  name: "NewActiveEmployeeHeadcountTrend",
  components: {
    MpFlex,
    MpBox,
    MpChart,
    MpText,
    MpDivider,
    MpIcon,
    MpButton,
    MpCheckbox,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
  },
  data() {
    return {
      isShow: true,
      basic: {
        type: "line",
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
              label: "All active employee",
              data: [
                135,
                200,
                350,
                350,
                370,
                335,
                200,
                350,
                350,
                370,
                370,
                350,
              ],
            },
            {
              label: "Current employee",
              data: [35, 10, 50, 50, 70, 35, 10, 50, 50, 70, 70, 50],
            },
            {
              label: "New hire",
              data: [55, 30, 70, 70, 120, 75, 30, 170, 170, 240, 140, 220],
            },
          ],
        },
        options: {
          interaction: {
            intersect: false,
            mode: "index",
          },
          scales: {
            y: {
              min: 0,
              max: 400,
              ticks: {
                stepSize: 100,
              },
            },
            x: {
              offset: true,
            },
          },
        },
      },
    };
  },
  methods: {
    onHandleToggle() {
      this.isShow = !this.isShow;
    },
  },
};
</script>
