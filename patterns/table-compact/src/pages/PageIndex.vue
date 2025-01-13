<template>
  <mp-box p="4">
    <mp-table-container>
      <mp-table-lite :is-hoverable="false">
        <mp-table-head-lite>
          <mp-table-row-lite border-top-width="1px">
            <mp-table-cell-lite
              as="th"
              scope="col"
              rowspan="2"
              height="auto"
              py="1"
              px="1"
            >
              Daftar akun
            </mp-table-cell-lite>
            <mp-table-cell-lite
              as="th"
              scope="col"
              colspan="2"
              height="auto"
              py="1"
              px="1"
              border-left-width="1px"
              text-align="center"
            >
              Saldo Awal
            </mp-table-cell-lite>
            <mp-table-cell-lite
              as="th"
              scope="col"
              colspan="2"
              height="auto"
              py="1"
              px="1"
              border-left-width="1px"
              text-align="center"
            >
              Pergerakan
            </mp-table-cell-lite>
            <mp-table-cell-lite
              as="th"
              scope="col"
              colspan="2"
              height="auto"
              py="1"
              px="1"
              border-left-width="1px"
              text-align="center"
            >
              Saldo Akhir
            </mp-table-cell-lite>
          </mp-table-row-lite>

          <mp-table-row-lite ref="subTableHeader">
            <mp-table-cell-lite
              as="th"
              scope="col"
              height="auto"
              py="1"
              px="1"
              border-left-width="1px"
              text-align="center"
            >
              Debit
            </mp-table-cell-lite>
            <mp-table-cell-lite
              as="th"
              scope="col"
              height="auto"
              py="1"
              px="1"
              border-left-width="1px"
              text-align="center"
            >
              Credit
            </mp-table-cell-lite>
            <mp-table-cell-lite
              as="th"
              scope="col"
              height="auto"
              py="1"
              px="1"
              border-left-width="1px"
              text-align="center"
            >
              Debit
            </mp-table-cell-lite>
            <mp-table-cell-lite
              as="th"
              scope="col"
              height="auto"
              py="1"
              px="1"
              border-left-width="1px"
              text-align="center"
            >
              Credit
            </mp-table-cell-lite>
            <mp-table-cell-lite
              as="th"
              scope="col"
              height="auto"
              py="1"
              px="1"
              border-left-width="1px"
              text-align="center"
            >
              Debit
            </mp-table-cell-lite>
            <mp-table-cell-lite
              as="th"
              scope="col"
              height="auto"
              py="1"
              px="1"
              border-left-width="1px"
              text-align="center"
            >
              Credit
            </mp-table-cell-lite>
          </mp-table-row-lite>
        </mp-table-head-lite>
        <mp-table-body-lite>
          <template v-for="(group, index) in reportDatas">
            <mp-table-row-lite
              :key="group.id"
              :border-top-width="index === 0 ? '0px' : '1px'"
            >
              <mp-table-cell-lite
                colspan="7"
                as="td"
                scope="row"
                bg="gray.25"
                height="auto"
                py="1"
                px="1"
                font-weight="semibold"
              >
                {{ group.name }}
              </mp-table-cell-lite>
            </mp-table-row-lite>

            <mp-table-row-lite
              v-for="(report, index) in group.childrens"
              :key="report.account"
            >
              <mp-table-cell-lite
                as="td"
                scope="row"
                height="auto"
                py="1"
                px="1"
                :border-bottom-width="
                  index === group.childrens.length - 1 ? '0px' : '1px'
                "
              >
                <mp-text>
                  {{ report.account }} - {{ report.accountName }}
                </mp-text>
              </mp-table-cell-lite>
              <mp-table-cell-lite
                as="td"
                scope="row"
                height="auto"
                py="1"
                px="1"
                border-left-width="1px"
                text-align="right"
                :border-bottom-width="
                  index === group.childrens.length - 1 ? '0px' : '1px'
                "
              >
                {{ report.saldoAwalDebit }}
              </mp-table-cell-lite>
              <mp-table-cell-lite
                as="td"
                scope="row"
                height="auto"
                py="1"
                px="1"
                border-left-width="1px"
                text-align="right"
                :border-bottom-width="
                  index === group.childrens.length - 1 ? '0px' : '1px'
                "
              >
                {{ report.saldoAwalCredit }}
              </mp-table-cell-lite>
              <mp-table-cell-lite
                as="td"
                scope="row"
                height="auto"
                py="1"
                px="1"
                border-left-width="1px"
                text-align="right"
                :border-bottom-width="
                  index === group.childrens.length - 1 ? '0px' : '1px'
                "
              >
                {{ report.pergerakanDebit }}
              </mp-table-cell-lite>
              <mp-table-cell-lite
                as="td"
                scope="row"
                height="auto"
                py="1"
                px="1"
                border-left-width="1px"
                text-align="right"
                :border-bottom-width="
                  index === group.childrens.length - 1 ? '0px' : '1px'
                "
              >
                {{ report.pergerakanCredit }}
              </mp-table-cell-lite>
              <mp-table-cell-lite
                as="td"
                scope="row"
                height="auto"
                py="1"
                px="1"
                border-left-width="1px"
                text-align="right"
                :border-bottom-width="
                  index === group.childrens.length - 1 ? '0px' : '1px'
                "
              >
                {{ report.saldoAkhirDebit }}
              </mp-table-cell-lite>
              <mp-table-cell-lite
                as="td"
                scope="row"
                height="auto"
                py="1"
                px="1"
                border-left-width="1px"
                text-align="right"
                :border-bottom-width="
                  index === group.childrens.length - 1 ? '0px' : '1px'
                "
              >
                {{ report.saldoAkhirCredit }}
              </mp-table-cell-lite>
            </mp-table-row-lite>
          </template>
        </mp-table-body-lite>

        <tfoot>
          <mp-table-row-lite ref="tableFooter">
            <mp-table-cell-lite
              as="td"
              scope="row"
              height="auto"
              py="1"
              px="1"
              border-bottom-color="dark"
              border-top-width="1px"
              border-top-color="dark"
              font-weight="semibold"
            >
              Total
            </mp-table-cell-lite>
            <mp-table-cell-lite
              as="td"
              scope="row"
              height="auto"
              py="1"
              px="1"
              border-left-width="1px"
              text-align="right"
              border-bottom-color="dark"
              border-top-width="1px"
              border-top-color="dark"
              font-weight="semibold"
            >
              110.573.279,00
            </mp-table-cell-lite>
            <mp-table-cell-lite
              as="td"
              scope="row"
              height="auto"
              py="1"
              px="1"
              border-left-width="1px"
              text-align="right"
              border-bottom-color="dark"
              border-top-width="1px"
              border-top-color="dark"
              font-weight="semibold"
            >
              110.573.279,00
            </mp-table-cell-lite>
            <mp-table-cell-lite
              as="td"
              scope="row"
              height="auto"
              py="1"
              px="1"
              border-left-width="1px"
              text-align="right"
              border-bottom-color="dark"
              border-top-width="1px"
              border-top-color="dark"
              font-weight="semibold"
            >
              110.573.279,00
            </mp-table-cell-lite>
            <mp-table-cell-lite
              as="td"
              scope="row"
              height="auto"
              py="1"
              px="1"
              border-left-width="1px"
              text-align="right"
              border-bottom-color="dark"
              border-top-width="1px"
              border-top-color="dark"
              font-weight="semibold"
            >
              110.573.279,00
            </mp-table-cell-lite>
            <mp-table-cell-lite
              as="td"
              scope="row"
              height="auto"
              py="1"
              px="1"
              border-left-width="1px"
              text-align="right"
              border-bottom-color="dark"
              border-top-width="1px"
              border-top-color="dark"
              font-weight="semibold"
            >
              110.573.279,00
            </mp-table-cell-lite>
            <mp-table-cell-lite
              as="td"
              scope="row"
              height="auto"
              py="1"
              px="1"
              border-left-width="1px"
              text-align="right"
              border-bottom-color="dark"
              border-top-width="1px"
              border-top-color="dark"
              font-weight="semibold"
            >
              110.573.279,00
            </mp-table-cell-lite>
          </mp-table-row-lite>
        </tfoot>
      </mp-table-lite>
    </mp-table-container>
  </mp-box>
