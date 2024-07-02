<template>
  <mp-modal
    :is-open="isModalOpen"
    :on-close="() => onModalToggle(false)"
    scroll-behavior="inside"
  >
    <mp-modal-content max-width="920px">
      <mp-modal-header>Detail pembayaran tagihan</mp-modal-header>
      <mp-modal-close-button @click="onModalToggle(false)" />
      <mp-modal-body>
        <mp-box
          border="1px solid"
          border-color="gray.100"
          border-radius="md"
          padding-x="6"
          padding-top="6"
          padding-bottom="5"
        >
          <mp-text color="gray.600" font-size="sm">No. order</mp-text>
          <mp-flex gap="2" align="center">
            <mp-heading as="h3" font-size="lg"> 27183645 </mp-heading>
            <mp-badge variant="solid" variant-color="green"> Lunas </mp-badge>
          </mp-flex>
        </mp-box>

        <mp-heading as="h2" font-size="xl" margin-y="6">
          Rincian tagihan
        </mp-heading>

        <mp-table-container width="full" max-width="full" overflow="scroll">
          <mp-table margin-bottom="4">
            <mp-table-head>
              <mp-table-row cursor="pointer">
                <mp-table-cell as="th"> Nama </mp-table-cell>
                <mp-table-cell as="th"> Jumlah </mp-table-cell>
                <mp-table-cell as="th"> Diskon </mp-table-cell>
                <mp-table-cell as="th" text-align="right">
                  Harga satuan
                </mp-table-cell>
                <mp-table-cell as="th" text-align="right">
                  Total harga
                </mp-table-cell>
              </mp-table-row>
            </mp-table-head>
            <mp-table-body>
              <mp-table-row>
                <mp-table-cell as="td">Talenta Essential</mp-table-cell>
                <mp-table-cell as="td">12 bulan </mp-table-cell>
                <mp-table-cell as="td">0%</mp-table-cell>
                <mp-table-cell as="td" text-align="right"
                  >Rp764.150</mp-table-cell
                >
                <mp-table-cell as="td" text-align="right"
                  >Rp9.169.800</mp-table-cell
                >
              </mp-table-row>
              <mp-table-row>
                <mp-table-cell as="td"
                  >Talenta Additional Employee</mp-table-cell
                >
                <mp-table-cell as="td">1 employee </mp-table-cell>
                <mp-table-cell as="td">0%</mp-table-cell>
                <mp-table-cell as="td" text-align="right"
                  >Rp59.000</mp-table-cell
                >
                <mp-table-cell as="td" text-align="right"
                  >Rp59.000</mp-table-cell
                >
              </mp-table-row>
            </mp-table-body>
          </mp-table>
        </mp-table-container>
        <mp-flex w="100%" justify-content="flex-end">
          <mp-box w="400px">
            <DescriptionListSmall>
              <template #left-side>
                <mp-heading as="h3" font-size="lg"> Subtotal </mp-heading>
              </template>
              <template #right-side>
                <mp-flex align-items="center">
                  <mp-box margin-left="3">
                    <mp-heading as="h3" font-size="lg">
                      Rp9.428.800
                    </mp-heading>
                  </mp-box>
                </mp-flex>
              </template>
            </DescriptionListSmall>
            <DescriptionListSmall>
              <template #left-side>
                <mp-text color="gray.600"> Diskon item </mp-text>
              </template>
              <template #right-side>
                <mp-flex align-items="center">
                  <mp-box margin-left="3">
                    <mp-text color="gray.600"> Rp0 </mp-text>
                  </mp-box>
                </mp-flex>
              </template>
            </DescriptionListSmall>
            <mp-divider margin-y="4" border-style="dashed" />
            <DescriptionListSmall>
              <template #left-side>
                <mp-text color="gray.600"> Diskon </mp-text>
              </template>
              <template #right-side>
                <mp-flex align-items="center">
                  <mp-box margin-left="3">
                    <mp-text color="gray.600"> Rp500.000 </mp-text>
                  </mp-box>
                </mp-flex>
              </template>
            </DescriptionListSmall>
            <DescriptionListSmall>
              <template #left-side>
                <mp-text color="gray.600"> PPN 11% </mp-text>
              </template>
              <template #right-side>
                <mp-flex align-items="center">
                  <mp-box margin-left="3">
                    <mp-text color="gray.600"> Rp982.168 </mp-text>
                  </mp-box>
                </mp-flex>
              </template>
            </DescriptionListSmall>
            <DescriptionListSmall>
              <template #left-side>
                <mp-heading as="h3" font-size="lg">
                  Total pembayaran
                </mp-heading>
              </template>
              <template #right-side>
                <mp-flex align-items="center">
                  <mp-box margin-left="3">
                    <mp-heading as="h3" font-size="lg" float="right">
                      Rp9.910.968
                    </mp-heading>
                    <mp-text
                      color="gray.600"
                      font-size="sm"
                      float="right"
                      text-align="right"
                    >
                      Harga pembulatan termasuk PPN 11%
                    </mp-text>
                  </mp-box>
                </mp-flex>
              </template>
            </DescriptionListSmall>
            <DescriptionListSmall>
              <template #left-side>
                <mp-text><b> Jumlah terbayar</b> </mp-text>
              </template>
              <template #right-side>
                <mp-flex align-items="center">
                  <mp-box margin-left="3">
                    <mp-text> <b>Rp9.910.968 </b></mp-text>
                  </mp-box>
                </mp-flex>
              </template>
            </DescriptionListSmall>
            <mp-divider margin-y="4" border-style="dashed" />
            <DescriptionListSmall>
              <template #left-side>
                <mp-heading as="h3" font-size="lg"> Sisa tagihan </mp-heading>
              </template>
              <template #right-side>
                <mp-flex align-items="center">
                  <mp-box margin-left="3">
                    <mp-heading as="h3" font-size="lg"> Rp0 </mp-heading>
                  </mp-box>
                </mp-flex>
              </template>
            </DescriptionListSmall>
          </mp-box>
        </mp-flex>

        <mp-box>
          <mp-heading as="h2" font-size="xl" margin-y="6">
            Rincian tagihan
          </mp-heading>

          <mp-table-container width="full" max-width="full" overflow="scroll">
            <mp-table margin-bottom="6">
              <mp-table-head>
                <mp-table-row cursor="pointer">
                  <mp-table-cell as="th"> No. Invoice </mp-table-cell>
                  <mp-table-cell as="th"> Tanggal transaksi </mp-table-cell>
                  <mp-table-cell as="th"> Jatuh tempo </mp-table-cell>
                  <mp-table-cell as="th"> Metode pembayaran </mp-table-cell>
                  <mp-table-cell as="th"> Tanggal pembayaran </mp-table-cell>
                  <mp-table-cell as="th" text-align="right">
                    Total pembayaran
                  </mp-table-cell>
                </mp-table-row>
              </mp-table-head>
              <mp-table-body>
                <mp-table-row>
                  <mp-table-cell as="td">
                    <mp-text is-link>INV-0010</mp-text>
                  </mp-table-cell>
                  <mp-table-cell as="td">25 Dec 2020 </mp-table-cell>
                  <mp-table-cell as="td">30 Dec 2020</mp-table-cell>
                  <mp-table-cell as="td">BNI Virtual Account</mp-table-cell>
                  <mp-table-cell as="td">26 Dec 2020</mp-table-cell>
                  <mp-table-cell as="td" text-align="right"
                    >Rp9.910.968</mp-table-cell
                  >
                </mp-table-row>
              </mp-table-body>
            </mp-table>
          </mp-table-container>
        </mp-box>
      </mp-modal-body>
      <mp-modal-footer>
        <mp-button
          margin-right="3"
          variant="ghost"
          @click="onModalToggle(false)"
        >
          Kembali
        </mp-button>
        <mp-popover placement="top-end">
          <mp-popover-trigger>
            <mp-button variant="outline" rightIcon="caret-down">
              Lihat faktur
            </mp-button>
          </mp-popover-trigger>
          <mp-popover-content
            max-width="214px"
            bg="white"
            rounded="md"
            shadow="lg"
            border="1px solid"
            border-color="gray.400"
          >
            <mp-popover-list display="grid">
              <mp-popover-list-item
                >Lihat faktur penawaran</mp-popover-list-item
              >
              <mp-popover-list-item
                >Lihat faktur pembayaran</mp-popover-list-item
              >
            </mp-popover-list>
          </mp-popover-content>
        </mp-popover>
      </mp-modal-footer>
    </mp-modal-content>
    <mp-modal-overlay />
  </mp-modal>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpText,
  MpHeading,
  MpBadge,
  MpDivider,
  MpButton,
  MpTableContainer,
  MpTable,
  MpTableHead,
  MpTableBody,
  MpTableRow,
  MpTableCell,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
  MpModal,
  MpModalOverlay,
  MpModalContent,
  MpModalHeader,
  MpModalBody,
  MpModalFooter,
  MpModalCloseButton,
} from "@mekari/pixel";
import DescriptionListSmall from "../components/DescriptionListSmall";

export default {
  name: "DetailTagihanRiwayatPembayaranModal",
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpHeading,
    MpBadge,
    MpDivider,
    MpButton,
    MpTableContainer,
    MpTable,
    MpTableHead,
    MpTableBody,
    MpTableRow,
    MpTableCell,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
    MpModal,
    MpModalOverlay,
    MpModalContent,
    MpModalHeader,
    MpModalBody,
    MpModalFooter,
    MpModalCloseButton,
    DescriptionListSmall,
  },
  props: {
    isModalOpen: [Boolean],
    onModalToggle: [Function],
  },
};
</script>