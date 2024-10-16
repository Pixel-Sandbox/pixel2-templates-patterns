<template>
  <mp-box v-bind="$attrs">
    <mp-text font-weight="semibold"> {{ title }} </mp-text>

    <mp-flex v-if="isLoading" mt="3" flex-direction="column" gap="2">
      <AireneSkeleton variant-color="blue" w="full" h="75px" rounded="md" />
      <AireneSkeleton variant-color="blue" w="full" h="75px" rounded="md" />
      <AireneSkeleton variant-color="blue" w="full" h="75px" rounded="md" />
    </mp-flex>

    <mp-flex v-if="!isLoading" mt="3" flex-direction="column" gap="2">
      <slot />
    </mp-flex>

    <mp-flex
      v-if="!isLoading && (isShowPagination || isShowRefreshButton)"
      gap="2"
      align-items="center"
      mt="3"
    >
      <mp-flex v-if="isShowPagination" align-items="center">
        <mp-button-icon
          @click="handlePreviousSuggestion"
          name="chevrons-left"
          v-mp-tooltip="{
            label: 'Sebelumnya',
            position: 'bottom',
          }"
        />
        <mp-text color="gray.600"> {{ currentPage }}/{{ totalPage }} </mp-text>
        <mp-button-icon
          @click="handleNextSuggestion"
          name="chevrons-right"
          v-mp-tooltip="{
            label: 'Selanjutnya',
            position: 'bottom',
          }"
        />
      </mp-flex>

      <mp-flex
        v-if="isShowRefreshButton"
        align-items="center"
        gap="1"
        @click="handleReloadSuggestion"
      >
        <mp-icon name="refresh" variant="duotone" size="sm" />
        <mp-text is-link> Muat pertanyaan lainnya </mp-text>
      </mp-flex>
    </mp-flex>
  </mp-box>
</template>

<script>
import { MpBox, MpText, MpFlex, MpIcon, MpButtonIcon } from "@mekari/pixel";

import AireneSkeleton from "../utility/AireneSkeleton.vue";

export default {
  components: {
    MpBox,
    MpText,
    MpFlex,
    MpIcon,
    MpButtonIcon,
    AireneSkeleton,
  },
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "",
    },
    currentPage: {
      type: Number,
      default: 1,
    },
    totalPage: {
      type: Number,
      default: 1,
    },
    isShowPagination: {
      type: Boolean,
      default: false,
    },
    isShowRefreshButton: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleReloadSuggestion() {
      this.$emit("reload");
    },
    handlePreviousSuggestion() {
      this.$emit("previous");
    },
    handleNextSuggestion() {
      this.$emit("next");
    },
  },
};
</script>
