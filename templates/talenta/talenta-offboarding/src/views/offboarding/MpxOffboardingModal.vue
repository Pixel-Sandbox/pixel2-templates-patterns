<template>
  <mp-box>
    <mp-button variant="outline" @click="onOpen">Offboarding modal</mp-button>
    <mp-modal
      size="full"
      :is-open="isOpen"
      :on-close="onClose"
      scroll-behavior="inside"
    >
      <mp-modal-content>
        <mp-modal-header>
          <mp-heading as="h1" font-size="2xl">Offboarding</mp-heading>
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
            <mp-box margin-top="7">
              <mp-heading as="h3" font-size="lg" margin-bottom="3"
                >To do list</mp-heading
              >
              <mp-table-container
                width="full"
                max-width="full"
                overflow="scroll"
              >
                <mp-table :is-hoverable="false">
                  <mp-table-body>
                    <mp-table-row
                      v-for="item in data.table_todo_data"
                      :key="item.id"
                    >
                      <mp-table-cell as="td">
                        <mp-text
                          font-weight="semibold"
                          is-link
                          @click.native="onTodoOpen"
                          >{{ item.name }}</mp-text
                        >
                        <mp-text font-size="sm" color="gray.600">{{
                          item.caption
                        }}</mp-text>
                      </mp-table-cell>
                      <mp-table-cell as="td">
                        <mp-flex justify-content="flex-end">
                          <mp-avatar-group max="3">
                            <mp-avatar
                              v-for="item_child in item.teams"
                              :key="item_child.id"
                              :name="item_child.name"
                              :show-border="false"
                              background-color="stone"
                            />
                          </mp-avatar-group>
                        </mp-flex>
                      </mp-table-cell>
                      <mp-table-cell
                        as="td"
                        width="200px"
                        max-width="200px"
                        text-align="right"
                      >
                        <mp-button
                          :variant="
                            item.status === 'To do' ? 'outline' : 'solid'
                          "
                          :variant-color="
                            item.status === 'To do'
                              ? undefined
                              : item.status === 'In progress'
                              ? 'orange'
                              : 'green'
                          "
                          :is-disabled="item.is_disabled"
                          size="sm"
                          right-icon="caret-down"
                        >
                          {{ item.status }}
                        </mp-button>
                      </mp-table-cell>
                    </mp-table-row>
                  </mp-table-body>
                </mp-table>
              </mp-table-container>
            </mp-box>
            <mp-box margin-top="10">
              <mp-heading as="h3" font-size="lg" margin-bottom="1.5"
                >Forms</mp-heading
              >
              <mp-text font-size="sm" color="gray.600" margin-bottom="4">
                Please fill in the required form assigned to you before leaving
                the company.
              </mp-text>
              <mp-box
                v-for="item in data.table_form_data"
                :key="item.id"
                border="1px solid"
                border-color="gray.100"
                border-radius="md"
                padding-y="2"
                padding-x="4"
                margin-bottom="2"
              >
                <mp-flex justify-content="space-between" align-items="center">
                  <mp-box>
                    <mp-text font-weight="semibold">{{ item.name }}</mp-text>
                  </mp-box>
                  <mp-flex gap="2" align-items="center">
                    <mp-badge
                      :variant-color="
                        item.status === 'Submitted' ? 'green' : 'gray'
                      "
                      variant="subtle"
                    >
                      {{ item.status }}
                    </mp-badge>
                    <mp-tooltip label="View form" position="top" use-portal>
                      <mp-button-icon name="newtab" size="md" />
                    </mp-tooltip>
                  </mp-flex>
                </mp-flex>
              </mp-box>
            </mp-box>
            <mp-box margin-top="10">
              <mp-heading as="h3" font-size="lg" margin-bottom="1.5"
                >Documents</mp-heading
              >
              <mp-text font-size="sm" color="gray.600" margin-bottom="4">
                Please fill in your work or personal email and make sure you
                have entered a valid email so you will be not missed the
                document.
              </mp-text>
              <mp-flex gap="1" align-items="center" margin-y="5">
                <mp-text>
                  The document will be sent to:
                  <mp-text display="inline-block" is-link
                    >jessie.tan@gmail.com</mp-text
                  >
                </mp-text>
                <mpx-offboarding-edit-email-modal />
              </mp-flex>
              <mp-box
                v-for="item in data.table_document_data"
                :key="item.id"
                border="1px solid"
                border-color="gray.100"
                border-radius="md"
                padding-y="2"
                padding-x="4"
                margin-bottom="2"
              >
                <mp-flex justify-content="space-between" align-items="center">
                  <mp-box>
                    <mp-text font-weight="semibold">{{ item.name }}</mp-text>
                    <mp-text font-size="sm">{{ item.caption }}</mp-text>
                  </mp-box>
                  <mp-flex gap="2" align-items="center">
                    <mp-box v-if="item.is_downloadable">
                      <mp-tooltip label="Download" position="top" use-portal>
                        <mp-button-icon name="download" size="md" />
                      </mp-tooltip>
                    </mp-box>
                  </mp-flex>
                </mp-flex>
              </mp-box>
            </mp-box>
            <mp-box margin-top="10">
              <mp-heading as="h3" font-size="lg" margin-bottom="1.5"
                >Assets</mp-heading
              >
              <mp-table-container
                width="full"
                max-width="full"
                overflow="scroll"
              >
                <mp-table>
                  <mp-table-head>
                    <mp-table-row>
                      <mp-table-cell as="th">
                        Assets
                        <mp-icon name="sort-default" />
                      </mp-table-cell>
                      <mp-table-cell as="th">
                        Serial number
                        <mp-icon name="sort-default" />
                      </mp-table-cell>
                      <mp-table-cell as="th">
                        Lending date
                        <mp-icon name="sort-default" />
                      </mp-table-cell>
                    </mp-table-row>
                  </mp-table-head>
                  <mp-table-body>
                    <mp-table-row
                      v-for="item in data.table_asset_data"
                      :key="item.id"
                    >
                      <mp-table-cell as="td">
                        <mp-text>{{ item.name }}</mp-text>
                        <mp-text font-size="sm" color="gray.600">{{
                          item.caption
                        }}</mp-text>
                      </mp-table-cell>
                      <mp-table-cell as="td">
                        {{ item.serial_number }}
                      </mp-table-cell>
                      <mp-table-cell as="td">
                        {{ item.lending_date }}
                      </mp-table-cell>
                    </mp-table-row>
                  </mp-table-body>
                </mp-table>
              </mp-table-container>
              <mpx-pagination is-minimal />
            </mp-box>
            <mp-box margin-top="10">
              <mp-heading as="h3" font-size="lg" margin-bottom="1.5"
                >Loan</mp-heading
              >
              <mp-table-container
                width="full"
                max-width="full"
                overflow="scroll"
              >
                <mp-table>
                  <mp-table-head>
                    <mp-table-row>
                      <mp-table-cell as="th">
                        Transaction ID
                        <mp-icon name="sort-default" />
                      </mp-table-cell>
                      <mp-table-cell as="th">
                        Loan name
                        <mp-icon name="sort-default" />
                      </mp-table-cell>
                      <mp-table-cell as="th">
                        Loan amount
                        <mp-icon name="sort-default" />
                      </mp-table-cell>
                      <mp-table-cell as="th">
                        Remain unpaid
                        <mp-icon name="sort-default" />
                      </mp-table-cell>
                    </mp-table-row>
                  </mp-table-head>
                  <mp-table-body>
                    <mp-table-row
                      v-for="item in data.table_loan_data"
                      :key="item.id"
                    >
                      <mp-table-cell as="td">
                        {{ item.transaction_id }}
                      </mp-table-cell>
                      <mp-table-cell as="td">
                        {{ item.name }}
                      </mp-table-cell>
                      <mp-table-cell as="td">
                        {{ item.amount }}
                      </mp-table-cell>
                      <mp-table-cell as="td">
                        {{ item.remain_unpaid }}
                      </mp-table-cell>
                    </mp-table-row>
                  </mp-table-body>
                </mp-table>
              </mp-table-container>
              <mpx-pagination is-minimal />
            </mp-box>
          </mp-box>
        </mp-modal-body>
      </mp-modal-content>
      <mp-modal-overlay />
    </mp-modal>
    <mpx-offboarding-todo-modal
      :data="data"
      :isOpen="isTodoOpen"
      :onOpen="onTodoOpen"
      :onClose="onTodoClose"
    />
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpIcon,
  MpButton,
  MpButtonIcon,
  MpAvatar,
  MpAvatarGroup,
  MpHeading,
  MpText,
  MpBadge,
  MpTooltip,
  MpModal,
  MpModalOverlay,
  MpModalContent,
  MpModalHeader,
  MpModalBody,
  MpModalCloseButton,
  MpTableContainer,
  MpTable,
  MpTableHead,
  MpTableBody,
  MpTableRow,
  MpTableCell,
} from "@mekari/pixel";
import MpxPagination from "../../components/other/MpxPagination.vue";
import MpxOffboardingTodoModal from "./MpxOffboardingTodoModal.vue";
import MpxOffboardingEditEmailModal from "./MpxOffboardingEditEmailModal.vue";

export default {
  name: "MpxOffboardingModal",
  components: {
    MpBox,
    MpFlex,
    MpIcon,
    MpButton,
    MpButtonIcon,
    MpAvatar,
    MpAvatarGroup,
    MpHeading,
    MpText,
    MpBadge,
    MpTooltip,
    MpModal,
    MpModalOverlay,
    MpModalContent,
    MpModalHeader,
    MpModalBody,
    MpModalCloseButton,
    MpTableContainer,
    MpTable,
    MpTableHead,
    MpTableBody,
    MpTableRow,
    MpTableCell,
    MpxPagination,
    MpxOffboardingTodoModal,
    MpxOffboardingEditEmailModal,
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
    onTodoOpen() {
      this.isTodoOpen = true;
    },
    onTodoClose() {
      this.isTodoOpen = false;
    },
  },
  data: () => {
    return {
      isOpen: false,
      isTodoOpen: false,
    };
  },
};
</script>
