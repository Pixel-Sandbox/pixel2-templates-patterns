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
      title="Salary range analysis"
      type="bar"
      :color-start="3"
      color-pattern="categorical"
      :data="getChartData"
      :options="getChartOptions"
      is-stacked
    >
      <template #action>
        <mp-flex gap="4" align-items="center">
          <mp-segmented-control 
            default-value="option-1"
            :data="[
              { id: 'ezsCsI', value: 'option-1', label: 'Actual' },
              { id: 'jjsCgt', value: 'option-2', label: 'Target' }
            ]" 
          />
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
        <mp-flex width="290px" padding="4" direction="column">
          <mp-text font-size="sm" color="gray.600" margin-bottom="2">
           {{ tooltip && tooltip.dataPoints[0].label }}
          </mp-text>
          <template v-if="tooltip">
            <mp-flex
              v-for="(item, index) in tooltip.chart.data.datasets"
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
                  :background-color="item.label !== 'Avg. Salary Benchmark' ? item.backgroundColor : 'stone.400'"
                />
                <mp-text font-size="sm">
                  {{ item.label }}
                </mp-text>
              </mp-flex>
              <mp-flex align="center">
                <mp-text font-size="sm" font-weight="semibold" margin-left="1">
                  {{ `Rp${item.data[tooltip.dataPoints[0].dataIndex].toLocaleString()}` }}
                </mp-text>
              </mp-flex>
            </mp-flex>
            <mp-divider />
            <mp-flex justify-content="space-between" margin-y="2">
              <mp-text font-size="sm" font-weight="semibold">
                Total employee
              </mp-text>
              <mp-text font-size="sm" font-weight="semibold">
                15 employee
              </mp-text>
            </mp-flex>
            <mp-divider />
            <mp-text font-size="sm" color="gray.600">
              See the calculation details in the Guidebook
            </mp-text>
          </template>
        </mp-flex>
      </template>
      <template #legend="legend">
        <mp-flex flex-wrap="wrap" gap="3" padding-y="3" margin-top="2">
          <mp-flex
            v-for="(item, index) in orderedLegend(legend)"
            :key="index"
            cursor="pointer"
            align-items="center"
            @click="item.click()"
          >
            <mp-box
              width="3"
              height="3"
              margin-right="2"
              border-radius="xs"
              :background="item.text !== 'Avg. Salary Benchmark' ? item.fillStyle : 'stone.400'"
            />
            <mp-text>
              {{ item.text }}
            </mp-text>
          </mp-flex>
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
  MpSegmentedControl,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
} from "@mekari/pixel";

export default {
  name: "DetailChart2",
  components: {
    MpFlex,
    MpBox,
    MpChart,
    MpText,
    MpDivider,
    MpIcon,
    MpButton,
    MpSegmentedControl,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
  },
  methods: {
    orderedLegend(legend) {
      const avgSalaryItem = legend.filter(item => item.text === 'Avg. Salary Benchmark');
      const otherItems = legend.filter(item => item.text !== 'Avg. Salary Benchmark');

      return [...otherItems, ...avgSalaryItem];
    }
  },
  computed: {
    getChartData() {
      return {
        labels: ['Junior', 'Middle', 'Senior', 'Manager', 'Head'],
        datasets: [
          {
            label: 'Actual Min. Salary',
            data: [5000000, 6000000, 7500000, 9000000, 11000000],
            categoryPercentage: 0.8,
            barPercentage: 0.9,     
          },
          {
            label: 'Actual Mid. Salary',
            data: [1000000, 1200000, 1400000, 1600000, 1800000],
            categoryPercentage: 0.8, 
            barPercentage: 0.9,
          },
          {
            label: 'Actual Max. Salary',
            data: [15000000, 17000000, 19000000, 20000000, 20000000],
            categoryPercentage: 0.8,
            barPercentage: 0.9,
          },
        ]
      }
    },
    getChartOptions() {
      return {
        scales: {
          x: {
            categoryPercentage: 0.8,
            barPercentage: 0.8, 
            title: {
              display: true,         
              text: 'Job level', 
            },
          },
          y: {
            min: -10000000,
            max: 35000000,
            ticks: {
              stepSize: 5000000,
              callback: function(value) {
                return 'Rp' + value.toLocaleString();
              },
            },
            title: {
              display: true,         
              text: 'Salary (Rp)', 
            },
          },
        },
      }
    }
  }
};
</script>
