<template>
  <mp-modal size="2xl" :is-open="isModalOpen">
    <mp-modal-content>
      <mp-modal-header>Locations</mp-modal-header>
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
                Location name
                <mp-icon name="sort-default" />
              </mp-table-cell>
              <mp-table-cell as="th" colspan="2">
                Address
                <mp-icon name="sort-default" />
              </mp-table-cell>
            </mp-table-row>
          </mp-table-head>
          <mp-table-body>
            <mp-table-row>
              <mp-table-cell as="td">HQ Jakarta Pusat</mp-table-cell>
              <mp-table-cell as="td">Jl. Medan Merdeka Tim. No.1</mp-table-cell>
              <mp-table-cell as="td" text-align="right">
                <mp-button variant="link">Preview</mp-button>
              </mp-table-cell>
            </mp-table-row>
            <mp-table-row>
              <mp-table-cell as="td">Cabang Kemang</mp-table-cell>
              <mp-table-cell as="td">
                Jl. Bangka Raya No.100 Kota Jakarta Selatan, Daerah Khusus
                Ibukota Jakarta
              </mp-table-cell>
              <mp-table-cell as="td" text-align="right">
                <mp-button variant="link">Preview</mp-button>
              </mp-table-cell>
            </mp-table-row>
            <mp-table-row>
              <mp-table-cell as="td">Cabang Bandung</mp-table-cell>
              <mp-table-cell as="td"
                >Kompl Green Ville Bl AW/15, Bandung</mp-table-cell
              >
              <mp-table-cell as="td" text-align="right">
                <mp-button variant="link">Preview</mp-button>
              </mp-table-cell>
            </mp-table-row>
          </mp-table-body>
        </mp-table>

        <mp-box padding-x="2" padding-y="4">
          <mp-flex justify-content="space-between">
            <mp-flex align-items="center">
              <mp-text
                color="gray.600"
                line-height="md"
                padding-right="1"
                padding-y="1"
              >
                Rows per page
              </mp-text>
              <mp-popover close-on-select>
                <mp-popover-trigger>
                  <mp-box>
                    <mp-tooltip label="Result per page" position="bottom">
                      <mp-button
                        size="sm"
                        variant="unstyled"
                        height="7"
                        display="inline-flex"
                        padding-left="3"
                        padding-right="2"
                        padding-y="2"
                        :_hover="{ backgroundColor: 'gray.50' }"
                      >
                        <mp-text font-weight="600" line-height="md">10</mp-text>
                        <mp-icon name="caret-down" size="sm" />
                      </mp-button>
                    </mp-tooltip>
                  </mp-box>
                </mp-popover-trigger>
                <mp-popover-content
                  max-width="16"
                  background-color="white"
                  rounded="md"
                  shadow="lg"
                  border-width="1px"
                  border-color="gray.400"
                >
                  <mp-popover-list>
                    <mp-popover-list-item is-active>10</mp-popover-list-item>
                    <mp-popover-list-item>25</mp-popover-list-item>
                    <mp-popover-list-item>50</mp-popover-list-item>
                    <mp-popover-list-item>100</mp-popover-list-item>
                  </mp-popover-list>
                </mp-popover-content>
              </mp-popover>

              <mp-text
                color="gray.600"
                line-height="md"
                padding-left="5"
                padding-y="1"
              >
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
  MpButton,
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
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
} from "@mekari/pixel";

export default {
  name: "SettingLocationModal",
  components: {
    MpBox,
    MpFlex,
    MpButton,
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
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
  },
  props: {
    isModalOpen: [Boolean],
    onModalToggle: [Function],
  },
};
</script>