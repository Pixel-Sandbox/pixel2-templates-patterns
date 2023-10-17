<template>
  <mp-flex padding="6">
    <StatsClickable
      id="1"
      value="236"
      icon="people"
      description="Shortlisted"
      :filtered="filtered"
      @click="setFilter"
    />
    <mp-divider orientation="vertical" margin-x="4" />
    <StatsClickable
      id="2"
      value="881"
      icon="chat"
      description="HR Interview"
      :filtered="filtered"
      @click="setFilter"
    />
    <mp-divider orientation="vertical" margin-x="4" />
    <StatsClickable
      id="3"
      value="948"
      icon="chat"
      description="User Interview"
      :filtered="filtered"
      @click="setFilter"
    />
    <mp-divider orientation="vertical" margin-x="4" />
    <StatsClickable
      id="4"
      value="863"
      icon="draft"
      description="Technical Test"
      :filtered="filtered"
      @click="setFilter"
    />
  </mp-flex>
</template>

<script>
  import { MpFlex, MpDivider } from "@mekari/pixel";
  import StatsClickable from "./components/StatsClickable";

  export default {
    name: "App",
    components: {
      MpFlex,
      MpDivider,
      StatsClickable,
    },
    data: function () {
      return {
        filtered: "0",
      };
    },
    methods: {
      setFilter: function (id) {
        if (this.filtered === id) this.filtered = "0";
        else this.filtered = id;
      },
    },
  };
</script>
