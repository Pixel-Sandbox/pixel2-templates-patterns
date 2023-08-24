<template>
  <mp-box>
    <mp-flex flex-direction="column">
      <mp-form-control margin-bottom="6" is-required>
        <mp-form-label>Assign current employee</mp-form-label>
        <mp-button variant="outline" @click="handleDrawerOpen">
          Select employee
        </mp-button>
      </mp-form-control>
      <mp-banner variant="info" margin-bottom="6">
        <mp-banner-icon />
        <mp-banner-description>
          2 employees selected to apply this compensation rule.
          <mp-button variant="link" @click="handleDrawerOpen">
            View employee
          </mp-button>
        </mp-banner-description>
      </mp-banner>
    </mp-flex>
    <mp-form-control control-id="default-policy" is-required margin-bottom="6">
      <mp-checkbox @change="handleToggleAssignPolicy">
        Assign default policy for new employee
      </mp-checkbox>
    </mp-form-control>
    <mp-box v-if="assignPolicy">
      <mp-text font-weight="semibold">Set criteria</mp-text>
      <mp-box
        border="1px"
        border-color="gray.100"
        border-radius="md"
        padding-y="3"
        padding-x="4"
      >
        <mp-flex width="full" align-items="center">
          <mp-badge variant="subtle" variant-color="blue" margin-right="6">
            Criteria 1
          </mp-badge>
          <mp-form-control>
            <mp-select value="branch" width="280px" is-full-width>
              <option value="branch">Branch</option>
            </mp-select>
          </mp-form-control>
          <mp-icon name="arrows-right" margin-x="4" />
          <mp-form-control>
            <mp-input-tag
              width="280px"
              placeholder="Search branch..."
              :enable-create-new-tag="false"
              :suggestions="['Bandung', 'Bali']"
              :is-show-icon-chevron-down="true"
              :is-show-suggestions="true"
              :content-style="{ width: '48' }"
              :trigger-style="{ maxHeight: '24', overflowY: 'auto' }"
            />
          </mp-form-control>
        </mp-flex>
      </mp-box>
      <mp-button variant="outline" margin-y="3" left-icon="add-circular">
        Add criteria
      </mp-button>
    </mp-box>

    <AssignRuleDrawer
      :isDrawerOpen="isDrawerOpen"
      :handleDrawerOpen="handleDrawerOpen"
      :handleDrawerClose="handleDrawerClose"
    />
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpText,
  MpButton,
  MpBadge,
  MpIcon,
  MpSelect,
  MpInputTag,
  MpFormControl,
  MpFormLabel,
  MpCheckbox,
  MpBanner,
  MpBannerIcon,
  MpBannerDescription,
} from "@mekari/pixel";
import AssignRuleDrawer from "./AssignRuleDrawer";

export default {
  name: "FormWithVuelidateView",
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpButton,
    MpBadge,
    MpIcon,
    MpSelect,
    MpInputTag,
    MpFormControl,
    MpFormLabel,
    MpCheckbox,
    MpBanner,
    MpBannerIcon,
    MpBannerDescription,
    AssignRuleDrawer,
  },
  data: function () {
    return {
      isDrawerOpen: false,
      assignPolicy: false,
    };
  },
  methods: {
    handleDrawerOpen: function () {
      this.isDrawerOpen = true;
    },
    handleDrawerClose: function () {
      this.isDrawerOpen = false;
    },
    handleToggleAssignPolicy: function () {
      this.assignPolicy = !this.assignPolicy;
    },
  },
};
</script>