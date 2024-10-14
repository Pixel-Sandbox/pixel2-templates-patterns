<template>
  <mp-box
    data-component="AireneAnswerPieChart"
    border-width="1px"
    rounded="md"
    p="2"
  >
    <mp-chart
      legend-position="right"
      type="pie"
      :data="chartData"
      :options="chartOptions"
      :is-show-data-labels="true"
    >
      <template #legend="legend">
        <mp-flex width="full" direction="column" ml="12">
          <mp-flex
            justify="space-between"
            pb="3"
            border-bottom-color="gray.100"
            border-bottom-width="1px"
            border-style="solid"
          >
            <mp-text font-weight="semibold"> Akun </mp-text>

            <mp-text font-weight="semibold"> Nominal </mp-text>
          </mp-flex>
          <mp-flex
            v-for="(item, index) in legend"
            :key="index"
            cursor="pointer"
            align="center"
            justify="space-between"
            border-bottom-color="gray.100"
            border-bottom-width="1px"
            border-style="solid"
            pt="3"
            pb="3"
          >
            <mp-flex align="center">
              <mp-box
                width="3"
                height="3"
                mr="2"
                border-radius="3px"
                :background="item.fillStyle"
              />
              <mp-text>
                {{ item.text }}
              </mp-text>
            </mp-flex>

            <mp-flex align="center" gap="1">
              <mp-text color="gray.600" font-size="sm"> 39% </mp-text>
              <mp-text> 300.000.000 </mp-text>
            </mp-flex>
          </mp-flex>
        </mp-flex>
      </template>
    </mp-chart>
  </mp-box>
</template>

<script>
import { MpFlex, MpBox, MpChart, MpText } from "@mekari/pixel";

const VALUES = [300000, 100000, 200000, 100000, 50000];

export default {
  name: "PieChart",
  components: {
    MpChart,
    MpFlex,
    MpBox,
    MpText,
  },
  data() {
    return {
      chartData: {
        labels: [
          "Bahan baku",
          "Utilitas",
          "Gaji karyawan",
          "Pemasaran",
          "Sewa kantor",
        ],
        datasets: [
          {
            label: "Akun",
            data: VALUES,
          },
        ],
      },
      chartOptions: {
        layout: {
          padding: 40,
        },
        plugins: {
          datalabels: {
            color: "#232933",
            font: {
              size: 14,
              weight: 600,
            },
            labels: {
              value: {
                anchor: "end",
                align: "end",
                formatter(value, context) {
                  const sum = context.dataset.data.reduce((a, b) => a + b, 0);
                  const percentage = Math.round((value / sum) * 100);

                  return `${percentage}%`;
                },
              },
            },
          },
        },
      },
    };
  },
  methods: {
    getDebug(data) {
      console.log(data);
    },
  },
};
</script>
