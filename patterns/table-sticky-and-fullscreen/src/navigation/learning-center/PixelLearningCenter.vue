<template>
  <mp-box id="jurnalLearningCenterWidget">
    <mp-box position="fixed" bottom="26" right="0" z-index="1000">
      <mp-flex
        align-items="center"
        role="group"
        position="relative"
        transition="all 300ms cubic-bezier(.4,0,.2,1)"
        :opacity="isShowWidget ? 100 : 0"
        :transform="isShowWidget ? 'translateX(0px)' : 'translateX(22px)'"
      >
        <mp-box
          @click="isShowWidget = false"
          height="40px"
          width="22px"
          background="#8B5CF6"
          rounded-left="full"
          transition="all .3s cubic-bezier(.4,0,.2,1)"
          cursor="pointer"
          display="flex"
          align-items="center"
          justify-content="flex-start"
          :_groupHover="{
            width: '39px',
          }"
        >
          <mp-icon
            name="chevrons-left"
            color="white"
            transition="all .4s cubic-bezier(.4,0,.2,1)"
            transform="translateX(4px)"
          />

          <mp-box
            width="3"
            height="3"
            rounded="full"
            bg="rose.400"
            position="absolute"
            top="0"
            left="1"
          />
        </mp-box>
      </mp-flex>
    </mp-box>

    <mp-box
      position="fixed"
      bottom="26"
      right="26"
      z-index="1000"
      id="draggable"
      transition="all 150ms"
      :opacity="!isShowWidget ? 100 : 0"
      :style="{
        transform: !isShowWidget ? 'translateX(0px)' : 'translateX(70px)',
      }"
      bg="red"
    >
      <mp-flex
        v-if="isHelpCenterOpen && isPopoverHelpCenterOpen"
        position="absolute"
        right="2px"
        bottom="46px"
        width="246px"
        direction="column"
        py="3"
        background="white"
        border="1px solid"
        border-color="gray.400"
        rounded="md"
        box-shadow="md"
      >
        <mp-flex
          width="full"
          py="2"
          px="3"
          justify="space-between"
          align="center"
          cursor="pointer"
          :_hover="{
            background: 'gray.50',
          }"
          @click="handleOpenLearningCenter"
        >
          <mp-flex direction="column">
            <mp-text color="dark">Learning Center</mp-text>
            <mp-text font-size="sm" color="gray.600"
              >Guidebook, live traning and more!</mp-text
            >
          </mp-flex>
          <mp-icon name="chevrons-right" color="gray.600" size="sm" />
        </mp-flex>
        <mp-flex
          width="full"
          py="2"
          px="3"
          justify="space-between"
          align="center"
          cursor="pointer"
          :_hover="{
            background: 'gray.50',
          }"
          @click="handleClickGetSupport"
        >
          <mp-flex direction="column">
            <mp-text color="dark">Get Support</mp-text>
            <mp-text font-size="sm" color="gray.600"
              >Chat with Jurnal live support</mp-text
            >
          </mp-flex>
          <mp-badge variant-color="red" v-if="unreadMessage">
            {{ unreadMessage }}
          </mp-badge>
          <mp-icon v-else name="chevrons-right" color="gray.600" size="sm" />
        </mp-flex>
      </mp-flex>

      <mp-box
        id="grid-snap"
        position="absolute"
        right="2px"
        bottom="2px"
        z-index="1250"
        transition="all 0.3s"
      >
        <mp-box
          @mouseenter="[handleHoverHelpCenter(true), (isTooltipOpen = true)]"
          @mouseleave="[handleHoverHelpCenter(false), (isTooltipOpen = false)]"
          @click="handleClickHelpCenter"
        >
          <mp-tooltip
            label="[Shift] + [?] to hide/unhide"
            position="top"
            is-controlled
            :controlled-is-open="
              isPopoverHelpCenterOpen ? false : isTooltipOpen
            "
            use-portal
          >
            <mp-flex>
              <mp-flex
                @mouseenter="isTooltipOpen = true"
                @mouseleave="isTooltipOpen = false"
                position="relative"
                justify="center"
                align="center"
                background="violet.400"
                width="10"
                height="10"
                rounded="full"
                box-shadow="0px 2px 4px 0px rgba(0, 0, 0, 0.14)"
                cursor="grab"
                z-index="1250"
              >
                <svg
                  v-if="isHelpCenterOpen"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.16675 15.8334L15.8334 4.16675M4.16675 4.16675L15.8334 15.8334"
                    stroke="white"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <mp-box v-else>
                  <svg
                    width="12"
                    height="20"
                    viewBox="0 0 12 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.41421 19.3992C7.78929 19.0145 8 18.4928 8 17.9487C8 17.4047 7.78929 16.8829 7.41421 16.4982C7.03914 16.1136 6.53043 15.8974 6 15.8974C5.46957 15.8974 4.96086 16.1136 4.58579 16.4982C4.21071 16.8829 4 17.4047 4 17.9487C4 18.4928 4.21071 19.0145 4.58579 19.3992C4.96086 19.7839 5.46957 20 6 20C6.53043 20 7.03914 19.7839 7.41421 19.3992Z"
                      fill="white"
                    />
                    <path
                      d="M4.23223 3.82793C3.76339 4.30879 3.5 4.96098 3.5 5.64103V6.66667C3.5 7.07469 3.34196 7.46601 3.06066 7.75452C2.77935 8.04304 2.39782 8.20513 2 8.20513C1.60218 8.20513 1.22065 8.04304 0.939341 7.75452C0.658036 7.46601 0.5 7.07469 0.5 6.66667V5.64103C0.5 4.14493 1.07946 2.71012 2.11091 1.65222C3.14236 0.59432 4.54131 0 6 0C7.45869 0 8.85764 0.59432 9.88909 1.65222C10.9205 2.71012 11.5 4.14493 11.5 5.64103V5.89128C11.4999 7.45316 10.8949 8.95103 9.818 10.0554L7.06 12.8821C6.92268 13.0332 6.75707 13.1544 6.57308 13.2385C6.38908 13.3226 6.19045 13.3678 5.98904 13.3715C5.78764 13.3751 5.58758 13.3371 5.4008 13.2597C5.21403 13.1824 5.04436 13.0672 4.90192 12.9211C4.75949 12.775 4.6472 12.601 4.57175 12.4094C4.49631 12.2179 4.45926 12.0127 4.46282 11.8061C4.46637 11.5995 4.51045 11.3958 4.59244 11.2071C4.67442 11.0184 4.79263 10.8485 4.94 10.7077L7.696 7.87897C8.21 7.35179 8.5 6.6359 8.5 5.88923V5.64103C8.5 4.96098 8.23661 4.30879 7.76777 3.82793C7.29893 3.34707 6.66304 3.07692 6 3.07692C5.33696 3.07692 4.70107 3.34707 4.23223 3.82793Z"
                      fill="white"
                    />
                  </svg>

                  <mp-badge
                    v-if="unreadMessage"
                    position="absolute"
                    top="-2"
                    :right="unreadMessage > 9 ? '-4' : '-2'"
                    variant-color="red"
                    :animation="`${getPulseKeyframe} 1s cubic-bezier(0, 0, 0.2, 1) infinite`"
                  >
                    <span style="opacity: 0%">
                      {{ unreadMessage > 9 ? "9+" : unreadMessage }}
                    </span>
                  </mp-badge>
                  <mp-badge
                    v-if="unreadMessage"
                    position="absolute"
                    top="-2"
                    :right="unreadMessage > 9 ? '-4' : '-2'"
                    variant-color="red"
                    box-shadow="0 0 0 2px #fff"
                  >
                    {{ unreadMessage > 9 ? "9+" : unreadMessage }}
                  </mp-badge>
                </mp-box>
              </mp-flex>
            </mp-flex>
          </mp-tooltip>

          <Transition name="bounce">
            <mp-flex
              v-show="isHelpCenterHovered && !isHelpCenterOpen"
              z-index="1249"
              position="absolute"
              right="0"
              bottom="0"
              cursor="pointer"
              background="white"
              width="233px"
              justify="start"
              align="flex"
              height="11"
              rounded="full"
              box-shadow="0px 2px 4px 0px rgba(0, 0, 0, 0.14)"
              id="action"
            >
              <mp-box py="3" pr="4" pl="3">
                <mp-text
                  font-size="md"
                  font-weight="semibold"
                  color="violet.400"
                  line-height="20px"
                >
                  Live support & resources
                </mp-text>
              </mp-box>
            </mp-flex>
          </Transition>
        </mp-box>
      </mp-box>
    </mp-box>

    <mp-drawer
      :is-open="isLearningCenterOpen"
      :on-close="handleCloseLearningCenter"
    >
      <mp-drawer-overlay />
      <mp-drawer-content>
        <mp-drawer-body p="6">
          <LearningCenter
            v-if="showMenu === 'learning-center'"
            title="Learning center"
            @close="handleCloseLearningCenter"
            @click="handleClickLearningCenter"
            @click-search="handleClickSearch"
          />
          <Transition name="slide">
            <WhatsNew
              v-if="showMenu === 'whats-new'"
              id="whats-new"
              @close="handleCloseLearningCenter"
              @back="handleBackLearningCenter"
            />
          </Transition>
          <Transition name="slide">
            <GuideCenter
              v-if="showMenu === 'guide-center'"
              id="guide-center"
              @close="handleCloseLearningCenter"
              @click="handleClickGuideCenter"
              @back="handleBackLearningCenter"
            />
          </Transition>
          <Transition name="slide">
            <LiveTraining
              v-if="showMenu === 'live-training'"
              id="live-training"
              @close="handleCloseLearningCenter"
              @back="handleBackLearningCenter"
            />
          </Transition>
        </mp-drawer-body>
      </mp-drawer-content>
    </mp-drawer>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpText,
  MpIcon,
  MpDrawer,
  MpDrawerOverlay,
  MpDrawerContent,
  MpDrawerBody,
  MpBadge,
  MpTooltip,
} from "@mekari/pixel";

