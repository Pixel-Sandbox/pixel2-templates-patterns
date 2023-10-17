<template>
  <mp-flex
    background-color="white"
    border="1px solid"
    border-radius="md"
    border-color="gray.100"
    padding="3"
    margin-top="3"
    margin-bottom="6"
  >
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
            <mp-icon name="team" size="sm" margin-right="1" />
            <mp-heading
              as="h2"
              color="dark"
              font-size="xl"
              transition="all .2s ease"
            >
              40
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
            Total employee resign
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
            <mp-icon name="team" size="sm" margin-right="1" />
            <mp-heading
              as="h2"
              color="dark"
              font-size="xl"
              transition="all .2s ease"
            >
              20%
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
            Retention rate
          </mp-text>
          <mp-tooltip
            label="Turnover rate refers to the percentage of employees leaving a company within a certain period of time."
            position="bottom"
            text-align="left"
          >
            <mp-icon name="info" size="sm" margin-left="1" />
          </mp-tooltip>
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
            <mp-icon name="team" size="sm" margin-right="1" />
            <mp-heading
              as="h2"
              color="dark"
              font-size="xl"
              transition="all .2s ease"
            >
              35%
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
            Voluntary rate
          </mp-text>
          <mp-tooltip
            label="Metric that measures the percentage of the voluntary turnover rate in a specific period."
            position="bottom"
            text-align="left"
          >
            <mp-icon name="info" size="sm" margin-left="1" />
          </mp-tooltip>
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
            <mp-icon name="team" size="sm" margin-right="1" />
            <mp-heading
              as="h2"
              color="dark"
              font-size="xl"
              transition="all .2s ease"
            >
              65%
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
            Involuntary rate
          </mp-text>
          <mp-tooltip
            label="Metric that measures the percentage of the involuntary turnover rate in a specific period."
            position="bottom"
            text-align="left"
          >
            <mp-icon name="info" size="sm" margin-left="1" />
          </mp-tooltip>
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
            <mp-icon name="team" size="sm" margin-right="1" />
            <mp-heading
              as="h2"
              color="dark"
              font-size="xl"
              transition="all .2s ease"
            >
              1:50
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
            Resign to active ratio
          </mp-text>
          <mp-tooltip
            label="The quantitative comparison between resigned to active employee."
            position="bottom"
          >
            <mp-icon name="info" size="sm" margin-left="1" />
          </mp-tooltip>
        </mp-flex>
      </mp-flex>
    </mp-box>
  </mp-flex>
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
  name: "EmployeeTurnoverStat",
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
