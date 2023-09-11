<template>
  <mp-pseudo-box width="full" padding="4" border-radius="md">
    <mp-flex flex-direction="column">
      <mp-flex
        justify-content="flex-start"
        align-items="center"
        margin-bottom="1"
      >
        <mp-badge size="md" variant="subtle" :variant-color="variantLabel">
          {{ label }}
        </mp-badge>
      </mp-flex>
      <mp-flex justify-content="space-between" margin-bottom="4">
        <mp-flex align-items="center">
          <mp-icon :name="icon" size="sm" margin-right="1" />
          <mp-heading as="h2" color="dark" font-size="xl">
            {{ value }}
          </mp-heading>
        </mp-flex>
      </mp-flex>
      <mp-flex justify-content="flex-start" align-items="center">
        <mp-text as="a" line-height="md" tabindex="1" is-link>
          {{ link }}
        </mp-text>
      </mp-flex>
    </mp-flex>
  </mp-pseudo-box>
</template>

<script>
  import {
    MpPseudoBox,
    MpFlex,
    MpHeading,
    MpText,
    MpIcon,
    MpBadge,
  } from "@mekari/pixel";

  export default {
    name: "StatsDefault",
    components: { MpPseudoBox, MpFlex, MpHeading, MpText, MpIcon, MpBadge },
    props: {
      value: [Number, String],
      label: [String],
      variantLabel: [String],
      icon: [String],
      link: [String],
    },
  };
</script>