<template>
  <mp-box position="relative">
    <Header />

    <mp-flex as="main" max-height="calc(100vh - 60px)">
      <Sidebar is-custom default-is-toggle />

      <mp-box
        as="section"
        data-id="content"
        width="100%"
        height="calc(100vh - 60px)"
        overflow-y="auto"
        background-color="#F3F7FC"
        :margin-left="['0', '60px']"
        position="relative"
      >
        <SubHeader />
        <mp-box
          min-height="calc(100vh - 132px)"
          border-top-width="1px"
          border-left-width="1px"
          rounded-top-left="md"
          background-color="white"
          padding="6"
        >
          <mp-banner mb="6" v-if="showExportBanner">
            <mp-banner-icon name="info" color="blue.400" />
            <mp-banner-description display="flex" align-items="center">
              The report is in progress. Download the report on the Import &
              Export List page or by email.
              <mp-text is-link ml="1">View page</mp-text>
            </mp-banner-description>
            <mp-banner-close-button
              :isInline="false"
              @click.native="showExportBanner = false"
            />
          </mp-banner>

          <mp-flex justify="space-between" align-items="flex-end">
            <mp-flex gap="4" align-items="flex-end">
              <mp-form-control control-id="start-date">
                <mp-form-label>Tanggal awal</mp-form-label>
                <mp-date-picker
                  v-model="filter.startDate"
                  format="DD/MM/YYYY"
                />
              </mp-form-control>

              <mp-form-control control-id="end-date">
                <mp-form-label>Tanggal akhir</mp-form-label>
                <mp-date-picker v-model="filter.endDate" format="DD/MM/YYYY" />
              </mp-form-control>

              <mp-form-control control-id="filter-sesuai-periode">
                <mp-form-label>Periode</mp-form-label>
                <mp-autocomplete
                  is-clearable
                  is-searchable
                  :data="['Custom', 'Hari ini', 'Minggu ini', 'Bulan ini']"
                  max-width="40"
                  :content-style="{ width: '40' }"
                  :value="filter.period"
                  @change="(value) => (filter.period = value)"
                />
              </mp-form-control>

              <mp-button @click="handleSubmit"> Tampilkan </mp-button>
              <mp-button
                variant="outline"
                @click="isOpenDrawerMoreFilter = true"
              >
                <mp-icon name="filter" variant="duotone" size="sm" mr="2" />
                Filter
              </mp-button>
            </mp-flex>

            <mp-flex gap="3">
              <mp-popover>
                <mp-popover-trigger>
                  <mp-button variant="outline">
                    <mp-icon
                      name="settings"
                      variant="duotone"
                      size="sm"
                      mr="2"
                    />
                    Template
                  </mp-button>
                </mp-popover-trigger>

                <mp-popover-content
                  v-slot="{ closePopover }"
                  bg="white"
                  rounded="md"
                  shadow="lg"
                  border-width="1px"
                  border-color="gray.400"
                  z-index="popover"
                  max-width="64"
                >
                  <mp-popover-list>
                    <mp-popover-list-item role="group">
                      Sales invoice

                      <mp-icon
                        v-mp-tooltip="'Edit'"
                        name="edit"
                        size="sm"
                        display="none"
                        :_groupHover="{
                          display: 'unset',
                        }"
                        @click.native="
                          [closePopover(), $router.push('/custom-template')]
                        "
                      />
                    </mp-popover-list-item>
                    <mp-popover-list-item role="group">
                      Sales invoice details

                      <mp-icon
                        v-mp-tooltip="'Edit'"
                        name="edit"
                        size="sm"
                        display="none"
                        :_groupHover="{
                          display: 'unset',
                        }"
                        @click.native="
                          [closePopover(), $router.push('/custom-template')]
                        "
                      />
                    </mp-popover-list-item>
                    <mp-popover-list-item role="group">
                      Custom template

                      <mp-icon
                        v-mp-tooltip="'Edit'"
                        name="edit"
                        size="sm"
                        display="none"
                        :_groupHover="{
                          display: 'unset',
                        }"
                        @click.native="
                          [closePopover(), $router.push('/custom-template')]
                        "
                      />
                    </mp-popover-list-item>

                    <mp-button
                      variant="unstyled"
                      width="full"
                      text-align="center"
                      rounded-top="0"
                      border-top="1px"
                      border-color="blue.50"
                      color="blue.400"
                      font-weight="semibold"
                      :_hover="{ color: 'blue.500' }"
                      mb="-1"
                      @click="
                        [closePopover(), $router.push('/custom-template')]
                      "
                    >
                      Buat template
                    </mp-button>
                  </mp-popover-list>
                </mp-popover-content>
              </mp-popover>

              <mp-popover>
                <mp-popover-trigger>
                  <mp-button
                    variant="outline"
                    right-icon="caret-down"
                    :isLoading="isExportLoading"
                  >
                    Ekspor
                  </mp-button>
                </mp-popover-trigger>

                <mp-popover-content
                  bg="white"
                  rounded="md"
                  shadow="lg"
                  border-width="1px"
                  border-color="gray.400"
                  z-index="popover"
                  v-bind="{ maxWidth: '110px' }"
                >
                  <mp-popover-list>
                    <mp-popover-list-item @click="handleExportReport('PDF')"
                      >PDF</mp-popover-list-item
                    >
                    <mp-popover-list-item @click="handleExportReport('Excel')">
                      Excel
                    </mp-popover-list-item>
                    <mp-popover-list-item @click="handleExportReport('CSV')">
                      CSV
                    </mp-popover-list-item>
                  </mp-popover-list>
                </mp-popover-content>
              </mp-popover>
            </mp-flex>
          </mp-flex>

          <mp-flex
            v-if="isLoading"
            direction="column"
            align-items="center"
            justify-content="center"
            pt="12"
          >
            <mp-spinner />
            <mp-text font-weight="semibold" mt="3">Memuat transaksi</mp-text>
            <mp-text color="gray.600">
              Proses ini membutuhkan waktu. Anda dapat langsung mengunduh
              laporan dengan klik tombol Export
            </mp-text>
          </mp-flex>

          <mp-box mt="8" v-if="showTable && !isLoading">
            <TableSalesReport />
          </mp-box>

          <mp-box v-if="!showTable && !isLoading && !isDataNotFound" pt="12">
            <EmptyState type="no-data" title="Laporan akan muncul disini">
              <mp-text font-size="sm" color="gray.600" text-align="center"
                >Pilih tanggal atau periode, lalu klik tombol Tampilkan</mp-text
              >
            </EmptyState>
          </mp-box>

          <mp-box pt="12" v-if="!showTable && !isLoading && isDataNotFound">
            <EmptyState
              type="data-not-found"
              title="Data laporan tidak ditemukan"
              description="Cek kembali tanggal, periode, atau filter."
            />
          </mp-box>

          <mp-drawer
            :is-open="isOpenDrawerMoreFilter"
            :on-close="() => (isOpenDrawerMoreFilter = false)"
            size="md"
          >
            <mp-drawer-overlay />
            <mp-drawer-content>
              <mp-drawer-header>Filter laporan</mp-drawer-header>
              <mp-drawer-close-button @click="isOpenDrawerMoreFilter = false" />
              <mp-drawer-body>
                <mp-stack spacing="5">
                  <mp-flex gap="3" align-items="end">
                    <mp-form-control control-id="drawer-start-date">
                      <mp-form-label>Tanggal awal</mp-form-label>
                      <mp-date-picker
                        v-model="filter.startDate"
                        format="DD/MM/YYYY"
                      />
                    </mp-form-control>

                    <mp-box pb="3">
                      <mp-text> - </mp-text>
                    </mp-box>

                    <mp-form-control control-id="drawer-end-date">
                      <mp-form-label>Tanggal akhir</mp-form-label>
                      <mp-date-picker
                        v-model="filter.endDate"
                        format="DD/MM/YYYY"
                      />
                    </mp-form-control>
                  </mp-flex>

                  <mp-form-control control-id="drawer-filter-sesuai-periode">
                    <mp-form-label>Periode</mp-form-label>
                    <mp-autocomplete
                      is-clearable
                      is-searchable
                      :data="[
                        'Custom',
                        'Hari ini',
                        'Minggu ini',
                        'Bulan ini',
                        'Tahun ini',
                        'Kemarin',
                        'Minggu lalu',
                        'Bulan lalu',
                        'Tahun lalu',
                      ]"
                      :content-style="{ width: 'full' }"
                      :value="filter.period"
                      @change="(value) => (filter.period = value)"
                    />
                  </mp-form-control>

                  <mp-form-control>
                    <mp-form-label>Tipe transaksi</mp-form-label>
                    <mp-autocomplete
                      is-clearable
                      is-searchable
                      :data="[
                        'Faktur penjualan',
                        'Pemesanan penjualan',
                        'Penawaran penjualan',
                        'Pembayaran pesanan penjualan',
                        'Terima pembayaran',
                        'Retur penjualan',
                        'Pelunasan faktur penjualan',
                      ]"
                      :content-style="{ width: 'full' }"
                      :value="filter.transaction_type"
                      @change="(value) => (filter.transaction_type = value)"
                    />
                  </mp-form-control>

                  <mp-form-control>
                    <mp-form-label>Urutkan transaksi</mp-form-label>

                    <mp-autocomplete
                      is-clearable
                      is-searchable
                      :data="['Tanggal transaksi', 'Tanggal jatuh tempo']"
                      :content-style="{ width: 'full' }"
                      :value="filter.sort_by"
                      @change="(value) => (filter.sort_by = value)"
                    />
                  </mp-form-control>

                  <mp-form-control control-id="drawer-customer">
                    <mp-box mb="1">
                      <mp-form-label>Pelanggan</mp-form-label>
                      <mp-radio-group
                        name="transaction_sort_by"
                        spacing="6"
                        is-inline
                      >
                        <mp-radio value="individual"> Individual </mp-radio>
                        <mp-radio value="group"> Group </mp-radio>
                      </mp-radio-group>
                    </mp-box>
                    <mp-input-tag
                      id="input-tag-customer"
                      placeholder="Select tag"
                      :enable-create-new-tag="false"
                      :suggestions="[
                        'Jaka Permadi',
                        'Arga Kusuma',
                        'Barry Allen',
                        'Christine Hartono',
                        'Edward Wongko',
                        'Fitzgerald',
                      ]"
                      :is-show-suggestions="true"
                      :is-show-icon-chevron-down="true"
                      :content-style="{ width: '48' }"
                      :trigger-style="{ maxHeight: '24', overflowY: 'auto' }"
                      :data="filter.customer"
                      @change="(value) => (filter.customer = value)"
                      :contentStyle="{ maxWidth: 'full' }"
                    />
                  </mp-form-control>

                  <mp-form-control>
                    <mp-form-label>Status</mp-form-label>

                    <mp-autocomplete
                      is-clearable
                      is-searchable
                      :data="[
                        'Semua',
                        'Belum dibayar',
                        'Dibayar sebagian',
                        'Lunas',
                        'Lewat jatuh tempo',
                        'Selesai',
                      ]"
                      :content-style="{ width: 'full' }"
                      :value="filter.status"
                      @change="(value) => (filter.status = value)"
                    />
                  </mp-form-control>

                  <mp-box>
                    <mp-form-control control-id="drawer-tags">
                      <mp-form-label>Grup dengan tag </mp-form-label>
                      <mp-input-tag
                        id="input-tag-tags"
                        placeholder="Select tag"
                        :enable-create-new-tag="true"
                        :suggestions="['Bengalore', 'Bengkulu', 'Budapest']"
                        :is-show-suggestions="true"
                        :is-show-icon-chevron-down="true"
                        :content-style="{ width: '48' }"
                        :trigger-style="{ maxHeight: '24', overflowY: 'auto' }"
                        :data="filter.tag"
                        @change="(value) => (filter.tag = value)"
                        :contentStyle="{ maxWidth: 'full' }"
                      />
                    </mp-form-control>

                    <mp-form-control control-id="drawer-radio" mt="3">
                      <mp-radio-group
                        name="radio"
                        spacing="6"
                        is-inline
                        :value="filter.radio"
                        @change="(value) => (filter.radio = value)"
                      >
                        <mp-radio id="all-tags" value="all-tags">
                          Mencakup semua
                        </mp-radio>
                        <mp-radio id="partial" value="partial">
                          Salah satu
                        </mp-radio>
                      </mp-radio-group>
                    </mp-form-control>
                  </mp-box>
                </mp-stack>
              </mp-drawer-body>
              <mp-drawer-footer justify-content="space-between">
                <mp-flex>
                  <mp-icon name="undo" variant="duotone" mr="1" />
                  <mp-text is-link text-decoration="underline"
                    >Atur ulang</mp-text
                  >
                </mp-flex>

                <mp-flex>
                  <mp-button
                    variant="ghost"
                    mr="3"
                    @click="isOpenDrawerMoreFilter = false"
                  >
                    Batal
                  </mp-button>
                  <mp-button @click="handleApplyFilter">Filter</mp-button>
                </mp-flex>
              </mp-drawer-footer>
            </mp-drawer-content>
          </mp-drawer>
        </mp-box>
      </mp-box>
    </mp-flex>
  </mp-box>
