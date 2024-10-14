<template>
  <mp-box
    data-component="AireneAnswerLineChart"
    border-width="1px"
    rounded="md"
    p="2"
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
  data() {
    return {
      chartData: {
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
            label: "Monthly Sales",
            data: [
              15000000, 18500000, 22000000, 19800000, 25500000, 30000000,
              28000000, 32500000, 29000000, 35000000, 40000000, 38000000,
            ],
          },
        ],
      },
      chartOptions: {
        scales: {
          y: {
            min: 0,
            ticks: {
              stepSize: 5000000,
              callback: function (value) {
                if (value >= 1000000) {
                  return value / 1000000 + "jt";
                }
                return value;
              },
            },
            title: {
              display: true,
              text: "Nominal transaksi",
            },
          },
          x: {
            title: {
              display: true,
              text: "Nama produk",
            },
          },
        },
      },
    };
  },
  computed: {
    // TODO: Use chartjs plugins approach to get the calculated width.
    getChartWidth() {
      const barWidth = 63;
      const offsetWidth = 200;

      return this.chartData.labels.length * barWidth + offsetWidth + "px";
    },
  },
};
</script>
