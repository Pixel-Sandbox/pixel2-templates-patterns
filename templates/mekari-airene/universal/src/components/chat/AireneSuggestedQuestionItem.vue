<template>
  <mp-box
    role="group"
    position="relative"
    display="flex"
    align-items="center"
    bg="gray.25"
    border-width="1px"
    border-color="gray.50"
    rounded="md"
    p="4"
    transition="all 0.3s ease-in-out"
    :_hover="{ borderColor: 'blue.400' }"
  >
    <mp-box width="full">
      <mp-flex color="dark" font-size="md" gap="1" flex-wrap="wrap">
        <slot />
      </mp-flex>

      <mp-box mt="1">
        <mp-box v-if="isLoading">
          <AireneSkeleton width="full" h="12px" rounded="full" />
          <AireneSkeleton width="50%" h="12px" rounded="full" mt="2" />
        </mp-box>

        <mp-text v-else font-size="sm" color="gray.600">
          {{ description }}
        </mp-text>
      </mp-box>
    </mp-box>

    <mp-box>
      <mp-icon
        name="arrows-right"
        color="blue.400"
        opacity="0"
        transform="translateX(2px)"
        transition="all 0.3s ease-in-out"
        :_groupHover="{
          opacity: 1,
          transform: 'translateX(0)',
        }"
      />
    </mp-box>
  </mp-box>
</template>

<script>
import { MpBox, MpFlex, MpIcon, MpText } from "@mekari/pixel";

import AireneSkeleton from "../utility/AireneSkeleton.vue";

export default {
  components: {
    MpBox,
    MpFlex,
    MpIcon,
    MpText,

    AireneSkeleton,
  },
  props: {
    description: {
      type: String,
      default: "",
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
