<template>
  <mp-flex direction="column" height="100vh">
    <mp-flex justify="flex-end" mb="6">
      <mp-button-icon name="close" @click="handleClose" />
    </mp-flex>
    <mp-text font-size="xl" font-weight="semibold"> {{ title }} </mp-text>
    <mp-input-group mt="4" mb="6">
      <mp-input-left-addon :with-background="false">
        <mp-icon name="search" size="sm" />
      </mp-input-left-addon>
      <mp-input v-model="search" :placeholder="placeholder" is-clearable />
    </mp-input-group>
    <mp-flex v-if="search" direction="column" mb="4" pb="4">
      <mp-box
        v-if="search === 'kosong'"
        display="flex"
        flex-direction="column"
        justify-content="center"
        align-items="center"
        mt="6"
      >
        <img
          :style="{
            height: '96px',
            width: '116px',
          }"
          src="https://res.cloudinary.com/uxe-mekari/image/upload/v1696258110/jurnal/not-found_o1nsvx.png"
          alt=""
        />
        <mp-text font-weight="semibold" text-align="center" mt="1"
          >Artikel tidak ditemukan</mp-text
        >
        <mp-text text-align="center" font-size="sm" color="gray.600"
          >Cek kata kunci dan ulangi pencarian.</mp-text
        >
      </mp-box>

      <template v-if="search !== 'kosong'">
        <mp-flex
          v-for="(item, index) in searchResult"
          :key="index"
          py="3"
          px="2"
          rounded="md"
          cursor="pointer"
          justify-content="space-between"
          align-items="center"
          :_hover="{
            background: 'gray.50',
          }"
          @click="handleClickSearch(item.title)"
        >
          <mp-text>{{ item.title }}</mp-text>

          <mp-icon name="newtab" size="sm" />
        </mp-flex>
        <mp-flex py="3">
          <mp-button variant="outline" width="full">
            Show 10 more articles
          </mp-button>
        </mp-flex>
      </template>
    </mp-flex>
    <mp-flex v-else direction="column" overflow="auto" pb="12">
      <mp-flex v-if="!search" direction="column" mb="4">
        <mp-text font-weight="semibold" mb="0.5" line-height="20px"
          >Get started with Jurnal</mp-text
        >
        <mp-text font-size="sm" color="gray.600" mb="2"
          >Learn the basic set up your account</mp-text
        >

        <mp-box
          bg="#EDE5FE"
          position="relative"
          rounded="6px"
          display="flex"
          justify-content="center"
          align-items="end"
          cursor="pointer"
          @click="isModalOpen = true"
        >
          <img
            src="https://res.cloudinary.com/uxe-mekari/image/upload/v1696258109/jurnal/video-cover_rwhtpo.png"
            alt="video thumbnail"
            :style="{ borderRadius: '6px' }"
          />

          <mp-box
            position="absolute"
            top="0"
            right="0"
            bottom="0"
            left="0"
            display="flex"
            justify-content="center"
            align-items="center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              :style="{
                width: '64px',
                height: '64px',
              }"
              viewBox="0 0 64 64"
              fill="none"
            >
              <circle cx="32.0001" cy="31.9999" r="25.6" fill="white" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M32.0001 57.5999C38.7896 57.5999 45.3011 54.9028 50.102 50.1018C54.9029 45.3009 57.6001 38.7894 57.6001 31.9999C57.6001 25.2104 54.9029 18.6989 50.102 13.898C45.3011 9.09704 38.7896 6.3999 32.0001 6.3999C25.2105 6.3999 18.6991 9.09704 13.8981 13.898C9.09719 18.6989 6.40005 25.2104 6.40005 31.9999C6.40005 38.7894 9.09719 45.3009 13.8981 50.1018C18.6991 54.9028 25.2105 57.5999 32.0001 57.5999ZM30.5761 22.9375C30.0941 22.616 29.534 22.4313 28.9553 22.4032C28.3766 22.3751 27.8012 22.5046 27.2904 22.7779C26.7796 23.0512 26.3526 23.4581 26.0549 23.9551C25.7572 24.4521 25.6 25.0206 25.6001 25.5999V38.3999C25.6 38.9792 25.7572 39.5477 26.0549 40.0447C26.3526 40.5417 26.7796 40.9486 27.2904 41.2219C27.8012 41.4952 28.3766 41.6247 28.9553 41.5966C29.534 41.5685 30.0941 41.3838 30.5761 41.0623L40.1761 34.6623C40.6143 34.3701 40.9737 33.9742 41.2222 33.5097C41.4707 33.0453 41.6008 32.5267 41.6008 31.9999C41.6008 31.4731 41.4707 30.9545 41.2222 30.4901C40.9737 30.0256 40.6143 29.6297 40.1761 29.3375L30.5761 22.9375Z"
                fill="#FF0001"
              />
            </svg>
          </mp-box>
        </mp-box>
      </mp-flex>

      <MenuItems
        v-for="item in menu"
        :key="item.id"
        :id="item.id"
        :title="item.title"
        :description="item.description"
        :iconName="item.iconName"
        :is-outlink="item.isOutlink"
        :badge-label="item.badgeLabel"
        :badge-variant-color="item.badgeVariantColor"
        @click="handleClick"
      />
      <mp-divider my="6" />

      <MenuItems
        v-for="item in secondaryMenu"
        :key="item.id"
        :id="item.id"
        :title="item.title"
        :description="item.description"
        :iconName="item.iconName"
        :is-outlink="item.isOutlink"
        :badge-label="item.badgeLabel"
        :badge-variant-color="item.badgeVariantColor"
        :unread-message="item.unreadMessage"
        @click="handleClick"
      />
    </mp-flex>

    <mp-modal
      :is-open="isModalOpen"
      :is-centered="true"
      :on-close="() => (isModalOpen = false)"
    >
      <mp-modal-content
        background="transparent"
        border-width="0px"
        max-width="100vw"
        justify-content="content"
        align-items="center"
      >
        <mp-flex width="910px" justify-content="flex-end" mb="2">
          <mp-tooltip label="Tutup" position="left">
            <mp-box
              @click="isModalOpen = false"
              cursor="pointer"
              width="32px"
              height="32px"
              display="flex"
              justify-content="center"
              align-items="center"
              rounded="md"
              :_hover="{ bg: 'rgba(255, 255, 255, 0.05)' }"
            >
              <mp-icon name="close" color="white" />
            </mp-box>
          </mp-tooltip>
        </mp-flex>

        <iframe
          width="910px"
          height="568px"
          src="https://www.youtube.com/embed/HVnK_ENY-qw?si=nRbUrLxW5uz2ig0c"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </mp-modal-content>

      <mp-modal-overlay />
    </mp-modal>
  </mp-flex>
