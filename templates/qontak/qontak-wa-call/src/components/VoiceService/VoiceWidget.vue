<template>
  <mp-box ref="voiceWidget" position="relative">
    <!-- // DEFAULT WIDGET -->
    <mp-flex
      v-if="!isMiniSize"
      ref="widget"
      id="drag-element"
      direction="column"
      justify="center"
      align-items="center"
      :width="widthDefaultWidget"
      height="auto"
      z-index="9999"
      background="dark"
      position="fixed"
      bottom="6"
      right="6"
      rounded="md"
      shadow="lg"
    >
      <mp-box id="drag-handle" mt="2" mb="1">
        <mp-icon
          name="drag"
          color="gray.600"
          transform="rotate(90deg)"
          cursor="move"
        />
      </mp-box>
      <mp-flex justify="space-between" px="4" width="full">
        <mp-text :color="title.color" font-weight="semibold" font-size="lg">
          {{ title.text }}</mp-text
        >
        <mp-flex v-if="isCalling" gap="4">
          <mp-icon
            name="minus"
            color="white"
            cursor="pointer"
            @click.native="handleClickMinimize"
          />
          <mp-icon
            name="full-screen"
            color="white"
            cursor="pointer"
            @click.native="handleClickFullScreen"
          />
        </mp-flex>
        <mp-icon
          v-if="!isCalling"
          name="close"
          color="white"
          cursor="pointer"
          @click.native="handleClickClose"
        />
      </mp-flex>

      <mp-flex direction="column" gap="4" width="full" p="4">
        <mp-flex gap="1" align-items="center">
          <mp-icon
            name="phone"
            size="sm"
            color="gray.400"
            :transform="title.icon"
          />
          <mp-text color="white" font-size="sm">{{ duration }}</mp-text>
        </mp-flex>
        <mp-flex
          position="relative"
          direction="column"
          align-items="center"
          gap="3"
          bg="gray.600"
          rounded="md"
          p="4"
        >
          <mp-box position="absolute" top="3" right="3">
            <VoiceWaveIcon
              v-if="isShowVoiceWaveIcon"
              :is-start="isShowWaveAnimation"
            />
          </mp-box>
          <mp-avatar :name="name" size="lg" z-index="1" />
          <mp-box
            v-if="isShowPulseAnimation"
            ref="pulseCircle"
            id="pulseCircle"
            width="50px"
            height="50px"
            rounded="full"
            top="15px"
            background="white"
            position="absolute"
          >
          </mp-box>
          <mp-flex direction="column" width="full">
            <mp-text
              color="white"
              font-size="sm"
              font-weight="semibold"
              text-align="center"
              >{{ name }}</mp-text
            >
            <mp-text color="gray.100" font-size="sm" text-align="center">{{
              phoneNumber
            }}</mp-text>
          </mp-flex>
        </mp-flex>

        <mp-flex v-if="isCalling" justify="center" gap="4">
          <VoiceButtonDropdown
            :variant="isMute ? 'mute' : 'unmute'"
            :label="isMute ? 'Mute' : 'Unmute'"
            @click="handleMuteUnmute"
          >
            <mp-flex direction="column" width="full">
              <mp-box px="3" py="1">
                <mp-text color="gray.400" text-align="left" font-size="sm">
                  MICROPHONE
                </mp-text>
              </mp-box>
              <mp-box
                v-if="isMicrophoneDetected"
                px="3"
                py="1.5"
                cursor="pointer"
                :_hover="{
                  background: 'gray.600',
                }"
              >
                <mp-text color="gray.100"> System default </mp-text>
                <mp-text font-size="sm" color="gray.400">
                  Macbook Pro M2 Microphone
                </mp-text>
              </mp-box>
              <mp-flex v-else gap="2" px="3" py="1.5">
                <mp-icon
                  name="warning-triangle"
                  variant="fill"
                  color="orange.400"
                />
                <mp-text color="gray.100">No microphone detected</mp-text>
              </mp-flex>
            </mp-flex>
            <mp-divider />
            <mp-flex direction="column" width="full">
              <mp-box px="3" py="1">
                <mp-text color="gray.400" text-align="left" font-size="sm">
                  SPEAKER
                </mp-text>
              </mp-box>
              <mp-box
                v-if="isSpeakerDetected"
                px="3"
                py="1.5"
                cursor="pointer"
                :_hover="{
                  background: 'gray.600',
                }"
              >
                <mp-text color="gray.100"> System default </mp-text>
                <mp-text font-size="sm" color="gray.400">
                  Macbook Pro M2 Speaker
                </mp-text>
              </mp-box>
              <mp-flex v-else gap="2" px="3" py="1.5">
                <mp-icon
                  name="warning-triangle"
                  variant="fill"
                  color="orange.400"
                />
                <mp-text color="gray.100">No speaker detected</mp-text>
              </mp-flex>
            </mp-flex>
          </VoiceButtonDropdown>
          <VoiceButton
            variant="decline"
            label="End"
            @click="handleStopCalling"
          />
        </mp-flex>
        <mp-button v-if="!isCalling" left-icon="phone" @click="handleCallAgain"
          >Call Again</mp-button
        >
      </mp-flex>
    </mp-flex>

    <!-- // MINI WIDGET -->
    <mp-flex
      v-if="isMiniSize"
      ref="widget"
      id="drag-element"
      direction="row"
      justify="flex-start"
      align-items="center"
      gap="3"
      :width="widthMiniWidget"
      height="auto"
      z-index="9999"
      background="dark"
      position="fixed"
      bottom="6"
      right="6"
      rounded="100px"
      shadow="lg"
      py="2"
      px="3"
      @mouseover.native="isShowActionButton = true"
      @mouseleave.native="isShowActionButton = false"
    >
      <mp-box id="drag-handle">
        <mp-icon
          name="drag"
          color="gray.600"
          transform="rotate(0deg)"
          cursor="move"
        />
      </mp-box>
      <mp-flex
        v-if="!isShowActionButton"
        justify="space-between"
        align-items="center"
        width="full"
      >
        <mp-flex direction="column">
          <mp-flex gap="1" align-items="center">
            <mp-text
              :color="title.color"
              font-weight="semibold"
              font-size="lg"
              >{{ title.text }}</mp-text
            >
            <mp-badge variant="solid" variant-color="green" size="sm">
              {{ duration }}
            </mp-badge>
          </mp-flex>

          <mp-text color="gray.100" font-size="sm">{{ name }}</mp-text>
        </mp-flex>
        <VoiceWaveIcon
          v-if="isShowVoiceWaveIcon"
          :is-start="isShowWaveAnimation"
        />
      </mp-flex>
      <mp-flex
        v-if="isShowActionButton"
        justify="center"
        gap="4"
        width="calc(100% - 48px)"
      >
        <VoiceButton
          :variant="isMute ? 'mute' : 'unmute'"
          @click="handleMuteUnmute"
        />
        <VoiceButton icon="blank" @click="handleClickMinimize" />
      </mp-flex>
    </mp-flex>
  </mp-box>
