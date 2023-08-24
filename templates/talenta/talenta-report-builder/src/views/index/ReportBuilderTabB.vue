<template>
  <mp-box>
    <ReportBuilderFilterB />
    <ReportBuilderTableB />
  </mp-box>
</template>

<script>
import { MpBox } from "@mekari/pixel";
import ReportBuilderFilterB from "./ReportBuilderFilterB";
import ReportBuilderTableB from "./ReportBuilderTableB";

export default {
  name: "ReportBuilderTabB",
  components: {
    MpBox,
    ReportBuilderFilterB,
    ReportBuilderTableB,
  },
};
</script>
