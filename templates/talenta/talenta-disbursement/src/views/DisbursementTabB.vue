<template>
  <mp-box>
    <mp-banner variant="info" margin-bottom="6" is-inline>
      <mp-banner-icon />
      <mp-banner-description display="inline-flex">
        <mp-text>
          All submitted disbursement will be processed on the Mekari Expense.
        </mp-text>
        <mp-text margin-left="0.5" is-link>Go to Mekari Expense</mp-text>
      </mp-banner-description>
    </mp-banner>
    <DisbursementFilterB />
    <DisbursementTableB :data="data" />
    <Pagination />
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpText,
  MpBanner,
  MpBannerIcon,
  MpBannerDescription,
} from "@mekari/pixel";
import DisbursementFilterB from "./DisbursementFilterB";
import DisbursementTableB from "./DisbursementTableB";
import Pagination from "../components/Pagination";
import data from "../assets/table-data.json";

export default {
  name: "DisbursementTabB",
  components: {
    MpBox,
    MpText,
    MpBanner,
    MpBannerIcon,
    MpBannerDescription,
    DisbursementFilterB,
    DisbursementTableB,
    Pagination,
  },
  data: () => {
    return {
      data: data.table_data_b,
    };
  },
};
</script>