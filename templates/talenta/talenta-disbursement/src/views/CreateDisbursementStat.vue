<template>
  <mp-box
    background-color="white"
    border="1px solid"
    border-radius="md"
    border-color="gray.100"
    padding="3"
    margin-bottom="6"
  >
    <mp-flex margin-bottom="2">
      <mp-text
        font-size="md"
        font-weight="semibold"
        line-height="md"
        text-align="left"
        padding-left="4"
      >
        All reimbursement requested
      </mp-text>
      <mp-tooltip
        label="List of reimbursement requested that ready to disburse."
        position="bottom"
      >
        <mp-icon name="info" size="sm" margin-left="1" />
      </mp-tooltip>
    </mp-flex>
    <mp-flex>
      <mp-box
        role="group"
        display="inline-flex"
        flex="1 0 auto"
        min-width="172px"
        padding-x="4"
        padding-y="3"
        border-radius="md"
        transition="all .2s ease"
      >
        <mp-flex flex-direction="column">
          <mp-flex justify-content="space-between">
            <mp-flex align-items="center">
              <mp-icon name="employee" margin-right="2" />
              <mp-heading
                as="h2"
                color="dark"
                font-size="xl"
                transition="all .2s ease"
              >
                3 of 5
              </mp-heading>
            </mp-flex>
          </mp-flex>
          <mp-flex align-items="center">
            <mp-text
              color="gray.600"
              font-size="md"
              line-height="md"
              text-align="left"
            >
              Employee requested
            </mp-text>
          </mp-flex>
        </mp-flex>
      </mp-box>
      <mp-divider orientation="vertical" margin-x="2" />
      <mp-box
        role="group"
        display="inline-flex"
        flex="1 0 auto"
        min-width="172px"
        padding-x="4"
        padding-y="3"
        border-radius="md"
        transition="all .2s ease"
      >
        <mp-flex flex-direction="column">
          <mp-flex justify-content="space-between">
            <mp-flex align-items="center">
              <mp-icon name="expenses" margin-right="2" />
              <mp-heading
                as="h2"
                color="dark"
                font-size="xl"
                transition="all .2s ease"
              >
                3 of 5
              </mp-heading>
            </mp-flex>
          </mp-flex>
          <mp-flex align-items="center">
            <mp-text
              color="gray.600"
              font-size="md"
              line-height="md"
              text-align="left"
            >
              Reimbursement requested
            </mp-text>
          </mp-flex>
        </mp-flex>
      </mp-box>
      <mp-divider orientation="vertical" margin-x="2" />
      <mp-box
        role="group"
        display="inline-flex"
        flex="1 0 auto"
        min-width="172px"
        padding-x="4"
        padding-y="3"
        border-radius="md"
        transition="all .2s ease"
      >
        <mp-flex flex-direction="column">
          <mp-flex justify-content="space-between">
            <mp-flex align-items="center">
              <mp-icon name="finance" margin-right="2" />
              <mp-heading
                as="h2"
                color="dark"
                font-size="xl"
                transition="all .2s ease"
              >
                Rp1.500.000 of Rp2.900.000
              </mp-heading>
            </mp-flex>
          </mp-flex>
          <mp-flex align-items="center">
            <mp-text
              color="gray.600"
              font-size="md"
              line-height="md"
              text-align="left"
            >
              Total amount
            </mp-text>
          </mp-flex>
        </mp-flex>
      </mp-box>
      <mp-divider orientation="vertical" margin-x="2" />
      <mp-box
        role="group"
        display="inline-flex"
        flex="1 0 auto"
        min-width="172px"
        padding-x="4"
        padding-y="3"
        border-radius="md"
        transition="all .2s ease"
      >
        <mp-flex flex-direction="column">
          <mp-flex justify-content="space-between">
            <mp-flex align-items="center">
              <mp-icon name="pay-outline" margin-right="2" />
              <mp-heading
                as="h2"
                color="dark"
                font-size="xl"
                transition="all .2s ease"
              >
                Rp150.000.000
              </mp-heading>
            </mp-flex>
          </mp-flex>
          <mp-flex align-items="center">
            <mp-text
              color="gray.600"
              font-size="md"
              line-height="md"
              text-align="left"
            >
              Mekari Pay balance
            </mp-text>
          </mp-flex>
        </mp-flex>
      </mp-box>
    </mp-flex>
  </mp-box>
</template>

<script>
import {
  MpFlex,
  MpDivider,
  MpBox,
  MpHeading,
  MpText,
  MpIcon,
  MpTooltip,
} from "@mekari/pixel";

export default {
  name: "CreateDisbursementStat",
  components: {
    MpFlex,
    MpDivider,
    MpBox,
    MpHeading,
    MpText,
    MpIcon,
    MpTooltip,
  },
};
</script>
