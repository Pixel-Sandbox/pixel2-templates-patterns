<template>
  <mp-box
    role="group"
    width="full"
    border-radius="md"
    transition="all .2s ease"
    :padding-x="['0', '4']"
  >
    <mp-flex flex-direction="column">
      <mp-flex justify-content="space-between">
        <mp-flex align-items="center">
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
      </mp-flex>
    </mp-flex>
  </mp-box>
</template>

<script>
import { MpBox, MpFlex, MpHeading, MpText } from "@mekari/pixel";

export default {
  name: "Stats",
  components: { MpBox, MpFlex, MpHeading, MpText },
  props: {
    value: [Number, String],
    description: [String],
  },
};
</script>