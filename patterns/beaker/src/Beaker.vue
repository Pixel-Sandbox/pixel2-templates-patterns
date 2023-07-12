<template>
  <mp-box>
    <mp-flex
      as="button"
      p="2"
      gap="2"
      rounded="md"
      align="center"
      borderWidth="1px"
      borderColor="white"
      transition="all 250ms"
      v-bind="getBeakerVariantStyles"
    >
      <MpCircularProgress
        v-if="type === 'transactional' && getPercentage > 0"
        :color="getCircularProgressColor"
        :size="22"
        :width="3"
        :value="getPercentage"
      />
      <mp-icon
        v-if="type === 'transactional' && getPercentage === 0"
        name="error"
        size="sm"
        variant="duotone"
      />

      <mp-icon v-if="type === 'non-transactional'" :name="icon" size="sm" />

      <mp-text
        >{{ label }}
        <mp-text as="span" font-weight="semibold">
          {{ getQuotaLabel }}
        </mp-text>
      </mp-text>
      <mp-icon name="chevrons-right" size="sm" />
    </mp-flex>
  </mp-box>
</template>

<script>
import { MpBox, MpFlex, MpText, MpIcon } from "@mekari/pixel";
import { MpCircularProgress } from "./MpCircularProgress";
export default {
  components: {
    MpBox,
    MpFlex,
    MpCircularProgress,
    MpText,
    MpIcon,
  },
  props: {
    type: {
      type: String,
      default: "transactional",
    },
    label: {
      type: String,
      default: "Sisa kuota faktur:",
    },
    remainingQuota: {
      type: Number,
      default: 0,
    },
    totalQuota: {
      type: Number,
      default: 100,
    },
    icon: {
      type: String,
      default: "progress",
    },
  },
  computed: {
    getQuotaLabel() {
      if (this.type === "transactional") {
        return this.remainingQuota;
      }
      return `${this.remainingQuota}/${this.totalQuota}`;
    },
    getPercentage() {
      return this.valueToPercent(this.remainingQuota, 0, this.totalQuota);
    },
    getCircularProgressColor() {
      const percentage = this.getPercentage;

      if (percentage > 0 && percentage <= 5) {
        return "rose";
      }

      if (percentage >= 6 && percentage <= 15) {
        return "amber";
      }

      if (percentage >= 16) {
        return "lime";
      }

      return "";
    },
    getBeakerVariantStyles() {
      if (this.type === "non-transactional") {
        return {
          bg: "blue.50",
          _hover: {
            borderWidth: "1px",
            borderColor: "blue.400",
          },
        };
      }

      const percentage = this.getPercentage;

      if (percentage >= 0 && percentage <= 5) {
        return {
          bg: "red.50",
          _hover: {
            borderWidth: "1px",
            borderColor: "red.400",
          },
        };
      }

      if (percentage >= 6 && percentage <= 15) {
        return {
          bg: "orange.50",
          _hover: {
            borderWidth: "1px",
            borderColor: "orange.400",
          },
        };
      }

      return {
        bg: "background",
        _hover: {
          borderWidth: "1px",
          borderColor: "gray.100",
        },
      };
    },
  },
  methods: {
    valueToPercent(value, min, max) {
      return ((value - min) * 100) / (max - min);
    },
  },
};
</script>
