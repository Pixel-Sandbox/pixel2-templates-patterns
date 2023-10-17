<template>
  <mp-flex justify-content="flex-start" padding="6" height="100vh">
    <mp-box width="260px">
      <mp-popover initial-focus-ref="#input-general-filter">
        <mp-popover-trigger>
          <mp-input-group>
            <mp-input-right-addon :with-background="false">
              <mp-icon name="chevrons-down" size="sm" />
            </mp-input-right-addon>
            <mp-input
              id="input-general-filter"
              value="Filter"
              is-read-only
              cursor="pointer"
            />
          </mp-input-group>
        </mp-popover-trigger>
        <mp-popover-content
          max-width="475px"
          background-color="white"
          box-shadow="lg"
          border="1px solid"
          border-color="gray.400"
          border-radius="md"
        >
          <mp-box margin-top="3" margin-bottom="2" padding-x="3" width="full">
            <mp-input-group>
              <mp-input-left-addon :with-background="false">
                <mp-icon name="search" size="sm" />
              </mp-input-left-addon>
              <mp-input placeholder="Search..." is-clearable />
            </mp-input-group>
          </mp-box>

          <mp-popover-list
            border-radius="md"
            overflow-y="auto"
            max-height="344px"
            padding-top="0"
          >
            <mp-popover-list-item padding-y="1">
              <mp-checkbox>All organization</mp-checkbox>
            </mp-popover-list-item>
            <PopoverTreeOption :options="options" />
          </mp-popover-list>
        </mp-popover-content>
      </mp-popover>
    </mp-box>
  </mp-flex>
</template>

<script>
  import {
    MpBox,
    MpFlex,
    MpIcon,
    MpInput,
    MpInputGroup,
    MpInputRightAddon,
    MpInputLeftAddon,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
    MpCheckbox,
  } from "@mekari/pixel";
  import PopoverTreeOption from "./components/PopoverTreeOption";

  export default {
    name: "App",
    components: {
      MpBox,
      MpFlex,
      MpIcon,
      MpInput,
      MpInputGroup,
      MpInputRightAddon,
      MpInputLeftAddon,
      MpPopover,
      MpPopoverTrigger,
      MpPopoverContent,
      MpPopoverList,
      MpPopoverListItem,
      MpCheckbox,
      PopoverTreeOption,
    },
    data: function () {
      return {
        options: [
          {
            id: "2dyCLiBc",
            label: "Business support",
            spacing: 0,
            child: [
              {
                id: "riKWvurl",
                label: "Finance & Accounting",
                spacing: 18,
                child: null,
              },
              {
                id: "JYO6PQKI",
                label: "Tax",
                spacing: 18,
                child: null,
              },
            ],
          },
          {
            id: "uBs7XnAR",
            label: "Operation",
            spacing: 0,
            child: [
              {
                id: "Z3j9aBeo",
                label: "Quality",
                spacing: 18,
                child: [
                  {
                    id: "sxCt5MBz",
                    label: "Quality Assurance",
                    spacing: 36,
                    child: null,
                  },
                  {
                    id: "h0FgfNvs",
                    label: "Quality Manager",
                    spacing: 36,
                    child: [
                      {
                        id: "48V1aW5Q",
                        label: "Business Quality",
                        spacing: 54,
                        child: null,
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: "4PwdFHEm",
            label: "Production",
            spacing: 0,
            child: [
              {
                id: "L9iciL1s",
                label: "Product Manager",
                spacing: 18,
                child: null,
              },
            ],
          },
        ],
      };
    },
  };
</script>