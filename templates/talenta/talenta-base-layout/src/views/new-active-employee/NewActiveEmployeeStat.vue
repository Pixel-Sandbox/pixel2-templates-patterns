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
              400
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
            Total active employee
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
      border-radius="md"
      transition="all .2s ease"
    >
      <mp-pseudo-box
        as="button"
        role="group"
        display="inline-flex"
        flex="1 0 auto"
        min-width="172px"
        padding-x="4"
        padding-y="3"
        border-radius="md"
        cursor="pointer"
        transition="all .2s ease"
        :_hover="{ backgroundColor: 'gray.50' }"
        :_active="{ backgroundColor: 'ice.50' }"
        :_focus="{ boxShadow: 'outer' }"
      >
        <mp-flex flex-direction="column">
          <mp-flex justify-content="space-between">
            <mp-flex align-items="center">
              <mp-icon name="team" size="sm" margin-right="1" />
              <mp-heading
                color="blue.400"
                font-size="xl"
                transition="all .2s ease"
              >
                10
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
              New hire
            </mp-text>
            <mp-tooltip
              label="The number of employees who recently joined to the company."
              position="bottom"
              text-align="justify"
            >
              <mp-icon name="info" size="sm" margin-left="1" />
            </mp-tooltip>
          </mp-flex>
        </mp-flex>
      </mp-pseudo-box>
    </mp-box>
    <mp-divider orientation="vertical" margin-x="2" />
    <mp-box
      role="group"
      display="inline-flex"
      flex="1 0 auto"
      min-width="172px"
      border-radius="md"
      transition="all .2s ease"
    >
      <mp-pseudo-box
        as="button"
        role="group"
        display="inline-flex"
        flex="1 0 auto"
        min-width="172px"
        padding-x="4"
        padding-y="3"
        border-radius="md"
        cursor="pointer"
        transition="all .2s ease"
        :_hover="{ backgroundColor: 'gray.50' }"
        :_active="{ backgroundColor: 'ice.50' }"
        :_focus="{ boxShadow: 'outer' }"
      >
        <mp-flex flex-direction="column">
          <mp-flex justify-content="space-between">
            <mp-flex align-items="center">
              <mp-icon name="team" size="sm" margin-right="1" />
              <mp-heading
                color="blue.400"
                font-size="xl"
                transition="all .2s ease"
              >
                20
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
              Employee transfer
            </mp-text>
            <mp-tooltip
              label="Total of employees who have been transferred including promotion, mutation, demotion, or contract extension."
              position="bottom"
              text-align="left"
            >
              <mp-icon name="info" size="sm" margin-left="1" />
            </mp-tooltip>
          </mp-flex>
        </mp-flex>
      </mp-pseudo-box>
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
            label="Metric that measures the percentage of active employees in a specific period."
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
              2.5 years
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
            Average tenure
          </mp-text>
          <mp-tooltip
            label="The average length of time an employee has worked in the company."
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
            Ratio HR to employee
          </mp-text>
          <mp-tooltip
            label="The quantitative comparison between HR to employee."
            position="bottom"
            text-align="justify"
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
  MpPseudoBox,
  MpDivider,
  MpBox,
  MpHeading,
  MpText,
  MpIcon,
  MpTooltip,
} from "@mekari/pixel";

export default {
  name: "NewActiveEmployeeStat",
  components: {
    MpFlex,
    MpPseudoBox,
    MpDivider,
    MpBox,
    MpHeading,
    MpText,
    MpIcon,
    MpTooltip,
  },
};
</script>
