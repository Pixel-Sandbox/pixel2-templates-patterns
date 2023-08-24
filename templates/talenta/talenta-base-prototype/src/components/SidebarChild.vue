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
          max-height="calc(100vh - 90px)"
          overflow-y="auto"
          overflow-x="hidden"
        >
          <mp-text
            white-space="nowrap"
            font-size="sm"
            font-weight="semibold"
            letter-spacing="2px"
            color="blue.400"
            padding="2"
          >
            {{ getTitle }}
          </mp-text>

          <mp-box v-for="menu in menus" :key="menu.id">
            <mp-flex v-if="menu.items.length === 0" direction="column">
              <mp-pseudo-box
                flex="1"
                as="router-link"
                role="group"
                padding="2"
                border-radius="md"
                :to="menu.link"
                :background-color="menu.isActive ? 'blue.100' : 'inherit'"
                :color="menu.isActive ? 'blue.400' : 'inherit'"
                :_hover="{
                  color: 'blue.400',
                  cursor: 'pointer',
                }"
              >
                <mp-stack direction="row" align="center">
                  <mp-text
                    white-space="nowrap"
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
            <mp-accordion
              v-else
              allow-toggle
              allow-multiple
              @change="handleChange(menu.id)"
            >
              <mp-accordion-item border-bottom-width="0px!important">
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
                  <mp-accordion-icon />
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
            </mp-accordion>
          </mp-box>
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
} from "@mekari/pixel";

