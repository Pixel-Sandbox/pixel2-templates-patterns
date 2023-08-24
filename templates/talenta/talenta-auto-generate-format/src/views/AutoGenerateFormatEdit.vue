<template>
  <mp-box>
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 60px)">
      <Sidebar default-is-toggle is-custom with-child />
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
          :padding-x="['4', '6']"
          :display="['inline-block', 'flex']"
          padding-y="1.063rem"
        >
          <mp-box>
            <mp-text font-size="sm" is-link>Auto generate format</mp-text>
            <mp-heading as="h1" font-size="2xl" font-weight="bold">
              Edit format
            </mp-heading>
          </mp-box>
          <mp-flex gap="2">
            <mp-button variant="outline">
              <mp-icon
                name="help"
                variant="duotone"
                size="sm"
                margin-right="2"
              />
              Guidebook
            </mp-button>
          </mp-flex>
        </mp-flex>
        <mp-box
          min-height="calc(100vh - 142px)"
          border-top-width="1px"
          border-left-width="1px"
          border-top-left-radius="md"
          border-color="gray.100"
          background-color="white"
          padding="6"
        >
          <mp-form-control width="65">
            <mp-form-label>Type</mp-form-label>
            <mp-select value="employee-id">
              <option value="employee-id">Employee ID</option>
            </mp-select>
          </mp-form-control>

          <mp-box margin-top="6" margin-bottom="4">
            <mp-heading as="h2" font-size="xl">
              Customize the format
            </mp-heading>
            <mp-text color="gray.600">
              You can customize the format to automatically generate format
              number for your specific needs.
            </mp-text>
          </mp-box>

          <Draggable
            v-model="lists"
            v-bind="options"
            handle=".handle"
            style="width: 100%"
            @start="drag = true"
            @end="drag = false"
          >
            <TransitionGroup type="transition" :name="!drag ? 'list' : null">
              <mp-flex
                v-for="(list, idx) in lists"
                :key="list.id"
                gap="4"
                justify-content="space-between"
                align-items="center"
                border-bottom="1px solid"
                border-color="gray.100"
                padding-y="3"
              >
                <mp-flex align-items="center" flex="1 0 0">
                  <mp-icon
                    name="drag"
                    cursor="move"
                    class="handle"
                    v-mp-tooltip="'Drag to reorder'"
                  />
                  <mp-box width="180px">
                    <mp-badge
                      variant="subtle"
                      variant-color="blue"
                      margin-left="4"
                    >
                      {{ list.type }}
                    </mp-badge>
                  </mp-box>
                  <mp-box v-if="list.type === 'Text'">
                    <mp-input
                      placeholder="e.g. MKR"
                      :value="list.value"
                      width="65"
                      v-mp-tooltip="
                        'Enter free text using your company`s initial or unique code'
                      "
                    />
                  </mp-box>
                  <mp-box v-else-if="list.type === 'Join date'">
                    <mp-autocomplete
                      width="65"
                      :value="list.value"
                      label-prop="name"
                      :content-style="{ width: 'full' }"
                      :data="[
                        { value: 'dd', name: 'dd', extra: '(eg. 17)' },
                        { value: 'ddmm', name: 'ddmm', extra: '(eg. 1708)' },
                        {
                          value: 'ddmmyy',
                          name: 'ddmmyy',
                          extra: '(eg. 170823)',
                        },
                        {
                          value: 'ddmmyyyy',
                          name: 'ddmmyyyy',
                          extra: '(eg. 17082023)',
                        },
                        { value: 'mm', name: 'mm', extra: '(eg. 08)' },
                        { value: 'mmyy', name: 'mmyy', extra: '(eg. 0823)' },
                        {
                          value: 'mmyyyyy',
                          name: 'mmyyyyy',
                          extra: '(eg. 082023)',
                        },
                        { value: 'yy', name: 'yy', extra: '(eg. 23)' },
                        { value: 'yyyy', name: 'yyyy', extra: '(eg. 2023)' },
                      ]"
                    >
                      <template slot-scope="{ item }">
                        <mp-flex gap="2" align-items="center">
                          <mp-text font-size="md">{{ item.name }}</mp-text>
                          <mp-text>{{ item.extra }}</mp-text>
                        </mp-flex>
                      </template>
                    </mp-autocomplete>
                  </mp-box>
                  <mp-box v-if="list.type === 'Branch code'">
                    <mp-input
                      placeholder="e.g. 02"
                      :value="list.value"
                      width="65"
                      is-disabled
                    />
                  </mp-box>
                  <mp-box v-if="list.type === 'Organization code'">
                    <mp-input
                      placeholder="e.g. 4001"
                      :value="list.value"
                      width="65"
                      is-disabled
                    />
                  </mp-box>
                  <mp-flex gap="6" v-if="list.type === 'Increment number'">
                    <mp-input-group>
                      <mp-input-left-addon>
                        <mp-text font-weight="bold" padding-x="3">
                          Start number
                        </mp-text>
                      </mp-input-left-addon>
                      <mp-input
                        placeholder="e.g. 00001"
                        :value="list.value"
                        width="65"
                        v-mp-tooltip="'The start number in the format'"
                      />
                    </mp-input-group>
                    <mp-input-group v-show="list.isAdvance">
                      <mp-input-left-addon>
                        <mp-text font-weight="bold" padding-x="3">
                          Length
                        </mp-text>
                      </mp-input-left-addon>
                      <mp-input
                        :value="list.length"
                        width="40"
                        v-mp-tooltip="'The length of the number to be added'"
                      />
                    </mp-input-group>
                    <mp-input-group v-show="list.isAdvance">
                      <mp-input-left-addon>
                        <mp-text font-weight="bold" padding-x="3">
                          Padding
                        </mp-text>
                      </mp-input-left-addon>
                      <mp-input
                        :value="list.padding"
                        width="40"
                        v-mp-tooltip="
                          'Padding refers to adding numbers or characters to the beginning'
                        "
                      />
                    </mp-input-group>
                  </mp-flex>
                </mp-flex>
                <mp-flex gap="6" align-items="center">
                  <mp-toggle
                    v-if="list.type === 'Increment number'"
                    :is-checked="list.isAdvance"
                    @change="handleAdvanceToggle(idx, list.isAdvance)"
                  >
                    Advance option
                  </mp-toggle>
                  <mp-button-icon
                    name="minus-circular"
                    size="md"
                    v-mp-tooltip="'Remove'"
                  />
                </mp-flex>
              </mp-flex>
            </TransitionGroup>
          </Draggable>

          <mp-popover close-on-select>
            <mp-popover-trigger>
              <mp-button
                variant="outline"
                right-icon="caret-down"
                margin-top="4"
              >
                Add component
              </mp-button>
            </mp-popover-trigger>
            <mp-popover-content
              max-width="65"
              background-color="white"
              border-radius="md"
              box-shadow="lg"
              border-width="1px"
              border-color="gray.400"
            >
              <mp-popover-list>
                <mp-popover-list-item>Text</mp-popover-list-item>
                <mp-popover-list-item>Join date</mp-popover-list-item>
                <mp-popover-list-item is-disabled>
                  <mp-text
                    color="gray.400"
                    v-mp-tooltip="'This item can only be added once'"
                  >
                    Increment number
                  </mp-text>
                </mp-popover-list-item>
                <mp-popover-list-item is-disabled>
                  <mp-text
                    color="gray.400"
                    v-mp-tooltip="'This item can only be added once'"
                  >
                    Branch code
                  </mp-text>
                </mp-popover-list-item>
                <mp-popover-list-item is-disabled>
                  <mp-text
                    color="gray.400"
                    v-mp-tooltip="'This item can only be added once'"
                  >
                    Organization code
                  </mp-text>
                </mp-popover-list-item>
              </mp-popover-list>
            </mp-popover-content>
          </mp-popover>

          <mp-form-control width="400px" margin-y="11" is-disabled>
            <mp-form-label>Format preview</mp-form-label>
            <mp-input value="MKR-170823024001001" />
          </mp-form-control>

          <mp-flex gap="2" justify-content="flex-end">
            <mp-button variant="ghost">Cancel</mp-button>
            <mp-button>Save changes</mp-button>
          </mp-flex>
        </mp-box>
      </mp-box>
    </mp-flex>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpIcon,
  MpBadge,
  MpButton,
  MpButtonIcon,
  MpHeading,
  MpText,
  MpSelect,
  MpFormControl,
  MpFormLabel,
  MpInput,
  MpInputGroup,
  MpInputLeftAddon,
  MpToggle,
  MpAutocomplete,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
} from "@mekari/pixel";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Draggable from "vuedraggable";

