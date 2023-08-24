<template>
  <mp-box>
    <mp-button variant="outline" @click="onOpen"
      >Offboarding detail modal</mp-button
    >
    <mp-modal
      size="full"
      :is-open="isOpen"
      :on-close="onClose"
      scroll-behavior="inside"
    >
      <mp-modal-content>
        <mp-modal-header>
          <mp-heading as="h1" font-size="2xl"
            >Jessie Tan offboarding task details</mp-heading
          >
        </mp-modal-header>
        <mp-modal-close-button top="12px!important" />
        <mp-modal-body>
          <mp-box
            :padding-x="['2', '8']"
            width="full"
            max-width="100ch"
            margin-x="auto"
            margin-bottom="10"
          >
            <mp-flex gap="3" align-items="center">
              <mp-avatar
                :show-border="false"
                name="Jessie Tan"
                background-color="stone"
                size="lg"
                margin-right="2"
              />
              <mp-flex flex-direction="column">
                <mp-heading as="h2" font-size="xl"
                  >CPX083 - Jessie Tan</mp-heading
                >
                <mp-text is-link>jessie.tan@theoffice.co.id</mp-text>
                <mp-text font-size="sm" color="gray.600"
                  >jessie.tan@theoffice.co.id</mp-text
                >
              </mp-flex>
            </mp-flex>
            <mp-accordion
              margin-top="7"
              :default-index="[0, 1, 2]"
              allow-multiple
              allow-toggle
            >
              <mp-accordion-item v-for="item in listData" :key="item.id">
                <mp-accordion-header>
                  <mp-accordion-icon />
                  <mp-box flex="1 0 0" text-align="left">
                    {{ item.name }}
                    <mp-badge
                      :variant-color="
                        item.name === 'To do'
                          ? 'gray'
                          : item.name === 'In progress'
                          ? 'orange'
                          : 'green'
                      "
                      variant="solid"
                    >
                      {{ item.items.length }}
                    </mp-badge>
                  </mp-box>
                </mp-accordion-header>
                <mp-accordion-panel padding-top="0" padding-x="8">
                  <mp-table-container
                    width="full"
                    max-width="full"
                    overflow="scroll"
                  >
                    <mp-table :is-hoverable="false">
                      <mp-table-body>
                        <mp-table-row
                          v-for="(item_child, index) in item.items"
                          :key="item_child.id"
                        >
                          <mp-table-cell
                            as="td"
                            :border-bottom="
                              index !== item.items.length - 1 ? '1px' : '0px'
                            "
                            border-color="gray.100"
                          >
                            <mp-text font-weight="semibold" is-link>{{
                              item_child.name
                            }}</mp-text>
                            <mp-text font-size="sm" color="gray.600">
                              {{ item_child.caption }}
                            </mp-text>
                          </mp-table-cell>
                          <mp-table-cell
                            as="td"
                            :border-bottom="
                              index !== item.items.length - 1 ? '1px' : '0px'
                            "
                            border-color="gray.100"
                          >
                            <mp-flex justify-content="flex-end">
                              <mp-avatar-group max="3">
                                <mp-avatar
                                  v-for="item_subchild in item_child.teams"
                                  :key="item_subchild.id"
                                  :name="item_subchild.name"
                                  :show-border="false"
                                  background-color="stone"
                                />
                              </mp-avatar-group>
                            </mp-flex>
                          </mp-table-cell>
                          <mp-table-cell
                            as="td"
                            :border-bottom="
                              index !== item.items.length - 1 ? '1px' : '0px'
                            "
                            border-color="gray.100"
                            width="200px"
                            max-width="200px"
                            text-align="right"
                          >
                            <mp-button
                              :variant="
                                item_child.status === 'To do'
                                  ? 'outline'
                                  : 'solid'
                              "
                              :variant-color="
                                item_child.status === 'To do'
                                  ? undefined
                                  : item_child.status === 'In progress'
                                  ? 'orange'
                                  : 'green'
                              "
                              :is-disabled="item_child.is_disabled"
                              size="sm"
                              right-icon="caret-down"
                            >
                              {{ item_child.status }}
                            </mp-button>
                          </mp-table-cell>
                        </mp-table-row>
                      </mp-table-body>
                    </mp-table>
                  </mp-table-container>
                </mp-accordion-panel>
              </mp-accordion-item>
            </mp-accordion>
          </mp-box>
        </mp-modal-body>
      </mp-modal-content>
      <mp-modal-overlay />
    </mp-modal>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpButton,
  MpAvatar,
  MpAvatarGroup,
  MpHeading,
  MpText,
  MpBadge,
  MpModal,
  MpModalOverlay,
  MpModalContent,
  MpModalHeader,
  MpModalBody,
  MpModalCloseButton,
  MpTableContainer,
  MpTable,
  MpTableBody,
  MpTableRow,
  MpTableCell,
  MpAccordion,
  MpAccordionItem,
  MpAccordionHeader,
  MpAccordionIcon,
  MpAccordionPanel,
} from "@mekari/pixel";

export default {
  name: "MpxOffboardingDetailModal",
  components: {
    MpBox,
    MpFlex,
    MpButton,
    MpAvatar,
    MpAvatarGroup,
    MpHeading,
    MpText,
    MpBadge,
    MpModal,
    MpModalOverlay,
    MpModalContent,
    MpModalHeader,
    MpModalBody,
    MpModalCloseButton,
    MpTableContainer,
    MpTable,
    MpTableBody,
    MpTableRow,
    MpTableCell,
    MpAccordion,
    MpAccordionItem,
    MpAccordionHeader,
    MpAccordionIcon,
    MpAccordionPanel,
  },
  props: {
    data: [Object],
  },
  methods: {
    onOpen() {
      this.isOpen = true;
    },
    onClose() {
      this.isOpen = false;
    },
  },
  computed: {
    todoData() {
      return this.data.table_todo_data.filter(
        (item) => item.status === "To do"
      );
    },
    inProgressData() {
      return this.data.table_todo_data.filter(
        (item) => item.status === "In progress"
      );
    },
    doneData() {
      return this.data.table_todo_data.filter((item) => item.status === "Done");
    },
    listData() {
      return [
        {
          id: "N9xus0P6",
          name: "To do",
          items: this.todoData,
        },
        {
          id: "AyIZnyVt",
          name: "In progress",
          items: this.inProgressData,
        },
        {
          id: "Qz4tdCQW",
          name: "Done",
          items: this.doneData,
        },
      ];
    },
  },
  data: () => {
    return {
      isOpen: false,
    };
  },
};
</script>
