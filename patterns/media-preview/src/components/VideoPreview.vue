<template>
  <mp-flex min-height="100vh" justify-content="center" align-items="center">
    <mp-box
      class="video-player"
      role="group"
      :class="{ fullscreen: isFullscreen }"
      transition="width 0.3s ease-in-out, height 0.3s ease-in-out"
      position="relative"
      height="480px"
      width="854px"
      display="flex"
      justify-content="center"
      align-items="center"
      rounded="md"
      overflow="hidden"
      bg="black"
    >
      <!-- Loading -->
      <mp-box
        v-if="isLoading"
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
      >
        <mp-spinner color="white" />
      </mp-box>

      <!-- Thumbnail Image -->
      <img
        v-if="thumbnailUrl"
        :src="thumbnailUrl"
        alt="Video Thumbnail"
        v-pixel="{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }"
      />

      <!-- Video Element -->
      <video
        class="video-element"
        ref="videoPlayer"
        :src="currentSource"
        @timeupdate="onTimeUpdate"
        @loadedmetadata="onLoadedMetadata"
        @ended="onEnded"
        @click="togglePlay"
      >
        Your browser does not support the video element.
      </video>

      <!-- Play and Pause -->
      <mp-box
        as="button"
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        cursor="pointer"
        @click="togglePlay"
      >
        <IconVideoPlay
          v-if="!isPlaying"
          v-pixel="{
            transition: 'transform 0.2s ease',
            _groupHover: {
              transform: 'scale(1.05)',
            },
          }"
        />

        <IconVideoPause
          v-if="isPlaying"
          v-pixel="{
            transition: 'transform 0.2s ease',
            opacity: '0',
            _groupHover: {
              opacity: '1',
              transform: 'scale(1.05)',
            },
          }"
        />
      </mp-box>

      <!-- Controls Container -->
      <mp-box
        position="absolute"
        bottom="0"
        left="0"
        right="0"
        bg="#2329334D"
        color="white"
        p="3"
      >
        <mp-flex gap="4" align-items="center">
          <mp-flex gap="4" align-items="center" width="100%">
            <mp-box
              as="button"
              align-items="center"
              justify-content="center"
              @click="togglePlay"
            >
              <mp-icon
                v-if="isPlaying"
                name="pause"
                color="white"
                variant="fill"
              />
              <svg
                v-else
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.8878 4.60226L12.8557 4.58363C11.4331 3.72833 10.324 3.06216 9.42107 2.62705C8.51543 2.19195 7.71612 1.93573 6.92964 2.01399C6.31945 2.07481 5.72877 2.26593 5.19628 2.57485C4.66379 2.88376 4.20149 3.3035 3.83964 3.80659C3.37307 4.45412 3.18241 5.2852 3.09166 6.29889C3 7.30979 3 8.61977 3 10.2996V13.7003C3 15.3802 3 16.6902 3.09166 17.7011C3.18333 18.7148 3.37307 19.5458 3.83964 20.1934C4.20139 20.6964 4.66355 21.116 5.19587 21.4249C5.72819 21.7338 6.31869 21.925 6.92872 21.986C7.7152 22.0642 8.51543 21.809 9.42199 21.372C10.324 20.9378 11.4331 20.2716 12.8557 19.4163L12.8878 19.3977L15.6561 17.7355L15.6881 17.7169V17.716C17.0677 16.8868 18.1447 16.2402 18.9331 15.6616C19.726 15.0811 20.3181 14.5063 20.6307 13.7833C20.8742 13.2212 21 12.6137 21 11.9995C21 11.3853 20.8742 10.7779 20.6307 10.2158C20.319 9.49463 19.726 8.91884 18.9331 8.33746C18.1447 7.7598 17.0677 7.11227 15.6881 6.28399L15.6561 6.26535L12.8878 4.60226Z"
                  fill="currentColor"
                />
              </svg>
            </mp-box>

            <!-- Progress Bar -->
            <mp-box
              ref="progressBar"
              role="group"
              width="full"
              height="2"
              bg="#ffffff33"
              rounded="full"
              cursor="pointer"
              @click="onProgressBarClick"
              @mousedown="startDragging"
            >
              <mp-box
                position="relative"
                height="full"
                bg="blue.400"
                transition="width 0.2s linear"
                rounded="full"
                :style="{ width: `${progress}%` }"
                class="progress-bar"
              >
                <!-- Progress pointer -->
                <mp-box
                  position="absolute"
                  right="-8px"
                  top="-50%"
                  width="16px"
                  height="16px"
                  bg="white"
                  rounded="full"
                  transition="transform 0.2s linear"
                  :_groupHover="{
                    transform: 'scale(1.25)',
                  }"
                ></mp-box>
              </mp-box>
            </mp-box>
          </mp-flex>

          <mp-flex align-items="center" gap="2">
            <!-- Volume Control -->
            <mp-flex align-items="center" gap="2" pr="4">
              <mp-box
                as="button"
                position="relative"
                display="flex"
                justify-content="center"
                align-items="center"
                @click="toggleMute"
                :style="{ opacity: isMuted ? 0.5 : 1 }"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M14.6205 7.14943C14.6205 4.39699 11.3334 2.97392 9.32636 4.85745L8.26292 5.85544C7.48598 6.58457 6.4605 6.9904 5.39502 6.9904H4.14319C2.40725 6.9904 1 8.39765 1 10.1336V15.023C1 16.7589 2.40725 18.1662 4.14319 18.1662H5.39502C6.4605 18.1662 7.48598 18.572 8.26292 19.3011L9.32636 20.2991C11.3334 22.1827 14.6205 20.7596 14.6205 18.0072V7.14943Z"
                    fill="currentColor"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19.4022 4.64C19.6952 4.34715 20.1701 4.34722 20.4629 4.64016C22.5677 6.74559 23.7501 9.60078 23.7501 12.5779C23.7501 15.5549 22.5677 18.4101 20.4629 20.5155C20.1701 20.8085 19.6952 20.8086 19.4022 20.5157C19.1093 20.2229 19.1092 19.748 19.4021 19.455C21.2257 17.6309 22.2501 15.1572 22.2501 12.5779C22.2501 9.99852 21.2257 7.5248 19.4021 5.70066C19.1092 5.40772 19.1093 4.93285 19.4022 4.64ZM16.7515 8.33848C17.0444 8.04563 17.5193 8.04571 17.8121 8.33864C18.9348 9.46168 19.5655 10.9846 19.5655 12.5726C19.5655 14.1606 18.9348 15.6835 17.8121 16.8066C17.5193 17.0995 17.0444 17.0996 16.7515 16.8067C16.4586 16.5139 16.4585 16.039 16.7513 15.7461C17.5928 14.9043 18.0655 13.7628 18.0655 12.5726C18.0655 11.3824 17.5928 10.2409 16.7513 9.39914C16.4585 9.1062 16.4586 8.63133 16.7515 8.33848Z"
                    fill="currentColor"
                  />
                </svg>

                <mp-flex
                  position="absolute"
                  bg="transparent"
                  width="full"
                  height="full"
                  align-items="center"
                  justify-content="center"
                >
                  <mp-box
                    :height="isMuted ? '28px' : '0px'"
                    width="1.5px"
                    transition="height 0.2s ease-in-out"
                    bg="gray.100"
                    transform="rotate(-45deg)"
                    border-radius="full"
                  />
                </mp-flex>
              </mp-box>

              <mp-flex w="80px">
                <VolumeProgressBar
                  :min="0"
                  :max="1"
                  v-model="volume"
                  @input="updateVolume"
                />
              </mp-flex>
            </mp-flex>

            <!-- Quality Settings -->
            <mp-flex align-items="center">
              <mp-popover close-on-select>
                <mp-popover-trigger>
                  <mp-button-icon
                    name="settings"
                    color="white"
                    variant="fill"
                    :_hover="{
                      backgroundColor: 'transparent',
                    }"
                    :_focus="{
                      outline: 'none',
                    }"
                  />
                </mp-popover-trigger>
                <mp-popover-content
                  max-width="140px"
                  max-height="364px"
                  overflow-y="auto"
                  bg="white"
                  rounded="md"
                  shadow="lg"
                  border-width="1px"
                  border-color="gray.400"
                >
                  <mp-popover-list>
                    <mp-popover-list-item @click="changeQuality('auto')">
                      Auto
                      <mp-icon
                        v-if="selectedQuality === 'auto'"
                        name="check"
                        color="teal.400"
                      />
                    </mp-popover-list-item>
                    <mp-popover-list-item
                      v-for="quality in getAvailableQualities"
                      :key="quality.label"
                      @click="changeQuality(quality.value)"
                      :is-active="selectedQuality === quality.value"
                    >
                      {{ quality.label }}

                      <mp-icon
                        v-if="selectedQuality === quality.value"
                        name="check"
                        color="teal.400"
                      />
                    </mp-popover-list-item>
                  </mp-popover-list>
                </mp-popover-content>
              </mp-popover>
            </mp-flex>

            <!-- Fullscreen Button -->
            <mp-flex align-items="center">
              <mp-button-icon
                @click="toggleFullscreen"
                name="full-screen"
                color="white"
                :_hover="{
                  backgroundColor: 'transparent',
                }"
                :_focus="{
                  outline: 'none',
                }"
              />
            </mp-flex>
          </mp-flex>
        </mp-flex>
      </mp-box>
    </mp-box>
  </mp-flex>
