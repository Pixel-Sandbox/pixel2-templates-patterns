<template>
  <mp-flex p="6" justify="end">
    <mp-flex gap="2">
      <mp-button variant="ghost"> Batalkan </mp-button>

      <mp-flex>
        <mp-button variant="solid" border-right-radius="0">
          Split Button
        </mp-button>

        <mp-popover id="popover-01" placement="bottom-end">
          <mp-popover-trigger>
            <mp-button
              border-left="1px"
              border-left-color="#314AD8"
              border-left-radius="0"
              variant="solid"
              right-icon="caret-down"
            >
            </mp-button>
          </mp-popover-trigger>
          <mp-popover-content
            max-width="auto"
            width="auto"
            bg="white"
            rounded="md"
            shadow="lg"
            border-width="1px"
            border-color="gray.400"
          >
            <mp-popover-list>
              <mp-popover-list-item>Action list 1</mp-popover-list-item>
              <mp-popover-list-item>Action list 2</mp-popover-list-item>
              <mp-popover-list-item>Action list 3</mp-popover-list-item>
            </mp-popover-list>
          </mp-popover-content>
        </mp-popover>
      </mp-flex>
    </mp-flex>
  </mp-flex>
</template>

<script>
import {
  MpFlex,
  MpButton,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
} from "@mekari/pixel";

export default {
  name: "InputSize",
  components: {
    MpFlex,
    MpButton,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
  },
  data() {
    return {
      number: 1,
    };
  },
  methods: {
    handleIncrease() {
      this.number += 1;
    },
    hanldeDecrease() {
      this.number -= 1;
    },
  },
};
</script>
