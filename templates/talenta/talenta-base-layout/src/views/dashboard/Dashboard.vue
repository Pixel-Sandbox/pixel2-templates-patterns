<template>
  <mp-box>
    <mp-broadcast
      variant="information"
      icon-name="flag"
      content="Welcome to new Talenta Interface, this page is only prototype, not all action worked."
    />
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 100px)">
      <Sidebar is-alternate is-custom />
      <mp-box
        as="section"
        data-id="content"
        width="100%"
        height="calc(100vh - 100px)"
        overflow-y="auto"
        background-color="background"
      >
        <mp-flex
          justify="space-between"
          align-items="center"
          :padding-x="['4', '6']"
          :display="['inline-block', 'flex']"
          padding-y="1.063rem"
        >
          <mp-box>
            <mp-heading as="h1" font-size="2xl" font-weight="semibold">
              Dashboard
            </mp-heading>
          </mp-box>
        </mp-flex>
        <mp-box
          min-height="calc(100vh - 172px)"
          border-top-left-radius="md"
          padding-right="6"
          padding-bottom="6"
        >
          <mp-box padding-bottom="3">
            <mp-box
              background="white"
              padding="5"
              border-radius="md"
              border-width="1px"
            >
              <mp-flex
                align-items="center"
                padding-x="2"
                padding-y="1"
                border-radius="md"
              >
                <mp-avatar
                  name="Rizal Chandra"
                  src="https://i.pravatar.cc/300"
                  size="lg"
                  margin-right="5"
                  :show-border="false"
                />
                <mp-flex flex-direction="column">
                  <mp-heading as="h1" font-size="2xl">
                    Happy birthday, Rizal!
                  </mp-heading>
                  <mp-text color="gray.600">
                    It's Wednesday, 17 November
                  </mp-text>
                </mp-flex>
              </mp-flex>
            </mp-box>
          </mp-box>

          <mp-simple-grid :columns="[1, 3]" spacing="6" padding-y="3">
            <mp-box
              background="white"
              padding="5"
              border-radius="md"
              border-width="1px"
              height="360px"
            >
              <mp-chart
                title="Monthly turnover"
                :type="basic.type"
                :data="basic.data"
                :options="basic.options"
                :is-show-legend="false"
              />
            </mp-box>
            <mp-box
              background="white"
              padding="5"
              border-radius="md"
              border-width="1px"
              height="360px"
            >
              <mp-chart
                title="Active staff"
                :type="basic2.type"
                :data="basic2.data"
                :options="basic2.options"
                :is-show-legend="false"
              />
            </mp-box>
            <mp-box
              background="white"
              padding="5"
              border-radius="md"
              border-width="1px"
              height="360px"
            >
              <mp-chart
                title="Employment status"
                :type="basic3.type"
                :data="basic3.data"
                :options="basic3.options"
                :is-show-legend="false"
              />
            </mp-box>
          </mp-simple-grid>

          <mp-box padding-y="3">
            <mp-box
              background="white"
              padding="5"
              border-radius="md"
              border-width="1px"
            >
              <mp-heading as="h2" font-size="xl" margin-bottom="4">
                Announcement
              </mp-heading>
              <mp-flex
                align-items="center"
                padding-x="2"
                padding-y="1"
                border-radius="md"
              >
                <mp-avatar
                  name="Rizal Chandra"
                  src="https://i.pravatar.cc/300"
                  size="md"
                  margin-right="5"
                  :show-border="false"
                />
                <mp-flex flex-direction="column" flex="1 0 0">
                  <mp-input
                    size="md"
                    placeholder="What do you want to announce?"
                  />
                </mp-flex>
              </mp-flex>

              <mp-flex
                width="full"
                direction="column"
                align="center"
                justify="center"
                padding-y="13"
              >
                <mp-image
                  src="https://cdn-staging.mekari.design/illustration/blank-slate/NoData_PB_M_01.png"
                  :width="208"
                  :height="190"
                />
                <mp-text font-size="lg" font-weight="semibold" mb="1">
                  No data to display
                </mp-text>
                <mp-text color="gray.600">
                  Your company Announcement will display here.
                </mp-text>
              </mp-flex>
            </mp-box>
          </mp-box>
        </mp-box>
      </mp-box>
    </mp-flex>

    <mp-box position="absolute" bottom="26" right="26">
      <mp-flex
        v-if="isHelpCenterOpen"
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
        z-index="popover"
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
              >Chat with Talenta live support</mp-text
            >
          </mp-flex>
          <mp-icon name="chevrons-right" color="gray.600" size="sm" />
        </mp-flex>
      </mp-flex>
      <mp-flex
        position="absolute"
        right="2px"
        bottom="2px"
        z-index="popover"
        justify="center"
        align="center"
        background="violet.400"
        width="10"
        height="10"
        rounded="full"
        box-shadow="0px 2px 4px 0px rgba(0, 0, 0, 0.14)"
        cursor="pointer"
        @mouseenter="handleHoverHelpCenter"
        @mouseleave="handleHoverHelpCenter"
        @click="handleClickHelpCenter"
      >
        <img
          v-if="isHelpCenterOpen"
          src="../../assets/close.svg"
          alt="close help center"
        />
        <img v-else src="../../assets/help-center.svg" alt="open help center" />
      </mp-flex>
      <Transition name="bounce">
        <mp-flex
          v-if="isHelpCenterHovered && !isHelpCenterOpen"
          position="absolute"
          right="0"
          bottom="0"
          background="white"
          width="243px"
          py="3"
          px="4"
          justify="start"
          align="flex"
          height="11"
          rounded="full"
          box-shadow="0px 2px 4px 0px rgba(0, 0, 0, 0.14)"
        >
          <mp-text
            font-size="md"
            font-weight="semibold"
            color="violet.400"
            line-height="20px"
          >
            Live support & resources
          </mp-text>
        </mp-flex>
      </Transition>
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
  MpSimpleGrid,
  MpHeading,
  MpText,
  MpBroadcast,
  MpChart,
  MpAvatar,
  MpInput,
  MpImage,
  MpDrawer,
  MpDrawerOverlay,
  MpDrawerContent,
  MpDrawerBody,
} from "@mekari/pixel";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import LearningCenter from "../../components/learning-center/LearningCenter.vue";
import GuideCenter from "../../components/learning-center/GuideCenter.vue";
import LiveTraining from "../../components/learning-center/LiveTraining.vue";

