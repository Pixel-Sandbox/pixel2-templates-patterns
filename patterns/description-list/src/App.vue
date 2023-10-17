<template>
  <mp-box padding="6">
    <mp-flex flex-direction="column">
      <mp-flex flex="1 0 auto" padding-y="1.5">
        <mp-heading as="h3" color="dark" font-size="lg">
          Title section
        </mp-heading>
      </mp-flex>
      <mp-flex>
        <mp-flex flex="2 0 0%" padding-y="2">
          <mp-text color="gray.600" font-size="md" line-height="md">
            Employee name
          </mp-text>
        </mp-flex>
        <mp-flex flex="6 0 0%" justify-content="space-between" padding-y="2">
          <mp-text color="gray.600" font-size="md" line-height="md">
            Fajar
          </mp-text>
          <mp-text as="a" font-size="md" line-height="md" is-link>Edit</mp-text>
        </mp-flex>
      </mp-flex>

      <mp-flex>
        <mp-flex flex="2 0 0%" padding-y="2">
          <mp-text color="gray.600" font-size="md" line-height="md">
            Date of birth
          </mp-text>
        </mp-flex>
        <mp-flex flex="6 0 0%" padding-y="2">
          <mp-text
            color="gray.600"
            font-size="md"
            line-height="md"
            margin-right="2"
          >
            1 Jan 2000
          </mp-text>
          <mp-badge size="md" variant="subtle" variant-color="gray">
            20 Tahun
          </mp-badge>
        </mp-flex>
      </mp-flex>
    </mp-flex>

    <mp-divider margin-y="4" />

    <mp-flex flex-direction="column">
      <mp-flex flex="1 0 auto" padding-y="1.5">
        <mp-heading as="h3" color="dark" font-size="lg">
          Title section
        </mp-heading>
      </mp-flex>
      <mp-flex>
        <mp-flex flex="2 0 0%" padding-y="2">
          <mp-text color="gray.600" font-size="md" line-height="md">
            Employee name
          </mp-text>
        </mp-flex>
        <mp-flex flex="6 0 0%" justify-content="space-between" padding-y="2">
          <mp-text color="gray.600" font-size="md" line-height="md">
            Fajar
          </mp-text>
          <mp-text as="a" font-size="md" line-height="md" is-link>Edit</mp-text>
        </mp-flex>
      </mp-flex>

      <mp-flex>
        <mp-flex flex="2 0 0%" padding-y="2">
          <mp-text color="gray.600" font-size="md" line-height="md">
            Date of birth
          </mp-text>
        </mp-flex>
        <mp-flex flex="6 0 0%" padding-y="2">
          <mp-text
            color="gray.600"
            font-size="md"
            line-height="md"
            margin-right="2"
          >
            1 Jan 2000
          </mp-text>
          <mp-badge size="md" variant="subtle" variant-color="gray">
            20 Tahun
          </mp-badge>
        </mp-flex>
      </mp-flex>
    </mp-flex>
  </mp-box>
</template>

<script>
  import {
    MpBox,
    MpFlex,
    MpText,
    MpHeading,
    MpBadge,
    MpDivider,
  } from "@mekari/pixel";

  export default {
    name: "App",
    components: {
      MpBox,
      MpFlex,
      MpText,
      MpHeading,
      MpBadge,
      MpDivider,
    },
  };
</script>
