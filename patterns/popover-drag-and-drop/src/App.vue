<template>
  <mp-flex justify-content="flex-start" padding="6" height="100vh">
    <mp-box ref="popover">
      <mp-popover :is-open="isOpen" is-manual>
        <mp-popover-trigger>
          <mp-button-icon
            size="md"
            name="table-view-column"
            @click.native="handleOpen"
          />
        </mp-popover-trigger>

        <mp-popover-content
          max-width="65"
          bg="white"
          rounded="md"
          shadow="lg"
          border-width="1px"
          border-color="gray.400"
        >
          <mp-popover-list position="relative">
            <mp-box
              position="absolute"
              top="5"
              left="0"
              width="full"
              px="3"
              py="2"
            >
              <mp-flex justify="space-between" align="center">
                <mp-text color="gray.600" text-align="left" font-size="sm">
                  COLUMN DISPLAYED
                </mp-text>
                <mp-text
                  v-if="isAnyUnchecked()"
                  font-size="sm"
                  is-link
                  @click.native="handleCheckAll"
                >
                  Select all
                </mp-text>
                <mp-text
                  v-if="!isAnyUnchecked()"
                  font-size="sm"
                  is-link
                  @click.native="handleUncheckAll"
                >
                  Unselect all
                </mp-text>
              </mp-flex>
            </mp-box>
            <mp-box
              width="full"
              overflow-y="auto"
              max-height="288px"
              margin-top="36px"
            >
              <Draggable
                v-model="inactiveLists"
                v-bind="dragOptions"
                handle=".handle"
                group="inactive"
                @start="isDrag = true"
                @end="isDrag = false"
              >
                <TransitionGroup
                  type="transition"
                  :name="!isDrag ? 'list' : null"
                >
                  <mp-popover-list-item
                    v-for="list in inactiveLists"
                    :key="list.id"
                  >
                    <mp-icon
                      size="sm"
                      name="drag"
                      cursor="move"
                      class="handle"
                      margin-right="2"
                    />
                    <mp-checkbox
                      name="checkbox-inactive-group"
                      :is-checked="list.isChecked"
                      is-disabled
                      width="full"
                      v-mp-tooltip="{
                        label: 'Required to displayed',
                        position: 'left',
                      }"
                    >
                      {{ list.name }}
                    </mp-checkbox>
                  </mp-popover-list-item>
                </TransitionGroup>
              </Draggable>
              <Draggable
                v-model="activeLists"
                v-bind="dragOptions"
                handle=".handle"
                group="active"
                @start="isDrag = true"
                @end="isDrag = false"
              >
                <TransitionGroup
                  type="transition"
                  :name="!isDrag ? 'list' : null"
                >
                  <mp-popover-list-item
                    v-for="list in activeLists"
                    :key="list.id"
                  >
                    <mp-icon
                      size="sm"
                      name="drag"
                      cursor="move"
                      class="handle"
                      margin-right="2"
                    />
                    <mp-checkbox
                      name="checkbox-active-group"
                      :is-checked="list.isChecked"
                      width="full"
                      @change="() => (list.isChecked = !list.isChecked)"
                    >
                      {{ list.name }}
                    </mp-checkbox>
                  </mp-popover-list-item>
                </TransitionGroup>
              </Draggable>
            </mp-box>
          </mp-popover-list>
        </mp-popover-content>
      </mp-popover>
    </mp-box>
  </mp-flex>
</template>

<script>
import Draggable from "vuedraggable";
import {
  MpFlex,
  MpBox,
  MpText,
  MpIcon,
  MpCheckbox,
  MpButtonIcon,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
} from "@mekari/pixel";

export default {
  name: "App",
  components: {
    MpFlex,
    MpBox,
    MpText,
    MpIcon,
    MpCheckbox,
    MpButtonIcon,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
    Draggable,
  },
  data() {
    return {
      isOpen: false,
      isDrag: false,
      inactiveLists: [
        {
          id: 1,
          name: "Asset name",
          isChecked: true,
        },
      ],
      activeLists: [
        {
          id: 2,
          name: "Asset number",
          isChecked: false,
        },
        {
          id: 3,
          name: "Category",
          isChecked: false,
        },
        {
          id: 4,
          name: "Assigned to",
          isChecked: false,
        },
        {
          id: 5,
          name: "Tags",
          isChecked: true,
        },
        {
          id: 6,
          name: "Latest update",
          isChecked: false,
        },
        {
          id: 7,
          name: "Purchase date",
          isChecked: false,
        },
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
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.handleClickOutside);
  },
  methods: {
    handleOpen() {
      this.isOpen = true;
    },
    handleClose() {
      this.isOpen = false;
    },
    handleClickOutside(e) {
      const el = this.$refs.popover.$el;
      const isClickOutside = e.target !== el && !el.contains(e.target);

      isClickOutside && this.handleClose();
    },
    handleCheckAll() {
      this.activeLists.forEach((item) => {
        item.isChecked = true;
      });
    },
    handleUncheckAll() {
      this.activeLists.forEach((item) => {
        item.isChecked = false;
      });
    },
    isAnyUnchecked() {
      return this.activeLists.some((item) => item.isChecked === false);
    },
  },
};
</script>

<style>
.ghost {
  opacity: 0;
}
</style>
