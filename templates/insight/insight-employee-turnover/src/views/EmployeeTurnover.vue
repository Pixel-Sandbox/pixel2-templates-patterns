<template>
  <mp-box>
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 60px)">
      <Sidebar is-alternate is-custom />
      <mp-box
        as="section"
        data-id="content"
        width="100%"
        height="calc(100vh - 60px)"
        overflow-y="auto"
        background-color="background"
        :margin-left="['0', '60px']"
        @scroll="onScroll"
      >
        <mp-flex
          justify="space-between"
          align-items="center"
          :padding-x="['4', '6']"
          :display="['inline-block', 'flex']"
          padding-y="1.063rem"
        >
          <mp-box>
            <mp-heading as="h1" font-size="2xl" font-weight="semibold">
              Employee turnover
            </mp-heading>
            <mp-text>Last updated: 1 Jan 2022, 12:12</mp-text>
          </mp-box>
          <mp-popover use-portal>
            <mp-popover-trigger>
              <mp-button variant="outline" right-icon="caret-down">
                Help
              </mp-button>
            </mp-popover-trigger>
            <mp-popover-content
              max-width="300px"
              bg="white"
              rounded="md"
              shadow="lg"
              border-width="1px"
              border-color="gray.400"
            >
              <mp-popover-list>
                <mp-popover-list-item>
                  <mp-box>
                    <mp-text>Guidebook</mp-text>
                    <mp-text font-size="sm" color="gray.600" is-truncated>
                      More information about employee turnover
                    </mp-text>
                  </mp-box>
                </mp-popover-list-item>
                <mp-popover-list-item>
                  <mp-box>
                    <mp-text>Product tour</mp-text>
                    <mp-text font-size="sm" color="gray.600">
                      Quick tour information
                    </mp-text>
                  </mp-box>
                </mp-popover-list-item>
              </mp-popover-list>
            </mp-popover-content>
          </mp-popover>
        </mp-flex>
        <EmployeeTurnoverFilter :isShow="showNavbar" :isRender="renderNavbar" />
        <mp-box
          min-height="calc(100vh - 132px)"
          padding-top="0"
          padding-bottom="6"
          padding-x="6"
        >
          <EmployeeTurnoverStat />
          <EmployeeTurnoverHeadcountTrend />
          <EmployeeTurnoverHeadcountRate />
          <EmployeeTurnoverResignReason />
          <EmployeeTurnoverList />
        </mp-box>
      </mp-box>
    </mp-flex>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpHeading,
  MpText,
  MpButton,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
} from "@mekari/pixel";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import EmployeeTurnoverFilter from "./EmployeeTurnoverFilter";
import EmployeeTurnoverStat from "./EmployeeTurnoverStat";
import EmployeeTurnoverHeadcountTrend from "./EmployeeTurnoverHeadcountTrend";
import EmployeeTurnoverResignReason from "./EmployeeTurnoverResignReason";
import EmployeeTurnoverHeadcountRate from "./EmployeeTurnoverHeadcountRate";
import EmployeeTurnoverList from "./EmployeeTurnoverList";

export default {
  name: "EmployeeTurnover",
  components: {
    MpBox,
    MpFlex,
    MpHeading,
    MpText,
    MpButton,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
    Header,
    Sidebar,
    EmployeeTurnoverFilter,
    EmployeeTurnoverStat,
    EmployeeTurnoverHeadcountTrend,
    EmployeeTurnoverHeadcountRate,
    EmployeeTurnoverResignReason,
    EmployeeTurnoverList,
  },
  data: function () {
    return {
      showNavbar: false,
      renderNavbar: false,
      lastScrollPosition: 0,
    };
  },
  methods: {
    onScroll(e) {
      const { scrollTop } = e.target;
      if (scrollTop < 0) {
        return;
      }

      if (Math.abs(scrollTop - this.lastScrollPosition) < 100) {
        return;
      }

      if (scrollTop > 100) {
        this.renderNavbar = true;
      } else {
        this.renderNavbar = false;
      }

      this.showNavbar = scrollTop < this.lastScrollPosition;

      this.lastScrollPosition = scrollTop;
    },
  },
};
</script>