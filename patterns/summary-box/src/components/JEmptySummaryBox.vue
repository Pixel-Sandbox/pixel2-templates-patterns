<template>
  <mp-flex
    :as="this.as"
    :id="getId"
    role="group"
    rounded="md"
    border-width="1px"
    min-height="100px"
    transition="all 0.1s ease, box-shadow 0.5s ease"
    :cursor="isHoverable && 'pointer'"
    :_hover="{
      ...(isHoverable && {
        boxShadow: 'lg',
        borderColor: 'gray.400',
      }),
    }"
    :_active="{
      ...(isHoverable && {
        _active: {
          boxShadow: 'outline',
          transition: 'background 0s',
        },
      }),
    }"
    @click="$emit('click')"
    v-bind="$attrs"
  >
    <img
      v-if="illustrationSrc"
      :style="{
        height: '100px',
        width: 'auto',
      }"
      :src="illustrationSrc"
      alt=""
    />

    <mp-box display="inline-flex" align-items="center" px="3">
      <mp-box>
        <slot />
      </mp-box>
    </mp-box>
  </mp-flex>
</template>

<script>
import { MpBox, MpFlex } from "@mekari/pixel";

export default {
  name: "JEmptySummaryBox",
  components: {
    MpBox,
    MpFlex,
  },
  props: {
    as: { type: String, default: "div" },
    id: [String, Number],
    illustrationSrc: {
      type: String,
      default: "",
    },
    isHoverable: Boolean,
  },
  data() {
    return {
      isLabelEllipsis: false,
      bottomRightContentWidth: 0,
    };
  },
  computed: {
    getId() {
      if (this.id) return this.id;

      return this.useId(5);
    },
  },
  methods: {
    useId(size = 3) {
      let uuid = "";
      const dictionary = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      for (let i = 0; i < size; i++) {
        uuid += dictionary.charAt(
          Math.floor(Math.random() * dictionary.length)
        );
      }
      return uuid;
    },
  },
};
</script>
