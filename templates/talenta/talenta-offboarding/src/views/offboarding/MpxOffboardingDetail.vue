<template>
  <mp-box
    ><Header />
    <mp-flex as="main" max-height="calc(100vh - 60px)">
      <Sidebar is-alternate is-custom />
      <mp-box
        as="section"
        data-id="content"
        width="full"
        height="calc(100vh - 60px)"
        overflow-y="auto"
        background-color="background"
      >
        <mpx-titlebar
          title="Jessie Tan"
          :links="[
            { name: 'Company', link: '#/' },
            { name: 'Offboarding', link: '/' },
          ]"
        >
          <template #action>
            <mpx-offboarding-detail-action />
          </template>
          <template #addon>
            <mp-badge variant="subtle" variant-color="orange">
              Offboarding
            </mp-badge>
          </template>
        </mpx-titlebar>
        <mp-box
          :padding="['4', '6']"
          min-height="calc(100vh - 142px)"
          background-color="white"
          border-top-width="1px"
          border-left-width="1px"
          border-top-left-radius="md"
          border-color="gray.100"
        >
          <mp-flex gap="6">
            <mp-box :width="['full', '50%']">
              <mp-heading as="h3" font-size="lg" margin-bottom="4"
                >Resignation info</mp-heading
              >
              <mpx-description-list>
                <template #left-side>
                  <mp-text color="gray.600">Status</mp-text>
                </template>
                <template #right-side>
                  <mp-flex align-items="center">
                    <mp-avatar
                      name="Jessie Tan"
                      size="md"
                      background-color="stone"
                    />
                    <mp-box margin-left="3">
                      <mp-text>CPX083 - Jessie Tan</mp-text>
                      <mp-text font-size="sm" color="gray.600"
                        >HR Admin - HR & GA, Bandung</mp-text
                      >
                    </mp-box>
                  </mp-flex>
                </template>
              </mpx-description-list>
              <mpx-description-list>
                <template #left-side>
                  <mp-text color="gray.600">Job level</mp-text>
                </template>
                <template #right-side>
                  <mp-flex align-items="center">
                    <mp-text>Staff</mp-text>
                  </mp-flex>
                </template>
              </mpx-description-list>
              <mpx-description-list>
                <template #left-side>
                  <mp-text color="gray.600">Employment status</mp-text>
                </template>
                <template #right-side>
                  <mp-flex align-items="center">
                    <mp-text>Permanent</mp-text>
                  </mp-flex>
                </template>
              </mpx-description-list>
              <mpx-description-list>
                <template #left-side>
                  <mp-text color="gray.600">Join date</mp-text>
                </template>
                <template #right-side>
                  <mp-flex align-items="center">
                    <mp-text>22 Nov 2017</mp-text>
                    <mp-badge
                      mp
                      variant="subtle"
                      variant-color="gray"
                      margin-left="2"
                    >
                      5 Years 1 Month 2 Days
                    </mp-badge>
                  </mp-flex>
                </template>
              </mpx-description-list>
              <mpx-description-list>
                <template #left-side>
                  <mp-text color="gray.600">Resign date</mp-text>
                </template>
                <template #right-side>
                  <mp-flex align-items="center">
                    <mp-text>24 Dec 2022</mp-text>
                  </mp-flex>
                </template>
              </mpx-description-list>
              <mpx-description-list>
                <template #left-side>
                  <mp-text color="gray.600">Reason</mp-text>
                </template>
                <template #right-side>
                  <mp-flex align-items="center">
                    <mp-text>Voluntary resign</mp-text>
                  </mp-flex>
                </template>
              </mpx-description-list>
              <mpx-description-list>
                <template #left-side>
                  <mp-text color="gray.600">Asset</mp-text>
                </template>
                <template #right-side>
                  <mp-flex
                    flex="1 0 0"
                    justify-content="space-between"
                    align-items="center"
                  >
                    <mp-text>3 assets listed</mp-text>
                    <mp-button variant="outline" size="sm"
                      >View asset</mp-button
                    >
                  </mp-flex>
                </template>
              </mpx-description-list>
              <mpx-description-list>
                <template #left-side>
                  <mp-text color="gray.600">Loan</mp-text>
                </template>
                <template #right-side>
                  <mp-flex
                    flex="1 0 0"
                    justify-content="space-between"
                    align-items="center"
                  >
                    <mp-text>Rp0</mp-text>
                    <mp-button variant="outline" size="sm" is-disabled
                      >View loan</mp-button
                    >
                  </mp-flex>
                </template>
              </mpx-description-list>
              <mpx-description-list>
                <template #left-side>
                  <mp-text color="gray.600">Forms</mp-text>
                </template>
                <template #right-side>
                  <mp-box width="full">
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
                      <mp-flex
                        justify-content="space-between"
                        align-items="center"
                      >
                        <mp-box>
                          <mp-text font-weight="semibold">{{
                            item.name
                          }}</mp-text>
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
                          <mp-tooltip
                            label="Edit form"
                            position="top"
                            use-portal
                          >
                            <mp-button-icon name="edit" size="md" />
                          </mp-tooltip>
                          <mp-tooltip
                            label="Remove form"
                            position="top"
                            use-portal
                          >
                            <mp-button-icon name="minus-circular" size="md" />
                          </mp-tooltip>
                        </mp-flex>
                      </mp-flex>
                    </mp-box>
                    <mp-button variant="outline">Add forms</mp-button>
                  </mp-box>
                </template>
              </mpx-description-list>
              <mpx-description-list>
                <template #left-side>
                  <mp-text color="gray.600">Documents</mp-text>
                </template>
                <template #right-side>
                  <mp-box width="full">
                    <mp-text margin-bottom="3">
                      The document will be sent to: <b>jessie.tan@gmail.com</b>
                    </mp-text>
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
                      <mp-flex
                        justify-content="space-between"
                        align-items="center"
                      >
                        <mp-box>
                          <mp-text font-weight="semibold"
                            >{{ item.name }}
                          </mp-text>
                          <mp-text font-size="sm">{{ item.caption }}</mp-text>
                          <mpx-offboarding-detail-send-email-modal />
                        </mp-box>
                        <mp-flex gap="2" align-items="center">
                          <mp-tooltip
                            label="Edit document"
                            position="top"
                            use-portal
                          >
                            <mp-button-icon name="edit" size="md" />
                          </mp-tooltip>
                          <mp-tooltip
                            label="Remove document"
                            position="top"
                            use-portal
                          >
                            <mp-button-icon name="minus-circular" size="md" />
                          </mp-tooltip>
                        </mp-flex>
                      </mp-flex>
                    </mp-box>
                    <mp-button variant="outline">Add document</mp-button>
                  </mp-box>
                </template>
              </mpx-description-list>
            </mp-box>
            <mp-box :width="['full', '50%']">
              <mp-heading as="h3" font-size="lg" margin-bottom="4"
                >Handoff & clearance</mp-heading
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
                        <mp-text font-weight="semibold" is-link>{{
                          item.name
                        }}</mp-text>
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
                      <mp-table-cell
                        as="td"
                        width="100px"
                        max-width="100px"
                        text-align="right"
                      >
                        <mp-tooltip
                          label="Remove task"
                          position="top"
                          use-portal
                        >
                          <mp-button-icon name="minus-circular" size="md" />
                        </mp-tooltip>
                      </mp-table-cell>
                    </mp-table-row>
                  </mp-table-body>
                </mp-table>
              </mp-table-container>
              <mp-button variant="outline" margin-top="2">Add task</mp-button>
            </mp-box>
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
  MpHeading,
  MpText,
  MpAvatarGroup,
  MpAvatar,
  MpBadge,
  MpButton,
  MpButtonIcon,
  MpTooltip,
  MpTableContainer,
  MpTable,
  MpTableBody,
  MpTableRow,
  MpTableCell,
} from "@mekari/pixel";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import MpxTitlebar from "../../components/other/MpxTitlebar.vue";
import MpxDescriptionList from "../../components/other/MpxDescriptionList.vue";
import MpxOffboardingDetailAction from "./MpxOffboardingDetailAction.vue";
import MpxOffboardingDetailSendEmailModal from "./MpxOffboardingDetailSendEmailModal";
import offboardingData from "../../assets/offboarding-data.json";

export default {
  name: "MpxOffboardingDetail",
  components: {
    MpBox,
    MpFlex,
    MpHeading,
    MpText,
    MpAvatarGroup,
    MpAvatar,
    MpBadge,
    MpButton,
    MpButtonIcon,
    MpTooltip,
    MpTableContainer,
    MpTable,
    MpTableBody,
    MpTableRow,
    MpTableCell,
    Header,
    Sidebar,
    MpxTitlebar,
    MpxDescriptionList,
    MpxOffboardingDetailAction,
    MpxOffboardingDetailSendEmailModal,
  },
  data: () => {
    return {
      data: offboardingData.modal_data,
    };
  },
};
</script>