import LearningCenter from "./LearningCenter.vue";
import WhatsNew from "./WhatNews.vue";
import GuideCenter from "./GuideCenter.vue";
import LiveTraining from "./LiveTraining.vue";
import { keyframes } from "@emotion/css";
import { mapState, mapMutations } from "vuex";

export default {
  name: "LearningCenterWidget",
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpIcon,
    MpDrawer,
    MpDrawerOverlay,
    MpDrawerContent,
    MpDrawerBody,
    MpBadge,
    LearningCenter,
    WhatsNew,
    GuideCenter,
    LiveTraining,
    MpTooltip,
  },
  data() {
    return {
      isShowWidget: false,
      isHelpCenterHovered: false,
      isHelpCenterOpen: false,
      isPopoverHelpCenterOpen: false,
      isLearningCenterOpen: false,
      isEnableDraggable: false,
      isTooltipOpen: false,
      showMenu: "learning-center",

      //
      position: {
        x: 0,
        y: 0,
      },
    };
  },
  watch: {
    isHelpCenterOpen(newValue) {
      if (newValue) {
        this.toggleDraggable(false);
      } else {
        this.toggleDraggable(true);
      }
    },
  },
  computed: {
    ...mapState({
      unreadMessage: (state) => state.learningCenter.unreadMessage,
    }),
    getPulseKeyframe() {
      return keyframes`
      75%, 100% {
        transform: scale(1.8);
        opacity: 0;
      }
      `;
    },
  },
  created() {
    window.addEventListener("keydown", this.handleKeydown);
  },
  mounted() {
    this.getUnredMessages();
    // this.zendeskCallback();
  },
  beforeDestroy() {
    window.removeEventListener("keydown", this.handleKeydown);
  },
  methods: {
    ...mapMutations({
      SET_UNREAD_MESSAGE: "learningCenter/SET_UNREAD_MESSAGE", // map `this.add()` to `this.$store.commit('increment')`
    }),
    handleHoverHelpCenter(state) {
      this.isHelpCenterHovered = state;
    },
    handleClickHelpCenter() {
      this.isHelpCenterOpen = !this.isHelpCenterOpen;
      this.isPopoverHelpCenterOpen = this.isHelpCenterOpen;

      if (!this.isHelpCenterOpen) {
        // window.zE("messenger", "close");
      }
    },
    handleOpenLearningCenter() {
      this.showMenu = "learning-center";
      this.isLearningCenterOpen = true;
    },
    handleCloseLearningCenter() {
      this.isLearningCenterOpen = false;
      this.isHelpCenterOpen = false;
    },
    handleBackLearningCenter() {
      this.showMenu = "learning-center";
    },
    handleClickLearningCenter(id) {
      if (
        id === "whats-new" ||
        id === "guide-center" ||
        id === "live-training"
      ) {
        this.showMenu = id;
      }
      if (id === "artikel-panduan") {
        window.open("https://mekari.com", "_blank");
      }
      if (id === "video-tutorial") {
        window.open(
          "https://www.youtube.com/c/JurnalOfficial/featured",
          "_blank"
        );
      }

      if (id === "feedback") {
        window.open("https://mekari.com", "_blank");
      }

      if (id === "customer-support") {
        this.handleCloseLearningCenter();

        setTimeout(() => {
          this.isHelpCenterOpen = true;
          this.handleClickGetSupport();
        }, 300);
      }
    },
    handleClickGuideCenter(id) {
      alert(`CLICK GUIDE CENTER: ${id}`);
    },
    handleClickSearch(title) {
      alert(`CLICK SEACH: ${title}`);
    },
    handleClickGetSupport() {
      window.zE("messenger", "open");

      this.isPopoverHelpCenterOpen = false;
    },
    getUnredMessages() {
      setTimeout(() => {
        this.SET_UNREAD_MESSAGE(99);
      }, 0);
    },
    zendeskCallback() {
      // REF : https://developer.zendesk.com/api-reference/widget-messaging/web/core/
      const self = this;

      window.zE("messenger:on", "open", function () {
        console.log(`You have opened the messaging Web Widget`);
      });

      window.zE("messenger:on", "close", function () {
        console.log(`You have closed the messaging Web Widget`);
        self.isHelpCenterOpen = false;
      });

      window.zE("messenger:on", "unreadMessages", function (count) {
        console.log(`You have ${count} unread message(s).`);
        this.SET_UNREAD_MESSAGE = count;
      });
    },
    handleKeydown(e) {
      const body = document.getElementsByTagName("body")[0];

      if (e.shiftKey && e.keyCode === 191 && e.srcElement === body) {
        if (!this.isHelpCenterOpen) {
          this.isShowWidget = !this.isShowWidget;
        }
      }
    },
  },
};
</script>

<style>
.slide-leave-active,
.slide-enter-active {
  transition: transform 0.3s cubic-bezier(0.2, 0, 0, 1) 0s;
}
.slide-enter {
  transform: translate(200%, 0);
}
.slide-leave-to {
  transform: translate(200%, 0);
}

.bounce-leave-active,
.bounce-enter-active {
  transition: transform 0.1s cubic-bezier(0.175, 0.8, 0.2, 1.125) 0s;
}
.bounce-enter {
  transform: translate(200%, 0);
}
.bounce-leave-to {
  transform: translate(200%, 0);
}
</style>
