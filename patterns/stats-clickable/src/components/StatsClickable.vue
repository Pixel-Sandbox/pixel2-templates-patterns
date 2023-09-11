<template>
  <mp-pseudo-box
    as="button"
    role="group"
    width="full"
    padding="4"
    border-radius="md"
    cursor="pointer"
    transition="all .2s ease"
    :_hover="{ backgroundColor: 'gray.50' }"
    :_active="{ backgroundColor: 'ice.50' }"
    :_focus="{ boxShadow: 'outer' }"
    @click="$emit('click', id)"
  >
    <mp-flex flex-direction="column">
      <mp-flex justify-content="space-between">
        <mp-flex align-items="center">
          <mp-icon :name="icon" size="sm" margin-right="1" />
          <mp-heading
            as="h2"
            color="blue.400"
            font-size="xl"
            transition="all .2s ease"
          >
            {{ value }}
          </mp-heading>
        </mp-flex>
        <mp-tooltip
          position="left"
          :label="filtered === id ? 'Filter off' : 'Filter on'"
        >
          <mp-icon
            name="filter"
            size="sm"
            outline="none"
            transition="all .2s ease"
            :visibility="filtered === id ? 'visible' : 'hidden'"
            :opacity="filtered === id ? '1' : '0'"
            :variant="filtered === id ? 'duotone' : 'outline'"
            :_groupActive="{ opacity: '1', visibility: 'visible' }"
            :_groupHover="{ opacity: '1', visibility: 'visible' }"
          />
        </mp-tooltip>
      </mp-flex>
      <mp-flex justify-content="flex-start" align-items="center">
        <mp-text color="gray.600" font-size="md">{{ description }}</mp-text>
        <mp-icon name="help" size="sm" margin-left="1" />
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
    MpTooltip,
  } from "@mekari/pixel";

  export default {
    name: "StatsClickable",
    components: { MpPseudoBox, MpFlex, MpHeading, MpText, MpIcon, MpTooltip },
    props: {
      id: [Number, String],
      value: [Number, String],
      description: [String],
      icon: [String],
      filtered: [String, Number],
    },
  };
</script>