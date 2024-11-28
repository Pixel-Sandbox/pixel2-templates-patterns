<template>
  <mp-flex justify-content="center" align-items="center" w="full" mb="4">
    <mp-box
      display="flex"
      bg="gray.25"
      border-width="1px"
      border-color="gray.50"
      rounded="lg"
    >
      <mp-flex px="4" py="2" align-items="center" gap="4">
        <mp-text> Is this conversation helpful so far? </mp-text>

        <mp-flex>
          <mp-button-icon name="like" @click="handleClickThumbUp" />
          <mp-button-icon name="dislike" @click="handleClickThumbDown" />
        </mp-flex>
      </mp-flex>

      <mp-flex
        width="44px"
        border-left-width="1px"
        border-color="gray.50"
        justify-content="center"
        align-items="center"
      >
        <mp-button-icon name="close" />
      </mp-flex>
    </mp-box>
  </mp-flex>
</template>

<script>
import { MpBox, MpFlex, MpButtonIcon, MpText } from "@mekari/pixel";

export default {
  components: {
    MpBox,
    MpFlex,
    MpButtonIcon,
    MpText,
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    handleClickThumbUp() {
      this.$emit("click-thumb-up");
    },
    handleClickThumbDown() {
      this.$emit("click-thumb-down");
    },
  },
};
</script>
