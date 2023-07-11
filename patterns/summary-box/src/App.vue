<template>
  <mp-box
    p="8"
    display="flex"
    flex-direction="column"
    gap="16"
    overflow-y="auto"
  >
    <!-- CASH & BANK -->
    <mp-box>
      <mp-heading mb="4" font-weight="regular">CASH & BANK</mp-heading>
      <mp-grid gap="4" templateColumns="repeat(4, minmax(0, 1fr))">
        <JSummaryBox
          as="a"
          href="https://mekari.com/"
          is-hoverable
          variant="green"
          label="Pemasukan 30 hari mendatang"
          badge="100"
          amount="Rp10.000.000.000,00"
          :isLoading="isLoading"
        />
        <JSummaryBox
          as="a"
          href="https://mekari.com/"
          is-hoverable
          variant="red"
          label="Pengeluaran 30 hari mendatang"
          badge="100"
          amount="Rp10.000.000,00"
          :isLoading="isLoading"
        />
        <JSummaryBox
          variant="blue"
          label="Saldo kas"
          badge="10.000"
          amount="Rp10.000.000,00"
          :isLoading="isLoading"
        />
        <JSummaryBox
          variant="orange"
          label="Saldo kartu kredit"
          badge="0"
          amount="Rp10.000.000,00"
          :isLoading="isLoading"
        />
      </mp-grid>
    </mp-box>

    <!-- SALES -->
    <mp-box>
      <mp-heading mb="4" font-weight="regular">SALES</mp-heading>
      <mp-grid gap="4" templateColumns="repeat(4, minmax(0, 1fr))">
        <JSummaryBox
          variant="orange"
          label="Penjualan belum dibayar"
          badge="100"
          amount="Rp10.000.000,00"
          is-filter
          :is-active="salesFilter.card1"
          @click="
            handleClick('salesFilter', 'card1', 'Penjualan belum di bayar')
          "
          :isLoading="isLoading"
        />
        <JSummaryBox
          variant="red"
          label="Penjualan jatuh tempo"
          badge="100"
          amount="Rp10.000.000,00"
          is-filter
          :is-active="salesFilter.card2"
          @click="handleClick('salesFilter', 'card2', 'Penjualan jatuh tempo')"
          :isLoading="isLoading"
        />
        <JSummaryBox
          as="a"
          href="https://mekari.com/"
          is-hoverable
          variant="green"
          label="Pelunasan diterima 30 hari terakhir"
          badge="10.000"
          amount="Rp10.000.000,00"
          :isLoading="isLoading"
        />
        <JSummaryBox
          as="a"
          href="https://mekari.com/"
          is-hoverable
          variant="gray"
          labelSrc="https://res.cloudinary.com/uxe-mekari/image/upload/v1678247306/jurnal/logo-mekari-pay-default_trv3sh.svg"
          amount="Rp10.000.000,00"
          :isLoading="isLoading"
        />
      </mp-grid>
    </mp-box>

    <!-- PUCHASE -->
    <mp-box>
      <mp-heading mb="4" font-weight="regular">PURCHASE</mp-heading>
      <mp-grid gap="4" templateColumns="repeat(3, 1fr)">
        <JSummaryBox
          variant="orange"
          label="Pembelian belum dibayar"
          badge="100"
          amount="Rp10.000.000,00"
          is-filter
          :is-active="purchaseFilter.card1"
          @click="
            handleClick('purchaseFilter', 'card1', 'Pembelian belum dibayar')
          "
          :isLoading="isLoading"
        />
        <JSummaryBox
          variant="red"
          label="Pembelian jatuh tempo"
          badge="100"
          amount="Rp10.000.000,00"
          is-filter
          :is-active="purchaseFilter.card2"
          @click="
            handleClick('purchaseFilter', 'card2', 'Pembelian jatuh tempo')
          "
          :isLoading="isLoading"
        />
        <JSummaryBox
          as="a"
          href="https://mekari.com/"
          is-hoverable
          variant="green"
          label="Pelunasan dibayar 30 hari terakhir"
          badge="10.000"
          amount="Rp10.000.000,00"
          :isLoading="isLoading"
        />
      </mp-grid>
    </mp-box>

    <!-- EXPENSE -->
    <mp-box>
      <mp-heading mb="4" font-weight="regular">EXPENSE</mp-heading>
      <mp-grid gap="4" templateColumns="repeat(3, 1fr)">
        <JSummaryBox
          variant="blue"
          label="Total biaya bulan ini"
          badge="100"
          amount="Rp10.000.000,00"
          is-filter
          :is-active="expenseFilter.card1"
          @click="
            handleClick('expenseFilter', 'card1', 'Total biaya bulan ini')
          "
          :isLoading="isLoading"
        />
        <JSummaryBox
          variant="green"
          label="Biaya 30 hari terakhir"
          badge="100"
          amount="Rp10.000.000,00"
          is-filter
          :is-active="expenseFilter.card2"
          @click="
            handleClick('expenseFilter', 'card2', 'Biaya 30 hari terakhir')
          "
          :isLoading="isLoading"
        />
        <JSummaryBox
          variant="orange"
          label="Biaya belum dibayar"
          badge="10.000"
          amount="Rp10.000.000,00"
          is-filter
          :is-active="expenseFilter.card3"
          @click="handleClick('expenseFilter', 'card3', 'Biaya belum dibayar')"
          :isLoading="isLoading"
        />
      </mp-grid>
    </mp-box>

    <!-- CONTACT -->
    <mp-box>
      <mp-heading mb="4" font-weight="regular">CONTACT</mp-heading>
      <mp-grid gap="4" templateColumns="repeat(3, 1fr)">
        <JSummaryBox
          variant="orange"
          label="Piutang belum dibayar"
          badge="100"
          amount="Rp10.000.000,00"
          is-filter
          :is-active="contactFilter.card1"
          @click="
            handleClick('contactFilter', 'card1', 'Piutang belum dibayar')
          "
          :isLoading="isLoading"
        />
        <JSummaryBox
          variant="red"
          label="Piutang jatuh tempo"
          badge="100"
          amount="Rp10.000.000,00"
          is-filter
          :is-active="contactFilter.card2"
          @click="handleClick('contactFilter', 'card2', 'Piutang jatuh tempo')"
          :isLoading="isLoading"
        />
        <JSummaryBox
          variant="blue"
          label="Kredit memo"
          badge="10.000"
          amount="Rp10.000.000,00"
          is-filter
          :is-active="contactFilter.card3"
          @click="handleClick('contactFilter', 'card3', 'Kredit memo')"
          :isLoading="isLoading"
        />
      </mp-grid>
    </mp-box>

    <!-- PRODUCT -->
    <mp-box>
      <mp-heading mb="4" font-weight="regular">PRODUCT</mp-heading>
      <mp-grid gap="4" templateColumns="repeat(4, minmax(0, 1fr))">
        <JSummaryBox
          variant="green"
          label="Stok tersedia"
          caption="Total produk"
          amount="10.000"
          :isLoading="isLoading"
        >
          <template #top-right-content>
            <mp-tooltip label="Label">
              <mp-icon name="doc" cursor="pointer" />
            </mp-tooltip>
          </template>
        </JSummaryBox>
        <JSummaryBox
          variant="orange"
          label="Stok segera habis"
          caption="Total produk"
          amount="800"
          :isLoading="isLoading"
        >
          <template #top-right-content>
            <mp-tooltip label="Label">
              <mp-icon name="doc" cursor="pointer" />
            </mp-tooltip>
          </template>
        </JSummaryBox>
        <JSummaryBox
          variant="red"
          label="Stok habis"
          caption="Total produk"
          amount="200"
          :isLoading="isLoading"
        >
          <template #top-right-content>
            <mp-tooltip label="Label">
              <mp-icon name="doc" cursor="pointer" />
            </mp-tooltip>
          </template>
        </JSummaryBox>
        <JSummaryBox
          variant="blue"
          label="Gudang"
          caption="Total produk"
          amount="1.000"
          :isLoading="isLoading"
        >
          <template #top-right-content>
            <mp-tooltip label="Label">
              <mp-icon name="doc" cursor="pointer" />
            </mp-tooltip>
          </template>
        </JSummaryBox>
      </mp-grid>
    </mp-box>

    <!-- EXPORT IMPORT -->
    <mp-box>
      <mp-heading mb="4" font-weight="regular">EXPORT IMPORT</mp-heading>
      <mp-grid gap="4" templateColumns="repeat(3, 1fr)">
        <JSummaryBox
          variant="gray"
          label="Total baris impor"
          amount="4 baris"
          :isLoading="isLoading"
        >
          <template #bottom-right-content>
            <mp-button size="sm" variant="outline">Unduh</mp-button>
          </template>
        </JSummaryBox>
        <JSummaryBox
          variant="gray"
          label="Gagal impor"
          amount="3 baris"
          :isLoading="isLoading"
        >
          <template #bottom-right-content>
            <mp-button-group>
              <mp-button size="sm" variant="ghost">Lihat error</mp-button>
              <mp-button size="sm" variant="outline">Perbaiki</mp-button>
            </mp-button-group>
          </template>
        </JSummaryBox>
        <JSummaryBox
          variant="gray"
          label="Berhasil impor"
          amount="1 baris"
          :isLoading="isLoading"
        >
        </JSummaryBox>
      </mp-grid>
    </mp-box>

    <!-- ILLUSTRATIONS -->
    <mp-box>
      <mp-heading mb="4" font-weight="regular">ILLUSTRATIONS</mp-heading>
      <mp-grid gap="4" templateColumns="repeat(3, 1fr)">
        <JEmptySummaryBox
          illustration-src="https://res.cloudinary.com/uxe-mekari/image/upload/v1678782319/jurnal/jurnal-summary-box_u6ayxl.svg"
          is-hoverable
        >
          <mp-text font-weight="semibold" line-height="1sm">
            Pembayaran jadi mudah dengan Mekari Pay!
          </mp-text>
          <mp-text is-link> Pelajari lebih lanjut </mp-text>
        </JEmptySummaryBox>
      </mp-grid>
    </mp-box>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpButtonGroup,
  MpButton,
  MpGrid,
  MpIcon,
  MpHeading,
  MpTooltip,
  MpText,
} from "@mekari/pixel";
import JSummaryBox from "./components/JSummaryBox";
import JEmptySummaryBox from "./components/JEmptySummaryBox";

export default {
  components: {
    MpBox,
    MpButtonGroup,
    MpButton,
    MpGrid,
    MpIcon,
    MpHeading,
    MpTooltip,
    MpText,
    JSummaryBox,
    JEmptySummaryBox,
  },
  data() {
    return {
      isLoading: true,
      isActive: false,
      salesFilter: {
        card1: false,
        card2: false,
      },
      purchaseFilter: {
        card1: false,
        card2: false,
      },
      expenseFilter: {
        card1: false,
        card2: false,
        card3: false,
      },
      contactFilter: {
        card1: false,
        card2: false,
        card3: false,
      },
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  },
  methods: {
    handleClick(category, key, message) {
      this[category][key] = !this[category][key];

      this.$toast({
        variant: "success",
        title: `${message} di ${
          this[category][key] ? "aktifkan" : "nonaktifkan"
        }`,
        position: "top",
        duration: 1000,
      });
    },
  },
};
</script>
