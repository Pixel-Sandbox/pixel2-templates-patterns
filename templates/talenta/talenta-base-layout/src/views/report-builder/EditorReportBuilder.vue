<template>
  <mp-box>
    <mp-broadcast
      variant="information"
      icon-name="flag"
      content="Welcome to new Talenta Interface, this page is only prototype, not all action worked."
    />
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 100px)">
      <mp-box
        as="section"
        data-id="content"
        width="100%"
        height="calc(100vh - 100px)"
        overflow-y="auto"
        background-color="#F1F5F9"
        :padding="['4', '6']"
      >
        <mp-flex v-if="isInlineEdit" justify-content="space-between">
          <mp-flex gap="2" align-items="flex-start">
            <mp-form-control control-id="title">
              <mp-input v-model="title" width="416px" />
              <mp-form-help-text>
                Report name max. of 200 characters
              </mp-form-help-text>
            </mp-form-control>
            <mp-box>
              <mp-tooltip label="Cancel" position="bottom">
                <mp-button-icon
                  name="close"
                  size="md"
                  @click="handleInlineEditToggle(false)"
                />
              </mp-tooltip>
            </mp-box>
            <mp-box>
              <mp-tooltip label="Save" position="bottom">
                <mp-button-icon
                  name="check"
                  size="md"
                  @click="handleInlineEditToggle(false)"
                />
              </mp-tooltip>
            </mp-box>
          </mp-flex>
        </mp-flex>

        <mp-flex v-else justify-content="space-between">
          <mp-flex gap="2" align-items="center">
            <mp-heading as="h2" color="dark" font-size="xl">
              {{ title }}
            </mp-heading>
            <mp-box>
              <mp-tooltip label="Edit" position="bottom">
                <mp-button-icon
                  name="edit"
                  size="md"
                  @click="handleInlineEditToggle(true)"
                />
              </mp-tooltip>
            </mp-box>
            <mp-badge variant="solid" variant-color="gray" margin-left="4">
              Employment
            </mp-badge>
          </mp-flex>
          <mp-flex gap="2">
            <mp-button v-if="!isPreview" variant="outline" left-icon="help">
              Guidebook
            </mp-button>
            <mp-button
              variant="outline"
              :left-icon="isPreview ? 'close' : 'show'"
              @click="handlePreviewToggle"
            >
              {{ isPreview ? "Close preview" : "Preview" }}
            </mp-button>
          </mp-flex>
        </mp-flex>
        <mp-box
          background-color="white"
          border-radius="md"
          height="calc(100vh - 290px)"
          margin-top="6"
        >
          <mp-flex
            justify-content="space-between"
            align-items="center"
            padding="4"
          >
            <mp-text v-if="isRefresh" color="gray.600" font-size="sm">
              To see the latest edits, refresh the preview.
            </mp-text>
            <mp-text v-else color="gray.600" font-size="sm">
              Table preview have a limited number of record. Save and download
              the report to see the actual aggregate values.
            </mp-text>

            <mp-button
              v-if="isRefresh"
              variant="link"
              left-icon="refresh"
              @click="handleRefresh"
            >
              Refresh
            </mp-button>
          </mp-flex>
          <mp-box
            v-if="isRefresh"
            background-color="overlay"
            border-bottom-left-radius="md"
            border-bottom-right-radius="md"
            height="calc(100vh - 306px)"
          >
          </mp-box>
        </mp-box>
      </mp-box>
      <mp-box
        position="fixed"
        background="white"
        bottom="0"
        width="100%"
        padding-x="6"
        padding-y="5"
        margin-top="8"
        border-top="1px solid"
        border-color="gray.100"
        z-index="1"
      >
        <mp-flex gap="2" justify-content="right" align-items="center">
          <mp-button variant="ghost" @click="handleCancelModalToggle(true)">
            Cancel
          </mp-button>
          <mp-button variant="outline">Save</mp-button>
          <mp-button @click="handleDownloadModalToggle(true)">
            Save and download
          </mp-button>
        </mp-flex>
      </mp-box>
      <mp-flex v-if="!isPreview">
        <EditorPanelReportBuilder :handleDragMove="handleDragMove" />
      </mp-flex>
    </mp-flex>

    <EditorReportBuilderCancelModal
      :isModalOpen="isCancelModalOpen"
      :onModalToggle="handleCancelModalToggle"
    />
    <EditorReportBuilderDownloadModal
      :isModalOpen="isDownloadModalOpen"
      :onModalToggle="handleDownloadModalToggle"
      :onModalNext="handleImoprtModalToggle"
    />
    <EditorReportBuilderImportModal
      :isModalOpen="isImportModalOpen"
      :onModalToggle="handleImoprtModalToggle"
    />
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpText,
  MpTooltip,
  MpButtonIcon,
  MpBadge,
  MpHeading,
  MpButton,
  MpInput,
  MpFormControl,
  MpFormHelpText,
  MpBroadcast,
} from "@mekari/pixel";
import Header from "../../components/Header";
import EditorPanelReportBuilder from "./EditorPanelReportBuilder";
import EditorReportBuilderCancelModal from "./EditorReportBuilderCancelModal";
import EditorReportBuilderDownloadModal from "./EditorReportBuilderDownloadModal";
import EditorReportBuilderImportModal from "./EditorReportBuilderImportModal";

export default {
  name: "EditorReportBuilder",
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpTooltip,
    MpButtonIcon,
    MpBadge,
    MpHeading,
    MpButton,
    MpInput,
    MpFormControl,
    MpFormHelpText,
    MpBroadcast,
    Header,
    EditorPanelReportBuilder,
    EditorReportBuilderCancelModal,
    EditorReportBuilderDownloadModal,
    EditorReportBuilderImportModal,
  },
  data() {
    return {
      title: "Copy of Employment Report",
      isInlineEdit: false,
      isPreview: false,
      isRefresh: false,
      isCancelModalOpen: false,
      isDownloadModalOpen: false,
      isImportModalOpen: false,
    };
  },
  methods: {
    handlePreviewToggle() {
      this.isPreview = !this.isPreview;
    },
    handleDragMove() {
      this.isRefresh = true;
    },
    handleRefresh() {
      this.isRefresh = false;
    },
    handleCancelModalToggle: function (data) {
      this.isCancelModalOpen = data;
    },
    handleDownloadModalToggle: function (data) {
      this.isDownloadModalOpen = data;
    },
    handleInlineEditToggle: function (data) {
      this.isInlineEdit = data;
    },
    handleImoprtModalToggle: function (data) {
      this.isDownloadModalOpen = false;
      this.isImportModalOpen = data;
    },
  },
};
</script>