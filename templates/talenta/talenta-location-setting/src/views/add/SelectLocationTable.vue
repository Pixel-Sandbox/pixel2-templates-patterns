<template>
  <mp-box>
    <mp-table-container width="full" max-width="full" overflow="scroll">
      <mp-table>
        <mp-table-head>
          <mp-table-row cursor="pointer">
            <mp-table-cell as="th" width="40px" min-width="40px">
              <mp-checkbox
                :is-checked="checkAll"
                :is-indeterminate="isIndeterminate"
                @change="
                  (_, $e) => {
                    checks = [$e.target.checked, $e.target.checked];
                  }
                "
              />
            </mp-table-cell>
            <mp-table-cell
              v-if="checks.filter((item) => item === true).length >= 1"
              as="th"
              colspan="8"
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
            >
              Name
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell
              v-if="checks.filter((item) => item === true).length === 0"
              as="th"
            >
              Address
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <!-- <mp-table-cell
              v-if="checks.filter((item) => item === true).length === 0"
              as="th"
            >
              Radius
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell
              v-if="checks.filter((item) => item === true).length === 0"
              as="th"
            >
              BSSID
              <mp-icon name="sort-default" />
            </mp-table-cell> -->
            <mp-table-cell
              v-if="checks.filter((item) => item === true).length === 0"
              as="th"
            >
              Preview location
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell
              v-if="checks.filter((item) => item === true).length === 0"
              as="th"
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
                    checks = [$e.target.checked, checks[1], checks[2]];
                  }
                "
              />
            </mp-table-cell>
            <mp-table-cell as="td">
              <mp-box display="inline-flex" align-items="center">
                <mp-text>Jakarta HQ</mp-text>
              </mp-box>
            </mp-table-cell>
            <mp-table-cell as="td">Jl. Medan Merdeka Tim. No.1</mp-table-cell>
            <!-- <mp-table-cell as="td">200m</mp-table-cell>
            <mp-table-cell as="td">2 Settings</mp-table-cell> -->
            <mp-table-cell as="td">
              <mp-text is-link>View location</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td" text-align="right">
              <mp-tooltip label="Edit" position="left">
                <mp-button-icon name="edit" size="sm" />
              </mp-tooltip>
              <mp-tooltip label="Delete" position="left">
                <mp-button-icon name="delete" size="sm" margin-left="2" />
              </mp-tooltip>
            </mp-table-cell>
          </mp-table-row>
          <mp-table-row>
            <mp-table-cell as="td" left="0" is-fixed>
              <mp-checkbox
                :is-checked="checks[0]"
                @change="
                  (_, $e) => {
                    checks = [$e.target.checked, checks[1], checks[2]];
                  }
                "
              />
            </mp-table-cell>
            <mp-table-cell as="td">
              <mp-box display="inline-flex" align-items="center">
                <mp-text>Boyke Sumanjaya</mp-text>
              </mp-box>
            </mp-table-cell>
            <mp-table-cell as="td">
              Jl. Bangka Raya No.100 Kota Jakarta Selatan, Daerah Khusus Ibukota
              Jakarta 12720
            </mp-table-cell>
            <!-- <mp-table-cell as="td">500m</mp-table-cell>
            <mp-table-cell as="td">1 Setting</mp-table-cell> -->
            <mp-table-cell as="td">
              <mp-text is-link>View location</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td" text-align="right">
              <mp-tooltip label="Edit" position="left">
                <mp-button-icon name="edit" size="sm" />
              </mp-tooltip>
              <mp-tooltip label="Delete" position="left">
                <mp-button-icon name="delete" size="sm" margin-left="2" />
              </mp-tooltip>
            </mp-table-cell>
          </mp-table-row>
        </mp-table-body>
      </mp-table>
    </mp-table-container>

    <SelectLocationPagination />
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpIcon,
  MpText,
  MpButton,
  MpButtonIcon,
  MpCheckbox,
  MpTableContainer,
  MpTable,
  MpTableHead,
  MpTableBody,
  MpTableRow,
  MpTableCell,
  MpTooltip,
} from "@mekari/pixel";
import SelectLocationPagination from "./SelectLocationPagination";

export default {
  name: "SelectLocationTable",
  components: {
    MpBox,
    MpIcon,
    MpText,
    MpButton,
    MpButtonIcon,
    MpCheckbox,
    MpTableContainer,
    MpTable,
    MpTableHead,
    MpTableBody,
    MpTableRow,
    MpTableCell,
    MpTooltip,
    SelectLocationPagination,
  },
  data: function () {
    return {
      checks: [false],
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
      this.checks = [false];
    },
  },
};
</script>