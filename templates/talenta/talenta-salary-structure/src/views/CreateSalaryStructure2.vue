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
          padding-y="3"
        >
          <mp-box height="12">
            <mp-text as="p" font-size="sm" is-link>Salary structure</mp-text>
            <mp-heading as="h1" font-size="2xl" font-weight="semibold">
              Create salary structure
            </mp-heading>
          </mp-box>
          <mp-box>
            <mp-button variant="outline" right-icon="caret-down">
              Help
            </mp-button>
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
          <Step>
            <StepItem id="1" label="Structure information" is-completed />
            <StepItem id="2" label="Criteria & benchmark" is-current />
            <StepItem id="3" label="Method & structure" is-last />
          </Step>

          <mp-box width="610px">
            <mp-heading as="h2" font-size="xl" margin-top="6">
              Set up criteria
            </mp-heading>
            <mp-text color="gray.600" margin-bottom="5">
              Set the salary structure criteria based on branch, organization,
              job position, and job level. The last criteria will be breakdown
              as a row.
            </mp-text>

            <mp-flex gap="6" flex-direction="column" margin-bottom="6">
              <mp-flex align-items="flex-start">
                <mp-box width="100px">
                  <mp-badge variant="subtle" variant-color="blue" margin-y="2">
                    Criteria 1
                  </mp-badge>
                </mp-box>
                <mp-box width="200px">
                  <mp-select value="branch" is-disabled>
                    <option value="branch">Branch</option>
                  </mp-select>
                </mp-box>
                <mp-icon name="arrows-right" margin-x="2" margin-y="2" />
                <mp-input-tag
                  width="200px"
                  :is-show-icon-chevron-down="true"
                  :content-style="{width: '48'}"
                  :trigger-style="{maxHeight: '24', overflowY: 'auto'}"
                />
              </mp-flex>
              <mp-flex align-items="flex-start">
                 <mp-box width="100px">
                   <mp-badge variant="subtle" variant-color="blue" margin-y="2">
                     Criteria 2
                    </mp-badge>
                  </mp-box>
                <mp-box width="200px" >
                   <mp-select value="organization" is-disabled>
                    <option value="organization">Organization</option>
                  </mp-select>
                </mp-box>
                <mp-icon name="arrows-right" margin-x="2" margin-y="2" />
                <mp-input-tag
                  width="200px"
                  :is-show-icon-chevron-down="true"
                  :content-style="{width: '48'}"
                  :trigger-style="{maxHeight: '24', overflowY: 'auto'}"
                />
              </mp-flex>
            </mp-flex>

            <mp-button variant="outline" left-icon="add">
              Add criteria
            </mp-button>

            <mp-heading as="h2" font-size="xl" margin-top="6">
              Salary benchmark
            </mp-heading>
            <mp-text color="gray.600" margin-bottom="5">
              You can insert the salary benchmark into the structure and choose
              data from Talenta or use your own.
            </mp-text>

            <mp-toggle margin-bottom="4" is-checked>
              Insert salary benchmark
            </mp-toggle>
            <mp-text font-weight="semibold">Source data from</mp-text>
            <mp-box margin-bottom="6" padding="4" background-color="gray.25">
              <mp-text font-weight="semibold">
                External benchmark salary
              </mp-text>
              <mp-text color="gray.600">
                Import your salary benchmark data by following our template
                format data.
              </mp-text>
            </mp-box>

            <mp-text margin-bottom="6">
              Please follow these steps to start importing data to Talenta.
            </mp-text>

            <mp-flex>
              <mp-box
                width="6"
                height="6"
                border-radius="full"
                background-color="blue.50"
                margin-right="4"
                justify-content="center"
                align-items="center"
              >
                <mp-text color="blue.700" padding-x="9px"> 1 </mp-text>
              </mp-box>
              <mp-box>
                <mp-text font-weight="semibold">
                  Download the data template
                </mp-text>
                <mp-text color="gray.600">
                  To upload data accurately, use only the provided templates
                  customized for the Talenta system. Before you download this
                  template, please make sure you already selected organizational
                  unit due the template will be formatted as defined structure.
                </mp-text>
                <mp-button margin-top="4" variant="outline">
                  Download template
                </mp-button>
              </mp-box>
            </mp-flex>

            <mp-divider margin-y="6" />

            <mp-flex>
              <mp-box
                width="6"
                height="6"
                border-radius="full"
                background-color="blue.50"
                margin-right="4"
                justify-content="center"
                align-items="center"
              >
                <mp-text color="blue.700" padding-x="8px"> 2 </mp-text>
              </mp-box>
              <mp-box>
                <mp-text font-weight="semibold">
                  Fill in the data in the template file
                </mp-text>
                <ul v-pixel color="gray.600" margin-left="4">
                  <li>
                    <mp-text color="gray.600">
                      Please follow the guidelines to avoid upload errors.
                    </mp-text>
                  </li>
                  <li>
                    <mp-text color="gray.600">
                      Make sure your file includes all mandatory fields as
                      defined in the template.
                    </mp-text>
                  </li>
                  <li>
                    <mp-text color="gray.600">
                      For more information on uploading employee data, refer to
                      the guidebook.
                    </mp-text>
                  </li>
                </ul>
              </mp-box>
            </mp-flex>

            <mp-divider margin-y="6" />

            <mp-flex>
              <mp-box
                width="6"
                height="6"
                border-radius="full"
                background-color="blue.50"
                margin-right="4"
                justify-content="center"
                align-items="center"
              >
                <mp-text color="blue.700" padding-x="8px"> 3 </mp-text>
              </mp-box>
              <mp-box>
                <mp-text font-weight="semibold"> Upload XLSX </mp-text>
                <mp-text color="gray.600">
                  The maximum amount of data that can be processed is 1,000
                  records per upload, and it must be in XLSX format.
                </mp-text>
                <mp-dropzone
                  margin-top="4"
                  description="The file must be in XLSX format with a max file size of 5 MB"
                />
              </mp-box>
            </mp-flex>

            <mp-flex gap="2" justify-content="flex-end" margin-top="12">
              <mp-button variant="ghost" as="router-link" to="/">Cancel</mp-button>
              <mp-button variant="outline" as="router-link" to="/create/step-1">Back</mp-button>
              <mp-button as="router-link" to="/create/step-3">Continue</mp-button>
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
  MpButton,
  MpBadge,
  MpIcon,
  MpSelect,
  MpInputTag,
  MpToggle,
  MpDivider,
  MpDropzone,
} from "@mekari/pixel";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Step from "../components/Step";
import StepItem from "../components/StepItem";

export default {
  name: "CreateSalaryStructure2",
  components: {
    MpBox,
    MpFlex,
    MpHeading,
    MpText,
    MpButton,
    MpBadge,
    MpIcon,
    MpSelect,
    MpInputTag,
    MpToggle,
    MpDivider,
    MpDropzone,
    Header,
    Sidebar,
    Step,
    StepItem,
  },
};
</script>