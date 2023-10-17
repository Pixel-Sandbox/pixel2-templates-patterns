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
          padding="6"
        >
          <mp-box
            position="relative"
            height="300px"
            background-color="blue.400"
            border-radius="xl"
            padding-y="64px"
            padding-x="80px"
          >
            <img
              src="../assets/illustration.png"
              :style="{
                position: 'absolute',
                width: '480px',
                right: '0',
                top: '0',
              }"
            />
            <mp-heading
              as="h1"
              color="white"
              font-size="40px"
              font-weight="600"
              line-height="50px"
              width="637px"
              margin-bottom="2"
            >
              Explore add-ons & integration for Mekari products
            </mp-heading>
            <mp-text
              as="h1"
              color="white"
              font-size="14px"
              font-weight="400"
              line-height="24px"
            >
              Mekari Marketplace offers various add-ons to increase <br />
              your business productivity.
            </mp-text>
          </mp-box>
          <mp-grid gap="6" templateColumns="repeat(4, 1fr)" margin-top="6">
            <mp-box
              position="relative"
              height="300px"
              border="1px"
              border-radius="md"
              border-color="gray.100"
              padding="4"
            >
              <img src="../assets/moka-logo.png" width="58px" height="58px" />
              <mp-heading as="h3" font-size="lg" margin-top="3">
                Moka POS
              </mp-heading>
              <mp-text color="gray.600" font-size="sm" margin-top="1">
                PT Moka Teknologi Indonesia
              </mp-text>
              <mp-flex align-items="center" margin-y="4">
                <img
                  src="../assets/jurnal-mini-logo.png"
                  width="18px"
                  height="18px"
                />
                <mp-text color="dark" font-size="sm" margin-left="1">
                  Jurnal
                </mp-text>
              </mp-flex>
              <mp-text color="dark" font-size="md" margin-bottom="4">
                Manage transactions more efficiently.
              </mp-text>
              <mp-button
                as="router-link"
                to="/detail"
                variant="outline"
                size="sm"
                position="absolute"
                bottom="4"
              >
                Learn more
              </mp-button>
            </mp-box>
            <mp-box
              position="relative"
              height="300px"
              border="1px"
              border-radius="md"
              border-color="gray.100"
              padding="4"
            >
              <img src="../assets/jurnal-logo.png" width="58px" height="58px" />
              <mp-heading as="h3" font-size="lg" margin-top="3">
                Jurnal Multi Product Pricing
              </mp-heading>
              <mp-text color="gray.600" font-size="sm" margin-top="1">
                PT Mid Solusi Nusantara
              </mp-text>
              <mp-flex align-items="center" margin-y="4">
                <img
                  src="../assets/jurnal-mini-logo.png"
                  width="18px"
                  height="18px"
                />
                <mp-text color="dark" font-size="sm" margin-left="1">
                  Jurnal
                </mp-text>
              </mp-flex>
              <mp-text color="dark" font-size="md" margin-bottom="4">
                Manage pricing for certain products, for each customer.
              </mp-text>
              <mp-button
                variant="outline"
                size="sm"
                position="absolute"
                bottom="4"
              >
                Learn more
              </mp-button>
            </mp-box>
            <mp-box
              position="relative"
              height="300px"
              border="1px"
              border-radius="md"
              border-color="gray.100"
              padding="4"
            >
              <img
                src="../assets/iseller-logo.png"
                width="58px"
                height="58px"
              />
              <mp-heading as="h3" font-size="lg" margin-top="3">
                iSeller
              </mp-heading>
              <mp-text color="gray.600" font-size="sm" margin-top="1">
                Intersoft Solutions
              </mp-text>
              <mp-flex align-items="center" margin-y="4">
                <img
                  src="../assets/jurnal-mini-logo.png"
                  width="18px"
                  height="18px"
                />
                <mp-text color="dark" font-size="sm" margin-left="1">
                  Jurnal
                </mp-text>
              </mp-flex>
              <mp-text color="dark" font-size="md" margin-bottom="4">
                All-in-one platform for growing your business.
              </mp-text>
              <mp-button
                variant="outline"
                size="sm"
                position="absolute"
                bottom="4"
              >
                Learn more
              </mp-button>
            </mp-box>
            <mp-box
              position="relative"
              height="300px"
              border="1px"
              border-radius="md"
              border-color="gray.100"
              padding="4"
            >
              <img src="../assets/jurnal-logo.png" width="58px" height="58px" />
              <mp-heading as="h3" font-size="lg" margin-top="3">
                Jurnal Profitability Report
              </mp-heading>
              <mp-text color="gray.600" font-size="sm" margin-top="1">
                PT Mid Solusi Nusantara
              </mp-text>
              <mp-flex align-items="center" margin-y="4">
                <img
                  src="../assets/jurnal-mini-logo.png"
                  width="18px"
                  height="18px"
                />
                <mp-text color="dark" font-size="sm" margin-left="1">
                  Jurnal
                </mp-text>
              </mp-flex>
              <mp-text color="dark" font-size="md" margin-bottom="4">
                Run real-time profit calculation report easily.
              </mp-text>
              <mp-button
                variant="outline"
                size="sm"
                position="absolute"
                bottom="4"
              >
                Learn more
              </mp-button>
            </mp-box>
            <mp-box
              position="relative"
              height="300px"
              border="1px"
              border-radius="md"
              border-color="gray.100"
              padding="4"
            >
              <img src="../assets/deal-logo.png" width="58px" height="58px" />
              <mp-heading as="h3" font-size="lg" margin-top="3">
                Deal POS
              </mp-heading>
              <mp-text color="gray.600" font-size="sm" margin-top="1">
                PT Generasi Inspirasi Informatika
              </mp-text>
              <mp-flex align-items="center" margin-y="4">
                <img
                  src="../assets/jurnal-mini-logo.png"
                  width="18px"
                  height="18px"
                />
                <mp-text color="dark" font-size="sm" margin-left="1">
                  Jurnal
                </mp-text>
              </mp-flex>
              <mp-text color="dark" font-size="md" margin-bottom="4">
                Selling in stores and marketplaces in one platform.
              </mp-text>
              <mp-button
                variant="outline"
                size="sm"
                position="absolute"
                bottom="4"
              >
                Learn more
              </mp-button>
            </mp-box>
            <mp-box
              position="relative"
              height="300px"
              border="1px"
              border-radius="md"
              border-color="gray.100"
              padding="4"
            >
              <img src="../assets/olsera-logo.png" width="58px" height="58px" />
              <mp-heading as="h3" font-size="lg" margin-top="3">
                Olsera
              </mp-heading>
              <mp-text color="gray.600" font-size="sm" margin-top="1">
                PT Olsera Indonesia Pratama
              </mp-text>
              <mp-flex align-items="center" margin-y="4">
                <img
                  src="../assets/jurnal-mini-logo.png"
                  width="18px"
                  height="18px"
                />
                <mp-text color="dark" font-size="sm" margin-left="1">
                  Jurnal
                </mp-text>
              </mp-flex>
              <mp-text color="dark" font-size="md" margin-bottom="4">
                Simplify bookkeeping with integration to business reports.
              </mp-text>
              <mp-button
                variant="outline"
                size="sm"
                position="absolute"
                bottom="4"
              >
                Learn more
              </mp-button>
            </mp-box>
          </mp-grid>
        </mp-box>
      </mp-box>
    </mp-flex>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpGrid,
  MpHeading,
  MpText,
  MpButton,
} from "@mekari/pixel";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default {
  name: "Marketplace",
  components: {
    MpBox,
    MpFlex,
    MpGrid,
    MpHeading,
    MpText,
    MpButton,
    Header,
    Sidebar,
  },
};
</script>