<template>
  <mp-box>
    <mp-flex margin-bottom="6">
      <Stats value="Rp52.020.000" description="Total commission to be paid" />
      <mp-divider orientation="vertical" margin-x="4" />
      <Stats value="119" description="Total agent" />
    </mp-flex>
    <DisbursementFilterTabB />
    <DisbursementTableTabB />
    <Pagination />
  </mp-box>
</template>

<script>
import { MpBox, MpFlex, MpDivider } from "@mekari/pixel";
import DisbursementFilterTabB from "./DisbursementFilterTabB";
import DisbursementTableTabB from "./DisbursementTableTabB";
import Pagination from "../components/Pagination";
import Stats from "../components/Stats";

export default {
  name: "DisbursementTabB",
  components: {
    MpBox,
    MpFlex,
    MpDivider,
    DisbursementFilterTabB,
    DisbursementTableTabB,
    Pagination,
    Stats,
  },
};
</script>
