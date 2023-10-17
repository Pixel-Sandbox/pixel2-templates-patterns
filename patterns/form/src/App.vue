<template>
  <mp-grid
    template-rows="repeat(1, 1fr)"
    template-columns="repeat(6, 1fr)"
    gap="6"
    padding="6"
  >
    <mp-grid-item col-span="4" col-start="1" col-end="5">
      <mp-heading as="h2" color="dark" margin-bottom="1">Owner info</mp-heading>
      <mp-text color="gray.600" margin-bottom="6">
        If you need a guidance to fill this form, learn more on Guidebook.
      </mp-text>

      <mp-flex flex-direction="column">
        <mp-form-control :is-invalid="$v.fullname.$error" margin-bottom="5">
          <mp-text font-weight="semibold" display="inline" margin-bottom="1">
            Full name
          </mp-text>
          <mp-input v-model="$v.fullname.$model" placeholder="Full name" />
          <mp-text
            v-if="$v.gender.$error && !$v.fullname.required"
            font-size="sm"
            color="red.400"
            margin-top="1"
          >
            You must fill in full name
          </mp-text>
        </mp-form-control>
      </mp-flex>

      <mp-flex flex-direction="row" gap="5">
        <mp-flex flex-direction="column" flex="2 0 0">
          <mp-form-control :is-invalid="$v.province.$error" margin-bottom="5">
            <mp-text font-weight="semibold" display="inline" margin-bottom="1">
              Province
            </mp-text>
            <mp-select
              v-model="$v.province.$model"
              placeholder="Province"
              is-full-width
            >
              <option value="jawa-barat">Jawa Barat</option>
              <option value="jawa-tengah">Jawa Tengah</option>
              <option value="jawa-timur">Jawa Timur</option>
            </mp-select>
            <mp-text
              v-if="$v.gender.$error && !$v.province.required"
              font-size="sm"
              color="red.400"
              margin-top="1"
            >
              You must fill in province
            </mp-text>
          </mp-form-control>
        </mp-flex>

        <mp-flex flex-direction="column" flex="1 0 0">
          <mp-form-control :is-invalid="$v.postal.$error" margin-bottom="5">
            <mp-text font-weight="semibold" display="inline" margin-bottom="1">
              Postal code
            </mp-text>
            <mp-input
              v-model="$v.postal.$model"
              type="number"
              placeholder="Postal code"
            />
            <mp-text
              v-if="$v.gender.$error && !$v.postal.required"
              font-size="sm"
              color="red.400"
              margin-top="1"
            >
              You must fill in postal code
            </mp-text>
            <mp-text
              v-if="$v.gender.$error && !$v.postal.maxLength"
              font-size="sm"
              color="red.400"
              margin-top="1"
            >
              You must have at most 5 letters.
            </mp-text>
          </mp-form-control>
        </mp-flex>
      </mp-flex>

      <mp-flex flex-direction="column">
        <mp-form-control :is-invalid="$v.gender.$error" margin-bottom="5">
          <mp-text font-weight="semibold" display="inline" margin-bottom="1">
            Gender
          </mp-text>
          <mp-radio-group name="gender" v-model="$v.gender.$model" is-inline>
            <mp-radio value="male">Male</mp-radio>
            <mp-radio value="female">Female</mp-radio>
          </mp-radio-group>
          <mp-text
            v-if="$v.gender.$error && !$v.gender.required"
            font-size="sm"
            color="red.400"
            margin-top="1"
          >
            You must fill in gender
          </mp-text>
        </mp-form-control>
      </mp-flex>

      <mp-flex flex-direction="column">
        <mp-form-control>
          <mp-checkbox
            v-model="$v.agreement.$model"
            :is-invalid="$v.agreement.$error"
          >
            Agree with the Terms & Conditions of Mekari Capital activation for
            your business.
          </mp-checkbox>
        </mp-form-control>
      </mp-flex>

      <mp-flex justify-content="space-between" margin-top="7">
        <mp-button variant="ghost">Cancel</mp-button>
        <mp-button :is-loading="loading" @click="handleSubmit"
          >Submit</mp-button
        >
      </mp-flex>
    </mp-grid-item>
    <mp-grid-item col-span="2">
      <json-viewer :value="$v" />
    </mp-grid-item>
  </mp-grid>
</template>

<script>
  import {
    MpGrid,
    MpGridItem,
    MpFlex,
    MpHeading,
    MpText,
    MpFormControl,
    MpInput,
    MpSelect,
    MpRadioGroup,
    MpRadio,
    MpCheckbox,
    MpButton,
  } from "@mekari/pixel";
  import { required, maxLength } from "vuelidate/lib/validators";
  const mustBeTrue = (value) => value === true;

  export default {
    name: "App",
    components: {
      MpGrid,
      MpGridItem,
      MpFlex,
      MpHeading,
      MpText,
      MpFormControl,
      MpInput,
      MpSelect,
      MpRadioGroup,
      MpRadio,
      MpCheckbox,
      MpButton,
    },
    data() {
      return {
        fullname: null,
        province: null,
        postal: null,
        gender: null,
        agreement: null,
        submitted: false,
        loading: false,
      };
    },
    validations: {
      fullname: { required },
      province: { required },
      postal: { required, maxLength: maxLength(5) },
      gender: { required },
      agreement: { required, mustBeTrue },
    },
    methods: {
      handleSubmit() {
        this.$v.$touch();
        this.loading = false;
        if (this.$v.$invalid) {
          this.submitted = false;
        } else {
          this.loading = true;
          setTimeout(() => {
            this.$toast({
              title: "Successfully updated",
              variant: "success",
              position: "top",
            });
            this.submitted = true;
            this.loading = false;
          }, 1000);
        }
      },
    },
  };
</script>