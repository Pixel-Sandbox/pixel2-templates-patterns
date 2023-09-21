<template>
  <mp-flex mb="5">
    <mp-popover :id="id" close-on-select>
      <mp-popover-trigger>
        <mp-input-group>
          <mp-input-left-addon :with-background="false">
            <mp-text font-weight="semibold" mt="0.5">{{ label }}:</mp-text>
          </mp-input-left-addon>
          <mp-input :value="inputValue" is-read-only />
          <mp-input-right-addon :with-background="false">
            <mp-icon name="chevrons-down" size="sm" />
          </mp-input-right-addon>
        </mp-input-group>
      </mp-popover-trigger>
      <mp-popover-content
        max-width="224px"
        bg="white"
        rounded="md"
        shadow="lg"
        border-width="1px"
        border-color="gray.400"
        max-height="300px"
        overflow-y="auto"
      >
        <mp-popover-list>
          <mp-popover-list-item
            v-for="(item, index) in options"
            :key="index"
            @click="handleSelectItem(item)"
          >
            {{ item }}
          </mp-popover-list-item>
        </mp-popover-list>
      </mp-popover-content>
    </mp-popover>
  </mp-flex>
</template>

<script>
import {
  MpFlex,
  MpText,
  MpIcon,
  MpInput,
  MpInputGroup,
  MpInputLeftAddon,
  MpInputRightAddon,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
} from "@mekari/pixel";

export default {
  name: "FilterPopover",
  components: {
    MpFlex,
    MpText,
    MpIcon,
    MpInput,
    MpInputGroup,
    MpInputLeftAddon,
    MpInputRightAddon,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
  },
  props: {
    id: {
      type: String,
      default: "popover-filter",
    },
    label: {
      type: String,
      default: "From",
    },
    value: {
      type: String,
      default: "Any",
    },
    options: [],
  },
  data() {
    return {
      inputValue: this.value,
    };
  },
  methods: {
    handleSelectItem(item) {
      this.inputValue = item;
      this.$emit("change", item);
    },
  },
};
</script>