</template>

<script>
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import {
  MpBox,
  MpFlex,
  MpFormControl,
  MpFormLabel,
  MpDatePicker,
  MpAutocomplete,
  MpInputTag,
  MpButton,
  MpText,
  MpSpinner,
  MpDrawer,
  MpDrawerOverlay,
  MpDrawerContent,
  MpDrawerCloseButton,
  MpDrawerHeader,
  MpDrawerBody,
  MpDrawerFooter,
  MpRadio,
  MpRadioGroup,
  MpStack,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
  MpBanner,
  MpBannerIcon,
  MpBannerDescription,
  MpBannerCloseButton,
  MpIcon,
} from "@mekari/pixel";
import SubHeader from "./SubHeader.vue";
import EmptyState from "./parts/EmptyState.vue";
import TableSalesReport from "./parts/TableSalesReport.vue";

export default {
  name: "SalesReportView",
  components: {
    Header,
    Sidebar,
    SubHeader,
    EmptyState,
    MpBox,
    MpFlex,
    MpFormControl,
    MpFormLabel,
    MpDatePicker,
    MpAutocomplete,
    MpInputTag,
    MpButton,
    MpText,
    MpSpinner,
    MpDrawer,
    MpDrawerOverlay,
    MpDrawerContent,
    MpDrawerCloseButton,
    MpDrawerHeader,
    MpDrawerBody,
    MpDrawerFooter,
    MpRadio,
    MpRadioGroup,
    MpStack,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
    MpBanner,
    MpBannerIcon,
    MpBannerDescription,
    MpBannerCloseButton,
    MpIcon,
    TableSalesReport,
  },
  data() {
    return {
      filter: {
        startDate: new Date(),
        endDate: new Date(),
        period: "Hari ini",
        transaction_type: "Faktur penjualan",
        sort_by: "Tanggal transaksi",
        customer: "",
        status: "",
        tags: "",
        radio: "all-tags",
      },
      isLoading: false,
      showTable: true,
      isDataNotFound: false,
      isOpenDrawerMoreFilter: false,

      // Export
      showExportBanner: false,
      isExportLoading: false,
      exportComponentKey: 0,
    };
  },
  methods: {
    handleApplyFilter() {
      this.isOpenDrawerMoreFilter = false;
      this.handleSubmit();
    },
    handleSubmit() {
      this.isLoading = true;

      setTimeout(() => {
        console.log(this.period);
        if (this.filter.period === "Hari ini") this.showTable = true;
        if (this.filter.period === "Minggu ini") this.isDataNotFound = true;

        this.isLoading = false;
      }, 500);
    },
    handleExportReport() {
      this.exportComponentKey += 1;
      this.isExportLoading = true;

      setTimeout(() => {
        this.showExportBanner = true;
        this.isExportLoading = false;
      }, 500);
    },
  },
};
</script>
