<template>
  <mp-box
    position="relative"
    :padding-right="!isToggle ? '4' : '0px'"
    background-color="background"
    transition="all 600ms cubic-bezier(0.4, 0, 0.2, 1) 0s"
  >
    <mp-box
      position="relative"
      background-color="background"
      transition="all 600ms cubic-bezier(0.4, 0, 0.2, 1) 0s"
      z-index="2"
    >
      <mp-box
        as="section"
        data-id="sidebar-child"
        max-width="12.75rem"
        :width="isToggle ? '12.75rem' : '0'"
        height="calc(100vh - 100px)"
        padding-y="2"
        :padding-x="isToggle ? '2' : '2'"
        margin-left="60px"
        :cursor="isToggle ? 'default' : 'pointer'"
        :background-color="!isToggle && isHovered ? '#E6EDF4' : 'background'"
        transition="all 600ms cubic-bezier(0.4, 0, 0.2, 1) 0s"
        :border-right="isToggle ? '0px' : '1px'"
        border-color="gray.100"
        :display="['none', 'block']"
        z-index="1"
        @mouseenter="handleMouseEnter()"
        @mouseleave="handleMouseLeave()"
        @click.self="handleToggleBlock"
      >
        <mp-box
          max-height="calc(100vh - 160px)"
          overflow-y="auto"
          overflow-x="hidden"
        >
          <mp-flex flex-direction="column" justify-content="center" align-items="center" margin-top="4">
            <mp-box position="relative">
                <mp-avatar
                    name="Ridwan Hanif"
                    src="https://randomuser.me/api/portraits/men/11.jpg"
                    size="xl"
                    :show-border="false" 
                />
                <mp-box 
                    position="absolute" 
                    width="7" 
                    height="7" 
                    right="0" 
                    bottom="0" 
                    text-align="center"
                    border-radius="full"
                    background-color="background"
                >
                    <mp-icon name="camera" size="sm" variant="duotone" />
                 </mp-box>
            </mp-box>
            <mp-text font-weight="semibold" margin-top="2">Ridwan Hanif</mp-text>
            <mp-text font-size="sm" color="gray.600">CEO</mp-text>
          </mp-flex>

          <mp-divider orientation="horizontal" />

          <mp-accordion
            allow-toggle
            allow-multiple
            :default-index="isActiveStacked"
          >
            <template v-for="menu in menus">
              <mp-flex
                v-if="menu.items.length === 0"
                :key="menu.id"
                direction="column"
              >
                <mp-pseudo-box
                  flex="1"
                  as="router-link"
                  role="group"
                  padding="2"
                  border-radius="md"
                  background-color="inherit"
                  :to="menu.link"
                  :color="menu.isActive ? 'blue.400' : 'inherit'"
                  :_hover="{
                    color: 'blue.400',
                    cursor: 'pointer',
                  }"
                >
                  <mp-stack direction="row" align="center">
                    <mp-text
                      white-space="nowrap"
                      :color="menu.isActive ? 'dark' : 'dark'"
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
              <mp-accordion-item
                v-else
                border-bottom-width="0px!important"
                :key="menu.id"
              >
                <mp-accordion-header
                  gap="1"
                  padding="2"
                  border-radius="md"
                  :background-color="
                    menu.isActive || isActive === menu.id
                      ? 'blue.100'
                      : 'transparent'
                  "
                  transition="all 600ms cubic-bezier(0.4, 0, 0.2, 1) 0s"
                  :_hover="{
                    color: 'blue.400',
                    backgroundColor:
                      menu.isActive || isActive === menu.id
                        ? 'blue.100'
                        : 'blue.100',
                    cursor: 'pointer',
                  }"
                >
                  <mp-box>
                    <mp-flex direction="column">
                      <mp-pseudo-box flex="1" border-radius="sm">
                        <mp-stack direction="row" align="center">
                          <mp-text
                            white-space="nowrap"
                            :color="
                              menu.isActive || isActive === menu.id
                                ? 'blue.400'
                                : 'dark'
                            "
                            :font-weight="
                              menu.isActive || isActive === menu.id
                                ? 'semibold'
                                : 'regular'
                            "
                          >
                            {{ menu.name }}
                          </mp-text>
                        </mp-stack>
                      </mp-pseudo-box>
                    </mp-flex>
                  </mp-box>
                  <mp-accordion-icon size="sm" />
                </mp-accordion-header>
                <mp-accordion-panel padding-y="0">
                  <mp-box v-for="item in menu.items" :key="item.id">
                    <mp-flex direction="column">
                      <mp-pseudo-box
                        flex="1"
                        role="group"
                        border-radius="md"
                        padding-left="4"
                        padding-y="2"
                        color="dark"
                        as="router-link"
                        :to="item.link"
                        transition="all 600ms cubic-bezier(0.4, 0, 0.2, 1) 0s"
                        :_hover="{
                          color: 'blue.400',
                          cursor: 'pointer',
                        }"
                      >
                        <mp-stack direction="row" align="center">
                          <mp-text
                            white-space="nowrap"
                            :font-weight="
                              item.isActive ? 'semibold' : 'regular'
                            "
                            :_hover="{
                              color: item.isActive ? 'dark' : 'blue.400',
                              cursor: 'pointer',
                            }"
                          >
                            {{ item.name }}
                          </mp-text>
                        </mp-stack>
                      </mp-pseudo-box>
                    </mp-flex>
                  </mp-box>
                </mp-accordion-panel>
              </mp-accordion-item>
            </template>
          </mp-accordion>
        </mp-box>
        <mp-flex
          v-if="isToggle"
          transition="all .3s cubic-bezier(.4,0,.2,1)"
          gap="2"
          background-color="background"
          flex-direction="row"
          justify-content="flex-end"
          align-items="center"
          position="absolute"
          bottom="0"
          left="0"
          right="0"
          padding="2"
          width="100%"
        >
          <mp-tooltip
            position="right"
            label="Click to collapse or shortcut [shift] + [c]"
            use-portal
          >
            <mp-pseudo-box
              role="group"
              border-radius="sm"
              transition="all 600ms cubic-bezier(0.4, 0, 0.2, 1) 0s"
              padding-x="2.5"
              padding-y="2"
              outline="none !important"
              :_hover="{
                backgroundColor: 'blue.100',
                color: 'blue.400',
                cursor: 'pointer',
              }"
              @click="handleToggle"
            >
              <mp-stack direction="row" align="center">
                <mp-icon name="chevrons-previous" size="sm" />
              </mp-stack>
            </mp-pseudo-box>
          </mp-tooltip>
        </mp-flex>
      </mp-box>
    </mp-box>
    <mp-box
      position="absolute"
      bottom="8px"
      left="76px"
      z-index="1"
      :opacity="!isToggle ? '1' : '0'"
      transition-property="all"
      transition-duration="300ms"
      :transition-delay="!isToggle ? '300ms' : ''"
      transition-timing-function="cubic-bezier(.4,0,.2,1)"
      :transform="!isToggle ? 'translateX(0px);' : 'translateX(-8px);'"
    >
      <mp-tooltip
        :show-delay="200"
        position="right"
        label="Click to expand or shortcut [shift] + [c]"
        use-portal
      >
        <mp-pseudo-box
          display="flex"
          :width="isHovered ? '36px' : '24px'"
          height="36px"
          background-color="white"
          border="1px"
          border-color="gray.100"
          border-top-right-radius="full"
          border-bottom-right-radius="full"
          align-items="center"
          justify-content="flex-end"
          padding-right="1"
          padding-left="1"
          box-shadow="rgb(0 0 0 / 14%) 3px 0px 4px, rgb(0 0 0 / 12%) 0px 0px 2px"
          transition="all .3s cubic-bezier(.4,0,.2,1)"
          :_hover="{
            width: '36px',
            cursor: 'pointer',
          }"
          @mouseenter="handleMouseEnter()"
          @mouseleave="handleMouseLeave()"
          @click="handleToggle"
        >
          <mp-icon name="chevrons-right" size="sm" />
        </mp-pseudo-box>
      </mp-tooltip>
    </mp-box>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpText,
  MpIcon,
  MpTooltip,
  MpStack,
  MpPseudoBox,
  MpAccordion,
  MpAccordionItem,
  MpAccordionHeader,
  MpAccordionIcon,
  MpAccordionPanel,
  MpAvatar,
  MpDivider
} from "@mekari/pixel";

