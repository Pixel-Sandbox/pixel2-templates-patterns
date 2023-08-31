<template>
  <mp-box>
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 60px)">
      <Sidebar default-is-toggle />
      <SidebarChild />
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
            <mp-text font-size="sm" is-link>Subscriptions</mp-text>
            <mp-heading as="h1" font-size="2xl" font-weight="semibold">
              All subscription
            </mp-heading>
          </mp-box>
          <mp-box
            :position="['fixed', 'relative']"
            :top="['96%', '0']"
            :left="['50%', '0']"
            :transform="['translate(-50%, -96%)', 'translate(0%, 0%)']"
            :box-shadow="['xl', 'inherit']"
            :border-radius="['full', 'md']"
            z-index="1"
          >
            <mp-button
              :border-radius="['full', 'md']"
              as="router-link"
              to="/create-performa-invoice"
            >
              Create proforma invoice
            </mp-button>
          </mp-box>
        </mp-flex>
        <mp-box
          min-height="calc(100vh - 132px)"
          border-top-width="1px"
          background-color="white"
          :padding="['4', '6']"
        >
          <SubscriptionFilter />
          <SubscriptionTable />
        </mp-box>
      </mp-box>
    </mp-flex>
  </mp-box>
</template>

<script>
import { MpBox, MpFlex, MpText, MpHeading, MpButton } from "@mekari/pixel";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import SidebarChild from "../../components/SidebarChild";
import SubscriptionFilter from "./SubscriptionFilter";
import SubscriptionTable from "./SubscriptionTable";

export default {
  name: "Subscription",
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpHeading,
    MpButton,
    Header,
    Sidebar,
    SidebarChild,
    SubscriptionFilter,
    SubscriptionTable,
  },
};
</script>