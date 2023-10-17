<template>
  <mp-box>
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 60px)">
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
          <mp-box height="12">
            <mp-text font-size="sm" is-link>Overtime compensation</mp-text>
            <mp-heading as="h1" font-size="2xl" font-weight="semibold">
              Create compensation rule
            </mp-heading>
          </mp-box>
        </mp-flex>

        <mp-box
          min-height="calc(100vh - 142px)"
          border-top-width="1px"
          background-color="white"
          padding="6"
        >
          <mp-grid
            width="1480px"
            template-rows="repeat(1, 1fr)"
            template-columns="repeat(7, 1fr)"
            gap="6"
          >
            <mp-grid-item col-span="5" col-start="1" col-end="5">
              <GeneralInfoForm />
              <mp-divider />
              <AssignRuleForm />
              <mp-divider />
              <mp-flex
                gap="2"
                justify-content="right"
                align-items="center"
                margin-top="6"
              >
                <mp-button variant="ghost">Cancel</mp-button>
                <mp-button>Save</mp-button>
              </mp-flex>
            </mp-grid-item>
          </mp-grid>
        </mp-box>
      </mp-box>
    </mp-flex>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpGrid,
  MpGridItem,
  MpDivider,
  MpButton,
  MpHeading,
  MpText,
} from "@mekari/pixel";
import Header from "../../components/Header";
import GeneralInfoForm from "./GeneralInfoForm";
import AssignRuleForm from "./AssignRuleForm";

export default {
  name: "AddLocationSetting",
  components: {
    MpBox,
    MpFlex,
    MpGrid,
    MpGridItem,
    MpDivider,
    MpButton,
    MpHeading,
    MpText,
    Header,
    GeneralInfoForm,
    AssignRuleForm,
  },
};
</script>