<template>
  <mp-flex
    position="absolute"
    bottom="0"
    z-index="1"
    width="calc(100% - 1px)"
    background="white"
    py="3"
    px="4"
    gap="2"
    border-top="1px solid"
    border-color="gray.100"
  >
    <mp-button-icon name="emoji" size="md" />
    <mp-button-icon name="attachment" size="md" />
    <mp-input-group>
      <mp-input
        :value="input"
        placeholder="Press shift + enter to add new line. Press “/” to select template."
        @input="handleInput"
      />
      <mp-input-right-addon v-if="input" :with-background="false">
        <mp-popover id="popover-input-smart-assist" placement="top">
          <mp-popover-trigger>
            <IconAsk :is-animate="true" style="cursor: pointer" />
          </mp-popover-trigger>
          <mp-popover-content
            width="280px"
            bg="white"
            rounded="md"
            shadow="lg"
            border-width="1px"
            border-color="gray.400"
          >
            <mp-popover-list>
              <mp-popover-list-item @click="handleAction('improve writing')">
                <mp-flex align-items="center">
                  <mp-icon name="magic" mr="2" />
                  Improve writing
                </mp-flex>
              </mp-popover-list-item>
              <mp-popover-list-item @click="handleAction('make it longer')">
                <mp-flex align-items="center">
                  <mp-icon name="text-editor-align-left" mr="2" />
                  Make it longer
                </mp-flex>
              </mp-popover-list-item>
              <mp-box width="full" px="3" pt="4" pb="1">
                <mp-text color="gray.400" text-align="left" font-size="sm">
                  Translate to
                </mp-text>
              </mp-box>
              <mp-popover-list-item @click="handleAction('english')">
                English
              </mp-popover-list-item>
            </mp-popover-list>
          </mp-popover-content>
        </mp-popover>
      </mp-input-right-addon>
    </mp-input-group>
    <mp-button-icon name="sent" size="md" :is-disabled="!input" />
  </mp-flex>
</template>

<script>
import {
  MpText,
  MpFlex,
  MpBox,
  MpIcon,
  MpButtonIcon,
  MpInputGroup,
  MpInput,
  MpInputRightAddon,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
} from "@mekari/pixel";

import IconAsk from "./IconAsk";

export default {
  name: "ChatInput",
  components: {
    MpText,
    MpFlex,
    MpBox,
    MpIcon,
    MpButtonIcon,
    MpInputGroup,
    MpInput,
    MpInputRightAddon,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
    IconAsk,
  },
  data() {
    return {
      input: "",
    };
  },
  methods: {
    handleInput(val) {
      this.input = val;
      this.$emit("input", val);
    },
    handleAction(val) {
      this.$emit("action", val);
    },
  },
};
</script>
