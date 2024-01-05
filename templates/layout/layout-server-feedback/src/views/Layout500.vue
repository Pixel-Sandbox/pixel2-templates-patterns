<template>
  <mp-box>
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 60px)">
      <mp-box
        as="section"
        data-id="content"
        width="100%"
        height="calc(100vh - 60px)"
        overflow-y="auto"
        background-color="background"
        display="flex"
        justify-content="center"
        padding-top="20"
      >
        <mp-box
          width="684px"
          height="fit-content"
          border-width="1px"
          border-radius="md"
          border-color="gray.100"
          background-color="white"
          padding="10"
          text-align="center"
        >
          <mp-image
            id="image-playground"
            src="https://cdn.mekari.design/illustration/server-feedback/500_PI_L_01.png"
            :width="288"
            :height="240"
          />
          <mp-text color="dark" font-size="lg" font-weight="semibold">
            Terjadi kendala pada server kami
          </mp-text>
          <mp-text color="gray.600" margin-bottom="6">
            Silakan muat ulang halaman ini atau coba lagi nanti.
          </mp-text>
          <mp-button variant="outline">Kembali ke halaman utama</mp-button>
        </mp-box>
      </mp-box>
    </mp-flex>
  </mp-box>
</template>

<script>
import { MpBox, MpFlex, MpText, MpImage, MpButton } from "@mekari/pixel";
import Header from "../components/Header";

export default {
  name: "Layout500",
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpImage,
    MpButton,
    Header,
  },
};
</script>