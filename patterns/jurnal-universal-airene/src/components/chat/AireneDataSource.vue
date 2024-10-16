<template>
  <mp-flex flex-direction="column">
    <mp-flex width="full" justify-content="space-between" align-items="center">
      <mp-flex align-items="center" gap="1">
        <mp-text color="gray.600" font-weight="semibold" font-size="sm">
          Berdasarkan data hingga 01 Okt 2024, 23:59 WIB
        </mp-text>

        <mp-box>
          <mp-icon
            v-mp-tooltip="
              'Data pada jawaban belum final yang disebabkan oleh perhitungan harga pokok penjualan (HPP) yang sedang berlangsung'
            "
            name="warning-triangle"
            variant="fill"
            size="sm"
            color="orange.400"
          />
        </mp-box>
      </mp-flex>

      <mp-button-icon name="caret-down" @click="toggleCollapse" />
    </mp-flex>

    <mp-collapse :is-open="isOpen">
      <mp-flex flex-direction="column" gap="1">
        <mp-flex
          v-for="(source, index) in datas"
          :key="index"
          as="a"
          :href="source.url"
          target="_blank"
          role="group"
          color="gray.600"
          gap="2"
          align-items="center"
          :_hover="{
            color: 'blue.400',
          }"
        >
          <mp-icon name="attachment" size="sm" color="inherit" />
          <mp-text
            color="inherit"
            :_groupHover="{ textDecoration: 'underline' }"
          >
            {{ index + 1 }}. {{ source.name }}
          </mp-text>
        </mp-flex>
        <mp-text is-link>Lihat semua sumber data</mp-text>
      </mp-flex>
    </mp-collapse>
  </mp-flex>
</template>

<script>
import {
  MpFlex,
  MpText,
  MpButtonIcon,
  MpCollapse,
  MpIcon,
  MpBox,
} from "@mekari/pixel";

export default {
  components: {
    MpFlex,
    MpText,
    MpButtonIcon,
    MpCollapse,
    MpIcon,
    MpBox,
  },

  props: {
    datas: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      isOpen: false,
    };
  },

  methods: {
    toggleCollapse() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
