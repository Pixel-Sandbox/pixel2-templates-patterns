<template>
  <mp-box>
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 60px)">
      <mp-box
        as="section"
        data-id="content"
        width="100%"
        height="calc(100vh - 60px)"
        overflow-y="auto"
        background-color="background"
      >
        <mp-flex
          justify="space-between"
          align-items="center"
          padding-x="6"
          padding-y="1.063rem"
        >
          <mp-box height="12">
            <mp-flex>
              <mp-text font-size="sm" is-link>Approval</mp-text>
              <mp-text font-size="sm" margin-x="1" color="gray.600">/</mp-text>
              <mp-text font-size="sm" is-link>Time off request</mp-text>
            </mp-flex>
            <mp-heading as="h1" font-size="2xl" font-weight="semibold">
              Create new approval
            </mp-heading>
          </mp-box>
          <mp-flex gap="2">
            <mp-button variant="outline" left-icon="succesion-plan">
              View product tour
            </mp-button>
            <mp-button variant="outline" left-icon="help">Guidebook</mp-button>
          </mp-flex>
        </mp-flex>

        <mp-box
          min-height="calc(100vh - 210px)"
          border-top-width="1px"
          background-color="white"
          padding="6"
          margin-bottom="16"
        >
          <mp-grid
            width="1480px"
            template-rows="repeat(1, 1fr)"
            template-columns="repeat(7, 1fr)"
            gap="6"
          >
            <mp-grid-item col-span="5" col-start="1" col-end="5">
              <mp-flex flex-direction="column" width="50%" padding-right="2.5">
                <mp-form-control margin-bottom="5" is-required>
                  <mp-form-label>Policy</mp-form-label>
                  <mp-select value="annual-leave">
                    <option value="annual-leave">Annual leave</option>
                  </mp-select>
                </mp-form-control>
              </mp-flex>
              <mp-flex flex-direction="column" width="50%" padding-right="2.5">
                <mp-form-control margin-bottom="5" is-required>
                  <mp-form-label>Setting name</mp-form-label>
                  <mp-input />
                </mp-form-control>
              </mp-flex>
              <mp-flex flex-direction="column" width="50%" padding-right="2.5">
                <mp-form-control margin-bottom="5">
                  <mp-flex justify-content="space-between" align-items="center">
                    <mp-form-label>Description</mp-form-label>
                    <mp-text font-size="sm" color="gray.600">0 / 100</mp-text>
                  </mp-flex>
                  <mp-textarea placeholder="eg: Approval for Jakarta branch" />
                </mp-form-control>
              </mp-flex>
            </mp-grid-item>
          </mp-grid>
          <mp-divider margin-top="6" margin-bottom="8" />
          <mp-heading as="h3" font-size="lg">Set criteria</mp-heading>
          <mp-text margin-bottom="6">
            This is used to set the criteria approval flow. You can make an
            approval layer for more than one layer or allow the system to
            automatically approve or reject the approval.
          </mp-text>
          <mp-accordion allow-toggle>
            <mp-accordion-item
              border-bottom-left-radius="md"
              border-bottom-right-radius="md"
            >
              <mp-accordion-header
                border="1px"
                border-color="gray.100"
                border-top-left-radius="md"
                border-top-right-radius="md"
                border-bottom-width="0px!important"
                padding-x="4"
                padding-y="3"
                gap="0"
                :is-clickable="false"
                position="relative"
              >
                <mp-accordion-icon margin-right="6" />
                <mp-flex width="full" justify-content="space-between">
                  <mp-flex align-items="center">
                    <mp-box position="absolute" left="16">
                      <mp-badge
                        variant="subtle"
                        variant-color="blue"
                        margin-right="6"
                      >
                        Criteria 1
                      </mp-badge>
                    </mp-box>
                    <mp-form-control margin-left="110px">
                      <mp-select
                        value="organization"
                        width="280px"
                        is-full-width
                      >
                        <option value="organization">Organization</option>
                      </mp-select>
                    </mp-form-control>
                    <mp-icon name="arrows-right" margin-x="4" />
                    <mp-form-control>
                      <mp-select
                        placeholder="Select organization"
                        width="280px"
                        is-full-width
                      />
                    </mp-form-control>
                  </mp-flex>
                  <mp-flex gap="6" align-items="center">
                    <mp-tooltip
                      label="Approval will be delegated to the upper position if an employee resigns."
                      position="left"
                      text-align="left"
                    >
                      <mp-toggle font-weight="regular">Auto ascend</mp-toggle>
                    </mp-tooltip>
                    <mp-popover>
                      <mp-popover-trigger>
                        <mp-button-icon name="menu-kebab" />
                      </mp-popover-trigger>
                      <mp-popover-content
                        max-width="56"
                        bg="white"
                        rounded="md"
                        shadow="lg"
                        border-width="1px"
                        border-color="gray.400"
                      >
                        <mp-popover-list>
                          <mp-popover-list-item>
                            Copy approval
                          </mp-popover-list-item>
                          <mp-popover-list-item
                            @click="onDeleteModalToggle(true)"
                          >
                            Delete
                          </mp-popover-list-item>
                        </mp-popover-list>
                      </mp-popover-content>
                    </mp-popover>
                  </mp-flex>
                </mp-flex>
              </mp-accordion-header>
              <mp-accordion-panel
                border="1px"
                border-color="gray.100"
                border-bottom-left-radius="md"
                border-bottom-right-radius="md"
                border-top-width="0px!important"
                border-bottom-width="0px!important"
                background-color="background"
                padding="0"
              >
                <mp-flex>
                  <Draggable
                    v-model="list"
                    v-bind="dragOptions"
                    handle=".handle"
                    style="width: 100%"
                    @start="drag = true"
                    @end="drag = false"
                  >
                    <TransitionGroup
                      type="transition"
                      :name="!drag ? 'list' : null"
                    >
                      <mp-flex
                        width="full"
                        justify-content="space-between"
                        padding-y="2"
                        padding-left="16"
                        padding-right="6"
                        border-top="1px"
                        border-color="gray.100"
                        v-for="(val, index) in list"
                        :key="val.id"
                        :id="val.id"
                      >
                        <mp-flex align-items="center" position="relative">
                          <mp-tooltip label="Drag to reorder layer">
                            <mp-icon name="drag" cursor="move" class="handle" />
                          </mp-tooltip>
                          <mp-box position="absolute" left="11">
                            <mp-badge variant="subtle" variant-color="blue">
                              Approver {{ index + 1 }}
                            </mp-badge>
                          </mp-box>
                          <mp-form-control margin-left="130px">
                            <mp-select
                              background-color="white"
                              value="upper-job-position"
                              width="280px"
                              is-full-width
                              @change="(e) => handleChange(e, index)"
                            >
                              <option value="upper-job-position">
                                Upper job position
                              </option>
                              <option value="employee-id">Employee ID</option>
                              <option value="consultant">Consultant</option>
                              <option value="approval-line">
                                Approval line
                              </option>
                            </mp-select>
                          </mp-form-control>
                          <mp-icon name="arrows-right" margin-x="4" />
                          <mp-flex
                            gap="3"
                            v-if="val.type === 'upper-job-position'"
                          >
                            <mp-form-control>
                              <mp-select
                                background-color="white"
                                value="requested"
                                width="237px"
                                is-full-width
                              >
                                <option value="requested">Requested</option>
                              </mp-select>
                            </mp-form-control>
                            <mp-form-control>
                              <mp-select
                                background-color="white"
                                value="1-upper-position"
                                width="237px"
                                is-full-width
                              >
                                <option value="1-upper-position">
                                  1 upper position
                                </option>
                              </mp-select>
                            </mp-form-control>
                          </mp-flex>
                          <mp-flex gap="3" v-if="val.type === 'approval-line'">
                            <mp-form-control>
                              <mp-select
                                background-color="white"
                                value="requester"
                                width="237px"
                                is-full-width
                              >
                                <option value="requester">Requester</option>
                              </mp-select>
                            </mp-form-control>
                            <mp-form-control>
                              <mp-select
                                background-color="white"
                                value="1-upper-position"
                                width="237px"
                                is-full-width
                              >
                                <option value="1-upper-position">
                                  1 upper position
                                </option>
                              </mp-select>
                            </mp-form-control>
                          </mp-flex>
                          <mp-flex
                            v-if="
                              val.type === 'employee-id' ||
                              val.type === 'consultant'
                            "
                          >
                            <mp-form-control>
                              <mp-select
                                background-color="white"
                                placeholder="Select employee"
                                width="486px"
                                is-full-width
                              >
                                <option value="CPC002 - Alfian Ramadhan">
                                  CPC002 - Alfian Ramadhan
                                </option>
                              </mp-select>
                            </mp-form-control>
                          </mp-flex>
                        </mp-flex>
                        <mp-flex gap="6" align-items="center">
                          <mp-tooltip label="Remove">
                            <mp-button-icon
                              name="minus-circular"
                              @click="handleRemove(val.id)"
                            />
                          </mp-tooltip>
                        </mp-flex>
                      </mp-flex>
                    </TransitionGroup>
                  </Draggable>
                </mp-flex>
                <mp-flex
                  width="full"
                  justify-content="space-between"
                  padding-y="2"
                  padding-left="16"
                  padding-right="6"
                  border-top="1px"
                  border-color="gray.100"
                >
                  <mp-flex gap="6" align-items="center">
                    <mp-button
                      variant="link"
                      left-icon="add-circular"
                      @click="handleAdd"
                    >
                      {{ this.list.length === 0 ? "Set" : "Add" }} approver
                    </mp-button>
                    <mp-text v-if="this.list.length === 0" color="gray.600">
                      OR
                    </mp-text>
                    <mp-radio v-if="this.list.length === 0" is-checked>
                      No need approval
                    </mp-radio>
                  </mp-flex>
                </mp-flex>
              </mp-accordion-panel>
            </mp-accordion-item>
          </mp-accordion>
          <mp-button variant="outline" margin-y="3" left-icon="add-circular">
            Add criteria
          </mp-button>
        </mp-box>
      </mp-box>
    </mp-flex>

    <mp-box
      position="fixed"
      background="white"
      bottom="0"
      width="100%"
      padding-x="6"
      padding-y="5"
      margin-top="8"
      border-top="1px solid"
      border-color="gray.100"
    >
      <mp-flex gap="2" justify-content="right" align-items="center">
        <mp-button variant="ghost">Cancel</mp-button>
        <mp-button>Save</mp-button>
      </mp-flex>
    </mp-box>
    <TimeOffRequestCreateDeleteModal
      :isModalOpen="isDeleteModalOpen"
      :onModalToggle="onDeleteModalToggle"
    />
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpGrid,
  MpGridItem,
  MpDivider,
  MpButton,
  MpButtonIcon,
  MpText,
  MpHeading,
  MpIcon,
  MpBadge,
  MpToggle,
  MpFormControl,
  MpFormLabel,
  MpTextarea,
  MpInput,
  MpRadio,
  MpSelect,
  MpTooltip,
  MpAccordion,
  MpAccordionItem,
  MpAccordionHeader,
  MpAccordionIcon,
  MpAccordionPanel,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
} from "@mekari/pixel";
import Header from "../../components/Header";
import TimeOffRequestCreateDeleteModal from "./TimeOffRequestCreateDeleteModal";
import Draggable from "vuedraggable";

export default {
  name: "TimeOffRequestCreate",
  components: {
    MpBox,
    MpFlex,
    MpGrid,
    MpGridItem,
    MpDivider,
    MpButton,
    MpButtonIcon,
    MpText,
    MpHeading,
    MpIcon,
    MpBadge,
    MpToggle,
    MpFormControl,
    MpFormLabel,
    MpTextarea,
    MpInput,
    MpRadio,
    MpSelect,
    MpTooltip,
    MpAccordion,
    MpAccordionItem,
    MpAccordionHeader,
    MpAccordionIcon,
    MpAccordionPanel,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
    Header,
    TimeOffRequestCreateDeleteModal,
    Draggable,
  },
  data() {
    return {
      isDeleteModalOpen: false,
      drag: false,
      list: [],
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
    handleAdd() {
      this.list.push({
        id: this.list.length + 1,
        type: "upper-job-position",
      });
    },
    handleRemove(id) {
      this.list = this.list.filter((item) => item.id !== id);
    },
    handleChange(e, id) {
      this.list[id].type = e;
    },
    onDeleteModalToggle: function (data) {
      this.isDeleteModalOpen = data;
    },
  },
};
</script>

<style>
.ghost {
  opacity: 0;
}
</style>