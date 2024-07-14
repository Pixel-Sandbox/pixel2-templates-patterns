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
            <mp-badge variant="solid" variant-color="red">
              Telat bayar
            </mp-badge>
          </mp-flex>
          <mp-divider margin-top="4" margin-bottom="2" />
          <DescriptionList>
            <template #left-side>
              <mp-text color="gray.600">Tanggal transaksi</mp-text>
            </template>
            <template #right-side>
              <mp-flex align-items="center">
                <mp-box margin-left="3">
                  <mp-text>20 Jan 2022</mp-text>
                </mp-box>
              </mp-flex>
            </template>
          </DescriptionList>
          <DescriptionList>
            <template #left-side>
              <mp-text color="gray.600">Jatuh tempo</mp-text>
            </template>
            <template #right-side>
              <mp-flex align-items="center">
                <mp-box margin-left="3">
                  <mp-text>25 Jan 2022</mp-text>
                </mp-box>
              </mp-flex>
            </template>
          </DescriptionList>
        </mp-box>

        <mp-table-container width="full" max-width="full" overflow="scroll">
          <mp-table margin-y="4">
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
                <mp-table-cell as="td"
                  >Talenta Additional Employee</mp-table-cell
                >
                <mp-table-cell as="td">1 employee </mp-table-cell>
                <mp-table-cell as="td">0%</mp-table-cell>
                <mp-table-cell as="td" text-align="right"
                  >Rp200.000</mp-table-cell
                >
                <mp-table-cell as="td" text-align="right"
                  >Rp200.000</mp-table-cell
                >
              </mp-table-row>
            </mp-table-body>
          </mp-table>
        </mp-table-container>

        <mp-flex w="100%" justify-content="flex-end">
          <mp-box w="400px" margin-right="3">
            <DescriptionListSmall>
              <template #left-side>
                <mp-heading as="h3" font-size="lg"> Subtotal </mp-heading>
              </template>
              <template #right-side>
                <mp-flex align-items="center">
                  <mp-box margin-left="3">
                    <mp-heading as="h3" font-size="lg"> Rp200.000 </mp-heading>
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
                    <mp-text color="gray.600"> Rp0 </mp-text>
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
                    <mp-text color="gray.600"> Rp22.000 </mp-text>
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
                      Rp220.000
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
                    <mp-text> <b>Rp220.000 </b></mp-text>
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
      </mp-modal-body>
      <mp-modal-footer>
        <mp-button
          margin-right="3"
          variant="ghost"
          @click="onModalToggle(false)"
        >
          Kembali
        </mp-button>
        <mp-button variant="outline" margin-right="3"
          >Lihat faktur penawaran</mp-button
        >
        <mp-button>Bayar sekarang</mp-button>
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
  MpModal,
  MpModalOverlay,
  MpModalContent,
  MpModalHeader,
  MpModalBody,
  MpModalFooter,
  MpModalCloseButton,
} from "@mekari/pixel";
import DescriptionList from "../components/DescriptionList";
import DescriptionListSmall from "../components/DescriptionListSmall";

export default {
  name: "DetailTagihanMenungguPembayaranModal",
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
    MpModal,
    MpModalOverlay,
    MpModalContent,
    MpModalHeader,
    MpModalBody,
    MpModalFooter,
    MpModalCloseButton,
    DescriptionList,
    DescriptionListSmall,
  },
  props: {
    isModalOpen: [Boolean],
    onModalToggle: [Function],
  },
};
</script>