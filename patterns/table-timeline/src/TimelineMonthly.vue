<template>
  <mp-box display="flex" gap="6">
    <mp-box width="35%" flex="none">
      <mp-box
        height="65px"
        display="flex"
        align-items="center"
        border-bottom-width="1px"
      >
        <mp-text font-size="2xl" font-weight="semibold">
          Perintah kerja (Monthly)
        </mp-text>
      </mp-box>

      <template v-for="(data, index) in datas">
        <ParentItem
          :key="data.id"
          :is-open="data.isChildrenExpanded"
          :color="data.color"
          :title="data.product"
          :description="data.product"
          @toggle="
            datas[index].isChildrenExpanded = !datas[index].isChildrenExpanded
          "
        />

        <template v-if="data.isChildrenExpanded">
          <ChildItem
            v-for="children in data.childrens"
            :key="children.name"
            :title="children.name"
            :description="children.name"
            :color="children.color"
          />
        </template>
      </template>
    </mp-box>

    <mp-box
      ref="timelineContainer"
      id="timeline-container"
      border-width="1px"
      border-radius="md"
      :style="{
        width: 'calc(65% - 24px)',
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
          <TimelineMarker
            :timeline-container-height="timelineContainerHeight"
          />

          <mp-box
            v-for="(value, index) in getColumns"
            :key="index"
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
              <mp-text font-size="sm"> {{ value.month }} </mp-text>
            </mp-flex>

            <template v-if="index === 0">
              <template v-for="bar in datas">
                <Bar
                  :key="bar.id"
                  :bar-style="getBarPosition(bar.startDate, bar.finishDate)"
                  :bar-color="bar.color"
                />

                <!-- Children -->
                <template v-if="bar.isChildrenExpanded">
                  <Bar
                    v-for="barChild in bar.childrens"
                    :key="barChild.name"
                    :bar-style="
                      getBarPosition(barChild.startDate, barChild.finishDate)
                    "
                    :bar-color="barChild.color"
                  />
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
import { MpBox, MpFlex, MpText } from "@mekari/pixel";
import TimelineMarker from "./TimelineMarker.vue";
import Bar from "./components/Bar.vue";
import ParentItem from "./components/ParentItem.vue";
import ChildItem from "./components/ChildItem.vue";
import { generateFirstDatesOfYear, SHORT_MONTHS, MONTHS } from "./utils";

export default {
  components: {
    MpBox,
    MpFlex,
    MpText,
        TimelineMarker,
    Bar,
    ParentItem,
    ChildItem,
  },
  props: {
    defaultDate: {
      type: [String, Date],
      default: () => new Date(),
    },
    timeframe: {
      type: String,
      default: "monthly", // daily, weekly, monthly
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
      return this.currentDate.getFullYear();
    },
    /**
     * Computes the columns for the timeline based on the current timeframe.
     * @returns {Array} An array of dates or week labels depending on the timeframe.
     */
    getColumns() {
      const year = this.currentDate.getFullYear();
      const results = SHORT_MONTHS.map((month) => {
        return {
          month,
          year,
          date: generateFirstDatesOfYear(year),
        };
      });
      return results;
    },
  },
  mounted() {
    // Initialize the element height on mount
    this.timelineContainerHeight = this.$refs.timelineContainer.$el.height;

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
    getBarPosition() {
      // Base width for each day in the timeline
      const base = 83 / 30; // in px

      // Initialize width and translateX variables
      let width = 0;
      let translateX = 0;

      width = base * 2;
      translateX = base * 28;

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