</template>

<script>
import {
  MpFlex,
  MpBox,
  MpIcon,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
  MpButtonIcon,
  MpSpinner,
} from "@mekari/pixel";

import VolumeProgressBar from "./VolumeProgressBar.vue";
import IconVideoPlay from "./icons/IconVideoPlay.vue";
import IconVideoPause from "./icons/IconVideoPause.vue";

export default {
  name: "VideoPlayer",
  components: {
    MpFlex,
    MpBox,
    MpIcon,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
    MpButtonIcon,
    MpSpinner,
    VolumeProgressBar,
    IconVideoPlay,
    IconVideoPause,
  },
  props: {
    src: {
      type: String,
      required: true,
    },
    qualitySources: {
      type: Object,
      required: false,
      default: () => ({}),
      // Example format:
      // {
      //   '360': 'video-360.mp4',
      //   '480p': 'video-480p.mp4',
      //   '720p': 'video-720p.mp4',
      //   '1080p': 'video-1080p.mp4'
      // }
    },
  },

  data() {
    return {
      isLoading: true,
      currentSource: "",

      // Playback
      currentTime: 0,
      duration: 0,
      isPlaying: false,
      volume: 1,
      restVolume: 1,
      isMuted: false,
      progress: 0,
      isFullscreen: false,
      isDragging: false,

      // Quality
      selectedQuality: "auto", // Default to auto quality
      qualities: [
        { label: "360p", value: "360p" },
        { label: "480p", value: "480p" },
        { label: "720p (HD)", value: "720p" },
        { label: "1080p (FHD)", value: "1080p" },
      ],

      // Thumbnail
      thumbnailUrl: "",
    };
  },

  mounted() {
    const quality =
      this.selectedQuality === "auto" ? "480p" : this.selectedQuality;
    this.currentSource = this.qualitySources[quality] || this.src;

    // Add event listeners for dragging
    document.addEventListener("mousemove", this.onDrag);
    document.addEventListener("mouseup", this.stopDragging);

    // Add fullscreen change event listener
    document.addEventListener("fullscreenchange", this.updateFullscreenStatus);

    // Add space key event listener for play/pause
    document.addEventListener("keydown", this.handleSpaceKey);
  },
  beforeDestroy() {
    // Remove event listeners
    document.removeEventListener("mousemove", this.onDrag);
    document.removeEventListener("mouseup", this.stopDragging);
    document.removeEventListener(
      "fullscreenchange",
      this.updateFullscreenStatus
    );

    // Remove space key event listener
    document.removeEventListener("keydown", this.handleSpaceKey);
  },
  computed: {
    getAvailableQualities() {
      console.log("qualitySources", Object.keys(this.qualitySources));

      return this.qualities.filter((quality) =>
        Object.keys(this.qualitySources).includes(quality.value)
      );
    },
  },
  methods: {
    // Playback Controls
    togglePlay() {
      const video = this.$refs.videoPlayer;
      if (this.isPlaying) {
        video.pause();
      } else {
        video.play();
        this.thumbnailUrl = "";
      }
      this.isPlaying = !this.isPlaying;
    },

    stop() {
      const video = this.$refs.videoPlayer;
      video.pause();
      video.currentTime = 0;
      this.isPlaying = false;
    },

    // Volume Controls
    updateVolume() {
      const video = this.$refs.videoPlayer;
      video.volume = this.volume;

      this.volume = video.volume;
      this.restVolume = video.volume;

      if (video.volume === 0) {
        this.isMuted = true;
      } else {
        this.isMuted = false;
      }
    },

    toggleMute() {
      const video = this.$refs.videoPlayer;

      // Remember the current volume level
      console.log("restVolume", this.restVolume);

      if (this.isMuted) {
        video.volume = this.restVolume || 1;
        this.volume = this.restVolume || 1;
      } else {
        video.volume = 0;
        this.volume = 0;
      }
      this.isMuted = !this.isMuted;
    },

    // Progress Bar Controls
    onTimeUpdate() {
      const video = this.$refs.videoPlayer;
      if (!this.isDragging) {
        this.currentTime = video.currentTime;
        this.progress = (video.currentTime / video.duration) * 100;
      }
    },
    onLoadedMetadata() {
      const video = this.$refs.videoPlayer;
      this.duration = video.duration;

      this.isLoading = false;
    },
    onEnded() {
      this.isPlaying = false;
      this.progress = 100;
    },
    startDragging(event) {
      this.isDragging = true;
      this.onDrag(event);
    },
    stopDragging() {
      if (this.isDragging) {
        this.isDragging = false;
      }
    },
    onDrag(event) {
      if (this.isDragging) {
        const progressBar = this.$refs.progressBar.$el;
        const rect = progressBar.getBoundingClientRect();
        const position = Math.max(
          0,
          Math.min(1, (event.clientX - rect.left) / rect.width)
        );
        this.progress = position * 100;
        this.$refs.videoPlayer.currentTime = position * this.duration;
      }
    },

    onProgressBarClick(event) {
      const progressBar = this.$refs.progressBar.$el;
      const rect = progressBar.getBoundingClientRect();
      const position = (event.clientX - rect.left) / rect.width;
      this.$refs.videoPlayer.currentTime = position * this.duration;
    },

    onProgressChange(position) {
      console.log("onProgressChange", position);
      this.$refs.videoPlayer.currentTime = position * this.duration;
    },

    changeQuality(quality) {
      if (quality === this.selectedQuality) {
        return;
      }

      this.isLoading = true;

      const video = this.$refs.videoPlayer;
      const currentTime = video.currentTime;
      const wasPlaying = !video.paused;

      // Update the quality selection
      this.selectedQuality = quality;

      // Save the current source
      const previousSource = video.src;
      const newSource = this.qualitySources[quality] || this.src;

      // Only change if the source is different
      if (previousSource !== newSource) {
        video.currentTime = currentTime;

        this.currentSource = newSource;
        video.load();

        // Wait for the new source to be loaded
        const handleLoaded = () => {
          video.currentTime = currentTime;

          if (wasPlaying) {
            const play = video.play();

            if (play !== undefined) {
              play
                .then(() => {
                  this.isPlaying = true;
                })
                .catch((error) => {
                  console.error("Error playing video:", error);
                  this.isPlaying = false;
                });
            } else {
              console.error("Error playing video: video.play is undefined");
            }
          }

          video.removeEventListener("loadeddata", handleLoaded);
        };

        video.addEventListener("loadeddata", handleLoaded, { once: true });
      }
    },

    // Fullscreen
    toggleFullscreen() {
      const videoContainer = this.$el;

      if (!this.isFullscreen) {
        if (videoContainer.requestFullscreen) {
          videoContainer.requestFullscreen();
        } else if (videoContainer.webkitRequestFullscreen) {
          videoContainer.webkitRequestFullscreen();
        } else if (videoContainer.msRequestFullscreen) {
          videoContainer.msRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      }
    },
    updateFullscreenStatus() {
      this.isFullscreen = document.fullscreenElement !== null;
    },

    // Utils
    formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = Math.floor(seconds % 60);
      return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
    },

    handleSpaceKey(event) {
      if (event.code === "Space") {
        event.preventDefault(); // Prevent scrolling the page
        this.togglePlay();
      }
    },
  },
};
</script>

<style scoped>
.thumbnail {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the image covers the area while maintaining aspect ratio */
}

.volume-slider {
  background: red;
  outline: "transparent";
}

/* Fullscreen styles */
.video-player.fullscreen {
  width: 100vw;
  height: 100vh;
}

.video-element {
  height: 100%;
  object-fit: contain;
  cursor: pointer;
}

.video-player.fullscreen .video-element {
  height: 100%;
  object-fit: contain;
}
</style>
