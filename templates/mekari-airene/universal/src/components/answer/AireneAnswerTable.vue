<template>
  <mp-box
    data-component="AireneAnswerTable"
    class="airene_answer_table"
    :border-width="showInFullView ? 0 : 1"
    :rounded="showInFullView ? 'none' : 'md'"
    bg="white"
    overflow="hidden"
  >
    <mp-table-container
      v-if="!isOnlyShowInFullView || showInFullView"
      overflow="auto"
    >
      <mp-table-lite :is-hoverable="false">
        <mp-table-head-lite>
          <mp-table-row-lite>
            <mp-table-cell-lite v-for="header in headers" :key="header" as="th">
              {{ header }}
            </mp-table-cell-lite>
          </mp-table-row-lite>
        </mp-table-head-lite>
        <mp-table-body-lite>
          <mp-table-row-lite v-for="(row, index) in rows" :key="index">
            <mp-table-cell-lite
              v-for="(cell, cellIndex) in row"
              :key="cellIndex"
              as="td"
            >
              {{ cell }}
            </mp-table-cell-lite>
          </mp-table-row-lite>
        </mp-table-body-lite>
      </mp-table-lite>
    </mp-table-container>

    <mp-flex
      v-if="isOnlyShowInFullView && !showInFullView"
      height="300px"
      width="full"
      align-items="center"
      justify-content="center"
    >
      <mp-text
        color="gray.600"
        font-size="sm"
        text-align="center"
        max-w="197px"
      >
        To view table or chart please see in full page
      </mp-text>
    </mp-flex>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpText,
  MpTableContainer,
  MpTableLite,
  MpTableHeadLite,
  MpTableBodyLite,
  MpTableRowLite,
  MpTableCellLite,
} from "@mekari/pixel";

export default {
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpTableContainer,
    MpTableLite,
    MpTableHeadLite,
    MpTableBodyLite,
    MpTableRowLite,
    MpTableCellLite,
  },
  props: {
    isOnlyShowInFullView: {
      type: Boolean,
      default: false,
    },
    showInFullView: {
      type: Boolean,
      default: false,
    },
    headers: {
      type: Array,
      required: true,
    },
    rows: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.airene_answer_table tr:last-child td {
  border-bottom: none;
}
</style>
