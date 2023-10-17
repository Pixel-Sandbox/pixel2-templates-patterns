<template>
  <mp-box position="relative">
    <mp-heading
      as="h3"
      color="dark"
      font-size="lg"
      margin-top="5"
      margin-bottom="3"
    >
      Others
    </mp-heading>
    <mp-flex>
      <mp-box :width="['100%', '800px']">
        <mp-flex :flex-direction="['column', 'row']" :gap="[0, 5]">
          <mp-flex flex-direction="column" flex="1 0 0">
            <mp-form-control margin-bottom="5" is-required>
              <mp-form-label>
                Salesperson
                <mp-tooltip position="right" label="-">
                  <mp-icon size="sm" name="info" margin-left="1" />
                </mp-tooltip>
              </mp-form-label>
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
                placeholder="Select salesperson"
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
            </mp-form-control>
          </mp-flex>
          <mp-flex
            flex-direction="column"
            justify-content="flex-end"
            flex="1 0 0"
          >
            <mp-form-control margin-bottom="5">
              <mp-form-label>MRR tagging type</mp-form-label>
              <mp-select value="renewal">
                <option value="renewal">Renewal</option>
              </mp-select>
            </mp-form-control>
          </mp-flex>
        </mp-flex>
        <mp-flex
          :flex-direction="['row', 'column']"
          :gap="[0, 5]"
          :width="['100%', '50%']"
          padding-right="2.5"
        >
          <mp-flex flex-direction="column">
            <mp-form-control margin-bottom="5">
              <mp-form-label>Category</mp-form-label>
              <mp-radio-group spacing="4" is-inline>
                <mp-radio>Direct</mp-radio>
                <mp-radio>Partner</mp-radio>
              </mp-radio-group>
            </mp-form-control>
          </mp-flex>
        </mp-flex>
        <mp-flex
          :flex-direction="['row', 'column']"
          :gap="[0, 5]"
          :width="['100%', '50%']"
          :padding-right="['0', '2.5']"
        >
          <mp-flex flex-direction="column" flex="1 0 0">
            <mp-form-control margin-bottom="5">
              <mp-form-label>Secondary person</mp-form-label>
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
                placeholder="Select secondary person"
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
            </mp-form-control>
          </mp-flex>
        </mp-flex>
        <mp-flex
          :flex-direction="['row', 'column']"
          :gap="[0, 5]"
          :width="['100%', '50%']"
          padding-right="2.5"
        >
          <mp-flex flex-direction="column">
            <mp-form-control margin-bottom="5">
              <mp-form-label>Leadsource</mp-form-label>
              <mp-radio-group spacing="4" is-inline>
                <mp-radio>Inbound</mp-radio>
                <mp-radio>Outbound</mp-radio>
                <mp-radio>Referral</mp-radio>
              </mp-radio-group>
            </mp-form-control>
          </mp-flex>
        </mp-flex>
        <mp-flex
          :flex-direction="['row', 'column']"
          :gap="[0, 5]"
          :width="['100%', '50%']"
          :padding-right="['0', '2.5']"
        >
          <mp-flex flex-direction="column" flex="1 0 0">
            <mp-form-control margin-bottom="5" is-required>
              <mp-form-label>Telesales</mp-form-label>
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
                placeholder="Select telesales"
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
            </mp-form-control>
          </mp-flex>
        </mp-flex>
        <mp-flex gap="4" margin-bottom="5">
          <mp-button variant="link"
            >Add sales development representative</mp-button
          >
        </mp-flex>
        <mp-flex
          :flex-direction="['row', 'column']"
          :gap="[0, 5]"
          :width="['100%', '50%']"
          :padding-right="['0', '2.5']"
        >
          <mp-flex flex-direction="column" flex="1 0 0">
            <mp-form-control margin-bottom="5">
              <mp-form-label>Reference ID</mp-form-label>
              <mp-input />
            </mp-form-control>
          </mp-flex>
        </mp-flex>
        <mp-flex gap="4" margin-bottom="8">
          <mp-button variant="link">Add remarks</mp-button>
          <mp-button variant="link">Add memo</mp-button>
          <mp-button variant="link">Add attachment</mp-button>
        </mp-flex>
      </mp-box>
    </mp-flex>
    <mp-box
      :position="['relative', 'absolute']"
      top="0"
      right="0"
      :width="['100%', '428px']"
      background-color="rgba(242, 244, 247, 0.5)"
      border="1px solid"
      border-color="gray.100"
      border-radius="md"
      padding="4"
    >
      <mp-heading as="h3" color="dark" font-size="lg" margin-bottom="4">
        Summary
      </mp-heading>
      <mp-flex justify-content="space-between" margin-bottom="2">
        <mp-flex>
          <mp-text font-weight="semibold">Main package</mp-text>
        </mp-flex>
        <mp-flex>
          <mp-text font-weight="semibold">Rp6.475.675,56</mp-text>
        </mp-flex>
      </mp-flex>
      <mp-flex justify-content="space-between">
        <mp-flex>
          <mp-text font-weight="semibold">Add-ons</mp-text>
        </mp-flex>
        <mp-flex>
          <mp-text font-weight="semibold">Rp637.621,80</mp-text>
        </mp-flex>
      </mp-flex>
      <mp-divider />
      <mp-flex justify-content="space-between">
        <mp-flex>
          <mp-text>Discount</mp-text>
        </mp-flex>
        <mp-flex>
          <mp-text>Rp0</mp-text>
        </mp-flex>
      </mp-flex>
      <mp-flex margin-y="4">
        <mp-icon name="add-circular" variant="duotone" margin-right="2" />
        <mp-button variant="link">Additional discount</mp-button>
      </mp-flex>
      <mp-flex justify-content="space-between">
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
      <mp-flex justify-content="space-between" margin-bottom="2">
        <mp-flex flex-direction="column">
          <mp-heading as="h3" color="dark" font-size="lg">
            Net amount
          </mp-heading>
          <mp-text color="gray.600" font-size="sm">*Rounding price</mp-text>
        </mp-flex>
        <mp-flex flex-direction="column">
          <mp-heading as="h3" color="dark" font-size="lg">
            Rp13.668.000
          </mp-heading>
        </mp-flex>
      </mp-flex>

      <mp-box display="grid" margin-top="8">
        <mp-button @click="onPayModalToggle(true)">Submit</mp-button>
      </mp-box>
    </mp-box>

    <CreateSubscriptionPayModal
      :isModalOpen="isPayModalOpen"
      :onModalToggle="onPayModalToggle"
      :onModalTrigger="onLinkModalToggle"
    />
    <CreateSubscriptionLinkModal
      :isModalOpen="isLinkModalOpen"
      :onModalToggle="onLinkModalToggle"
    />
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpHeading,
  MpText,
  MpFormControl,
  MpFormLabel,
  MpTooltip,
  MpIcon,
  MpAutocomplete,
  MpAvatar,
  MpButton,
  MpSelect,
  MpRadioGroup,
  MpRadio,
  MpInput,
  MpDivider,
} from "@mekari/pixel";
import CreateSubscriptionPayModal from "./CreateSubscriptionPayModal";
import CreateSubscriptionLinkModal from "./CreateSubscriptionLinkModal";

export default {
  name: "CreateSubscriptionSecD",
  components: {
    MpBox,
    MpFlex,
    MpHeading,
    MpText,
    MpFormControl,
    MpFormLabel,
    MpTooltip,
    MpIcon,
    MpInput,
    MpSelect,
    MpRadioGroup,
    MpRadio,
    MpAutocomplete,
    MpAvatar,
    MpButton,
    MpDivider,
    CreateSubscriptionPayModal,
    CreateSubscriptionLinkModal,
  },
  data: function () {
    return {
      billingDate: "",
      activeDate: "",
      endDate: "",
      isPayModalOpen: false,
      isLinkModalOpen: false,
    };
  },
  methods: {
    onPayModalToggle: function (data) {
      this.isPayModalOpen = data;
    },
    onLinkModalToggle: function (data) {
      this.isPayModalOpen = false;
      this.isLinkModalOpen = data;
    },
  },
};
</script>