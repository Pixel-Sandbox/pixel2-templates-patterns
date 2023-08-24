<template>
  <mp-flex
    justify="space-between"
    align-items="center"
    padding-x="6"
    padding-y="17px"
  >
    <mp-flex
      height="12"
      flex-direction="column"
      justify-content="center"
      align-items="flex-start"
    >
      <mp-flex>
        <mp-box
          v-for="(item, index) in links"
          :key="item.name"
          as="router-link"
          :to="item.link"
        >
          <mp-text display="inline-block" font-size="sm" is-link>
            {{ item.name }}
          </mp-text>
          <mp-text
            v-if="index !== links.length - 1"
            display="inline-block"
            font-size="sm"
            margin-x="1"
          >
            /
          </mp-text>
        </mp-box>
      </mp-flex>
      <mp-heading as="h1" font-size="2xl" font-weight="semibold">
        {{ title }}
        <slot name="addon" margin-left="1"></slot>
      </mp-heading>
    </mp-flex>
    <slot name="action"></slot>
  </mp-flex>
</template>

<script>
import { MpBox, MpFlex, MpHeading, MpText } from "@mekari/pixel";

export default {
  name: "MpxTitlebar",
  components: {
    MpBox,
    MpFlex,
    MpHeading,
    MpText,
  },
  props: {
    title: [String],
    links: [Array],
  },
};
</script>
