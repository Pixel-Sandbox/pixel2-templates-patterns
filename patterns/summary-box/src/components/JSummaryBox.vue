<template>
  <mp-flex
    :as="this.as"
    :id="getId"
    role="group"
    flex-direction="column"
    rounded="md"
    border="1px"
    transition="all 0.1s ease, box-shadow 0.5s ease"
    :border-color="getBorderColor"
    :cursor="getIsHoverable ? 'pointer' : ''"
    :_hover="{
      ...(getIsHoverable && getHoverStyle),
    }"
    :_active="{
      ...(getIsHoverable && {
        _active: {
          boxShadow: 'outline',
          transition: 'background 0s',
        },
      }),
    }"
    @click="$emit('click')"
    v-bind="$attrs"
  >
    <!-- Top Content -->
    <mp-flex
      :id="`${getId}-top-content`"
      position="relative"
      px="3"
      py="2"
      :bg="getTopContentBgColor"
      justify-content="space-between"
      align-items="center"
      rounded-top="md"
    >
      <mp-box w="calc(100% - 32px)">
        <img
          v-if="labelSrc"
          :style="{ height: '20px', width: 'auto' }"
          :src="labelSrc"
          alt=""
        />
        <mp-box ref="summaryBoxLabel" v-else>
          <mp-tooltip
            :label="label"
            :visibility="isLabelEllipsis ? 'vibible' : 'hidden'"
          >
            <mp-text
              :id="`${getId}-top-content-label`"
              as="h3"
              font-weight="semibold"
              is-truncated
            >
              {{ label }}
            </mp-text>
          </mp-tooltip>
        </mp-box>
      </mp-box>
      <mp-box
        v-if="badge"
        as="span"
        display="flex"
        align-items="center"
        justify-content="center"
        px="1.5"
        py="0.5"
        :bg="getBadgeBgColor"
        rounded="full"
        color="white"
        font-size="md"
        font-family="body"
        font-weight="regular"
        letterSpacing="normal"
        height="5"
        :width="isLoading ? '40px' : 'auto'"
      >
        {{ isLoading ? "" : badge }}
      </mp-box>

      <mp-box v-if="hasSlot('top-right-content')">
        <slot name="top-right-content" />
      </mp-box>
    </mp-flex>

    <!-- Bottom Content -->
    <mp-box
      :id="`${getId}-bottom-content`"
      position="relative"
      bg="white"
      rounded-bottom="md"
      width="100%"
    >
      <mp-flex
        :visibility="isLoading ? 'hidden' : 'visible'"
        flex-direction="column"
        px="3"
        py="2"
      >
        <mp-text color="gray.600" font-size="sm" line-height="sm">
          {{ caption }}
        </mp-text>
        <mp-heading
          as="h2"
          font-size="xl"
          font-weight="semibold"
          white-space="normal"
          overflow-wrap="break-word"
          :width="`calc(100% - ${bottomRightContentWidth}px)`"
        >
          {{ amount }}
        </mp-heading>

        <mp-box
          v-if="isFilter || hasSlot('bottom-right-content')"
          position="absolute"
          top="5"
          right="3"
          :id="`${getId}-bottom-right-content`"
        >
          <mp-box v-if="isFilter">
            <mp-tooltip label="Filter" position="bottom">
              <mp-icon
                name="filter"
                :variant="isActive ? 'duotone' : 'outline'"
                transition="all 0.2s ease"
                :opacity="isActive ? '100' : '0'"
                :transform="isActive ? 'scale(1)' : 'scale(.5)'"
                :_groupHover="{ opacity: '100', transform: 'scale(1)' }"
              />
            </mp-tooltip>
          </mp-box>

          <slot v-else name="bottom-right-content" />
        </mp-box>
      </mp-flex>

      <mp-box
        v-if="isLoading"
        position="absolute"
        top="0"
        w="full"
        h="full"
        display="inline-flex"
        align-items="center"
        justify-content="center"
      >
        <mp-spinner />
      </mp-box>
    </mp-box>
  </mp-flex>
</template>

<script>
import {
  MpFlex,
  MpBox,
  MpHeading,
  MpText,
  MpIcon,
  MpTooltip,
  MpSpinner,
} from "@mekari/pixel";

export default {
  name: "JSummaryBox",
  components: {
    MpFlex,
    MpBox,
    MpHeading,
    MpText,
    MpIcon,
    MpTooltip,
    MpSpinner,
  },
  props: {
    as: { type: String, default: "div" },
    id: [String, Number],
    isLoading: Boolean,
    variant: [String, Number],
    label: { type: [String, Number], default: "Label" },
    labelSrc: String,
    badge: [String, Number],
    caption: { type: [String, Number], default: "Total" },
    amount: { type: [String, Number], default: 0 },
    isFilter: Boolean,
    isActive: Boolean,
    isHoverable: Boolean,
  },
  data() {
    return {
      isLabelEllipsis: false,
      bottomRightContentWidth: 0,
    };
  },
  computed: {
    getIsHoverable() {
      if (this.isHoverable || this.isFilter) return true;

      return false;
    },
    getId() {
      if (this.id) return this.id;

      return this.useId(5);
    },

    // Styles
    getBorderColor() {
      const styles = {
        orange: this.isActive ? "orange.700" : "orange.400",
        green: this.isActive ? "green.700" : "green.400",
        red: this.isActive ? "red.700" : "red.400",
        blue: this.isActive ? "blue.700" : "blue.400",
        gray: this.isActive ? "gray.400" : "gray.100",
      };

      return styles[this.variant] || "gray.100";
    },
    getHoverStyle() {
      const styles = {
        orange: "orange.700",
        green: "green.700",
        red: "red.700",
        blue: "blue.700",
        gray: "gray.400",
      };

      return {
        borderColor: styles[this.variant] || "gray.100",
        boxShadow: "lg",
      };
    },
    getTopContentBgColor() {
      if (this.variant === "orange") return "orange.50";
      if (this.variant === "green") return "green.50";
      if (this.variant === "red") return "red.50";
      if (this.variant === "blue") return "blue.100";
      if (this.variant === "gray") return "gray.50";

      return "gray.50";
    },
    getBadgeBgColor() {
      if (this.variant === "orange") return "orange.700";
      if (this.variant === "green") return "green.700";
      if (this.variant === "red") return "red.700";
      if (this.variant === "blue") return "blue.700";
      if (this.variant === "gray") return "stone.400";

      return "gray.50";
    },
  },
  mounted() {
    if (!this.labelSrc) {
      this.handleShowTooltipInLabel();
    }

    if (this.isFilter || this.hasSlot("bottom-right-content")) {
      this.handleBottomRightContentWidth();
    }
  },
  methods: {
    // Node Calculation
    handleShowTooltipInLabel() {
      const summaryBoxLabelNode = document.getElementById(
        `${this.getId}-top-content-label`
      );
      if (summaryBoxLabelNode) {
        this.isLabelEllipsis =
          summaryBoxLabelNode.scrollHeight > summaryBoxLabelNode.clientHeight;
      }
    },
    handleBottomRightContentWidth() {
      const bottomRightContentNode = document.getElementById(
        `${this.getId}-bottom-right-content`
      );
      if (bottomRightContentNode) {
        this.bottomRightContentWidth = bottomRightContentNode.clientWidth;
      }
    },

    // Utils
    hasSlot(name) {
      return !!(this.$slots[name] || this.$scopedSlots[name]);
    },
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
