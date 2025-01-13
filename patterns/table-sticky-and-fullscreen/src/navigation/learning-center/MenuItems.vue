<template>
  <mp-flex
    width="full"
    direction="row"
    align="center"
    justify="start"
    py="3"
    px="2"
    rounded="md"
    cursor="pointer"
    :_hover="{
      background: 'gray.50',
    }"
    @click="handleClick"
  >
    <mp-icon :name="iconName" size="md" variant="duotone" mr="4" />
    <mp-flex direction="column" width="full">
      <mp-flex>
        <mp-text font-weight="semibold" line-height="20px">{{ title }}</mp-text>
        <mp-badge
          v-if="badgeLabel"
          :variant-color="badgeVariantColor"
          size="sm"
          line-height="14px"
          ml="1"
        >
          {{ badgeLabel }}
        </mp-badge>
      </mp-flex>
      <mp-text font-size="sm" color="gray.600">{{ description }}</mp-text>
    </mp-flex>

    <mp-badge variant-color="red" v-if="unreadMessage">
      {{ unreadMessage }}
    </mp-badge>
    <mp-icon
      v-else
      width="4"
      height="4"
      :name="isOutlink ? 'newtab' : 'chevrons-right'"
      size="sm"
      variant="outline"
      ml="1"
    />
  </mp-flex>
</template>

<script>
import { MpFlex, MpText, MpIcon, MpBadge } from "@mekari/pixel";

export default {
  name: "MenuItems",
  components: {
    MpFlex,
    MpText,
    MpIcon,
    MpBadge,
  },
  props: {
    id: { type: [Number, String], default: 0 },
    title: { type: String, default: "" },
    description: { type: String, default: "Search help article" },
    iconName: { type: String, default: "play-video" },
    isOutlink: { type: Boolean, default: false },
    isFree: { type: Boolean, default: false },
    badgeLabel: { type: String, default: "" },
    badgeVariantColor: { type: String, default: "blue" },
    unreadMessage: { type: Number, default: 0 },
  },
  methods: {
    handleClick() {
      this.$emit("click", this.id);
    },
  },
};
</script>
