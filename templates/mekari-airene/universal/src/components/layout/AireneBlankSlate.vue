<template>
  <mp-flex
    align-items="center"
    flex-direction="column"
    justify-content="center"
    gap="2"
    height="calc(100% - 63px)"
  >
    <img style="height: 240px; width: auto" :src="getIllustration" alt="" />

    <mp-box text-align="center">
      <mp-text font-size="lg" font-weight="semibold">
        {{ title }}
      </mp-text>
      <mp-text color="gray.600" mt="1">
        {{ description }}
      </mp-text>
    </mp-box>
  </mp-flex>
</template>

<script>
import { MpFlex, MpText, MpBox } from "@mekari/pixel";
export default {
  name: "AireneBlankSlate",
  components: {
    MpText,
    MpFlex,
    MpBox,
  },
  props: {
    /**
     * The type of error to display.
     * @type {('400'|'403'|'404'|'500'|'maintenance')}
     */
    type: {
      type: [String, Number],
      default: "400",
    },
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
  },
  computed: {
    getIllustration() {
      const ILLUSTRATIONS = {
        400: "https://cdn.mekari.design/illustration/server-feedback/400_PB_M_01.png",
        403: "https://cdn.mekari.design/illustration/server-feedback/403_PB_M_01.png",
        404: "https://cdn.mekari.design/illustration/server-feedback/404_PB_M_01.png",
        500: "https://cdn.mekari.design/illustration/server-feedback/500_PB_M_01.png",
        maintenance:
          "https://cdn.mekari.design/illustration/server-feedback/UnderMaintenance_PB_M_01.png",
      };

      const FALLBACK_ILLUSTRATION = ILLUSTRATIONS["400"];

      return ILLUSTRATIONS[this.type] || FALLBACK_ILLUSTRATION;
    },
  },
};
</script>

<style lang="scss" scoped></style>
