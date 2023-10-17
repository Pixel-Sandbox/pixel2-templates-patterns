<template>
  <mp-modal size="md" :is-open="isModalOpen">
    <mp-modal-content>
      <mp-modal-header>Submit proforma invoice?</mp-modal-header>
      <mp-modal-close-button @click="onModalToggle(false)" />
      <mp-modal-body>
        <mp-banner variant="info" margin-bottom="4">
          <mp-banner-icon />
          <mp-banner-description>
            Once approved, we will send notification & payment link to
            <b>rizalchandra@mekari.com.</b>
          </mp-banner-description>
        </mp-banner>
        <mp-flex justify-content="space-between" margin-bottom="2">
          <mp-flex>
            <mp-text font-weight="semibold">Main package</mp-text>
          </mp-flex>
          <mp-flex>
            <mp-text font-weight="semibold">Rp6.475.675,56</mp-text>
          </mp-flex>
        </mp-flex>
        <mp-flex justify-content="space-between" margin-bottom="2">
          <mp-flex>
            <mp-text font-weight="semibold">Add-ons</mp-text>
          </mp-flex>
          <mp-flex>
            <mp-text font-weight="semibold">Rp637.621,80</mp-text>
          </mp-flex>
        </mp-flex>
        <mp-divider />
        <mp-flex justify-content="space-between" margin-bottom="2">
          <mp-flex>
            <mp-text font-weight="semibold">Subtotal before tax</mp-text>
          </mp-flex>
          <mp-flex>
            <mp-text font-weight="semibold">Rp7.465.320</mp-text>
          </mp-flex>
        </mp-flex>
        <mp-divider />
        <mp-flex justify-content="space-between" margin-bottom="2">
          <mp-flex>
            <mp-text>Tax 11%</mp-text>
          </mp-flex>
          <mp-flex>
            <mp-text>Rp821.185,2</mp-text>
          </mp-flex>
        </mp-flex>
        <mp-divider />
        <mp-flex justify-content="space-between" margin-bottom="3">
          <mp-flex flex-direction="column">
            <mp-text font-size="lg" font-weight="semibold">Net amount</mp-text>
            <mp-text color="gray.600" font-size="sm">*Rounding price</mp-text>
          </mp-flex>
          <mp-flex flex-direction="column">
            <mp-text font-size="lg" font-weight="semibold">
              Rp13.668.000
            </mp-text>
          </mp-flex>
        </mp-flex>
        <mp-form-control control-id="approver">
          <mp-form-label>Approver</mp-form-label>
          <mp-autocomplete
            :data="[
              {
                value: 'Agung Setiawan',
                position: 'Sales',
                src: 'https://randomuser.me/api/portraits/women/11.jpg',
              },
              {
                value: 'Alfian Ramadhan',
                position: 'Sales',
                src: 'https://randomuser.me/api/portraits/women/15.jpg',
              },
              {
                value: 'Bayu Ferdian',
                position: 'Sales',
                src: 'https://randomuser.me/api/portraits/women/14.jpg',
              },
            ]"
            placeholder="Select approver"
            :content-style="{ width: 'full' }"
          >
            <template slot-scope="props">
              <mp-flex align-items="center">
                <mp-avatar :src="props.item.src" background-color="stone" />
                <mp-box>
                  <mp-text padding-left="2">
                    {{ props.item.value }}
                  </mp-text>
                  <mp-text padding-left="2" font-size="sm" color="gray.600">
                    {{ props.item.position }}
                  </mp-text>
                </mp-box>
              </mp-flex>
            </template>
          </mp-autocomplete>
          <mp-form-help-text>
            Your proforma invoice may need approval.
            <mp-text as="a" target="_blank" font-size="sm" is-link>
              View approval guideline
            </mp-text>
          </mp-form-help-text>
        </mp-form-control>
      </mp-modal-body>
      <mp-modal-footer>
        <mp-button
          margin-right="3"
          variant="ghost"
          @click="onModalToggle(false)"
        >
          Cancel
        </mp-button>
        <mp-button @click="onModalTrigger(true)"> Submit & approve </mp-button>
      </mp-modal-footer>
    </mp-modal-content>
    <mp-modal-overlay />
  </mp-modal>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpText,
  MpButton,
  MpDivider,
  MpAutocomplete,
  MpAvatar,
  MpFormControl,
  MpFormLabel,
  MpFormHelpText,
  MpModal,
  MpModalOverlay,
  MpModalContent,
  MpModalHeader,
  MpModalBody,
  MpModalFooter,
  MpModalCloseButton,
  MpBanner,
  MpBannerIcon,
  MpBannerDescription,
} from "@mekari/pixel";

export default {
  name: "CreateSubscriptionPayModal",
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpButton,
    MpDivider,
    MpAutocomplete,
    MpAvatar,
    MpFormControl,
    MpFormLabel,
    MpFormHelpText,
    MpModal,
    MpModalOverlay,
    MpModalContent,
    MpModalHeader,
    MpModalBody,
    MpModalFooter,
    MpModalCloseButton,
    MpBanner,
    MpBannerIcon,
    MpBannerDescription,
  },
  props: {
    isModalOpen: [Boolean],
    onModalToggle: [Function],
    onModalTrigger: [Function],
  },
};
</script>