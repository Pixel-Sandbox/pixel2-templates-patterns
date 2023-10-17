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
          :display="['inline-block', 'flex']"
        >
          <mp-box height="12">
            <mp-text font-size="sm" is-link>Subscriptions</mp-text>
            <mp-heading as="h1" font-size="2xl" font-weight="semibold">
              Proforma invoice
            </mp-heading>
          </mp-box>
        </mp-flex>
        <mp-box
          min-height="calc(100vh - 132px)"
          border-top-width="1px"
          background-color="white"
          :padding="['4', '6']"
        >
          <ProformaInvoiceFilter />
          <ProformaInvoiceTable />
        </mp-box>
      </mp-box>
    </mp-flex>
  </mp-box>
</template>

<script>
import { MpBox, MpFlex, MpText, MpHeading } from "@mekari/pixel";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import SidebarChild from "../../components/SidebarChild";
import ProformaInvoiceFilter from "./ProformaInvoiceFilter";
import ProformaInvoiceTable from "./ProformaInvoiceTable";

export default {
  name: "ProformaInvoice",
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpHeading,
    Header,
    Sidebar,
    SidebarChild,
    ProformaInvoiceFilter,
    ProformaInvoiceTable,
  },
};
</script>