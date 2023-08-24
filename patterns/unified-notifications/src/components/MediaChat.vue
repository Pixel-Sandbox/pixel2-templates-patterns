<template>
  <mp-flex direction="column">
    <mp-flex
      v-if="type === 'image' || type === 'video'"
      position="relative"
      direction="column"
      align="center"
      justify="center"
    >
      <img
        :src="src"
        :alt="alt"
        :style="{
          width: '296px',
          height: type === 'image' ? '296px' : '166px',
          borderRadius: '4px',
        }"
      />
      <mp-button-icon
        position="absolute"
        name="download"
        top="1"
        right="1"
        background="white"
        @click="handleDownload"
      />
      <mp-flex
        v-if="type === 'video'"
        position="absolute"
        justify="center"
        align="center"
        rounded="full"
        width="8"
        height="8"
        background="white"
      >
        <mp-button-icon
          name="play-video"
          size="md"
          variant="fill"
          color="blue.400"
          :is-hoverable="false"
          @click="handlePlay"
        />
      </mp-flex>
    </mp-flex>
    <mp-flex v-if="type === 'document'" direction="column">
      <img
        v-if="src"
        :src="src"
        :alt="alt"
        :style="{
          width: '296px',
          height: '92px',
          borderTopLeftRadius: '4px',
          borderTopRightRadius: '4px',
        }"
      />
      <mp-flex
        justify="space-between"
        align="center"
        gap="2"
        background="background"
        roundedBottom="sm"
				:roundedTop="!src ? 'sm' : undefined"
        p="2"
      >
        <mp-icon name="pdf-document" />
        <mp-text width="full" :line-clamp="1" is-truncated>{{ file }}</mp-text>
        <mp-button-icon name="download" @click="handleDownload" />
      </mp-flex>
    </mp-flex>
    <mp-text v-if="title" font-weight="semibold" mt="2">{{ title }}</mp-text>
  </mp-flex>
</template>

<script>
import { MpFlex, MpButtonIcon, MpIcon, MpText } from "@mekari/pixel";

export default {
  name: "MediaChat",
  components: {
    MpFlex,
    MpButtonIcon,
    MpIcon,
    MpText,
  },
  props: {
    type: { type: String, default: "" },
    src: { type: String, default: "" },
    alt: { type: String, default: "" },
    title: { type: String, default: "" },
    file: { type: String, default: "" },
  },
  computed: {},
  methods: {
    handleDownload() {
      this.$emit("download");
    },
    handlePlay() {
      this.$emit("play");
    },
  },
};
</script>
