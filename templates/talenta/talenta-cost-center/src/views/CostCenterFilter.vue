<template>
  <mp-box>
    <mp-box>
      <mp-banner variant="info" align-items="center">
        <mp-banner-icon />
        <mp-banner-description>
          <mp-text as="a" is-link>815</mp-text>
          employees are not assigned to any Cost Center.
        </mp-banner-description>
      </mp-banner>
    </mp-box>

    <mp-flex justify-content="space-between" margin-top="4" margin-bottom="5">
      <mp-flex gap="4">
        <mp-popover>
          <mp-popover-trigger>
            <mp-input-group>
              <mp-input-right-addon :with-background="false">
                <mp-icon name="chevrons-down" size="sm" />
              </mp-input-right-addon>
              <mp-input
                value="Filter"
                is-read-only
                width="200px"
                cursor="pointer"
              />
            </mp-input-group>
          </mp-popover-trigger>
          <mp-popover-content
            max-width="40"
            background-color="white"
            box-shadow="lg"
            border="1px solid"
            border-color="gray.400"
            border-radius="md"
          >
            <mp-popover-list>
              <mp-popover placement="right-start" trigger="hover">
                <mp-popover-trigger>
                  <mp-popover-list-item is-arrow>Status</mp-popover-list-item>
                </mp-popover-trigger>
                <mp-popover-content max-width="40">
                  <mp-box
                    background-color="white"
                    box-shadow="lg"
                    border="1px solid"
                    border-color="gray.400"
                    border-radius="md"
                    margin-left="0.5"
                    padding-top="3"
                    padding-bottom="2"
                    padding-x="3"
                  >
                    <mp-stack spacing="1">
                      <mp-checkbox name="status">Active</mp-checkbox>
                      <mp-checkbox name="status">Resign</mp-checkbox>
                    </mp-stack>
                  </mp-box>
                </mp-popover-content>
              </mp-popover>
              <mp-popover-list-item is-arrow>Branch</mp-popover-list-item>
              <mp-popover-list-item is-arrow>Organization</mp-popover-list-item>
            </mp-popover-list>
          </mp-popover-content>
        </mp-popover>
        <mp-popover>
          <mp-popover-trigger>
            <mp-input-group>
              <mp-input-right-addon :with-background="false">
                <mp-icon name="chevrons-down" size="sm" />
              </mp-input-right-addon>
              <mp-input
                value="All cost center"
                is-read-only
                width="200px"
                cursor="pointer"
              />
            </mp-input-group>
          </mp-popover-trigger>
          <mp-popover-content
            max-width="64"
            background-color="white"
            box-shadow="lg"
            border="1px solid"
            border-color="gray.400"
            border-radius="md"
            padding-top="3"
            padding-bottom="2"
            padding-x="3"
          >
            <mp-input-group margin-bottom="3">
              <mp-input-left-addon :with-background="false">
                <mp-icon name="search" size="sm" />
              </mp-input-left-addon>
              <mp-input placeholder="Search..." />
            </mp-input-group>
            <mp-stack spacing="1">
              <mp-checkbox name="cost-center">
                Select all cost center
              </mp-checkbox>
              <mp-checkbox name="cost-center">(Not yet set)</mp-checkbox>
              <mp-checkbox name="cost-center">1000001 - Sales</mp-checkbox>
            </mp-stack>
          </mp-popover-content>
        </mp-popover>
        <mp-select size="md" value="all-category" width="200px">
          <option value="all-category">All category</option>
          <option value="direct">Direct</option>
          <option value="in-direct">In-direct</option>
        </mp-select>
      </mp-flex>

      <mp-flex gap="2" align-items="center">
        <mp-tooltip label="Bulk update" position="bottom">
          <mp-button-icon size="md" name="edit" />
        </mp-tooltip>
        <mp-tooltip label="Guidebook" position="bottom">
          <mp-button-icon size="md" name="help" />
        </mp-tooltip>
        <mp-input-group>
          <mp-input-left-addon :with-background="false">
            <mp-icon name="search" size="sm" />
          </mp-input-left-addon>
          <mp-input placeholder="Search employee..." />
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
  MpBanner,
  MpBannerIcon,
  MpBannerDescription,
  MpText,
  MpButtonIcon,
  MpSelect,
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
} from "@mekari/pixel";

export default {
  name: "CostCenterFilter",
  components: {
    MpFlex,
    MpStack,
    MpBox,
    MpBanner,
    MpBannerIcon,
    MpBannerDescription,
    MpText,
    MpButtonIcon,
    MpSelect,
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
};
</script>