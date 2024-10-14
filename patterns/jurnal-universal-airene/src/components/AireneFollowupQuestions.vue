<template>
  <mp-box
    bg="gray.25"
    border-width="1px"
    border-color="gray.50"
    rounded="lg"
    p="3"
  >
    <mp-flex justify-content="space-between" align-items="center">
      <mp-text> Saran pertanyaan terkait </mp-text>

      <mp-button-icon name="close" @click="handleClose" />
    </mp-flex>

    <mp-flex as="ul" flex-direction="column" list-style-type="none" mt="1">
      <mp-box
        v-for="(item, index) in datas"
        :key="index"
        as="li"
        role="group"
        position="relative"
        display="flex"
        align-items="center"
        px="2"
        py="0"
        rounded="md"
        border-width="1px"
        border-color="transparent"
        transition="all 0.3s ease"
        :_hover="{
          bg: 'white',
          cursor: 'pointer',
          borderColor: 'blue.400',
          py: '1.5',
        }"
        @click="handleClickItem(item)"
      >
        <mp-flex width="full">
          <mp-text font-size="sm" color="gray.600">
            {{ item }}
          </mp-text>
        </mp-flex>

        <mp-box>
          <mp-icon
            name="arrows-right"
            color="blue.400"
            opacity="0"
            transform="scale(0.8)"
            transition="all 0.3s ease-in-out"
            :_groupHover="{
              opacity: 1,
              transform: 'scale(1)',
            }"
          />
        </mp-box>
      </mp-box>
    </mp-flex>
  </mp-box>
</template>

<script>
import { MpBox, MpText, MpFlex, MpButtonIcon, MpIcon } from "@mekari/pixel";

export default {
  components: {
    MpBox,
    MpText,
    MpFlex,
    MpButtonIcon,
    MpIcon,
  },
  props: {
    datas: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleClickItem(item) {
      this.$emit("click-item", item);
    },
    handleClose() {
      this.$emit("close");
    },
  },
};
</script>
