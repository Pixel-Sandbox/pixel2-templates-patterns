<template>
  <mp-drawer :is-open="isDrawerOpen" :on-close="handleDrawerClose">
    <mp-drawer-overlay />
    <mp-drawer-content width="920px" max-width="920px">
      <mp-drawer-header>Earnings component</mp-drawer-header>
      <mp-drawer-close-button />
      <mp-drawer-body overflow-x="auto" padding="0">
        <mp-text font-weight="semibold" margin-left="4" margin-top="4" margin-bottom="6">
          Which component would you like to show on Headoffice payslip?
        </mp-text>
        <mp-flex height="calc(100vh - 190px)">
          <mp-box width="50%" border-right="1px" border-color="gray.100">
            <mp-box v-if="!isShowFilter">
              <mp-flex gap="6" justify-content="space-between" align-items="center" margin-top="0" margin-bottom="6"
                padding-left="4" padding-right="6">
                <mp-input-group>
                  <mp-input-left-addon :with-background="false">
                    <mp-icon name="search" size="sm" />
                  </mp-input-left-addon>
                  <mp-input placeholder="Search component" />
                </mp-input-group>
              </mp-flex>

              <mp-flex v-if="this.employees.length !== 0" justify-content="space-between" align-items="center"
                padding-left="4" padding-right="6" margin-bottom="4">
                <mp-heading as="h3" font-size="lg"> List of components </mp-heading>
                <mp-text is-link> Add all </mp-text>
              </mp-flex>

              <mp-box v-if="this.employees.length === 0" text-align="center" padding-x="6">
                <mp-icon name="people" color="blue.400" variant="fill" width="56px" height="56px" margin-bottom="6" />
                <mp-heading as="h3" font-size="lg" font-weight="bold">
                  All components selected
                </mp-heading>
                <mp-text color="gray.600" margin-top="1">
                  No more component available to show.
                </mp-text>
              </mp-box>

              <Draggable v-model="employees" v-bind="dragOptions" handle=".handle" style="width: 100%"
                @start="drag = true" @end="drag = false" group="component">
                <TransitionGroup type="transition" :name="!drag ? 'list' : null">
                  <mp-flex v-for="(employee, index) in employees" :key="employee.name" role="group"
                    justify-content="space-between" align-items="center" padding-y="1.5" padding-x="2" margin-left="4"
                    margin-right="6" border-color="gray.100">
                    <mp-icon name="drag" cursor="move" class="handle" margin-right="2.5" />
                    <mp-flex align-items="center" background-color="gray.25" padding-x="3" padding-y="2" width="full"
                      margin-right="2" border-radius="md">
                      <mp-text font-weight="semibold">{{ employee.name }}</mp-text>
                    </mp-flex>
                    <mp-box text-align="right" opacity="0" visibility="hidden" transition="all .2s ease"
                      @click="() => handleSelectEmployee(employee, index)" :_groupHover="{
                    opacity: '1',
                    visibility: 'visible',
                    cursor: 'pointer'
                  }">
                      <mp-icon name="add-circular" variant="duotone" />
                    </mp-box>
                  </mp-flex>
                </TransitionGroup>
              </Draggable>
            </mp-box>
          </mp-box>
          <mp-box width="50%">
            <mp-flex align-items="center" margin-top="0" margin-bottom="6" padding-right="4" padding-left="6">
              <mp-input-group>
                <mp-input-left-addon :with-background="false">
                  <mp-icon name="search" size="sm" />
                </mp-input-left-addon>
                <mp-input placeholder="Search selected component" />
              </mp-input-group>
            </mp-flex>

            <mp-flex v-if="this.selectedEmployees.length === 0 && drag || this.selectedEmployees.length > 0"
              align-items="center" justify-content="space-between" padding-right="4" padding-left="6" padding-top="0"
              margin-bottom="4">
              <mp-heading as="h3" font-size="lg">
                {{ this.selectedEmployees.length }} components selected
              </mp-heading>
              <mp-text is-link> Clear selection </mp-text>
            </mp-flex>

            <mp-box v-if="this.selectedEmployees.length === 0 && !drag" text-align="center" padding-x="6">
              <mp-icon name="people" color="blue.400" variant="fill" width="56px" height="56px" margin-bottom="6" />
              <mp-heading as="h3" font-size="lg" font-weight="bold">
                No component selected
              </mp-heading>
              <mp-text color="gray.600" margin-top="1">
                Drag or add the monthly or daily components you want on the payslip. You can also sort the components by
                dragging them.
              </mp-text>
            </mp-box>

            <Draggable :empty-insert-threshhold="500" v-model="selectedEmployees" v-bind="dragOptions" handle=".handle"
              style="width: 100%" @start="drag = true" @end="drag = false" group="component">
              <TransitionGroup type="transition">
                <mp-flex v-for="(employee, index) in selectedEmployees" :key="employee.name" role="group"
                  justify-content="space-between" align-items="center" padding-y="1.5" padding-x="2" margin-left="4"
                  margin-right="6" border-color="gray.100">
                  <mp-icon name="drag" cursor="move" class="handle" margin-right="2.5" />
                  <mp-box align-items="center" background-color="gray.25" padding-x="3" padding-y="2" width="full"
                    margin-right="2" border-radius="md">
                    <mp-text font-weight="semibold">{{ employee.name }}</mp-text>
                    <mp-checkbox-group name="role" :value="['SA', 'U']" spacing="6" is-inline>
                      <mp-checkbox value="SA">
                        Super admin
                      </mp-checkbox>
                      <mp-checkbox value="U">
                        Employee
                      </mp-checkbox>
                    </mp-checkbox-group>
                  </mp-box>
                  <mp-box text-align="right" opacity="0" visibility="hidden" transition="all .2s ease"
                    @click="() => handleUnselectEmployee(employee, index)" :_groupHover="{
                    opacity: '1',
                    visibility: 'visible',
                    cursor: 'pointer'
                  }">
                    <mp-icon name="minus-circular" />
                  </mp-box>
                </mp-flex>
              </TransitionGroup>
            </Draggable>
          </mp-box>
        </mp-flex>
      </mp-drawer-body>
      <mp-drawer-footer padding-x="6" padding-y="5">
        <mp-button variant="ghost" mr="3" @click="handleDrawerClose">
          Cancel
        </mp-button>
        <mp-button @click="handleAssign">Assign component</mp-button>
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
  MpCheckboxGroup,
  MpCheckbox,
} from "@mekari/pixel";
import Draggable from "vuedraggable";

