<template>
  <mp-drawer :is-open="isDrawerOpen" :on-close="handleDrawerClose">
    <mp-drawer-overlay />
    <mp-drawer-content width="800px" max-width="800px">
      <mp-drawer-header>Assign & update employee</mp-drawer-header>
      <mp-drawer-close-button />
      <mp-drawer-body overflow-x="auto" padding="0">
        <mp-text
          font-weight="semibold"
          margin-left="4"
          margin-top="4"
          margin-bottom="6"
        >
          Which employee would you like to assign and update for Annual Leave
          (ANL)?
        </mp-text>
        <mp-flex height="calc(100vh - 190px)">
          <mp-box width="50%" border-right="1px" border-color="gray.100">
            <mp-box v-if="!isShowFilter">
              <mp-flex
                gap="4"
                justify-content="space-between"
                align-items="center"
                margin-top="0"
                margin-bottom="6"
                padding-left="4"
                padding-right="6"
              >
                <mp-input-group>
                  <mp-input-left-addon :with-background="false">
                    <mp-icon name="search" size="sm" />
                  </mp-input-left-addon>
                  <mp-input placeholder="Search employee" />
                </mp-input-group>
                <mp-box>
                  <mp-button
                    variant="outline"
                    left-icon="filter"
                    @click="() => handleToggleFilter(true)"
                  >
                    Filters
                  </mp-button>
                </mp-box>
              </mp-flex>

              <mp-flex
                justify-content="space-between"
                align-items="center"
                padding-left="4"
                padding-right="6"
                margin-bottom="4"
              >
                <mp-heading as="h3" font-size="lg"> Employees </mp-heading>
                <mp-text is-link> Add all </mp-text>
              </mp-flex>

              <mp-flex
                v-for="(employee, index) in employees"
                :key="employee.name"
                role="group"
                justify-content="space-between"
                align-items="flex-start"
                padding-y="3"
                padding-x="2"
                margin-left="4"
                margin-right="6"
                border-bottom="1px"
                border-color="gray.100"
                cursor="pointer"
                @click="() => handleSelectEmployee(employee, index)"
              >
                <mp-flex align-items="center">
                  <mp-avatar :name="employee.name" />
                  <mp-box margin-left="4">
                    <mp-text>{{ employee.name }}</mp-text>
                    <mp-text font-size="sm" color="gray.600">{{
                      employee.extra
                    }}</mp-text>
                  </mp-box>
                </mp-flex>
                <mp-box
                  text-align="right"
                  opacity="0"
                  visibility="hidden"
                  transition="all .2s ease"
                  :_groupHover="{
                    opacity: '1',
                    visibility: 'visible',
                  }"
                >
                  <mp-icon name="add-circular" variant="duotone" />
                </mp-box>
              </mp-flex>
            </mp-box>

            <mp-box v-if="isShowFilter">
              <mp-flex
                justify-content="space-between"
                align-items="center"
                margin-bottom="4"
                height="36px"
                padding-left="4"
                padding-right="6"
              >
                <mp-flex gap="2" align-items="center">
                  <mp-icon name="chevrons-left" />
                  <mp-button
                    color="gray.600"
                    variant="link"
                    @click="() => handleToggleFilter(false)"
                  >
                    Back to select employee
                  </mp-button>
                </mp-flex>
                <mp-text is-link> Reset filter </mp-text>
              </mp-flex>

              <mp-box
                max-height="calc(100vh - 245px)"
                overflow="hidden auto"
                padding-left="4"
                padding-right="6"
              >
                <mp-accordion
                  allow-toggle
                  allow-multiple
                  :default-index="[0, 1]"
                >
                  <mp-accordion-item>
                    <mp-accordion-header
                      padding-x="0"
                      padding-y="0"
                      :is-clickable="false"
                    >
                      <mp-flex
                        flex="1 0 0"
                        justify-content="space-between"
                        height="16"
                      >
                        <advanced-filter-item-header name="Branch" />
                        <mp-flex align-items="center">
                          <mp-button-icon name="minus-circular" />
                          <mp-box>
                            <mp-accordion-icon
                              name="chevrons-down"
                              padding="3px"
                            />
                          </mp-box>
                        </mp-flex>
                      </mp-flex>
                    </mp-accordion-header>
                    <mp-accordion-panel
                      padding-x="0"
                      padding-top="0"
                      padding-bottom="3"
                    >
                      <advanced-filter-item-branch />
                    </mp-accordion-panel>
                  </mp-accordion-item>
                  <mp-accordion-item>
                    <mp-accordion-header
                      padding-x="0"
                      padding-y="0"
                      :is-clickable="false"
                    >
                      <mp-flex
                        flex="1 0 0"
                        justify-content="space-between"
                        height="16"
                      >
                        <advanced-filter-item-header name="Organization" />
                        <mp-flex align-items="center">
                          <mp-button-icon name="minus-circular" />
                          <mp-box>
                            <mp-accordion-icon
                              name="chevrons-down"
                              padding="3px"
                            />
                          </mp-box>
                        </mp-flex>
                      </mp-flex>
                    </mp-accordion-header>
                    <mp-accordion-panel
                      padding-x="0"
                      padding-top="0"
                      padding-bottom="3"
                    >
                      <advanced-filter-item-organization />
                    </mp-accordion-panel>
                  </mp-accordion-item>
                </mp-accordion>
                <mp-flex justify-content="space-between" margin-top="7">
                  <mp-box
                    @mouseover="isoutsidepopover = false"
                    @mouseleave="isoutsidepopover = true"
                  >
                    <mp-popover
                      :is-open="ispopoveropen"
                      initial-focus-ref="#filter-search"
                      placement="top-start"
                      is-manual
                    >
                      <mp-popover-trigger>
                        <mp-box>
                          <mp-button
                            color="blue.400"
                            font-weight="semibold"
                            variant="ghost"
                            @click="handleOpenPopover"
                          >
                            <mp-icon
                              name="add"
                              color="blue.400"
                              variant="outline"
                              size="sm"
                              margin-right="2"
                            />
                            Add filter
                          </mp-button>
                        </mp-box>
                      </mp-popover-trigger>
                      <mp-popover-content
                        max-width="264px"
                        background-color="white"
                        border-radius="md"
                        border-width="1px"
                        border-color="gray.400"
                        box-shadow="lg"
                        padding-y="2"
                        @click.native="handleForceInputFocus"
                      >
                        <mp-box margin-top="2" margin-bottom="2" padding-x="3">
                          <mp-input-group>
                            <mp-input-left-addon :with-background="false">
                              <mp-icon name="search" size="sm" />
                            </mp-input-left-addon>
                            <mp-input
                              id="filter-search"
                              placeholder="Search..."
                              @focus="handleFocus"
                              @blur="handleClickOutside"
                            />
                          </mp-input-group>
                        </mp-box>
                        <mp-box>
                          <mp-popover-list padding="0">
                            <mp-popover-list-item
                              >Job position</mp-popover-list-item
                            >
                            <mp-popover-list-item
                              >Job level</mp-popover-list-item
                            >
                            <mp-popover-list-item
                              >Employment status</mp-popover-list-item
                            >
                            <mp-popover-list-item>SBU</mp-popover-list-item>
                          </mp-popover-list>
                        </mp-box>
                      </mp-popover-content>
                    </mp-popover>
                  </mp-box>
                  <mp-button
                    color="blue.400"
                    font-weight="semibold"
                    variant="outline"
                  >
                    Apply filter
                  </mp-button>
                </mp-flex>
              </mp-box>
            </mp-box>
          </mp-box>
          <mp-box width="50%">
            <mp-flex
              align-items="center"
              margin-top="0"
              margin-bottom="6"
              padding-x="4"
            >
              <mp-input-group>
                <mp-input-left-addon :with-background="false">
                  <mp-icon name="search" size="sm" />
                </mp-input-left-addon>
                <mp-input placeholder="Search employee" />
              </mp-input-group>
            </mp-flex>

            <mp-flex
              align-items="center"
              padding-x="4"
              padding-top="0"
              margin-bottom="4"
            >
              <mp-heading as="h3" font-size="lg">
                Assigned employees ({{ this.selectedEmployees.length }})
              </mp-heading>
            </mp-flex>

            <mp-box
              v-if="this.selectedEmployees.length === 0"
              text-align="center"
              margin-top="12"
              padding-x="6"
            >
              <mp-heading as="h3" font-size="lg" font-weight="bold">
                No employee selected
              </mp-heading>
              <mp-text color="gray.600" margin-top="2">
                Select at least one from employee list from the sidebar.
              </mp-text>
            </mp-box>

            <mp-flex
              v-for="(employee, index) in selectedEmployees"
              :key="employee.name"
              role="group"
              justify-content="space-between"
              align-items="center"
              padding-y="3"
              padding-x="2"
              margin-x="4"
              border-bottom="1px"
              border-color="gray.100"
              cursor="pointer"
              @click="() => handleUnselectEmployee(employee, index)"
            >
              <mp-flex align-items="center">
                <mp-avatar :name="employee.name" />
                <mp-box margin-left="4">
                  <mp-text>{{ employee.name }}</mp-text>
                  <mp-text font-size="sm" color="gray.600">{{
                    employee.extra
                  }}</mp-text>
                </mp-box>
              </mp-flex>
              <mp-box
                text-align="right"
                opacity="0"
                visibility="hidden"
                transition="all .2s ease"
                :_groupHover="{
                  opacity: '1',
                  visibility: 'visible',
                }"
              >
                <mp-icon name="minus-circular" variant="duotone" />
              </mp-box>
            </mp-flex>
          </mp-box>
        </mp-flex>
      </mp-drawer-body>
      <mp-drawer-footer padding-x="6" padding-y="5">
        <mp-button variant="ghost" mr="3" @click="handleDrawerClose">
          Cancel
        </mp-button>
        <mp-button>Assign employee</mp-button>
      </mp-drawer-footer>
    </mp-drawer-content>
  </mp-drawer>
