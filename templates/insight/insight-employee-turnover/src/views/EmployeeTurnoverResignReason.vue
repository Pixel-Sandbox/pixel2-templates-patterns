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
      title="Resign reason"
      :type="basic.type"
      :data="basic.data"
      :options="basic.options"
      color-pattern=""
      :color-start="9"
      :is-show-data-labels="isShow"
      :is-horizontal="true"
    >
      <template #action>
        <mp-flex gap="4" align-items="center">
          <mp-checkbox :is-checked="isShow" @change="onHandleToggle">
            Show value number
          </mp-checkbox>
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
                <mp-flex align="center">
                  <mp-text font-size="sm" color="red.500"> ↓10% </mp-text>
                </mp-flex>
                <mp-text font-size="sm" font-weight="semibold" margin-left="1">
                  {{ item.formattedValue }}
                </mp-text>
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
  MpIcon,
  MpButton,
  MpCheckbox,
  MpInput,
  MpInputGroup,
  MpInputLeftAddon,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
  MpText,
  MpDivider,
} from "@mekari/pixel";

export default {
  name: "EmployeeTurnoverResignReason",
  components: {
    MpFlex,
    MpBox,
    MpChart,
    MpIcon,
    MpButton,
    MpCheckbox,
    MpInput,
    MpInputGroup,
    MpInputLeftAddon,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
    MpText,
    MpDivider,
  },
  data() {
    return {
      isShow: true,
      basic: {
        type: "bar",
        data: {
          labels: [
            "Mengundurkan diri tanpa tekanan",
            "Pekerja memasuki usia pensiun",
            "Tidak lulus masa percobaan",
            ["Keterbatasan dalam", "perkembangan skill"],
            "Tanpa alasan",
            ["Keterbatasan pada perkembangan", "skill dan ilmu"],
          ],
          datasets: [
            {
              label: "All resigned employee",
              data: [9, 8, 8, 4, 4, 2],
            },
          ],
        },
        options: {
          interaction: {
            intersect: false,
            mode: "index",
            axis: "y",
          },
          scales: {
            y: {
              min: 0,
              max: 500,
              ticks: {
                padding: 10,
                stepSize: 100,
              },
            },
            x: {
              ticks: {
                padding: 10,
              },
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
