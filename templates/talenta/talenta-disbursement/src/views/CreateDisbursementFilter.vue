<template>
  <mp-box>
    <mp-flex gap="4" justify-content="space-between" margin-bottom="5">
      <mp-flex gap="4">
        <mp-box>
          <mp-popover use-portal>
            <mp-popover-trigger>
              <mp-input-group>
                <mp-input-right-addon :with-background="false">
                  <mp-icon name="chevrons-down" size="sm" />
                </mp-input-right-addon>
                <mp-input
                  value="All reimbursement name"
                  is-read-only
                  width="250px"
                  cursor="pointer"
                />
              </mp-input-group>
            </mp-popover-trigger>
            <mp-popover-content
              max-width="250px"
              background-color="white"
              border="1px solid"
              border-color="gray.400"
              border-radius="md"
              box-shadow="lg"
            >
              <mp-popover-list>
                <mp-popover-list-item>Maternity</mp-popover-list-item>
                <mp-popover-list-item>Medical outpatient</mp-popover-list-item>
                <mp-popover-list-item>Transport claim</mp-popover-list-item>
                <mp-popover-list-item>Event claim</mp-popover-list-item>
                <mp-popover-list-item>Entertainment claim</mp-popover-list-item>
              </mp-popover-list>
            </mp-popover-content>
          </mp-popover>
        </mp-box>
        <mp-box>
          <mp-popover>
            <mp-popover-trigger>
              <mp-input-group>
                <mp-input-right-addon :with-background="false">
                  <mp-icon name="chevrons-down" size="sm" />
                </mp-input-right-addon>
                <mp-input value="All branch" is-read-only cursor="pointer" />
              </mp-input-group>
            </mp-popover-trigger>
            <mp-popover-content
              max-width="212px"
              background-color="white"
              border="1px solid"
              border-color="gray.400"
              border-radius="md"
              box-shadow="lg"
            >
              <mp-box padding-x="3" padding-top="3">
                <mp-input-group>
                  <mp-input-left-addon :with-background="false">
                    <mp-icon name="search" size="sm" />
                  </mp-input-left-addon>
                  <mp-input placeholder="Search..." />
                </mp-input-group>
              </mp-box>
              <mp-popover-list>
                <mp-popover-list-item padding-y="1">
                  <mp-checkbox> Head Office </mp-checkbox>
                </mp-popover-list-item>
                <mp-popover-list-item padding-y="1">
                  <mp-checkbox> Surabaya </mp-checkbox>
                </mp-popover-list-item>
                <mp-popover-list-item padding-y="1">
                  <mp-checkbox> Bandung </mp-checkbox>
                </mp-popover-list-item>
                <mp-popover-list-item padding-y="1">
                  <mp-checkbox> Bali </mp-checkbox>
                </mp-popover-list-item>
                <mp-popover-list-item padding-y="1">
                  <mp-checkbox> Yogyakarta </mp-checkbox>
                </mp-popover-list-item>
                <mp-popover-list-item padding-y="1">
                  <mp-checkbox> Kalimantan </mp-checkbox>
                </mp-popover-list-item>
              </mp-popover-list>
            </mp-popover-content>
          </mp-popover>
        </mp-box>
        <mp-box>
          <mp-popover>
            <mp-popover-trigger>
              <mp-input-group>
                <mp-input-right-addon :with-background="false">
                  <mp-icon name="chevrons-down" size="sm" />
                </mp-input-right-addon>
                <mp-input
                  value="All organization"
                  is-read-only
                  cursor="pointer"
                />
              </mp-input-group>
            </mp-popover-trigger>
            <mp-popover-content
              max-width="212px"
              background-color="white"
              border="1px solid"
              border-color="gray.400"
              border-radius="md"
              box-shadow="lg"
            >
              <mp-box padding-x="3" padding-top="3">
                <mp-input-group>
                  <mp-input-left-addon :with-background="false">
                    <mp-icon name="search" size="sm" />
                  </mp-input-left-addon>
                  <mp-input placeholder="Search..." />
                </mp-input-group>
              </mp-box>
              <mp-popover-list>
                <mp-popover-list-item padding-y="1">
                  <mp-checkbox> People Operations </mp-checkbox>
                </mp-popover-list-item>
                <mp-popover-list-item padding-y="1">
                  <mp-checkbox> Finance </mp-checkbox>
                </mp-popover-list-item>
                <mp-popover-list-item padding-y="1">
                  <mp-checkbox> Technology </mp-checkbox>
                </mp-popover-list-item>
                <mp-popover-list-item padding-y="1">
                  <mp-checkbox> BOD </mp-checkbox>
                </mp-popover-list-item>
                <mp-popover-list-item padding-y="1">
                  <mp-checkbox> Product Design </mp-checkbox>
                </mp-popover-list-item>
              </mp-popover-list>
            </mp-popover-content>
          </mp-popover>
        </mp-box>
      </mp-flex>

      <mp-flex gap="2" :flex="['1 0 auto', '0 0 auto']" align-items="center">
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
  MpBox,
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
} from "@mekari/pixel";

export default {
  name: "CreateDisbursementFilter",
  components: {
    MpFlex,
    MpBox,
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
  },
};
</script>