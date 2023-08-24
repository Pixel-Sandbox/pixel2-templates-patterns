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
          <mp-table-cell width="240px" min-width="240px" as="th">
            Employee name
            <mp-icon name="sort-default" />
          </mp-table-cell>
          <mp-table-cell width="200px" min-width="200px" as="th">
            Resign date
            <mp-icon name="sort-default" />
          </mp-table-cell>
          <mp-table-cell width="200px" min-width="200px" as="th">
            Status
            <mp-icon name="sort-default" />
          </mp-table-cell>
          <mp-table-cell width="200px" min-width="200px" as="th">
            Last updated
            <mp-icon name="sort-default" />
          </mp-table-cell>
          <mp-table-cell width="240px" min-width="240px" as="th">
            Task progress
          </mp-table-cell>
          <mp-table-cell width="240px" min-width="240px" as="th" />
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
            <mp-box display="inline-flex" align-items="center">
              <mp-avatar
                :name="`${item.first_name} ${item.last_name}`"
                background-color="stone"
              />
              <mp-flex flex-direction="column" align-items="flex-start">
                <mp-text margin-left="4"
                  >{{ item.first_name }} {{ item.last_name }}</mp-text
                >
                <mp-text color="gray.600" font-size="sm" margin-left="4">
                  {{ item.job_position }}
                </mp-text>
              </mp-flex>
            </mp-box>
          </mp-table-cell>
          <mp-table-cell as="td">{{ item.resign_date }}</mp-table-cell>
          <mp-table-cell as="td">
            <mp-badge
              :variant-color="
                item.status === 'Completed'
                  ? 'green'
                  : item.status === 'Cancel resign'
                  ? 'gray'
                  : item.status === 'Ready to offboard'
                  ? 'blue'
                  : item.status === 'In progress' && 'orange'
              "
              variant="subtle"
            >
              <mp-tooltip
                v-if="item.status === 'In progress'"
                position="top"
                use-portal
              >
                {{ item.status }}
                <template #label>
                  <mp-text font-size="sm" color="white">
                    Submitted date on 15 Oct 2022. <br />
                    2 days in this status.
                  </mp-text>
                </template>
              </mp-tooltip>
              <mp-box v-else>
                {{ item.status }}
              </mp-box>
            </mp-badge>
          </mp-table-cell>
          <mp-table-cell as="td">{{ item.last_updated }}</mp-table-cell>
          <mp-table-cell as="td">
            <mp-flex justify-content="flex-end" margin-bottom="1">
              <mp-text font-size="sm" margin-left="4">
                {{ item.task_progress }}%
              </mp-text>
            </mp-flex>
            <mp-progress :value="item.task_progress" color="sky" size="sm" />
          </mp-table-cell>
          <mp-table-cell as="td" text-align="right">
            <mp-popover
              v-if="
                item.status === 'Ready to offboard' ||
                item.status === 'In progress'
              "
              close-on-select
              use-portal
            >
              <mp-popover-trigger>
                <mp-button variant="outline" right-icon="caret-down">
                  Actions
                </mp-button>
              </mp-popover-trigger>
              <mp-popover-content
                max-width="48"
                bg="white"
                rounded="md"
                shadow="lg"
                border="1px solid"
                border-color="gray.400"
              >
                <mp-popover-list>
                  <mp-popover-list-item
                    v-for="item in item.actions"
                    :to="item.link"
                    :key="item.name"
                    as="router-link"
                  >
                    {{ item.name }}
                  </mp-popover-list-item>
                </mp-popover-list>
              </mp-popover-content>
            </mp-popover>
            <mp-button
              v-if="
                item.status === 'Completed' || item.status === 'Cancel resign'
              "
              variant="outline"
            >
              Details
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
  MpFlex,
  MpButton,
  MpIcon,
  MpAvatar,
  MpBadge,
  MpProgress,
  MpText,
  MpCheckbox,
  MpTooltip,
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

export default {
  name: "MpxOffboardingTable",
  components: {
    MpBox,
    MpFlex,
    MpButton,
    MpIcon,
    MpAvatar,
    MpBadge,
    MpProgress,
    MpText,
    MpCheckbox,
    MpTooltip,
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