export default {
  name: "SidebarChildEmployee",
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpIcon,
    MpTooltip,
    MpStack,
    MpPseudoBox,
    MpAccordion,
    MpAccordionItem,
    MpAccordionHeader,
    MpAccordionIcon,
    MpAccordionPanel,
    MpAvatar,
    MpDivider
  },
  data: function () {
    return {
      isActive: 1,
      isToggle: true,
      isHovered: false,
      isActiveStacked: [0],
      menus: [
        {
            id: 1,
            name: "General",
            link: "/",
            isActive: this.$router.currentRoute.name === "General",
            items: [
                {
                    id: 11,
                    name: "Personal",
                    link: "/",
                    isActive: true
                },
                {
                    id: 12,
                    name: "Employment",
                    link: "/",
                    isActive: false
                },
                {
                    id: 12,
                    name: "Education & experience",
                    link: "/",
                    isActive: false
                },
                {
                    id: 12,
                    name: "Additional info",
                    link: "/",
                    isActive: false
                }
            ],
        },
        {
            id: 2,
            name: "Time management",
            link: "/",
            isActive: this.$router.currentRoute.name === "Time management",
            items: [
                {
                    id: 21,
                    name: "Attendance",
                    link: "/",
                    isActive: false
                },
                {
                    id: 22,
                    name: "Timeoff",
                    link: "/",
                    isActive: false
                }
            ],
        },
        {
            id: 3,
            name: "Payroll",
            link: "/",
            isActive: this.$router.currentRoute.name === "Payroll",
            items: [
                {
                    id: 31,
                    name: "Payroll info",
                    link: "/",
                    isActive: false
                }
            ],
        },
        {
            id: 4,
            name: "Finance",
            link: "/",
            isActive: this.$router.currentRoute.name === "Finance",
            items: [
                {
                    id: 41,
                    name: "Reimbursement",
                    link: "/",
                    isActive: false
                },
                {
                    id: 42,
                    name: "Loan",
                    link: "/",
                    isActive: false
                },
                {
                    id: 43,
                    name: "Cash advance",
                    link: "/",
                    isActive: false
                }
            ],
        },
        {
            id: 5,
            name: "Files",
            link: "/",
            isActive: this.$router.currentRoute.name === "Files",
            items: [],
        },
        {
            id: 6,
            name: "Assets",
            link: "/",
            isActive: this.$router.currentRoute.name === "Assets",
            items: [],
        },
        {
            id: 7,
            name: "History",
            link: "/",
            isActive: this.$router.currentRoute.name === "History",
            items: [
                {
                    id: 71,
                    name: "Adjustment",
                    link: "/",
                    isActive: false
                },
                {
                    id: 72,
                    name: "Transfer",
                    link: "/",
                    isActive: false
                },
                {
                    id: 73,
                    name: "NPP",
                    link: "/",
                    isActive: false
                },
                {
                    id: 74,
                    name: "Reprimand",
                    link: "/",
                    isActive: false
                }
            ],
        },
      ],
    };
  },
  created() {
    window.addEventListener("keydown", this.handleKeydown);
  },
  beforeDestroy() {
    window.removeEventListener("keydown", this.handleKeydown);
  },
  methods: {
    handleChange: function (data) {
      console.log(data);
      this.isActive = data;
      this.isActiveStacked = data;
    },
    handleToggle: function () {
      this.isToggle = !this.isToggle;
      this.$emit("toggle", this.isToggle);
    },
    handleToggleBlock: function () {
      if (!this.isToggle) this.isToggle = true;
      this.$emit("toggle", this.isToggle);
    },
    handleMouseEnter: function () {
      this.isHovered = true;
    },
    handleMouseLeave: function () {
      this.isHovered = false;
    },
    handleKeydown(e) {
      const body = document.getElementsByTagName("body")[0];

      if (e.shiftKey && e.keyCode === 67 && e.srcElement === body) {
        this.handleToggle();
      }
    },
  },
};
</script>