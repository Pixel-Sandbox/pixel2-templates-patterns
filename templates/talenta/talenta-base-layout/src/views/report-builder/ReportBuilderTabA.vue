<template>
  <mp-box>
    <ReportBuilderFilterA />
    <ReportBuilderTableA />
  </mp-box>
</template>

<script>
import { MpBox } from "@mekari/pixel";
import ReportBuilderFilterA from "./ReportBuilderFilterA";
import ReportBuilderTableA from "./ReportBuilderTableA";

export default {
  name: "ReportBuilderTabA",
  components: {
    MpBox,
    ReportBuilderFilterA,
    ReportBuilderTableA,
  },
};
</script>