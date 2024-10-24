<template>
  <mp-box display="flex" gap="6">
    <mp-box width="280px" flex="none">
      <mp-box
        height="65px"
        display="flex"
        align-items="center"
        border-bottom-width="1px"
      >
        <mp-text font-size="2xl" font-weight="semibold">
          Perintah kerja (Daily)
        </mp-text>
      </mp-box>

      <template v-for="(data, index) in datas">
        <mp-flex
          :key="data.id"
          :border-bottom-width="data.isChildrenExpanded ? '0px' : '1px'"
          py="2"
          height="52px"
          align-items="center"
        >
          <MpButtonIcon
            name="caret-right"
            mr="2"
            transition="transform 300ms"
            :transform="
              data.isChildrenExpanded ? 'rotate(90deg)' : 'rotate(0deg)'
            "
            @click="
              datas[index].isChildrenExpanded = !datas[index].isChildrenExpanded
            "
          />
          <mp-box>
            <mp-flex align-items="center" gap="1">
              <mp-text is-link> WO-0000014 </mp-text>
              <mp-box h="12px" width="12px" rounded="sm" :bg="data.color" />
            </mp-flex>
            <mp-text color="gray.600" line-height="1sm" font-size="sm">
              Kusen pintu
            </mp-text>
          </mp-box>
        </mp-flex>

        <template v-if="data.isChildrenExpanded">
          <mp-flex
            v-for="children in data.childrens"
            :key="children.name"
            border-bottom-width="1px"
            py="2"
            height="52px"
            align-items="center"
            bg="gray.25"
            position="relative"
          >
            <mp-box
              position="absolute"
              top="0px"
              left="-2px"
              width="3px"
              bg="violet.400"
              h="full"
              z-index="10"
            />
            <mp-box pl="10">
              <mp-text color="dark"> {{ children.name }} </mp-text>
              <mp-text :color="children.color" line-height="1sm" font-size="sm">
                Kusen pintu
              </mp-text>
            </mp-box>
          </mp-flex>
        </template>
      </template>
    </mp-box>

    <mp-box
      ref="timelineContainer"
      id="timeline-container"
      border-width="1px"
      border-radius="md"
      :style="{
        width: 'calc(100% - 304px)',
      }"
    >
      <mp-flex
        align-items="center"
        justify-content="center"
        py="2"
        border-bottom-width="1px"
        h="32px"
      >
        <mp-text font-size="sm" text-transform="uppercase">
          {{ getHeaderLabel }}
        </mp-text>
      </mp-flex>

      <!-- Container for the timeline content -->
      <mp-box w="full">
        <mp-flex
          overflow-x="auto"
          overflow-y="hidden"
          position="relative"
          rounded-bottom-left="md"
          min-h="100vh"
        >
          <!-- Timeline marker -->
          <mp-box
            id="timeline-marker"
            position="absolute"
            top="24px"
            left="0px"
            display="flex"
            flex-direction="column"
            align-items="center"
            justify-content="center"
            z-index="100"
            :style="{
              transform: `translateX(${83 + 83 + 41.5 - 6}px)`,
            }"
          >
            <mp-box h="12px" w="12px" rounded="full" bg="red.400" />
            <mp-box
              w="1.5px"
              bg="red.400"
              :style="{
                height: timelineContainerHeight || 0 + 'px',
              }"
            />
          </mp-box>

          <mp-box
            v-for="(value, index) in getColumns"
            :key="value.getDate()"
            flex="none"
            width="83px"
            :border-left-width="index === 0 ? '0px' : '1px'"
            :bg="index % 2 === 0 ? 'gray.25' : 'white'"
            position="relative"
          >
            <mp-flex
              align-items="center"
              justify-content="center"
              border-bottom-width="1px"
              h="32px"
            >
              <mp-text font-size="sm"> {{ value.getDate() }} </mp-text>
            </mp-flex>

            <template v-if="index === 0">
              <template v-for="bar in datas">
                <mp-box
                  :key="bar.id"
                  height="52px"
                  display="flex"
                  align-items="center"
                  position="relative"
                >
                  <mp-box
                    cursor="pointer"
                    z-index="10"
                    position="absolute"
                    :bg="bar.color"
                    rounded="md"
                    h="24px"
                    :style="getBarPosition(bar.startDate, bar.finishDate)"
                  />
                </mp-box>

                <template v-if="bar.isChildrenExpanded">
                  <mp-box
                    v-for="barChild in bar.childrens"
                    :key="barChild.name"
                    height="52px"
                    display="flex"
                    align-items="center"
                    position="relative"
                  >
                    <mp-box
                      cursor="pointer"
                      z-index="10"
                      position="absolute"
                      :bg="barChild.color"
                      rounded="md"
                      h="24px"
                      transition="all 300ms ease"
                      :style="
                        getBarPosition(barChild.startDate, barChild.finishDate)
                      "
                    />
                  </mp-box>
                </template>
              </template>
            </template>
          </mp-box>
        </mp-flex>
      </mp-box>
    </mp-box>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpText,
  MpButtonIcon
} from "@mekari/pixel";

