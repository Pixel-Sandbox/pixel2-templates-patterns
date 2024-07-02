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
            <mp-table-cell as="td">
              Talenta Essential <br />
              <mp-text color="gray.600" font-size="sm"
                >& 1 langganan lainnya</mp-text
              >
            </mp-table-cell>
            <mp-table-cell as="td">20 Jan 2022</mp-table-cell>
            <mp-table-cell as="td">25 Jan 2022</mp-table-cell>
            <mp-table-cell as="td">
              <mp-text text-align="right">Rp0</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td" text-align="right">
              <mp-text>Rp9.910.968</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td">
              <mp-badge variant="subtle" variant-color="green">
                Lunas
              </mp-badge>
            </mp-table-cell>
            <mp-table-cell as="td" text-align="right">
              <mp-button variant="outline" @click="onModalToggle(true)">
                Lihat detail
              </mp-button>
            </mp-table-cell>
          </mp-table-row>
        </mp-table-body>
      </mp-table>
    </mp-table-container>
    <Pagination />
    <detail-tagihan-riwayat-pembayaran-modal
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
} from "@mekari/pixel";
import Pagination from "../components/Pagination";
import DetailTagihanRiwayatPembayaranModal from "./DetailTagihanRiwayatPembayaranModal";

export default {
  name: "DetailTagihanTabB",
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
    Pagination,
    DetailTagihanRiwayatPembayaranModal,
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