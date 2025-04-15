<template>
  <PixelPageContainer :is-full-screen="isFullScreen">
    <mp-box id="pixelPageHeader">
      <mp-flex justify="space-between" align-items="center" padding-x="6" padding-y="1.063rem">
        <mp-box>
          <mp-text v-if="!isFullScreen" color="blue.400">Daftar laporan</mp-text>
          <mp-heading as="h1" font-size="2xl" font-weight="semibold">
            Ringkasan bisnis
            <mp-text as="span" font-size="lg" color="gray.600" font-weight="semibold">(dalam IDR)</mp-text>
          </mp-heading>
        </mp-box>

        <mp-box :transform="isFullScreen ? 'scale(1)' : 'scale(0.2)'" :opacity="isFullScreen ? 1 : 0"
          transition="all 0.3s ease-out">
          <mp-button-icon v-mp-tooltip="'Tampilkan lebih kecil'" name="full-screen" @click="isFullScreen = false" />
        </mp-box>
      </mp-flex>
    </mp-box>

    <PixelPageContent ref="pageContent" variant="card" :is-full-screen="isFullScreen">
      <mp-collapse :is-open="!isFullScreen">
        <mp-flex justify-content="space-between" mb="6">
          <mp-flex align-items="center" gap="3">
            <mp-date-picker placeholder="Pilih tanggal" />

            <mp-flex gap="3">
              <mp-button> Tampilkan </mp-button>

              <mp-button variant="outline">
                <mp-icon name="filter" variant="duotone" mr="2" />
                Filter
              </mp-button>
            </mp-flex>
          </mp-flex>

          <mp-flex align-items="center" gap="3">
            <mp-button-icon v-mp-tooltip="'Tampilkan lebih besar'" name="full-screen"
              @click="isFullScreen = !isFullScreen" />

            <mp-button variant="outline" right-icon="caret-down">
              Ekspor
            </mp-button>
          </mp-flex>
        </mp-flex>
      </mp-collapse>

      <mp-box position="relative" display="flex" flex-direction="column" overflow-x="auto">
        <!-- Sticky on top container -->
        <TableStickyContainer :is-visible="isStickyHeaderVisible"
          :top-offset="isFullScreen ? '0' : 'var(--jurnal-navbar-height)'">
          <mp-table-lite :is-hoverable="false" table-layout="fixed">
            <mp-table-head-lite>
              <mp-table-row-lite>
                <mp-table-cell-lite as="th" scope="col" rowspan="2" height="auto" py="1" px="1"
                  :width="stickyHeaderWidth[0] + 'px'" transition="width 300ms cubic-bezier(0.4, 0, 0.2, 1)">
                  Daftar akun
                </mp-table-cell-lite>
                <mp-table-cell-lite as="th" scope="col" colspan="2" height="auto" py="1" px="1" border-left-width="1px"
                  text-align="center" :width="stickyHeaderWidth[1] + 'px'"
                  transition="width 300ms cubic-bezier(0.4, 0, 0.2, 1)">
                  Saldo Awal
                </mp-table-cell-lite>
                <mp-table-cell-lite as="th" scope="col" colspan="2" height="auto" py="1" px="1" border-left-width="1px"
                  text-align="center" :width="stickyHeaderWidth[2] + 'px'"
                  transition="width 300ms cubic-bezier(0.4, 0, 0.2, 1)">
                  Pergerakan
                </mp-table-cell-lite>
                <mp-table-cell-lite as="th" scope="col" colspan="2" height="auto" py="1" px="1" border-left-width="1px"
                  text-align="center" :width="stickyHeaderWidth[3] + 'px'"
                  transition="width 300ms cubic-bezier(0.4, 0, 0.2, 1)">
                  Saldo Akhir
                </mp-table-cell-lite>
              </mp-table-row-lite>

              <mp-table-row-lite>
                <mp-table-cell-lite as="th" scope="col" height="auto" py="1" px="1" border-left-width="1px"
                  text-align="center" :width="stickySubHeaderWidth[0] + 'px'"
                  transition="width 300ms cubic-bezier(0.4, 0, 0.2, 1)">
                  Debit
                </mp-table-cell-lite>
                <mp-table-cell-lite as="th" scope="col" height="auto" py="1" px="1" border-left-width="1px"
                  text-align="center" :width="stickySubHeaderWidth[1] + 'px'"
                  transition="width 300ms cubic-bezier(0.4, 0, 0.2, 1)">
                  Credit
                </mp-table-cell-lite>
                <mp-table-cell-lite as="th" scope="col" height="auto" py="1" px="1" border-left-width="1px"
                  text-align="center" :width="stickySubHeaderWidth[2] + 'px'"
                  transition="width 300ms cubic-bezier(0.4, 0, 0.2, 1)">
                  Debit
                </mp-table-cell-lite>
                <mp-table-cell-lite as="th" scope="col" height="auto" py="1" px="1" border-left-width="1px"
                  text-align="center" :width="stickySubHeaderWidth[3] + 'px'"
                  transition="width 300ms cubic-bezier(0.4, 0, 0.2, 1)">
                  Credit
                </mp-table-cell-lite>
                <mp-table-cell-lite as="th" scope="col" height="auto" py="1" px="1" border-left-width="1px"
                  text-align="center" :width="stickySubHeaderWidth[4] + 'px'"
                  transition="width 300ms cubic-bezier(0.4, 0, 0.2, 1)">
                  Debit
                </mp-table-cell-lite>
                <mp-table-cell-lite as="th" scope="col" height="auto" py="1" px="1" border-left-width="1px"
                  text-align="center" :width="stickySubHeaderWidth[5] + 'px'"
                  transition="width 300ms cubic-bezier(0.4, 0, 0.2, 1)">
                  Credit
                </mp-table-cell-lite>
              </mp-table-row-lite>
            </mp-table-head-lite>
          </mp-table-lite>
        </TableStickyContainer>

        <!-- Main table -->
        <mp-box display="flex" flex-direction="column">
          <mp-table-lite :is-hoverable="false" ref="table">
            <mp-table-head-lite>
              <mp-table-row-lite ref="tableHeader" border-top-width="1px">
                <mp-table-cell-lite as="th" scope="col" rowspan="2" height="auto" py="1" px="1">
                  Daftar akun
                </mp-table-cell-lite>
                <mp-table-cell-lite as="th" scope="col" colspan="2" height="auto" py="1" px="1" border-left-width="1px"
                  text-align="center">
                  Saldo Awal
                </mp-table-cell-lite>
                <mp-table-cell-lite as="th" scope="col" colspan="2" height="auto" py="1" px="1" border-left-width="1px"
                  text-align="center">
                  Pergerakan
                </mp-table-cell-lite>
                <mp-table-cell-lite as="th" scope="col" colspan="2" height="auto" py="1" px="1" border-left-width="1px"
                  text-align="center">
                  Saldo Akhir
                </mp-table-cell-lite>
              </mp-table-row-lite>

              <mp-table-row-lite ref="subTableHeader">
                <mp-table-cell-lite as="th" scope="col" height="auto" py="1" px="1" border-left-width="1px"
                  text-align="center">
                  Debit
                </mp-table-cell-lite>
                <mp-table-cell-lite as="th" scope="col" height="auto" py="1" px="1" border-left-width="1px"
                  text-align="center">
                  Credit
                </mp-table-cell-lite>
                <mp-table-cell-lite as="th" scope="col" height="auto" py="1" px="1" border-left-width="1px"
                  text-align="center">
                  Debit
                </mp-table-cell-lite>
                <mp-table-cell-lite as="th" scope="col" height="auto" py="1" px="1" border-left-width="1px"
                  text-align="center">
                  Credit
                </mp-table-cell-lite>
                <mp-table-cell-lite as="th" scope="col" height="auto" py="1" px="1" border-left-width="1px"
                  text-align="center">
                  Debit
                </mp-table-cell-lite>
                <mp-table-cell-lite as="th" scope="col" height="auto" py="1" px="1" border-left-width="1px"
                  text-align="center">
                  Credit
                </mp-table-cell-lite>
              </mp-table-row-lite>
            </mp-table-head-lite>
            <mp-table-body-lite>
              <template v-for="(group, index) in reportDatas">
                <mp-table-row-lite :key="group.id" :border-top-width="index === 0 ? '0px' : '1px'">
                  <mp-table-cell-lite colspan="7" as="td" scope="row" bg="gray.25" height="auto" py="1" px="1"
                    font-weight="semibold">
                    {{ group.name }}
                  </mp-table-cell-lite>
                </mp-table-row-lite>

                <mp-table-row-lite v-for="(report, index) in group.childrens" :key="report.account">
                  <mp-table-cell-lite as="td" scope="row" height="auto" py="1" px="1" :border-bottom-width="index === group.childrens.length - 1 ? '0px' : '1px'
                    ">
                    <mp-text>
                      {{ report.account }} - {{ report.accountName }}
                    </mp-text>
                  </mp-table-cell-lite>
                  <mp-table-cell-lite as="td" scope="row" height="auto" py="1" px="1" border-left-width="1px"
                    text-align="right" :border-bottom-width="index === group.childrens.length - 1 ? '0px' : '1px'
                      ">
                    {{ report.saldoAwalDebit }}
                  </mp-table-cell-lite>
                  <mp-table-cell-lite as="td" scope="row" height="auto" py="1" px="1" border-left-width="1px"
                    text-align="right" :border-bottom-width="index === group.childrens.length - 1 ? '0px' : '1px'
                      ">
                    {{ report.saldoAwalCredit }}
                  </mp-table-cell-lite>
                  <mp-table-cell-lite as="td" scope="row" height="auto" py="1" px="1" border-left-width="1px"
                    text-align="right" :border-bottom-width="index === group.childrens.length - 1 ? '0px' : '1px'
                      ">
                    {{ report.pergerakanDebit }}
                  </mp-table-cell-lite>
                  <mp-table-cell-lite as="td" scope="row" height="auto" py="1" px="1" border-left-width="1px"
                    text-align="right" :border-bottom-width="index === group.childrens.length - 1 ? '0px' : '1px'
                      ">
                    {{ report.pergerakanCredit }}
                  </mp-table-cell-lite>
                  <mp-table-cell-lite as="td" scope="row" height="auto" py="1" px="1" border-left-width="1px"
                    text-align="right" :border-bottom-width="index === group.childrens.length - 1 ? '0px' : '1px'
                      ">
                    {{ report.saldoAkhirDebit }}
                  </mp-table-cell-lite>
                  <mp-table-cell-lite as="td" scope="row" height="auto" py="1" px="1" border-left-width="1px"
                    text-align="right" :border-bottom-width="index === group.childrens.length - 1 ? '0px' : '1px'
                      ">
                    {{ report.saldoAkhirCredit }}
                  </mp-table-cell-lite>
                </mp-table-row-lite>
              </template>
            </mp-table-body-lite>

            <tfoot>
              <mp-table-row-lite ref="tableFooter">
                <mp-table-cell-lite as="td" scope="row" height="auto" py="1" px="1" border-bottom-color="dark"
                  border-top-width="1px" border-top-color="dark" font-weight="semibold">
                  Total
                </mp-table-cell-lite>
                <mp-table-cell-lite as="td" scope="row" height="auto" py="1" px="1" border-left-width="1px"
                  text-align="right" border-bottom-color="dark" border-top-width="1px" border-top-color="dark"
                  font-weight="semibold">
                  110.573.279,00
                </mp-table-cell-lite>
                <mp-table-cell-lite as="td" scope="row" height="auto" py="1" px="1" border-left-width="1px"
                  text-align="right" border-bottom-color="dark" border-top-width="1px" border-top-color="dark"
                  font-weight="semibold">
                  110.573.279,00
                </mp-table-cell-lite>
                <mp-table-cell-lite as="td" scope="row" height="auto" py="1" px="1" border-left-width="1px"
                  text-align="right" border-bottom-color="dark" border-top-width="1px" border-top-color="dark"
                  font-weight="semibold">
                  110.573.279,00
                </mp-table-cell-lite>
                <mp-table-cell-lite as="td" scope="row" height="auto" py="1" px="1" border-left-width="1px"
                  text-align="right" border-bottom-color="dark" border-top-width="1px" border-top-color="dark"
                  font-weight="semibold">
                  110.573.279,00
                </mp-table-cell-lite>
                <mp-table-cell-lite as="td" scope="row" height="auto" py="1" px="1" border-left-width="1px"
                  text-align="right" border-bottom-color="dark" border-top-width="1px" border-top-color="dark"
                  font-weight="semibold">
                  110.573.279,00
                </mp-table-cell-lite>
                <mp-table-cell-lite as="td" scope="row" height="auto" py="1" px="1" border-left-width="1px"
                  text-align="right" border-bottom-color="dark" border-top-width="1px" border-top-color="dark"
                  font-weight="semibold">
                  110.573.279,00
                </mp-table-cell-lite>
              </mp-table-row-lite>
            </tfoot>
          </mp-table-lite>
        </mp-box>

        <!-- Sticky on bottom container -->
        <TableStickyContainer :is-visible="isStickyFooterVisible" placement="bottom">
          <mp-table-lite :is-hoverable="false" table-layout="fixed">
            <mp-table-head-lite>
              <mp-table-row-lite>
                <mp-table-cell-lite as="td" scope="row" height="auto" py="1" px="1" border-bottom-color="dark"
                  border-top-width="1px" border-top-color="dark" font-weight="semibold"
                  :width="stickyFooterWidth[0] + 'px'" transition="width 300ms cubic-bezier(0.4, 0, 0.2, 1)">
                  Total
                </mp-table-cell-lite>
                <mp-table-cell-lite as="td" scope="row" height="auto" py="1" px="1" border-left-width="1px"
                  text-align="right" border-bottom-color="dark" border-top-width="1px" border-top-color="dark"
                  font-weight="semibold" :width="stickyFooterWidth[1] + 'px'"
                  transition="width 300ms cubic-bezier(0.4, 0, 0.2, 1)">
                  110.573.279,00
                </mp-table-cell-lite>
                <mp-table-cell-lite as="td" scope="row" height="auto" py="1" px="1" border-left-width="1px"
                  text-align="right" border-bottom-color="dark" border-top-width="1px" border-top-color="dark"
                  font-weight="semibold" :width="stickyFooterWidth[1] + 'px'"
                  transition="width 300ms cubic-bezier(0.4, 0, 0.2, 1)">
                  110.573.279,00
                </mp-table-cell-lite>
                <mp-table-cell-lite as="td" scope="row" height="auto" py="1" px="1" border-left-width="1px"
                  text-align="right" border-bottom-color="dark" border-top-width="1px" border-top-color="dark"
                  font-weight="semibold" :width="stickyFooterWidth[3] + 'px'"
                  transition="width 300ms cubic-bezier(0.4, 0, 0.2, 1)">
                  110.573.279,00
                </mp-table-cell-lite>
                <mp-table-cell-lite as="td" scope="row" height="auto" py="1" px="1" border-left-width="1px"
                  text-align="right" border-bottom-color="dark" border-top-width="1px" border-top-color="dark"
                  font-weight="semibold" :width="stickyFooterWidth[4] + 'px'"
                  transition="width 300ms cubic-bezier(0.4, 0, 0.2, 1)">
                  110.573.279,00
                </mp-table-cell-lite>
                <mp-table-cell-lite as="td" scope="row" height="auto" py="1" px="1" border-left-width="1px"
                  text-align="right" border-bottom-color="dark" border-top-width="1px" border-top-color="dark"
                  font-weight="semibold" :width="stickyFooterWidth[5] + 'px'"
                  transition="width 300ms cubic-bezier(0.4, 0, 0.2, 1)">
                  110.573.279,00
                </mp-table-cell-lite>
                <mp-table-cell-lite as="td" scope="row" height="auto" py="1" px="1" border-left-width="1px"
                  text-align="right" border-bottom-color="dark" border-top-width="1px" border-top-color="dark"
                  font-weight="semibold" :width="stickyFooterWidth[6] + 'px'"
                  transition="width 300ms cubic-bezier(0.4, 0, 0.2, 1)">
                  110.573.279,00
                </mp-table-cell-lite>
              </mp-table-row-lite>
            </mp-table-head-lite>
          </mp-table-lite>
        </TableStickyContainer>
      </mp-box>

      <!-- <mp-box height="100vh" /> -->
    </PixelPageContent>
  </PixelPageContainer>
