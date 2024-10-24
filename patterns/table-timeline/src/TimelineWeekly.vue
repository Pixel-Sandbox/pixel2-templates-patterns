<template>
  <mp-box display="flex" gap="6">
    <mp-box width="20%" flex="none">
      <mp-box
        position="sticky"
        top="0"
        z-index="50"
        height="65px"
        display="flex"
        align-items="center"
        border-bottom-width="1px"
        bg="white"
      >
        <mp-text font-size="2xl" font-weight="semibold">
          Perintah kerja (Weekly)
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
      overflow="hidden"
      border-width="1px"
      border-radius="md"
      :style="{
        width: 'calc(80% - 24px)',
      }"
    >
      <!-- Container for the timeline content -->
      <mp-box w="full">
        <mp-flex
          overflow-x="auto"
          overflow-y="hidden"
          position="relative"
          rounded-bottom-left="md"
          min-h="100vh"
          display="flex"
          flex-direction="column"
        >
          <mp-flex
            id="timeline-header"
            position="sticky"
            :style="{
              top: `${headerTopPosition - 1}px`,
              transition: 'top 0.2s ease-out',
            }"
            z-index="50"
            bg="white"
          >
            <mp-flex
              v-for="(month, index) in months"
              :key="month"
              align-items="center"
              justify-content="center"
              border-bottom-width="1px"
              :border-left-width="index === 0 ? '0px' : '1px'"
              :bg="index % 2 === 0 ? 'gray.25' : 'white'"
              h="32px"
              width="332px"
              flex="none"
            >
              <mp-text font-size="sm"> {{ month }} </mp-text>
            </mp-flex>
          </mp-flex>

          <mp-flex min-h="100vh">
            <!-- Timeline marker -->
            <TimelineMarker
              top="56px"
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
                z-index="50"
              >
                <mp-text font-size="sm"> {{ value.week }} </mp-text>
              </mp-flex>

              <template v-if="index === 0">
                <template v-for="bar in datas">
                  <Bar
                    :key="bar.id"
                    :bar-style="getBarPosition(bar.startDate, bar.finishDate)"
                    :bar-color="bar.color"
                    @hover="(e) => onBarHover(e, bar)"
                    @leave="onBarLeave"
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
                      @hover="(e) => onBarHover(e, barChild)"
                      @leave="onBarLeave"
                    />
                  </template>
                </template>
              </template>
            </mp-box>
          </mp-flex>
        </mp-flex>
      </mp-box>
    </mp-box>

    <mp-box
      ref="tooltip"
      px="2"
      py="1"
      rounded="sm"
      shadow="sm"
      font-size="sm"
      bg="overlay"
      color="white"
      z-index="100"
      pointer-events="none"
      :style="{
        visibility: isShowTooltip ? 'visible' : 'hidden',
        position: 'absolute',
        top: '0',
        left: '0',
        transform: `translate(${tooltipX}px, ${tooltipY}px)`,
        transition: isEnableTransition ? 'transform 300ms ease-out' : 'none',
      }"
    >
      {{ tooltipContent }}
    </mp-box>
  </mp-box>
</template>

<script>
import { MpBox, MpFlex, MpText } from "@mekari/pixel";
import TimelineMarker from "./TimelineMarker.vue";
import Bar from "./components/Bar.vue";
import ParentItem from "./components/ParentItem.vue";
import ChildItem from "./components/ChildItem.vue";
import { SHORT_MONTHS, MONTHS } from "./utils";
import { computePosition, flip, shift, offset } from "@floating-ui/dom";

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
      isShowTooltip: false,
      isEnableTransition: false,
      tooltipContent: "",

      timelineContainerHeight: 0,
      resizeObserver: null, // to hold the ResizeObserver instance
      tooltipX: 0,
      tooltipY: 0,
      virtualElement: { getBoundingClientRect: () => ({}) },

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
      headerTopPosition: 0,
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
      let results = [];
      const WEEK_LABELS = ["M1", "M2", "M3", "M4"];
      SHORT_MONTHS.forEach((month) => {
        WEEK_LABELS.forEach((week) => {
          results.push({
            week,
            month,
            year: "2024",
            date: [new Date(), new Date()],
          });
        });
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

    window.addEventListener("scroll", this.updateTooltipPosition);
    window.addEventListener("resize", this.updateTooltipPosition);

    // Use requestAnimationFrame for smooth scrolling
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    // Disconnect the ResizeObserver to prevent memory leaks
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }

    window.removeEventListener("scroll", this.updateTooltipPosition);
    window.removeEventListener("resize", this.updateTooltipPosition);

    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onBarHover(event, data) {
      this.isShowTooltip = true;
      this.tooltipContent = data.product || data.name; // Set this to whatever you want to display
      this.virtualElement.getBoundingClientRect = () => ({
        width: 0,
        height: 0,
        top: event.clientY,
        left: event.clientX,
        right: event.clientX,
        bottom: event.clientY,
      });
      this.updateTooltipPosition();
    },

    onBarLeave() {
      this.isShowTooltip = false;
    },

    updateTooltipPosition() {
      if (this.isShowTooltip) {
        computePosition(this.virtualElement, this.$refs.tooltip.$el, {
          placement: "top",
          middleware: [offset(16), flip(), shift({ padding: 8 })],
        }).then(({ x, y }) => {
          this.tooltipX = x;
          this.tooltipY = y;
        });

        if (!this.isEnableTransition) {
          setTimeout(() => {
            this.isEnableTransition = true;
          }, 300);
        }
      }
    },

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
      const base = 83 / 7; // in px

      // Initialize width and translateX variables
      let width = 0;
      let translateX = 0;

      width = base * 7 * 10;
      translateX = base * 28;

      return {
        width: `${width}px`,
        transform: `translateX(${translateX}px)`,
      };
    },

    onScroll() {
      requestAnimationFrame(this.updateHeaderPosition);
    },

    updateHeaderPosition() {
      const header = document.getElementById("timeline-header");
      const container = this.$refs.timelineContainer.$el;
      const containerRect = container.getBoundingClientRect();
      const headerHeight = header.offsetHeight;

      if (containerRect.top < 0 && containerRect.bottom > headerHeight) {
        // Container is scrolled up, but still visible
        const newTopPosition = Math.max(0, -containerRect.top);
        if (Math.abs(newTopPosition - this.headerTopPosition) > 1) {
          this.headerTopPosition = newTopPosition;
        }
      } else {
        // Container is fully visible or scrolled out of view
        this.headerTopPosition = 0;
      }
    },
  },
};
</script>
