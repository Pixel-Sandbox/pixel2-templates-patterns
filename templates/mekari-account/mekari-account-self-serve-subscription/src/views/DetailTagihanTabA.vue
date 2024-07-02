<template>
  <mp-box>
    <mp-flex gap="4" justify-content="space-between" margin-bottom="5">
      <mp-flex gap="2" align="center">
        <mp-box>
          <mp-select w="240px" size="md" value="option-1">
            <option value="option-1">Semua langganan</option>
          </mp-select>
        </mp-box>
        <mp-box>
          <mp-select w="240px" size="md" value="option-1">
            <option value="option-1">Semua status</option>
          </mp-select>
        </mp-box>
        <mp-button variant="link" margin-left="5"> Filter lainnya </mp-button>
      </mp-flex>

      <mp-flex gap="2" align-items="center">
        <mp-input-group>
          <mp-input-left-addon :with-background="false">
            <mp-icon name="search" size="sm" />
          </mp-input-left-addon>
          <mp-input placeholder="Cari No. order" />
        </mp-input-group>
      </mp-flex>
    </mp-flex>

    <mp-table-container width="full" max-width="full" overflow="scroll">
      <mp-table>
        <mp-table-head>
          <mp-table-row cursor="pointer">
            <mp-table-cell as="th">
              No. order
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Langganan
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Tanggal transaksi
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Jatuh tempo
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th" text-align="right">
              Sisa tagihan
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th" text-align="right">
              Total
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Status
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th" />
          </mp-table-row>
        </mp-table-head>
        <mp-table-body>
          <mp-table-row>
            <mp-table-cell as="td">27813643</mp-table-cell>
            <mp-table-cell as="td">Talenta Essential</mp-table-cell>
            <mp-table-cell as="td">20 Jan 2022</mp-table-cell>
            <mp-table-cell as="td">25 Jan 2022</mp-table-cell>
            <mp-table-cell as="td" text-align="right">
              <mp-text color="red.400">Rp222.000</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td" text-align="right">
              <mp-text>Rp222.000</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td">
              <mp-badge variant="subtle" variant-color="red">
                Belum bayar
              </mp-badge>
            </mp-table-cell>
            <mp-table-cell as="td" text-align="right">
              <mp-popover placement="top-end">
                <mp-popover-trigger>
                  <mp-button variant="outline" rightIcon="caret-down">
                    Tindakan
                  </mp-button>
                </mp-popover-trigger>
                <mp-popover-content
                  max-width="40"
                  bg="white"
                  rounded="md"
                  shadow="lg"
                  border="1px solid"
                  border-color="gray.400"
                >
                  <mp-popover-list display="grid">
                    <mp-popover-list-item>Bayar sekarang</mp-popover-list-item>
                    <mp-popover-list-item @click="onModalToggle(true)"
                      >Lihat detail</mp-popover-list-item
                    >
                  </mp-popover-list>
                </mp-popover-content>
              </mp-popover>
            </mp-table-cell>
          </mp-table-row>
        </mp-table-body>
      </mp-table>
    </mp-table-container>
    <Pagination />
    <detail-tagihan-menunggu-pembayaran-modal
      :isModalOpen="isModalOpen"
      :onModalToggle="onModalToggle"
    />
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpButton,
  MpIcon,
  MpBadge,
  MpText,
  MpInput,
  MpInputGroup,
  MpInputLeftAddon,
  MpSelect,
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
} from "@mekari/pixel";
import Pagination from "../components/Pagination";
import DetailTagihanMenungguPembayaranModal from "./DetailTagihanMenungguPembayaranModal";

export default {
  name: "DetailTagihanTabA",
  components: {
    MpBox,
    MpFlex,
    MpButton,
    MpIcon,
    MpBadge,
    MpText,
    MpInput,
    MpInputGroup,
    MpInputLeftAddon,
    MpSelect,
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
    Pagination,
    DetailTagihanMenungguPembayaranModal,
  },
  data: function () {
    return {
      isModalOpen: false,
    };
  },
  methods: {
    onModalToggle: function (data) {
      this.isModalOpen = data;
    },
  },
};
</script>