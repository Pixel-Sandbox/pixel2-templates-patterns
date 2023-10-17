<template>
  <mp-box
    :position="isRender && isShow ? 'fixed' : 'relative'"
    :background-color="isRender && isShow ? 'white' : 'transparent'"
    :width="isRender && isShow ? 'calc(100% - 215px)' : ''"
    :top="isRender && isShow ? '97px' : 'auto'"
    :border-bottom="isRender && isShow ? '1px solid' : '0px solid'"
    :border-left="isRender && isShow ? '1px solid' : '0px solid'"
    :border-color="isRender && isShow ? 'gray.100' : 'transparent'"
    border-bottom-left-radius="md"
    :padding-top="isRender && isShow ? '3' : '0'"
    :padding-x="isRender && isShow ? '3' : '0'"
    padding-bottom="3"
    transition="all 0.1s ease-in-out"
    z-index="3"
  >
    <mp-flex justify-content="space-between">
      <mp-flex gap="4">
        <mp-box>
          <AdvancedDatepicker />
        </mp-box>
        <mp-box>
          <mp-autocomplete
            label-prop="name"
            value="all"
            is-group-suggestions
            :data="[
              {
                value: 'all',
                name: 'All active employee',
                group: 'VIEW EMPLOYEE BY',
              },
              {
                value: 'current-employee',
                name: 'Current employee',
                group: 'VIEW EMPLOYEE BY',
              },
              {
                value: 'new-hire',
                name: 'New hire',
                group: 'VIEW EMPLOYEE BY',
              },
            ]"
            :content-style="{ width: '64' }"
          />
        </mp-box>
        <mp-box @mouseover="isOutside = false" @mouseleave="isOutside = true">
          <mp-popover
            :is-open="isPopoverOpen"
            is-manual
            initial-focus-ref="#input-general-filter"
          >
            <mp-popover-trigger>
              <mp-input-group>
                <mp-input-right-addon :with-background="false">
                  <mp-icon name="chevrons-down" size="sm" />
                </mp-input-right-addon>
                <mp-input
                  id="input-general-filter"
                  value="Filter"
                  is-read-only
                  width="200px"
                  cursor="pointer"
                  @focus="handleFocus"
                  @blur="handleClickOutside"
                />
              </mp-input-group>
            </mp-popover-trigger>
            <mp-popover-content
              max-width="64"
              background-color="white"
              box-shadow="lg"
              border="1px solid"
              border-color="gray.400"
              border-radius="md"
              @click.native="handleForceInputFocus"
            >
              <mp-popover-list
                border-radius="md"
                max-height="400px"
                overflow-y="auto"
              >
                <mp-popover-list-item cursor="default!important" is-disabled>
                  <mp-text font-size="sm" color="gray.600">
                    EMPLOYMENT DATA
                  </mp-text>
                </mp-popover-list-item>
                <mp-popover-list-item is-arrow>
                  Employee ID
                </mp-popover-list-item>
                <mp-popover placement="right-end" trigger="hover">
                  <mp-popover-trigger>
                    <mp-popover-list-item
                      :background-color="hoveredItem === 'branch' && 'gray.50'"
                      is-arrow
                    >
                      <mp-box>Branch</mp-box>
                    </mp-popover-list-item>
                  </mp-popover-trigger>
                  <mp-popover-content>
                    <mp-box
                      max-width="64"
                      background-color="white"
                      box-shadow="lg"
                      border="1px solid"
                      border-color="gray.400"
                      border-radius="md"
                      margin-left="0.5"
                      padding-top="3"
                      padding-bottom="2"
                      padding-x="3"
                      @mouseover="hoveredItem = 'branch'"
                      @mouseleave="hoveredItem = ''"
                    >
                      <mp-input-group margin-bottom="4">
                        <mp-input-left-addon :with-background="false">
                          <mp-icon name="search" size="sm" />
                        </mp-input-left-addon>
                        <mp-input placeholder="Type keyword here" />
                      </mp-input-group>

                      <mp-flex flex-direction="column" gap="1">
                        <mp-checkbox
                          :is-checked="isCheckFull()"
                          :is-indeterminate="isIndeterminateFull()"
                          @change="(_, e) => handleChangeFull(e)"
                        >
                          All branch
                        </mp-checkbox>
                        <mp-checkbox-group
                          name="filterParent"
                          spacing="1"
                          :value="filterData.filterParent"
                          @change="
                            (items) => handleChange('filterParent', items)
                          "
                        >
                          <mp-checkbox value="pt-talenta-jabodetabek">
                            PT. Talenta Jabodetabek
                          </mp-checkbox>
                        </mp-checkbox-group>
                        <mp-checkbox-group
                          name="filterParent"
                          spacing="1"
                          :value="filterData.filterParent"
                          @change="
                            (items) => handleChange('filterParent', items)
                          "
                        >
                          <mp-checkbox value="pt-talenta-jawa-barat">
                            PT. Talenta Jawa Barat
                          </mp-checkbox>
                        </mp-checkbox-group>
                        <mp-checkbox-group
                          name="filterParent"
                          spacing="1"
                          :value="filterData.filterParent"
                          @change="
                            (items) => handleChange('filterParent', items)
                          "
                        >
                          <mp-checkbox value="pt-talenta-jawa-tengah">
                            PT. Talenta Jawa Tengah
                          </mp-checkbox>
                        </mp-checkbox-group>
                        <mp-checkbox-group
                          name="filterParent"
                          spacing="1"
                          :value="filterData.filterParent"
                          @change="
                            (items) => handleChange('filterParent', items)
                          "
                        >
                          <mp-checkbox value="pt-talenta-jawa-timur">
                            PT. Talenta Jawa Timur
                          </mp-checkbox>
                        </mp-checkbox-group>
                        <mp-checkbox-group
                          name="filterParent"
                          spacing="1"
                          :value="filterData.filterParent"
                          @change="
                            (items) => handleChange('filterParent', items)
                          "
                        >
                          <mp-checkbox value="pt-talenta-sumatra">
                            PT. Talenta Sumatra
                          </mp-checkbox>
                        </mp-checkbox-group>
                        <mp-checkbox-group
                          name="filterParent"
                          spacing="1"
                          :value="filterData.filterParent"
                          @change="
                            (items) => handleChange('filterParent', items)
                          "
                        >
                          <mp-checkbox value="pt-talenta-sulawesi">
                            PT. Talenta Sulawesi
                          </mp-checkbox>
                        </mp-checkbox-group>
                      </mp-flex>
                    </mp-box>
                  </mp-popover-content>
                </mp-popover>
                <mp-popover-list-item is-arrow>
                  Organization
                </mp-popover-list-item>
                <mp-popover-list-item is-arrow>Job level</mp-popover-list-item>
                <mp-popover-list-item is-arrow>
                  Job position
                </mp-popover-list-item>
                <mp-popover-list-item is-arrow>Grade</mp-popover-list-item>
                <mp-popover-list-item is-arrow>Class</mp-popover-list-item>
                <mp-popover-list-item is-arrow>
                  Employement status
                </mp-popover-list-item>
                <mp-popover-list-item is-arrow>
                  Service length
                </mp-popover-list-item>
                <mp-popover-list-item cursor="default!important" is-disabled>
                  <mp-text font-size="sm" color="gray.600">
                    DEMOGRAPHY
                  </mp-text>
                </mp-popover-list-item>
                <mp-popover-list-item is-arrow>Gender</mp-popover-list-item>
                <mp-popover-list-item is-arrow>Age</mp-popover-list-item>
                <mp-popover-list-item is-arrow>
                  Latest Education
                </mp-popover-list-item>
                <mp-popover-list-item is-arrow>Religion</mp-popover-list-item>
                <mp-popover-list-item is-arrow>
                  PTKP Status
                </mp-popover-list-item>
              </mp-popover-list>
            </mp-popover-content>
          </mp-popover>
        </mp-box>
        <mp-button variant="outline">Apply filter</mp-button>
      </mp-flex>
    </mp-flex>
  </mp-box>
