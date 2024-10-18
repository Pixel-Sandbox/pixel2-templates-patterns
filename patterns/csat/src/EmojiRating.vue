<template>
    <mp-grid template-columns="repeat(5, 1fr)" gap="2" mt="4">
      <!-- Sangat tidak puas -->
      <mp-box
        display="flex"
        flex-direction="column"
        align-items="center"
        p="1"
        rounded="md"
        cursor="pointer"
        :_hover="{
          bg: 'gray.25',
        }"
        :style="{
          '--background-color': selectedRating === 1 ? '#F5C800' : 'transparent',
          '--stroke-color':
            selectedRating === 1 ? '#B06D40' : 'var(--colors-gray-400)',
        }"
        @click="handleSelectRating(1)"
      >
        <svg
          width="41"
          height="40"
          viewBox="0 0 41 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="20.3998"
            cy="19.9997"
            r="16.6667"
            fill="var(--background-color)"
            stroke="var(--stroke-color)"
            stroke-width="2.5"
          />
          <ellipse
            cx="14.5667"
            cy="16.6663"
            rx="2.5"
            ry="3.33333"
            fill="var(--stroke-color)"
          />
          <ellipse
            cx="26.2332"
            cy="16.6663"
            rx="2.5"
            ry="3.33333"
            fill="var(--stroke-color)"
          />
          <path
            d="M27.0665 28.3333C27.0665 28.3333 24.5665 25 20.3998 25C16.2332 25 13.7332 28.3333 13.7332 28.3333"
            stroke="var(--stroke-color)"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M23.7332 15L29.5665 12.5"
            stroke="var(--stroke-color)"
            stroke-width="2.5"
            stroke-linecap="round"
          />
          <path
            d="M17.0667 15L11.2333 12.5"
            stroke="var(--stroke-color)"
            stroke-width="2.5"
            stroke-linecap="round"
          />
        </svg>
  
        <mp-text
          mt="1"
          :color="selectedRating === 1 ? 'black' : 'gray.400'"
          font-size="sm"
          text-align="center"
        >
          Sangat tidak puas
        </mp-text>
      </mp-box>
  
      <!-- Kurang puas -->
      <mp-box
        display="flex"
        flex-direction="column"
        align-items="center"
        p="1"
        rounded="md"
        cursor="pointer"
        :_hover="{
          bg: 'gray.25',
        }"
        :style="{
          '--background-color': selectedRating === 2 ? '#F5C800' : 'transparent',
          '--stroke-color':
            selectedRating === 2 ? '#B06D40' : 'var(--colors-gray-400)',
        }"
        @click="handleSelectRating(2)"
      >
        <svg
          width="41"
          height="40"
          viewBox="0 0 41 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="20.1999"
            cy="19.9997"
            r="16.6667"
            fill="var(--background-color)"
            stroke="var(--stroke-color)"
            stroke-width="2.5"
          />
          <ellipse
            cx="14.3667"
            cy="16.6663"
            rx="2.5"
            ry="3.33333"
            fill="var(--stroke-color)"
          />
          <ellipse
            cx="26.0332"
            cy="16.6663"
            rx="2.5"
            ry="3.33333"
            fill="var(--stroke-color)"
          />
          <path
            d="M26.8665 28.3333C26.8665 28.3333 24.3665 25 20.1999 25C16.0332 25 13.5332 28.3333 13.5332 28.3333"
            stroke="var(--stroke-color)"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
  
        <mp-text
          mt="1"
          :color="selectedRating === 2 ? 'black' : 'gray.400'"
          font-size="sm"
          text-align="center"
        >
          Kurang puas
        </mp-text>
      </mp-box>
  
      <!-- Netral -->
      <mp-box
        display="flex"
        flex-direction="column"
        align-items="center"
        p="1"
        rounded="md"
        cursor="pointer"
        :_hover="{
          bg: 'gray.25',
        }"
        :style="{
          '--background-color': selectedRating === 3 ? '#F5C800' : 'transparent',
          '--stroke-color':
            selectedRating === 3 ? '#B06D40' : 'var(--colors-gray-400)',
        }"
        @click="handleSelectRating(3)"
      >
        <svg
          width="41"
          height="40"
          viewBox="0 0 41 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="20.1999"
            cy="19.9997"
            r="16.6667"
            fill="var(--background-color)"
            stroke="var(--stroke-color)"
            stroke-width="2.5"
          />
          <ellipse
            cx="14.3667"
            cy="16.6663"
            rx="2.5"
            ry="3.33333"
            fill="var(--stroke-color)"
          />
          <ellipse
            cx="26.0332"
            cy="16.6663"
            rx="2.5"
            ry="3.33333"
            fill="var(--stroke-color)"
          />
          <path
            d="M26.8665 28.3333C26.8665 28.3333 24.3665 25 20.1999 25C16.0332 25 13.5332 28.3333 13.5332 28.3333"
            stroke="var(--stroke-color)"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
  
        <mp-text
          mt="1"
          :color="selectedRating === 3 ? 'black' : 'gray.400'"
          font-size="sm"
          text-align="center"
        >
          Netral
        </mp-text>
      </mp-box>
  
      <!-- Puas -->
      <mp-box
        display="flex"
        flex-direction="column"
        align-items="center"
        p="1"
        rounded="md"
        cursor="pointer"
        :_hover="{
          bg: 'gray.25',
        }"
        :style="{
          '--background-color': selectedRating === 4 ? '#F5C800' : 'transparent',
          '--stroke-color':
            selectedRating === 4 ? '#B06D40' : 'var(--colors-gray-400)',
        }"
        @click="handleSelectRating(4)"
      >
        <svg
          width="41"
          height="40"
          viewBox="0 0 41 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="20.7997"
            cy="19.9997"
            r="16.6667"
            fill="var(--background-color)"
            stroke="var(--stroke-color)"
            stroke-width="2.5"
          />
          <ellipse
            cx="14.9666"
            cy="16.6663"
            rx="2.5"
            ry="3.33333"
            fill="var(--stroke-color)"
          />
          <ellipse
            cx="26.6331"
            cy="16.6663"
            rx="2.5"
            ry="3.33333"
            fill="var(--stroke-color)"
          />
          <path
            d="M27.4664 24.9997C27.4664 24.9997 24.9664 28.333 20.7997 28.333C16.6331 28.333 14.1331 24.9997 14.1331 24.9997"
            stroke="var(--stroke-color)"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
  
        <mp-text
          mt="1"
          :color="selectedRating === 4 ? 'black' : 'gray.400'"
          font-size="sm"
          text-align="center"
        >
          Puas
        </mp-text>
      </mp-box>
  
      <!-- Sangat Puas -->
      <mp-box
        display="flex"
        flex-direction="column"
        align-items="center"
        p="1"
        rounded="md"
        cursor="pointer"
        :_hover="{
          bg: 'gray.25',
        }"
        :style="{
          '--background-color': selectedRating === 5 ? '#F5C800' : 'transparent',
          '--stroke-color':
            selectedRating === 5 ? '#B06D40' : 'var(--colors-gray-400)',
        }"
        @click="handleSelectRating(5)"
      >
        <svg
          width="41"
          height="40"
          viewBox="0 0 41 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="20.5998"
            cy="19.9997"
            r="16.6667"
            fill="var(--background-color)"
            stroke="var(--stroke-color)"
            stroke-width="2.5"
          />
          <path
            d="M27.2664 24.9997C27.2664 24.9997 24.7664 28.333 20.5998 28.333C16.4331 28.333 13.9331 24.9997 13.9331 24.9997"
            stroke="var(--stroke-color)"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.3044 19.4918C16.2106 19.5689 16.0334 19.6334 15.912 19.6346C14.8804 19.6553 12.3542 19.0948 11.5481 16.8798C11.1922 15.902 11.6922 14.8242 12.6636 14.4706C13.2395 14.261 13.9783 14.7056 14.4545 15.0196C14.6175 14.473 14.9007 13.6563 15.4735 13.4479C16.4449 13.0943 17.5208 13.5986 17.8766 14.5764C18.6828 16.7914 17.108 18.8445 16.3044 19.4918Z"
            fill="var(--stroke-color)"
          />
          <path
            d="M25.2878 19.6346C25.1664 19.6334 24.9892 19.5689 24.8955 19.4918C24.0918 18.8445 22.517 16.7914 23.3232 14.5764C23.6791 13.5986 24.755 13.0943 25.7264 13.4479C26.3023 13.6575 26.5822 14.4736 26.7451 15.0203C27.2214 14.7063 27.9635 14.2621 28.5363 14.4706C29.5077 14.8242 30.0077 15.902 29.6518 16.8798C28.8456 19.0948 26.3195 19.6553 25.2878 19.6346Z"
            fill="var(--stroke-color)"
          />
        </svg>
  
        <mp-text
          mt="1"
          :color="selectedRating === 5 ? 'black' : 'gray.400'"
          font-size="sm"
          text-align="center"
        >
          Sangat puas
        </mp-text>
      </mp-box>
    </mp-grid>
  </template>
  
  <script>
  import { MpBox, MpText, MpGrid } from "@mekari/pixel";
  
  export default {
    name: "TooltipWithIcon",
    components: { MpBox, MpText, MpGrid },
    props: {
      value: {
        type: Number,
        default: null,
      },
    },
    computed: {
      selectedRating: {
        get() {
          return this.value;
        },
        set(newValue) {
          this.$emit("input", newValue);
          this.$emit("change", newValue);
        },
      },
    },
    methods: {
      handleSelectRating(value) {
        this.selectedRating = value;
      },
    },
  };
  </script>
  