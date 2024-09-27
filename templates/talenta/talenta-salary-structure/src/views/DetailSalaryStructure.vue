<template>
  <mp-box>
    <PageLoader :is-loading="isLoading" />
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
          padding-y="2.5"
        >
          <mp-box height="12">
            <mp-text as="p" font-size="sm" is-link>Salary structure</mp-text>
            <mp-flex align-items="center">
              <mp-heading as="h1" font-size="2xl" font-weight="semibold">
                Salary Structure Customer Support & Marketing 2024
              </mp-heading>
              <mp-badge variant-color="gray" margin-left="2">
                  Unlocked
                </mp-badge>
            </mp-flex>
          </mp-box>

          <mp-box>
            <mp-button right-icon="caret-down">Actions</mp-button>
          </mp-box>
        </mp-flex>

        <mp-flex justify-content="space-between" padding-x="6" padding-y="6">
          <mp-flex gap="4">
            <mp-box>
              <mp-input-group>
                <mp-input-right-addon :with-background="false">
                  <mp-icon name="chevrons-down" size="sm" />
                </mp-input-right-addon>
                <mp-input
                  value="All job position"
                  is-read-only
                  width="200px"
                  cursor="pointer"
                />
              </mp-input-group>
            </mp-box>
            <mp-box>
              <mp-input-group>
                <mp-input-right-addon :with-background="false">
                  <mp-icon name="chevrons-down" size="sm" />
                </mp-input-right-addon>
                <mp-input
                  value="All job level"
                  is-read-only
                  width="200px"
                  cursor="pointer"
                />
              </mp-input-group>
            </mp-box>
            <mp-button variant="outline">Apply filter</mp-button>
          </mp-flex>
          <mp-flex gap="2" align-items="center">
            <mp-icon name="chart-bar" variant="duotone" />
            <mp-text>This structure using <b>Spread Calculation</b></mp-text>
            <mp-icon name="info" size="sm" />
          </mp-flex>
        </mp-flex>

        <mp-box
          min-height="calc(100vh - 132px)"
          padding-top="0"
          padding-bottom="6"
          padding-x="6"
        >
          <DetailChart1 />
          <DetailChart2 />
          <DetailChart3 />
          <DetailChart4 />
        </mp-box>
      </mp-box>
    </mp-flex>
  </mp-box>
</template>

<script>
import { 
  MpBox, 
  MpFlex, 
  MpText,
  MpHeading, 
  MpButton, 
  MpIcon,
  MpBadge, 
  MpInput,
  MpInputGroup,
  MpInputRightAddon 
} from "@mekari/pixel"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import PageLoader from '../components/PageLoader'
import DetailChart1 from './DetailChart1.vue'
import DetailChart2 from './DetailChart2.vue'
import DetailChart3 from './DetailChart3.vue'
import DetailChart4 from './DetailChart4.vue'

export default {
  name: "DetailSalaryStructure",
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpHeading,
    MpButton,
    MpIcon,
    MpBadge,
    MpInput,
    MpInputGroup,
    MpInputRightAddon,
    Header,
    Sidebar,
    PageLoader,
    DetailChart1,
    DetailChart2,
    DetailChart3,
    DetailChart4
  },
  data() {
    return {
      isLoading: true,
      loadingTimeout: null,
    }
  },
  mounted() {
    this.loadingTimeout = setTimeout(() => {
      this.isLoading = false
    }, 3000)
  },
  beforeDestroy() {
    if (this.loadingTimeout) {
      clearTimeout(this.loadingTimeout)
    }
  },
}
</script>