</template>

<script>
import {
  MpFlex,
  MpBox,
  MpText,
  MpHeading,
  MpAvatar,
  MpIcon,
  MpButton,
  MpInput,
  MpInputGroup,
  MpInputLeftAddon,
  MpDrawer,
  MpDrawerOverlay,
  MpDrawerContent,
  MpDrawerCloseButton,
  MpDrawerHeader,
  MpDrawerBody,
  MpDrawerFooter,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
  MpAccordion,
  MpAccordionItem,
  MpAccordionHeader,
  MpAccordionIcon,
  MpAccordionPanel,
} from "@mekari/pixel";
import AdvancedFilterItemHeader from "./AdvancedFilterItemHeader";
import AdvancedFilterItemBranch from "./AdvancedFilterItemBranch";
import AdvancedFilterItemOrganization from "./AdvancedFilterItemOrganization";

export default {
  name: "AssignEmployee",
  components: {
    MpFlex,
    MpBox,
    MpText,
    MpHeading,
    MpAvatar,
    MpIcon,
    MpButton,
    MpInput,
    MpInputGroup,
    MpInputLeftAddon,
    MpDrawer,
    MpDrawerOverlay,
    MpDrawerContent,
    MpDrawerCloseButton,
    MpDrawerHeader,
    MpDrawerBody,
    MpDrawerFooter,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
    MpAccordion,
    MpAccordionItem,
    MpAccordionHeader,
    MpAccordionIcon,
    MpAccordionPanel,
    AdvancedFilterItemHeader,
    AdvancedFilterItemBranch,
    AdvancedFilterItemOrganization,
  },
  props: {
    isDrawerOpen: [Boolean],
    handleDrawerOpen: [Function],
    handleDrawerClose: [Function],
  },
  data: function () {
    return {
      isShowFilter: false,
      ispopoveropen: false,
      ispopoverfocused: false,
      isoutsidepopover: true,
      employees: [
        {
          name: "Fikka Rhesy",
          extra: "CP021 | Accountant | Accounting",
        },
        {
          name: "Dirga Prakesha",
          extra: "CP042 | HR Admin | HR",
        },
        {
          name: "Eki Pratama",
          extra: "CP030 | Sales Director | Sales",
        },
        {
          name: "Christin Purnama Sari",
          extra: "CP022 | Accountant | Accounting",
        },
        {
          name: "Cinta Ayu",
          extra: "CP070 | Restaurant Manager | Front of House",
        },
      ],
      selectedEmployees: [
        {
          name: "Ridwan Hanif",
          extra: "CP060 | Head Chef | Kitchen",
        },
        {
          name: "Boyke Sumanjaya",
          extra: "CP050 | Head of Marketing | Marketing",
        },
      ],
    };
  },
  methods: {
    handleSelectEmployee: function (data, index) {
      this.employees.splice(index, 1);
      this.selectedEmployees.push(data);
    },
    handleUnselectEmployee: function (data, index) {
      this.selectedEmployees.splice(index, 1);
      this.employees.push(data);
    },
    handleFocus() {
      this.ispopoverfocused = true;
      if (!this.ispopoveropen) this.handleOpenPopover();
      if (this.ispopoveropen) this.handleForceInputFocus();
    },
    handleForceInputFocus() {
      if (this.ispopoverfocused) {
        const input = document.getElementById("filter-search");
        input.focus();
      }
    },
    handleToggleFilter: function (value) {
      this.isShowFilter = value;
    },
    handleOpenPopover() {
      this.ispopoveropen = true;
    },
    handleClosePopover() {
      this.ispopoverfocused = false;
      this.ispopoveropen = false;
    },
    handleClickOutside() {
      if (this.isoutsidepopover) {
        this.handleClosePopover();
        this.isoutsidepopover = false;
      }
    },
  },
};
</script>
