<template>
  <mp-box>
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 60px)">
      <Sidebar is-alternate is-custom />
      <mp-box
        as="section"
        data-id="content"
        width="100%"
        height="calc(100vh - 60px)"
        overflow-y="auto"
        background-color="background"
      >
        <mp-flex
          justify="space-between"
          align-items="center"
          padding-x="6"
          padding-y="1.125rem"
        >
          <mp-box>
            <mp-flex gap="2">
              <mp-text font-size="sm" is-link>Programs</mp-text>
              <mp-text font-size="sm">/</mp-text>
              <mp-text font-size="sm" is-link>Jurnal reseller program</mp-text>
            </mp-flex>
            <mp-heading as="h1" font-size="2xl" font-weight="bold" color="dark">
              PT Indo Sejahtera
            </mp-heading>
          </mp-box>
        </mp-flex>
        <mp-box
          min-height="calc(100vh - 132px)"
          border-top-width="1px"
          border-left-width="1px"
          border-top-left-radius="md"
          border-color="gray.100"
          background-color="white"
          padding="6"
        >
          <mp-flex gap="6">
            <mp-box width="65%">
              <mp-heading as="h2" font-size="xl" margin-bottom="5">
                Insights
              </mp-heading>

              <mp-flex>
                <mp-box
                  display="inline-flex"
                  flex="1 0 auto"
                  padding-right="4"
                  padding-y="3"
                  border-radius="md"
                >
                  <mp-flex flex-direction="column">
                    <mp-flex justify-content="space-between">
                      <mp-flex align-items="center">
                        <mp-text
                          color="gray.600"
                          font-size="md"
                          line-height="md"
                          text-align="left"
                        >
                          Total spent subscription
                        </mp-text>
                      </mp-flex>
                    </mp-flex>
                    <mp-flex align-items="center">
                      <mp-heading as="h2" color="dark" font-size="xl">
                        Rp82.000.000
                      </mp-heading>
                    </mp-flex>
                  </mp-flex>
                </mp-box>
                <mp-divider orientation="vertical" margin-x="2" />
                <mp-box
                  display="inline-flex"
                  flex="1 0 auto"
                  padding-x="4"
                  padding-y="3"
                  border-radius="md"
                >
                  <mp-flex flex-direction="column">
                    <mp-flex justify-content="space-between">
                      <mp-flex align-items="center">
                        <mp-text
                          color="gray.600"
                          font-size="md"
                          line-height="md"
                          text-align="left"
                        >
                          Total gross commission
                        </mp-text>
                      </mp-flex>
                    </mp-flex>
                    <mp-flex align-items="center">
                      <mp-heading as="h2" color="dark" font-size="xl">
                        Rp46.500.000
                      </mp-heading>
                    </mp-flex>
                  </mp-flex>
                </mp-box>
                <mp-divider orientation="vertical" margin-x="2" />
                <mp-box
                  display="inline-flex"
                  flex="1 0 auto"
                  padding-left="4"
                  padding-y="3"
                  border-radius="md"
                >
                  <mp-flex flex-direction="column">
                    <mp-flex justify-content="space-between">
                      <mp-flex align-items="center">
                        <mp-text
                          color="gray.600"
                          font-size="md"
                          line-height="md"
                          text-align="left"
                        >
                          Total net commission
                        </mp-text>
                      </mp-flex>
                    </mp-flex>
                    <mp-flex align-items="center">
                      <mp-heading as="h2" color="dark" font-size="xl">
                        Rp43.200.000
                      </mp-heading>
                    </mp-flex>
                  </mp-flex>
                </mp-box>
              </mp-flex>

              <mp-divider orientation="horizontal" margin-y="6" />

              <mp-heading as="h2" font-size="xl" margin-bottom="5">
                Detail information
              </mp-heading>

              <mp-flex>
                <mp-flex flex="3 0 0%" padding-y="2">
                  <mp-text color="gray.600">Company name</mp-text>
                </mp-flex>
                <mp-flex flex="4 0 0%" padding-y="2">
                  <mp-text>PT Indo Sejatera</mp-text>
                </mp-flex>
              </mp-flex>
              <mp-flex>
                <mp-flex flex="3 0 0%" padding-y="2">
                  <mp-text color="gray.600">PIC name</mp-text>
                </mp-flex>
                <mp-flex flex="4 0 0%" padding-y="2">
                  <mp-text>Rizal Chandra</mp-text>
                </mp-flex>
              </mp-flex>
              <mp-flex>
                <mp-flex flex="3 0 0%" padding-y="2">
                  <mp-text color="gray.600">PIC email</mp-text>
                </mp-flex>
                <mp-flex flex="4 0 0%" padding-y="2">
                  <mp-text>rizal@flora.com</mp-text>
                </mp-flex>
              </mp-flex>
              <mp-flex>
                <mp-flex flex="3 0 0%" padding-y="2">
                  <mp-text color="gray.600">PIC phone number</mp-text>
                </mp-flex>
                <mp-flex flex="4 0 0%" padding-y="2">
                  <mp-text>082123313333</mp-text>
                </mp-flex>
              </mp-flex>
              <mp-flex>
                <mp-flex flex="3 0 0%" padding-y="2">
                  <mp-text color="gray.600">Address</mp-text>
                </mp-flex>
                <mp-flex flex="4 0 0%" padding-y="2">
                  <mp-text
                    >Jl Kebayoran Indah No.46, Jakarta Selatan, DKI Jakarta.
                    4201</mp-text
                  >
                </mp-flex>
              </mp-flex>
              <mp-flex>
                <mp-flex flex="3 0 0%" padding-y="2">
                  <mp-text color="gray.600">Total employee</mp-text>
                </mp-flex>
                <mp-flex flex="4 0 0%" padding-y="2">
                  <mp-text>1.000</mp-text>
                </mp-flex>
              </mp-flex>
              <mp-flex>
                <mp-flex flex="3 0 0%" padding-y="2">
                  <mp-text color="gray.600">Website</mp-text>
                </mp-flex>
                <mp-flex flex="4 0 0%" padding-y="2">
                  <mp-text>Indosejatera.com</mp-text>
                </mp-flex>
              </mp-flex>

              <mp-divider orientation="horizontal" margin-y="6" />

              <mp-heading as="h2" font-size="xl" margin-bottom="5">
                Subscription info
              </mp-heading>

              <mp-flex>
                <mp-flex flex="3 0 0%" padding-y="2">
                  <mp-text color="gray.600">Status</mp-text>
                </mp-flex>
                <mp-flex flex="4 0 0%" padding-y="2">
                  <mp-badge variant="subtle" variant-color="green">
                    Active
                  </mp-badge>
                </mp-flex>
              </mp-flex>
              <mp-flex>
                <mp-flex flex="3 0 0%" padding-y="2">
                  <mp-text color="gray.600">Application</mp-text>
                </mp-flex>
                <mp-flex flex="4 0 0%" padding-y="2">
                  <mp-icon name="jurnal-brand" size="sm" margin-right="2" />
                  <mp-text>Jurnal</mp-text>
                </mp-flex>
              </mp-flex>
              <mp-flex>
                <mp-flex flex="3 0 0%" padding-y="2">
                  <mp-text color="gray.600">Package</mp-text>
                </mp-flex>
                <mp-flex flex="4 0 0%" padding-y="2">
                  <mp-text>Enterprise</mp-text>
                </mp-flex>
              </mp-flex>
              <mp-flex>
                <mp-flex flex="3 0 0%" padding-y="2">
                  <mp-text color="gray.600">Duration</mp-text>
                </mp-flex>
                <mp-flex flex="4 0 0%" padding-y="2">
                  <mp-text>1 Dec 2022 - 31 Dec 2022</mp-text>
                </mp-flex>
              </mp-flex>
              <mp-flex>
                <mp-flex flex="3 0 0%" padding-y="2">
                  <mp-text color="gray.600">Remaining active days</mp-text>
                </mp-flex>
                <mp-flex flex="4 0 0%" align-items="center" padding-y="2">
                  <mp-text>30 days</mp-text>
                </mp-flex>
              </mp-flex>
              <mp-flex>
                <mp-flex flex="3 0 0%" padding-y="2">
                  <mp-text color="gray.600">Subscription amount</mp-text>
                </mp-flex>
                <mp-flex flex="4 0 0%" padding-y="2">
                  <mp-text>Rp6.300.000</mp-text>
                </mp-flex>
              </mp-flex>
            </mp-box>
            <mp-box width="35%">
              <mp-heading as="h2" font-size="xl" margin-bottom="5">
                Activity
              </mp-heading>

              <mp-input placeholder="Add a note..." margin-bottom="6" />

              <mp-flex align-items="center" margin-bottom="6">
                <mp-icon name="log" />
                <mp-box margin-left="3">
                  <mp-text font-weight="semibold">Lead won</mp-text>
                  <mp-text color="gray.600" font-size="sm">
                    20 Aug 2022, 14:42
                  </mp-text>
                </mp-box>
              </mp-flex>

              <mp-flex justify-content="space-between" margin-bottom="6">
                <mp-flex>
                  <mp-avatar
                    name="Rizal Chandra"
                    size="md"
                    background-color="gray"
                    margin-top="6px"
                  />
                  <mp-box margin-left="3">
                    <mp-text font-weight="semibold">Rizal chandra</mp-text>
                    <mp-text color="gray.600" font-size="sm">
                      20 Aug 2022, 14:42
                    </mp-text>

                    <mp-text margin-top="3">
                      This customer need to follow up on next week
                    </mp-text>
                  </mp-box>
                </mp-flex>
                <mp-box>
                  <mp-popover>
                    <mp-popover-trigger>
                      <mp-button-icon name="menu-meatball" />
                    </mp-popover-trigger>
                    <mp-popover-content
                      max-width="40"
                      background-color="white"
                      border-radius="md"
                      box-shadow="lg"
                      border-width="1px"
                      border-color="gray.400"
                    >
                      <mp-popover-list>
                        <mp-popover-list-item>Edit</mp-popover-list-item>
                        <mp-popover-list-item>Delete</mp-popover-list-item>
                      </mp-popover-list>
                    </mp-popover-content>
                  </mp-popover>
                </mp-box>
              </mp-flex>

              <mp-flex align-items="center" margin-bottom="6">
                <mp-icon name="log" />
                <mp-box margin-left="3">
                  <mp-text font-weight="semibold">Lead on trial</mp-text>
                  <mp-text color="gray.600" font-size="sm">
                    20 Aug 2022, 14:42
                  </mp-text>
                </mp-box>
              </mp-flex>

              <mp-flex justify-content="space-between" margin-bottom="6">
                <mp-flex>
                  <mp-avatar
                    name="Rizal Chandra"
                    size="md"
                    background-color="gray"
                    margin-top="6px"
                  />
                  <mp-box margin-left="3">
                    <mp-text font-weight="semibold">Rizal chandra</mp-text>
                    <mp-text color="gray.600" font-size="sm">
                      20 Aug 2022, 14:42
                    </mp-text>

                    <mp-text margin-top="3">
                      This customer need to follow up on next week and need
                      implementation for next month
                    </mp-text>
                  </mp-box>
                </mp-flex>
                <mp-box>
                  <mp-popover id="popover-03">
                    <mp-popover-trigger>
                      <mp-button-icon name="menu-meatball" />
                    </mp-popover-trigger>
                    <mp-popover-content
                      max-width="40"
                      background-color="white"
                      border-radius="md"
                      box-shadow="lg"
                      border-width="1px"
                      border-color="gray.400"
                    >
                      <mp-popover-list>
                        <mp-popover-list-item>Edit</mp-popover-list-item>
                        <mp-popover-list-item>Delete</mp-popover-list-item>
                      </mp-popover-list>
                    </mp-popover-content>
                  </mp-popover>
                </mp-box>
              </mp-flex>

              <mp-flex align-items="center" margin-bottom="6">
                <mp-icon name="log" />
                <mp-box margin-left="3">
                  <mp-text font-weight="semibold">Lead submitted</mp-text>
                  <mp-text color="gray.600" font-size="sm">
                    20 Aug 2022, 14:42
                  </mp-text>
                </mp-box>
              </mp-flex>

              <mp-text is-link>See more</mp-text>
            </mp-box>
          </mp-flex>
        </mp-box>
      </mp-box>
    </mp-flex>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpIcon,
  MpHeading,
  MpText,
  MpButtonIcon,
  MpBadge,
  MpInput,
  MpDivider,
  MpAvatar,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
} from "@mekari/pixel";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default {
  name: "OffersOverview",
  components: {
    MpBox,
    MpFlex,
    MpIcon,
    MpHeading,
    MpText,
    MpButtonIcon,
    MpBadge,
    MpInput,
    MpDivider,
    MpAvatar,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
    Header,
    Sidebar,
  },
};
</script>