</template>

<script>
import {
  MpFlex,
  MpText,
  MpButtonIcon,
  MpInput,
  MpInputGroup,
  MpInputLeftAddon,
  MpIcon,
  MpBox,
  MpDivider,
  MpButton,
  MpModal,
  MpModalOverlay,
  MpModalContent,
  MpTooltip,
} from "@mekari/pixel";

import MenuItems from "./MenuItems.vue";

export default {
  name: "LearningCenter",
  components: {
    MpFlex,
    MpText,
    MpButtonIcon,
    MpInput,
    MpInputGroup,
    MpInputLeftAddon,
    MpIcon,
    MpBox,
    MpDivider,
    MpButton,
    MpModal,
    MpModalOverlay,
    MpModalContent,
    MpTooltip,

    MenuItems,
  },
  props: {
    id: { type: [Number, String], default: 0 },
    title: { type: String, default: "" },
    placeholder: { type: String, default: "Search help article" },
  },
  data() {
    return {
      isLoading: {
        thumbnail: true,
        topMenu: true,
        menu: true,
      },
      thumbnail: undefined,
      topMenu: [],
      menu: [
        {
          id: "whats-new",
          title: "What’s new",
          outlink: "",
          iconName: "broadcast",
          isOutlink: false,
          badgeLabel: "",
          description: "Ketahui info terbaru seputar fitur",
          badgeVariantColor: "",
        },
        {
          id: "artikel-panduan",
          title: "Artikel panduan",
          outlink: "",
          iconName: "tips",
          isOutlink: true,
          badgeLabel: "",
          description: "Selengkapnya di pusat bantuan",
          badgeVariantColor: "",
        },
        {
          id: "video-tutorial",
          title: "Video tutorial",
          outlink: "",
          iconName: "play-video",
          isOutlink: true,
          badgeLabel: "",
          description: "Selengkapnya di YouTube",
          badgeVariantColor: "",
        },
        {
          id: "live-training",
          title: "Live training",
          outlink: "",
          iconName: "education",
          isOutlink: false,
          badgeLabel: "Free",
          description: "Pilih sesi dan jadwal pelatihan",
          badgeVariantColor: "",
        },
      ],
      secondaryMenu: [
        {
          id: "feedback",
          title: "Feedback",
          outlink: "",
          iconName: "today",
          isOutlink: true,
          badgeLabel: "",
          description: "Beri masukan tentang Jurnal",
          badgeVariantColor: "",
        },
        {
          id: "customer-support",
          title: "Customer support",
          outlink: "",
          iconName: "chat",
          isOutlink: false,
          badgeLabel: "",
          description: "Hubungi tim Jurnal melalui chat",
          badgeVariantColor: "",
          unreadMessage: 99
        },
      ],
      search: "",
      searchResult: [
        {
          title: "Profil Akun",
        },
        {
          title: "Bagaimana Cara Mengekspor Akun",
        },
        {
          title: "FAQs - Daftar Akun",
        },
        {
          title: "Akun Multi Level",
        },
        {
          title: "Bagaimana Cara Hapus dan Arsip Akun",
        },
        {
          title: "Bagaimana Cara Mengimpor Akun/COA",
        },
        {
          title: "Bagaimana Cara Reset Akun/COA",
        },
        {
          title: "Sekilas Mengenai Menu Daftar Akun (COA)",
        },
        {
          title: "Bagaimana Cara Membuat Akun Kas & Bank",
        },
      ],
      isModalOpen: false,
    };
  },
  mounted() {
    this.getThumbnail();
    this.getTopMenu();
    this.getMenu();
  },
  methods: {
    handleClose() {
      this.$emit("close", this.id);
    },
    handleClick(id) {
      this.$emit("click", id);
    },
    handleClickSearch(title) {
      this.$emit("click-search", title);
    },

    //
    async getThumbnail() {
      this.isLoading.thumbnail = true;

      setTimeout(() => {
        this.isLoading.thumbnail = false;
      }, 500);
    },
    async getTopMenu() {
      this.isLoading.topMenu = true;

      setTimeout(() => {
        this.isLoading.topMenu = false;
      }, 500);
    },
    async getMenu() {
      this.isLoading.menu = true;

      setTimeout(() => {
        this.isLoading.menu = false;
      }, 500);
    },
  },
};
</script>
