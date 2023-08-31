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
            <mp-heading as="h1" font-size="2xl" font-weight="bold" color="dark">
              Personal info
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
            <mp-box width="50%">
              <mp-flex justify-content="space-between" align-items="baseline">
                <mp-heading as="h2" font-size="xl" margin-bottom="5">
                  Account details
                </mp-heading>
                <mp-flex gap="2" align-items="center">
                  <mp-text is-link>Request change</mp-text>
                  <mp-icon name="newtab" size="sm" variant="duotone" />
                </mp-flex>
              </mp-flex>

              <mp-flex>
                <mp-flex flex="3 0 0%" padding-y="2">
                  <mp-text color="gray.600">ID</mp-text>
                </mp-flex>
                <mp-flex flex="4 0 0%" padding-y="2">
                  <mp-text>27804529</mp-text>
                </mp-flex>
              </mp-flex>
              <mp-flex>
                <mp-flex flex="3 0 0%" padding-y="2">
                  <mp-text color="gray.600">Company name</mp-text>
                </mp-flex>
                <mp-flex flex="4 0 0%" padding-y="2">
                  <mp-text>PT Central Perk Indonesia</mp-text>
                </mp-flex>
              </mp-flex>
              <mp-flex>
                <mp-flex flex="3 0 0%" padding-y="2">
                  <mp-text color="gray.600">Partner name</mp-text>
                </mp-flex>
                <mp-flex flex="4 0 0%" padding-y="2">
                  <mp-text>Rizal Chandra</mp-text>
                </mp-flex>
              </mp-flex>
              <mp-flex>
                <mp-flex flex="3 0 0%" padding-y="2">
                  <mp-text color="gray.600">Email</mp-text>
                </mp-flex>
                <mp-flex flex="4 0 0%" padding-y="2">
                  <mp-text>rizalchandra@cpi.com</mp-text>
                </mp-flex>
              </mp-flex>
              <mp-flex>
                <mp-flex flex="3 0 0%" padding-y="2">
                  <mp-text color="gray.600">Phone number</mp-text>
                </mp-flex>
                <mp-flex flex="4 0 0%" padding-y="2">
                  <mp-text>0812290922</mp-text>
                </mp-flex>
              </mp-flex>
              <mp-flex>
                <mp-flex flex="3 0 0%" padding-y="2">
                  <mp-text color="gray.600">Join date</mp-text>
                </mp-flex>
                <mp-flex flex="4 0 0%" padding-y="2">
                  <mp-text>12 Jan 2022</mp-text>
                </mp-flex>
              </mp-flex>
              <mp-flex>
                <mp-flex flex="3 0 0%" padding-y="2">
                  <mp-text color="gray.600">ID Type</mp-text>
                </mp-flex>
                <mp-flex flex="4 0 0%" padding-y="2">
                  <mp-text>KTP, Personal NPWP</mp-text>
                </mp-flex>
              </mp-flex>
              <mp-flex>
                <mp-flex flex="3 0 0%" padding-y="2">
                  <mp-text color="gray.600">ID Number</mp-text>
                </mp-flex>
                <mp-flex flex="4 0 0%" padding-y="2">
                  <mp-text>3200291000251</mp-text>
                </mp-flex>
              </mp-flex>
              <mp-flex>
                <mp-flex flex="3 0 0%" padding-y="2">
                  <mp-text color="gray.600">ID Tax number</mp-text>
                </mp-flex>
                <mp-flex flex="4 0 0%" padding-y="2">
                  <mp-text>93.972.215.4-542.000</mp-text>
                </mp-flex>
              </mp-flex>
              <mp-flex>
                <mp-flex flex="3 0 0%" padding-y="2">
                  <mp-text color="gray.600">Address</mp-text>
                </mp-flex>
                <mp-flex flex="4 0 0%" padding-y="2">
                  <mp-text>
                    Jl Kebon Bibit No.75/42 Bandung Wetan, Tamansari. Kota
                    Bandung
                  </mp-text>
                </mp-flex>
              </mp-flex>
            </mp-box>
            <mp-box width="50%">
              <mp-heading as="h2" font-size="xl" margin-bottom="5">
                Show getting started
              </mp-heading>

              <mp-toggle is-checked>
                Quick start guide on how to start partner with us
              </mp-toggle>
            </mp-box>
          </mp-flex>

          <mp-divider orientation="horizontal" margin-y="6" />

          <mp-box width="50%">
            <mp-flex justify-content="space-between" align-items="baseline">
              <mp-heading as="h2" font-size="xl" margin-bottom="5">
                Payment info
              </mp-heading>
              <mp-flex gap="2" align-items="center">
                <mp-text is-link>Request change</mp-text>
                <mp-icon name="newtab" size="sm" variant="duotone" />
              </mp-flex>
            </mp-flex>

            <mp-flex>
              <mp-flex flex="3 0 0%" padding-y="2">
                <mp-text color="gray.600">Bank account number</mp-text>
              </mp-flex>
              <mp-flex flex="4 0 0%" padding-y="2">
                <mp-text>BCA</mp-text>
              </mp-flex>
            </mp-flex>
            <mp-flex>
              <mp-flex flex="3 0 0%" padding-y="2">
                <mp-text color="gray.600">Bank account holder</mp-text>
              </mp-flex>
              <mp-flex flex="4 0 0%" padding-y="2">
                <mp-text>Rizal Chandra</mp-text>
              </mp-flex>
            </mp-flex>
            <mp-flex>
              <mp-flex flex="3 0 0%" padding-y="2">
                <mp-text color="gray.600">Bank account number</mp-text>
              </mp-flex>
              <mp-flex flex="4 0 0%" padding-y="2">
                <mp-text>730940022</mp-text>
              </mp-flex>
            </mp-flex>
          </mp-box>
        </mp-box>
      </mp-box>
    </mp-flex>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpHeading,
  MpText,
  MpIcon,
  MpToggle,
  MpDivider,
} from "@mekari/pixel";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default {
  name: "PersonalInfo",
  components: {
    MpBox,
    MpFlex,
    MpHeading,
    MpText,
    MpIcon,
    MpToggle,
    MpDivider,
    Header,
    Sidebar,
  },
};
</script>