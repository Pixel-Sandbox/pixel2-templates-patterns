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
          :padding-x="['4', '6']"
          :display="['inline-block', 'flex']"
          padding-y="1.063rem"
        >
          <mp-box height="12">
            <mp-text font-size="sm" is-link>Company</mp-text>
            <mp-heading as="h1" font-size="2xl" font-weight="semibold">
              Create pivot report
            </mp-heading>
          </mp-box>

          <mp-box
            :width="['100%', 'auto']"
            :position="['fixed', 'relative']"
            :top="['100%', '0']"
            :left="['50%', '0']"
            :transform="['translate(-50%, -100%)', 'translate(0%, 0%)']"
            :border-top="['1px solid', '0px solid']"
            :padding-y="['2', '0']"
            :padding-x="['4', '0']"
            :background-color="['white', 'transparent']"
            border-color="gray.100"
            z-index="100"
          >
            <mp-flex gap="2" :flex-direction="['column-reverse', 'row']">
              <mp-button variant="outline" left-icon="help">
                Guidebook
              </mp-button>
            </mp-flex>
          </mp-box>
        </mp-flex>
        <mp-box
          min-height="calc(100vh - 142px)"
          border-top-width="1px"
          background-color="white"
          :padding="['4', '6']"
        >
          <mp-flex :width="['full', '935px']" margin-x="auto">
            <mp-flex :width="['full', '935px']" flex-direction="column">
              <mp-heading as="h2" color="dark" font-size="xl">
                Start create pivot
              </mp-heading>
              <mp-text
                color="gray.600"
                font-size="md"
                line-height="md"
                margin-bottom="6"
              >
                You can select the available template to build your report.
              </mp-text>

              <mp-flex
                border="1px solid"
                border-color="gray.100"
                :flex-direction="['column', 'row']"
              >
                <mp-flex
                  :width="['full', '226px']"
                  flex-direction="column"
                  padding="4"
                  :border-right="['0px solid', '1px solid']"
                  :border-bottom="['1px solid', '0px solid']"
                  :border-color="['gray.100', 'gray.100']"
                >
                  <mp-heading
                    as="h3"
                    color="dark"
                    font-size="lg"
                    margin-bottom="4"
                  >
                    Category
                  </mp-heading>

                  <mp-pseudo-box
                    role="group"
                    border-radius="sm"
                    transition="all .2s ease"
                    padding-x="2.5"
                    padding-y="2"
                    background-color="ice.50"
                    color="blue.400"
                    :_hover="{
                      backgroundColor: 'ice.50',
                      color: 'blue.400',
                      cursor: 'pointer',
                    }"
                  >
                    <mp-stack direction="row" align="center">
                      <mp-text
                        white-space="nowrap"
                        font-weight="semibold"
                        color="blue.400"
                      >
                        All
                      </mp-text>
                    </mp-stack>
                  </mp-pseudo-box>
                  <mp-pseudo-box
                    role="group"
                    border-radius="sm"
                    transition="all .2s ease"
                    padding-x="2.5"
                    padding-y="2"
                    background-color="inherit"
                    color="inherit"
                    :_hover="{
                      backgroundColor: 'gray.50',
                      color: 'gray.600',
                      cursor: 'pointer',
                    }"
                  >
                    <mp-stack direction="row" align="center">
                      <mp-text
                        white-space="nowrap"
                        font-weight="inherit"
                        color="inherit"
                      >
                        Employment
                      </mp-text>
                    </mp-stack>
                  </mp-pseudo-box>
                  <mp-pseudo-box
                    role="group"
                    border-radius="sm"
                    transition="all .2s ease"
                    padding-x="2.5"
                    padding-y="2"
                    background-color="inherit"
                    color="inherit"
                    :_hover="{
                      backgroundColor: 'gray.50',
                      color: 'gray.600',
                      cursor: 'pointer',
                    }"
                  >
                    <mp-stack direction="row" align="center">
                      <mp-text
                        white-space="nowrap"
                        font-weight="inherit"
                        color="inherit"
                      >
                        Time Management
                      </mp-text>
                    </mp-stack>
                  </mp-pseudo-box>
                  <mp-pseudo-box
                    role="group"
                    border-radius="sm"
                    transition="all .2s ease"
                    padding-x="2.5"
                    padding-y="2"
                    background-color="inherit"
                    color="inherit"
                    :_hover="{
                      backgroundColor: 'gray.50',
                      color: 'gray.600',
                      cursor: 'pointer',
                    }"
                  >
                    <mp-stack direction="row" align="center">
                      <mp-text
                        white-space="nowrap"
                        font-weight="inherit"
                        color="inherit"
                      >
                        Payroll
                      </mp-text>
                    </mp-stack>
                  </mp-pseudo-box>
                </mp-flex>
                <mp-box width="full" padding="4">
                  <mp-input-group margin-bottom="2">
                    <mp-input-left-addon :with-background="false">
                      <mp-icon name="search" size="sm" />
                    </mp-input-left-addon>
                    <mp-input
                      :width="['full', '280px']"
                      placeholder="Search..."
                    />
                  </mp-input-group>

                  <mp-table-container
                    width="full"
                    max-width="full"
                    overflow="scroll"
                  >
                    <mp-table>
                      <mp-table-head>
                        <mp-table-row cursor="pointer">
                          <mp-table-cell as="th">
                            Report name
                            <mp-icon name="sort-default" />
                          </mp-table-cell>
                          <mp-table-cell as="th" colspan="2">
                            Category
                            <mp-icon name="sort-default" />
                          </mp-table-cell>
                        </mp-table-row>
                      </mp-table-head>
                      <mp-table-body>
                        <mp-table-row>
                          <mp-table-cell as="td">
                            Employment report
                          </mp-table-cell>
                          <mp-table-cell as="td">Employment</mp-table-cell>
                          <mp-table-cell as="td">
                            <mp-flex justify-content="flex-end">
                              <mp-button
                                as="router-link"
                                to="/editor"
                                variant="solid"
                                border-right-radius="0"
                              >
                                Create pivot
                              </mp-button>
                              <mp-popover placement="bottom-end">
                                <mp-popover-trigger>
                                  <mp-button
                                    border-left="1px"
                                    border-left-color="#314AD8"
                                    border-left-radius="0"
                                    variant="solid"
                                    right-icon="caret-down"
                                  >
                                  </mp-button>
                                </mp-popover-trigger>
                                <mp-popover-content
                                  max-width="auto"
                                  width="auto"
                                  bg="white"
                                  rounded="md"
                                  shadow="lg"
                                  border-width="1px"
                                  border-color="gray.400"
                                >
                                  <mp-popover-list>
                                    <mp-popover-list-item
                                      @click="handlePreviewModalToggle(true)"
                                    >
                                      See sample template
                                    </mp-popover-list-item>
                                  </mp-popover-list>
                                </mp-popover-content>
                              </mp-popover>
                            </mp-flex>
                          </mp-table-cell>
                        </mp-table-row>
                        <mp-table-row>
                          <mp-table-cell as="td">
                            Employment & Attendance Report
                          </mp-table-cell>
                          <mp-table-cell as="td">Time Management</mp-table-cell>
                          <mp-table-cell as="td">
                            <mp-flex justify-content="flex-end">
                              <mp-button
                                variant="solid"
                                border-right-radius="0"
                              >
                                Create pivot
                              </mp-button>
                              <mp-button
                                border-left="1px"
                                border-left-color="#314AD8"
                                border-left-radius="0"
                                variant="solid"
                                right-icon="caret-down"
                              />
                            </mp-flex>
                          </mp-table-cell>
                        </mp-table-row>
                        <mp-table-row>
                          <mp-table-cell as="td">
                            Employment & Payroll Report
                          </mp-table-cell>
                          <mp-table-cell as="td">Payroll</mp-table-cell>
                          <mp-table-cell as="td">
                            <mp-flex justify-content="flex-end">
                              <mp-button
                                variant="solid"
                                border-right-radius="0"
                              >
                                Create pivot
                              </mp-button>
                              <mp-button
                                border-left="1px"
                                border-left-color="#314AD8"
                                border-left-radius="0"
                                variant="solid"
                                right-icon="caret-down"
                              />
                            </mp-flex>
                          </mp-table-cell>
                        </mp-table-row>
                      </mp-table-body>
                    </mp-table>
                  </mp-table-container>
                </mp-box>
              </mp-flex>
            </mp-flex>
          </mp-flex>
        </mp-box>
      </mp-box>
    </mp-flex>

    <CreateReportBuilderPreviewModal
      :isModalOpen="isPreviewModalOpen"
      :onModalToggle="handlePreviewModalToggle"
    />
  </mp-box>
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
  MpIcon,
  MpInput,
  MpInputGroup,
  MpInputLeftAddon,
  MpTableContainer,
  MpTable,
  MpTableHead,
  MpTableBody,
  MpTableRow,
  MpTableCell,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
} from "@mekari/pixel";
import Header from "../../components/Header";
import CreateReportBuilderPreviewModal from "./CreateReportBuilderPreviewModal";

export default {
  name: "CreateReportBuilder",
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpHeading,
    MpButton,
    MpPseudoBox,
    MpStack,
    MpIcon,
    MpInput,
    MpInputGroup,
    MpInputLeftAddon,
    MpTableContainer,
    MpTable,
    MpTableHead,
    MpTableBody,
    MpTableRow,
    MpTableCell,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
    Header,
    CreateReportBuilderPreviewModal,
  },
  data() {
    return {
      isPreviewModalOpen: false,
    };
  },
  methods: {
    handlePreviewModalToggle: function (data) {
      this.isPreviewModalOpen = data;
    },
  },
};
</script>