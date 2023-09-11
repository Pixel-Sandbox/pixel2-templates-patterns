<template>
  <mp-box
    role="group"
    width="full"
    padding="4"
    border-radius="md"
    transition="all .2s ease"
  >
    <mp-flex flex-direction="column">
      <mp-flex justify-content="space-between">
        <mp-flex align-items="center">
          <mp-icon :name="icon" size="sm" margin-right="1" />
          <mp-heading
            as="h2"
            color="dark"
            font-size="xl"
            transition="all .2s ease"
          >
            {{ value }}
          </mp-heading>
        </mp-flex>
      </mp-flex>
      <mp-flex justify-content="flex-start" align-items="center">
        <mp-text color="gray.600" font-size="md">{{ description }}</mp-text>
        <mp-icon name="help" size="sm" margin-left="1" />
      </mp-flex>
    </mp-flex>
  </mp-box>
</template>

<script>
  import { MpBox, MpFlex, MpHeading, MpText, MpIcon } from "@mekari/pixel";

  export default {
    name: "StatsNonClickable",
    components: { MpBox, MpFlex, MpHeading, MpText, MpIcon },
    props: {
        value: [Number, String],
        description: [String],
        icon: [String],
    },
  };
</script>