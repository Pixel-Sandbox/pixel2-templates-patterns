<template>
  <mp-table-container width="full" max-width="full" overflow="scroll">
    <mp-table>
      <mp-table-head is-fixed>
        <mp-table-row cursor="pointer">
          <mp-table-cell as="th" width="40px" min-width="40px">
            <mp-checkbox
              :is-checked="isCheck"
              :is-indeterminate="isIndeterminate"
              @change="(_, e) => onCheckAll(e)"
            />
          </mp-table-cell>
          <mp-table-cell width="200px" min-width="200px" as="th">
            Transaction ID
            <mp-tooltip
              position="top"
              size="sm"
              label="List of approved reimbursement."
            >
              <mp-icon name="info" size="sm" />
            </mp-tooltip>
            <mp-icon name="sort-default" />
          </mp-table-cell>
          <mp-table-cell width="240px" min-width="240px" as="th">
            Employee name
            <mp-icon name="sort-default" />
          </mp-table-cell>
          <mp-table-cell width="200px" min-width="200px" as="th">
            Employee ID
            <mp-icon name="sort-default" />
          </mp-table-cell>
          <mp-table-cell width="200px" min-width="200px" as="th">
            Request date
            <mp-icon name="sort-default" />
          </mp-table-cell>
          <mp-table-cell width="240px" min-width="240px" as="th">
            Reimbursement name
            <mp-icon name="sort-default" />
          </mp-table-cell>
          <mp-table-cell width="240px" min-width="240px" as="th">
            Disbursement status
            <mp-icon name="sort-default" />
          </mp-table-cell>
          <mp-table-cell width="240px" min-width="240px" as="th">
            Branch
          </mp-table-cell>
          <mp-table-cell
            width="auto"
            min-width="auto"
            as="th"
            top="0"
            right="0"
            box-shadow="inset 2px 0px #D0D6DD"
            is-fixed
          />
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
            <mp-text is-link>{{ item.transaction_id }}</mp-text>
          </mp-table-cell>
          <mp-table-cell as="td">
            <mp-box display="inline-flex" align-items="center">
              <mp-avatar
                :name="`${item.first_name} ${item.last_name}`"
                background-color="stone"
              />
              <mp-text margin-left="4"
                >{{ item.first_name }} {{ item.last_name }}</mp-text
              >
            </mp-box>
          </mp-table-cell>
          <mp-table-cell as="td">{{ item.employee_id }}</mp-table-cell>
          <mp-table-cell as="td">{{ item.request_date }}</mp-table-cell>
          <mp-table-cell as="td">{{ item.reimbursement_name }}</mp-table-cell>
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
          <mp-table-cell as="td">{{ item.branch }}</mp-table-cell>
          <mp-table-cell
            as="td"
            right="0"
            box-shadow="inset 2px 0px #D0D6DD"
            is-fixed
          >
            <mp-button
              as="router-link"
              to="/detail-disbursement"
              variant="outline"
            >
              Detail
            </mp-button>
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
  MpAvatar,
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
  name: "DisbursementTableA",
  components: {
    MpBox,
    MpButton,
    MpIcon,
    MpAvatar,
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
