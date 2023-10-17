<template>
  <mp-box
    pb="3"
    width="full"
    background="white"
    rounded-top="24px"
    rounded="24px"
  >
    <mp-flex py="2" justify="center">
      <mp-box
        width="40px"
        height="4px"
        border-radius="sm"
        background="gray.400"
      />
    </mp-flex>
    <mp-flex justify="space-between" align-items="center" px="3" py="3.5">
      <mp-text font-size="xl" font-weight="semibold" line-height="28px"
        >Attachment</mp-text
      >
      <mp-icon name="close" @click.native="handleClose" cursor="pointer" />
    </mp-flex>
    <mp-flex direction="column">
      <mp-flex
        v-for="item in lists"
        :key="item.id"
        cursor="pointer"
        direction="row"
        align="center"
        height="12"
        px="3"
        gap="3"
        @click="handleSelect(item.id)"
      >
        <mp-icon :name="item.icon" />
        <mp-text>{{ item.title }}</mp-text>
      </mp-flex>
    </mp-flex>
  </mp-box>
</template>

<script>
import { MpBox, MpFlex, MpText, MpIcon } from "@mekari/pixel";

export default {
  name: "OptionsList",
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpIcon,
  },
  data() {
    return {
      selectedList: null,
      lists: [
        {
          id: 1,
          icon: "camera",
          title: "Take photo or video",
        },
        {
          id: 2,
          icon: "empty",
          title: "Choose from gallery",
        },
        {
          id: 3,
          icon: "doc",
          title: "Document",
        },
        {
          id: 4,
          icon: "empty",
          title: "Audio",
        },
      ],
    };
  },
  methods: {
    handleClose() {
      this.$emit("close");
    },
    handleSelect(id) {
      this.$emit("click", id);
    },
  },
};
</script>
