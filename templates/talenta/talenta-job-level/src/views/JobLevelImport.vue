<template>
  <mp-box>
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 60px)">
      <Sidebar default-is-toggle is-custom with-child />
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
          padding-y="1.063rem"
        >
          <mp-box>
            <mp-text as="p" font-size="sm" is-link>Job level</mp-text>
            <mp-heading as="h1" font-size="2xl" font-weight="bold">
              Import job level
            </mp-heading>
          </mp-box>
          <mp-flex gap="2">
            <mp-button variant="outline">
              <mp-icon
                name="help"
                variant="duotone"
                size="sm"
                margin-right="2"
              />
              Guidebook
            </mp-button>
          </mp-flex>
        </mp-flex>
        <mp-box
          min-height="calc(100vh - 142px)"
          border-top-width="1px"
          border-left-width="1px"
          border-top-left-radius="md"
          border-color="gray.100"
          background-color="white"
          :padding="['4', '6']"
        >
          <mp-flex justify-content="center">
            <mp-box width="772px">
              <mp-heading as="h2" font-size="xl">
                Download and complete the template
              </mp-heading>
              <mp-text color="gray.600">
                Download template below and write your data transfer.
              </mp-text>

              <mp-box
                background-color="gray.50"
                border="1px solid"
                border-color="gray.100"
                border-radius="md"
                padding-x="4"
                padding-y="3.2"
                margin-y="6"
              >
                <mp-flex justify-content="space-between">
                  <mp-flex gap="4">
                    <mp-icon name="excel-document" size="sm" />
                    <mp-text font-weight="semibold">
                      Template_job_level.xlsx
                    </mp-text>
                  </mp-flex>
                  <mp-button-icon name="download" variant="duotone" />
                </mp-flex>
              </mp-box>

              <mp-text margin-bottom="6" color="gray.600">
                <mp-text font-weight="semibold">Few tips:</mp-text>
                <li>
                  Start with the provided template for correct formatting.
                </li>
                <li>
                  Check sheet 'Instruction' on spreadsheet to read instruction.
                </li>
                <li>
                  Ensure mandatory fields are either mapped or filled to avoid
                  missing data.
                </li>
                <li>
                  For the update process, start by exporting the file, and then
                  proceed to rewrite your data transfer.
                </li>
              </mp-text>

              <mp-form-control control-id="single-form-upload">
                <mp-form-label>Upload spreadsheet</mp-form-label>
                <mp-upload
                  id="single-form-upload"
                  button-caption="Browse file"
                  max-width="100%"
                  accept=".xlsx"
                  is-reset-on-change
                />
              </mp-form-control>

              <mp-flex margin-top="7" justify-content="flex-end">
                <mp-flex gap="2">
                  <mp-button variant="ghost">Cancel</mp-button>
                  <mp-button>Submit</mp-button>
                </mp-flex>
              </mp-flex>
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
  MpHeading,
  MpText,
  MpButton,
  MpButtonIcon,
  MpIcon,
  MpFormControl,
  MpFormLabel,
  MpUpload,
} from "@mekari/pixel";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default {
  name: "JobLevelImport",
  components: {
    MpBox,
    MpFlex,
    MpHeading,
    MpText,
    MpButton,
    MpButtonIcon,
    MpIcon,
    MpFormControl,
    MpFormLabel,
    MpUpload,
    Header,
    Sidebar,
  },
};
</script>