<template>
  <mp-box>
    <mp-table-container width="full" max-width="full" overflow="scroll">
      <mp-table>
        <mp-table-head>
          <mp-table-row cursor="pointer">
            <mp-table-cell as="th">
              Compensation name
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Overtime conversion
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Overtime expired after
              <mp-tooltip
                position="right"
                label="Overtime balance will expire on"
              >
                <mp-icon name="info" />
              </mp-tooltip>
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Time off expired after
              <mp-tooltip
                position="right"
                label="Converted time off (day) will expire after"
              >
                <mp-icon name="info" />
              </mp-tooltip>
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th" colspan="2">
              Assign for
              <mp-icon name="sort-default" />
            </mp-table-cell>
          </mp-table-row>
        </mp-table-head>
        <mp-table-body>
          <mp-table-row>
            <mp-table-cell as="td">Default setting</mp-table-cell>
            <mp-table-cell as="td">8h 0m = 1 day</mp-table-cell>
            <mp-table-cell as="td">Expired immediately</mp-table-cell>
            <mp-table-cell as="td">2 months</mp-table-cell>
            <mp-table-cell as="td">-</mp-table-cell>
            <mp-table-cell as="td" text-align="right">
              <mp-popover>
                <mp-popover-trigger>
                  <mp-button variant="outline" rightIcon="caret-down">
                    Actions
                  </mp-button>
                </mp-popover-trigger>
                <mp-popover-content
                  max-width="22"
                  bg="white"
                  rounded="md"
                  shadow="lg"
                  border="1px solid"
                  border-color="gray.400"
                >
                  <mp-popover-list display="grid">
                    <mp-popover-list-item> Edit </mp-popover-list-item>
                    <mp-popover-list-item @click="onDeleteModalToggle(true)">
                      Delete
                    </mp-popover-list-item>
                  </mp-popover-list>
                </mp-popover-content>
              </mp-popover>
            </mp-table-cell>
          </mp-table-row>
          <mp-table-row>
            <mp-table-cell as="td">Rule 001 Branch Jakarta</mp-table-cell>
            <mp-table-cell as="td">4h 0m = 0.5 day</mp-table-cell>
            <mp-table-cell as="td">31 Dec</mp-table-cell>
            <mp-table-cell as="td">No expiration </mp-table-cell>
            <mp-table-cell as="td">
              <mp-button variant="link" @click="onAssignModalToggle">
                4 employee(s)
              </mp-button>
            </mp-table-cell>
            <mp-table-cell as="td" text-align="right">
              <mp-button variant="outline" rightIcon="caret-down">
                Actions
              </mp-button>
            </mp-table-cell>
          </mp-table-row>
        </mp-table-body>
      </mp-table>
    </mp-table-container>

    <OvertimeCompensationPagination />
    <OvertimeCompensationDeleteModal
      :isModalOpen="isDeleteModalOpen"
      :onModalToggle="onDeleteModalToggle"
    />
    <OvertimeCompensationAssignModal
      :isModalOpen="isAssignModalOpen"
      :onModalToggle="onAssignModalToggle"
    />
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpIcon,
  MpButton,
  MpTooltip,
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
import OvertimeCompensationPagination from "./OvertimeCompensationPagination";
import OvertimeCompensationDeleteModal from "./OvertimeCompensationDeleteModal";
import OvertimeCompensationAssignModal from "./OvertimeCompensationAssignModal";

export default {
  name: "OvertimeCompensationTable",
  components: {
    MpBox,
    MpIcon,
    MpButton,
    MpTooltip,
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
    OvertimeCompensationPagination,
    OvertimeCompensationDeleteModal,
    OvertimeCompensationAssignModal,
  },
  data: function () {
    return {
      isDeleteModalOpen: false,
      isAssignModalOpen: false,
    };
  },
  methods: {
    onDeleteModalToggle: function (data) {
      this.isDeleteModalOpen = data;
    },
    onAssignModalToggle: function (data) {
      this.isAssignModalOpen = data;
    },
  },
};
</script>