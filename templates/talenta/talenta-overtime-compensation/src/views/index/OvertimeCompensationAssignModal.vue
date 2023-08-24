<template>
  <mp-modal size="2xl" :is-open="isModalOpen">
    <mp-modal-content>
      <mp-modal-header>Assigned employee</mp-modal-header>
      <mp-modal-close-button @click="onModalToggle(false)" />
      <mp-modal-body>
        <mp-flex justify-content="flex-end" margin-bottom="4">
          <mp-flex>
            <mp-input-group>
              <mp-input-left-addon :with-background="false">
                <mp-icon name="search" size="sm" />
              </mp-input-left-addon>
              <mp-input placeholder="Search..." is-full-width width="204px" />
            </mp-input-group>
          </mp-flex>
        </mp-flex>

        <mp-table>
          <mp-table-head>
            <mp-table-row cursor="pointer">
              <mp-table-cell as="th">
                Name
                <mp-icon name="sort-default" />
              </mp-table-cell>
              <mp-table-cell as="th">
                Emp ID
                <mp-icon name="sort-default" />
              </mp-table-cell>
              <mp-table-cell as="th">
                Branch
                <mp-icon name="sort-default" />
              </mp-table-cell>
              <mp-table-cell as="th">
                Job position
                <mp-icon name="sort-default" />
              </mp-table-cell>
            </mp-table-row>
          </mp-table-head>
          <mp-table-body>
            <mp-table-row>
              <mp-table-cell as="td">Ridwan Hanif</mp-table-cell>
              <mp-table-cell as="td">EMP2020</mp-table-cell>
              <mp-table-cell as="td">PT. Digital Talenta</mp-table-cell>
              <mp-table-cell as="td">Software Analyst</mp-table-cell>
            </mp-table-row>
            <mp-table-row>
              <mp-table-cell as="td">Boyke Sumanjaya</mp-table-cell>
              <mp-table-cell as="td">EMP2022</mp-table-cell>
              <mp-table-cell as="td">PT. Digital Talenta</mp-table-cell>
              <mp-table-cell as="td">Software Analyst</mp-table-cell>
            </mp-table-row>
            <mp-table-row>
              <mp-table-cell as="td">Fikka Rhesy</mp-table-cell>
              <mp-table-cell as="td">EMP2022</mp-table-cell>
              <mp-table-cell as="td">PT. Digital Talenta</mp-table-cell>
              <mp-table-cell as="td">Software Analyst</mp-table-cell>
            </mp-table-row>
          </mp-table-body>
        </mp-table>

        <mp-box padding-x="2" padding-y="4">
          <mp-flex justify-content="space-between">
            <mp-flex align-items="center">
              <mp-text color="gray.600" line-height="md" padding-y="1">
                Showing 120-130 of 242
              </mp-text>
            </mp-flex>
            <mp-flex align-items="center">
              <mp-tooltip label="Jump to page" position="bottom">
                <mp-autocomplete
                  width="16"
                  height="7.5"
                  is-searchable
                  :default-value="1"
                  :is-full-width="false"
                  :content-style="{ width: '40' }"
                />
              </mp-tooltip>
              <mp-text
                color="gray.600"
                line-height="md"
                padding-left="2"
                padding-right="4"
                padding-y="1"
              >
                of 24 page
              </mp-text>
              <mp-tooltip label="Prev page" position="bottom">
                <mp-button-icon
                  name="chevrons-left"
                  size="sm"
                  padding-right="1"
                />
              </mp-tooltip>
              <mp-tooltip label="Next page" position="bottom">
                <mp-button-icon
                  name="chevrons-right"
                  size="sm"
                  padding-left="1"
                />
              </mp-tooltip>
            </mp-flex>
          </mp-flex>
        </mp-box>
      </mp-modal-body>
    </mp-modal-content>
    <mp-modal-overlay />
  </mp-modal>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpButtonIcon,
  MpText,
  MpIcon,
  MpTooltip,
  MpAutocomplete,
  MpInput,
  MpInputGroup,
  MpInputLeftAddon,
  MpModal,
  MpModalOverlay,
  MpModalContent,
  MpModalHeader,
  MpModalBody,
  MpModalCloseButton,
  MpTable,
  MpTableHead,
  MpTableBody,
  MpTableRow,
  MpTableCell,
} from "@mekari/pixel";

export default {
  name: "OvertimeCompensationAssignModal",
  components: {
    MpBox,
    MpFlex,
    MpButtonIcon,
    MpIcon,
    MpText,
    MpTooltip,
    MpAutocomplete,
    MpInput,
    MpInputGroup,
    MpInputLeftAddon,
    MpModal,
    MpModalOverlay,
    MpModalContent,
    MpModalHeader,
    MpModalBody,
    MpModalCloseButton,
    MpTable,
    MpTableHead,
    MpTableBody,
    MpTableRow,
    MpTableCell,
  },
  props: {
    isModalOpen: [Boolean],
    onModalToggle: [Function],
  },
};
</script>