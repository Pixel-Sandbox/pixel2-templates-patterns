<template>
  <mp-box p="2">
    <mp-box border-width="1px" p="6" rounded="md">
      <mp-heading mb="6"> Circular Progress </mp-heading>

      <mp-flex gap="2">
        <MpCircularProgress :value="0" :size="22" :width="3" />
        <MpCircularProgress color="rose" :value="5" :size="22" :width="3" />
        <MpCircularProgress color="amber" :value="15" :size="22" :width="3" />
        <MpCircularProgress color="lime" :value="75" :size="22" :width="3" />
        <MpCircularProgress color="lime" :value="100" :size="22" :width="3" />
      </mp-flex>
    </mp-box>

    <mp-box mt="6" border-width="1px" p="6" rounded="md">
      <mp-heading mb="6"> Beaker </mp-heading>

      <mp-flex>
        <mp-stack gap="4">
          <Beaker
            label="Sisa kuota faktur"
            :remaining-quota="750"
            :total-quota="1000"
          />
          <Beaker
            label="Sisa kuota faktur"
            :remaining-quota="120"
            :total-quota="1000"
          />
          <Beaker
            label="Sisa kuota faktur"
            :remaining-quota="50"
            :total-quota="1000"
          />
          <Beaker
            label="Sisa kuota faktur"
            :remaining-quota="0"
            :total-quota="1000"
          />
          <Beaker
            type="non-transactional"
            label="Sisa kuota faktur"
            icon="people"
            :remaining-quota="5"
            :total-quota="5"
          />
        </mp-stack>
      </mp-flex>
    </mp-box>

    <mp-box mt="6" gap="2" border-width="1px" p="6" rounded="md">
      <mp-heading mb="6"> Progress </mp-heading>

      <MpCircularProgress
        :color="color"
        :size="80"
        :width="10"
        :value="value"
      />

      <mp-progress mt="4" :color="color" :value="value" />

      <mp-flex gap="2" mb="4" mt="8">
        <mp-box width="40">
          <mp-select size="sm" v-model="color">
            <option v-for="color in options" :key="color" :value="color">
              {{ color }}
            </option>
          </mp-select>
        </mp-box>
        <mp-button size="sm" :is-disabled="value === 0" @click="handleDecrease">
          Decrease
        </mp-button>
        <mp-button
          size="sm"
          :is-disabled="value === 100"
          @click="handleIncrease"
        >
          Increase
        </mp-button>
        <mp-button
          size="sm"
          variant="outline"
          variant-color="red"
          @click="handleReset"
        >
          Reset
        </mp-button>
      </mp-flex>

      <mp-text> State : {{ value }} / 100 </mp-text>
    </mp-box>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpStack,
  MpButton,
  MpHeading,
  MpText,
  MpProgress,
  MpSelect,
} from "@mekari/pixel";
import { MpCircularProgress } from "./MpCircularProgress";
import Beaker from "./Beaker.vue";

export default {
  components: {
    MpBox,
    MpFlex,
    MpStack,
    MpButton,
    MpHeading,
    MpText,
    MpProgress,
    MpSelect,

    MpCircularProgress,
    Beaker,
  },
  data() {
    return {
      value: 0,
      color: "blue",
      options: [
        "blue",
        "green",
        "orange",
        "red",
        "sky",
        "teal",
        "violet",
        "amber",
        "rose",
        "stone",
        "lime",
        "pink",
      ],
    };
  },
  methods: {
    handleIncrease() {
      this.value += 10;
    },
    handleDecrease() {
      this.value -= 10;
    },
    handleReset() {
      this.color = "blue";
      this.value = 0;
    },
  },
};
</script>
