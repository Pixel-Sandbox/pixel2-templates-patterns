<template>
  <mp-box>
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 60px)">
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
          padding-x="6"
          padding-y="1.063rem"
        >
          <mp-box height="12">
            <mp-text font-size="sm" is-link>Approval</mp-text>
            <mp-heading as="h1" font-size="2xl" font-weight="bold">
              Time off request
            </mp-heading>
          </mp-box>
          <mp-flex gap="2">
            <mp-button variant="outline" @click="onPreviewModalToggle(true)">
              Preview approval layer
            </mp-button>
            <mp-popover use-portal>
              <mp-popover-trigger>
                <mp-button variant="primary" right-icon="caret-down">
                  Create
                </mp-button>
              </mp-popover-trigger>
              <mp-popover-content
                max-width="48"
                bg="white"
                rounded="md"
                shadow="lg"
                border="1px solid"
                border-color="gray.400"
              >
                <mp-popover-list display="grid">
                  <mp-popover-list-item
                    as="router-link"
                    to="/time-off-request/create"
                  >
                    New approval
                  </mp-popover-list-item>
                  <mp-popover-list-item>Existing approval</mp-popover-list-item>
                </mp-popover-list>
              </mp-popover-content>
            </mp-popover>
          </mp-flex>
        </mp-flex>
        <mp-box
          min-height="calc(100vh - 142px)"
          border-top-width="1px"
          background-color="white"
          padding="6"
        >
          <TimeOffRequestFilter />
          <TimeOffRequestTable />
          <TimeOffRequestPreviewModal
            :isModalOpen="isPreviewModalOpen"
            :onModalToggle="onPreviewModalToggle"
          />
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
import Header from "../../components/Header";
import TimeOffRequestFilter from "./TimeOffRequestFilter";
import TimeOffRequestTable from "./TimeOffRequestTable";
import TimeOffRequestPreviewModal from "./TimeOffRequestPreviewModal";

export default {
  name: "TimeOffRequest",
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
    TimeOffRequestFilter,
    TimeOffRequestTable,
    TimeOffRequestPreviewModal,
  },
  data: function () {
    return {
      isPreviewModalOpen: false,
    };
  },
  methods: {
    onPreviewModalToggle: function (data) {
      this.isPreviewModalOpen = data;
    },
  },
};
</script>