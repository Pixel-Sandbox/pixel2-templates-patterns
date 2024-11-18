<template>
  <mp-box
    data-component="AireneAnswerTable"
    class="airene_answer_table"
    :border-width="showInFullView ? 0 : 1"
    :rounded="showInFullView ? 'none' : 'md'"
    bg="white"
    overflow="hidden"
  >
    <mp-table-container overflow="auto">
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
  </mp-box>
</template>

<script>
import {
  MpBox,
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
    MpTableContainer,
    MpTableLite,
    MpTableHeadLite,
    MpTableBodyLite,
    MpTableRowLite,
    MpTableCellLite,
  },
  props: {
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
