<template>
  <mp-box>
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 60px)">
      <Sidebar
        child-title="Settings"
        :child-menu="propertiesMenus"
        with-child
        is-custom
        default-is-toggle
      />
      <mp-box
        as="section"
        data-id="content"
        width="100%"
        height="calc(100vh - 60px)"
        overflow-y="auto"
        background-color="background"
      >
        <SubHeader title="Properties" type="properties" />
        <mp-box
          min-height="calc(100vh - 132px)"
          border-top-width="1px"
          border-left-width="1px"
          border-top-left-radius="md"
          border-color="gray.100"
          background-color="white"
        >
          <mp-flex gap="2">
            <mp-flex p="6">
              <mp-text>Place content here for {{ this.$route.path }}</mp-text>
            </mp-flex>
          </mp-flex>
        </mp-box>
      </mp-box>
    </mp-flex>
  </mp-box>
</template>

<script>
import { MpBox, MpFlex, MpText } from "@mekari/pixel";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import SubHeader from "../components/SubHeader";

export default {
  name: "PropertiesView",
  components: {
    MpBox,
    MpFlex,
    MpText,
    Header,
    Sidebar,
    SubHeader,
  },
  data() {
    return {};
  },
  computed: {
    propertiesMenus() {
      return [
        {
          name: "General",
          isActive: this.$route.params.type === "general",
          isOpen: this.$route.params.type === "general" ? 0 : 1,
          hasChildMenu: true,
          childMenus: [
            {
              name: "Basic information",
              link: "/properties/general/basic-information",
              isActive: this.$route.params.id === "basic-information",
            },
            {
              name: "Feature list",
              link: "/properties/general/feature-list",
              isActive: this.$route.params.id === "feature-list",
            },
            {
              name: "Email service provider",
              link: "/properties/general/email-service-provider",
              isActive: this.$route.params.id === "email-service-provider",
            },
          ],
        },
        {
          name: "User management",
          isActive: this.$route.params.type === "user-management",
          isOpen: this.$route.params.type === "user-management" ? 0 : 1,
          hasChildMenu: true,
          childMenus: [
            {
              name: "Users",
              link: "/properties/user-management/users",
              isActive: this.$route.params.id === "users",
            },
            {
              name: "Teams",
              link: "/properties/user-management/teams",
              isActive: this.$route.params.id === "teams",
            },
            {
              name: "Approval",
              link: "/properties/user-management/approval",
              isActive: this.$route.params.id === "approval",
            },
            {
              name: "User performance",
              link: "/properties/user-management/user-performance",
              isActive: this.$route.params.id === "user-performance",
            },
            {
              name: "User permission",
              link: "/properties/user-management/user-permission",
              isActive: this.$route.params.id === "user-permission",
            },
            {
              name: "Tracking time",
              link: "/properties/user-management/tracking-time",
              isActive: this.$route.params.id === "tracking-time",
            },
          ],
        },
        {
          name: "Properties",
          isActive: this.$route.params.type === "properties",
          isOpen: this.$route.params.type === "properties" ? 0 : 1,
          hasChildMenu: true,
          childMenus: [
            {
              name: "Contacts",
              link: "/properties/properties/contacts",
              isActive: this.$route.params.id === "contacts",
            },
            {
              name: "Companies",
              link: "/properties/properties/companies",
              isActive: this.$route.params.id === "companies",
            },
            {
              name: "Deals",
              link: "/properties/properties/deals",
              isActive: this.$route.params.id === "deals",
            },
            {
              name: "Tasks",
              link: "/properties/properties/tasks",
              isActive: this.$route.params.id === "tasks",
            },
            {
              name: "Tickets",
              link: "/properties/properties/tickets",
              isActive: this.$route.params.id === "tickets",
            },
            {
              name: "Products",
              link: "/properties/properties/products",
              isActive: this.$route.params.id === "products",
            },
          ],
        },
        {
          name: "Automations",
          isActive: this.$route.params.type === "automations",
          isOpen: this.$route.params.type === "automations" ? 0 : 1,
          hasChildMenu: true,
          childMenus: [
            {
              name: "Automated action",
              link: "/properties/automations/automated-actions",
              isActive: this.$route.params.id === "automated-actions",
            },
            {
              name: "Export to GSheets",
              link: "/properties/automations/gsheets",
              isActive: this.$route.params.id === "gsheets",
            },
          ],
        },
        {
          name: "Chat integration",
          link: "/properties/chat-integrations",
          isActive: this.$route.params.type === "chat-integrations",
        },
        {
          name: "Payment expense",
          link: "/properties/payment-expense",
          isActive: this.$route.params.type === "payment-expense",
        },
        {
          name: "Facebook leads",
          link: "/properties/facebook-leads",
          isActive: this.$route.params.type === "facebook-leads",
        },
        {
          name: "Logs",
          isActive: this.$route.params.type === "logs",
          isOpen: this.$route.params.type === "logs" ? 0 : 1,
          hasChildMenu: true,
          childMenus: [
            {
              name: "Upload",
              link: "/properties/logs/upload",
              isActive: this.$route.params.id === "upload",
            },
            {
              name: "Download",
              link: "/properties/logs/download",
              isActive: this.$route.params.id === "download",
            },
            {
              name: "WhatsApp history",
              link: "/properties/logs/whatsapp-history",
              isActive: this.$route.params.id === "whatsapp-history",
            },
          ],
        },
      ];
    },
  },
};
</script>
