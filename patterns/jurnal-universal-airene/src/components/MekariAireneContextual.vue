<template>
  <mp-box
    bg="white"
    rounded="md"
    shadow="lg"
    border-width="1px"
    border-color="gray.400"
    width="298px"
  >
    <mp-flex p="3" justify-content="space-between" align-items="center">
      <img src="/airene-logo.svg" alt="" />

      <mp-flex gap="1">
        <mp-button-icon name="chevrons-down" @click="handleToggle" />
        <mp-button-icon name="close" @click="handleClose" />
      </mp-flex>
    </mp-flex>

    <mp-collapse :is-open="isOpen">
      <mp-box w="full">
        <mp-box>
          <mp-box p="3">
            <mp-box p="3" bg="black" rounded="md">
              <mp-text font-size="2xl" font-weight="semibold" color="white">
                Ask anything with AI
              </mp-text>
            </mp-box>
          </mp-box>

          <mp-flex as="ul" list-style-type="none" w="full">
            <mp-flex
              as="li"
              w="full"
              align-items="center"
              gap="1"
              px="2"
              py="2"
              :_hover="{
                bg: 'gray.50',
              }"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.3682 11.0155L13.3669 11.0154L12.8948 10.9554L12.8943 10.9553C10.882 10.6983 9.29964 9.11271 9.04468 7.101C9.04468 7.10095 9.04467 7.1009 9.04467 7.10086L8.9881 6.65511L8.98802 6.65447C8.95588 6.39939 8.65341 6.08789 8.16309 6.08789C7.66979 6.08789 7.37714 6.38904 7.34367 6.63482L7.28402 7.10446L7.28396 7.10497C7.02696 9.1173 5.44133 10.6996 3.42961 10.9546C3.42958 10.9546 3.42955 10.9546 3.42953 10.9546C3.42951 10.9546 3.42949 10.9546 3.42947 10.9546L2.98606 11.0109C2.98575 11.0109 2.98544 11.0109 2.98512 11.011C2.71439 11.0468 2.4165 11.3434 2.4165 11.8362C2.4165 12.3518 2.70655 12.6243 2.95716 12.6548L2.96101 12.6553L2.96101 12.6553L3.43308 12.7152L3.43359 12.7153C5.44591 12.9723 7.02823 14.5579 7.28319 16.5696C7.2832 16.5697 7.2832 16.5697 7.28321 16.5698L7.33977 17.0155L7.34031 17.0198L7.3403 17.0198C7.37299 17.2897 7.65997 17.5828 8.16478 17.5828C8.64919 17.5828 8.95702 17.2514 8.9838 17.0389L8.98389 17.0382L9.04385 16.5662L9.04392 16.5657C9.30092 14.5534 10.8865 12.971 12.8983 12.7161L13.3682 11.0155ZM13.3682 11.0155C13.6087 11.0456 13.9114 11.329 13.9114 11.8345C13.9114 12.3314 13.6146 12.625 13.3441 12.6595C13.3441 12.6595 13.344 12.6595 13.344 12.6595L12.8984 12.7161L13.3682 11.0155Z"
                  fill="#EAECFB"
                  stroke="#0031BE"
                  stroke-width="1.5"
                />
                <path
                  d="M17.5768 4.86881L17.4019 4.84625L17.5768 4.86881ZM17.5768 4.86881C17.5809 4.88247 17.5834 4.89831 17.5834 4.91473C17.5834 4.93178 17.5807 4.94799 17.5764 4.96162L17.406 4.98291L17.4051 4.98303C16.2293 5.13149 15.3041 6.05736 15.1532 7.23144L17.5768 4.86881ZM15.1531 7.23198L15.1311 7.40304C15.1278 7.40444 15.1243 7.4058 15.1205 7.40707C15.1066 7.41176 15.0939 7.41345 15.0847 7.41345C15.0675 7.41345 15.0514 7.41097 15.0378 7.4071L15.0165 7.23608L15.0164 7.23515C14.8679 6.05917 13.9417 5.13387 12.7674 4.98322L12.768 4.98329L15.1531 7.23198ZM12.5934 4.86779L12.7633 4.84655L12.7642 4.84643C13.94 4.69798 14.8652 3.77211 15.0161 2.59803L12.5934 4.86779ZM15.0162 2.59748L15.0387 2.4232C15.0388 2.42314 15.039 2.42308 15.0392 2.42302C15.0531 2.41858 15.0689 2.41602 15.0847 2.41602C15.0985 2.41602 15.1131 2.41836 15.1266 2.42277C15.1284 2.42337 15.1301 2.42398 15.1317 2.42459L15.1528 2.59339L15.153 2.59431C15.3014 3.77011 16.2273 4.69531 17.4014 4.84618L15.0162 2.59748Z"
                  fill="#EAECFB"
                  stroke="#0031BE"
                  stroke-width="1.5"
                />
              </svg>

              Option
            </mp-flex>
          </mp-flex>
          <slot />
        </mp-box>

        <mp-flex border-top-width="1px" border-color="gray.200" p="3">
          <mp-checkbox v-model="isDontShowAgain">
            Don’t show this again
          </mp-checkbox>
        </mp-flex>
      </mp-box>
    </mp-collapse>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpButtonIcon,
  MpCheckbox,
  MpText,
  MpCollapse,
} from "@mekari/pixel";

export default {
  components: {
    MpBox,
    MpFlex,
    MpButtonIcon,
    MpCheckbox,
    MpText,
    MpCollapse,
  },
  data() {
    return {
      isOpen: false,
      isDontShowAgain: false,
    };
  },

  methods: {
    handleToggle() {
      this.isOpen = !this.isOpen;
    },
    handleClose() {
      const payload = {
        isDontShowAgain: this.isDontShowAgain,
      };

      this.$emit("close", payload);
    },
  },
};
</script>
