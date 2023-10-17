<template>
  <mp-box>
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 60px)">
      <Sidebar />
      <mp-box
        as="section"
        data-id="content"
        width="100%"
        height="calc(100vh - 60px)"
        overflow-y="auto"
        background-color="background"
      >
        <mp-box
          min-height="calc(100vh - 192px)"
          background-color="white"
          padding-y="6"
          padding-x="56"
        >
          <mp-button
            as="router-link"
            to="/"
            variant="link"
            left-icon="arrows-left"
            margin-bottom="6"
          >
            Back to Explore
          </mp-button>

          <mp-flex
            justify-content="space-between"
            align-items="center"
            margin-bottom="6"
          >
            <mp-flex>
              <img
                src="../assets/moka-xl-logo.png"
                width="80px"
                height="80px"
              />
              <mp-flex
                flex-direction="column"
                justify-content="center"
                margin-left="4"
              >
                <mp-heading as="h1" font-size="2xl"> Moka POS </mp-heading>
                <mp-text color="gray.600" font-size="md" margin-top="1">
                  PT Moka Teknologi Indonesia
                </mp-text>
              </mp-flex>
            </mp-flex>
            <mp-flex>
              <mp-box
                color="blue.400"
                border="1px"
                border-radius="full"
                border-color="blue.50"
                height="9"
                padding-x="4"
                padding-y="2"
              >
                <mp-text color="blue.400" font-size="md" line-height="20px">
                  Rp273.000/month
                </mp-text>
              </mp-box>
              <mp-button margin-left="4" @click="onInquiryModalToggle(true)">
                Install
              </mp-button>
            </mp-flex>
          </mp-flex>

          <mp-carousel
            width="full"
            height="400px"
            :auto-play-timeout="2000"
            indicator-variant="dot"
            indicator-position="center"
            indicator-active-color="dark"
            :is-auto-play="true"
            :is-show-button-nav="true"
            :is-loop="false"
            border-radius="xl"
            border="none"
            margin-bottom="8"
          >
            <mp-carousel-item width="full" height="400px" padding="10">
              Overview 1
            </mp-carousel-item>
            <mp-carousel-item width="full" height="400px" padding="10">
              Overview 2
            </mp-carousel-item>
            <mp-carousel-item width="full" height="400px" padding="10">
              Overview 3
            </mp-carousel-item>
          </mp-carousel>

          <mp-box
            padding="6"
            border-left="3px solid"
            border-color="blue.400"
            border-top-right-radius="md"
            border-bottom-right-radius="md"
            shadow="md"
            margin-bottom="8"
          >
            <mp-heading as="h2" font-size="xl" margin-bottom="6">
              About this add-ons
            </mp-heading>
            <mp-text>
              POS and accounting in one with maximum automation. This will let
              Jurnal extracts your sales data from POS daily, directly post as
              entry and ready in your accounting book. Producing your full
              reports will be quick and easy. If daily synchronization is not
              enough, you can also sync anytime you need it. <br />
              <br />
            </mp-text>
            <mp-text v-if="isReadmore">
              POS and accounting in one with maximum automation. This will let
              Jurnal extracts your sales data from POS daily, directly post as
              entry and ready in your accounting book. Producing your full
              reports will be quick and easy. If daily synchronization is not
              enough, you can also sync anytime you need it. <br />
              <br />
            </mp-text>
            <mp-button
              variant="link"
              margin-top="2"
              margin-bottom="6"
              @click="handleTextCollpse"
            >
              {{ isReadmore ? "Read less" : "Read more" }}
            </mp-button>
            <mp-flex align-items="center">
              <mp-text margin-right="2"> Categories: </mp-text>
              <mp-flex gap="10px">
                <mp-badge variant="subtle" variant-color="blue"> CRM </mp-badge>
                <mp-badge variant="subtle" variant-color="blue">
                  Productivity
                </mp-badge>
                <mp-badge variant="subtle" variant-color="blue">
                  Accounting
                </mp-badge>
              </mp-flex>
            </mp-flex>
          </mp-box>

          <mp-heading as="h2" font-size="xl" margin-bottom="6">
            How to set up the add-ons
          </mp-heading>
          <mp-text margin-bottom="6">
            To set up the add-ons, you can follow the steps below once the
            installation process is complete: <br />
            1. Choose the Add-ons menu on Jurnal <br />
            2. Click the Settings button on Moka POS <br />
            3. Complete the set up
          </mp-text>

          <mp-heading as="h2" font-size="xl" margin-bottom="6">
            Additional information
          </mp-heading>
          <mp-flex
            justify-content="space-between"
            align-items="center"
            margin-bottom="6"
          >
            <mp-flex>
              <mp-icon name="security" />
              <mp-box margin-left="3">
                <mp-text
                  color="gray.400"
                  font-size="md"
                  font-weight="600"
                  margin-bottom="0.5"
                >
                  Privacy policy
                </mp-text>
                <mp-button
                  variant="link"
                  right-icon="newtab"
                  size="sm"
                  font-weight="600"
                >
                  Learn more
                </mp-button>
              </mp-box>
            </mp-flex>
            <mp-flex>
              <mp-icon name="doc" />
              <mp-box margin-left="3">
                <mp-text
                  color="gray.400"
                  font-size="md"
                  font-weight="600"
                  margin-bottom="0.5"
                >
                  Terms of service
                </mp-text>
                <mp-button
                  variant="link"
                  right-icon="newtab"
                  size="sm"
                  font-weight="600"
                >
                  Learn more
                </mp-button>
              </mp-box>
            </mp-flex>
            <mp-flex>
              <mp-icon name="chat" />
              <mp-box margin-left="3">
                <mp-text
                  color="gray.400"
                  font-size="md"
                  font-weight="600"
                  margin-bottom="0.5"
                >
                  Support
                </mp-text>
                <mp-button
                  variant="link"
                  right-icon="newtab"
                  size="sm"
                  font-weight="600"
                >
                  Learn more
                </mp-button>
              </mp-box>
            </mp-flex>
          </mp-flex>
        </mp-box>
      </mp-box>
    </mp-flex>

    <MarketplaceInquiryModal
      :isModalOpen="isInquiryModalOpen"
      :onModalToggle="onInquiryModalToggle"
    />
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpHeading,
  MpText,
  MpButton,
  MpBadge,
  MpIcon,
  MpCarousel,
  MpCarouselItem,
} from "@mekari/pixel";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MarketplaceInquiryModal from "./MarketplaceInquiryModal";

export default {
  name: "MarketplaceDetail",
  components: {
    MpBox,
    MpFlex,
    MpHeading,
    MpText,
    MpButton,
    MpBadge,
    MpIcon,
    Header,
    Sidebar,
    MpCarousel,
    MpCarouselItem,
    MarketplaceInquiryModal,
  },
  data: function () {
    return {
      isInquiryModalOpen: false,
      isReadmore: false,
    };
  },
  methods: {
    onInquiryModalToggle: function (data) {
      this.isInquiryModalOpen = data;
    },
    handleTextCollpse: function () {
      this.isReadmore = !this.isReadmore;
    },
  },
};
</script>