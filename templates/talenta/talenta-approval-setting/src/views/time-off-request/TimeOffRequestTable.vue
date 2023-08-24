<template>
  <mp-box>
    <mp-table-container width="full" max-width="full" overflow="scroll">
      <mp-table>
        <mp-table-head is-fixed>
          <mp-table-row cursor="pointer">
            <mp-table-cell as="th" width="180px" min-width="180px">
              Time off code
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th" width="180px" min-width="180px">
              Policy
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th" width="210px" min-width="210px">
              Name
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th" width="320px" min-width="320px">
              Description
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th" width="180px" min-width="180px">
              Last update
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th" width="180px" min-width="180px">
              Updated by
            </mp-table-cell>
            <mp-table-cell
              as="th"
              width="80px"
              min-width="80px"
              z-index="base"
              top="0"
              right="0"
              box-shadow="inset 2px 0px #D0D6DD"
              is-fixed
            />
          </mp-table-row>
        </mp-table-head>
        <mp-table-body>
          <mp-table-row>
            <mp-table-cell as="td"> ALL </mp-table-cell>
            <mp-table-cell as="td"> All </mp-table-cell>
            <mp-table-cell as="td"> Default </mp-table-cell>
            <mp-table-cell as="td">
              Default setting applied for all employee
            </mp-table-cell>
            <mp-table-cell as="td">17 Oct 2020</mp-table-cell>
            <mp-table-cell as="td">Rio Priyono</mp-table-cell>
            <mp-table-cell
              as="td"
              text-align="right"
              right="0"
              box-shadow="inset 2px 0px #D0D6DD"
              z-index="5"
              is-fixed
            >
              <mp-popover use-portal>
                <mp-popover-trigger>
                  <mp-button variant="outline" rightIcon="caret-down">
                    Actions
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
                    <mp-popover-list-item>Edit</mp-popover-list-item>
                    <mp-popover-list-item>Copy setting</mp-popover-list-item>
                    <mp-popover-list-item @click="onImportModalToggle(true)">
                      Import from existing
                    </mp-popover-list-item>
                    <mp-popover-list-item @click="onEligibleModalToggle(true)">
                      Set eligible request date
                    </mp-popover-list-item>
                    <mp-popover-list-item @click="onDeleteModalToggle(true)">
                      Delete
                    </mp-popover-list-item>
                  </mp-popover-list>
                </mp-popover-content>
              </mp-popover>
            </mp-table-cell>
          </mp-table-row>
          <mp-table-row>
            <mp-table-cell as="td"> ANL </mp-table-cell>
            <mp-table-cell as="td"> Annual Leave </mp-table-cell>
            <mp-table-cell as="td"> Company leave </mp-table-cell>
            <mp-table-cell as="td"> Approval for all employee </mp-table-cell>
            <mp-table-cell as="td">12 Oct 2020</mp-table-cell>
            <mp-table-cell as="td">Rio Priyono</mp-table-cell>
            <mp-table-cell
              as="td"
              text-align="right"
              right="0"
              box-shadow="inset 2px 0px #D0D6DD"
              z-index="5"
              is-fixed
            >
              <mp-popover use-portal>
                <mp-popover-trigger>
                  <mp-button variant="outline" rightIcon="caret-down">
                    Actions
                  </mp-button>
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
                    <mp-popover-list-item>Copy setting</mp-popover-list-item>
                    <mp-popover-list-item>
                      Import from existing
                    </mp-popover-list-item>
                    <mp-popover-list-item>
                      Set eligible request date
                    </mp-popover-list-item>
                    <mp-popover-list-item>Delete</mp-popover-list-item>
                  </mp-popover-list>
                </mp-popover-content>
              </mp-popover>
            </mp-table-cell>
          </mp-table-row>
        </mp-table-body>
      </mp-table>
    </mp-table-container>

    <TimeOffRequestPagination />
    <TimeOffRequestDeleteModal
      :isModalOpen="isDeleteModalOpen"
      :onModalToggle="onDeleteModalToggle"
    />
    <TimeOffRequestEligibleModal
      :isModalOpen="isEligibleModalOpen"
      :onModalToggle="onEligibleModalToggle"
    />
    <TimeOffRequestImportModal
      :isModalOpen="isImportModalOpen"
      :onModalToggle="onImportModalToggle"
    />
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpIcon,
  MpButton,
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
import TimeOffRequestPagination from "./TimeOffRequestPagination";
import TimeOffRequestDeleteModal from "./TimeOffRequestDeleteModal";
import TimeOffRequestEligibleModal from "./TimeOffRequestEligibleModal";
import TimeOffRequestImportModal from "./TimeOffRequestImportModal";

export default {
  name: "TimeOffRequestTable",
  components: {
    MpBox,
    MpIcon,
    MpButton,
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
    TimeOffRequestPagination,
    TimeOffRequestDeleteModal,
    TimeOffRequestEligibleModal,
    TimeOffRequestImportModal,
  },
  data: function () {
    return {
      isDeleteModalOpen: false,
      isEligibleModalOpen: false,
      isImportModalOpen: false,
    };
  },
  methods: {
    onDeleteModalToggle: function (data) {
      this.isDeleteModalOpen = data;
    },
    onEligibleModalToggle: function (data) {
      this.isEligibleModalOpen = data;
    },
    onImportModalToggle: function (data) {
      this.isImportModalOpen = data;
    },
  },
};
</script>