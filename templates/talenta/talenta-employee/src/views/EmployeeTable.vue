<template>
  <mp-box>
    <mp-table-container width="full" max-width="full" overflow="scroll">
      <mp-table>
        <mp-table-head is-fixed>
          <mp-table-row cursor="pointer">
            <mp-table-cell
              as="th"
              width="40px"
              min-width="40px"
              top="0"
              left="0"
              z-index="dropdown"
              is-fixed
            >
              <mp-checkbox
                :is-checked="checkAll"
                :is-indeterminate="isIndeterminate"
                @change="
                  (_, $e) => {
                    checks = [
                      $e.target.checked,
                      $e.target.checked,
                      $e.target.checked,
                      $e.target.checked,
                      $e.target.checked,
                    ];
                  }
                "
              />
            </mp-table-cell>
            <mp-table-cell
              v-if="checks.filter((item) => item === true).length >= 1"
              as="th"
              colspan="8"
              top="0"
              left="40px"
              z-index="dropdown"
              is-fixed
            >
              {{ checks.filter((item) => item === true).length }}
              employees selected
              <mp-button size="sm" margin-left="2">
                Bulk action
                <mp-icon
                  name="caret-down"
                  size="sm"
                  color="white"
                  margin-left="2"
                />
              </mp-button>
              <mp-button
                variant="ghost"
                size="sm"
                margin-left="2"
                @click="resetAll"
              >
                Cancel
              </mp-button>
            </mp-table-cell>
            <mp-table-cell
              v-if="checks.filter((item) => item === true).length === 0"
              as="th"
              width="240px"
              min-width="240px"
              top="0"
              left="40px"
              z-index="dropdown"
              box-shadow="inset -2px 0px #D0D6DD"
              is-fixed
            >
              Emp name
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell
              v-if="checks.filter((item) => item === true).length === 0"
              as="th"
              width="240px"
              min-width="240px"
              z-index="base"
              is-fixed
            >
              Emp ID
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell
              v-if="checks.filter((item) => item === true).length === 0"
              as="th"
              width="240px"
              min-width="240px"
              z-index="base"
              is-fixed
            >
              Branch
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell
              v-if="checks.filter((item) => item === true).length === 0"
              as="th"
              width="240px"
              min-width="240px"
              z-index="base"
              is-fixed
            >
              Organization
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell
              v-if="checks.filter((item) => item === true).length === 0"
              as="th"
              width="240px"
              min-width="240px"
              z-index="base"
              is-fixed
            >
              Job potision
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell
              v-if="checks.filter((item) => item === true).length === 0"
              as="th"
              width="240px"
              min-width="240px"
              z-index="base"
              is-fixed
            >
              Job level
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell
              v-if="checks.filter((item) => item === true).length === 0"
              as="th"
              width="240px"
              min-width="240px"
              z-index="base"
              is-fixed
            >
              Emp status
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell
              v-if="checks.filter((item) => item === true).length === 0"
              as="th"
              width="auto"
              min-width="auto"
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
            <mp-table-cell as="td" left="0" is-fixed>
              <mp-checkbox
                :is-checked="checks[0]"
                @change="
                  (_, $e) => {
                    checks = [
                      $e.target.checked,
                      checks[1],
                      checks[2],
                      checks[3],
                      checks[4],
                    ];
                  }
                "
              />
            </mp-table-cell>
            <mp-table-cell
              as="td"
              left="40px"
              box-shadow="inset -2px 0px #D0D6DD"
              is-fixed
            >
              <mp-box display="inline-flex" align-items="center">
                <mp-avatar name="Ridwan Hanif" />
                <mp-text as="a" is-link margin-left="4">Ridwan Hanif</mp-text>
              </mp-box>
            </mp-table-cell>
            <mp-table-cell as="td">EMP2022</mp-table-cell>
            <mp-table-cell as="td">PT. Digital Talenta</mp-table-cell>
            <mp-table-cell as="td">Personalian Department</mp-table-cell>
            <mp-table-cell as="td">Software Analyst</mp-table-cell>
            <mp-table-cell as="td">Staff</mp-table-cell>
            <mp-table-cell as="td">Permanent</mp-table-cell>
            <mp-table-cell
              as="td"
              text-align="right"
              right="0"
              box-shadow="inset 2px 0px #D0D6DD"
              z-index="5"
              is-fixed
            >
              <mp-popover>
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
                    <mp-popover-list-item>Detail</mp-popover-list-item>
                    <mp-popover-list-item>Transfer</mp-popover-list-item>
                    <mp-popover-list-item
                      @click="onResignModalToggle(true, 'Ridwan Hanif')"
                    >
                      Resign
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
            <mp-table-cell as="td" left="0" is-fixed>
              <mp-checkbox
                :is-checked="checks[1]"
                @change="
                  (_, $e) => {
                    checks = [
                      checks[0],
                      $e.target.checked,
                      checks[2],
                      checks[3],
                      checks[4],
                    ];
                  }
                "
              />
            </mp-table-cell>
            <mp-table-cell
              as="td"
              left="40px"
              box-shadow="inset -2px 0px #D0D6DD"
              is-fixed
            >
              <mp-box display="inline-flex" align-items="center">
                <mp-avatar name="Boyke Sumanjaya" />
                <mp-text as="a" is-link margin-left="4">
                  Boyke Sumanjaya
                </mp-text>
              </mp-box>
            </mp-table-cell>
            <mp-table-cell as="td">EMP2023</mp-table-cell>
            <mp-table-cell as="td">PT. Digital Talenta</mp-table-cell>
            <mp-table-cell as="td">Account Executive</mp-table-cell>
            <mp-table-cell as="td">Software Analyst</mp-table-cell>
            <mp-table-cell as="td">Staff</mp-table-cell>
            <mp-table-cell as="td">Permanent</mp-table-cell>
            <mp-table-cell
              as="td"
              text-align="right"
              right="0"
              box-shadow="inset 2px 0px #D0D6DD"
              z-index="4"
              is-fixed
            >
              <mp-button variant="outline" rightIcon="caret-down">
                Actions
              </mp-button>
            </mp-table-cell>
          </mp-table-row>
          <mp-table-row>
            <mp-table-cell as="td" left="0" is-fixed>
              <mp-checkbox
                :is-checked="checks[2]"
                @change="
                  (_, $e) => {
                    checks = [
                      checks[0],
                      checks[1],
                      $e.target.checked,
                      checks[3],
                      checks[4],
                    ];
                  }
                "
              />
            </mp-table-cell>
            <mp-table-cell
              as="td"
              left="40px"
              box-shadow="inset -2px 0px #D0D6DD"
              is-fixed
            >
              <mp-box display="inline-flex" align-items="center">
                <mp-avatar name="Fikka Rhesy" />
                <mp-text as="a" is-link margin-left="4">Fikka Rhesy</mp-text>
              </mp-box>
            </mp-table-cell>
            <mp-table-cell as="td">EMP2024</mp-table-cell>
            <mp-table-cell as="td">PT. Digital Talenta</mp-table-cell>
            <mp-table-cell as="td">People Development</mp-table-cell>
            <mp-table-cell as="td">Software Analyst</mp-table-cell>
            <mp-table-cell as="td">Staff</mp-table-cell>
            <mp-table-cell as="td">Permanent</mp-table-cell>
            <mp-table-cell
              as="td"
              text-align="right"
              right="0"
              box-shadow="inset 2px 0px #D0D6DD"
              z-index="3"
              is-fixed
            >
              <mp-button variant="outline" rightIcon="caret-down">
                Actions
              </mp-button>
            </mp-table-cell>
          </mp-table-row>
          <mp-table-row>
            <mp-table-cell as="td" left="0" is-fixed>
              <mp-checkbox
                :is-checked="checks[3]"
                @change="
                  (_, $e) => {
                    checks = [
                      checks[0],
                      checks[1],
                      checks[2],
                      $e.target.checked,
                      checks[4],
                    ];
                  }
                "
              />
            </mp-table-cell>
            <mp-table-cell
              as="td"
              left="40px"
              box-shadow="inset -2px 0px #D0D6DD"
              is-fixed
            >
              <mp-box display="inline-flex" align-items="center">
                <mp-avatar name="Dirga Prakesha" />
                <mp-text as="a" is-link margin-left="4">Dirga Prakesha</mp-text>
              </mp-box>
            </mp-table-cell>
            <mp-table-cell as="td">EMP2025</mp-table-cell>
            <mp-table-cell as="td">PT. Digital Talenta</mp-table-cell>
            <mp-table-cell as="td">People Development</mp-table-cell>
            <mp-table-cell as="td">Software Analyst</mp-table-cell>
            <mp-table-cell as="td">Intern</mp-table-cell>
            <mp-table-cell as="td">Contract</mp-table-cell>
            <mp-table-cell
              as="td"
              text-align="right"
              right="0"
              box-shadow="inset 2px 0px #D0D6DD"
              z-index="2"
              is-fixed
            >
              <mp-button variant="outline" rightIcon="caret-down">
                Actions
              </mp-button>
            </mp-table-cell>
          </mp-table-row>
          <mp-table-row>
            <mp-table-cell as="td" left="0" is-fixed>
              <mp-checkbox
                :is-checked="checks[4]"
                @change="
                  (_, $e) => {
                    checks = [
                      checks[0],
                      checks[1],
                      checks[2],
                      checks[3],
                      $e.target.checked,
                    ];
                  }
                "
              />
            </mp-table-cell>
            <mp-table-cell
              as="td"
              left="40px"
              box-shadow="inset -2px 0px #D0D6DD"
              is-fixed
            >
              <mp-box display="inline-flex" align-items="center">
                <mp-avatar name="Eki Pratama" />
                <mp-text as="a" is-link margin-left="4">Eki Pratama</mp-text>
              </mp-box>
            </mp-table-cell>
            <mp-table-cell as="td">EMP2026</mp-table-cell>
            <mp-table-cell as="td">PT. Digital Talenta</mp-table-cell>
            <mp-table-cell as="td">People Development</mp-table-cell>
            <mp-table-cell as="td">Software Analyst</mp-table-cell>
            <mp-table-cell as="td">Intern</mp-table-cell>
            <mp-table-cell as="td">Contract</mp-table-cell>
            <mp-table-cell
              as="td"
              text-align="right"
              right="0"
              box-shadow="inset 2px 0px #D0D6DD"
              is-fixed
            >
              <mp-button variant="outline" rightIcon="caret-down">
                Actions
              </mp-button>
            </mp-table-cell>
          </mp-table-row>
        </mp-table-body>
      </mp-table>
    </mp-table-container>

    <EmployeePagination />
    <EmployeeResignModal
      :isModalOpen="isResignModalOpen"
      :resignModalName="resignModalName"
      :onModalToggle="onResignModalToggle"
    />
    <EmployeeDeleteModal
      :isModalOpen="isDeleteModalOpen"
      :onModalToggle="onDeleteModalToggle"
    />
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpIcon,
  MpText,
  MpButton,
  MpAvatar,
  MpCheckbox,
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
import EmployeePagination from "./EmployeePagination";
import EmployeeResignModal from "./EmployeeResignModal";
import EmployeeDeleteModal from "./EmployeeDeleteModal";

export default {
  name: "EmployeeTable",
  components: {
    MpBox,
    MpIcon,
    MpText,
    MpButton,
    MpAvatar,
    MpCheckbox,
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
    EmployeePagination,
    EmployeeResignModal,
    EmployeeDeleteModal,
  },
  data: function () {
    return {
      checks: [false, false, false, false, false],
      isResignModalOpen: false,
      isDeleteModalOpen: false,
      resignModalName: null,
    };
  },
  computed: {
    checkAll: function () {
      return this.checks.every(Boolean);
    },
    isIndeterminate: function () {
      return this.checks.some(Boolean) && !this.checkAll;
    },
  },
  methods: {
    resetAll: function () {
      this.checks = [false, false, false, false, false];
    },
    onResignModalToggle: function (data, name) {
      this.isResignModalOpen = data;
      this.resignModalName = name;
    },
    onDeleteModalToggle: function (data) {
      this.isDeleteModalOpen = data;
    },
  },
};
</script>