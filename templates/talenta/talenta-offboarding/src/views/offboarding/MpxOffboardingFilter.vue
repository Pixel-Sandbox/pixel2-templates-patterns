<template>
  <mp-box>
    <mp-flex justify-content="space-between" margin-bottom="5">
      <mp-flex gap="4" :display="['none', 'flex']">
        <mp-popover use-portal>
          <mp-popover-trigger>
            <mp-input-group>
              <mp-input-right-addon :with-background="false">
                <mp-icon name="chevrons-down" size="sm" />
              </mp-input-right-addon>
              <mp-input value="Filter" is-read-only width="200px" cursor="pointer" is-clearable />
            </mp-input-group>
          </mp-popover-trigger>
          <mp-popover-content
            max-width="56"
            background-color="white"
            border="1px solid"
            border-color="gray.400"
            border-radius="md"
            box-shadow="lg"
          >
            <mp-popover-list>
              <mp-box v-for="item in data" :key="item.id" width="full">
                <mp-popover v-if="item.items.length > 0" placement="right-start" trigger="hover">
                  <mp-popover-trigger>
                    <mp-popover-list-item is-arrow>
                      {{ item.name }}
                    </mp-popover-list-item>
                  </mp-popover-trigger>
                  <mp-popover-content
                    max-width="65"
                    margin-left="0.5"
                    background-color="white"
                    border="1px solid"
                    border-color="gray.400"
                    border-radius="md"
                    box-shadow="lg"
                    padding-top="3"
                    padding-bottom="2"
                    padding-x="3"
                  >
                    <mp-box v-if="item.is_search" margin-bottom="2">
                      <mp-input-group>
                        <mp-input-left-addon :with-background="false">
                          <mp-icon name="search" size="sm" />
                        </mp-input-left-addon>
                        <mp-input placeholder="Search..." />
                      </mp-input-group>
                    </mp-box>
                    <mp-stack spacing="1">
                      <mp-checkbox v-for="item_child in item.items" :key="item_child.id">
                        {{ item_child.name }}
                      </mp-checkbox>
                    </mp-stack>
                  </mp-popover-content>
                </mp-popover>
              </mp-box>
            </mp-popover-list>
          </mp-popover-content>
        </mp-popover>
      </mp-flex>

      <mp-box :display="['block', 'none']">
        <mp-button variant="outline" :padding-x="['2', '4']">
          <mp-icon name="filter" variant="duotone" :margin-right="[0, 2]" />
        </mp-button>
      </mp-box>

      <mp-flex gap="2" align-items="center">
        <mp-tooltip label="Guidebook" position="bottom">
          <mp-button-icon size="md" name="help" />
        </mp-tooltip>
        <mp-input-group>
          <mp-input-left-addon :with-background="false">
            <mp-icon name="search" size="sm" />
          </mp-input-left-addon>
          <mp-input placeholder="Search..." />
        </mp-input-group>
      </mp-flex>
    </mp-flex>
  </mp-box>
</template>

<script>
import {
  MpFlex,
  MpStack,
  MpBox,
  MpButton,
  MpButtonIcon,
  MpIcon,
  MpCheckbox,
  MpInput,
  MpInputGroup,
  MpInputLeftAddon,
  MpInputRightAddon,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
  MpTooltip,
} from '@mekari/pixel';

export default {
  name: 'MpxOffboardingFilter',
  components: {
    MpFlex,
    MpStack,
    MpBox,
    MpButton,
    MpButtonIcon,
    MpIcon,
    MpCheckbox,
    MpInput,
    MpInputGroup,
    MpInputLeftAddon,
    MpInputRightAddon,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
    MpTooltip,
  },
  props: {
    data: [Array],
  },
};
</script>