export default {
  name: "Dashboard",
  components: {
    MpBox,
    MpFlex,
    MpSimpleGrid,
    MpHeading,
    MpText,
    MpBroadcast,
    MpChart,
    MpAvatar,
    MpInput,
    MpImage,
    MpDrawer,
    MpDrawerOverlay,
    MpDrawerContent,
    MpDrawerBody,
    Header,
    Sidebar,
    LearningCenter,
    GuideCenter,
    LiveTraining,
  },
  data() {
    return {
      isHelpCenterHovered: false,
      isHelpCenterOpen: false,
      isLearningCenterOpen: false,
      isTaskModalOpen: false,
      showMenu: "learning-center",
      basic: {
        type: "line",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May"],
          datasets: [
            {
              label: "Designer",
              data: [70, 180, 100, 40, 200],
            },
            {
              label: "Operation",
              data: [10, 30, 50, 100, 200],
            },
          ],
        },
        options: {
          scales: {
            x: {
              offset: true,
            },
            y: {
              offset: true,
              min: 0,
              ticks: {
                stepSize: 100,
              },
            },
          },
        },
      },
      basic2: {
        type: "bar",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May"],
          datasets: [
            {
              label: "Employees",
              data: [370, 400, 450, 350, 380],
            },
          ],
        },
        options: {
          scales: {
            x: {
              offset: true,
            },
            y: {
              offset: true,
              min: 0,
              ticks: {
                stepSize: 100,
              },
            },
          },
        },
      },
      basic3: {
        type: "doughnut",
        data: {
          labels: ["Low Risk", "Medium Risk", "High Risk"],
          datasets: [
            {
              label: "Cases",
              data: [41, 34, 25],
              backgroundColor: ["#3B82F6", "#F59E0B", "#EF4444"],
            },
          ],
        },
        options: {},
      },
    };
  },
  methods: {
    handleHoverHelpCenter() {
      this.isHelpCenterHovered = !this.isHelpCenterHovered;
    },
    handleClickHelpCenter() {
      this.isHelpCenterOpen = !this.isHelpCenterOpen;
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
      if (id === "guide-center" || id === "live-training") {
        this.showMenu = id;
      }
      if (id === "help-center") {
        window.open("https://help.center.talenta.co/", "_blank");
      }
      if (id === "give-feedback") {
        window.open(
          "https://mekari-ux.typeform.com/to/vqHQp5S2?typeform-source=app.esign.mekari.com",
          "_blank"
        );
      }
      if (id === "whats-new") {
        window.open("https://www.talenta.co/release-note/", "_blank");
      }
      if (id === "learning-videos") {
        window.open(
          "https://www.youtube.com/@TalentaOfficial/videos",
          "_blank"
        );
      }
    },
    handleClickGuideCenter(id) {
      alert(`CLICK GUIDE CENTER: ${id}`);
    },
    handleClickSearch(title) {
      alert(`CLICK SEACH: ${title}`);
    },
    handleClickGetSupport() {
      alert("GET SUPPORT CLICKED");
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