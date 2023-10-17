<template>
  <mp-box>
    <mp-banner variant="info" is-inline>
      <mp-banner-icon />
      <mp-banner-description>
        You fill out this form on behalf of <b>gabrielle.watson@gmail.com</b>
      </mp-banner-description>
      <mp-banner-close-button />
    </mp-banner>

    <mp-box width="full" max-width="100ch" margin-x="auto" padding-x="4">
      <mp-box margin-top="12" margin-bottom="10">
        <img src="../assets/gojek-logo.svg" width="170px" height="40px" />
      </mp-box>

      <mp-box margin-bottom="6">
        <mp-heading as="h1" font-size="2xl"> Join form </mp-heading>
        <mp-text font-size="md">
          To join our company, please complete the necessary forms providing
          your personal and employment information. These forms are essential
          for effective communication and administrative purposes.
        </mp-text>
      </mp-box>

      <mp-flex margin-bottom="6">
        <mp-icon name="profile" size="sm" margin-top="1.5" />
        <mp-box margin-left="2">
          <mp-heading as="h2" font-size="xl"> Personal data </mp-heading>
          <mp-text font-size="md" color="gray.600">
            Your personal basic information data.
          </mp-text>
        </mp-box>
      </mp-flex>

      <mp-box margin-left="7">
        <mp-flex gap="6" margin-bottom="5">
          <mp-form-control width="full" is-required>
            <mp-form-label>Full name</mp-form-label>
            <mp-input />
          </mp-form-control>
          <mp-form-control width="full" is-required>
            <mp-form-label>Email</mp-form-label>
            <mp-input />
          </mp-form-control>
        </mp-flex>
        <mp-flex gap="6" margin-bottom="5">
          <mp-form-control width="full">
            <mp-form-label>Mobile phone</mp-form-label>
            <mp-input />
          </mp-form-control>
          <mp-form-control width="full">
            <mp-form-label>Phone</mp-form-label>
            <mp-input />
          </mp-form-control>
        </mp-flex>
        <mp-flex gap="6" margin-bottom="5">
          <mp-form-control width="full">
            <mp-form-label>Place of birth</mp-form-label>
            <mp-input />
          </mp-form-control>
          <mp-form-control width="full" is-required>
            <mp-form-label>Birth date</mp-form-label>
            <mp-date-picker placeholder="Select date" />
          </mp-form-control>
        </mp-flex>
        <mp-flex gap="6" margin-bottom="5">
          <mp-form-control width="full">
            <mp-form-label>Gender</mp-form-label>
            <mp-radio-group name="gender" spacing="6" is-inline>
              <mp-radio value="male"> Male </mp-radio>
              <mp-radio value="female"> Female </mp-radio>
            </mp-radio-group>
          </mp-form-control>
          <mp-form-control width="full" is-required>
            <mp-form-label>Marital status</mp-form-label>
            <mp-select placeholder="Select marital status" />
          </mp-form-control>
        </mp-flex>
        <mp-flex gap="6" margin-bottom="5">
          <mp-form-control width="full">
            <mp-form-label>Blood type</mp-form-label>
            <mp-select placeholder="Select blood type" />
          </mp-form-control>
          <mp-form-control width="full" is-required>
            <mp-form-label>Religion</mp-form-label>
            <mp-select placeholder="Select religion" />
          </mp-form-control>
        </mp-flex>
      </mp-box>

      <mp-divider margin-y="5" />

      <mp-flex margin-bottom="6">
        <mp-icon name="id-card" size="sm" margin-top="1.5" />
        <mp-box margin-left="2">
          <mp-heading as="h2" font-size="xl"> Identity & address </mp-heading>
          <mp-text font-size="md" color="gray.600">
            Important identification details such as ID number, passport
            information, and your current address.
          </mp-text>
        </mp-box>
      </mp-flex>

      <mp-box margin-left="7">
        <mp-flex gap="6" margin-bottom="5">
          <mp-form-control width="full" is-required>
            <mp-form-label>Identity type</mp-form-label>
            <mp-select placeholder="Select identity type" />
          </mp-form-control>
          <mp-form-control width="full" is-required>
            <mp-form-label>Identity number</mp-form-label>
            <mp-input />
          </mp-form-control>
        </mp-flex>
        <mp-flex gap="6" margin-bottom="5">
          <mp-form-control width="full">
            <mp-form-label>Identity expiry date</mp-form-label>
            <mp-date-picker placeholder="Select date" />
          </mp-form-control>
          <mp-form-control width="full">
            <mp-form-label>Postal code</mp-form-label>
            <mp-input />
          </mp-form-control>
        </mp-flex>
        <mp-flex gap="6" margin-bottom="5">
          <mp-form-control width="full">
            <mp-form-label>Residential address</mp-form-label>
            <mp-textarea />
          </mp-form-control>
        </mp-flex>
      </mp-box>

      <mp-divider margin-y="5" />

      <mp-flex margin-bottom="6">
        <mp-icon name="bank" size="sm" margin-top="1.5" />
        <mp-box margin-left="2">
          <mp-heading as="h2" font-size="xl"> Bank account </mp-heading>
          <mp-text font-size="md" color="gray.600">
            Your bank account information will be used for your monthly payroll.
          </mp-text>
        </mp-box>
      </mp-flex>

      <mp-box margin-left="7">
        <mp-flex gap="6" margin-bottom="5">
          <mp-form-control width="full" is-required>
            <mp-form-label>Bank name</mp-form-label>
            <mp-select placeholder="Select bank name" />
          </mp-form-control>
          <mp-form-control width="full" is-required>
            <mp-form-label>Account number</mp-form-label>
            <mp-input />
          </mp-form-control>
        </mp-flex>
        <mp-flex margin-bottom="5">
          <mp-form-control width="calc(50% - 12px)">
            <mp-form-label>Account holder name</mp-form-label>
            <mp-input />
          </mp-form-control>
        </mp-flex>
      </mp-box>

      <mp-divider margin-y="5" />

      <mp-flex margin-bottom="6">
        <mp-icon name="expenses" size="sm" margin-top="1.5" />
        <mp-box margin-left="2">
          <mp-heading as="h2" font-size="xl"> Tax information </mp-heading>
          <mp-text font-size="md" color="gray.600">
            Please provide the following tax details for company’s needed.
          </mp-text>
        </mp-box>
      </mp-flex>

      <mp-box margin-left="7">
        <mp-flex gap="6" margin-bottom="5">
          <mp-form-control width="full" is-required>
            <mp-form-label>NPWP</mp-form-label>
            <mp-input
              placeholder="00.000.000.0-000.000"
              v-mask="'##.###.###.#-###.###'"
            />
          </mp-form-control>
          <mp-form-control width="full" is-required>
            <mp-form-label>PTKP status</mp-form-label>
            <mp-select placeholder="Select PTKP name" />
          </mp-form-control>
        </mp-flex>
      </mp-box>

      <mp-divider margin-y="5" />

      <mp-flex margin-bottom="6">
        <mp-icon name="doc" size="sm" margin-top="1.5" />
        <mp-box margin-left="2">
          <mp-heading as="h2" font-size="xl"> Additional document </mp-heading>
          <mp-text font-size="md" color="gray.600">
            You can attach the required documents below.
          </mp-text>
        </mp-box>
      </mp-flex>

      <mp-box margin-left="7">
        <mp-flex gap="6" margin-bottom="11">
          <mp-form-control width="full" is-required>
            <mp-form-label>KTP</mp-form-label>
            <mp-upload is-full-width />
          </mp-form-control>
          <mp-form-control width="full" is-required>
            <mp-form-label>NPWP</mp-form-label>
            <mp-upload is-full-width />
          </mp-form-control>
        </mp-flex>
      </mp-box>

      <mp-flex justify-content="flex-end" margin-bottom="10">
        <mp-button margin-right="3" variant="ghost"> Cancel </mp-button>
        <mp-button>Submit</mp-button>
      </mp-flex>
    </mp-box>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpDivider,
  MpHeading,
  MpText,
  MpIcon,
  MpFormControl,
  MpFormLabel,
  MpInput,
  MpTextarea,
  MpDatePicker,
  MpRadioGroup,
  MpRadio,
  MpSelect,
  MpUpload,
  MpButton,
  MpBanner,
  MpBannerIcon,
  MpBannerDescription,
  MpBannerCloseButton,
} from "@mekari/pixel";

export default {
  name: "Form",
  components: {
    MpBox,
    MpFlex,
    MpDivider,
    MpHeading,
    MpText,
    MpIcon,
    MpFormControl,
    MpFormLabel,
    MpInput,
    MpTextarea,
    MpDatePicker,
    MpRadioGroup,
    MpRadio,
    MpSelect,
    MpUpload,
    MpButton,
    MpBanner,
    MpBannerIcon,
    MpBannerDescription,
    MpBannerCloseButton,
  },
};
</script>
