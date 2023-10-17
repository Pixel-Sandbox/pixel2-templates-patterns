<template>
  <mp-box>
    <mp-table-container width="full" max-width="full" overflow="scroll">
      <mp-table>
        <mp-table-head>
          <mp-table-row cursor="pointer">
            <mp-table-cell as="th">
              Report name
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Description
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Type
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Created by
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th" colspan="2">
              Last updated by
              <mp-icon name="sort-default" />
            </mp-table-cell>
          </mp-table-row>
        </mp-table-head>
        <mp-table-body>
          <mp-table-row>
            <mp-table-cell as="td" vertical-align="top">
              <mp-text is-link>Daily Attendance Report</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td" vertical-align="top">
              <mp-text>
                Informasi kehadiran - Rabu. Divisi IT <br />
                Manager, Accounting, Marketing, <br />
                Sales, HRD GA, Operation, Creative, <br />
                SEO, Quality Assurance
              </mp-text>
            </mp-table-cell>
            <mp-table-cell as="td" vertical-align="top">
              Daily report
            </mp-table-cell>
            <mp-table-cell as="td" vertical-align="top">
              <mp-text as="p">Rizal Chandra</mp-text>
              <mp-text as="p" color="gray.600" font-size="sm">
                20 Dec 2022 18:00
              </mp-text>
            </mp-table-cell>
            <mp-table-cell as="td" vertical-align="top">
              <mp-text as="p">Bima Firdaus</mp-text>
              <mp-text as="p" color="gray.600" font-size="sm">
                21 Dec 2022 18:00
              </mp-text>
            </mp-table-cell>
            <mp-table-cell
              as="td"
              vertical-align="top"
              text-align="right"
              :display="['none', 'table-cell']"
            >
              <mp-flex gap="4" justify-content="flex-end" align-items="center">
                <mp-button
                  variant="outline"
                  @click="handleDownloadModalToggle(true)"
                >
                  Download
                </mp-button>
                <mp-popover use-portal>
                  <mp-popover-trigger>
                    <mp-button-icon
                      variant="outline"
                      name="menu-kebab"
                      size="md"
                    />
                  </mp-popover-trigger>
                  <mp-popover-content
                    max-width="40"
                    bg="white"
                    rounded="md"
                    shadow="lg"
                    border="1px solid"
                    border-color="gray.400"
                  >
                    <mp-popover-list display="grid">
                      <mp-popover-list-item>Edit</mp-popover-list-item>
                      <mp-popover-list-item>Duplicate</mp-popover-list-item>
                      <mp-popover-list-item
                        @click="handleDeleteModalToggle(true)"
                      >
                        Delete
                      </mp-popover-list-item>
                    </mp-popover-list>
                  </mp-popover-content>
                </mp-popover>
              </mp-flex>
            </mp-table-cell>
            <mp-table-cell
              as="td"
              vertical-align="top"
              :display="['table-cell', 'none']"
            >
              <mp-flex gap="4" justify-content="flex-end" align-items="center">
                <mp-button variant="outline">Download</mp-button>
                <mp-button-icon variant="outline" name="menu-kebab" size="md" />
              </mp-flex>
            </mp-table-cell>
          </mp-table-row>
          <mp-table-row>
            <mp-table-cell as="td" vertical-align="top">
              <mp-text is-link>Daily Attendance Report</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td" vertical-align="top">
              Informasi kehadiran - Rabu. Divisi IT <br />
              Manager, Accounting.
            </mp-table-cell>
            <mp-table-cell as="td" vertical-align="top">
              Daily report
            </mp-table-cell>
            <mp-table-cell as="td" vertical-align="top">
              <mp-text as="p">Rizal Chandra</mp-text>
              <mp-text as="p" color="gray.600" font-size="sm">
                20 Dec 2022 18:00
              </mp-text>
            </mp-table-cell>
            <mp-table-cell as="td" vertical-align="top">
              <mp-text as="p">Bima Firdaus</mp-text>
              <mp-text as="p" color="gray.600" font-size="sm">
                21 Dec 2022 18:00
              </mp-text>
            </mp-table-cell>
            <mp-table-cell as="td" vertical-align="top" text-align="right">
              <mp-flex gap="4" justify-content="flex-end" align-items="center">
                <mp-button variant="outline">Download</mp-button>
                <mp-button-icon variant="outline" name="menu-kebab" size="md" />
              </mp-flex>
            </mp-table-cell>
          </mp-table-row>
          <mp-table-row>
            <mp-table-cell as="td" vertical-align="top">
              <mp-text is-link>Daily Attendance Report</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td" vertical-align="top">
              Informasi kehadiran - Rabu. Divisi IT <br />
              Manager, Accounting.
            </mp-table-cell>
            <mp-table-cell as="td" vertical-align="top">
              Daily report
            </mp-table-cell>
            <mp-table-cell as="td" vertical-align="top">
              <mp-text as="p">Rizal Chandra</mp-text>
              <mp-text as="p" color="gray.600" font-size="sm">
                20 Dec 2022 18:00
              </mp-text>
            </mp-table-cell>
            <mp-table-cell as="td" vertical-align="top">
              <mp-text as="p">Bima Firdaus</mp-text>
              <mp-text as="p" color="gray.600" font-size="sm">
                21 Dec 2022 18:00
              </mp-text>
            </mp-table-cell>
            <mp-table-cell as="td" vertical-align="top" text-align="right">
              <mp-flex gap="4" justify-content="flex-end" align-items="center">
                <mp-button variant="outline">Download</mp-button>
                <mp-button-icon variant="outline" name="menu-kebab" size="md" />
              </mp-flex>
            </mp-table-cell>
          </mp-table-row>
          <mp-table-row>
            <mp-table-cell as="td" vertical-align="top">
              <mp-text is-link>Daily Attendance Report</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td" vertical-align="top">
              Informasi kehadiran - Rabu. Divisi IT <br />
              Manager, Accounting.
            </mp-table-cell>
            <mp-table-cell as="td" vertical-align="top">
              Daily report
            </mp-table-cell>
            <mp-table-cell as="td" vertical-align="top">
              <mp-text as="p">Rizal Chandra</mp-text>
              <mp-text as="p" color="gray.600" font-size="sm">
                20 Dec 2022 18:00
              </mp-text>
            </mp-table-cell>
            <mp-table-cell as="td" vertical-align="top">
              <mp-text as="p">Bima Firdaus</mp-text>
              <mp-text as="p" color="gray.600" font-size="sm">
                21 Dec 2022 18:00
              </mp-text>
            </mp-table-cell>
            <mp-table-cell as="td" vertical-align="top" text-align="right">
              <mp-flex gap="4" justify-content="flex-end" align-items="center">
                <mp-button variant="outline">Download</mp-button>
                <mp-button-icon variant="outline" name="menu-kebab" size="md" />
              </mp-flex>
            </mp-table-cell>
          </mp-table-row>
        </mp-table-body>
      </mp-table>
    </mp-table-container>

    <Pagination />
    <ReportBuilderDeleteModal
      :isModalOpen="isDeleteModalOpen"
      :onModalToggle="handleDeleteModalToggle"
    />
    <ReportBuilderDownloadModal
      :isModalOpen="isDownloadModalOpen"
      :onModalToggle="handleDownloadModalToggle"
    />
  </mp-box>
