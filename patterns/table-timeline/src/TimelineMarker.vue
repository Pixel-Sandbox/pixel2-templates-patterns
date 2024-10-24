<template>
  <mp-box
    id="timeline-marker"
    position="absolute"
    :top="top"
    left="0px"
    display="flex"
    flex-direction="column"
    align-items="center"
    justify-content="center"
    z-index="100"
    :style="{
      transform: `translateX(${83 + 83 + 41.5 - 6}px)`,
    }"
  >
    <mp-box h="12px" w="12px" rounded="full" bg="red.400" />
    <mp-box
      w="1.5px"
      bg="red.400"
      :style="{
        height: timelineContainerHeight || 0 + 'px',
      }"
    />
  </mp-box>
</template>

<script>
import { MpBox } from "@mekari/pixel";
export default {
  components: {
    MpBox,
  },
  props: {
    timelineContainerHeight: {
      type: Number,
      default: 0,
    },
    top: {
      type: String,
      default: '24px'
    }
  },
};
</script>
