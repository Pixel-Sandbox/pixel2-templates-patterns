<template>
  <mp-box width="340px">
    <mp-box @mouseover="isOutside = false" @mouseleave="isOutside = true">
      <mp-popover
        id="advanced-datepicker"
        :is-open="isPopoverOpen"
        is-manual
        initial-focus-ref="#input-advanced-calendar"
      >
        <mp-popover-trigger>
          <mp-input-group>
            <mp-input
              id="input-advanced-calendar"
              placeholder="Select date"
              :value="getFormattedValue"
              is-read-only
              @focus="handleFocus"
              @blur="handleClickOutside"
            />
            <mp-input-right-addon :with-background="false">
              <mp-icon name="calendar" size="sm" @click.native="handleFocus" />
            </mp-input-right-addon>
          </mp-input-group>
        </mp-popover-trigger>

        <mp-popover-content
          max-width="412px"
          background-color="white"
          rounded="md"
          shadow="lg"
          border-width="1px"
          border-color="gray.400"
          @click.native="handleForceInputFocus"
        >
          <mp-flex position="relative" flex-direction="column-reverse">
            <mp-popover-list align-items="flex-start">
              <mp-popover-list-item cursor="default!important" is-disabled>
                <mp-text font-size="sm" color="gray.600">SHOW DATE BY</mp-text>
              </mp-popover-list-item>
              <mp-box padding-x="3" padding-bottom="2">
                <mp-radio-group
                  spacing="1"
                  :value="selectionShowDateBy"
                  @change="handleSelectShowDateBy"
                >
                  <mp-radio value="Full month">Full month</mp-radio>
                  <mp-radio value="Cutoff payroll">Cutoff payroll</mp-radio>
                  <mp-radio value="Cutoff attendance">
                    Cutoff attendance
                  </mp-radio>
                </mp-radio-group>
              </mp-box>
            </mp-popover-list>
            <mp-divider margin-x="3" margin-y="0" />
            <mp-box v-if="!isShowDatePicker">
              <mp-popover-list>
                <mp-popover-list-item cursor="default!important" is-disabled>
                  <mp-text font-size="sm" color="gray.600">TIME RANGE</mp-text>
                </mp-popover-list-item>
                <mp-popover-list-item
                  :is-active="selectionTimeRange === 'Last 12 months'"
                  @click="handleSelectTimeRange('Last 12 months')"
                >
                  <mp-text> Last 12 months </mp-text>
                  <mp-text>
                    {{ formatDate(getDate(-365)) }} - this month
                  </mp-text>
                </mp-popover-list-item>
                <mp-popover-list-item
                  :is-active="selectionTimeRange === 'Last 6 months'"
                  @click="handleSelectTimeRange('Last 6 months')"
                >
                  <mp-text> Last 6 months </mp-text>
                  <mp-text>
                    {{ formatDate(getDate(-182)) }} - this month
                  </mp-text>
                </mp-popover-list-item>
                <mp-popover-list-item
                  :is-active="selectionTimeRange === 'Last 3 months'"
                  @click="handleSelectTimeRange('Last 3 months')"
                >
                  <mp-text> Last 3 months </mp-text>
                  <mp-text>
                    {{ formatDate(getDate(-91)) }} - this month
                  </mp-text>
                </mp-popover-list-item>
                <mp-popover-list-item
                  :is-active="selectionTimeRange === 'Per year'"
                  @click="handleSelectTimeRange('Per year')"
                >
                  Per year
                </mp-popover-list-item>
              </mp-popover-list>
            </mp-box>

            <mp-box v-else p="3" width="full">
              <mp-date-picker
                :key="selectionTimeRange"
                v-model="value"
                inline
                :events="[]"
                is-disable-header
                :disabled-year="handleDisabledYear"
                :type="datePickerType"
                :range="isRangeDatePicker"
                @change="handleChangeDate"
                @drag="handleDragDateRange"
              >
                <template #sidebar>
                  <mp-box width="122px" ml="-3" mt="-3">
                    <mp-popover-list>
                      <mp-popover-list-item
                        cursor="default!important"
                        is-disabled
                      >
                        <mp-text font-size="sm" color="gray.600">
                          TIME RANGE
                        </mp-text>
                      </mp-popover-list-item>
                      <mp-popover-list-item
                        :is-active="selectionTimeRange === 'Last 12 months'"
                        @click="handleSelectTimeRange('Last 12 months')"
                      >
                        <mp-text> Last 12 months </mp-text>
                      </mp-popover-list-item>
                      <mp-popover-list-item
                        :is-active="selectionTimeRange === 'Last 6 months'"
                        @click="handleSelectTimeRange('Last 6 months')"
                      >
                        <mp-text> Last 6 months </mp-text>
                      </mp-popover-list-item>
                      <mp-popover-list-item
                        :is-active="selectionTimeRange === 'Last 3 months'"
                        @click="handleSelectTimeRange('Last 3 months')"
                      >
                        <mp-text> Last 3 months </mp-text>
                      </mp-popover-list-item>
                      <mp-popover-list-item
                        :is-active="selectionTimeRange === 'Per year'"
                        @click="handleSelectTimeRange('Per year')"
                      >
                        Per year
                      </mp-popover-list-item>
                    </mp-popover-list>
                  </mp-box>
                </template>
              </mp-date-picker>
            </mp-box>

            <mp-box
              v-if="isShowDatePicker && getSelectionInformation"
              position="absolute"
              top="204px"
              right="3"
            >
              <mp-text color="gray.600" font-size="sm">
                {{ getSelectionInformation }}
              </mp-text>
            </mp-box>
          </mp-flex>
        </mp-popover-content>
      </mp-popover>
    </mp-box>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpText,
  MpInputGroup,
  MpInput,
  MpInputRightAddon,
  MpIcon,
  MpDatePicker,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
  MpDivider,
  MpRadio,
  MpRadioGroup,
} from "@mekari/pixel";

