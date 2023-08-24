<template>
  <mp-box>
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 60px)">
      <Sidebar
        child-title="Properties"
        child-type="properties"
        is-alternate 
        is-custom 
        with-child 
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
            <!-- <mp-flex
              height="calc(100vh - 132px)"
              direction="column"
              p="2"
              border-right="1px solid"
              border-color="gray.100"
              overflow="auto"
            >
              <mp-box
                v-for="item in menus"
                :key="item.name"
                width="184px"
                py="2"
                px="3"
                border-radius="md"
                cursor="pointer"
                transition="all 200ms"
                :_hover="{
                  bg: 'blue.100',
                }"
              >
                <mp-text
                  line-height="20px"
                  :color="item.isActive ? 'blue.400' : 'dark'"
                  :font-weight="item.isActive ? 'semibold' : 'normal'"
                >
                  {{ item.name }}
                </mp-text>
              </mp-box>
            </mp-flex> -->
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
      menus: [
        {
          name: "Contacts",
          isActive: true,
        },
        {
          name: "Companies",
        },
        {
          name: "Deals",
        },
        {
          name: "Products",
        },
        {
          name: "Tasks",
        },
        {
          name: "Automated actions",
        },
        {
          name: "Settings",
        },
        {
          name: "Display",
        },
        {
          name: "Email servce provider",
        },
        {
          name: "Chat integration",
        },
        {
          name: "Payment / expenses",
        },
        {
          name: "Upload / download",
        },
        {
          name: "Whatsapp notification",
        },
        {
          name: "Lead locale",
        },
        {
          name: "Company locale",
        },
        {
          name: "Product locale",
        },
        {
          name: "Task locale",
        },
        {
          name: "Export to Gsheets",
        },
        {
          name: "Channel integration",
        },
        {
          name: "Facebook leads",
        },

      ],
    };
  },
};
</script>
