<template>
  <mp-box>
    <mp-box bg="gray.25" px="5" py="4" mb="3" border-radius="md">
      <mp-accordion allow-toggle>
        <mp-accordion-item border-bottom-width="0!important">
          <mp-accordion-header :is-clickable="false">
            <mp-box flex="1" font-weight="regular" text-align="left">
              <mp-segmented-control
                bg="white"
                default-value="option-1"
                :data="[
                  {
                    label: 'Favorites',
                    value: 'option-1',
                    icon: 'today',
                  },
                  {
                    label: 'Recently viewed',
                    value: 'option-2',
                    icon: 'time',
                  },
                ]"
              />
            </mp-box>
            <mp-accordion-icon />
          </mp-accordion-header>
          <mp-accordion-panel pr="0" pt="2">
            <mp-box
              width="1080px"
              height="110px"
              overflow-x="scroll"
              white-space="nowrap"
            >
              <mp-flex gap="4">
                <mp-box
                  px="4"
                  py="3"
                  min-width="260px"
                  border="1px solid"
                  border-color="gray.100"
                  border-radius="md"
                  bg="white"
                >
                  <mp-flex justify="space-between" align="center" mb="2">
                    <mp-text
                      font-weight="semibold"
                      color="gray.400"
                      font-size="sm"
                    >
                      Salary
                    </mp-text>
                    <mp-icon
                      name="today"
                      variant="fill"
                      color="blue.400"
                      size="sm"
                    />
                  </mp-flex>
                  <mp-text font-weight="semibold"> Summary report </mp-text>
                  <mp-text color="gray.600" font-size="sm">
                    December 2023
                  </mp-text>
                </mp-box>
                <mp-box
                  px="4"
                  py="3"
                  min-width="260px"
                  border="1px solid"
                  border-color="gray.100"
                  border-radius="md"
                  bg="white"
                >
                  <mp-flex justify="space-between" align="center" mb="2">
                    <mp-text
                      font-weight="semibold"
                      color="gray.400"
                      font-size="sm"
                    >
                      Tax
                    </mp-text>
                    <mp-icon
                      name="today"
                      variant="fill"
                      color="blue.400"
                      size="sm"
                    />
                  </mp-flex>
                  <mp-text font-weight="semibold"> Tax detail report </mp-text>
                  <mp-text color="gray.600" font-size="sm">
                    December 2023
                  </mp-text>
                </mp-box>
                <mp-box
                  px="4"
                  py="3"
                  min-width="260px"
                  border="1px solid"
                  border-color="gray.100"
                  border-radius="md"
                  bg="white"
                >
                  <mp-flex justify="space-between" align="center" mb="2">
                    <mp-text
                      font-weight="semibold"
                      color="gray.400"
                      font-size="sm"
                    >
                      BPJS
                    </mp-text>
                    <mp-icon
                      name="today"
                      variant="fill"
                      color="blue.400"
                      size="sm"
                    />
                  </mp-flex>
                  <mp-text font-weight="semibold">
                    BPJS Kesehatan report
                  </mp-text>
                  <mp-text color="gray.600" font-size="sm">
                    December 2023
                  </mp-text>
                </mp-box>
                <mp-box
                  px="4"
                  py="3"
                  min-width="260px"
                  border="1px solid"
                  border-color="gray.100"
                  border-radius="md"
                  bg="white"
                >
                  <mp-flex justify="space-between" align="center" mb="2">
                    <mp-text
                      font-weight="semibold"
                      color="gray.400"
                      font-size="sm"
                    >
                      BPJS
                    </mp-text>
                    <mp-icon
                      name="today"
                      variant="fill"
                      color="blue.400"
                      size="sm"
                    />
                  </mp-flex>
                  <mp-text font-weight="semibold">
                    BPJS Ketenagakerjaan report
                  </mp-text>
                  <mp-text color="gray.600" font-size="sm">
                    December 2023
                  </mp-text>
                </mp-box>
                <mp-box
                  px="4"
                  py="3"
                  min-width="260px"
                  border="1px solid"
                  border-color="gray.100"
                  border-radius="md"
                  bg="white"
                >
                  <mp-flex justify="space-between" align="center" mb="2">
                    <mp-text
                      font-weight="semibold"
                      color="gray.400"
                      font-size="sm"
                    >
                      BPJS
                    </mp-text>
                    <mp-icon
                      name="today"
                      variant="fill"
                      color="blue.400"
                      size="sm"
                    />
                  </mp-flex>
                  <mp-text font-weight="semibold">
                    BPJS Kesehatan report
                  </mp-text>
                  <mp-text color="gray.600" font-size="sm">
                    December 2023
                  </mp-text>
                </mp-box>
              </mp-flex>
            </mp-box>
          </mp-accordion-panel>
        </mp-accordion-item>
      </mp-accordion>
    </mp-box>

    <mp-accordion allow-toggle>
      <mp-accordion-item border-bottom-width="0!important">
        <mp-accordion-header :is-clickable="false">
          <mp-box flex="1" text-align="left">
            <mp-flex gap="3" align="center">
              <mp-heading as="h2" font-size="xl"> All reports </mp-heading>
              <mp-accordion-icon />
            </mp-flex>
          </mp-box>
          <mp-toggle font-weight="regular" is-checked>
            Show descriptions
          </mp-toggle>
        </mp-accordion-header>
        <mp-accordion-panel pr="0" pt="2" pb="6">
          <mp-accordion :index="[0, 1]" allow-toggle allow-multiple>
            <mp-accordion-item>
              <mp-accordion-header :is-clickable="false">
                <mp-box flex="1" text-align="left">
                  <mp-heading as="h2" font-size="xl"> Salary </mp-heading>
                </mp-box>
                <mp-accordion-icon />
              </mp-accordion-header>
              <mp-accordion-panel pr="0" pt="2" pb="6">
                <mp-flex gap="6">
                  <mp-box
                    px="4"
                    py="3"
                    w="362px"
                    border="1px solid"
                    border-color="gray.100"
                    border-radius="md"
                  >
                    <mp-flex gap="2" justify="space-between" align="center">
                      <mp-icon name="today" size="sm" />
                      <mp-box>
                        <mp-text> Salary report </mp-text>
                        <mp-text color="gray.600" font-size="sm">
                          Detailed employee salary breakdown such as basic
                          income, allowances, deductions and etc.
                        </mp-text>
                      </mp-box>
                      <mp-popover id="popover-title">
                        <mp-popover-trigger>
                          <mp-button-icon name="menu-kebab" size="sm" />
                        </mp-popover-trigger>
                        <mp-popover-content
                          max-width="173px"
                          bg="white"
                          rounded="md"
                          shadow="lg"
                          border-width="1px"
                          border-color="gray.400"
                        >
                          <mp-popover-list>
                            <mp-popover-list-item>
                              View report
                            </mp-popover-list-item>
                            <mp-popover-list-item>
                              Download report
                            </mp-popover-list-item>
                          </mp-popover-list>
                        </mp-popover-content>
                      </mp-popover>
                    </mp-flex>
                  </mp-box>
                  <mp-box
                    px="4"
                    py="3"
                    w="362px"
                    border="1px solid"
                    border-color="gray.100"
                    border-radius="md"
                  >
                    <mp-flex gap="2" justify="space-between" align="center">
                      <mp-icon
                        name="today"
                        variant="fill"
                        color="blue.400"
                        size="sm"
                      />
                      <mp-box>
                        <mp-text> THR report </mp-text>
                        <mp-text color="gray.600" font-size="sm">
                          Detailed breakdown of employee components impacting
                          THR payments.
                        </mp-text>
                      </mp-box>
                      <mp-popover id="popover-title">
                        <mp-popover-trigger>
                          <mp-button-icon name="menu-kebab" size="sm" />
                        </mp-popover-trigger>
                        <mp-popover-content
                          max-width="173px"
                          bg="white"
                          rounded="md"
                          shadow="lg"
                          border-width="1px"
                          border-color="gray.400"
                        >
                          <mp-popover-list>
                            <mp-popover-list-item>
                              View report
                            </mp-popover-list-item>
                            <mp-popover-list-item>
                              Download report
                            </mp-popover-list-item>
                          </mp-popover-list>
                        </mp-popover-content>
                      </mp-popover>
                    </mp-flex>
                  </mp-box>
                </mp-flex>
              </mp-accordion-panel>
            </mp-accordion-item>
            <mp-accordion-item>
              <mp-accordion-header :is-clickable="false">
                <mp-box flex="1" text-align="left">
                  <mp-heading as="h2" font-size="xl"> Tax </mp-heading>
                </mp-box>
                <mp-accordion-icon />
              </mp-accordion-header>
              <mp-accordion-panel pr="0" pt="2" pb="6">
                <mp-flex gap="6">
                  <mp-box
                    p="6"
                    w="full"
                    border="1px solid"
                    border-color="gray.100"
                    border-radius="md"
                    mb="6"
                  >
                    <mp-flex gap="2" justify="space-between" align="center">
                      <mp-box>
                        <mp-heading as="h3" font-size="lg">
                          Tax payment date setup
                        </mp-heading>
                        <mp-text color="gray.600" font-size="sm">
                          Setting up the tax payment date allows you to generate
                          a date that will be applied to the tax report.
                          <mp-text display="inline" font-size="sm" is-link>
                            Learn more
                          </mp-text>
                        </mp-text>
                      </mp-box>
                      <mp-button variant="outline">
                        Set tax payment date
                      </mp-button>
                    </mp-flex>
                  </mp-box>
                </mp-flex>
                <mp-flex gap="6">
                  <mp-box
                    px="4"
                    py="3"
                    w="362px"
                    border="1px solid"
                    border-color="gray.100"
                    border-radius="md"
                  >
                    <mp-flex gap="2" justify="space-between" align="center">
                      <mp-icon name="today" size="sm" />
                      <mp-box>
                        <mp-text> Tax detail report </mp-text>
                        <mp-text color="gray.600" font-size="sm">
                          Detailed employee salary breakdown such as basic
                          income, allowances, deductions and etc.
                        </mp-text>
                      </mp-box>
                      <mp-popover id="popover-title">
                        <mp-popover-trigger>
                          <mp-button-icon name="menu-kebab" size="sm" />
                        </mp-popover-trigger>
                        <mp-popover-content
                          max-width="173px"
                          bg="white"
                          rounded="md"
                          shadow="lg"
                          border-width="1px"
                          border-color="gray.400"
                        >
                          <mp-popover-list>
                            <mp-popover-list-item>
                              View report
                            </mp-popover-list-item>
                            <mp-popover-list-item>
                              Download report
                            </mp-popover-list-item>
                          </mp-popover-list>
                        </mp-popover-content>
                      </mp-popover>
                    </mp-flex>
                  </mp-box>
                  <mp-box
                    px="4"
                    py="3"
                    w="362px"
                    border="1px solid"
                    border-color="gray.100"
                    border-radius="md"
                  >
                    <mp-flex gap="2" justify="space-between" align="center">
                      <mp-icon
                        name="today"
                        variant="fill"
                        color="blue.400"
                        size="sm"
                      />
                      <mp-box>
                        <mp-text> Tax payment schedule report </mp-text>
                        <mp-text color="gray.600" font-size="sm">
                          Get comprehensive overview of schedule detailing tax
                          payments.
                        </mp-text>
                      </mp-box>
                      <mp-popover id="popover-title">
                        <mp-popover-trigger>
                          <mp-button-icon name="menu-kebab" size="sm" />
                        </mp-popover-trigger>
                        <mp-popover-content
                          max-width="173px"
                          bg="white"
                          rounded="md"
                          shadow="lg"
                          border-width="1px"
                          border-color="gray.400"
                        >
                          <mp-popover-list>
                            <mp-popover-list-item>
                              View report
                            </mp-popover-list-item>
                            <mp-popover-list-item>
                              Download report
                            </mp-popover-list-item>
                          </mp-popover-list>
                        </mp-popover-content>
                      </mp-popover>
                    </mp-flex>
                  </mp-box>
                </mp-flex>
              </mp-accordion-panel>
            </mp-accordion-item>
          </mp-accordion>
        </mp-accordion-panel>
      </mp-accordion-item>
    </mp-accordion>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpText,
  MpHeading,
  MpIcon,
  MpToggle,
  MpButton,
  MpButtonIcon,
  MpAccordion,
  MpAccordionItem,
  MpAccordionHeader,
  MpAccordionIcon,
  MpAccordionPanel,
  MpSegmentedControl,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
} from "@mekari/pixel";

export default {
  name: "PayrollReportContent",
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpHeading,
    MpIcon,
    MpToggle,
    MpButton,
    MpButtonIcon,
    MpAccordion,
    MpAccordionItem,
    MpAccordionHeader,
    MpAccordionIcon,
    MpAccordionPanel,
    MpSegmentedControl,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
  },
  data: function () {
    return {};
  },
};
</script>