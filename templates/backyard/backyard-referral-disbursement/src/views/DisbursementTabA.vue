<template>
  <mp-box>
    <DisbursementFilterTabA />
    <DisbursementTableTabA />
    <Pagination />
  </mp-box>
</template>

<script>
import { MpBox } from "@mekari/pixel";
import DisbursementFilterTabA from "./DisbursementFilterTabA";
import DisbursementTableTabA from "./DisbursementTableTabA"
import Pagination from "../components/Pagination";

export default {
  name: "DisbursementTabA",
  components: {
    MpBox,
    DisbursementFilterTabA,
    DisbursementTableTabA,
    Pagination,
  },
};
</script>
