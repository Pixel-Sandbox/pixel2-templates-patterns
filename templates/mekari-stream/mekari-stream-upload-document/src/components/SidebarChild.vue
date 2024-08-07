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
        height="calc(100vh - 60px)"
        padding-top="4"
        padding-bottom="2"
        :padding-x="isToggle ? '2' : '2'"
        margin-left="60px"
        :cursor="isToggle ? 'default' : 'pointer'"
        :background-color="!isToggle && isHovered ? 'ash.100' : 'background'"
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
          <mp-box>
            <mp-flex direction="column">
              <mp-pseudo-box
                flex="1"
                role="group"
                border-radius="md"
                background-color="blue.100"
                padding="2"
                color="dark"
                font-weight="regular"
                transition="all 600ms cubic-bezier(0.4, 0, 0.2, 1) 0s"
                :_hover="{
                  color: 'blue.400',
                  cursor: 'pointer',
                }"
              >
                <mp-stack direction="row" align="center">
                  <mp-text
                    white-space="nowrap"
                    font-weight="semibold"
                    color="blue.400"
                  >
                    Documents
                  </mp-text>
                </mp-stack>
              </mp-pseudo-box>
            </mp-flex>
          </mp-box>
          <mp-divider margin-y="4" />
          <mp-text
            white-space="nowrap"
            font-size="sm"
            font-weight="semibold"
            letter-spacing="2px"
            color="blue.400"
            padding="2"
          >
            FOLDERS
          </mp-text>
          <mp-box>
            <mp-flex direction="column">
              <mp-pseudo-box
                flex="1"
                role="group"
                border-radius="md"
                padding="2"
                color="dark"
                font-weight="regular"
                transition="all 600ms cubic-bezier(0.4, 0, 0.2, 1) 0s"
                :_hover="{
                  color: 'blue.400',
                  cursor: 'pointer',
                }"
              >
                <mp-stack direction="row" align="center">
                  <mp-text white-space="nowrap" color="inherit">
                    My documents
                  </mp-text>
                </mp-stack>
              </mp-pseudo-box>
            </mp-flex>
          </mp-box>
        </mp-box>
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
        position="right"
        :show-delay="200"
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
  MpDivider,
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
    MpDivider,
  },
  data: function () {
    return {
      isActive: 0,
      isToggle: true,
      isHovered: false,
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
      const body = document.getElementsByTagName("body")[0];

      if (e.shiftKey && e.keyCode === 67 && e.srcElement === body) {
        this.handleToggle();
      }
    },
  },
};
</script>