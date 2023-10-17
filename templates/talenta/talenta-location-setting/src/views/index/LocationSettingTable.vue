<template>
  <mp-box>
    <mp-table-container width="full" max-width="full" overflow="scroll">
      <mp-table>
        <mp-table-head>
          <mp-table-row cursor="pointer">
            <mp-table-cell as="th">
              Location setting name
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              GPS location
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th" colspan="2">
              Assign to
              <mp-icon name="sort-default" />
            </mp-table-cell>
          </mp-table-row>
        </mp-table-head>
        <mp-table-body>
          <mp-table-row>
            <mp-table-cell as="td">Jakarta HQ</mp-table-cell>
            <mp-table-cell as="td">
              <mp-button variant="link" @click="onModalBToggle(true)">
                2 Location(s)
              </mp-button>
            </mp-table-cell>
            <mp-table-cell as="td">
              <mp-button variant="link" @click="onModalAToggle(true)">
                80 employee(s)
              </mp-button>
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
            <mp-table-cell as="td">Bandung HQ</mp-table-cell>
            <mp-table-cell as="td">Flexible</mp-table-cell>
            <mp-table-cell as="td">
              <mp-text as="a" is-link>120 employee(s)</mp-text>
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
            <mp-table-cell as="td">Yogyakarta HQ</mp-table-cell>
            <mp-table-cell as="td">Flexible</mp-table-cell>
            <mp-table-cell as="td">
              <mp-text as="a" is-link>20 employee(s)</mp-text>
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

    <LocationSettingPagination />
    <SettingAssignedEmployeeModal
      :isModalOpen="isModalAOpen"
      :onModalToggle="onModalAToggle"
    />
    <SettingLocationModal
      :isModalOpen="isModalBOpen"
      :onModalToggle="onModalBToggle"
    />
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpButton,
  MpText,
  MpIcon,
  MpButtonIcon,
  MpTooltip,
  MpTableContainer,
  MpTable,
  MpTableHead,
  MpTableBody,
  MpTableRow,
  MpTableCell,
} from "@mekari/pixel";
import LocationSettingPagination from "./LocationSettingPagination";
import SettingAssignedEmployeeModal from "./SettingAssignedEmployeeModal";
import SettingLocationModal from "./SettingLocationModal";

export default {
  name: "LocationSettingTable",
  components: {
    MpBox,
    MpButton,
    MpText,
    MpIcon,
    MpButtonIcon,
    MpTooltip,
    MpTableContainer,
    MpTable,
    MpTableHead,
    MpTableBody,
    MpTableRow,
    MpTableCell,
    LocationSettingPagination,
    SettingAssignedEmployeeModal,
    SettingLocationModal,
  },
  data: function () {
    return {
      isModalAOpen: false,
      isModalBOpen: false,
    };
  },
  methods: {
    onModalAToggle: function (data) {
      this.isModalAOpen = data;
    },
    onModalBToggle: function (data) {
      this.isModalBOpen = data;
    },
  },
};
</script>