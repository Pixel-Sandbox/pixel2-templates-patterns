<template>
  <mp-drawer :is-open="isDrawerOpen" :on-close="handleDrawerClose">
    <mp-drawer-overlay />
    <mp-drawer-content width="800px" max-width="800px">
      <mp-drawer-header>Add location</mp-drawer-header>
      <mp-drawer-close-button />
      <mp-drawer-body overflow-x="scroll">
        <mp-flex gap="4">
          <mp-form-control
            control-id="name"
            is-required
            margin-bottom="5"
            width="full"
          >
            <mp-form-label>Name</mp-form-label>
            <mp-input />
            <mp-form-help-text>Max 175 words.</mp-form-help-text>
          </mp-form-control>

          <mp-form-control control-id="radius" margin-bottom="5" width="full">
            <mp-form-label>Radius</mp-form-label>
            <mp-input-group>
              <mp-input />
              <mp-input-right-addon>
                <mp-text font-weight="bold" padding-x="3">Meters</mp-text>
              </mp-input-right-addon>
            </mp-input-group>
            <mp-form-help-text>
              Max radius is 1000 meters from your location.
            </mp-form-help-text>
          </mp-form-control>
        </mp-flex>
        <mp-form-control control-id="query" margin-bottom="5" width="full">
          <mp-form-label>Search location</mp-form-label>
          <mp-input-group>
            <mp-input-left-addon :with-background="false">
              <mp-icon name="search" size="sm" />
            </mp-input-left-addon>
            <mp-input placeholder="Enter a query" />
          </mp-input-group>
        </mp-form-control>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3850367815335!2d106.8154665653587!3d-6.212843787758819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f402523079bd%3A0x825ec6124e4cccf4!2sMidPlaza%202!5e0!3m2!1sen!2sid!4v1657098013549!5m2!1sen!2sid"
          width="768"
          height="300"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
        <mp-flex gap="4">
          <mp-box width="50%" margin-top="5">
            <mp-text font-weight="bold">Address</mp-text>
            <mp-text margin-top="3">
              Mid Plaza, Jl. Jenderal Sudirman No.Kav 10-11, RT.10/RW.11, Karet
              Tengsin, Kecamatan Tanah Abang, Kota Jakarta Pusat, Daerah Khusus
              Ibukota Jakarta 10250, Indonesia
            </mp-text>
          </mp-box>
          <mp-box width="50%" margin-top="5">
            <mp-text font-weight="bold">Coordinate</mp-text>
            <mp-text margin-top="3">-6.2093109, 106.8207143</mp-text>
          </mp-box>
        </mp-flex>

        <!-- <mp-divider margin-y="7" />

        <mp-form-control control-id="indoor-live" is-required margin-bottom="6">
          <mp-checkbox @change="handleToggleIndoorLive">
            Use indoor live attendance (Wi-Fi)
          </mp-checkbox>
          <mp-tooltip label="-" position="right">
            <mp-icon name="info" size="sm" margin-left="2" />
          </mp-tooltip>
        </mp-form-control>

        <mp-box v-if="this.isIndoorLive">
          <mp-heading as="h3" font-size="lg" margin-top="6">
            Assign Wi-Fi
          </mp-heading>

          <mp-table>
            <mp-table-head>
              <mp-table-row cursor="pointer">
                <mp-table-cell as="th">
                  Wi-Fi/Router Name
                  <mp-icon name="sort-default" />
                </mp-table-cell>
                <mp-table-cell as="th" colspan="2">
                  BSSID
                  <mp-icon name="sort-default" />
                </mp-table-cell>
              </mp-table-row>
            </mp-table-head>
            <mp-table-body>
              <mp-table-row v-if="toggleInput">
                <mp-table-cell as="td">
                  <mp-input
                    v-model="toggleNameContent"
                    is-full-width
                    width="240px"
                  />
                </mp-table-cell>
                <mp-table-cell as="td">
                  <mp-input
                    v-model="toggleBSSIDContent"
                    is-full-width
                    width="240px"
                  />
                </mp-table-cell>
                <mp-table-cell as="td" text-align="right">
                  <mp-flex justify-content="flex-end" align-items="center">
                    <mp-button
                      variant="ghost"
                      margin-right="6"
                      @click="handleToggleInput(false)"
                    >
                      Cancel
                    </mp-button>
                    <mp-button variant="link" @click="handleToggleInput(false)">
                      Save Changes
                    </mp-button>
                  </mp-flex>
                </mp-table-cell>
              </mp-table-row>
              <mp-table-row v-else>
                <mp-table-cell as="td">{{ toggleNameContent }}</mp-table-cell>
                <mp-table-cell as="td">{{ toggleBSSIDContent }}</mp-table-cell>
                <mp-table-cell as="td" text-align="right">
                  <mp-button-icon
                    name="edit"
                    size="sm"
                    margin-right="2"
                    @click="handleToggleInput(true)"
                  />
                  <mp-button-icon name="delete" size="sm" />
                </mp-table-cell>
              </mp-table-row>
            </mp-table-body>
          </mp-table>

          <mp-button variant="outline" margin-top="3" left-icon="add">
            Add Wi-Fi
          </mp-button>
        </mp-box> -->
      </mp-drawer-body>
      <mp-drawer-footer>
        <mp-button variant="ghost" mr="3" @click="handleDrawerClose">
          Cancel
        </mp-button>
        <mp-button>Submit</mp-button>
      </mp-drawer-footer>
    </mp-drawer-content>
  </mp-drawer>
</template>

<script>
import {
  MpFlex,
  MpBox,
  MpText,
  MpIcon,
  MpButton,
  MpFormControl,
  MpFormLabel,
  MpFormHelpText,
  MpInput,
  MpInputGroup,
  MpInputLeftAddon,
  MpInputRightAddon,
  MpDrawer,
  MpDrawerOverlay,
  MpDrawerContent,
  MpDrawerCloseButton,
  MpDrawerHeader,
  MpDrawerBody,
  MpDrawerFooter,
} from "@mekari/pixel";

export default {
  name: "SelectLocationDrawer",
  components: {
    MpFlex,
    MpBox,
    MpText,
    MpIcon,
    MpButton,
    MpFormControl,
    MpFormLabel,
    MpFormHelpText,
    MpInput,
    MpInputGroup,
    MpInputLeftAddon,
    MpInputRightAddon,
    MpDrawer,
    MpDrawerOverlay,
    MpDrawerContent,
    MpDrawerCloseButton,
    MpDrawerHeader,
    MpDrawerBody,
    MpDrawerFooter,
  },
  props: {
    isDrawerOpen: [Boolean],
    handleDrawerOpen: [Function],
    handleDrawerClose: [Function],
  },
  data() {
    return {
      toggleInput: false,
      toggleNameContent: "Office A",
      toggleBSSIDContent: "73:a2:c1:c9:67:59",
      isIndoorLive: false,
    };
  },
  methods: {
    handleToggleInput: function (data) {
      this.toggleInput = data;
    },
    handleToggleIndoorLive: function () {
      this.isIndoorLive = !this.isIndoorLive;
    },
  },
};
</script>