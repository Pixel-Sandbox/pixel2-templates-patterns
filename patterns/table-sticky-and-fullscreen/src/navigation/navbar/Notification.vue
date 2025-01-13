<template>
  <mp-box>
    <mp-flex ref="notificationTitle" px="4" py="3">
      <mp-text font-size="lg" font-weight="semibold">Notifikasi</mp-text>
    </mp-flex>
    <mp-box bg="white" position="sticky" top="0">
      <mp-tabs
        id="unified-notifications-tabs"
        :index="tabIndex"
        width="full"
        is-manual
        @change.self="handleChangTab"
      >
        <mp-tab-list mb="0" px="4" bg="white" z-index="1">
          <mp-tab>
            Umum
            <mp-badge
              size="md"
              ml="2"
              line-height="normal"
              :variant-color="tabIndex === 0 ? 'red' : 'gray'"
            >
              5
            </mp-badge>
          </mp-tab>
        </mp-tab-list>
      </mp-tabs>

      <!-- Filter Area -->
      <mp-flex
        justify-content="space-between"
        px="4"
        py="3"
        bg="white"
        :shadow="isHeaderSticky ? 'md' : ''"
        z-index="1"
        align-items="center"
      >
        <mp-box width="240px">
          <mp-autocomplete
            :data="generalFilterData"
            v-model="generalFilter"
            :content-style="{ width: 'full', minWidth: 'max-content', maxWidth: '80vw' }"
          />
        </mp-box>
        <mp-button
          v-if="generalFilter !== 'Complete' && generalFilter !== 'Assignment'"
          variant="link"
          @click="showAlert('Mark all as read clicked')"
        >
          Tandai semua sudah dibaca
        </mp-button>
      </mp-flex>
      <!-- End of Filter Area -->
    </mp-box>

    <mp-box>
      <mp-box>
        <!-- List of Notifications -->
        <template v-if="generalFilter === 'Semua'">
          <mp-flex
            v-for="(item, index) in generalData"
            :key="`general-${index}`"
            pt="4"
            direction="column"
          >
            <mp-text mb="2" px="4" font-size="sm" color="gray.600">
              {{ item.date }}
            </mp-text>
            <template v-for="(item, idx) in item.data">
              <mp-flex
                :key="`general-data-${idx}`"
                px="4"
                py="3"
                gap="16px"
                :_hover="{
                  backgroundColor: 'gray.50',
                  cursor: 'pointer',
                }"
              >
                <mp-icon mt="1" :name="item.icon" />
                <mp-flex direction="column" width="390px">
                  <mp-text v-html="item.title" line-height="1sm" mb="1" />
                  <mp-flex v-if="item.actionIcon" align-items="center" mb="1">
                    <mp-icon
                      :name="item.actionIcon"
                      size="sm"
                      variant="duotone"
                      mr="2"
                    />
                    <mp-text is-link size="sm">
                      {{ item.actionText }}
                    </mp-text>
                  </mp-flex>

                  <mp-text font-size="sm" color="gray.600">
                    {{ item.date }}
                  </mp-text>
                </mp-flex>
                <mp-flex>
                  <mp-tooltip
                    v-if="item.isNew"
                    :id="`unified-notifications-general-tooltip-${idx}`"
                    label="Mark as read"
                    position="left"
                  >
                    <mp-icon name="indicator-circle" color="red.400" />
                  </mp-tooltip>
                  <mp-popover
                    v-if="item.hasMenu"
                    :id="`unified-notifications-general-popover-child-${idx}`"
                    placement="bottom-end"
                  >
                    <mp-popover-trigger>
                      <mp-button-icon name="menu-kebab" size="md" />
                    </mp-popover-trigger>
                    <mp-popover-content
                      max-width="64"
                      bg="white"
                      rounded="md"
                      shadow="lg"
                      border-width="1px"
                      border-color="gray.400"
                    >
                      <mp-popover-list>
                        <mp-popover-list-item>
                          All Request
                        </mp-popover-list-item>
                        <mp-popover-list-item>Deals</mp-popover-list-item>
                        <mp-popover-list-item>Expense</mp-popover-list-item>
                      </mp-popover-list>
                    </mp-popover-content>
                  </mp-popover>
                </mp-flex>
              </mp-flex>
            </template>
          </mp-flex>
        </template>
        <!-- End of List of Notifications -->

        <mp-flex
          v-if="generalFilter !== 'Semua'"
          direction="column"
          justify-content="center"
          align-items="center"
          mb="9"
        >
          <img
            src="https://cdn.mekari.design/illustration/blank-slate/NoInbox_PB_M_01.png"
            alt="empty"
            style="width: 216px"
          />
          <mp-text font-size="xl" font-weight="semibold" mb="1">
            Belum ada notifkasi
          </mp-text>
          <mp-text color="gray.600"> Notifikasi akan muncul di sini. </mp-text>
        </mp-flex>

        <mp-flex
          v-if="generalFilter === 'Semua'"
          direction="column"
          justify-content="center"
          align-items="center"
          py="5"
        >
          <img
            src="../../assets/no-inbox.png"
            alt="thank you"
            style="width: 48px"
          />
          <mp-text mt="2"
            >Anda sudah melihat semua notifikasi dari 90 hari terakhir.</mp-text
          >
        </mp-flex>
      </mp-box>
    </mp-box>
  </mp-box>
</template>

<script>
import {
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
  MpBox,
  MpButton,
  MpButtonIcon,
  MpFlex,
  MpBadge,
  MpIcon,
  MpText,
  MpTabs,
  MpTabList,
  MpTab,
  MpTooltip,
  MpAutocomplete,
} from "@mekari/pixel";

