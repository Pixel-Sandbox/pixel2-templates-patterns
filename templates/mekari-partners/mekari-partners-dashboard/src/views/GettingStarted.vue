<template>
  <mp-box>
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 60px)">
      <Sidebar is-alternate is-custom />
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
          padding-y="1.125rem"
        >
          <mp-box>
            <mp-heading as="h1" font-size="2xl" font-weight="bold" color="dark">
              Welcome Rizal,
            </mp-heading>
            <mp-text color="gray.600">
              Let’s get you set up for your growth with Mekari Partners
            </mp-text>
          </mp-box>
        </mp-flex>
        <mp-box
          min-height="calc(100vh - 132px)"
          border-top-left-radius="md"
          padding-right="6"
          padding-bottom="6"
        >
          <mp-box padding-bottom="3">
            <mp-box
              background="white"
              padding="6"
              border-radius="md"
              border-width="1px"
            >
              <mp-heading as="h2" font-size="xl" margin-bottom="9">
                Set up your partner dashboard
              </mp-heading>

              <mp-flex
                justify-content="space-between"
                align-items="center"
                margin-bottom="7"
                margin-left="4"
              >
                <mp-flex>
                  <mp-icon
                    name="done"
                    variant="duotone"
                    size="sm"
                    margin-top="0.5"
                  />
                  <mp-flex flex-direction="column" margin-left="2">
                    <mp-heading as="h3" font-size="lg">
                      Verify your data
                    </mp-heading>
                    <mp-text color="gray.600">
                      Review your personal information data.
                    </mp-text>
                  </mp-flex>
                </mp-flex>
                <!-- <mp-box>
                  <mp-button variant="outline">View data</mp-button>
                </mp-box> -->
              </mp-flex>

              <mp-flex
                justify-content="space-between"
                align-items="center"
                margin-bottom="7"
                margin-left="4"
              >
                <mp-flex>
                  <mp-icon
                    name="done"
                    variant="duotone"
                    size="sm"
                    margin-top="0.5"
                  />
                  <mp-flex flex-direction="column" margin-left="2">
                    <mp-heading as="h3" font-size="lg">
                      Payment information
                    </mp-heading>
                    <mp-text color="gray.600">
                      Review your payment information data to get payout
                      commission.
                    </mp-text>
                  </mp-flex>
                </mp-flex>
                <!-- <mp-box>
                  <mp-button variant="outline">View data</mp-button>
                </mp-box> -->
              </mp-flex>

              <mp-box
                background="white"
                padding-x="4"
                padding-y="6"
                border-radius="md"
                border-width="1px"
                margin-bottom="9"
              >
                <mp-flex
                  justify-content="space-between"
                  align-items="center"
                  margin-bottom="5"
                >
                  <mp-flex>
                    <mp-icon name="done" size="sm" margin-top="0.5" />
                    <mp-flex flex-direction="column" margin-left="2">
                      <mp-heading as="h3" font-size="lg">
                        Get understanding about your product offer
                      </mp-heading>
                      <mp-text color="gray.600">
                        Quick learn to get more understanding about product and
                        how to offer.
                      </mp-text>
                    </mp-flex>
                  </mp-flex>
                </mp-flex>

                <mp-flex margin-x="6" margin-bottom="6" gap="6">
                  <mp-flex
                    flex="1 0 0 "
                    background="white"
                    padding-x="4"
                    padding-y="3"
                    border-radius="md"
                    border-width="1px"
                    flex-direction="column"
                  >
                    <mp-icon name="jurnal-brand" margin-bottom="3" />
                    <mp-text font-weight="semibold" margin-bottom="2">
                      Mekari Jurnal
                    </mp-text>
                    <mp-text color="gray.600" font-size="sm" margin-bottom="6">
                      Integrated finance & accounting software
                    </mp-text>
                    <mp-text is-link>Learn more</mp-text>
                  </mp-flex>
                  <mp-flex
                    flex="1 0 0 "
                    background="white"
                    padding-x="4"
                    padding-y="3"
                    border-radius="md"
                    border-width="1px"
                    flex-direction="column"
                  >
                    <mp-icon name="qontak-brand" margin-bottom="3" />
                    <mp-text font-weight="semibold" margin-bottom="2">
                      Mekari Qontak
                    </mp-text>
                    <mp-text color="gray.600" font-size="sm" margin-bottom="6">
                      CRM & Omnichannel communication software
                    </mp-text>
                    <mp-text is-link>Learn more</mp-text>
                  </mp-flex>
                </mp-flex>

                <mp-flex margin-left="6" gap="4">
                  <mp-button variant="outline">
                    Explore more product
                  </mp-button>
                  <mp-button>Ok, got it</mp-button>
                </mp-flex>
              </mp-box>

              <mp-flex
                justify-content="space-between"
                align-items="center"
                margin-bottom="5"
                margin-left="4"
              >
                <mp-flex>
                  <mp-icon name="done" size="sm" margin-top="0.5" />
                  <mp-flex flex-direction="column" margin-left="2">
                    <mp-heading as="h3" font-size="lg">
                      Copy your referral link and share
                    </mp-heading>
                    <mp-text color="gray.600">
                      Get referral link from your product offer and share to
                      your client.
                    </mp-text>
                  </mp-flex>
                </mp-flex>
              </mp-flex>
            </mp-box>

            <mp-pseudo-box
              :_hover="{ cursor: 'pointer' }"
              @click="onHideModalToggle(true)"
            >
              <mp-flex
                gap="2"
                margin-top="5"
                margin-left="6"
                margin-bottom="10"
              >
                <mp-icon name="hide" size="sm" />
                <mp-text color="gray.600"> Hide getting started </mp-text>
              </mp-flex>
            </mp-pseudo-box>

            <mp-box margin-left="6">
              <mp-heading as="h2" font-size="xl" margin-bottom="5">
                Need help?
              </mp-heading>

              <mp-flex margin-x="4" gap="6">
                <mp-flex flex="1 0 0">
                  <mp-icon name="empty" size="sm" margin-top="0.5" />
                  <mp-flex flex-direction="column" margin-left="2">
                    <mp-heading as="h3" font-size="lg"
                      >Support articles partners</mp-heading
                    >
                    <mp-text color="gray.600" margin-bottom="5">
                      A guidebook for your reference to help you earn more
                      commission claims.
                    </mp-text>
                    <mp-text is-link>Learn more</mp-text>
                  </mp-flex>
                </mp-flex>

                <mp-flex flex="1 0 0">
                  <mp-icon name="empty" size="sm" margin-top="0.5" />
                  <mp-flex flex-direction="column" margin-left="2">
                    <mp-heading as="h3" font-size="lg">Guidebook</mp-heading>
                    <mp-text color="gray.600" margin-bottom="5">
                      Find documentation and tutorial on how to use Mekari
                      products.
                    </mp-text>
                    <mp-text is-link>Learn more</mp-text>
                  </mp-flex>
                </mp-flex>

                <mp-flex flex="1 0 0">
                  <mp-icon name="empty" size="sm" margin-top="0.5" />
                  <mp-flex flex-direction="column" margin-left="2">
                    <mp-heading as="h3" font-size="lg">
                      Developer docs
                    </mp-heading>
                    <mp-text color="gray.600" margin-bottom="5">
                      Discover and explore our products various features and
                      integration for your developer.
                    </mp-text>
                    <mp-text is-link>Learn more</mp-text>
                  </mp-flex>
                </mp-flex>
              </mp-flex>
            </mp-box>
          </mp-box>
        </mp-box>
      </mp-box>
    </mp-flex>

    <GettingStartedModal
      :isModalOpen="isHide"
      :onModalToggle="onHideModalToggle"
    />
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpButton,
  MpHeading,
  MpText,
  MpIcon,
  MpPseudoBox,
} from "@mekari/pixel";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import GettingStartedModal from "./GettingStartedModal";

export default {
  name: "GettingStarted",
  components: {
    MpBox,
    MpFlex,
    MpButton,
    MpHeading,
    MpText,
    MpIcon,
    MpPseudoBox,
    Header,
    Sidebar,
    GettingStartedModal,
  },
  data: () => {
    return {
      isHide: false,
    };
  },
  methods: {
    onHideModalToggle: function (data) {
      this.isHide = data;
    },
  },
};
</script>