<template>
  <mp-flex gap="4" padding="6">
    <mp-flex>
      <mp-form-control margin-bottom="5">
        <mp-form-label> Additional period </mp-form-label>
        <mp-input-group>
          <mp-input type="number" />
          <mp-input-left-addon>
            <mp-box>
              <mp-popover use-portal>
                <mp-popover-trigger>
                  <mp-flex
                    as="button"
                    padding-x="2"
                    gap="2"
                    align-items="center"
                  >
                    <mp-text font-weight="bold">Months</mp-text>
                    <mp-icon name="chevrons-down" size="sm" />
                  </mp-flex>
                </mp-popover-trigger>
                <mp-popover-content
                  width="100px"
                  background-color="white"
                  border-radius="md"
                  border-width="1px"
                  border-color="gray.400"
                  box-shadow="lg"
                >
                  <mp-popover-list>
                    <mp-popover-list-item is-active>
                      Months
                    </mp-popover-list-item>
                    <mp-popover-list-item>Days</mp-popover-list-item>
                  </mp-popover-list>
                </mp-popover-content>
              </mp-popover>
            </mp-box>
          </mp-input-left-addon>
        </mp-input-group>
      </mp-form-control>
    </mp-flex>
    <mp-flex>
      <mp-form-control margin-bottom="5">
        <mp-form-label> Additional period </mp-form-label>
        <mp-input-group>
          <mp-input type="number" />
          <mp-input-right-addon>
            <mp-box>
              <mp-popover use-portal>
                <mp-popover-trigger>
                  <mp-flex
                    as="button"
                    padding-x="2"
                    gap="2"
                    align-items="center"
                  >
                    <mp-text font-weight="bold">Months</mp-text>
                    <mp-icon name="chevrons-down" size="sm" />
                  </mp-flex>
                </mp-popover-trigger>
                <mp-popover-content
                  width="100px"
                  background-color="white"
                  border-radius="md"
                  border-width="1px"
                  border-color="gray.400"
                  box-shadow="lg"
                >
                  <mp-popover-list>
                    <mp-popover-list-item is-active>
                      Months
                    </mp-popover-list-item>
                    <mp-popover-list-item>Days</mp-popover-list-item>
                  </mp-popover-list>
                </mp-popover-content>
              </mp-popover>
            </mp-box>
          </mp-input-right-addon>
        </mp-input-group>
      </mp-form-control>
    </mp-flex>
  </mp-flex>
</template>

<script>
  import {
    MpBox,
    MpFlex,
    MpText,
    MpIcon,
    MpFormControl,
    MpFormLabel,
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
    name: "App",
    components: {
      MpBox,
      MpFlex,
      MpText,
      MpIcon,
      MpFormControl,
      MpFormLabel,
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
  };
</script>
