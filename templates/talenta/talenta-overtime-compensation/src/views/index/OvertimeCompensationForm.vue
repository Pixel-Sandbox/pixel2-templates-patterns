<template>
  <mp-box>
    <mp-flex flex-direction="column" width="700px">
      <mp-flex flex="1 0 auto" padding-y="1.5">
        <mp-heading as="h2" color="dark" font-size="xl">
          General information
        </mp-heading>
      </mp-flex>
      <mp-flex>
        <mp-flex flex="2 0 0%" padding-y="2">
          <mp-text color="gray.600" font-size="md" line-height="md">
            Policy name
          </mp-text>
        </mp-flex>
        <mp-flex flex="4 0 0%" justify-content="space-between" padding-y="2">
          <mp-text v-if="!toggleInput" font-size="md" line-height="md">
            {{ policyName }}
          </mp-text>
          <mp-input v-else v-model="policyName" is-full-width />
          <mp-button
            v-if="!toggleInput"
            variant="link"
            @click="handleToggleInput"
          >
            Edit
          </mp-button>
        </mp-flex>
      </mp-flex>

      <mp-flex>
        <mp-flex flex="2 0 0%" padding-y="2">
          <mp-text color="gray.600" font-size="md" line-height="md">
            Policy code
          </mp-text>
        </mp-flex>
        <mp-flex flex="4 0 0%" padding-y="2">
          <mp-text v-if="!toggleInput" font-size="md" line-height="md">
            {{ policyCode }}
          </mp-text>
          <mp-input v-else v-model="policyCode" is-full-width />
        </mp-flex>
      </mp-flex>
      <mp-flex>
        <mp-flex flex="2 0 0%" padding-y="2">
          <mp-text color="gray.600" font-size="md" line-height="md">
            Description
          </mp-text>
        </mp-flex>
        <mp-flex flex="4 0 0%" padding-y="2">
          <mp-text v-if="!toggleInput" font-size="md" line-height="md">
            {{ policyDescription }}
          </mp-text>
          <mp-flex v-else flex="1 0 0%" flex-direction="column">
            <mp-textarea
              v-model="policyDescription"
              is-full-width
              resize="none"
            />
            <mp-text
              text-align="right"
              font-size="sm"
              line-height="md"
              margin-top="1"
              color="gray.600"
            >
              {{ handleCountChar(policyDescription.length) }}
            </mp-text>
          </mp-flex>
        </mp-flex>
      </mp-flex>

      <mp-flex v-if="toggleInput" justify-content="flex-end" padding-y="4">
        <mp-button
          variant="ghost"
          margin-right="2"
          @click="handleToggleInput(false)"
        >
          Cancel
        </mp-button>
        <mp-button @click="handleToggleInput(false)"> Save </mp-button>
      </mp-flex>
    </mp-flex>

    <mp-divider margin-y="4" />

    <mp-flex flex-direction="column">
      <mp-flex flex="1 0 auto" padding-y="1.5">
        <mp-heading as="h2" color="dark" font-size="xl">
          Compensation rule
        </mp-heading>
      </mp-flex>
      <mp-text
        color="gray.600"
        font-size="md"
        line-height="md"
        margin-bottom="5"
      >
        The list of compensation rule that arrange an overtime conversion to
        time off.
      </mp-text>
    </mp-flex>

    <OvertimeCompensationTable />
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpButton,
  MpInput,
  MpTextarea,
  MpText,
  MpHeading,
  MpDivider,
} from "@mekari/pixel";
import OvertimeCompensationTable from "./OvertimeCompensationTable";

export default {
  name: "OvertimeCompensationForm",
  components: {
    MpBox,
    MpFlex,
    MpButton,
    MpInput,
    MpText,
    MpTextarea,
    MpHeading,
    MpDivider,
    OvertimeCompensationTable,
  },
  data() {
    return {
      toggleInput: false,
      policyName: "Overtime Leave",
      policyCode: "OTL",
      policyDescription: "Overtime time leave policy",
    };
  },
  methods: {
    handleToggleInput: function (data) {
      this.toggleInput = data;
    },
    handleCountChar(number) {
      let counter = 200 - number;
      return counter + "/200";
    },
  },
};
</script>
