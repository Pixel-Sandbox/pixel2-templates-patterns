<template>
  <mp-flex padding="6">
    <StatsBadge
      value="10 batches"
      icon="copy"
      variant-label="blue"
      label="Expiring soon"
      link="See report"
    />
    <mp-divider orientation="vertical" margin-x="4" />
    <StatsBadge
      value="23 batches"
      icon="copy"
      variant-label="orange"
      label="Expired this month"
      link="See report"
    />
    <mp-divider orientation="vertical" margin-x="4" />
    <StatsBadge
      value="140 batches"
      icon="copy"
      variant-label="red"
      label="Past expiry date"
      link="See report"
    />
    <mp-divider orientation="vertical" margin-x="4" />
    <StatsBadge
      value="2400 batches"
      icon="copy"
      variant-label="gray"
      label="Total batches"
      link="See report"
    />
  </mp-flex>
</template>

<script>
  import { MpFlex, MpDivider } from "@mekari/pixel";
  import StatsBadge from "./components/StatsBadge";

  export default {
    name: "App",
    components: {
      MpFlex,
      MpDivider,
      StatsBadge,
    },
  };
</script>
