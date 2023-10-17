<template>
  <mp-modal size="2xl" :is-open="isModalOpen">
    <mp-modal-content>
      <mp-modal-header>Cost center list</mp-modal-header>
      <mp-modal-close-button @click="onModalToggle(false)" />
      <mp-modal-body>
        <mp-flex justify-content="space-between" margin-bottom="6">
          <mp-flex gap="4">
            <mp-input
              placeholder="eg. 1000001-Marketing"
              is-full-width
              width="204px"
            />
            <mp-box>
              <mp-button variant="outline">Add new</mp-button>
            </mp-box>
          </mp-flex>

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
              <mp-table-cell as="th" colspan="2">
                Name
                <mp-icon name="sort-default" />
              </mp-table-cell>
            </mp-table-row>
          </mp-table-head>
          <mp-table-body>
            <mp-table-row v-if="toggleInput">
              <mp-table-cell as="td">
                <mp-input v-model="toggleContent" is-full-width width="240px" />
              </mp-table-cell>
              <mp-table-cell as="td" text-align="right">
                <mp-flex justify-content="flex-end" align-items="center">
                  <mp-button
                    variant="ghost"
                    margin-right="6"
                    @click="handleToggleInput(false)"
                  >
                    Cancel
                  </mp-button>
                  <mp-button variant="link" @click="handleToggleInput(false)">
                    Save Changes
                  </mp-button>
                </mp-flex>
              </mp-table-cell>
            </mp-table-row>
            <mp-table-row v-else>
              <mp-table-cell as="td">{{ toggleContent }}</mp-table-cell>
              <mp-table-cell as="td" text-align="right">
                <mp-button-icon
                  name="edit"
                  size="sm"
                  margin-right="2"
                  @click="handleToggleInput(true)"
                />
                <mp-button-icon name="delete" size="sm" />
              </mp-table-cell>
            </mp-table-row>
            <mp-table-row>
              <mp-table-cell as="td">1000002 - Marketing</mp-table-cell>
              <mp-table-cell as="td" text-align="right">
                <mp-tooltip label="Edit" position="top">
                  <mp-button-icon name="edit" size="sm" margin-right="2" />
                </mp-tooltip>
                <mp-tooltip
                  label="Can't be deleted, there are still some employee in this cost center"
                  position="top"
                  text-align="left"
                >
                  <mp-button-icon name="delete" size="sm" />
                </mp-tooltip>
              </mp-table-cell>
            </mp-table-row>
            <mp-table-row>
              <mp-table-cell as="td">1000003 - Technology</mp-table-cell>
              <mp-table-cell as="td" text-align="right">
                <mp-tooltip label="Edit" position="top">
                  <mp-button-icon name="edit" size="sm" margin-right="2" />
                </mp-tooltip>
                <mp-tooltip
                  label="Can't be deleted, there are still some employee in this cost center"
                  position="top"
                  text-align="left"
                >
                  <mp-button-icon name="delete" size="sm" />
                </mp-tooltip>
              </mp-table-cell>
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
} from "@mekari/pixel";

export default {
  name: "CostCenterListModal",
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
  },
  props: {
    isModalOpen: [Boolean],
    onModalToggle: [Function],
  },
  data() {
    return {
      toggleInput: false,
      toggleContent: "1000001 - Sales",
    };
  },
  methods: {
    handleToggleInput: function (data) {
      this.toggleInput = data;
    },
  },
};
</script>