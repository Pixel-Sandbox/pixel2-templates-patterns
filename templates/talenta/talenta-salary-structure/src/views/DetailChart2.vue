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
      :color-start="1"
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
        <mp-flex width="390px" padding="4" direction="column">
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
                  {{ `Rp${item.data[tooltip.dataPoints[0].dataIndex][0].toLocaleString()}` }} - {{ `Rp${item.data[tooltip.dataPoints[0].dataIndex][1].toLocaleString()}` }}
                </mp-text>
              </mp-flex>
            </mp-flex>
            <mp-divider />
            <mp-flex
              justify="space-between"
              margin-bottom="1"
            >
              <mp-text font-size="sm">
                Actual Min. Salary
              </mp-text>
              <mp-text font-size="sm" font-weight="semibold" margin-left="1">
                {{ `Rp${tooltip.chart.data.datasets[0].data[tooltip.dataPoints[0].dataIndex][0].toLocaleString()}` }}
              </mp-text>
            </mp-flex>
            <mp-flex
              justify="space-between"
              margin-bottom="1"
            >
              <mp-text font-size="sm">
                Actual Mid. Salary
              </mp-text>
              <mp-text font-size="sm" font-weight="semibold" margin-left="1">
                {{ `Rp${tooltip.chart.data.datasets[0].data[tooltip.dataPoints[0].dataIndex][2].toLocaleString()}` }}
              </mp-text>
            </mp-flex>
            <mp-flex
              justify="space-between"
              margin-bottom="1"
            >
              <mp-text font-size="sm">
                Actual Max. Salary
              </mp-text>
              <mp-text font-size="sm" font-weight="semibold" margin-left="1">
                {{ `Rp${tooltip.chart.data.datasets[0].data[tooltip.dataPoints[0].dataIndex][1].toLocaleString()}` }}
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
            label: 'Actual salary range',
            /* 
              Use dimension array in format [MIN, MAX, MID]. 
              Chart.js only uses MIN (index 0) and MAX (index 1) values for range. 
              MID value (index 2) is for data display purposes only on tooltip. 
            */
            data: [[3000000, 5000000, 4000000], [5000000, 9000000, 7000000], [8000000, 11000000, 9000000], [11000000, 13000000, 12000000], [12000000, 18000000, 16000000]],
            categoryPercentage: 1,
            barPercentage: 0.9,
            borderRadius: 6,
            borderSkipped: false,
          }
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
