<template>
  <mp-flex direction="column">
    <mp-text
      as="h1"
      class="airene_gradient_text"
      font-size="2xl"
      font-weight="semibold"
      color="deepPurple"
      mb="0.5"
    >
      <mp-box
        as="span"
        :visibility="isShowHello ? 'visible' : 'hidden'"
        :opacity="isShowHello ? '1' : '0'"
        transition="opacity 300ms"
        >Hello,
      </mp-box>
      <mp-box
        as="span"
        :visibility="isShowName ? 'visible' : 'hidden'"
        :opacity="isShowName ? '1' : '0'"
        transition="opacity 300ms"
      >
        {{ `${name}!` }}
      </mp-box>
    </mp-text>

    <mp-box
      direction="column"
      :visibility="isShowOther ? 'visible' : 'hidden'"
      :opacity="isShowOther ? '1' : '0'"
      transition="opacity 300ms"
    >
      <mp-text>{{ description }}</mp-text>
      <mp-flex direction="column" mt="3" gap="4">
        <mp-flex gap="2">
          <mp-icon
            name="database"
            variant="fill"
            size="sm"
            color="blue.400"
            mt="1"
          />
          <mp-text
            >Airene responds based on the sources you add.
            <mp-text as="a" :href="link" is-link>Add source</mp-text>
          </mp-text>
        </mp-flex>
        <mp-flex gap="2">
          <mp-icon
            name="tips"
            variant="fill"
            size="sm"
            color="blue.400"
            mt="1"
          />
          <mp-text
            >Airene improves from the more learning sources you
            provide.</mp-text
          >
        </mp-flex>
        <mp-flex gap="2">
          <mp-icon
            name="security"
            variant="fill"
            size="sm"
            color="blue.400"
            mt="1"
          />
          <mp-text>Airene is only visible to you.</mp-text>
        </mp-flex>
      </mp-flex>
    </mp-box>
  </mp-flex>
</template>

<script>
import { MpFlex, MpText, MpIcon, MpBox } from "@mekari/pixel";

export default {
  name: "AireneIntro",
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpIcon,
  },
  props: {
    name: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    link: {
      type: String,
      default: "#",
    },
    isShowHello: {
      type: Boolean,
      default: false,
    },
    isShowName: {
      type: Boolean,
      default: false,
    },
    isShowOther: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.airene_gradient_text {
  background: var(--colors-deepPurple);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>