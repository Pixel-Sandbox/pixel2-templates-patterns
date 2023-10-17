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
          width: '100%',
          borderRadius: '6px',
        }"
      />
      <mp-button-icon
        v-if="isAgent"
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
          variant="duotone"
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
        background="white"
        roundedBottom="sm"
        :roundedTop="!src ? 'sm' : undefined"
        p="2"
      >
        <mp-icon :name="icon" />
        <mp-text width="full" :line-clamp="1" is-truncated>{{ handleTrucate(this.file, 23) }}</mp-text>
        <mp-button-icon
          v-if="isAgent"
          name="download"
          @click="handleDownload"
        />
      </mp-flex>
    </mp-flex>
    <mp-flex v-if="type === 'audio'" gap="3">
      <mp-button-icon
        flex="none"
        color="blue.400"
        :name="isPlay ? 'pause' : 'play-video'"
        @click="handlePlay"
      />
      <mp-flex direction="column" pt="1">
        <input
          v-model="inputRangeValue"
          type="range"
          min="0"
          max="100"
          @change="handleChange"
        />
        <mp-text mt="2" font-size="sm" color="gray.600">{{
          `${audioTime} • ${audioSize}`
        }}</mp-text>
      </mp-flex>
      <mp-button-icon
        v-if="isAgent"
        flex="none"
        name="download"
        @click="handleDownload"
      />
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
    icon: { type: String, default: "" },
    audioTime: { type: String, default: "" },
    audioSize: { type: String, default: "" },
    isPlay: { type: Boolean, default: false },
    isAgent: { type: Boolean, default: false },
  },
  data() {
    return {
      inputRangeValue: 0,
    };
  },
  methods: {
    handleDownload() {
      this.$emit("download");
    },
    handlePlay() {
      this.$emit("play");
    },
    handleChange() {
      this.$emit("audio", this.inputRangeValue);
    },
    handleTrucate(fullStr, strLen, separator) {
      if (fullStr.length <= strLen) return fullStr;

      separator = separator || "...";

      const sepLen = separator.length;
      const charsToShow = strLen - sepLen;
      const frontChars = Math.ceil(charsToShow / 2);
      const backChars = Math.floor(charsToShow / 2);

      return (
        fullStr.substr(0, frontChars) +
        separator +
        fullStr.substr(fullStr.length - backChars)
      );
    },
  },
};
</script>

<style>
/*********** Baseline, reset styles ***********/
input[type="range"] {
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  cursor: pointer;
  width: 176px;
}

/* Removes default focus */
input[type="range"]:focus {
  outline: none;
}

/******** Chrome, Safari, Opera and Edge Chromium styles ********/
/* slider track */
input[type="range"]::-webkit-slider-runnable-track {
  background-color: #3b82f6;
  border-radius: 4px;
  height: 8px;
}

/* slider thumb */
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none; /* Override default look */
  appearance: none;
  margin-top: -4px; /* Centers thumb on the track */
  background-color: #ffffff;
  border-radius: 0.5rem;
  height: 16px;
  width: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

input[type="range"]:focus::-webkit-slider-thumb {
  outline: none;
}

/*********** Firefox styles ***********/
/* slider track */
input[type="range"]::-moz-range-track {
  background-color: #3b82f6;
  border-radius: 4px;
  height: 8px;
}

/* slider thumb */
input[type="range"]::-moz-range-thumb {
  background-color: #ffffff;
  border: none; /*Removes extra border that FF applies*/
  border-radius: 100px;
  height: 16px;
  width: 16px;
}

input[type="range"]:focus::-moz-range-thumb {
  outline: none;
}
</style>