export default {
  name: "SidebarChild",
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
  },
  data: function () {
    return {
      isActive: 0,
      isToggle: true,
      isHovered: false,
      menus: [],
    };
  },
  created() {
    window.addEventListener("keydown", this.handleKeydown);

    // adding dynamic data
    const employeeChildRoute = [
      "Employee",
      "Employee transfer",
      "Mass resign",
      "Prorate",
      "PTKP status adjust",
      "Custom field",
      "Cost center",
      "Report",
    ];

    const formsChildRoute = ["All forms", "My submission"];

    const settingChildRoute = [
      "Account",
      "Company info",
      "Group structure",
      "Branch",
      "Organization",
      "Job level",
      "Job position",
      "Grade & class",
      "Auto generate format",
      "Files category",
      "Custom fields",
      "NPP",
      "Employment status",
      "Attendances",
      "Live attendance",
      "Portal",
      "Times off",
      "Overtimes",
      "Holiday",
      "Payroll schedule",
      "Cut off & tax setting",
      "Payroll component",
      "Payslip",
      "Taxslip",
      "Pro-rate",
      "Absence",
      "THR",
      "Time off compensation",
      "Payment schedule",
      "Resign compensation",
      "Reimbursements",
      "Cash advance",
      "ESS",
      "Users",
      "Access role",
      "Onboardings",
      "Offboardings",
      "API data masking",
    ];

    const employeeMenu = [
      {
        id: 1,
        name: "Directory",
        link: "/employee",
        isActive: this.$router.currentRoute.name === "Employee",
        items: [],
      },
      {
        id: 2,
        name: "Employee transfer",
        link: "/employee-transfer",
        isActive: this.$router.currentRoute.name === "Employee transfer",
        items: [],
      },
      {
        id: 3,
        name: "Mass resign",
        link: "/mass-resign",
        isActive: this.$router.currentRoute.name === "Mass resign",
        items: [],
      },
      {
        id: 4,
        name: "Prorate",
        link: "/prorate",
        isActive: this.$router.currentRoute.name === "Prorate",
        items: [],
      },
      {
        id: 5,
        name: "PTKP status adjust",
        link: "/ptkp-status-adjust",
        isActive: this.$router.currentRoute.name === "PTKP status adjust",
        items: [],
      },
      {
        id: 6,
        name: "Custom field",
        link: "/custom-field",
        isActive: this.$router.currentRoute.name === "Custom field",
        items: [],
      },
      {
        id: 7,
        name: "Cost center",
        link: "/cost-center",
        isActive: this.$router.currentRoute.name === "Cost center",
        items: [],
      },
      {
        id: 8,
        name: "Report",
        link: "/report",
        isActive: this.$router.currentRoute.name === "Report",
        items: [],
      },
    ];

    const formsMenu = [
      {
        id: 1,
        name: "All forms",
        link: "/forms",
        isActive: this.$router.currentRoute.name === "All forms",
        items: [],
      },
      {
        id: 2,
        name: "My submission",
        link: "/my-submission",
        isActive: this.$router.currentRoute.name === "My submission",
        items: [],
      },
    ];

    const settingMenu = [
      {
        id: 1,
        name: "Account",
        link: "/account",
        isActive: this.$router.currentRoute.name === "Account",
        items: [],
      },
      {
        id: 2,
        name: "Company",
        link: "/",
        isActive: [
          "Company info",
          "Group structure",
          "Branch",
          "Organization",
          "Job level",
          "Job position",
          "Grade & class",
          "Auto generate format",
          "Files category",
          "Custom fields",
          "NPP",
          "Employment status",
        ].includes(this.$router.currentRoute.name),
        items: [
          {
            id: 21,
            name: "Company info",
            link: "/company-info",
            isActive: this.$router.currentRoute.name === "Company info",
          },
          {
            id: 22,
            name: "Group structure",
            link: "/group-structure",
            isActive: this.$router.currentRoute.name === "Group structure",
          },
          {
            id: 23,
            name: "Branch",
            link: "/branch",
            isActive: this.$router.currentRoute.name === "Branch",
          },
          {
            id: 24,
            name: "Organization",
            link: "/organization",
            isActive: this.$router.currentRoute.name === "Organization",
          },
          {
            id: 25,
            name: "Job level",
            link: "/job-level",
            isActive: this.$router.currentRoute.name === "Job level",
          },
          {
            id: 26,
            name: "Job position",
            link: "/job-position",
            isActive: this.$router.currentRoute.name === "Job position",
          },
          {
            id: 27,
            name: "Grade & class",
            link: "/grade-class",
            isActive: this.$router.currentRoute.name === "Grade & class",
          },
          {
            id: 28,
            name: "Auto generate format",
            link: "/auto-generate-format",
            isActive: this.$router.currentRoute.name === "Auto generate format",
          },
          {
            id: 29,
            name: "Files category",
            link: "/files-category",
            isActive: this.$router.currentRoute.name === "Files category",
          },
          {
            id: 210,
            name: "Custom fields",
            link: "/custom-fields",
            isActive: this.$router.currentRoute.name === "Custom fields",
          },
          {
            id: 211,
            name: "NPP",
            link: "/npp",
            isActive: this.$router.currentRoute.name === "NPP",
          },
          {
            id: 212,
            name: "Employment status",
            link: "/employment-status",
            isActive: this.$router.currentRoute.name === "Employment status",
          },
        ],
      },
      {
        id: 3,
        name: "Time management",
        link: "/",
        isActive: [
          "Attendances",
          "Live attendance",
          "Portal",
          "Times off",
          "Overtimes",
          "Holiday",
        ].includes(this.$router.currentRoute.name),
        items: [
          {
            id: 31,
            name: "Attendances",
            link: "/attendances",
            isActive: this.$router.currentRoute.name === "Attendances",
          },
          {
            id: 32,
            name: "Live attendance",
            link: "/live-attendance",
            isActive: this.$router.currentRoute.name === "Live attendance",
          },
          {
            id: 33,
            name: "Portal",
            link: "/portal",
            isActive: this.$router.currentRoute.name === "Portal",
          },
          {
            id: 34,
            name: "Times off",
            link: "/times-off",
            isActive: this.$router.currentRoute.name === "Times off",
          },
          {
            id: 35,
            name: "Overtimes",
            link: "/overtimes",
            isActive: this.$router.currentRoute.name === "Overtimes",
          },
          {
            id: 35,
            name: "Holiday",
            link: "/holiday",
            isActive: this.$router.currentRoute.name === "Holiday",
          },
        ],
      },
      {
        id: 4,
        name: "Payroll",
        link: "/",
        isActive: [
          "Payroll schedule",
          "Cut off & tax setting",
          "Payroll component",
          "Payslip",
          "Taxslip",
          "Pro-rate",
          "Absence",
          "THR",
          "Time off compensation",
          "Payment schedule",
          "Resign compensation",
        ].includes(this.$router.currentRoute.name),
        items: [
          {
            id: 41,
            name: "Payroll schedule",
            link: "/payroll-schedule",
            isActive: this.$router.currentRoute.name === "Payroll schedule",
          },
          {
            id: 42,
            name: "Cut off & tax setting",
            link: "/cut-off-tax-setting",
            isActive:
              this.$router.currentRoute.name === "Cut off & tax setting",
          },
          {
            id: 43,
            name: "Payroll component",
            link: "/payroll-component",
            isActive: this.$router.currentRoute.name === "Payroll component",
          },
          {
            id: 44,
            name: "Payslip",
            link: "/payslip",
            isActive: this.$router.currentRoute.name === "Payslip",
          },
          {
            id: 45,
            name: "Taxslip",
            link: "/taxslip",
            isActive: this.$router.currentRoute.name === "Taxslip",
          },
          {
            id: 46,
            name: "Pro-rate",
            link: "/pro-rate",
            isActive: this.$router.currentRoute.name === "Pro-rate",
          },
          {
            id: 47,
            name: "Absence",
            link: "/absence",
            isActive: this.$router.currentRoute.name === "Absence",
          },
          {
            id: 48,
            name: "THR",
            link: "/thr",
            isActive: this.$router.currentRoute.name === "THR",
          },
          {
            id: 49,
            name: "Time off compensation",
            link: "/time-off-compensation",
            isActive:
              this.$router.currentRoute.name === "Time off compensation",
          },
          {
            id: 410,
            name: "Payment schedule",
            link: "/payment-schedule",
            isActive: this.$router.currentRoute.name === "Payment schedule",
          },
          {
            id: 411,
            name: "Resign compensation",
            link: "/resign-compensation",
            isActive: this.$router.currentRoute.name === "Resign compensation",
          },
        ],
      },
      {
        id: 5,
        name: "Finance",
        link: "/",
        isActive: ["Reimbursements", "Cash advance"].includes(
          this.$router.currentRoute.name
        ),
        items: [
          {
            id: 51,
            name: "Reimbursements",
            link: "/reimbursements",
            isActive: this.$router.currentRoute.name === "Reimbursements",
          },
          {
            id: 52,
            name: "Cash advance",
            link: "/cash-advance",
            isActive: this.$router.currentRoute.name === "Cash advance",
          },
        ],
      },
      {
        id: 6,
        name: "ESS",
        link: "/ess",
        isActive: this.$router.currentRoute.name === "ESS",
        items: [],
      },
      {
        id: 7,
        name: "Users",
        link: "/",
        isActive: [
          "Users",
          "Access role",
          "Onboardings",
          "Offboardings",
        ].includes(this.$router.currentRoute.name),
        items: [
          {
            id: 71,
            name: "Users",
            link: "/users",
            isActive: this.$router.currentRoute.name === "Users",
          },
          {
            id: 72,
            name: "Access role",
            link: "/access-role",
            isActive: this.$router.currentRoute.name === "Access role",
          },
          {
            id: 73,
            name: "Onboardings",
            link: "/Onboardings",
            isActive: this.$router.currentRoute.name === "Onboardings",
          },
          {
            id: 74,
            name: "Offboardings",
            link: "/Offboardings",
            isActive: this.$router.currentRoute.name === "Offboardings",
          },
        ],
      },
      {
        id: 8,
        name: "API data masking",
        link: "/api-data-masking",
        isActive: this.$router.currentRoute.name === "API data masking",
        items: [],
      },
    ];

    if (employeeChildRoute.includes(this.$router.currentRoute.name)) {
      this.menus = employeeMenu;
    } else if (formsChildRoute.includes(this.$router.currentRoute.name)) {
      this.menus = formsMenu;
    } else if (settingChildRoute.includes(this.$router.currentRoute.name)) {
      this.menus = settingMenu;
    }
  },
  beforeDestroy() {
    window.removeEventListener("keydown", this.handleKeydown);
  },
  computed: {
    getTitle: function () {
      const employeeChildRoute = [
        "Employee",
        "Employee transfer",
        "Mass resign",
        "Prorate",
        "PTKP status adjust",
        "Custom field",
        "Cost center",
        "Report",
      ];

      const formChildRoute = ["All forms", "My submission"];

      const settingChildRoute = [
        "Account",
        "Company info",
        "Group structure",
        "Branch",
        "Organization",
        "Job level",
        "Job position",
        "Grade & class",
        "Auto generate format",
        "Files category",
        "Custom fields",
        "NPP",
        "Employment status",
        "Attendances",
        "Live attendance",
        "Portal",
        "Times off",
        "Overtimes",
        "Holiday",
        "Payroll schedule",
        "Cut off & tax setting",
        "Payroll component",
        "Payslip",
        "Taxslip",
        "Pro-rate",
        "Absence",
        "THR",
        "Time off compensation",
        "Payment schedule",
        "Resign compensation",
        "Reimbursements",
        "Cash advance",
        "ESS",
        "Users",
        "Access role",
        "Onboardings",
        "Offboardings",
        "API data masking",
      ];

      if (employeeChildRoute.includes(this.$router.currentRoute.name))
        return "EMPLOYEE";
      else if (formChildRoute.includes(this.$router.currentRoute.name))
        return "FORMS";
      else if (settingChildRoute.includes(this.$router.currentRoute.name))
        return "SETTINGS";
      else return "";
    },
  },
  methods: {
    handleChange: function (data) {
      this.isActive = data;
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
      if (e.shiftKey && e.keyCode === 67) {
        this.handleToggle();
      }
    },
  },
};
</script>