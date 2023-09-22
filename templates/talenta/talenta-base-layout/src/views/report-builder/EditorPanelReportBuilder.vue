<template>
  <mp-flex>
    <mp-box width="250px" border-left="1px solid" border-color="gray.100">
      <mp-heading
        as="h3"
        color="dark"
        font-size="lg"
        margin-bottom="6.5"
        padding-top="4"
        padding-x="4"
      >
        Table editor
      </mp-heading>
      <mp-box padding-x="4">
        <mp-button variant="outline" width="full" margin-bottom="2.5">
          <mp-icon name="filter" variant="duotone" margin-right="2" />
          All filter
        </mp-button>
      </mp-box>
      <mp-box padding-x="4" overflow-y="auto" max-height="calc(100vh - 284px)">
        <mp-box margin-bottom="8">
          <mp-text margin-y="4" font-weight="semibold" color="gray.600">
            Rows
          </mp-text>
          <draggable
            v-model="rowData"
            v-bind="dragOptions"
            handle=".handle"
            style="width: 100%"
            :group="{ name: 'row-column-group' }"
            @change="handleDragMove"
            @start="isDrag = true"
            @end="isDrag = false"
          >
            <transition-group
              type="transition"
              :name="!isDrag ? 'rowData' : null"
            >
              <mp-box
                role="group"
                v-for="item in rowData"
                :key="item.id"
                border="1px solid"
                border-color="gray.100"
                border-radius="md"
                padding-y="2"
                padding-x="3"
                margin-bottom="2"
                background-color="white"
              >
                <mp-flex justify-content="space-between" align-items="center">
                  <mp-flex align-items="center">
                    <mp-icon
                      name="drag"
                      size="sm"
                      margin-right="2"
                      class="handle"
                      cursor="move"
                    />
                    <mp-text font-size="sm">
                      {{ item.name }}
                    </mp-text>
                  </mp-flex>
                  <mp-icon
                    name="minus-circular"
                    size="sm"
                    class="handle"
                    cursor="pointer"
                    opacity="0"
                    :_groupHover="{
                      opacity: '1',
                    }"
                  />
                </mp-flex>
              </mp-box>
            </transition-group>
          </draggable>

          <mp-flex
            border="1px dashed"
            border-radius="md"
            border-color="gray.100"
            justify-content="center"
            padding-y="2"
            margin-bottom="2"
          >
            <mp-text color="gray.100" font-size="sm">Drag field here</mp-text>
          </mp-flex>
        </mp-box>
        <mp-box margin-bottom="8">
          <mp-text
            margin-top="6"
            margin-bottom="4"
            font-weight="semibold"
            color="gray.600"
          >
            Columns
          </mp-text>
          <draggable
            v-model="columnData"
            v-bind="dragOptions"
            handle=".handle"
            style="width: 100%"
            :group="{ name: 'row-column-group' }"
            @change="handleDragMove"
            @start="isDrag = true"
            @end="isDrag = false"
          >
            <transition-group
              type="transition"
              :name="!isDrag ? 'columnData' : null"
            >
              <mp-box
                role="group"
                v-for="item in columnData"
                :key="item.id"
                border="1px solid"
                border-color="gray.100"
                border-radius="md"
                padding-y="2"
                padding-x="3"
                margin-bottom="2"
                background-color="white"
              >
                <mp-flex justify-content="space-between" align-items="center">
                  <mp-flex align-items="center">
                    <mp-icon
                      name="drag"
                      size="sm"
                      margin-right="2"
                      class="handle"
                      cursor="move"
                    />
                    <mp-text font-size="sm">
                      {{ item.name }}
                    </mp-text>
                  </mp-flex>
                  <mp-icon
                    name="minus-circular"
                    size="sm"
                    cursor="pointer"
                    opacity="0"
                    :_groupHover="{
                      opacity: '1',
                    }"
                  />
                </mp-flex>
              </mp-box>
            </transition-group>
          </draggable>

          <mp-flex
            border="1px dashed"
            border-radius="md"
            border-color="gray.100"
            justify-content="center"
            padding-y="2"
            margin-bottom="2"
          >
            <mp-text color="gray.100" font-size="sm">Drag field here</mp-text>
          </mp-flex>
        </mp-box>
        <mp-box margin-bottom="8">
          <mp-text
            margin-top="6"
            margin-bottom="4"
            font-weight="semibold"
            color="gray.600"
          >
            Values
          </mp-text>
          <draggable
            v-model="valueData"
            v-bind="dragOptions"
            handle=".handle"
            style="width: 100%"
            :group="{ name: 'value' }"
            @change="handleDragMove"
            @start="isDrag = true"
            @end="isDrag = false"
          >
            <transition-group
              type="transition"
              :name="!isDrag ? 'valueData' : null"
            >
              <mp-box
                role="group"
                v-for="item in valueData"
                :key="item.id"
                border="1px solid"
                border-color="gray.100"
                border-radius="md"
                padding-y="2"
                padding-x="3"
                margin-bottom="2"
                background-color="blue.50"
              >
                <mp-tooltip
                  label="The last value cannot be removed."
                  position="bottom"
                  :opacity="valueData.length > 1 ? 0 : 1"
                >
                  <mp-flex justify-content="space-between" align-items="center">
                    <mp-flex align-items="center">
                      <mp-icon
                        name="drag"
                        size="sm"
                        margin-right="2"
                        :class="valueData.length > 1 ? 'handle' : undefined"
                        cursor="move"
                      />
                      <mp-text font-size="sm">
                        {{ item.name }}
                      </mp-text>
                    </mp-flex>
                    <mp-icon
                      v-if="valueData.length > 1"
                      name="minus-circular"
                      size="sm"
                      class="handle"
                      cursor="pointer"
                      opacity="0"
                      :_groupHover="{
                        opacity: '1',
                      }"
                    />
                  </mp-flex>
                </mp-tooltip>
              </mp-box>
            </transition-group>
          </draggable>

          <mp-flex
            border="1px dashed"
            border-radius="md"
            border-color="gray.100"
            justify-content="center"
            padding-y="2"
            margin-bottom="2"
          >
            <mp-text color="gray.100" font-size="sm">Drag field here</mp-text>
          </mp-flex>
        </mp-box>
      </mp-box>
    </mp-box>
    <mp-box
      :width="isPanelToggle ? '250px' : '60px'"
      border-left="1px solid"
      border-color="gray.100"
      position="relative"
    >
      <mp-box v-if="isPanelToggle">
        <mp-heading as="h3" color="dark" font-size="lg" padding="4">
          Panels
        </mp-heading>
        <mp-tabs>
          <mp-tab-list
            gap="0"
            border-bottom="1px solid"
            border-color="gray.100"
            padding-x="4"
            margin-bottom="0"
          >
            <mp-tab width="100%">Fields</mp-tab>
            <mp-tab width="100%">Values</mp-tab>
          </mp-tab-list>
          <mp-tab-panels>
            <mp-tab-panel
              padding-x="4"
              overflow-y="auto"
              max-height="calc(100vh - 284px)"
            >
              <mp-box margin-bottom="6">
                <mp-text margin-y="4" font-weight="semibold" color="dark">
                  Select field
                </mp-text>
                <mp-box margin-bottom="2">
                  <mp-select size="md" value="all-category">
                    <option value="all-category">All category</option>
                  </mp-select>
                </mp-box>
                <mp-input-group>
                  <mp-input-left-addon :with-background="false">
                    <mp-icon name="search" size="sm" />
                  </mp-input-left-addon>
                  <mp-input placeholder="Search..." />
                </mp-input-group>
              </mp-box>
              <mp-box margin-bottom="8">
                <mp-text margin-y="4" font-weight="semibold" color="dark">
                  Periods
                  <mp-tooltip
                    label="This period is only for data preview."
                    position="bottom"
                  >
                    <mp-icon name="info" size="sm" margin-left="1" />
                  </mp-tooltip>
                </mp-text>
                <draggable
                  v-model="periodData"
                  v-bind="dragOptions"
                  handle=".handle"
                  style="width: 100%"
                  :group="{ name: 'row-column-group', put: false }"
                  @change="handleDragMove"
                  @start="isDrag = true"
                  @end="isDrag = false"
                >
                  <transition-group
                    type="transition"
                    :name="!isDrag ? 'periodData' : null"
                  >
                    <mp-box
                      role="group"
                      v-for="item in periodData"
                      :key="item.id"
                      border="1px solid"
                      border-color="gray.100"
                      border-radius="md"
                      padding-y="2"
                      padding-x="3"
                      margin-bottom="2"
                      background-color="white"
                    >
                      <mp-flex
                        justify-content="space-between"
                        align-items="center"
                      >
                        <mp-flex align-items="center">
                          <mp-icon
                            name="drag"
                            size="sm"
                            margin-right="2"
                            class="handle"
                            cursor="move"
                          />
                          <mp-text font-size="sm">
                            {{ item.name }}
                          </mp-text>
                        </mp-flex>
                      </mp-flex>
                    </mp-box>
                  </transition-group>
                </draggable>
              </mp-box>
              <mp-box margin-bottom="20">
                <mp-text margin-y="4" font-weight="semibold" color="dark">
                  Fields
                </mp-text>
                <draggable
                  v-model="fieldData"
                  v-bind="dragOptions"
                  handle=".handle"
                  style="width: 100%"
                  :group="{ name: 'row-column-group', put: false }"
                  @change="handleDragMove"
                  @start="isDrag = true"
                  @end="isDrag = false"
                >
                  <transition-group
                    type="transition"
                    :name="!isDrag ? 'fieldData' : null"
                  >
                    <mp-box
                      role="group"
                      v-for="item in fieldData"
                      :key="item.id"
                      border="1px solid"
                      border-color="gray.100"
                      border-radius="md"
                      padding-y="2"
                      padding-x="3"
                      margin-bottom="2"
                      background-color="white"
                    >
                      <mp-flex
                        justify-content="space-between"
                        align-items="center"
                      >
                        <mp-flex align-items="center">
                          <mp-icon
                            name="drag"
                            size="sm"
                            margin-right="2"
                            class="handle"
                            cursor="move"
                          />
                          <mp-text font-size="sm">
                            {{ item.name }}
                          </mp-text>
                        </mp-flex>
                      </mp-flex>
                    </mp-box>
                  </transition-group>
                </draggable>
              </mp-box>
            </mp-tab-panel>
            <mp-tab-panel
              padding-x="4"
              overflow-y="auto"
              max-height="calc(100vh - 284px)"
            >
              <mp-text margin-y="4" font-weight="semibold" color="dark">
                Value predefined
              </mp-text>
              <draggable
                v-model="valuePreDefined"
                v-bind="dragOptions"
                handle=".handle"
                style="width: 100%"
                :group="{ name: 'value' }"
                @change="handleDragMove"
                @start="isDrag = true"
                @end="isDrag = false"
              >
                <transition-group
                  type="transition"
                  :name="!isDrag ? 'valuePreDefined' : null"
                >
                  <mp-box
                    role="group"
                    v-for="item in valuePreDefined"
                    :key="item.id"
                    border="1px solid"
                    border-color="gray.100"
                    border-radius="md"
                    padding-y="2"
                    padding-x="3"
                    margin-bottom="2"
                    background-color="blue.50"
                  >
                    <mp-flex
                      justify-content="space-between"
                      align-items="center"
                    >
                      <mp-flex align-items="center">
                        <mp-icon
                          name="drag"
                          size="sm"
                          margin-right="2"
                          class="handle"
                          cursor="move"
                        />
                        <mp-text font-size="sm">
                          {{ item.name }}
                        </mp-text>
                      </mp-flex>
                    </mp-flex>
                  </mp-box>
                </transition-group>
              </draggable>
            </mp-tab-panel>
          </mp-tab-panels>
        </mp-tabs>
      </mp-box>

      <mp-box
        gap="4"
        background-color="white"
        position="absolute"
        border-top="1px solid"
        border-color="gray.100"
        bottom="77px"
        left="0"
        right="0"
        padding="2"
        width="100%"
      >
        <mp-pseudo-box
          role="group"
          border-radius="sm"
          transition="all .2s ease"
          padding-x="2.5"
          padding-y="2"
          :_hover="{
            backgroundColor: 'ice.50',
            color: 'blue.400',
            cursor: 'pointer',
          }"
          @click="handlePanelToggle"
        >
          <mp-stack direction="row" align="center">
            <mp-icon
              :name="isPanelToggle ? 'arrow-expand' : 'arrow-collapse'"
              margin-right="2"
            />
            <mp-text v-if="isPanelToggle">Collapse</mp-text>
          </mp-stack>
        </mp-pseudo-box>
      </mp-box>
    </mp-box>
  </mp-flex>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpText,
  MpHeading,
  MpButton,
  MpPseudoBox,
  MpStack,
  MpTooltip,
  MpIcon,
  MpSelect,
  MpInput,
  MpInputGroup,
  MpInputLeftAddon,
  MpTabs,
  MpTabList,
  MpTab,
  MpTabPanels,
  MpTabPanel,
} from "@mekari/pixel";
import draggable from "vuedraggable";

