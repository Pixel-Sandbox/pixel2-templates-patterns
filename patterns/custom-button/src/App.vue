<template>
  <mp-flex>
    <mp-button
      variant="unstyled"
      display="inline-flex"
      justify-content="center"
      align-items="center"
      position="relative"
      background-color="white"
      color="blue.400"
      border-radius="25px"
      font-size="md"
      font-weight="semibold"
      padding-left="2"
      padding-right="3"
      overflow="hidden"
      padding-top="7.5px"
      padding-bottom="7.5px"
      height="auto"
      zIndex="1"
      transition="color 0.3s ease, background-color 0.3s ease"
      :_before="{
        content: `''`,
        position: 'absolute',
        top: '-1.5px',
        left: '-1.5px',
        right: '-1.5px',
        bottom: '-1.5px',
        borderRadius: '23px',
        background: 'linear-gradient(90deg, #4B61DD, #F4F1FE, #4B61DD)',
        backgroundSize: '200% 200%',
        animation: 'border-progress 5s linear infinite',
        transition: 'background-color 0.3s ease',
        zIndex: '-1',
      }"
      :_after="{
        content: `''`,
        position: 'absolute',
        top: '1.5px',
        left: '1.5px',
        right: '1.5px',
        bottom: '1.5px',
        borderRadius: 'full',
        backgroundColor: 'white',
        zIndex: '-1',
      }"
      :_hover="{
        '::before': {
          background: 'linear-gradient(90deg, #4B61DD, #4B61DD, #4B61DD)',
        },
      }"
    >
      <mp-icon
        name="ai-assist"
        size="sm"
        variant="fill"
        color="blue.400"
        margin-right="2"
      />
      Get employees summary
    </mp-button>
  </mp-flex>
</template>

<script>
import { MpFlex, MpIcon, MpButton } from "@mekari/pixel";

export default {
  name: "CustomButton",
  components: {
    MpFlex,
    MpIcon,
    MpButton,
  },
};
</script>

<style>
@keyframes border-progress {
  0% {
    background-position: 0% 20%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 100%;
  }
}
</style>