export default {
  name: "AssignEmployeeCustom",
  components: {
    MpFlex,
    MpBox,
    MpText,
    MpHeading,
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
    MpCheckboxGroup,
    MpCheckbox,
    Draggable
  },
  props: {
    isDrawerOpen: [Boolean],
    handleDrawerOpen: [Function],
    handleDrawerClose: [Function],
  },
  data: function () {
    return {
      drag: false,
      isShowFilter: false,
      ispopoveropen: false,
      ispopoverfocused: false,
      isoutsidepopover: true,
      employees: [
        {
          id: 1,
          name: "Allowance A"
        },
        {
          id: 2,
          name: "Allowance B"
        },
        {
          id: 3,
          name: "Allowance C"
        },
        {
          id: 4,
          name: "Allowance D"
        },
        {
          id: 5,
          name: "Allowance F"
        },
        {
          id: 6,
          name: "Allowance G"
        },
        
      ],
      selectedEmployees: [
        {
          id: 7,
          name: "Basic salary"
        }
      ],
    };
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        disabled: false,
        ghostClass: "ghost",
      };
    },
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
    handleAssign() {
      this.$emit('update-data', this.selectedEmployees)
      this.handleDrawerClose()
    },
  },
};
</script>

<style>
.ghost {
  opacity: 0;
}
</style>