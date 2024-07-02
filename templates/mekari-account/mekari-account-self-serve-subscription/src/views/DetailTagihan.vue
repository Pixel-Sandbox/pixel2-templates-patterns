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
          <mp-box height="12">
            <mp-text font-size="sm" is-link>Langganan</mp-text>
            <mp-heading as="h1" font-size="2xl" font-weight="semibold">
              Mekari Talenta
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
            <mp-box :width="['full', '50%']">
              <mp-flex gap="2" align="center" margin-bottom="2">
                <mp-icon name="talenta-brand" />
                <mp-heading as="h2" font-size="xl">
                  Talenta Essential
                </mp-heading>
                <mp-badge variant="solid" variant-color="green">
                  Aktif
                </mp-badge>
              </mp-flex>
              <DescriptionList>
                <template #left-side>
                  <mp-text color="gray.600">Periode</mp-text>
                </template>
                <template #right-side>
                  <mp-flex align-items="center">
                    <mp-box margin-left="3">
                      <mp-text>1 Jan 2022 - 31 Des 2022</mp-text>
                    </mp-box>
                  </mp-flex>
                </template>
              </DescriptionList>
              <DescriptionList>
                <template #left-side>
                  <mp-text color="gray.600">Sisa hari aktif langganan</mp-text>
                </template>
                <template #right-side>
                  <mp-flex align-items="center">
                    <mp-box margin-left="3">
                      <mp-text>340 hari</mp-text>
                    </mp-box>
                  </mp-flex>
                </template>
              </DescriptionList>
              <DescriptionList>
                <template #left-side>
                  <mp-flex gap="2" align="center">
                    <mp-text color="gray.600">Total pembayaran</mp-text>
                    <mp-icon
                      name="info"
                      size="sm"
                      v-mp-tooltip="
                        'Total dari keseluruhan pembayaran paket utama dan fitur atau kuota tambahan.'
                      "
                    />
                  </mp-flex>
                </template>
                <template #right-side>
                  <mp-flex align-items="center">
                    <mp-box margin-left="3">
                      <mp-text>Rp9.910.968</mp-text>
                    </mp-box>
                  </mp-flex>
                </template>
              </DescriptionList>
              <DescriptionList>
                <template #left-side>
                  <mp-text color="gray.600">Kuota & fitur</mp-text>
                </template>
                <template #right-side>
                  <mp-flex align-items="center">
                    <mp-box margin-left="3">
                      <mp-button variant="link" @click="onModalToggle(true)"
                        >Lihat detail</mp-button
                      >
                    </mp-box>
                  </mp-flex>
                </template>
              </DescriptionList>
            </mp-box>
            <mp-box :width="['full', '50%']">
              <mp-heading as="h3" font-size="lg" margin-bottom="5">
                Informasi tagihan
              </mp-heading>
              <mp-box
                padding-x="4"
                padding-y="2"
                border="1px solid"
                border-color="gray.100"
                border-radius="md"
                background-color="gray.25"
              >
                <DescriptionList>
                  <template #left-side>
                    <mp-flex gap="2" align="center">
                      <mp-text color="gray.600">Tagihan selanjutnya</mp-text>
                      <mp-icon
                        name="info"
                        size="sm"
                        v-mp-tooltip="
                          'Tagihan pembayaran sebelum aktivasi pembaruan langganan selanjutnya.'
                        "
                      />
                    </mp-flex>
                  </template>
                  <template #right-side>
                    <mp-flex align-items="center">
                      <mp-box margin-left="3">
                        <mp-text><b>1 Des 2022</b></mp-text>
                      </mp-box>
                    </mp-flex>
                  </template>
                </DescriptionList>
                <DescriptionList>
                  <template #left-side>
                    <mp-flex gap="2" align="center">
                      <mp-text color="gray.600">Langganan selanjutnya</mp-text>
                      <mp-icon
                        name="info"
                        size="sm"
                        v-mp-tooltip="
                          'Pembaruan langganan selanjutnya setelah pembayaran.'
                        "
                      />
                    </mp-flex>
                  </template>
                  <template #right-side>
                    <mp-flex align-items="center">
                      <mp-box margin-left="3">
                        <mp-text><b>1 Des 2022</b></mp-text>
                      </mp-box>
                    </mp-flex>
                  </template>
                </DescriptionList>
                <DescriptionList>
                  <template #left-side>
                    <mp-text color="gray.600">Email penerima tagihan</mp-text>
                  </template>
                  <template #right-side>
                    <mp-flex align-items="center">
                      <mp-box margin-left="3">
                        <mp-text><b>accounting@centralperk.com</b></mp-text>
                      </mp-box>
                    </mp-flex>
                  </template>
                </DescriptionList>
                <DescriptionList>
                  <template #left-side>
                    <mp-button variant="link">Ubah informasi tagihan</mp-button>
                  </template>
                </DescriptionList>
              </mp-box>
            </mp-box>
          </mp-flex>

          <mp-divider margin-y="6" />

          <mp-flex gap="2" align="center" margin-bottom="5">
            <mp-heading as="h2" font-size="xl"> Daftar tagihan </mp-heading>
            <mp-icon
              name="info"
              size="sm"
              v-mp-tooltip="'Maksimum daftar tagihan dari 2 tahun yang lalu'"
            />
          </mp-flex>

          <mp-tabs
            :default-index="defaultIndex"
            @change="handleChange"
            :is-show-border="false"
          >
            <mp-tab-list>
              <mp-tab>
                Menunggu pembayaran
                <mp-badge ml="2" variant="solid"> 1 </mp-badge>
              </mp-tab>
              <mp-tab> Riwayat pembayaran </mp-tab>
            </mp-tab-list>
            <mp-tab-panels>
              <mp-tab-panel>
                <DetailTagihanTabA />
              </mp-tab-panel>
              <mp-tab-panel>
                <DetailTagihanTabB />
              </mp-tab-panel>
            </mp-tab-panels>
          </mp-tabs>
        </mp-box>
      </mp-box>
    </mp-flex>

    <detail-tagihan-kuota-fitur-modal
      :isModalOpen="isModalOpen"
      :onModalToggle="onModalToggle"
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
  MpDivider,
  MpIcon,
  MpTabs,
  MpTabList,
  MpTab,
  MpTabPanels,
  MpTabPanel,
} from "@mekari/pixel";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import DescriptionList from "../components/DescriptionList";
import DetailTagihanTabA from "./DetailTagihanTabA";
import DetailTagihanTabB from "./DetailTagihanTabB";
import DetailTagihanKuotaFiturModal from "./DetailTagihanKuotaFiturModal";

export default {
  name: "DetailTagihan",
  components: {
    MpBox,
    MpFlex,
    MpHeading,
    MpText,
    MpButton,
    MpBadge,
    MpDivider,
    MpIcon,
    MpTabs,
    MpTabList,
    MpTab,
    MpTabPanels,
    MpTabPanel,
    Header,
    Sidebar,
    DescriptionList,
    DetailTagihanTabA,
    DetailTagihanTabB,
    DetailTagihanKuotaFiturModal,
  },
  data() {
    return {
      tabs: ["menunggu-pembayaran", "riwayat-pembayaran"],
      defaultIndex: 0,
      currentTab: null,
      isModalOpen: false,
    };
  },
  mounted() {
    this.handleChange(this.defaultIndex);
  },
  methods: {
    handleChange(e) {
      this.currentTab = this.tabs[e];
    },
    onModalToggle: function (data) {
      this.isModalOpen = data;
    },
  },
};
</script>