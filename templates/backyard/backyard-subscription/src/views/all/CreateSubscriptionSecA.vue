<template>
  <mp-box :width="['100%', '800px']">
    <mp-flex
      flex-direction="column"
      :width="['100%', '50%']"
      :padding-right="[0, 2.5]"
    >
      <mp-form-control margin-bottom="5">
        <mp-form-label>Company</mp-form-label>
        <mp-select placeholder="Select company"> </mp-select>
      </mp-form-control>
    </mp-flex>
    <mp-flex margin-bottom="8">
      <mp-icon name="draft" variant="duotone" margin-right="2" />
      <mp-button variant="link">View or update detail</mp-button>
    </mp-flex>
    <mp-banner variant="info" margin-bottom="6">
      <mp-banner-icon />
      <mp-banner-description>
        This company has a proforma invoice with outstanding client invoice.
        Please check to avoid duplication.
        <mp-button variant="link">View proforma invoice</mp-button>
      </mp-banner-description>
    </mp-banner>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpFormControl,
  MpFormLabel,
  MpIcon,
  MpButton,
  MpSelect,
  MpBanner,
  MpBannerIcon,
  MpBannerDescription,
} from "@mekari/pixel";

export default {
  name: "CreateSubscriptionSecA",
  components: {
    MpBox,
    MpFlex,
    MpFormControl,
    MpFormLabel,
    MpIcon,
    MpSelect,
    MpButton,
    MpBanner,
    MpBannerIcon,
    MpBannerDescription,
  },
};
</script>