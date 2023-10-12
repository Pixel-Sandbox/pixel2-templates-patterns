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
        <mp-flex
          as="header"
          justify="space-between"
          align-items="center"
          padding-x="6"
          padding-y="1.063rem"
        >
          <mp-flex align-items="flex-end">
            <mp-heading as="h1" font-size="2xl" font-weight="bold">
              Buat template laporan
            </mp-heading>
          </mp-flex>
        </mp-flex>
        <mp-box
          min-height="calc(100vh - 132px)"
          border-top-width="1px"
          border-left-width="1px"
          rounded-top-left="md"
          background-color="white"
          padding="6"
        >
          <mp-text font-weight="semibold">
            Atur template laporan sesuai kebutuhan perusahaan Anda
          </mp-text>

          <mp-flex
            :flex-direction="{ base: 'column', md: 'row' }"
            gap="6"
            mt="3"
          >
            <mp-form-control :width="{ base: 'full', md: '240px' }">
              <mp-form-label> Nama template </mp-form-label>
              <mp-input />
            </mp-form-control>

            <mp-form-control :width="{ base: 'full', md: '240px' }">
              <mp-form-label> Tipe transaksi </mp-form-label>
              <mp-autocomplete
                :data="['Faktur penjualan']"
                :content-style="{
                  width: 'full',
                }"
              />
            </mp-form-control>

            <mp-flex align-items="end" pb="2">
              <mp-checkbox> Atur template sebagai default </mp-checkbox>
            </mp-flex>
          </mp-flex>

          <mp-divider border-style="dashed" my="5" />

          <mp-text mb="5">
            Pilih kolom tabel dari daftar kolom tersedia ke daftar yg
            ditampilkan di laporan
          </mp-text>

          <mp-box>
            <mp-flex mt="6" gap="6" overflow-x="auto">
              <mp-box
                border-width="1px"
                rounded="md"
                min-width="350px"
                width="full"
              >
                <mp-box>
                  <mp-box
                    px="2"
                    py="4"
                    bg="gray.25"
                    rounded-top="md"
                    border-bottom-width="1px"
                  >
                    <mp-checkbox>Daftar kolom tersedia</mp-checkbox>
                  </mp-box>

                  <mp-box
                    as="ul"
                    list-style-type="none"
                    height="550px"
                    overflow-y="auto"
                  >
                    <mp-box as="li" px="2" py="4" border-bottom-width="1px">
                      <mp-checkbox>Jumlah kena pajak</mp-checkbox>
                    </mp-box>

                    <mp-box as="li" px="2" py="4" border-bottom-width="1px">
                      <mp-checkbox>Total Pajak</mp-checkbox>
                    </mp-box>

                    <mp-box as="li" px="2" py="4" border-bottom-width="1px">
                      <mp-checkbox>Email</mp-checkbox>
                    </mp-box>

                    <mp-box as="li" px="2" py="4" border-bottom-width="1px">
                      <mp-checkbox>Alamat Penagihan</mp-checkbox>
                    </mp-box>

                    <mp-box as="li" px="2" py="4" border-bottom-width="1px">
                      <mp-checkbox>Alamat Pengiriman</mp-checkbox>
                    </mp-box>

                    <mp-box as="li" px="2" py="4" border-bottom-width="1px">
                      <mp-checkbox>Nama produk</mp-checkbox>
                    </mp-box>

                    <mp-box as="li" px="2" py="4" border-bottom-width="1px">
                      <mp-checkbox>Gudang</mp-checkbox>
                    </mp-box>

                    <mp-box as="li" px="2" py="4" border-bottom-width="1px">
                      <mp-checkbox>Deskripsi</mp-checkbox>
                    </mp-box>

                    <mp-box as="li" px="2" py="4" border-bottom-width="1px">
                      <mp-checkbox>Memo</mp-checkbox>
                    </mp-box>

                    <mp-box as="li" px="2" py="4">
                      <mp-checkbox>Kuantitas</mp-checkbox>
                    </mp-box>
                  </mp-box>
                </mp-box>
              </mp-box>

              <mp-box
                display="flex"
                flex="none"
                :width="{ base: '70px', md: '70px' }"
                flex-direction="column"
                align-items="center"
                justify-content="center"
              >
                <mp-button variant="outline" width="full" mb="6">
                  <mp-icon name="arrows-right" />
                </mp-button>

                <mp-button variant="outline" width="full">
                  <mp-icon name="arrows-left" />
                </mp-button>
              </mp-box>

              <mp-box min-width="350px" width="full">
                <mp-box border-width="1px" rounded="md">
                  <mp-box list-style-type="none">
                    <mp-box
                      px="2"
                      py="4"
                      bg="gray.25"
                      rounded-top="md"
                      border-bottom-width="1px"
                    >
                      <mp-flex
                        justify-content="space-between"
                        align-items="center"
                      >
                        <mp-checkbox
                          >Daftar kolom untuk ditampilkan di
                          laporan</mp-checkbox
                        >

                        <mp-flex gap="1">
                          <mp-button variant="outline">
                            <mp-icon name="chevrons-up" />
                          </mp-button>
                          <mp-button variant="outline">
                            <mp-icon name="chevrons-down" />
                          </mp-button>
                        </mp-flex>
                      </mp-flex>
                    </mp-box>

                    <mp-box
                      as="ul"
                      list-style-type="none"
                      height="550px"
                      overflow-y="auto"
                    >
                      <mp-box as="li" px="2" py="4" border-bottom-width="1px">
                        <mp-checkbox>Tanggal</mp-checkbox>
                      </mp-box>

                      <mp-box as="li" px="2" py="4" border-bottom-width="1px">
                        <mp-checkbox>Tipe Transaksi</mp-checkbox>
                      </mp-box>

                      <mp-box as="li" px="2" py="4" border-bottom-width="1px">
                        <mp-checkbox>Nomor Transaksi</mp-checkbox>
                      </mp-box>

                      <mp-box as="li" px="2" py="4" border-bottom-width="1px">
                        <mp-checkbox>Nama Panggilan Pelanggan</mp-checkbox>
                      </mp-box>

                      <mp-box as="li" px="2" py="4" border-bottom-width="1px">
                        <mp-checkbox>Status Hari Ini</mp-checkbox>
                      </mp-box>

                      <mp-box as="li" px="2" py="4" border-bottom-width="1px">
                        <mp-checkbox>Total</mp-checkbox>
                      </mp-box>

                      <mp-box as="li" px="2" py="4" border-bottom-width="1px">
                        <mp-checkbox>Sisa Tagihan</mp-checkbox>
                      </mp-box>

                      <mp-box as="li" px="2" py="4" border-bottom-width="1px">
                        <mp-checkbox>Tanggal jatuh tempo</mp-checkbox>
                      </mp-box>

                      <mp-box as="li" px="2" py="4">
                        <mp-checkbox>Pembayaran</mp-checkbox>
                      </mp-box>
                    </mp-box>
                  </mp-box>
                </mp-box>

                <mp-text color="gray.600" mt="2"
                  >Kolom tabel dengan warna tulisan abu-abu tidak akan
                  disimpan</mp-text
                >
              </mp-box>
            </mp-flex>
          </mp-box>

          <mp-flex justify-content="flex-end" mt="6">
            <mp-flex gap="2">
              <mp-button variant="outline" @click="handleCancel">
                Cancel
              </mp-button>
              <mp-button @click="handleSave"> Save </mp-button>
            </mp-flex>
          </mp-flex>
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
  MpHeading,
  MpText,
  MpFormControl,
  MpFormLabel,
  MpInput,
  MpAutocomplete,
  MpCheckbox,
  MpDivider,
  MpButton,
  MpIcon,
} from "@mekari/pixel";

export default {
  name: "CustomTemplateView",
  components: {
    Header,
    Sidebar,
    MpBox,
    MpFlex,
    MpHeading,
    MpText,
    MpFormControl,
    MpFormLabel,
    MpInput,
    MpAutocomplete,
    MpCheckbox,
    MpDivider,
    MpButton,
    MpIcon,
  },
  methods: {
    handleSave() {
      this.$toast({
        id: "test",
        variant: "success",
        title: "Template berhasil disimpan",
        position: "top",
        zIndex: 9999, // Custom zIndex
      });

      this.$router.push("/");
    },
    handleCancel() {
      this.$router.push("/");
    },
  },
};
</script>
