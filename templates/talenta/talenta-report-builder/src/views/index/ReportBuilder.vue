<template>
  <mp-box>
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 60px)">
      <Sidebar default-is-toggle is-custom />
      <SidebarChild />
      <mp-box
        as="section"
        data-id="content"
        width="100%"
        height="calc(100vh - 60px)"
        overflow-y="auto"
        background-color="background"
      >
        <mp-flex
          justify="space-between"
          align-items="center"
          :padding-x="['4', '6']"
          :display="['inline-block', 'flex']"
          padding-y="1.063rem"
        >
          <mp-box height="12">
            <mp-text font-size="sm" is-link>Company</mp-text>
            <mp-heading as="h1" font-size="2xl" font-weight="semibold">
              Report builder
            </mp-heading>
          </mp-box>

          <mp-box
            :width="['100%', 'auto']"
            :position="['fixed', 'relative']"
            :top="['100%', '0']"
            :left="['50%', '0']"
            :transform="['translate(-50%, -100%)', 'translate(0%, 0%)']"
            :border-top="['1px solid', '0px solid']"
            :padding-y="['2', '0']"
            :padding-x="['4', '0']"
            :background-color="['white', 'transparent']"
            border-color="gray.100"
            z-index="100"
          >
            <mp-flex gap="2" :flex-direction="['column-reverse', 'row']">
              <mp-button variant="outline" left-icon="help">
                Guidebook
              </mp-button>
              <mp-button variant="outline" left-icon="dashboard">
                Insight
              </mp-button>
              <mp-button right-icon="caret-down" :display="['block', 'none']">
                Create report
              </mp-button>
              <mp-popover use-portal>
                <mp-popover-trigger>
                  <mp-button
                    right-icon="caret-down"
                    :display="['none', 'block']"
                  >
                    Create report
                  </mp-button>
                </mp-popover-trigger>
                <mp-popover-content
                  max-width="192px"
                  bg="white"
                  rounded="md"
                  shadow="lg"
                  border="1px solid"
                  border-color="gray.400"
                >
                  <mp-popover-list display="grid">
                    <mp-popover-list-item as="router-link" to="/create">
                      Create pivot report
                      <mp-badge
                        variant="solid"
                        variant-color="red"
                        size="sm"
                        margin-left="2"
                      >
                        New
                      </mp-badge>
                    </mp-popover-list-item>
                    <mp-popover-list-item>
                      Create basic report
                    </mp-popover-list-item>
                  </mp-popover-list>
                </mp-popover-content>
              </mp-popover>
            </mp-flex>
          </mp-box>
        </mp-flex>
        <mp-flex
          justify="space-between"
          align-items="center"
          :padding-x="['4', '6']"
        >
          <mp-tabs @change="handleTab">
            <mp-tab-list margin-bottom="0" border-bottom="0">
              <mp-tab>Basic report</mp-tab>
              <mp-tab>
                Pivot report
                <mp-badge
                  variant="solid"
                  variant-color="red"
                  size="sm"
                  margin-left="2"
                >
                  New
                </mp-badge>
              </mp-tab>
            </mp-tab-list>
          </mp-tabs>
        </mp-flex>
        <mp-box
          min-height="calc(100vh - 192px)"
          border-top-width="1px"
          background-color="white"
          :padding="['4', '6']"
          :padding-bottom="['32', '0']"
        >
          <mp-box v-if="this.tabIndex === 0">
            <ReportBuilderTabA />
          </mp-box>
          <mp-box v-if="this.tabIndex === 1">
            <ReportBuilderTabB />
          </mp-box>
        </mp-box>
      </mp-box>
    </mp-flex>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpText,
  MpHeading,
  MpButton,
  MpTabs,
  MpTabList,
  MpTab,
  MpBadge,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
} from "@mekari/pixel";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import SidebarChild from "../../components/SidebarChild";
import ReportBuilderTabA from "./ReportBuilderTabA";
import ReportBuilderTabB from "./ReportBuilderTabB";

export default {
  name: "ReportBuilder",
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpHeading,
    MpButton,
    MpTabs,
    MpTabList,
    MpTab,
    MpBadge,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
    Header,
    Sidebar,
    SidebarChild,
    ReportBuilderTabA,
    ReportBuilderTabB,
  },
  data: function () {
    return {
      tabIndex: 0,
    };
  },
  methods: {
    handleTab: function (e) {
      this.tabIndex = e;
    },
  },
};
</script>