</template>

<script>
import {
  MpTableLite,
  MpTableHeadLite,
  MpTableBodyLite,
  MpTableRowLite,
  MpTableCellLite,
  MpBox,
  MpButtonIcon,
  MpFlex,
  MpHeading,
  MpText,
  MpButton,
  MpDatePicker,
  MpIcon,
  MpCollapse,
} from "@mekari/pixel";
import PixelPageContainer from "../wrapper/PixelPageContainer.vue";
import PixelPageContent from "../wrapper/PixelPageContent.vue";
import TableStickyContainer from "./TableStickyContainer.vue";

export default {
  components: {
    PixelPageContainer,
    PixelPageContent,
    MpTableLite,
    MpTableHeadLite,
    MpTableBodyLite,
    MpTableRowLite,
    MpTableCellLite,
    MpBox,
    MpButtonIcon,
    MpFlex,
    MpHeading,
    MpText,
    MpButton,
    MpDatePicker,
    MpIcon,
    MpCollapse,
    TableStickyContainer,
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

      // Sticky
      stickyHeaderWidth: [],
      stickySubHeaderWidth: [],
      stickyFooterWidth: [],

      // Setup Intersection Observers instance
      resizeObserver: null,
      lastWidth: null,
      resizeTimeout: null,
      headerObserver: null,
      tableObserver: null,
      footerObserver: null,
      isHeaderAboveThreshold: false,
      isTableVisible: false,
      isFooterVisible: false,
    };
  },
  computed: {
    isStickyHeaderVisible() {
      if (this.isHeaderAboveThreshold && this.isTableVisible) return true;
      return false;
    },
    isStickyFooterVisible() {
      if (!this.isTableVisible || this.isFooterVisible) return false;
      return true;
    },
  },
  mounted() {
    // Initial Calculation
    this.syncTableColumnWidths();

    // Setup Intersection Observers
    this.setupIntersectionObservers();

    // Setup Resize Observer
    this.setupResizeObserver();
  },
  beforeDestroy() {
    // Make sure to cleanup the Intersection Observers and Resize Observer
    this.cleanupIntersectionObservers();
    this.cleanupResizeObserver();
  },
  methods: {
    /**
     * Sets up a Resize Observer to monitor changes in the size of the page content.
     * When the size changes, it triggers recalculation of the sticky header width.
     */
    setupResizeObserver() {
      this.resizeObserver = new ResizeObserver(this.onPageContentResize);

      // Start observing for page content
      if (this.$refs.pageContent?.$el) {
        this.resizeObserver.observe(this.$refs.pageContent.$el);
      }
    },
    cleanupResizeObserver() {
      if (this.resizeObserver) {
        this.resizeObserver.disconnect();
        this.resizeObserver = null;
      }
    },

    /**
     * Handles the resize event by debouncing the recalculation of sticky header width.
     * This prevents multiple recalculations when the window is resized.
     */
    onPageContentResize(entries) {
      // Debounce the resize calculations to prevent multiple recalculations
      if (this.resizeTimeout) {
        clearTimeout(this.resizeTimeout);
      }

      this.resizeTimeout = setTimeout(() => {
        for (const entry of entries) {
          console.log("Resize: ", { entry });
          const newWidth = entry.contentRect.width;
          // Only recalculate if width actually changed
          if (newWidth !== this.lastWidth) {
            this.lastWidth = newWidth;
            this.syncTableColumnWidths();
          }
        }
      }, 25); // 25ms debounce delay
    },

    /**
     * Sets up Intersection Observers to monitor the visibility of the main table, header and footer.
     */
    setupIntersectionObservers() {
      // Initialize observer for the table
      this.tableObserver = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          console.log("Table observer: ", { entry });
          this.isTableVisible = entry.isIntersecting;
        },
        { threshold: 0 }
      );

      // Initialize observer for the header
      const navbarHeight = 56;
      this.headerObserver = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          console.log("Header observer: ", { entry });
          this.isHeaderAboveThreshold = !entry.isIntersecting;
        },
        {
          threshold: 0,
          // Offset for respect to navbar height.
          rootMargin: `-${navbarHeight}px 0px 0px 0px`,
        }
      );

      // Initialize observer for the footer
      this.footerObserver = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          console.log("Footer observer: ", { entry });
          this.isFooterVisible = entry.isIntersecting;
        },
        { threshold: 0 }
      );

      // Start observing for table, header, and footer elements.
      if (this.$refs.table?.$el) {
        this.tableObserver.observe(this.$refs.table.$el);
      }
      if (this.$refs.tableHeader?.$el) {
        this.headerObserver.observe(this.$refs.tableHeader.$el);
      }
      if (this.$refs.tableFooter?.$el) {
        this.footerObserver.observe(this.$refs.tableFooter.$el);
      }
    },
    cleanupIntersectionObservers() {
      if (this.headerObserver) {
        this.headerObserver.disconnect();
        this.headerObserver = null;
      }
      if (this.tableObserver) {
        this.tableObserver.disconnect();
        this.tableObserver = null;
      }
    },

    /**
     * Calculates the widths for the sticky header, sub-header, and footer based on the main table's dimensions.
     * This function collects the width of each child element within the main table to ensure precise sizing.
     */
    syncTableColumnWidths() {
      const tableHeaderNode = this.$refs.tableHeader.$el;
      const subTableHeaderNode = this.$refs.subTableHeader.$el;
      const tableFooterNode = this.$refs.tableFooter.$el;

      // Calculate header width
      const headerWidths = this.getChildrenWidth(tableHeaderNode);
      this.stickyHeaderWidth = headerWidths;

      // Calculate sub header width
      const subWidths = this.getChildrenWidth(subTableHeaderNode);
      this.stickySubHeaderWidth = subWidths;

      // Calculate footer width
      const footerWidths = this.getChildrenWidth(tableFooterNode);
      this.stickyFooterWidth = footerWidths;
    },

    /**
     * Retrieves the width of each child element within a given node.
     * This method is used to calculate the widths for the sticky header, sub-header, and footer.
     * @param {HTMLElement} node - The node whose children's widths are to be calculated.
     * @returns {number[]} An array of widths, one for each child element.
     */
    getChildrenWidth(node) {
      // Check if node has children
      if (!node?.children?.length) return [];

      // Get width of each child element
      return Array.from(node.children).map(
        (child) => child.getBoundingClientRect().width
      );
    },
  },
};
</script>
