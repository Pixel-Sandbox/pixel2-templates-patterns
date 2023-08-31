<template>
  <mp-box>
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 64px)">
      <Sidebar is-stacked :default-is-toggle="false" />
      <mp-box
        as="section"
        data-id="content"
        width="100%"
        height="calc(100vh - 60px)"
        overflow-y="auto"
        background-color="background"
      >
        <SubHeader title="All backyards" />
        <mp-box
          min-height="calc(100vh - 126px)"
          border-top-width="1px"
          background-color="white"
          padding="6"
        >
          <mp-text>Backyards that you use</mp-text>
          <mp-grid
            gap="6"
            :template-columns="[
              'repeat(1, 1fr)',
              'repeat(2, 1fr)',
              'repeat(3, 1fr)',
              'repeat(4, 1fr)',
            ]"
            margin-top="6"
          >
            <mp-box position="relative" border-radius="md">
              <mp-box
                display="inline-flex"
                background-color="gray.50"
                border-radius="md"
                padding="2"
              >
                <mp-icon name="billing" variant="fill" color="blue.400" />
              </mp-box>
              <mp-heading as="h3" font-size="lg" margin-top="3">
                Subscription
              </mp-heading>
              <mp-text color="gray.600" margin-top="1" height="12">
                Manage company billing purchase and subscription.
              </mp-text>
              <mp-button
                variant="outline"
                margin-top="11"
                @click="onApprovalModalToggle(true)"
              >
                Waiting approval
              </mp-button>
            </mp-box>
          </mp-grid>
          <mp-divider margin-y="6" />
          <mp-text>To use backyards below, please request access</mp-text>
          <mp-grid
            gap="6"
            :template-columns="[
              'repeat(1, 1fr)',
              'repeat(2, 1fr)',
              'repeat(3, 1fr)',
              'repeat(4, 1fr)',
            ]"
            margin-top="6"
          >
            <mp-box position="relative" border-radius="md">
              <mp-box
                display="inline-flex"
                background-color="gray.50"
                border-radius="md"
                padding="2"
              >
                <mp-icon name="application" variant="fill" color="blue.400" />
              </mp-box>
              <mp-heading as="h3" font-size="lg" margin-top="3">
                Marketplace CMS
              </mp-heading>
              <mp-text color="gray.600" margin-top="1" height="12">
                Manage integration and add-ons SKU.
              </mp-text>
              <mp-button
                variant="outline"
                margin-top="11"
                @click="onRequestModalToggle(true)"
              >
                Request access
              </mp-button>
            </mp-box>
            <mp-box position="relative" border-radius="md">
              <mp-box
                display="inline-flex"
                background-color="gray.50"
                border-radius="md"
                padding="2"
              >
                <mp-icon name="talenta-brand" variant="fill" color="blue.400" />
              </mp-box>
              <mp-heading as="h3" font-size="lg" margin-top="3">
                Talenta backyard
              </mp-heading>
              <mp-text color="gray.600" margin-top="1" height="12">
                Advanced payroll automation & HR solution.
              </mp-text>
              <mp-button variant="outline" margin-top="11">
                Request access
              </mp-button>
            </mp-box>
            <mp-box position="relative" border-radius="md">
              <mp-box
                display="inline-flex"
                background-color="gray.50"
                border-radius="md"
                padding="2"
              >
                <mp-icon name="jurnal-brand" variant="fill" color="blue.400" />
              </mp-box>
              <mp-heading as="h3" font-size="lg" margin-top="3">
                Jurnal admin
              </mp-heading>
              <mp-text color="gray.600" margin-top="1" height="12">
                Advanced payroll automation & HR solution.
              </mp-text>
              <mp-button variant="outline" margin-top="11">
                Request access
              </mp-button>
            </mp-box>
          </mp-grid>
        </mp-box>
      </mp-box>
    </mp-flex>
    <AllBackyardApprovalModal
      :isModalOpen="isApprovalModalOpen"
      :onModalToggle="onApprovalModalToggle"
    />
    <AllBackyardRequestModal
      :isModalOpen="isRequestModalOpen"
      :onModalToggle="onRequestModalToggle"
    />
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpGrid,
  MpDivider,
  MpButton,
  MpIcon,
  MpHeading,
  MpText,
} from "@mekari/pixel";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import SubHeader from "../components/SubHeader";
import AllBackyardApprovalModal from "./AllBackyardApprovalModal";
import AllBackyardRequestModal from "./AllBackyardRequestModal";

export default {
  name: "AllBackyard",
  components: {
    MpBox,
    MpFlex,
    MpGrid,
    MpDivider,
    MpButton,
    MpIcon,
    MpHeading,
    MpText,
    Header,
    Sidebar,
    SubHeader,
    AllBackyardApprovalModal,
    AllBackyardRequestModal,
  },
  data: function () {
    return {
      isApprovalModalOpen: false,
      isRequestModalOpen: false,
    };
  },
  methods: {
    onApprovalModalToggle: function (data) {
      this.isApprovalModalOpen = data;
    },
    onRequestModalToggle: function (data) {
      this.isRequestModalOpen = data;
    },
  },
};
</script>