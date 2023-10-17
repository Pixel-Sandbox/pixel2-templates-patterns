<template>
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
            Disbursement ID
            <mp-icon name="sort-default" />
          </mp-table-cell>
          <mp-table-cell as="th">
            Created by
            <mp-icon name="sort-default" />
          </mp-table-cell>
          <mp-table-cell as="th">
            Created date
            <mp-icon name="sort-default" />
          </mp-table-cell>
          <mp-table-cell as="th">
            Transactions
            <mp-icon name="sort-default" />
          </mp-table-cell>
          <mp-table-cell as="th">
            Disbursement status
            <mp-tooltip position="top" size="sm" label="-">
              <mp-icon name="info" size="sm" />
            </mp-tooltip>
            <mp-icon name="sort-default" />
          </mp-table-cell>
          <mp-table-cell as="th" text-align="right">Amount</mp-table-cell>
          <mp-table-cell width="auto" min-width="auto" as="th" />
        </mp-table-row>
      </mp-table-head>
      <mp-table-body>
        <mp-table-row v-for="(item, index) in data" :key="item.id">
          <mp-table-cell as="td" width="40px" min-width="40px">
            <mp-checkbox
              :is-checked="checks[index]"
              :is-disabled="
                item.status === 'Completed' || item.status === 'Cancel resign'
              "
              @change="(_, e) => onCheck(index, e)"
            />
          </mp-table-cell>
          <mp-table-cell as="td">
            {{ item.disbursement_id }}
          </mp-table-cell>
          <mp-table-cell as="td">
            <mp-box display="flex" flex-direction="column">
              <mp-text>{{ item.first_name }} {{ item.last_name }}</mp-text>
              <mp-text color="gray.600" font-size="sm">
                {{ item.job_position }}
              </mp-text>
            </mp-box>
          </mp-table-cell>
          <mp-table-cell as="td">{{ item.created_date }}</mp-table-cell>
          <mp-table-cell as="td">{{ item.transactions }}</mp-table-cell>
          <mp-table-cell as="td">
            <mp-badge
              :variant-color="
                item.status === 'Ready to disburse'
                  ? 'green'
                  : item.status === 'Paid'
                  ? 'blue'
                  : item.status === 'Waiting for payment' && 'orange'
              "
              variant="subtle"
            >
              {{ item.status }}
            </mp-badge>
          </mp-table-cell>
          <mp-table-cell as="td" text-align="right">
            {{ item.amount }}
          </mp-table-cell>
          <mp-table-cell as="td" text-align="right">
            <mp-button variant="outline">Detail</mp-button>
          </mp-table-cell>
        </mp-table-row>
      </mp-table-body>
    </mp-table>
  </mp-table-container>
</template>

<script>
import {
  MpBox,
  MpButton,
  MpIcon,
  MpBadge,
  MpText,
  MpCheckbox,
  MpTooltip,
  MpTableContainer,
  MpTable,
  MpTableHead,
  MpTableBody,
  MpTableRow,
  MpTableCell,
} from "@mekari/pixel";

export default {
  name: "DisbursementTableB",
  components: {
    MpBox,
    MpButton,
    MpIcon,
    MpBadge,
    MpText,
    MpCheckbox,
    MpTooltip,
    MpTableContainer,
    MpTable,
    MpTableHead,
    MpTableBody,
    MpTableRow,
    MpTableCell,
  },
  props: {
    data: [Array],
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
      this.checks = [...Array(5)].map(() => e.target.checked);
    },
    onCheck(index, e) {
      this.checks.splice(index, 1, e.target.checked);
    },
  },
  data: () => {
    return {
      checks: [...Array(5)].map(() => false),
    };
  },
};
</script>