function getLastDateOfMonth(date) {
  // Convert the input to a Date object
  const givenDate = new Date(date);

  // Get the year and month from the given date
  const year = givenDate.getFullYear();
  const month = givenDate.getMonth();

  // Create a new Date object representing the last day of the month
  const lastDate = new Date(year, month + 1, 0);

  return lastDate;
}

function generateFirstDatesOfYear(year) {
  const dates = [];

  // Loop through all months (0 = January, 11 = December)
  for (let month = 0; month < 12; month++) {
    // Create a date representing the first day of each month
    const firstDate = new Date(year, month, 1);
    dates.push(firstDate);
  }

  return dates;
}

const SHORT_MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Mei",
  "Jun",
  "Jul",
  "Agu",
  "Sep",
  "Okt",
  "Nov",
  "Des",
];
const MONTHS = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

export default {
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpButtonIcon
  },
  props: {
    defaultDate: {
      type: [String, Date],
      default: () => new Date(),
    },
    timeframe: {
      type: String,
      default: "daily", // daily, weekly, monthly
    },
    shortMonths: {
      type: Array,
      default: () => SHORT_MONTHS,
    },
    months: {
      type: Array,
      default: () => MONTHS,
    },
  },
  data() {
    return {
      timelineContainerHeight: 0,
      resizeObserver: null, // to hold the ResizeObserver instance

      //
      currentDate: new Date("2024-01-01"),
      currentMarker: "2024-01-04",
      datas: [
        {
          id: "WO-0000014",
          product: "Kusen pintu",
          startDate: "2019-12-20",
          finishDate: "2027-01-08",
          color: "stone.100",
          isChildrenExpanded: true,
          childrens: [
            {
              name: "Pengambilan material",
              statusLabel: "Selesai",
              color: "leaf.100",
              startDate: "2024-01-03",
              finishDate: "2024-01-05",
            },
            {
              name: "Pengambilan material 2",
              statusLabel: "Sedang berlangsung",
              color: "amber.100",
              startDate: "2024-01-06",
              finishDate: "2024-01-06",
            },
            {
              name: "Pengambilan material 3",
              statusLabel: "Belum dimulai",
              color: "stone.100",
              startDate: "2024-01-05",
              finishDate: "2024-01-08",
            },
          ],
        },
        {
          id: "WO-0000013",
          product: "Lemari Kayu",
          startDate: "2024-01-10",
          finishDate: "2024-01-25",
          color: "amber.100",
          isChildrenExpanded: false,
          childrens: [
            {
              name: "Pengambilan material",
              statusLabel: "Selesai",
              color: "leaf.100",
              startDate: "2024-01-01",
              finishDate: "2024-01-02",
            },
            {
              name: "Pengambilan material",
              statusLabel: "Sedang berlangsung",
              color: "amber.100",
              startDate: "2024-01-01",
              finishDate: "2024-01-02",
            },
            {
              name: "Pengambilan material",
              statusLabel: "Belum dimulai",
              color: "stone.100",
              startDate: "2024-01-01",
              finishDate: "2024-01-02",
            },
          ],
        },
        {
          id: "WO-0000012",
          product: "Stand akrilik",
          startDate: "2024-01-01",
          finishDate: "2024-01-12",
          color: "stone.100",
          isChildrenExpanded: false,
          childrens: [
            {
              name: "Pengambilan material",
              statusLabel: "Selesai",
              color: "leaf.100",
              startDate: "2024-01-01",
              finishDate: "2024-01-02",
            },
            {
              name: "Pengambilan material",
              statusLabel: "Sedang berlangsung",
              color: "amber.100",
              startDate: "2024-01-01",
              finishDate: "2024-01-02",
            },
            {
              name: "Pengambilan material",
              statusLabel: "Belum dimulai",
              color: "stone.100",
              startDate: "2024-01-01",
              finishDate: "2024-01-02",
            },
          ],
        },
      ],
    };
  },
  computed: {
    /**
     * Computes the header label based on the current timeframe.
     * @returns {string | array} The appropriate header label for the current timeframe.
     */
    getHeaderLabel() {
      // DAILY
      if (this.timeframe === "daily") {
        return MONTHS[this.currentDate.getMonth() || 0];
      }

      // WEEKLY
      if (this.timeframe === "weekly") {
        return MONTHS;
      }

      // MONTHLY
      if (this.timeframe === "weekly") {
        return this.currentDate.getFullYear();
      }

      return "";
    },
    /**
     * Computes the columns for the timeline based on the current timeframe.
     * @returns {Array} An array of dates or week labels depending on the timeframe.
     */
    getColumns() {
      // DAILY
      if (this.timeframe === "daily") {
        const month = this.currentDate.getMonth();
        const year = this.currentDate.getFullYear();

        return this.generateDates(month, year);
      }

      // WEEKLY
      if (this.timeframe === "weekly") {
        return MONTHS.map(() => ["W1", "W2", "W3", "W4"]);
      }

      // MONTHLY
      if (this.timeframe === "monthly") {
        const year = this.currentDate.getFullYear();
        return generateFirstDatesOfYear(year);
      }

      return [];
    },
  },
  mounted() {
    // Initialize the element height on mount
    this.timelineContainerHeight = this.$refs.timelineContainer.$el;

    // Create a ResizeObserver instance and observe the element
    this.resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        this.timelineContainerHeight = entry.contentRect.height;
      }
    });

    // Observe the element for changes
    this.resizeObserver.observe(this.$refs.timelineContainer.$el);
  },
  beforeDestroy() {
    // Disconnect the ResizeObserver to prevent memory leaks
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  },
  methods: {
    /**
     * Generates an array of dates for a given month and year.
     * @param {number} month - The month (0-11) to generate dates for.
     * @param {number} year - The year to generate dates for.
     * @returns {Date[]} An array of Date objects representing each day in the month.
     */
    generateDates(month, year) {
      const dates = [];
      // month is zero-indexed (0 = January, 11 = December)
      const date = new Date(year, month, 1);

      while (date.getMonth() === month) {
        dates.push(new Date(date));
        date.setDate(date.getDate() + 1);
      }

      return dates;
    },
    /**
     * Calculates the position and width of a bar in the timeline.
     * @param {string} fromDate - The start date of the bar.
     * @param {string} finishDate - The end date of the bar.
     * @returns {Object} An object containing the width and transform properties for positioning the bar.
     */
    getBarPosition(fromDate, finishDate) {
      // Base width for each day in the timeline
      const base = 83; // in px

      // Initialize width and translateX variables
      let width = 0;
      let translateX = 0;

      // Create Date objects for current date, start date, and end date
      const currentDate = new Date(this.currentDate);
      let startDate = new Date(fromDate);
      let endDate = new Date(finishDate);

      // If the start date is after the current date, return zero width and no translation
      if (startDate > endDate) {
        console.warn(
          "[Timeline] Invalid date range: Start date cannot be greater than end date"
        );

        return {
          width: `${0}px`,
          transform: `translateX(${0}px)`,
        };
      }

      // Adjust start date if it's before the current date
      if (startDate < currentDate) {
        startDate = currentDate;
      }

      // Adjust end date if it's after the last day of the current month
      const lastDateOfMonth = getLastDateOfMonth(currentDate);
      if (endDate > lastDateOfMonth) {
        endDate = lastDateOfMonth;
      }

      // Check if the start date is in the current month and year
      if (
        startDate.getMonth() === this.currentDate.getMonth() &&
        startDate.getFullYear() === this.currentDate.getFullYear()
      ) {
        // Calculate the number of days the bar spans
        const barDays = endDate.getDate() - startDate.getDate() + 1;

        // Calculate the offset from the start of the month
        const offsetDays = startDate.getDate() - this.currentDate.getDate();

        // Calculate width and position
        const barWidth = barDays * base;
        const barTranslateX = offsetDays * base;

        // Return the calculated width and translation
        return {
          width: `${barWidth}px`,
          transform: `translateX(${barTranslateX}px)`,
        };
      }

      return {
        width: `${width}px`,
        transform: `translateX(${translateX}px)`,
      };
    },
    calculateSum(...numbers) {
      return numbers.reduce((sum, number) => sum + number, 0);
    },
  },
};
</script>
