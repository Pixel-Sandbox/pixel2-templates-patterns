<template>
  <mp-banner
    variant="info"
    data-component="AireneBannerPrivacyAndPolicy"
    v-bind="$attrs"
  >
    <mp-banner-icon />
    <mp-banner-description>
      Airene berkomitmen untuk menjaga keamanan dan kerahasiaan data perusahaan
      Anda. Kami tidak akan membagikannya tanpa persetujuan Anda.
      <mp-text as="a" href="https://www.jurnal.id/id/" target="_blank" is-link>
        Baca kebijakan privasi
      </mp-text>
    </mp-banner-description>
    <mp-banner-close-button />
  </mp-banner>
</template>

<script>
import {
  MpBanner,
  MpBannerIcon,
  MpBannerDescription,
  MpBannerCloseButton,
  MpText,
} from "@mekari/pixel";

export default {
  name: "BannerWithCloseButton",
  components: {
    MpBanner,
    MpBannerIcon,
    MpBannerDescription,
    MpBannerCloseButton,
    MpText,
  },
};
</script>