export default {
  name: "EditorPanelReportBuilder",
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpHeading,
    MpButton,
    MpPseudoBox,
    MpStack,
    MpTooltip,
    MpIcon,
    MpSelect,
    MpInput,
    MpInputGroup,
    MpInputLeftAddon,
    MpTabs,
    MpTabList,
    MpTab,
    MpTabPanels,
    MpTabPanel,
    draggable,
  },
  props: {
    handleDragMove: [Function],
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        emptyInsertThreshold: 26,
        ghostClass: "ghost-class",
        dragClass: "drag-class",
      };
    },
  },
  data() {
    return {
      isDrag: false,
      isPanelToggle: true,
      columnData: [
        { id: 1, name: "Month" },
        { id: 2, name: "Employement status" },
        { id: 3, name: "Gender" },
      ],
      rowData: [
        { id: 4, name: "Organization" },
        { id: 5, name: "Job Position" },
      ],
      valueData: [{ id: 6, name: "Count Employee ID" }],
      periodData: [
        { id: 7, name: "Year" },
        { id: 8, name: "Daily" },
      ],
      fieldData: [
        { id: 9, name: "Employee ID" },
        { id: 10, name: "Barcode" },
        { id: 11, name: "Job Level" },
        { id: 12, name: "Length of Service" },
        { id: 13, name: "New Hires" },
        { id: 14, name: "Grade" },
        { id: 15, name: "Class" },
      ],
      valuePreDefined: [
        { id: 16, name: "SUM of Salary" },
        { id: 17, name: "SUM of THP" },
      ],
    };
  },
  methods: {
    handlePanelToggle() {
      this.isPanelToggle = !this.isPanelToggle;
    },
  },
};
</script>

<style>
.ghost-class {
  border: 1px dashed #4B61DD;
  padding: 0;
}
.ghost-class > div {
  opacity: 0;
}
.drag-class {
  border: 1px solid #4B61DD;
}
</style>