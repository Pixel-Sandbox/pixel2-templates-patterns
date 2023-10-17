<template>
  <mp-flex padding="6">
    <StatsNonClickable
      value="236"
      icon="people"
      description="Shortlisted"
    />
    <mp-divider orientation="vertical" margin-x="4" />
    <StatsNonClickable
      value="881"
      icon="chat"
      description="HRD Interview"
    />
    <mp-divider orientation="vertical" margin-x="4" />
    <StatsNonClickable
      value="948"
      icon="chat"
      description="User Interview"
    />
    <mp-divider orientation="vertical" margin-x="4" />
    <StatsNonClickable
      value="863"
      icon="draft"
      description="Technical Test"
    />
  </mp-flex>
</template>

<script>
  import { MpFlex, MpDivider } from "@mekari/pixel";
  import StatsNonClickable from "./components/StatsNonClickable";

  export default {
    name: "App",
    components: {
      MpFlex,
      MpDivider,
      StatsNonClickable,
    },
  };
</script>
