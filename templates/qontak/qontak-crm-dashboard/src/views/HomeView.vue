<template>
  <mp-box>
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 56px)">
      <Sidebar is-alternate is-custom />
      <mp-box
        as="section"
        data-id="content"
        width="100%"
        height="calc(100vh - 56px)"
        overflow-y="auto"
        background-color="background"
      >
        <SubHeader title="Dashboard" type="home" />
        <mp-box
          min-height="calc(100vh - 128px)"
          border-top-width="1px"
          border-left-width="1px"
          border-top-left-radius="md"
          border-color="gray.100"
          background-color="white"
          padding="6"
        >
          <mp-text>Place content here...</mp-text>
        </mp-box>
      </mp-box>
    </mp-flex>
  </mp-box>
</template>

<script>
import { MpBox, MpFlex, MpText } from "@mekari/pixel";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import SubHeader from "../components/SubHeader";

export default {
  name: "HomeView",
  components: {
    MpBox,
    MpFlex,
    MpText,
    Header,
    Sidebar,
    SubHeader,
  },
};
</script>