</template>

<script>
import {
  MpTableContainer,
  MpTableLite,
  MpTableHeadLite,
  MpTableBodyLite,
  MpTableRowLite,
  MpTableCellLite,
  MpBox,
  MpText,
} from "@mekari/pixel";

export default {
  components: {
    MpTableContainer,
    MpTableLite,
    MpTableHeadLite,
    MpTableBodyLite,
    MpTableRowLite,
    MpTableCellLite,
    MpBox,
    MpText,
  },
  data: function () {
    return {
      isFullScreen: false,
      reportDatas: [
        {
          id: "1",
          name: "Aset",
          childrens: [
            {
              account: "1-10001",
              accountName: "Cash",
              saldoAwalDebit: "155.500,00",
              saldoAwalCredit: "0,00",
              pergerakanDebit: "0,00",
              pergerakanCredit: "0,00",
              saldoAkhirDebit: "155.500,00",
              saldoAkhirCredit: "0,00",
            },
            {
              account: "1-10002",
              accountName: "Bank Account",
              saldoAwalDebit: "250.000,00",
              saldoAwalCredit: "0,00",
              pergerakanDebit: "50.000,00",
              pergerakanCredit: "0,00",
              saldoAkhirDebit: "300.000,00",
              saldoAkhirCredit: "0,00",
            },
            {
              account: "1-10003",
              accountName: "Investasi",
              saldoAwalDebit: "100.000,00",
              saldoAwalCredit: "0,00",
              pergerakanDebit: "20.000,00",
              pergerakanCredit: "0,00",
              saldoAkhirDebit: "120.000,00",
              saldoAkhirCredit: "0,00",
            },
            {
              account: "1-10004",
              accountName: "Piutang",
              saldoAwalDebit: "75.000,00",
              saldoAwalCredit: "0,00",
              pergerakanDebit: "10.000,00",
              pergerakanCredit: "0,00",
              saldoAkhirDebit: "85.000,00",
              saldoAkhirCredit: "0,00",
            },
            {
              account: "1-10005",
              accountName: "Persediaan",
              saldoAwalDebit: "200.000,00",
              saldoAwalCredit: "0,00",
              pergerakanDebit: "30.000,00",
              pergerakanCredit: "0,00",
              saldoAkhirDebit: "230.000,00",
              saldoAkhirCredit: "0,00",
            },
            {
              account: "1-10006",
              accountName: "Aset Tetap",
              saldoAwalDebit: "1.000.000,00",
              saldoAwalCredit: "0,00",
              pergerakanDebit: "100.000,00",
              pergerakanCredit: "0,00",
              saldoAkhirDebit: "1.100.000,00",
              saldoAkhirCredit: "0,00",
            },
            {
              account: "1-10007",
              accountName: "Aset Lain-lain",
              saldoAwalDebit: "50.000,00",
              saldoAwalCredit: "0,00",
              pergerakanDebit: "5.000,00",
              pergerakanCredit: "0,00",
              saldoAkhirDebit: "55.000,00",
              saldoAkhirCredit: "0,00",
            },
            {
              account: "1-10008",
              accountName: "Aset Investasi",
              saldoAwalDebit: "300.000,00",
              saldoAwalCredit: "0,00",
              pergerakanDebit: "50.000,00",
              pergerakanCredit: "0,00",
              saldoAkhirDebit: "350.000,00",
              saldoAkhirCredit: "0,00",
            },
            {
              account: "1-10009",
              accountName: "Aset Tak Berwujud",
              saldoAwalDebit: "400.000,00",
              saldoAwalCredit: "0,00",
              pergerakanDebit: "60.000,00",
              pergerakanCredit: "0,00",
              saldoAkhirDebit: "460.000,00",
              saldoAkhirCredit: "0,00",
            },
            {
              account: "1-10010",
              accountName: "Aset Jangka Panjang",
              saldoAwalDebit: "500.000,00",
              saldoAwalCredit: "0,00",
              pergerakanDebit: "70.000,00",
              pergerakanCredit: "0,00",
              saldoAkhirDebit: "570.000,00",
              saldoAkhirCredit: "0,00",
            },
          ],
        },
        {
          id: "2",
          name: "Kewajiban",
          childrens: [
            {
              account: "2-20001",
              accountName: "Hutang Usaha",
              saldoAwalDebit: "0,00",
              saldoAwalCredit: "750.000,00",
              pergerakanDebit: "250.000,00",
              pergerakanCredit: "500.000,00",
              saldoAkhirDebit: "0,00",
              saldoAkhirCredit: "1.000.000,00",
            },
            {
              account: "2-20002",
              accountName: "Hutang Bank",
              saldoAwalDebit: "0,00",
              saldoAwalCredit: "1.500.000,00",
              pergerakanDebit: "0,00",
              pergerakanCredit: "0,00",
              saldoAkhirDebit: "0,00",
              saldoAkhirCredit: "1.500.000,00",
            },
            {
              account: "2-20003",
              accountName: "Hutang Lain-lain",
              saldoAwalDebit: "0,00",
              saldoAwalCredit: "200.000,00",
              pergerakanDebit: "50.000,00",
              pergerakanCredit: "30.000,00",
              saldoAkhirDebit: "0,00",
              saldoAkhirCredit: "220.000,00",
            },
            {
              account: "2-20004",
              accountName: "Hutang Pajak",
              saldoAwalDebit: "0,00",
              saldoAwalCredit: "100.000,00",
              pergerakanDebit: "20.000,00",
              pergerakanCredit: "10.000,00",
              saldoAkhirDebit: "0,00",
              saldoAkhirCredit: "110.000,00",
            },
            {
              account: "2-20005",
              accountName: "Hutang Gaji",
              saldoAwalDebit: "0,00",
              saldoAwalCredit: "300.000,00",
              pergerakanDebit: "100.000,00",
              pergerakanCredit: "50.000,00",
              saldoAkhirDebit: "0,00",
              saldoAkhirCredit: "350.000,00",
            },
            {
              account: "2-20006",
              accountName: "Hutang Sewa",
              saldoAwalDebit: "0,00",
              saldoAwalCredit: "150.000,00",
              pergerakanDebit: "30.000,00",
              pergerakanCredit: "20.000,00",
              saldoAkhirDebit: "0,00",
              saldoAkhirCredit: "160.000,00",
            },
            {
              account: "2-20007",
              accountName: "Hutang Bunga",
              saldoAwalDebit: "0,00",
              saldoAwalCredit: "50.000,00",
              pergerakanDebit: "10.000,00",
              pergerakanCredit: "5.000,00",
              saldoAkhirDebit: "0,00",
              saldoAkhirCredit: "55.000,00",
            },
            {
              account: "2-20008",
              accountName: "Hutang Jangka Pendek",
              saldoAwalDebit: "0,00",
              saldoAwalCredit: "400.000,00",
              pergerakanDebit: "80.000,00",
              pergerakanCredit: "20.000,00",
              saldoAkhirDebit: "0,00",
              saldoAkhirCredit: "460.000,00",
            },
            {
              account: "2-20009",
              accountName: "Hutang Jangka Panjang",
              saldoAwalDebit: "0,00",
              saldoAwalCredit: "600.000,00",
              pergerakanDebit: "100.000,00",
              pergerakanCredit: "50.000,00",
              saldoAkhirDebit: "0,00",
              saldoAkhirCredit: "650.000,00",
            },
            {
              account: "2-20010",
              accountName: "Hutang Modal",
              saldoAwalDebit: "0,00",
              saldoAwalCredit: "800.000,00",
              pergerakanDebit: "200.000,00",
              pergerakanCredit: "100.000,00",
              saldoAkhirDebit: "0,00",
              saldoAkhirCredit: "900.000,00",
            },
          ],
        },
        {
          id: "3",
          name: "Ekuitas",
          childrens: [
            {
              account: "3-30001",
              accountName: "Modal Disetor",
              saldoAwalDebit: "0,00",
              saldoAwalCredit: "5.000.000,00",
              pergerakanDebit: "0,00",
              pergerakanCredit: "0,00",
              saldoAkhirDebit: "0,00",
              saldoAkhirCredit: "5.000.000,00",
            },
            {
              account: "3-30002",
              accountName: "Laba Ditahan",
              saldoAwalDebit: "0,00",
              saldoAwalCredit: "2.500.000,00",
              pergerakanDebit: "0,00",
              pergerakanCredit: "500.000,00",
              saldoAkhirDebit: "0,00",
              saldoAkhirCredit: "3.000.000,00",
            },
            {
              account: "3-30003",
              accountName: "Cadangan Umum",
              saldoAwalDebit: "0,00",
              saldoAwalCredit: "1.000.000,00",
              pergerakanDebit: "0,00",
              pergerakanCredit: "200.000,00",
              saldoAkhirDebit: "0,00",
              saldoAkhirCredit: "1.200.000,00",
            },
            {
              account: "3-30004",
              accountName: "Cadangan Khusus",
              saldoAwalDebit: "0,00",
              saldoAwalCredit: "500.000,00",
              pergerakanDebit: "0,00",
              pergerakanCredit: "100.000,00",
              saldoAkhirDebit: "0,00",
              saldoAkhirCredit: "600.000,00",
            },
            {
              account: "3-30005",
              accountName: "Modal Tambahan",
              saldoAwalDebit: "0,00",
              saldoAwalCredit: "300.000,00",
              pergerakanDebit: "0,00",
              pergerakanCredit: "50.000,00",
              saldoAkhirDebit: "0,00",
              saldoAkhirCredit: "350.000,00",
            },
            {
              account: "3-30006",
              accountName: "Modal Saham",
              saldoAwalDebit: "0,00",
              saldoAwalCredit: "700.000,00",
              pergerakanDebit: "0,00",
              pergerakanCredit: "150.000,00",
              saldoAkhirDebit: "0,00",
              saldoAkhirCredit: "850.000,00",
            },
            {
              account: "3-30007",
              accountName: "Modal Pinjaman",
              saldoAwalDebit: "0,00",
              saldoAwalCredit: "400.000,00",
              pergerakanDebit: "0,00",
              pergerakanCredit: "80.000,00",
              saldoAkhirDebit: "0,00",
              saldoAkhirCredit: "480.000,00",
            },
            {
              account: "3-30008",
              accountName: "Modal Investasi",
              saldoAwalDebit: "0,00",
              saldoAwalCredit: "600.000,00",
              pergerakanDebit: "0,00",
              pergerakanCredit: "120.000,00",
              saldoAkhirDebit: "0,00",
              saldoAkhirCredit: "720.000,00",
            },
            {
              account: "3-30009",
              accountName: "Modal Cadangan",
              saldoAwalDebit: "0,00",
              saldoAwalCredit: "800.000,00",
              pergerakanDebit: "0,00",
              pergerakanCredit: "160.000,00",
              saldoAkhirDebit: "0,00",
              saldoAkhirCredit: "960.000,00",
            },
            {
              account: "3-30010",
              accountName: "Modal Lain-lain",
              saldoAwalDebit: "0,00",
              saldoAwalCredit: "900.000,00",
              pergerakanDebit: "0,00",
              pergerakanCredit: "180.000,00",
              saldoAkhirDebit: "0,00",
              saldoAkhirCredit: "1.080.000,00",
            },
          ],
        },
        {
          id: "4",
          name: "Pendapatan",
          childrens: [
            {
              account: "4-40001",
              accountName: "Pendapatan Usaha",
              saldoAwalDebit: "0,00",
              saldoAwalCredit: "3.500.000,00",
              pergerakanDebit: "0,00",
              pergerakanCredit: "1.500.000,00",
              saldoAkhirDebit: "0,00",
              saldoAkhirCredit: "5.000.000,00",
            },
            {
              account: "4-40002",
              accountName: "Pendapatan Lain-lain",
              saldoAwalDebit: "0,00",
              saldoAwalCredit: "250.000,00",
              pergerakanDebit: "0,00",
              pergerakanCredit: "100.000,00",
              saldoAkhirDebit: "0,00",
              saldoAkhirCredit: "350.000,00",
            },
            {
              account: "4-40003",
              accountName: "Pendapatan Investasi",
              saldoAwalDebit: "0,00",
              saldoAwalCredit: "400.000,00",
              pergerakanDebit: "0,00",
              pergerakanCredit: "200.000,00",
              saldoAkhirDebit: "0,00",
              saldoAkhirCredit: "600.000,00",
            },
            {
              account: "4-40004",
              accountName: "Pendapatan Sewa",
              saldoAwalDebit: "0,00",
              saldoAwalCredit: "300.000,00",
              pergerakanDebit: "0,00",
              pergerakanCredit: "150.000,00",
              saldoAkhirDebit: "0,00",
              saldoAkhirCredit: "450.000,00",
            },
            {
              account: "4-40005",
              accountName: "Pendapatan Jasa",
              saldoAwalDebit: "0,00",
              saldoAwalCredit: "500.000,00",
              pergerakanDebit: "0,00",
              pergerakanCredit: "250.000,00",
              saldoAkhirDebit: "0,00",
              saldoAkhirCredit: "750.000,00",
            },
            {
              account: "4-40006",
              accountName: "Pendapatan Lain-lain",
              saldoAwalDebit: "0,00",
              saldoAwalCredit: "600.000,00",
              pergerakanDebit: "0,00",
              pergerakanCredit: "300.000,00",
              saldoAkhirDebit: "0,00",
              saldoAkhirCredit: "900.000,00",
            },
            {
              account: "4-40007",
              accountName: "Pendapatan Bonus",
              saldoAwalDebit: "0,00",
              saldoAwalCredit: "200.000,00",
              pergerakanDebit: "0,00",
              pergerakanCredit: "100.000,00",
              saldoAkhirDebit: "0,00",
              saldoAkhirCredit: "300.000,00",
            },
            {
              account: "4-40008",
              accountName: "Pendapatan Komisi",
              saldoAwalDebit: "0,00",
              saldoAwalCredit: "150.000,00",
              pergerakanDebit: "0,00",
              pergerakanCredit: "75.000,00",
              saldoAkhirDebit: "0,00",
              saldoAkhirCredit: "225.000,00",
            },
            {
              account: "4-40009",
              accountName: "Pendapatan Dividen",
              saldoAwalDebit: "0,00",
              saldoAwalCredit: "100.000,00",
              pergerakanDebit: "0,00",
              pergerakanCredit: "50.000,00",
              saldoAkhirDebit: "0,00",
              saldoAkhirCredit: "150.000,00",
            },
            {
              account: "4-40010",
              accountName: "Pendapatan Lain-lain",
              saldoAwalDebit: "0,00",
              saldoAwalCredit: "80.000,00",
              pergerakanDebit: "0,00",
              pergerakanCredit: "40.000,00",
              saldoAkhirDebit: "0,00",
              saldoAkhirCredit: "120.000,00",
            },
          ],
        },
        {
          id: "5",
          name: "Beban",
          childrens: [
            {
              account: "5-50001",
              accountName: "Beban Gaji",
              saldoAwalDebit: "2.000.000,00",
              saldoAwalCredit: "0,00",
              pergerakanDebit: "500.000,00",
              pergerakanCredit: "0,00",
              saldoAkhirDebit: "2.500.000,00",
              saldoAkhirCredit: "0,00",
            },
            {
              account: "5-50002",
              accountName: "Beban Operasional",
              saldoAwalDebit: "1.500.000,00",
              saldoAwalCredit: "0,00",
              pergerakanDebit: "300.000,00",
              pergerakanCredit: "0,00",
              saldoAkhirDebit: "1.800.000,00",
              saldoAkhirCredit: "0,00",
            },
            {
              account: "5-50003",
              accountName: "Beban Pemasaran",
              saldoAwalDebit: "1.000.000,00",
              saldoAwalCredit: "0,00",
              pergerakanDebit: "200.000,00",
              pergerakanCredit: "0,00",
              saldoAkhirDebit: "1.200.000,00",
              saldoAkhirCredit: "0,00",
            },
            {
              account: "5-50004",
              accountName: "Beban Administrasi",
              saldoAwalDebit: "800.000,00",
              saldoAwalCredit: "0,00",
              pergerakanDebit: "150.000,00",
              pergerakanCredit: "0,00",
              saldoAkhirDebit: "950.000,00",
              saldoAkhirCredit: "0,00",
            },
            {
              account: "5-50005",
              accountName: "Beban Lain-lain",
              saldoAwalDebit: "600.000,00",
              saldoAwalCredit: "0,00",
              pergerakanDebit: "100.000,00",
              pergerakanCredit: "0,00",
              saldoAkhirDebit: "700.000,00",
              saldoAkhirCredit: "0,00",
            },
            {
              account: "5-50006",
              accountName: "Beban Sewa",
              saldoAwalDebit: "400.000,00",
              saldoAwalCredit: "0,00",
              pergerakanDebit: "80.000,00",
              pergerakanCredit: "0,00",
              saldoAkhirDebit: "480.000,00",
              saldoAkhirCredit: "0,00",
            },
            {
              account: "5-50007",
              accountName: "Beban Gaji Karyawan",
              saldoAwalDebit: "300.000,00",
              saldoAwalCredit: "0,00",
              pergerakanDebit: "50.000,00",
              pergerakanCredit: "0,00",
              saldoAkhirDebit: "350.000,00",
              saldoAkhirCredit: "0,00",
            },
            {
              account: "5-50008",
              accountName: "Beban Transportasi",
              saldoAwalDebit: "200.000,00",
              saldoAwalCredit: "0,00",
              pergerakanDebit: "30.000,00",
              pergerakanCredit: "0,00",
              saldoAkhirDebit: "230.000,00",
              saldoAkhirCredit: "0,00",
            },
            {
              account: "5-50009",
              accountName: "Beban Komunikasi",
              saldoAwalDebit: "100.000,00",
              saldoAwalCredit: "0,00",
              pergerakanDebit: "20.000,00",
              pergerakanCredit: "0,00",
              saldoAkhirDebit: "120.000,00",
              saldoAkhirCredit: "0,00",
            },
            {
              account: "5-50010",
              accountName: "Beban Lain-lain",
              saldoAwalDebit: "50.000,00",
              saldoAwalCredit: "0,00",
              pergerakanDebit: "10.000,00",
              pergerakanCredit: "0,00",
              saldoAkhirDebit: "60.000,00",
              saldoAkhirCredit: "0,00",
            },
          ],
        },
      ],
    };
  },
};
</script>
