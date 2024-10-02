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
      title="Salary structure vs Avg. market salary"
      type="bar"
      :color-start="5"
      color-pattern="comparison"
      :data="getChartData"
      :options="getChartOptions"
    >
      <template #action>
        <mp-flex gap="4" align-items="center">
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
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
} from "@mekari/pixel";

export default {
  name: "DetailChart1",
  components: {
    MpFlex,
    MpBox,
    MpChart,
    MpText,
    MpDivider,
    MpIcon,
    MpButton,
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
            order: 2,     
          },
          {
            label: 'Target Min. Salary',
            data: [5500000, 6500000, 8000000, 9500000, 11500000],
            categoryPercentage: 0.8, 
            barPercentage: 0.9,
            order: 2, 
          },
          {
            label: 'Actual Mid. Salary',
            data: [10000000, 12000000, 14000000, 16000000, 18000000],
            categoryPercentage: 0.8, 
            barPercentage: 0.9,
            order: 2,
          },
          {
            label: 'Target Mid. Salary',
            data: [10500000, 12500000, 14500000, 16500000, 18500000],
            categoryPercentage: 0.8,
            barPercentage: 0.9,
            order: 2,
          },
          {
            label: 'Actual Max. Salary',
            data: [15000000, 17000000, 19000000, 20000000, 20000000],
            categoryPercentage: 0.8,
            barPercentage: 0.9,
            order: 2,
          },
          {
            label: 'Target Max. Salary',
            data: [15500000, 17500000, 19500000, 20500000, 20500000],
            categoryPercentage: 0.8,
            barPercentage: 0.9,
            order: 2,
          },
          {
            type: 'line',
            label: 'Avg. Salary Benchmark',
            data: [8000000, 9000000, 10000000, 12000000, 14000000],
            borderColor: '#71717A',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderWidth: 2,
            fill: false,
            tension: 0.4,
            pointBackgroundColor: '#FFFFFF',
            yAxisID: 'y',
            order: 1,
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
            beginAtZero: true,
            ticks: {
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
