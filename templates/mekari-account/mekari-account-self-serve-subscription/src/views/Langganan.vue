<template>
  <mp-box>
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 60px)">
      <Sidebar is-alternate is-custom />
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
          :padding-x="['4', '6']"
          :display="['inline-block', 'flex']"
          padding-y="1.063rem"
        >
          <mp-box>
            <mp-heading as="h1" font-size="2xl" font-weight="semibold">
              Langganan
            </mp-heading>
          </mp-box>
        </mp-flex>
        <mp-box
          min-height="calc(100vh - 132px)"
          border-top-width="1px"
          border-left-width="1px"
          border-top-left-radius="md"
          border-color="gray.100"
          background-color="white"
          :padding="['4', '6']"
        >
          <mp-flex gap="6">
            <mp-box
              background-color="white"
              border="1px solid"
              border-color="gray.100"
              border-radius="md"
              min-width="375px"
            >
              <mp-box
                padding-x="4"
                padding-y="3"
                background-color="orange.50"
                border-top-left-radius="md"
                border-top-right-radius="md"
              >
                <mp-text>
                  Menunggu pembayaran sampai <b>26 Nov 2023.</b>
                </mp-text>
              </mp-box>
              <mp-box padding="4">
                <mp-flex
                  justify="space-between"
                  align-items="center"
                  margin-bottom="3"
                >
                  <mp-flex gap="4" align-items="center">
                    <mp-icon name="jurnal-brand" size="lg" />
                    <mp-flex direction="column">
                      <mp-text color="gray.600" font-size="sm">Mekari</mp-text>
                      <mp-text
                        color="dark"
                        font-size="lg"
                        font-weight="semibold"
                      >
                        Jurnal
                      </mp-text>
                    </mp-flex>
                  </mp-flex>
                  <mp-badge variant="solid" variant-color="green">
                    Aktif
                  </mp-badge>
                </mp-flex>

                <mp-text font-weight="semibold"> Jurnal Enterprise </mp-text>
                <mp-text
                  color="gray.600"
                  font-size="sm"
                  margin-top="1"
                  margin-bottom="7"
                >
                  1 Jan 2022 - 31 Dec 2022
                </mp-text>
                <mp-text as="a" is-link> Lihat detail tagihan </mp-text>
              </mp-box>
            </mp-box>

            <mp-box
              background-color="white"
              border="1px solid"
              border-color="gray.100"
              border-radius="md"
              min-width="375px"
            >
              <mp-box
                padding-x="4"
                padding-y="3"
                background-color="red.50"
                border-top-left-radius="md"
                border-top-right-radius="md"
              >
                <mp-text>
                  Menunggu pembayaran sampai <b>25 Nov 2023.</b>
                </mp-text>
              </mp-box>
              <mp-box padding="4">
                <mp-flex
                  justify="space-between"
                  align-items="center"
                  margin-bottom="3"
                >
                  <mp-flex gap="4" align-items="center">
                    <mp-icon name="talenta-brand" size="lg" />
                    <mp-flex direction="column">
                      <mp-text color="gray.600" font-size="sm">Mekari</mp-text>
                      <mp-text
                        color="dark"
                        font-size="lg"
                        font-weight="semibold"
                      >
                        Talenta
                      </mp-text>
                    </mp-flex>
                  </mp-flex>
                  <mp-badge variant="solid" variant-color="green">
                    Aktif
                  </mp-badge>
                </mp-flex>

                <mp-text font-weight="semibold"> Talenta Essential </mp-text>
                <mp-text
                  color="gray.600"
                  font-size="sm"
                  margin-top="1"
                  margin-bottom="7"
                >
                  1 Jan 2022 - 31 Dec 2022
                </mp-text>
                <mp-button variant="link" as="router-link" to="/detail-tagihan">
                  Lihat detail tagihan
                </mp-button>
              </mp-box>
            </mp-box>

            <mp-box
              background-color="white"
              border="1px solid"
              border-color="gray.100"
              border-radius="md"
              min-width="375px"
            >
              <mp-box padding="4">
                <mp-flex
                  justify="space-between"
                  align-items="center"
                  margin-bottom="3"
                >
                  <mp-flex gap="4" align-items="center">
                    <mp-icon name="qontak-brand" size="lg" />
                    <mp-flex direction="column">
                      <mp-text color="gray.600" font-size="sm">Mekari</mp-text>
                      <mp-text
                        color="dark"
                        font-size="lg"
                        font-weight="semibold"
                      >
                        Qontak
                      </mp-text>
                    </mp-flex>
                  </mp-flex>
                  <mp-badge variant="solid" variant-color="green">
                    Aktif
                  </mp-badge>
                </mp-flex>

                <mp-text font-weight="semibold"> Qontak Pro </mp-text>
                <mp-text
                  color="gray.600"
                  font-size="sm"
                  margin-top="1"
                  margin-bottom="7"
                >
                  1 Jan 2022 - 31 Dec 2022
                </mp-text>
                <mp-text as="a" is-link> Lihat detail tagihan </mp-text>
              </mp-box>
            </mp-box>
          </mp-flex>
        </mp-box>
      </mp-box>
    </mp-flex>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpIcon,
  MpHeading,
  MpBadge,
  MpButton,
  MpText,
} from "@mekari/pixel";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default {
  name: "Langganan",
  components: {
    MpBox,
    MpFlex,
    MpIcon,
    MpHeading,
    MpBadge,
    MpButton,
    MpText,
    Header,
    Sidebar,
  },
};
</script>