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
      title="Reprimand trend"
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
          <mp-box
            height="38px"
            @mouseover="isOutside = false"
            @mouseleave="isOutside = true"
          >
            <mp-popover
              :is-open="isPopoverOpen"
              is-manual
              initial-focus-ref="#input-reprimand-filter"
            >
              <mp-popover-trigger>
                <mp-input-group margin-bottom="4">
                  <mp-input-right-addon :with-background="false">
                    <mp-icon name="chevrons-down" size="sm" />
                  </mp-input-right-addon>
                  <mp-input
                    id="input-reprimand-filter"
                    value="All type"
                    is-read-only
                    cursor="pointer"
                    @focus="handleFocus"
                    @blur="handleClickOutside"
                  />
                </mp-input-group>
              </mp-popover-trigger>
              <mp-popover-content
                max-width="214px"
                background-color="white"
                box-shadow="lg"
                border="1px solid"
                border-color="gray.400"
                border-radius="md"
                @click.native="handleForceInputFocus"
              >
                <mp-popover-list
                  border-radius="md"
                  max-height="400px"
                  overflow-y="auto"
                >
                  <mp-popover-list-item is-active>
                    All type
                  </mp-popover-list-item>
                  <mp-popover-list-item>
                    Surat Teguran Pertama
                  </mp-popover-list-item>
                  <mp-popover-list-item>
                    Surat Teguran Terakhir
                  </mp-popover-list-item>
                  <mp-popover-list-item>SP 1</mp-popover-list-item>
                  <mp-popover-list-item>SP 2</mp-popover-list-item>
                  <mp-popover-list-item>SP 3</mp-popover-list-item>
                </mp-popover-list>
              </mp-popover-content>
            </mp-popover>
          </mp-box>
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
                  :background="item.dataset.backgroundColor"
                />
                <mp-text font-size="sm"> Employee </mp-text>
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
  MpIcon,
  MpButton,
  MpCheckbox,
  MpDivider,
  MpInput,
  MpInputGroup,
  MpInputRightAddon,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
} from "@mekari/pixel";

export default {
  name: "NewActiveEmployeeReprimandTrend",
  components: {
    MpFlex,
    MpBox,
    MpChart,
    MpText,
    MpIcon,
    MpButton,
    MpCheckbox,
    MpDivider,
    MpInput,
    MpInputGroup,
    MpInputRightAddon,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
  },
  data() {
    return {
      isPopoverOpen: false,
      isFocused: false,
      isOutside: true,
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
              label: "Employee received reprimand",
              data: [
                135,
                200,
                350,
                450,
                170,
                235,
                400,
                350,
                350,
                470,
                470,
                350,
              ],
              backgroundColor: "#EF4444",
            },
          ],
        },
        options: {
          scales: {
            y: {
              min: 0,
              max: 500,
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
    // Popover
    handleFocus() {
      this.isFocused = true;
      if (!this.isPopoverOpen) this.handleOpenPopover();
      if (this.isPopoverOpen) this.handleForceInputFocus();
    },
    handleForceInputFocus() {
      if (this.isFocused) {
        const input = document.getElementById("input-reprimand-filter");
        input.focus();
      }
    },
    handleOpenPopover() {
      this.isPopoverOpen = true;
    },
    handleClosePopover() {
      this.isFocused = false;
      this.isPopoverOpen = false;
    },
    handleClickOutside() {
      if (this.isOutside) {
        this.handleClosePopover();
        this.isOutside = false;
      }
    },

    onHandleToggle() {
      this.isShow = !this.isShow;
    },
  },
};
</script>
