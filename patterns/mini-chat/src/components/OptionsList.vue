<template>
  <mp-box py="3" width="full" background="white" rounded-top="md">
    <mp-flex
      justify="space-between"
      align="center"
      height="11"
      px="4"
      border-bottom-width="1px"
      border-color="gray.100"
    >
      <mp-text font-weight="semibold">{{ title }}</mp-text>
      <mp-icon name="close" @click.native="handleClose" cursor="pointer" />
    </mp-flex>
    <mp-flex direction="column">
      <mp-flex
        v-for="item in lists"
        :key="item.id"
        cursor="pointer"
        direction="row"
        justify="space-between"
        align="center"
        height="11"
        px="4"
        border-bottom-width="1px"
        border-color="gray.100"
				:_hover="{
					background: 'gray.50'
				}"
        @click="handleSelect(item.id)"
      >
        <mp-text>{{ item.text }}</mp-text>
        <mp-icon
          v-if="item.id === selectedList"
          name="done"
          variant="fill"
          color="green.400"
        />
      </mp-flex>
    </mp-flex>
    <mp-flex
      v-if="!selectedList"
      width="full"
      direction="row"
      justify="center"
      align="center"
      height="11"
      px="4"
    >
      <mp-text color="gray.400"
        >Choose one of the options</mp-text
      >
    </mp-flex>
    <mp-flex v-if="selectedList" width="full" px="4" py="3">
      <mp-button width="full" @click="handleSend">Send</mp-button>
    </mp-flex>
  </mp-box>
</template>

<script>
import { MpBox, MpFlex, MpText, MpButton, MpIcon } from "@mekari/pixel";

export default {
  name: "OptionsList",
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpButton,
    MpIcon,
  },
  props: {
    lists: { type: Array, default: () => [] },
    title: { type: String, default: "" },
  },
  data() {
    return {
      selectedList: null,
    };
  },
  methods: {
    handleClose() {
      this.$emit("close");
    },
    handleSelect(id) {
      this.$emit("click", id);
      if (this.selectedList === id) {
        this.selectedList = null;
        return;
      }
      this.selectedList = id;
    },
    handleSend() {
      this.$emit("send", this.selectedList);
    },
  },
};
</script>