</template>

<script>
import {
  MpFlex,
  MpBox,
  MpText,
  MpButton,
  MpCheckboxGroup,
  MpCheckbox,
  MpIcon,
  MpInput,
  MpInputGroup,
  MpInputRightAddon,
  MpInputLeftAddon,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
  MpAutocomplete,
} from "@mekari/pixel";
import AdvancedDatepicker from "../../components/advanced-datepicker/AdvancedDatepicker";

export default {
  name: "NewActiveEmployeeFilter",
  components: {
    MpFlex,
    MpBox,
    MpText,
    MpButton,
    MpAutocomplete,
    MpCheckboxGroup,
    MpCheckbox,
    MpIcon,
    MpInput,
    MpInputGroup,
    MpInputRightAddon,
    MpInputLeftAddon,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
    AdvancedDatepicker,
  },
  props: {
    isShow: [Boolean],
    isRender: [Boolean],
  },
  data: function () {
    return {
      isPopoverOpen: false,
      isFocused: false,
      isOutside: true,
      hoveredItem: "",
      filterData: {
        filterParent: [],
      },
      filterFillData: {
        filterParent: [
          "pt-talenta-jabodetabek",
          "pt-talenta-jawa-barat",
          "pt-talenta-jawa-tengah",
          "pt-talenta-jawa-timur",
          "pt-talenta-sumatra",
          "pt-talenta-sulawesi",
        ],
      },
    };
  },
  methods: {
    // Popover
    handleFocus() {
      this.isFocused = true;
      if (!this.isPopoverOpen) this.handleOpenPopover();
      if (this.isPopoverOpen) this.handleForceInputFocus();
    },
    handleForceInputFocus() {
      if (this.isFocused) {
        const input = document.getElementById("input-general-filter");
        input.focus();
      }
    },
    handleOpenPopover() {
      this.isPopoverOpen = true;

      this.selectionTimeRange = this.activeTimeRange;
      this.selectionValue = this.value;
    },
    handleClosePopover() {
      this.isFocused = false;
      this.isPopoverOpen = false;

      this.selectionValue = "";
    },
    handleClickOutside() {
      if (this.isOutside) {
        this.handleClosePopover();
        this.isOutside = false;
      }
    },

    handleChangeFull(e) {
      if (e.target.checked) {
        this.filterData.filterParent = this.filterFillData.filterParent;
      } else {
        this.filterData.filterParent = [];
      }
    },
    handleChangeAll(index, e) {
      if (e.target.checked) {
        this.filterData[index] = this.filterFillData.filterParent;
      } else {
        this.filterData[index] = [];
      }
    },
    handleChange(index, values) {
      this.filterData[index] = values;
    },

    // utils
    isCheckFull() {
      return this.filterData.filterParent.length === 6;
    },
    isIndeterminateFull() {
      const isChecked =
        this.filterData.filterParent.length >= 1 &&
        this.filterData.filterParent.length <= 6;
      return this.filterData.filterParent.length === 6 ? false : isChecked;
    },
  },
};
</script>