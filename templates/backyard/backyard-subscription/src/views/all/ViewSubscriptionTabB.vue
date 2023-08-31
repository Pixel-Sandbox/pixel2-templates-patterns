<template>
  <mp-box>
    <mp-flex
      gap="4"
      justify-content="space-between"
      padding-top="6"
      padding-bottom="3"
    >
      <mp-flex gap="4">
        <mp-box :display="['none', 'block']">
          <mp-select size="md" value="all-type" width="200px">
            <option value="all-type">All type</option>
            <option value="update">Update</option>
            <option value="created">Created</option>
          </mp-select>
        </mp-box>
        <mp-box :display="['block', 'none']">
          <mp-button variant="outline" :padding-x="['2', '4']">
            <mp-icon name="filter" variant="duotone" :margin-right="[0, 2]" />
          </mp-button>
        </mp-box>
      </mp-flex>
      <mp-flex gap="2" :flex="['1 0 auto', '0 0 auto']" align-items="center">
        <mp-input-group>
          <mp-input-left-addon :with-background="false">
            <mp-icon name="search" size="sm" />
          </mp-input-left-addon>
          <mp-input placeholder="Search..." />
        </mp-input-group>
      </mp-flex>
    </mp-flex>

    <mp-table-container width="full" max-width="full" overflow="scroll">
      <mp-table>
        <mp-table-head>
          <mp-table-row cursor="pointer">
            <mp-table-cell as="th">
              Created at
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Type
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Created by
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Activity
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">Changes</mp-table-cell>
          </mp-table-row>
        </mp-table-head>
        <mp-table-body>
          <mp-table-row>
            <mp-table-cell as="td">1/1/2022 05:20:11</mp-table-cell>
            <mp-table-cell as="td">Update</mp-table-cell>
            <mp-table-cell as="td">Rizal Candra</mp-table-cell>
            <mp-table-cell as="td">
              Set period from invoiceable 28058
            </mp-table-cell>
            <mp-table-cell as="td">
              <ul :style="{ marginLeft: '20px' }">
                <li>Company Group: null → 3289</li>
                <li>Active From: null → 2022-08-11</li>
                <li>End At: null → 2022-08-18</li>
              </ul>
            </mp-table-cell>
          </mp-table-row>
        </mp-table-body>
      </mp-table>
    </mp-table-container>

    <Pagination />
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpIcon,
  MpButton,
  MpSelect,
  MpInput,
  MpInputGroup,
  MpInputLeftAddon,
  MpTableContainer,
  MpTable,
  MpTableHead,
  MpTableBody,
  MpTableRow,
  MpTableCell,
} from "@mekari/pixel";
import Pagination from "../../components/Pagination";

export default {
  name: "ViewSubscriptionTabB",
  components: {
    MpBox,
    MpFlex,
    MpIcon,
    MpButton,
    MpSelect,
    MpInput,
    MpInputGroup,
    MpInputLeftAddon,
    MpTableContainer,
    MpTable,
    MpTableHead,
    MpTableBody,
    MpTableRow,
    MpTableCell,
    Pagination,
  },
};
</script>
