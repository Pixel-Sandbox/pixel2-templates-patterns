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
              <mp-text>Place content here...</mp-text>
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
    return {
      propertiesMenus: [
        {
          name: "General",
          isActive: true,
          isOpen: 0,
          hasChildMenu: true,
          childMenus: [
            {
              name: "Basic information",
              isActive: true,
            },
            {
              name: "Feature list",
            },
            {
              name: "Email service provider",
            },
          ],
        },
        {
          name: "User management",
          isActive: false,
          isOpen: 1,
          hasChildMenu: true,
          childMenus: [
            {
              name: "Users",
              isActive: false,
            },
            {
              name: "Teams",
            },
            {
              name: "Approval",
            },
            {
              name: "User performance",
            },
            {
              name: "User permission",
            },
            {
              name: "Tracking time",
            },
          ],
        },
        {
          name: "Properties",
          isActive: false,
          isOpen: 1,
          hasChildMenu: true,
          childMenus: [
            {
              name: "Contacts",
              isActive: false,
            },
            {
              name: "Companies",
            },
            {
              name: "Deals",
            },
            {
              name: "Tasks",
            },
            {
              name: "Tickets",
            },
            {
              name: "Products",
            },
          ],
        },
        {
          name: "Automations",
          isActive: false,
          isOpen: 1,
          hasChildMenu: true,
          childMenus: [
            {
              name: "Automated action",
              isActive: false,
            },
            {
              name: "Export to GSheets",
            },
          ],
        },
        {
          name: "Chat integration",
          isActive: false,
        },
        {
          name: "Payment/expense",
          isActive: false,
        },
        {
          name: "Facebook leads",
          isActive: false,
        },
        {
          name: "Logs",
          isActive: false,
          isOpen: 1,
          hasChildMenu: true,
          childMenus: [
            {
              name: "Upload",
              isActive: false,
            },
            {
              name: "Download",
            },
            {
              name: "WhatsApp history",
            },
          ],
        },
      ],
    };
  },
};
</script>
