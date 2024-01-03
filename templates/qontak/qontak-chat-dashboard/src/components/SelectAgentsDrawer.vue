<template>
  <mp-drawer :is-open="isDrawerOpen" :on-close="handleDrawerClose">
    <mp-drawer-overlay />
    <mp-drawer-content width="800px" max-width="800px">
      <mp-drawer-header>Select agents</mp-drawer-header>
      <mp-drawer-close-button />
      <mp-drawer-body padding="0">
        <mp-flex height="calc(100vh - 133px)">
          <mp-box width="50%" border-right="1px" border-color="gray.100">
            <mp-flex
              justify-content="space-between"
              align-items="center"
              padding-x="6"
              padding-top="6"
            >
              <mp-text font-weight="bold">
                Showing {{ this.employees.length }} agents
              </mp-text>
              <mp-button variant="link">Select all</mp-button>
            </mp-flex>

            <mp-flex
              gap="4"
              justify-content="space-between"
              align-items="center"
              margin-top="4"
              margin-bottom="4"
              padding-x="6"
            >
              <mp-input-tag
                id="input-tag"
                placeholder="Create new tag"
                :data="dataTag"
                :max-tags="3"
                :suggestions="suggestions"
                is-show-suggestions
                is-show-icon-chevron-down
                :content-style="{ width: '48' }"
                :trigger-style="{ maxHeight: '24', overflowY: 'auto' }"
                @change="handleChange"
                @input="handleInput"
                @select="handleSelect"
              />
              <mp-box>
                <mp-button variant="outline" left-icon="filter">
                  Filter
                </mp-button>
              </mp-box>
            </mp-flex>

            <mp-flex
              position="relative"
              direction="column"
              overflow="scroll"
              height="calc(100% - 116px)"
            >
              <mp-flex
                v-for="(employee, index) in employees"
                :key="index"
                role="group"
                justify-content="space-between"
                align-items="center"
                padding-y="3"
                padding-x="6"
                border-bottom="1px"
                border-color="gray.100"
                cursor="pointer"
                :_hover="{
                  backgroundColor: 'ice.50',
                }"
                @click="() => handleSelectEmployee(employee, index)"
              >
                <mp-flex align-items="center">
                  <mp-avatar :name="employee.name" />
                  <mp-box margin-left="4">
                    <mp-text>{{ employee.name }}</mp-text>
                    <mp-text font-size="sm">{{ employee.extra }}</mp-text>
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
              <mp-box id="scroll-end" height="1px" flex="none"> </mp-box>
            </mp-flex>
          </mp-box>
          <mp-box width="50%">
            <mp-flex
              justify-content="space-between"
              align-items="center"
              padding-x="6"
              padding-top="6"
              margin-bottom="4"
            >
              <mp-text font-weight="bold">
                {{ this.selectedEmployees.length }} agents selected
              </mp-text>
              <mp-button variant="link" variant-color="gray">
                Clear section
              </mp-button>
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
              position="relative"
              direction="column"
              overflow="scroll"
              height="calc(100% - 63px)"
            >
              <mp-flex
                v-for="(employee, index) in selectedEmployees"
                :key="index"
                role="group"
                justify-content="space-between"
                align-items="center"
                padding-y="3"
                padding-x="6"
                border-bottom="1px"
                border-color="gray.100"
                cursor="pointer"
                :_hover="{
                  backgroundColor: 'ice.50',
                }"
                @click="() => handleUnselectEmployee(employee, index)"
              >
                <mp-flex align-items="center">
                  <mp-avatar :name="employee.name" />
                  <mp-box margin-left="4">
                    <mp-text>{{ employee.name }}</mp-text>
                    <mp-text font-size="sm">{{ employee.extra }}</mp-text>
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
            </mp-flex>
          </mp-box>
        </mp-flex>
      </mp-drawer-body>
      <mp-drawer-footer
        z-index="1"
        border-top="1px"
        background="white"
        border-color="gray.100"
        padding="6"
      >
        <mp-button variant="ghost" mr="3" @click="handleDrawerClose">
          Cancel
        </mp-button>
        <mp-button>Done</mp-button>
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
  MpDrawer,
  MpDrawerOverlay,
  MpDrawerContent,
  MpDrawerCloseButton,
  MpDrawerHeader,
  MpDrawerBody,
  MpDrawerFooter,
  MpInputTag,
} from "@mekari/pixel";

