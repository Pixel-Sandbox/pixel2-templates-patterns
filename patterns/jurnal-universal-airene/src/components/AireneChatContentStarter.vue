<template>
  <mp-box
    as="section"
    ref="container"
    pt="var(--chat-content-body-padding-top)"
  >
    <mp-heading class="airene_gradient_text"> Halo, Rizal Chandra! </mp-heading>

    <mp-text line-height="1sm" mt="1">
      Apakah ada yang bisa dibantu oleh Airene terkait data penjualan, pembelian
      atau terkait akuntansi lainnya?
    </mp-text>

    <mp-box mt="4">
      <mp-text font-weight="semibold"> Saran pertanyaan </mp-text>

      <mp-flex v-if="isLoading" mt="3" flex-direction="column" gap="2">
        <AireneSkeleton variant-color="blue" w="full" h="75px" rounded="md" />
        <AireneSkeleton variant-color="blue" w="full" h="75px" rounded="md" />
        <AireneSkeleton variant-color="blue" w="full" h="75px" rounded="md" />
      </mp-flex>

      <mp-flex v-if="!isLoading" mt="3" flex-direction="column" gap="2">
        <mp-box
          role="group"
          position="relative"
          display="flex"
          align-items="center"
          bg="gray.25"
          border-width="1px"
          border-color="gray.50"
          rounded="md"
          p="4"
          transition="all 0.3s ease-in-out"
          :_hover="{ borderColor: 'blue.400' }"
        >
          <mp-box width="full">
            <mp-flex color="dark" font-size="md" gap="1">
              Analisa tren

              <AireneChatTagDropdown
                :label="analisaTren.kategori"
                :items="['Penjualan', 'Pembelian']"
                @select="(data) => handleChangeAnalisaTren('kategori', data)"
              />
              <AireneChatTagDropdown
                :label="analisaTren.periode"
                :items="['Bulan ini', 'Bulan lalu', 'Tahun lalu', 'Tahun ini']"
                @select="(data) => handleChangeAnalisaTren('periode', data)"
              />
            </mp-flex>

            <mp-box mt="1">
              <mp-box v-if="analisaTren.isLoading">
                <AireneSkeleton width="full" h="12px" rounded="full" />
                <AireneSkeleton width="50%" h="12px" rounded="full" mt="2" />
              </mp-box>

              <mp-text v-else font-size="sm" color="gray.600">
                Menampilkan analisa tren penjualan pada bulan ini
              </mp-text>
            </mp-box>
          </mp-box>

          <mp-box>
            <mp-icon
              name="arrows-right"
              color="blue.400"
              opacity="0"
              transform="translateX(2px)"
              transition="all 0.3s ease-in-out"
              :_groupHover="{
                opacity: 1,
                transform: 'translateX(0)',
              }"
            />
          </mp-box>
        </mp-box>
      </mp-flex>

      <mp-flex v-if="!isLoading" gap="2" align-items="center" mt="3">
        <mp-flex align-items="center">
          <mp-button-icon
            name="chevrons-left"
            v-mp-tooltip="{
              label: 'Sebelumnya',
              position: 'bottom',
            }"
          />
          <mp-text color="gray.600"> 1/4 </mp-text>
          <mp-button-icon
            name="chevrons-right"
            v-mp-tooltip="{
              label: 'Selanjutnya',
              position: 'bottom',
            }"
          />
        </mp-flex>

        <mp-flex align-items="center" gap="1">
          <mp-icon name="refresh" variant="duotone" size="sm" />
          <mp-text is-link> Muat pertanyaan lainnya </mp-text>
        </mp-flex>
      </mp-flex>
    </mp-box>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpText,
  MpFlex,
  MpIcon,
  MpHeading,
  MpButtonIcon,
} from "@mekari/pixel";

import AireneChatTagDropdown from "./AireneChatTagDropdown.vue";
import AireneSkeleton from "./AireneSkeleton.vue";

export default {
  components: {
    MpHeading,
    MpBox,
    MpText,
    MpFlex,
    MpIcon,
    MpButtonIcon,
    AireneChatTagDropdown,
    AireneSkeleton,
  },
  data() {
    return {
      isLoading: true,
      analisaTren: {
        kategori: "Penjualan",
        periode: "Bulan ini",
        isLoading: false,
      },
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 0);
  },
  methods: {
    handleChangeAnalisaTren(target, value) {
      this.analisaTren.isLoading = true;

      this.analisaTren[target] = value;

      setTimeout(() => {
        this.analisaTren.isLoading = false;
      }, 1000);
    },
  },
};
</script>

<style scoped>
.airene_gradient_text {
  background: var(
    --Gradient-deep-purple,
    linear-gradient(96deg, #bd63f8 2.22%, #5f37e1 98.05%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
