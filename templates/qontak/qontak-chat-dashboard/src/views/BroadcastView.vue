<template>
  <mp-box>
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 60px)">
      <Sidebar
        child-title="Broadcast"
        :child-menu="broadcastMenu"
        with-child
        is-custom
        default-is-toggle
      />
      <mp-box
        as="section"
        data-id="content"
        width="100%"
        height="calc(100vh - 60px)"
        overflow-y="auto"
        background-color="background"
      >
        <SubHeader title="Recipient list" type="broadcast" />
        <mp-box
          min-height="calc(100vh - 132px)"
          border-top-width="1px"
          border-left-width="1px"
          border-top-left-radius="md"
          border-color="gray.100"
          background-color="white"
        >
          <mp-flex p="6" direction="column">
            <mp-flex justify="space-between" mb="6">
              <mp-flex gap="3">
                <mp-select size="md" value="option-1" width="200px">
                  <option value="option-1">All sources</option>
                  <option value="option-2">Option 2</option>
                  <option value="option-3">Option 3</option>
                </mp-select>
                <mp-select size="md" value="option-1" width="200px">
                  <option value="option-1">All status</option>
                  <option value="option-2">Option 2</option>
                  <option value="option-3">Option 3</option>
                </mp-select>
              </mp-flex>
              <mp-input-group width="280px">
                <mp-input-left-addon :with-background="false">
                  <mp-icon name="search" size="sm" />
                </mp-input-left-addon>
                <mp-input />
              </mp-input-group>
            </mp-flex>
            <mp-table-container width="full" max-width="full" overflow="scroll">
              <mp-table>
                <mp-table-head>
                  <mp-table-row cursor="pointer">
                    <mp-table-cell as="th" width="40px" min-width="40px">
                      <mp-checkbox
                        :is-checked="isCheck"
                        :is-indeterminate="isIndeterminate"
                        @change="(_, e) => onCheckAll(e)"
                      />
                    </mp-table-cell>
                    <mp-table-cell as="th">
                      Recipient list name
                      <mp-icon name="sort-default" />
                    </mp-table-cell>
                    <mp-table-cell as="th" text-align="end">
                      Contacts
                      <mp-icon name="sort-default" />
                    </mp-table-cell>
                    <mp-table-cell as="th">
                      Creation date
                      <mp-icon name="sort-default" />
                    </mp-table-cell>
                    <mp-table-cell as="th">
                      Source
                      <mp-icon name="sort-default" />
                    </mp-table-cell>
                    <mp-table-cell as="th">
                      Upload status
                      <mp-icon name="sort-default" />
                    </mp-table-cell>
                    <mp-table-cell width="auto" min-width="auto" as="th" />
                  </mp-table-row>
                </mp-table-head>
                <mp-table-body>
                  <mp-table-row v-for="(item, index) in data" :key="item.id">
                    <mp-table-cell as="td" width="40px" min-width="40px">
                      <mp-checkbox
                        :is-checked="checks[index]"
                        @change="(_, e) => onCheck(index, e)"
                      />
                    </mp-table-cell>
                    <mp-table-cell as="td" color="blue.400">
                      {{ item.recipient_list_name }}
                    </mp-table-cell>
                    <mp-table-cell as="td" text-align="end">
                      {{ item.contacts }}
                    </mp-table-cell>
                    <mp-table-cell as="td">{{
                      item.created_date
                    }}</mp-table-cell>
                    <mp-table-cell as="td">{{ item.source }}</mp-table-cell>
                    <mp-table-cell as="td">
                      <mp-badge
                        :variant-color="
                          item.upload_status === 'Success' ? 'green' : 'red'
                        "
                        variant="subtle"
                      >
                        {{ item.upload_status }}
                      </mp-badge>
                    </mp-table-cell>
                    <mp-table-cell as="td" text-align="right">
                      <mp-button variant="outline" right-icon="caret-down"
                        >Action</mp-button
                      >
                    </mp-table-cell>
                  </mp-table-row>
                </mp-table-body>
              </mp-table>
            </mp-table-container>
            <Pagination />
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
  MpSelect,
  MpInputGroup,
  MpInputLeftAddon,
  MpInput,
  MpButton,
  MpIcon,
  MpBadge,
  MpCheckbox,
  MpTableContainer,
  MpTable,
  MpTableHead,
  MpTableBody,
  MpTableRow,
  MpTableCell,
} from "@mekari/pixel";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import SubHeader from "../components/SubHeader";
import Pagination from "../components/Pagination";

export default {
  name: "PropertiesView",
  components: {
    MpBox,
    MpFlex,
    MpSelect,
    MpInputGroup,
    MpInputLeftAddon,
    MpInput,
    MpButton,
    MpIcon,
    MpBadge,
    MpCheckbox,
    MpTableContainer,
    MpTable,
    MpTableHead,
    MpTableBody,
    MpTableRow,
    MpTableCell,
    Header,
    Sidebar,
    SubHeader,
    Pagination,
  },
  data() {
    return {
      broadcastMenu: [
        {
          name: "Recipient list",
          isActive: true,
        },
        {
          name: "Campaign template",
          isActive: false,
        },
        {
          name: "Follow-up template",
          isActive: false,
        },
        {
          name: "Campaigns",
          isActive: false,
        },
      ],
      data: [
        {
          id: "001",
          recipient_list_name: "Give away ramadhan 2022",
          contacts: "598",
          created_date: "22 Agt 2022 at 22:14",
          source: "Uploaded file",
          upload_status: "Success",
          actions: [],
        },
        {
          id: "002",
          recipient_list_name: "Will It Blend",
          contacts: "2.949",
          created_date: "19 Agt 2022 at 11:13",
          source: "Contacts",
          upload_status: "Success",
          actions: [],
        },
        {
          id: "003",
          recipient_list_name: "Nintendo Switch Launch",
          contacts: "908",
          created_date: "18 Agt 2022 at 17:32",
          source: "Contacts",
          upload_status: "Success",
          actions: [],
        },
        {
          id: "004",
          recipient_list_name: "Summer campaign",
          contacts: "4.873",
          created_date: "12 Agt 2022 at 14:38",
          source: "Uploaded file",
          upload_status: "Success",
          actions: [],
        },
        {
          id: "005",
          recipient_list_name: "12 Days of State",
          contacts: "327",
          created_date: "12 Agt 2022 at 11:09",
          source: "Uploaded file",
          upload_status: "Success",
          actions: [],
        },
        {
          id: "006",
          recipient_list_name: "We Are Here Campaign",
          contacts: "1.933",
          created_date: "05 Agt 2022 at 13:52",
          source: "Uploaded file",
          upload_status: "Success",
          actions: [],
        },
        {
          id: "007",
          recipient_list_name: "Queso Bliss Contest",
          contacts: "898",
          created_date: "13 Jul 2022 at 22:30",
          source: "Uploaded file",
          upload_status: "Failed",
          actions: [],
        },
      ],
      checks: [false],
    };
  },
  computed: {
    isCheck() {
      return this.checks.every(Boolean);
    },
    isIndeterminate() {
      return this.checks.some(Boolean) && !this.isCheck;
    },
  },
  methods: {
    onCheckAll(e) {
      this.checks = [...Array(this.data.length)].map(() => e.target.checked);
    },
    onCheck(index, e) {
      this.checks.splice(index, 1, e.target.checked);
    },
  },
};
</script>