export default {
  name: "SelectAgentsDrawer",
  components: {
    MpFlex,
    MpBox,
    MpText,
    MpHeading,
    MpAvatar,
    MpIcon,
    MpButton,
    MpDrawer,
    MpDrawerOverlay,
    MpDrawerContent,
    MpDrawerCloseButton,
    MpDrawerHeader,
    MpDrawerBody,
    MpDrawerFooter,
    MpInputTag,
  },
  props: {
    isDrawerOpen: [Boolean],
    handleDrawerOpen: [Function],
    handleDrawerClose: [Function],
  },
  data: function () {
    return {
      suggestions: ["Jakarta", "Medan", "Bandung", "Surabaya"],
      dataTag: [
        {
          text: "Bali",
          id: "tag-bali",
          value: {
            id: "1",
            label: "Bali",
            value: "Bali",
          },
          ariaLabel: "tag",
          isInvalid: false,
          isReadyOnly: true,
        },
      ],
      observer: null,
      scrollEndElement: null,
      employees: [
        {
          name: "Agent 1",
          extra: "agent-1@mail.com",
        },
        {
          name: "Agent 2",
          extra: "agent-2@mail.com",
        },
        {
          name: "Agent 3",
          extra: "agent-3@mail.com",
        },
        {
          name: "Agent 4",
          extra: "agent-4@mail.com",
        },
        {
          name: "Agent 5",
          extra: "agent-5@mail.com",
        },
        {
          name: "Agent 6",
          extra: "agent-6@mail.com",
        },
        {
          name: "Agent 7",
          extra: "agent-7@mail.com",
        },
        {
          name: "Agent 8",
          extra: "agent-8@mail.com",
        },
        {
          name: "Agent 9",
          extra: "agent-9@mail.com",
        },
        {
          name: "Agent 10",
          extra: "agent-10@mail.com",
        },
        {
          name: "Agent 11",
          extra: "agent-11@mail.com",
        },
        {
          name: "Agent 12",
          extra: "agent-12@mail.com",
        },
        {
          name: "Agent 13",
          extra: "agent-13@mail.com",
        },
      ],
      selectedEmployees: [
        {
          name: "Agent 0",
          extra: "agent-0@mail.com",
        },
      ],
    };
  },
  updated() {
    this.$nextTick(() => {
      this.handleActiveObserver();
    });
  },
  destroyed() {
    this.handleDestroyObserver;
  },
  methods: {
    handleSelectEmployee(data, index) {
      this.employees.splice(index, 1);
      this.selectedEmployees.push(data);
    },
    handleUnselectEmployee(data, index) {
      this.selectedEmployees.splice(index, 1);
      this.employees.push(data);
    },
    handleActiveObserver() {
      if (this.isDrawerOpen) {
        const scrollEndElement = document.getElementById("scroll-end");
        const newEmployees = [
          {
            name: `Agent ${this.employees.length + 1}`,
            extra: `agent-${this.employees.length + 1}@mail.com`,
          },
          {
            name: `Agent ${this.employees.length + 2}`,
            extra: `agent-${this.employees.length + 2}@mail.com`,
          },
          {
            name: `Agent ${this.employees.length + 3}`,
            extra: `agent-${this.employees.length + 3}@mail.com`,
          },
          {
            name: `Agent ${this.employees.length + 4}`,
            extra: `agent-${this.employees.length + 4}@mail.com`,
          },
          {
            name: `Agent ${this.employees.length + 5}`,
            extra: `agent-${this.employees.length + 5}@mail.com`,
          },
        ];

        this.observer = new IntersectionObserver(([entry]) => {
          if (entry && entry.isIntersecting) {
            console.log("fetch new employees");
            this.employees.push(...newEmployees);
          }
        }, {});

        this.observer.observe(scrollEndElement, { threshold: 1.0 });
      }
    },
    handleDestroyObserver() {
      if (this.observer.disconnect) {
        this.observer.disconnect();
      }
      this.observer = null;
    },
    handleChange(data) {
      console.log(
        "DATA:",
        data[data.length - 1],
        data[data.length - 1].text,
        data[data.length - 1].width
      );
      this.dataTag = data;
      console.log("DATA TAG:", this.dataTag);
    },
    handleInput(val) {
      console.log("INPUT:", val);
    },
    handleSelect(val) {
      console.log("SELECT:", val);
    },
  },
};
</script>