</template>

<script>
import anime from "animejs";
import {
  MpFlex,
  MpBox,
  MpButton,
  MpIcon,
  MpText,
  MpDivider,
  MpAvatar,
  MpBadge,
} from "@mekari/pixel";
import { Draggable } from "@neodrag/vanilla";
import { useDraggable } from "@vueuse/core";
import { isClient } from "@vueuse/shared";
import VoiceButton from "./VoiceButton";
import VoiceButtonDropdown from "./VoiceButtonDropdown";
import VoiceWaveIcon from "./VoiceWaveIcon";

export default {
  name: "VoiceWidget",
  components: {
    MpFlex,
    MpBox,
    MpButton,
    MpIcon,
    MpText,
    MpAvatar,
    MpBadge,
    MpDivider,
    VoiceButton,
    VoiceButtonDropdown,
    VoiceWaveIcon,
  },
  data() {
    return {
      drag: null,
      dragEl: null,
      containerEl: null,
      handleEl: null,
      title: {
        text: "",
        color: "",
        icon: "",
      },
      duration: "00:00",
      seconds: 0,
      name: "Indah Permata",
      phoneNumber: "+6285167276576",
      isMicrophoneDetected: true,
      isSpeakerDetected: false,
      isCalling: false,
      isShowPulseAnimation: false,
      isShowWaveAnimation: false,
      isMute: true,
      isMiniSize: false,
      widthDefaultWidget: "360px",
      widthMiniWidget: "220px",
      isShowActionButton: false,
      isShowVoiceWaveIcon: false,
    };
  },
  mounted() {
    this.animateWidget();
    this.dragWidget();

    // START ON CALL
    this.mockStartCalling();
  },
  beforeDestroy() {
    this.stopTimer();
  },
  methods: {
    mockStartCalling() {
      this.title = {
        text: "Calling...",
        color: "white",
        icon: "rotate(0deg)",
      },
      this.duration = "00:00";
      this.seconds = 0;
      this.isCalling = true;
      this.isShowPulseAnimation = true;
      this.$nextTick(() => {
        this.startPulseAnimation();
      });
      this.startTimer();

      // START ON CALL
      setTimeout(() => {
        this.isShowPulseAnimation = false;
        this.isShowVoiceWaveIcon = true;
        this.isShowWaveAnimation = true;
        this.title = {
          text: "On call",
          color: "green.400",
          icon: "rotate(0deg)",
        };
      }, 4000);

      setTimeout(() => {
        this.isShowWaveAnimation = false;
      }, 8000);

      setTimeout(() => {
        this.isShowWaveAnimation = true;
      }, 12000);

      setTimeout(() => {
        this.handleStopCalling();
      }, 16000);
    },
    handleStopCalling() {
      this.isCalling = false;
      this.isShowVoiceWaveIcon = false;
      this.isShowWaveAnimation = false;
      this.title = {
        text: "Call ended",
        color: "red.400",
        icon: "rotate(135deg)",
      };

      this.stopTimer();
    },
    startPulseAnimation() {
      anime({
        targets: this.$refs.pulseCircle.$el,
        scale: [0.5, 1.5], // Start smaller and grow larger
        opacity: [1, 0], // Fade out as it grows
        easing: "easeOutSine",
        duration: 1500,
        loop: true, // Make the animation loop
      });
    },
    animateWidget() {
      anime({
        targets: this.$refs.widget.$el,
        opacity: [0, 1], // Fade in
        translateY: this.isMiniSize ? [-80, 0] : [160, 0], // Slide up
        width: this.isMiniSize // Change Width
          ? [this.widthDefaultWidget, this.widthMiniWidget]
          : [this.widthMiniWidget, this.widthDefaultWidget],
        easing: "easeOutSine",
        duration: 200,
        delay: 50,
      });
    },
    dragWidget() {
      this.dragEl = document.querySelector("#drag-element");
      this.containerEl = document.querySelector("#drag-container");
      this.handleEl = document.querySelector("#drag-handle");

      this.drag = new Draggable(this.dragEl, {
        defaultPosition: { x: 0, y: 0 },
        axis: "both",
        handle: this.handleEl,
        bounds: this.containerEl,
      });
    },
    startTimer() {
      this.timer = setInterval(() => {
        this.seconds += 1; // Increment seconds
        this.duration = this.formatTime(this.seconds);
      }, 1000);
    },
    stopTimer() {
      clearInterval(this.timer);
    },
    formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
        2,
        "0"
      )}`;
    },
    handleMuteUnmute() {
      this.isMute = !this.isMute;
      this.$emit("mute", this.isMute);
    },
    handleClickMinimize() {
      this.isMiniSize = !this.isMiniSize;

      this.$nextTick(() => {
        this.animateWidget();
      });
      this.$emit("minimize", this.isMiniSize);
    },
    handleClickFullScreen() {
      alert("Go to fullscreen");
      this.$emit("full-screen");
    },
    handleClickClose() {
      this.$emit("close");
    },
    handleCallAgain() {
      this.mockStartCalling();
    },
  },
};
</script>