export default {
  name: "AdvancedDatepicker",
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpInputGroup,
    MpInput,
    MpInputRightAddon,
    MpIcon,
    MpDatePicker,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
    MpDivider,
    MpRadio,
    MpRadioGroup,
  },
  data: function () {
    return {
      // Popover
      isPopoverOpen: false,
      isFocused: false,
      isOutside: true,
      activeTimeRange: "Last 12 months",
      selectionTimeRange: "",
      selectionShowDateBy: "Full month",
      selectionValue: "",

      // Date Picker
      datePickerType: "",
      value: [this.getDate(-365), new Date()],
    };
  },
  computed: {
    getFormattedValue() {
      if (this.value) {
        if (this.activeTimeRange === "Today") {
          return `Today (${this.formatDate(this.value)})`;
        }

        if (this.activeTimeRange === "Last 12 months") {
          return `Last 12 months (${this.formatDate(
            this.value[0]
          )} - this month)`;
        }

        if (this.activeTimeRange === "Last 6 months") {
          return `Last 6 months (${this.formatDate(
            this.value[0]
          )} - this month)`;
        }

        if (this.activeTimeRange === "Last 3 months") {
          return `Last 3 months (${this.formatDate(
            this.value[0]
          )} - this month)`;
        }

        if (this.activeTimeRange === "Per year") {
          const from = this.value;
          const to = new Date(`${this.value.getFullYear()}-12-31`);

          return `Per year (${this.formatDate(from)} - ${this.formatDate(to)})`;
        }
      }

      return "";
    },
    getSelectionInformation() {
      if (this.selectionValue) {
        if (this.selectionTimeRange === "Per year")
          return this.selectionValue.getFullYear();
      } else {
        if (this.selectionTimeRange === "Per year") return "Select a year";
        return "";
      }

      return "";
    },
    isShowDatePicker() {
      const datepickerTypes = ["Per year"];
      if (datepickerTypes.includes(this.selectionTimeRange)) return true;

      return false;
    },
    isRangeDatePicker() {
      return false;
    },
  },
  watch: {
    selectionTimeRange(newValue) {
      if (this.activeTimeRange !== newValue) {
        this.selectionValue = "";
      } else {
        this.selectionValue = this.value;
      }
    },
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
        const input = document.getElementById("input-advanced-calendar");
        input.focus();
      }
    },
    handleOpenPopover() {
      this.isPopoverOpen = true;

      this.selectionTimeRange = this.activeTimeRange;
      this.selectionValue = this.value;
    },
    handleClosePopover() {
      this.isFocused = false;
      this.isPopoverOpen = false;

      this.selectionValue = "";
    },
    handleClickOutside() {
      if (this.isOutside) {
        this.handleClosePopover();
        this.isOutside = false;
      }
    },

    // Advanced Calendar
    handleDisabledYear(year) {
      return (
        year <= new Date().getFullYear() - 2 ||
        year >= new Date().getFullYear() + 1
      );
    },
    handleSelectTimeRange(value) {
      this.selectionTimeRange = value;

      // Shortcut
      if (this.selectionTimeRange === "Today") this.handleSelectShortcut(0);
      if (this.selectionTimeRange === "Last 12 months")
        this.handleSelectShortcut(-365);
      if (this.selectionTimeRange === "Last 6 months")
        this.handleSelectShortcut(-182);
      if (this.selectionTimeRange === "Last 3 months")
        this.handleSelectShortcut(-91);

      // Date Picker
      if (this.selectionTimeRange === "Per year") this.datePickerType = "year";
    },
    handleSelectShowDateBy(value) {
      this.selectionShowDateBy = value;
    },
    handleSelectShortcut(value) {
      if (value === 0) {
        this.value = new Date();
      }

      if (value !== 0) {
        this.value = [this.getDate(value), new Date()];
      }

      this.handleChangeDate(this.value);
    },
    handleChangeDate(e) {
      console.log("CHANGE :", e);
      this.activeTimeRange = this.selectionTimeRange;
    },
    handleDragDateRange(e) {
      console.log("RANGE :", e);
      this.selectionValue = e;
    },

    // Utils
    formatDate(date, isShortMonth = true) {
      const toDate = new Date(date);

      const month = this.getMonthName(toDate.getMonth(), isShortMonth);
      const year = toDate.getFullYear();

      return `${month} ${year}`;
    },
    getDate(value) {
      var date = new Date();

      if (value < 0) date.setDate(date.getDate() - Math.abs(value));
      else date.setDate(date.getDate() + value);

      return date;
    },
    getMonthName(index, isShort) {
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      if (isShort) return months[index].slice(0, 3);
      return months[index];
    },
    getFirstDayPreviousMonth(value) {
      const date = new Date();
      const prevMonth = date.getMonth() - value;
      const firstDay = 1;

      return new Date(date.getFullYear(), prevMonth, firstDay);
    },
  },
};
</script>