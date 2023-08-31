<template>
  <mp-box>
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 60px)">
      <Sidebar is-stacked />
      <mp-box
        as="section"
        data-id="content"
        width="100%"
        height="calc(100vh - 60px)"
        overflow-y="auto"
        background-color="background"
      >
        <mp-flex
          justify="space-between"
          align-items="center"
          padding-y="3"
          :padding-x="['4', '6']"
        >
          <mp-box height="12">
            <mp-text font-size="sm" is-link>MS-22070000003</mp-text>
            <mp-heading as="h1" font-size="2xl" font-weight="semibold">
              Create new proforma invoice
            </mp-heading>
          </mp-box>
        </mp-flex>

        <mp-box
          min-height="calc(100vh - 142px)"
          border-top-width="1px"
          background-color="white"
          :padding="['4', '6']"
        >
          <CreateSubscriptionSecA />
          <mp-divider />
          <CreateSubscriptionSecB />
          <mp-divider />
          <CreateSubscriptionSecC />
          <mp-divider />
          <CreateSubscriptionSecD />
        </mp-box>
      </mp-box>
    </mp-flex>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpDivider,
  MpHeading,
  MpText,
} from "@mekari/pixel";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import CreateSubscriptionSecA from "./CreateSubscriptionSecA";
import CreateSubscriptionSecB from "./CreateSubscriptionSecB";
import CreateSubscriptionSecC from "./CreateSubscriptionSecC";
import CreateSubscriptionSecD from "./CreateSubscriptionSecD";

export default {
  name: "Subscription",
  components: {
    MpBox,
    MpFlex,
    MpDivider,
    MpHeading,
    MpText,
    Header,
    Sidebar,
    CreateSubscriptionSecA,
    CreateSubscriptionSecB,
    CreateSubscriptionSecC,
    CreateSubscriptionSecD,
  },
};
</script>