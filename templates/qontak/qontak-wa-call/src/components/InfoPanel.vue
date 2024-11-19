<template>
  <mp-box flex="none" position="relative" width="316px" background="white">
    <mp-flex
      width="full"
      justify="space-between"
      align-items="center"
      height="12"
      background="white"
      px="4"
      border-bottom="1px solid"
      border-color="gray.100"
    >
      <mp-text font-weight="semibold">Room detail</mp-text>
      <mp-button-icon name="close" />
    </mp-flex>
    <mp-flex direction="column" gap="2" p="4">
      <mp-flex width="full" gap="3">
        <mp-avatar mt="1" />
        <mp-flex direction="column">
          <mp-text font-size="lg" font-weight="semibold">{{ name }}</mp-text>
          <mp-flex gap="1" align-items="center">
            <mp-icon name="WhatsApp" size="sm" />
            <mp-text font-size="sm" color="gray.400">{{ phoneNumber }}</mp-text>
          </mp-flex>
        </mp-flex>
      </mp-flex>
      <mp-flex>
        <mp-button left-icon="phone" variant="outline" size="sm" @click="handleClick">Call</mp-button>
      </mp-flex>
    </mp-flex>
  </mp-box>
</template>

<script>
import { MpBox, MpFlex, MpText, MpButton, MpButtonIcon, MpIcon, MpAvatar } from "@mekari/pixel";

export default {
  name: "InfoPanel",
  components: {
    MpBox,
    MpText,
    MpFlex,
    MpButton,
    MpButtonIcon,
    MpIcon,
    MpAvatar
  },
  data() {
    return {
      name: "Indah Permata",
      phoneNumber: "+6285167276576",
    }
  },
  methods: {
    handleClick() {
      this.$emit('call')
    }
  }
};
</script>
