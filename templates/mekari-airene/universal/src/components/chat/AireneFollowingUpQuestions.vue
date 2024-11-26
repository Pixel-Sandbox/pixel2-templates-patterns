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
        py="1.5"
        rounded="md"
        border-width="1px"
        border-color="transparent"
        transition="border-color 0.2s ease"
        :_hover="{
          bg: 'white',
          cursor: 'pointer',
          borderColor: 'blue.400',
          py: '1.5',
        }"
        @click="handleClickItem(item)"
      >
        <mp-flex width="full">
          <mp-text
            font-size="sm"
            color="gray.600"
            :_groupHover="{
              color: 'dark',
            }"
          >
            {{ item }}
          </mp-text>
        </mp-flex>

        <mp-box
          opacity="0"
          transform="scale(0.8)"
          transition="all 0.3s ease-in-out"
          color="blue.400"
          :_groupHover="{
            opacity: 1,
            transform: 'scale(1)',
          }"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.99992 14.0001L1.33325 11.3847L3.99992 8.76929"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1.33325 11.3847H10.2221C11.4009 11.3847 12.5313 10.9254 13.3648 10.108C14.1983 9.29052 14.6666 8.18179 14.6666 7.02572C14.6666 5.86965 14.1983 4.76093 13.3648 3.94346C12.5313 3.126 11.4009 2.66675 10.2221 2.66675H6.66659"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </mp-box>
      </mp-box>
    </mp-flex>
  </mp-box>
</template>

<script>
import { MpBox, MpText, MpFlex, MpButtonIcon } from "@mekari/pixel";

export default {
  components: {
    MpBox,
    MpText,
    MpFlex,
    MpButtonIcon,
    // MpIcon,
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
