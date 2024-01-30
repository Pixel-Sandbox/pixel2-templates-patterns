<template>
  <mp-box>
    <mp-table-container width="full" max-width="full" overflow="scroll">
      <mp-table>
        <mp-table-head>
          <mp-table-row cursor="pointer">
            <mp-table-cell as="th">
              Job level name
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Status
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th" text-align="right" />
          </mp-table-row>
        </mp-table-head>
        <mp-table-body>
          <mp-table-row>
            <mp-table-cell as="td">Executive</mp-table-cell>
            <mp-table-cell as="td">
              <mp-badge variant="subtle" variant-color="green">
                Active
              </mp-badge>
            </mp-table-cell>
            <mp-table-cell as="td" text-align="right">
              <mp-popover close-on-select>
                <mp-popover-trigger>
                  <mp-button variant="outline" right-icon="caret-down">
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
                  <mp-popover-list>
                    <mp-popover-list-item @click="onEditModalToggle(true)">
                      Edit
                    </mp-popover-list-item>
                    <mp-popover-list-item
                      @click="onSetInactiveModalToggle(true)"
                    >
                      Set inactive
                    </mp-popover-list-item>
                    <mp-popover-list-item @click="onDeleteModalToggle(true)">
                      Permanently delete
                    </mp-popover-list-item>
                  </mp-popover-list>
                </mp-popover-content>
              </mp-popover>
            </mp-table-cell>
          </mp-table-row>
          <mp-table-row>
            <mp-table-cell as="td">Intern</mp-table-cell>
            <mp-table-cell as="td">
              <mp-badge variant="subtle" variant-color="green">
                Active
              </mp-badge>
            </mp-table-cell>
            <mp-table-cell as="td" text-align="right">
              <mp-popover close-on-select>
                <mp-popover-trigger>
                  <mp-button variant="outline" right-icon="caret-down">
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
                  <mp-popover-list>
                    <mp-popover-list-item>Edit</mp-popover-list-item>
                    <mp-popover-list-item>Set inactive</mp-popover-list-item>
                    <mp-popover-list-item>
                      Permanently delete
                    </mp-popover-list-item>
                  </mp-popover-list>
                </mp-popover-content>
              </mp-popover>
            </mp-table-cell>
          </mp-table-row>
          <mp-table-row>
            <mp-table-cell as="td">Lead</mp-table-cell>
            <mp-table-cell as="td">
              <mp-badge variant="subtle" variant-color="gray">
                Inactive
              </mp-badge>
            </mp-table-cell>
            <mp-table-cell as="td" text-align="right">
              <mp-popover close-on-select>
                <mp-popover-trigger>
                  <mp-button variant="outline" right-icon="caret-down">
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
                  <mp-popover-list>
                    <mp-popover-list-item>Edit</mp-popover-list-item>
                    <mp-popover-list-item @click="onSetActiveModalToggle(true)">
                      Set active
                    </mp-popover-list-item>
                    <mp-popover-list-item>
                      Permanently delete
                    </mp-popover-list-item>
                  </mp-popover-list>
                </mp-popover-content>
              </mp-popover>
            </mp-table-cell>
          </mp-table-row>
        </mp-table-body>
      </mp-table>
    </mp-table-container>

    <Pagination />

    <JobLevelEditModal
      :isModalOpen="isEditModalOpen"
      :onModalToggle="onEditModalToggle"
    />
    <JobLevelSetInactiveModal
      :isModalOpen="isSetInactiveModalOpen"
      :onModalToggle="onSetInactiveModalToggle"
    />
    <JobLevelSetActiveModal
      :isModalOpen="isSetActiveModalOpen"
      :onModalToggle="onSetActiveModalToggle"
    />
    <JobLevelDeleteModal
      :isModalOpen="isDeleteModalOpen"
      :onModalToggle="onDeleteModalToggle"
    />
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpIcon,
  MpBadge,
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
import Pagination from "../components/Pagination";
import JobLevelEditModal from "./JobLevelEditModal";
import JobLevelSetInactiveModal from "./JobLevelSetInactiveModal";
import JobLevelSetActiveModal from "./JobLevelSetActiveModal";
import JobLevelDeleteModal from "./JobLevelDeleteModal";

export default {
  name: "JobLevelTable",
  components: {
    MpBox,
    MpIcon,
    MpBadge,
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
    Pagination,
    JobLevelEditModal,
    JobLevelSetInactiveModal,
    JobLevelSetActiveModal,
    JobLevelDeleteModal,
  },
  data: function () {
    return {
      isEditModalOpen: false,
      isSetInactiveModalOpen: false,
      isSetActiveModalOpen: false,
      isDeleteModalOpen: false,
    };
  },
  methods: {
    onEditModalToggle: function (data) {
      this.isEditModalOpen = data;
    },
    onSetInactiveModalToggle: function (data) {
      this.isSetInactiveModalOpen = data;
    },
    onSetActiveModalToggle: function (data) {
      this.isSetActiveModalOpen = data;
    },
    onDeleteModalToggle: function (data) {
      this.isDeleteModalOpen = data;
    },
  },
};
</script>