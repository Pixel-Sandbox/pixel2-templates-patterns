<template>
  <mp-box
    as="section"
    data-id="sidebar-child"
    max-width="12.75rem"
    width="full"
    border-right="1px"
    border-color="gray.100"
    max-height="calc(100vh - 60px)"
    padding-y="4"
    margin-left="60px"
    transition="all .2s ease"
    :display="['none', 'block']"
  >
    <mp-box
      max-height="calc(100vh - 90px)"
      overflow-y="auto"
      overflow-x="hidden"
    >
      <mp-text
        font-size="md"
        font-weight="semibold"
        color="blue.400"
        padding-x="4"
        padding-y="2"
      >
        SUBSCRIPTION
      </mp-text>
      <mp-box>
        <mp-flex direction="column">
          <mp-pseudo-box
            flex="1"
            role="group"
            as="router-link"
            to="/"
            border-radius="sm"
            padding-x="4"
            padding-y="2"
            color="dark"
            font-weight="regular"
            :_hover="{
              color:
                this.$router.currentRoute.name === 'Subscription' ||
                this.$router.currentRoute.name === 'CreateSubscription' ||
                this.$router.currentRoute.name === 'ViewSubscription'
                  ? 'dark'
                  : 'blue.400',
              cursor: 'pointer',
            }"
          >
            <mp-stack direction="row" align="center">
              <mp-text
                :font-weight="
                  this.$router.currentRoute.name === 'Subscription' ||
                  this.$router.currentRoute.name === 'CreateSubscription' ||
                  this.$router.currentRoute.name === 'ViewSubscription'
                    ? 'semibold'
                    : 'regular'
                "
                >All subscription</mp-text
              >
            </mp-stack>
          </mp-pseudo-box>
        </mp-flex>
      </mp-box>
      <mp-box>
        <mp-flex direction="column">
          <mp-pseudo-box
            flex="1"
            role="group"
            as="router-link"
            to="/approval-request"
            border-radius="sm"
            padding-x="4"
            padding-y="2"
            color="dark"
            font-weight="inherit"
            :_hover="{
              color:
                this.$router.currentRoute.name === 'ApprovalRequest' ||
                this.$router.currentRoute.name === 'ViewApprovalRequest'
                  ? 'dark'
                  : 'blue.400',
              cursor: 'pointer',
            }"
          >
            <mp-stack
              direction="row"
              align-items="center"
              justify-content="space-between"
            >
              <mp-text
                :font-weight="
                  this.$router.currentRoute.name === 'ApprovalRequest' ||
                  this.$router.currentRoute.name === 'ViewApprovalRequest'
                    ? 'semibold'
                    : 'regular'
                "
                >Approval request</mp-text
              >
              <mp-badge variant="solid" variant-color="red"> 1 </mp-badge>
            </mp-stack>
          </mp-pseudo-box>
        </mp-flex>
      </mp-box>
      <mp-box>
        <mp-flex direction="column">
          <mp-pseudo-box
            flex="1"
            role="group"
            as="router-link"
            to="/proforma-invoice"
            border-radius="sm"
            padding-x="4"
            padding-y="2"
            color="dark"
            font-weight="inherit"
            :_hover="{
              color:
                this.$router.currentRoute.name === 'ProformaInvoice' ||
                this.$router.currentRoute.name === 'ViewProformaInvoice'
                  ? 'dark'
                  : 'blue.400',
              cursor: 'pointer',
            }"
          >
            <mp-stack direction="row" align="center">
              <mp-text
                :font-weight="
                  this.$router.currentRoute.name === 'ProformaInvoice' ||
                  this.$router.currentRoute.name === 'ViewProformaInvoice'
                    ? 'semibold'
                    : 'regular'
                "
                >Proforma invoice</mp-text
              >
            </mp-stack>
          </mp-pseudo-box>
        </mp-flex>
      </mp-box>
      <mp-box>
        <mp-flex direction="column">
          <mp-pseudo-box
            flex="1"
            role="group"
            as="router-link"
            to="/client-invoice"
            border-radius="sm"
            padding-x="4"
            padding-y="2"
            color="dark"
            font-weight="inherit"
            :_hover="{
              color:
                this.$router.currentRoute.name === 'ClientInvoice' ||
                this.$router.currentRoute.name === 'ViewClientInvoice'
                  ? 'dark'
                  : 'blue.400',
              cursor: 'pointer',
            }"
          >
            <mp-stack direction="row" align="center">
              <mp-text
                :font-weight="
                  this.$router.currentRoute.name === 'ClientInvoice' ||
                  this.$router.currentRoute.name === 'ViewClientInvoice'
                    ? 'semibold'
                    : 'regular'
                "
                >Client invoice</mp-text
              >
            </mp-stack>
          </mp-pseudo-box>
        </mp-flex>
      </mp-box>
    </mp-box>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpText,
  MpStack,
  MpBadge,
  MpPseudoBox,
} from "@mekari/pixel";

export default {
  name: "SidebarChild",
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpStack,
    MpBadge,
    MpPseudoBox,
  },
  data: function () {
    return {
      isActive: 0,
    };
  },
  methods: {
    handleChange: function (data) {
      this.isActive = data;
    },
  },
};
</script>