export default {
  name: "AutoGenerateFormatEdit",
  components: {
    MpBox,
    MpFlex,
    MpIcon,
    MpBadge,
    MpButton,
    MpButtonIcon,
    MpHeading,
    MpText,
    MpSelect,
    MpFormControl,
    MpFormLabel,
    MpInput,
    MpInputGroup,
    MpInputLeftAddon,
    MpToggle,
    MpAutocomplete,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
    Header,
    Sidebar,
    Draggable,
  },
  data() {
    return {
      drag: false,
      lists: [
        {
          id: 1,
          value: "MKR-",
          type: "Text",
        },
        {
          id: 2,
          value: "ddmmyy",
          type: "Join date",
        },
        {
          id: 3,
          value: null,
          type: "Branch code",
        },
        {
          id: 4,
          value: null,
          type: "Organization code",
        },
        {
          id: 5,
          value: 1,
          type: "Increment number",
          length: 3,
          padding: 0,
          isAdvance: true,
        },
      ],
    };
  },
  methods: {
    handleAdvanceToggle(idx, data) {
      this.lists[idx].isAdvance = !data;
    },
  },
  computed: {
    options() {
      return {
        animation: 200,
        disabled: false,
        ghostClass: "ghost",
      };
    },
  },
};
</script>

<style>
.ghost {
  opacity: 0;
}
</style>