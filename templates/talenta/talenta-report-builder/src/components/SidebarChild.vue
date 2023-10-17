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
        font-size="sm"
        font-weight="semibold"
        letter-spacing="2px"
        color="blue.400"
        padding-x="4"
        padding-y="2"
      >
        COMPANY
      </mp-text>
      <mp-box v-for="menu in menus" :key="menu.id">
        <mp-flex direction="column">
          <mp-pseudo-box
            flex="1"
            role="group"
            padding-x="4"
            padding-y="2"
            :color="menu.isActive ? 'blue.400' : 'inherit'"
            :background-color="menu.isActive ? 'ice.50' : 'inherit'"
            :_hover="{
              color: 'blue.400',
              cursor: 'pointer',
            }"
          >
            <mp-stack direction="row" align="center">
              <mp-text
                :color="menu.isActive ? 'blue.400' : 'dark'"
                :font-weight="menu.isActive ? 'semibold' : 'regular'"
                :_hover="{
                  color: 'blue.400',
                  cursor: 'pointer',
                }"
              >
                {{ menu.name }}
              </mp-text>
            </mp-stack>
          </mp-pseudo-box>
        </mp-flex>
      </mp-box>
    </mp-box>
  </mp-box>
</template>

<script>
import { MpBox, MpFlex, MpText, MpStack, MpPseudoBox } from "@mekari/pixel";

export default {
  name: "SidebarChild",
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpStack,
    MpPseudoBox,
  },
  data: function () {
    return {
      isActive: 0,
      menus: [
        {
          id: 1,
          name: "Assets",
          isActive: false,
        },
        {
          id: 2,
          name: "Announcement",
          isActive: false,
        },
        {
          id: 3,
          name: "Reprimand",
          isActive: false,
        },
        {
          id: 4,
          name: "Task",
          isActive: false,
        },
        {
          id: 5,
          name: "User Activity Log",
          isActive: false,
        },
        {
          id: 6,
          name: "Notification",
          isActive: false,
        },
        {
          id: 7,
          name: "Onboarding",
          isActive: false,
        },
        {
          id: 8,
          name: "Files",
          isActive: false,
        },
        {
          id: 9,
          name: "Report Builder",
          isActive: true,
        },
      ],
    };
  },
  methods: {
    handleChange: function (data) {
      this.isActive = data;
    },
  },
};
</script>