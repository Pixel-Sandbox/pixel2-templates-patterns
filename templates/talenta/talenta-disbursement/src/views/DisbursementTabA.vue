<template>
  <mp-box>
    <DisbursementFilterA />
    <DisbursementTableA :data="data" />
    <Pagination />
  </mp-box>
</template>

<script>
import { MpBox } from "@mekari/pixel";
import DisbursementFilterA from "./DisbursementFilterA";
import DisbursementTableA from "./DisbursementTableA";
import Pagination from '../components/Pagination'
import data from "../assets/table-data.json";

export default {
  name: "DisbursementTabA",
  components: {
    MpBox,
    DisbursementFilterA,
    DisbursementTableA,
    Pagination
  },
  data: () => {
    return {
      data: data.table_data_a,
    };
  },
};
</script>