</template>

<script>
import {
  MpFlex,
  MpBox,
  MpIcon,
  MpButton,
  MpButtonIcon,
  MpText,
  MpTableContainer,
  MpTable,
  MpTableHead,
  MpTableBody,
  MpTableRow,
  MpTableCell,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
} from "@mekari/pixel";
import Pagination from "../../components/Pagination";
import ReportBuilderDeleteModal from "./ReportBuilderDeleteModal";
import ReportBuilderDownloadModal from "./ReportBuilderDownloadModal";

export default {
  name: "ReportBuilderTableA",
  components: {
    MpFlex,
    MpBox,
    MpIcon,
    MpButton,
    MpButtonIcon,
    MpText,
    MpTableContainer,
    MpTable,
    MpTableHead,
    MpTableBody,
    MpTableRow,
    MpTableCell,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
    Pagination,
    ReportBuilderDeleteModal,
    ReportBuilderDownloadModal,
  },
  data: function () {
    return {
      isDeleteModalOpen: false,
      isDownloadModalOpen: false,
    };
  },
  methods: {
    handleDeleteModalToggle: function (data) {
      this.isDeleteModalOpen = data;
    },
    handleDownloadModalToggle: function (data) {
      this.isDownloadModalOpen = data;
    },
  },
};
</script>