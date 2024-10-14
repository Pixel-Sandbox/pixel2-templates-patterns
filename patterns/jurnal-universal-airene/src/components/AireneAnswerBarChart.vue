<template>
  <mp-box
    data-component="AireneAnswerBarChart"
    :border-width="showInFullView ? 0 : 1"
    :rounded="showInFullView ? 'none' : 'md'"
    :p="showInFullView ? 0 : 2"
  >
    <mp-chart
      type="bar"
      width-container="full"
      :width-chart="getChartWidth"
      :height-chart="showInFullView ? '70vh' : '308px'"
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
  },
  data() {
    return {
      chartData: {
        labels: [
          "iPhone",
          "Samsung",
          "Vivo",
          "Oppo",
          "Realme",
          "Xiaomi",
          "Huawei",
          "OnePlus",
          "Google",
          "Sony",
          "LG",
          "Motorola",
          "Nokia",
          "HTC",
          "Asus",
          "Lenovo",
          "BlackBerry",
          "ZTE",
          "Alcatel",
          "Meizu",
        ],
        datasets: [
          {
            label: "Produk",
            data: [
              20000000, 15000000, 10000000, 8000000, 7000000, 6000000, 5500000,
              5000000, 4500000, 4000000, 3500000, 3000000, 2500000, 2000000,
              1800000, 1600000, 1400000, 1200000, 1000000, 800000,
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
