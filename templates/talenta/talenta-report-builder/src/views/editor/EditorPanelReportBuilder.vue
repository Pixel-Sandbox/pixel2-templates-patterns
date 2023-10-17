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
      <mp-box padding-x="4" overflow-y="auto" max-height="calc(100vh - 244px)">
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
              max-height="calc(100vh - 244px)"
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
                  Fields ({{ fieldData.length }})
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
              max-height="calc(100vh - 244px)"
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
        { id: "a8494f7f-ae07-42ab-a4cc-22942b4b1f33", name: "Maud" },
        { id: "bd3433ed-6a15-40a6-9803-406a14d27ba9", name: "Aubrette" },
        { id: "57c04036-c538-425c-b605-465a4a0f5ac3", name: "Brittan" },
        { id: "c1003ed5-23c7-4b8f-9b15-11f445ee24af", name: "Lilah" },
        { id: "7133b38a-819b-4a18-95f8-70c983b0a037", name: "Maribeth" },
        { id: "f10ed291-7663-455a-bf6a-cc8c022fb672", name: "Reeva" },
        { id: "7eaeb02c-0f0d-4e65-8fff-d4a2ff7d1f1d", name: "Andeee" },
        { id: "ec57b50a-18c9-42cc-8e32-2a44ec079863", name: "Mercy" },
        { id: "d4d2c411-91d0-48f1-a0f9-837292fae61c", name: "Novelia" },
        { id: "ebd67e00-31e0-4939-aa80-7f0a54ec2bbd", name: "Francklyn" },
        { id: "2e4a3c71-388f-457f-b822-94eeb9ddd018", name: "Berky" },
        { id: "aa42eae7-c8d9-4113-875b-9b997b136d76", name: "Geraldine" },
        { id: "2bcdfab1-6355-4ebb-aac8-1b05b490faa2", name: "Gusti" },
        { id: "8b434882-f14f-4fc5-8bae-8425716001bd", name: "Thorn" },
        { id: "740f66fb-c387-4eab-ba2b-4c579041359b", name: "Loy" },
        { id: "89f6d4eb-9db6-4624-b9cd-a52cc871292e", name: "Grethel" },
        { id: "ef88aa96-c09a-4892-b2e6-a8dc26674b94", name: "Dina" },
        { id: "121c437e-bdcb-4999-8ee9-732a3bf0ef6d", name: "Ignacio" },
        { id: "79fb7837-4414-466b-bba7-29096dbff855", name: "Jillana" },
        { id: "a124d675-125c-4d17-84f9-7198c19ead62", name: "Sim" },
        { id: "e9d33085-da8e-4c1a-bf05-7d5d71a8761c", name: "Omero" },
        { id: "7ed81c4b-afa5-4da7-abaf-ae57596ca373", name: "Harlie" },
        { id: "8305970a-ebb6-451a-bd21-93451b96695c", name: "Felice" },
        { id: "e57872af-a67a-440d-8478-2ec15396573c", name: "Lina" },
        { id: "d717cb8e-ba5f-4b82-a13b-a98ea604d83c", name: "Alfie" },
        { id: "352d85d7-3f6c-4967-aec8-80df39ea8598", name: "Betsey" },
        { id: "82f55834-d617-4c5d-9ae7-395bccad37ed", name: "Arda" },
        { id: "2023bdaa-8846-454f-befa-c8ecb46cfe38", name: "Nina" },
        { id: "1bdafdde-7f8b-4029-8ec3-4aaead67da58", name: "Kipper" },
        { id: "caa90577-3b68-4512-a812-81b737ea28b5", name: "Hersh" },
        { id: "e22f6aee-eb82-4cd4-a99a-83ef2d9ffe38", name: "Lyle" },
        { id: "2790d2b1-2dd7-43a7-a3e6-c4bc195b947a", name: "Ingamar" },
        { id: "cd0c591a-f515-4125-890c-a07f4983149b", name: "Netti" },
        { id: "efe910c6-c484-44b0-85da-3a63c9f1fda2", name: "Byrle" },
        { id: "5933c610-c3dd-4e7b-89d7-5be92caf0fd1", name: "Sherye" },
        { id: "eec55799-004c-477e-b410-a80184fbee99", name: "Gracie" },
        { id: "b0fc21c4-acd1-4878-80f5-6a6cad4c893a", name: "Udell" },
        { id: "d8f9d76f-b513-4c0f-a56d-8a2fa3047046", name: "Jeni" },
        { id: "1126fe56-df8d-42f7-ae8e-f9c557748855", name: "Drona" },
        { id: "c681beb5-a5b2-416b-842f-d9554731c1ae", name: "Kendrick" },
        { id: "7854520d-cb41-418d-ba98-b1783b26d131", name: "Reggie" },
        { id: "9ee22ffa-92a5-41d8-8975-304a0c0d8269", name: "Rutledge" },
        { id: "ac3d9e16-23fd-4102-8a9b-be24ae3edccc", name: "Yorgo" },
        { id: "39133a1c-f520-4af6-ac43-6e2a63f56b3a", name: "Essie" },
        { id: "215ebce8-9f08-40b3-8054-a10a2379f00e", name: "Rozina" },
        { id: "8771e478-91ab-488c-ac93-67c460da2e9a", name: "Vanda" },
        { id: "d3c53a92-b7fe-495f-9eab-a476ffd247cf", name: "Hollis" },
        { id: "1653c602-7a43-4f64-b98b-b7c5d9a57dfa", name: "Daniele" },
        { id: "6a67e006-6548-49ed-a339-6bc11c130eb2", name: "Iseabal" },
        { id: "790765cf-d6d8-4d7a-b241-f7ef1697754c", name: "Randie" },
        { id: "b74dc8ed-6e7d-475a-89bc-0acb6833b515", name: "Russ" },
        { id: "7f886c97-e8fc-4754-a847-7e3d4ebe2710", name: "Vladimir" },
        { id: "e0fe3e48-b6a5-44d4-9049-e361f14a1d0d", name: "Merv" },
        { id: "45783e77-7060-4462-aa31-ee701e8dc368", name: "Bekki" },
        { id: "921d1dce-6131-404a-a51b-911618a52faa", name: "Thia" },
        { id: "2c7b59c2-cb95-4b71-b923-4de6f12a3f47", name: "Heath" },
        { id: "2b384d35-6fd4-4af6-aa83-b57c86884732", name: "Ettore" },
        { id: "f0046d12-b6ee-457a-bf0e-a66ff2ebc93f", name: "Jude" },
        { id: "c094999f-abcc-4a96-9430-a9cf487d7f78", name: "Steven" },
        { id: "86273d9f-943e-444f-903d-72d1c5d3ad00", name: "Lynne" },
        { id: "292640b3-4493-4fe6-983d-cc82d168da27", name: "Quincey" },
        { id: "f1993c82-33e5-4a27-b518-25fd4865f16c", name: "Maurizia" },
        { id: "06b273b5-4b8a-4191-a422-76ea31579111", name: "Corena" },
        { id: "e0ee6093-6cdc-4b9c-b329-f0ddb212971a", name: "Nataline" },
        { id: "81279ada-da7e-43fe-a9ab-1fb9d3088f02", name: "Ophelie" },
        { id: "12f52da1-2e50-4c21-8c91-1687bea5a8f1", name: "Lovell" },
        { id: "7d55cb0f-e553-4323-979a-2e2e263ff6a1", name: "Jerrold" },
        { id: "6668a32c-4c9b-4fc7-9e11-034a6fbbd19d", name: "Goldie" },
        { id: "77b4e137-c46b-4554-9ad7-c82840080ba5", name: "Ninon" },
        { id: "b972c715-c8b4-469f-be7a-c8adb41b83ef", name: "Sybille" },
        { id: "14deb6ce-ddc7-48ce-a049-d20691298a65", name: "Estevan" },
        { id: "03ff0495-776b-4a47-9b36-2f93f09c1139", name: "Damiano" },
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
.scroller {
  height: 100%;
}
.list-dynamic {
  width: 100%;
  height: 500px;
  border: 2px solid;
  border-radius: 3px;
  overflow-y: auto;
  border-color: dimgray;
}
.list-item-dynamic {
  display: flex;
  align-items: center;
  padding: 1em;
  border-bottom: 1px solid;
  border-color: lightgray;
}
</style>