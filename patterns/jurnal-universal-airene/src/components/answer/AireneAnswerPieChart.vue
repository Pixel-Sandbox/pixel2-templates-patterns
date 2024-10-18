<template>
  <mp-box
    data-component="AireneAnswerPieChart"
    :border-width="showInFullView ? 0 : 1"
    :rounded="showInFullView ? 'none' : 'md'"
    :p="showInFullView ? 0 : 2"
    bg="white"
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
          <mp-flex justify="space-between" pb="3">
            <mp-text font-weight="semibold"> {{ xLabel }} </mp-text>

            <mp-text font-weight="semibold"> {{ yLabel }} </mp-text>
          </mp-flex>
          <mp-flex
            v-for="(item, index) in legend"
            :key="index"
            cursor="pointer"
            justify="space-between"
            border-bottom-color="gray.100"
            border-top-width="1px"
            border-style="solid"
            pt="3"
            pb="3"
            gap="1"
          >
            <mp-flex>
              <mp-box
                flex="none"
                width="3"
                height="3"
                mr="2"
                border-radius="3px"
                :background="item.fillStyle"
              />
              <mp-text font-size="sm" line-height="1sm">
                {{ item.text }}
              </mp-text>
            </mp-flex>

            <mp-flex gap="1">
              <mp-text color="gray.600" font-size="sm">
                {{ getData(index).percentage }}
              </mp-text>
              <mp-text font-size="sm"> {{ getData(index).amount }} </mp-text>
            </mp-flex>
          </mp-flex>
        </mp-flex>
      </template>
    </mp-chart>
  </mp-box>
</template>

<script>
import { MpFlex, MpBox, MpChart, MpText } from "@mekari/pixel";

export default {
  name: "PieChart",
  components: {
    MpChart,
    MpFlex,
    MpBox,
    MpText,
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
      };
    },
  },
  methods: {
    getData(index) {
      const data = this.datasets[0].data;
      const amount = data[index];
      const totalAmount = data.reduce((a, b) => a + b, 0);
      const percentage = Math.round((amount / totalAmount) * 100);

      const formattedAmount = amount
        .toLocaleString("id-ID", {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })
        .replace(/\./g, ",")
        .replace(/,/g, ".");

      return {
        percentage: `${percentage}%`,
        amount: formattedAmount,
      };
    },
  },
};
</script>
