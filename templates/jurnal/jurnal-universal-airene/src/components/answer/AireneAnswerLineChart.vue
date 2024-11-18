<template>
  <mp-box
    data-component="AireneAnswerLineChart"
    :border-width="showInFullView ? 0 : 1"
    :rounded="showInFullView ? 'none' : 'md'"
    :p="showInFullView ? 0 : 2"
    bg="white"
  >
    <mp-chart
      type="line"
      width-container="full"
      :width-chart="getChartWidth"
      height-chart="308px"
      :data="chartData"
      :options="chartOptions"
      :is-show-legend="false"
    />
  </mp-box>
</template>

<script>
import { MpChart, MpBox } from "@mekari/pixel";

export default {
  name: "DoughnutChart",
  components: {
    MpChart,
    MpBox,
  },
  props: {
    showInFullView: {
      type: Boolean,
      default: false,
    },
    labels: {
      type: Array,
      default: () => [],
    },
    datasets: {
      type: Array,
      default: () => [],
    },
    xLabel: {
      type: String,
      default: "",
    },
    yLabel: {
      type: String,
      default: "",
    },
  },
  computed: {
    chartData() {
      return {
        labels: this.labels,
        datasets: this.datasets,
      };
    },
    chartOptions() {
      return {
        scales: {
          y: {
            min: 0,
            // TODO: Make step size dynamic based on the data.
            // ticks: {
            //   stepSize: 0,
            // },
            title: {
              display: this.yLabel ? true : false,
              text: this.yLabel,
            },
          },
          x: {
            title: {
              display: this.xLabel ? true : false,
              text: this.xLabel,
            },
          },
        },
      };
    },

    // TODO: Use chartjs plugins approach to get the calculated width.
    getChartWidth() {
      const barWidth = 63;
      const offsetWidth = 200;

      return this.chartData.labels.length * barWidth + offsetWidth + "px";
    },
  },
};
</script>