export default {
  name: "PixelNotification",
  components: {
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
    MpBox,
    MpButton,
    MpButtonIcon,
    MpFlex,
    MpBadge,
    MpIcon,
    MpText,
    MpTabs,
    MpTabList,
    MpTab,
    MpTooltip,
    MpAutocomplete,
  },
  data() {
    return {
      isHeaderSticky: false,
      tabIndex: 0,
      generalFilter: "Semua",
      generalFilterData: [
        "Semua",
        "Impor file",
        "Ekspor file",
        "Stok habis",
        "Penyusutan tertunda",
        "Stok tersisa (below buffer)",
        "Perhitungan berlangsung",
        "Proses tutup buku",
      ],
      generalData: [
        {
          date: "Hari ini",
          data: [
            {
              title:
                "Mohon konfirmasi pembuatan perusahaan <b>Prima FnB</b> pada email <b>jaka@mekari.com</b>",
              date: "11:00 (GMT+7)",
              icon: "warning-triangle",
              type: "Download",
              actionText: "Konfirmasikan email",
              actionIcon: "envelope",
              isNew: true,
              hasMenu: false,
            },
            {
              title: "Ekspor file <b>Laporan laba rugi</b> sedang berlangsung",
              date: "11:00 (GMT+7)",
              icon: "progress",
              type: "Download",
              actionText: "Lihat progress",
              actionIcon: "time",
              isNew: true,
              hasMenu: false,
            },
            {
              title: "Ekspor file <b>Laporan laba rugi</b> gagal",
              date: "12:00 (GMT+7)",
              icon: "error",
              type: "Download",
              actionText: "Lihat detail",
              actionIcon: "book",
              isNew: true,
              hasMenu: false,
            },
            {
              title: "Ekspor file <b>Laporan laba rugi</b> selesai",
              date: "12:00 (GMT+7)",
              icon: "done",
              type: "Download",
              actionText: "Download laporan",
              actionIcon: "download",
              isNew: true,
              hasMenu: false,
            },
            {
              title: "Impor file <b>Faktur penjualan</b> sedang berlangsung",
              date: "12:00 (GMT+7)",
              icon: "progress",
              type: "Download",
              actionText: "Lihat progress",
              actionIcon: "time",
              isNew: true,
              hasMenu: false,
            },
            {
              title: "Impor file <b>Faktur penjualan</b> gagal",
              date: "12:00 (GMT+7)",
              icon: "error",
              type: "Download",
              actionText: "Lihat detail",
              actionIcon: "book",
              isNew: false,
              hasMenu: false,
            },
            {
              title: "Impor file <b>Faktur penjualan</b> selesai",
              date: "12:00 (GMT+7)",
              icon: "done",
              type: "Download",
              actionText: "Lihat penjualan",
              actionIcon: "sales",
              isNew: false,
              hasMenu: false,
            },
            {
              title: "<b>Perhitungan ulang stok produk</b> sedang berjalan",
              date: "12:00 (GMT+7)",
              icon: "progress",
              type: "Download",
              actionText: "Lihat progress",
              actionIcon: "time",
              isNew: false,
              hasMenu: false,
            },
          ],
        },
        {
          date: "Lebih lama",
          data: [
            {
              title: "Stok <b>Indomie 85gr</b> sudah habis",
              date: "13 Sep 2023, 11:00 (GMT+7)",
              icon: "warning-triangle",
              type: "Download",
              actionText: "Lihat produk",
              actionIcon: "products",
              isNew: false,
              hasMenu: false,
            },
            {
              title: "Penyusutan <b>Kijang Innova 2016</b> tertundas",
              date: "13 Sep 2023, 11:00 (GMT+7)",
              icon: "warning-triangle",
              type: "Download",
              actionText: "Lihat aset",
              actionIcon: "assets",
              isNew: false,
              hasMenu: false,
            },
            {
              title:
                "<b>Jetz 15gr</b> tersisa <b> 2 dari min.stok 5 pcs</b> pada gudang <b>Bandung, Jakarta & Yogyakarta</b>",
              date: "13 Sep 2023, 11:00 (GMT+7)",
              icon: "warning-triangle",
              type: "Download",
              actionText: "Lihat aset",
              actionIcon: "assets",
              isNew: false,
              hasMenu: false,
            },
            {
              title: "<b>Persiapan penutupan buku sedang berjalan</b>",
              date: "12 Sep 2023, 11:00 (GMT+7)",
              icon: "progress",
              type: "Download",
              actionText: "",
              actionIcon: "",
              isNew: false,
              hasMenu: false,
            },
            {
              title:
                "<b>Persiapan penutupan buku sudah selesai.</b> Anda dapat melanjutkan untuk menutup buku",
              date: "12 Sep 2023, 11:00 (GMT+7)",
              icon: "done",
              type: "Download",
              actionText: "Lanjutkan tutup buku",
              actionIcon: "book",
              isNew: false,
              hasMenu: false,
            },
          ],
        },
      ],
    };
  },
  mounted() {
    this.handleSticky();
  },
  methods: {
    handleChangTab(index) {
      this.tabIndex = index;
    },
    showAlert(message) {
      alert(message);
    },
    handleSticky() {
      const el = this.$refs.notificationTitle.$el;
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting === false) {
            this.isHeaderSticky = true;
          } else {
            this.isHeaderSticky = false;
          }
        },
        { threshold: [0] }
      );

      observer.observe(el);
    },
  },
};
</script>

<style>
/* custom scroll bar */
.popover-content::-webkit-scrollbar {
  width: 0px;
}
.popover-content::-webkit-scrollbar-thumb {
  background: transparent;
  border-radius: 10px;
}
.popover-content:hover::-webkit-scrollbar {
  width: 5px;
}
.popover-content:hover::-webkit-scrollbar-thumb {
  background: var(--colors-gray-400);
}
</style>
