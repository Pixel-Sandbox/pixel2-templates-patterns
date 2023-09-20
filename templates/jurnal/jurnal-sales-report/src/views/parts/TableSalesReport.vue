<template>
  <mp-box>
    <mp-table-container overflow="auto" max-height="500px">
      <mp-table :is-hoverable="false">
        <mp-table-head is-fixed :style="{ background: '#EDF0F2' }">
          <mp-table-row>
            <mp-table-cell as="th" scope="col"> Tanggal </mp-table-cell>
            <mp-table-cell as="th" scope="col"> Tipe transaksi </mp-table-cell>
            <mp-table-cell as="th" scope="col"> Nomor transaksi </mp-table-cell>
            <mp-table-cell as="th" scope="col"> Pelanggan </mp-table-cell>
            <mp-table-cell as="th" scope="col">
              Perusahaan pelanggan
            </mp-table-cell>
            <mp-table-cell as="th" scope="col"> Email </mp-table-cell>
            <mp-table-cell as="th" scope="col">
              Alamat penagihan
            </mp-table-cell>
            <mp-table-cell as="th" scope="col">
              Alamat pengiriman
            </mp-table-cell>
            <mp-table-cell as="th" scope="col">
              No pajak pelanggan
            </mp-table-cell>
            <mp-table-cell as="th" scope="col"> No ponsel </mp-table-cell>
            <mp-table-cell as="th" scope="col"> Tgl jatuh tempo </mp-table-cell>
            <mp-table-cell as="th" scope="col">
              No Ref Pelanggan
            </mp-table-cell>
            <mp-table-cell as="th" scope="col"> Tag </mp-table-cell>
            <mp-table-cell as="th" scope="col"> Gudang </mp-table-cell>
            <mp-table-cell as="th" scope="col"> Kode produk </mp-table-cell>
            <mp-table-cell as="th" scope="col" min-width="200px">
              Nama produk
            </mp-table-cell>
            <mp-table-cell as="th" scope="col"> Deskripsi </mp-table-cell>
            <mp-table-cell as="th" scope="col"> Kuantitas </mp-table-cell>
            <mp-table-cell as="th" scope="col"> Satuan </mp-table-cell>
            <mp-table-cell as="th" scope="col" text-align="right">
              Harga per unit
            </mp-table-cell>
            <mp-table-cell as="th" scope="col">
              Diskon per baris %
            </mp-table-cell>
            <mp-table-cell as="th" scope="col" text-align="right">
              Jumlah perbaris
            </mp-table-cell>
            <mp-table-cell as="th" scope="col" text-align="right">
              Tarif pajak %
            </mp-table-cell>
            <mp-table-cell as="th" scope="col" text-align="right">
              Jumlah pajak
            </mp-table-cell>
            <mp-table-cell as="th" scope="col" text-align="right">
              Jumlah kena pajak perbaris
            </mp-table-cell>
            <mp-table-cell as="th" scope="col"> Diskon % </mp-table-cell>
            <mp-table-cell as="th" scope="col" text-align="right">
              Diskon
            </mp-table-cell>
            <mp-table-cell as="th" scope="col" text-align="right">
              Biaya pengiriman
            </mp-table-cell>
            <mp-table-cell as="th" scope="col" min-width="140px">
              Pesan
            </mp-table-cell>
            <mp-table-cell as="th" scope="col" text-align="right">
              Jumlah pemotongan
            </mp-table-cell>
            <mp-table-cell as="th" scope="col"> Memo </mp-table-cell>
            <mp-table-cell as="th" scope="col"> Akun setoran </mp-table-cell>
            <mp-table-cell as="th" scope="col"> Status hari ini </mp-table-cell>
            <mp-table-cell as="th" scope="col" text-align="right">
              Total
            </mp-table-cell>
            <mp-table-cell as="th" scope="col"> Mata uang </mp-table-cell>
          </mp-table-row>
        </mp-table-head>

        <mp-table-body class="halo">
          <mp-table-row v-for="index in 20" :key="index">
            <mp-table-cell as="td" scope="row" vertical-align="top">
              <mp-box width="107px">
                <mp-text> 01/02/2023 </mp-text>
              </mp-box>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row" vertical-align="top">
              <mp-box width="134px">
                <mp-text> Pesanan penjualan </mp-text>
              </mp-box>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row" vertical-align="top">
              <mp-box min-width="140px" max-width="300px">
                <mp-text is-link> MKR/SI/20238434 </mp-text>
              </mp-box>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row" vertical-align="top">
              <mp-box min-width="140px" max-width="400px">
                <mp-text is-link> Alka Sticker </mp-text>
              </mp-box>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row" vertical-align="top">
              <mp-box min-width="140px" max-width="400px">
                <mp-text> PT Lengket Selalu </mp-text>
              </mp-box>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row" vertical-align="top">
              <mp-box min-width="140px" max-width="400px">
                <mp-text> alka.sticker@email.com </mp-text>
              </mp-box>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row" vertical-align="top">
              <mp-box min-width="140px" max-width="400px">
                <mp-text> Jalan jambu XI no 143 Jakarta selatan </mp-text>
              </mp-box>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row" vertical-align="top">
              <mp-box min-width="140px" max-width="400px">
                <mp-text> Jalan jambu XI no 143 Jakarta selatan </mp-text>
              </mp-box>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row" vertical-align="top">
              <mp-box min-width="140px" max-width="400px">
                <mp-text> 73.4324.545.2.345 </mp-text>
              </mp-box>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row" vertical-align="top">
              <mp-box min-width="140px" max-width="400px">
                <mp-text> 081234567890 Description </mp-text>
              </mp-box>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row" vertical-align="top">
              <mp-text> 21/09/2023 </mp-text>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row" vertical-align="top">
              <mp-box min-width="140px" max-width="400px">
                <mp-text> 4568990-1 </mp-text>
              </mp-box>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row" vertical-align="top">
              <mp-box
                display="flex"
                gap="2"
                flex-wrap="wrap"
                min-width="140px"
                max-width="400px"
              >
                <mp-tag size="sm"> Jakarta </mp-tag>
                <mp-tag size="sm"> Sales </mp-tag>
                <mp-tag size="sm"> Joyce </mp-tag>
                <mp-tag size="sm"> Close </mp-tag>
              </mp-box>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row" vertical-align="top">
              <mp-box min-width="140px" max-width="400px">
                <mp-text is-link> Jakarta Selatan </mp-text>
              </mp-box>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row" vertical-align="top">
              <mp-box min-width="140px" max-width="400px">
                <mp-text is-link> KR-9347-2 </mp-text>
              </mp-box>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row" vertical-align="top">
              <mp-box min-width="140px" max-width="400px">
                <mp-text is-link> Macbook Pro 21” </mp-text>
              </mp-box>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row" vertical-align="top">
              <mp-box min-width="140px" max-width="400px">
                <mp-text> RAM 16 GB dan SSD 2 TB </mp-text>
              </mp-box>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row" vertical-align="top">
              <mp-text> 1</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row" vertical-align="top">
              <mp-text> Pcs </mp-text>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row" vertical-align="top">
              <mp-text text-align="right"> Rp19.499.000,00 </mp-text>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row" vertical-align="top">
              <mp-box min-width="140px" max-width="400px">
                <mp-text> 10.0%</mp-text>
              </mp-box>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row" vertical-align="top">
              <mp-text text-align="right"> 1.949.900,00 </mp-text>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row" vertical-align="top">
              <mp-text> 11.0% </mp-text>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row" vertical-align="top">
              <mp-text text-align="right"> 2.000.000,00 </mp-text>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row" vertical-align="top">
              <mp-text text-align="right"> 10.000.000,00</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row" vertical-align="top">
              <mp-box min-width="140px" max-width="400px">
                <mp-text> 0%</mp-text>
              </mp-box>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row" vertical-align="top">
              <mp-text text-align="right"> 50.000,00</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row" vertical-align="top">
              <mp-text text-align="right"> 100.000,00</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row" vertical-align="top">
              <mp-box min-width="140px" max-width="400px">
                <mp-text>
                  Pengujian dilakukan oleh Apple pada bulan Oktober
                  2023</mp-text
                >
              </mp-box>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row" vertical-align="top">
              <mp-text text-align="right"> 50.000,00</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row" vertical-align="top">
              <mp-box min-width="140px" max-width="400px">
                <mp-text> Lihat apple.com untuk informasi selengkapnya</mp-text>
              </mp-box>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row" vertical-align="top">
              <mp-box min-width="140px" max-width="400px">
                <mp-text> (1-100) Akun Kas</mp-text>
              </mp-box>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row" vertical-align="top">
              <mp-text> Lunas</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row" vertical-align="top">
              <mp-text text-align="right"> 21.000.000,00</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td" scope="row" vertical-align="top">
              <mp-text> IDR </mp-text>
            </mp-table-cell>
          </mp-table-row>

          <mp-table-row>
            <mp-table-cell
              as="td"
              scope="row"
              border-top-width="1px"
              border-bottom-width="1px"
              border-color="black"
              colspan="23"
            >
              <mp-text font-weight="semibold"> Total </mp-text>
            </mp-table-cell>
            <mp-table-cell
              as="td"
              scope="row"
              border-top-width="1px"
              border-bottom-width="1px"
              border-color="black"
            >
              <mp-text text-align="right" font-weight="semibold">
                Rp2.000.000,00
              </mp-text>
            </mp-table-cell>
            <mp-table-cell
              as="td"
              scope="row"
              border-top-width="1px"
              border-bottom-width="1px"
              border-color="black"
            >
              <mp-text text-align="right" font-weight="semibold">
                Rp10.000.000,00
              </mp-text>
            </mp-table-cell>
            <mp-table-cell
              as="td"
              scope="row"
              border-top-width="1px"
              border-bottom-width="1px"
              border-color="black"
              colspan="3"
            >
              <mp-text text-align="right" font-weight="semibold">
                Rp100.000,00
              </mp-text>
            </mp-table-cell>
            <mp-table-cell
              as="td"
              scope="row"
              border-top-width="1px"
              border-bottom-width="1px"
              border-color="black"
              colspan="2"
            >
              <mp-text text-align="right" font-weight="semibold">
                Rp50.000,00
              </mp-text>
            </mp-table-cell>
            <mp-table-cell
              as="td"
              scope="row"
              border-top-width="1px"
              border-bottom-width="1px"
              border-color="black"
              colspan="4"
            >
              <mp-text text-align="right" font-weight="semibold">
                Rp21.000.000,00
              </mp-text>
            </mp-table-cell>
            <mp-table-cell
              as="td"
              scope="row"
              border-top-width="1px"
              border-bottom-width="1px"
              border-color="black"
            >
            </mp-table-cell>
          </mp-table-row>
        </mp-table-body>
      </mp-table>
    </mp-table-container>

    <TablePagination />
  </mp-box>
</template>

<script>
import {
  MpTableContainer,
  MpTable,
  MpTableHead,
  MpTableBody,
  MpTableRow,
  MpTableCell,
  MpBox,
  MpText,
  MpTag,
} from "@mekari/pixel";
import TablePagination from "./TablePagination.vue";

export default {
  name: "TableFakturPenjualan",
  components: {
    MpTableContainer,
    MpTable,
    MpTableHead,
    MpTableBody,
    MpTableRow,
    MpTableCell,
    MpBox,
    MpText,
    MpTag,
    TablePagination,
  },
};
</script>

<style>
tbody > tr {
  white-space: normal !important;
}

table tr:nth-last-child(2) td {
  border-bottom-width: 0px;
}
</style>
