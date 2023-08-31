<template>
  <mp-box>
    <DisbursementFilterTabC />
    <DisbursementTableTabC />
    <Pagination />
  </mp-box>
</template>

<script>
import { MpBox } from "@mekari/pixel";
import DisbursementFilterTabC from "./DisbursementFilterTabC";
import DisbursementTableTabC from "./DisbursementTableTabC";
import Pagination from "../components/Pagination";

export default {
  name: "DisbursementTabB",
  components: {
    MpBox,
    DisbursementFilterTabC,
    DisbursementTableTabC,
    Pagination,
  },
};
</script>
