<template>
  <mp-flex direction="column">
    <mp-flex gap="1">
      <mp-text
        ref="hello"
        class="airene_gradient_text"
        font-size="2xl"
        font-weight="semibold"
        color="deepPurple"
        mb="0.5"
      >
        Hello
      </mp-text>
      <mp-text
        ref="name"
        class="airene_gradient_text"
        font-size="2xl"
        font-weight="semibold"
        color="deepPurple"
        mb="0.5"
      >
        {{ `${name}!` }}
      </mp-text>
    </mp-flex>

    <mp-box ref="content" direction="column">
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
import anime from "animejs";

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
  },
  mounted() {
    this.animateSection();
  },
  methods: {
    animateSection() {
      const helloElement = this.$refs.hello.$el;
      const nameElement = this.$refs.name.$el;
      const contentElement = this.$refs.content.$el;

      const tl = anime.timeline({
        easing: "easeOutSine",
        duration: 300,
        delay: 400
      });

      tl.add({
        targets: helloElement,
        opacity: [0, 1],
        delay: 200
      })
        .add({
          targets: nameElement,
          opacity: [0, 1],
          delay: 200,
          complete: () => {
            // Emit finish event
            this.$emit("finish");
          },
        })
        .add({
          targets: contentElement,
          opacity: [0, 1],
        });
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
