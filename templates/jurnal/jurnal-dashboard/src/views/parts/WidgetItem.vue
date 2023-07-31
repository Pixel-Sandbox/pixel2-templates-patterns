<template>
  <mp-box
    class="grid-stack-item-content"
    border-width="1px"
    rounded="md"
    position="absolute"
    width="auto"
    overflowX="hidden"
    overflowY="hidden"
    bg="white"
    p="6"
    ref="widget"
  >
    <mp-flex justify-content="space-between" align-items="center">
      <mp-heading size="lg" mb="2"> {{ title }} </mp-heading>

      <mp-flex align-items="center">
        <mp-box mr="3">
          <mp-autocomplete
            width="150px"
            value="Bulan ini"
            :data="['Bulan ini', 'Hari ini', 'Tahun ini']"
            use-portal
            :content-style="{ width: '150px' }"
          />
        </mp-box>
        <mp-button-icon name="filter" variant="duotone" v-mp-tooltip="'Filter'" />

        <mp-popover>
          <mp-popover-trigger>
            <mp-button-icon name="menu-kebab" />
          </mp-popover-trigger>
          <mp-popover-content
            max-width="164px"
            bg="white"
            rounded="md"
            shadow="lg"
            border-width="1px"
            border-color="gray.400"
          >
            <mp-popover-list>
              <mp-popover-list-item>
                <mp-box display="flex" align-items="center">
                  <mp-icon name="edit" mr="2" /> Ubah nama
                </mp-box>
              </mp-popover-list-item>
              <mp-popover-list-item>
                <mp-box display="flex" align-items="center">
                  <mp-icon name="delete" mr="2" /> Hapus
                </mp-box>
              </mp-popover-list-item>
            </mp-popover-list>
          </mp-popover-content>
        </mp-popover>
      </mp-flex>
    </mp-flex>

    <mp-box
      :h="gridAttrs.h === 1 ? '100px' : '320px'"
      display="flex"
      align-items="center"
      justify-content="center"
      v-if="isLoading"
    >
      <BarSkeleton v-if="type === 'bar'" class="animate-pulse" />
      <DonutSkeleton v-if="type === 'donut'" class="animate-pulse" />
      <NumberSkeleton v-if="type === 'number'" class="animate-pulse" />
      <LineSkeleton v-if="type === 'line'" class="animate-pulse" />
      <MixedSkeleton v-if="type === 'mixed'" class="animate-pulse" />
    </mp-box>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpHeading,
  MpFlex,
  MpButtonIcon,
  MpAutocomplete,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
  MpIcon
} from "@mekari/pixel";
import BarSkeleton from "./skeleton/BarSkeleton.vue";
import DonutSkeleton from "./skeleton/DonutSkeleton.vue";
import NumberSkeleton from "./skeleton/NumberSkeleton.vue";
import LineSkeleton from "./skeleton/LineSkeleton.vue";
import MixedSkeleton from "./skeleton/MixedSkeleton.vue";

export default {
  components: {
    MpBox,
    MpHeading,
    MpFlex,
    MpButtonIcon,
    MpAutocomplete,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
    MpIcon,

    //
    BarSkeleton,
    DonutSkeleton,
    NumberSkeleton,
    LineSkeleton,
    MixedSkeleton,
  },
  props: {
    title: String,
    type: String,
    isLoading: Boolean,
    isError: Boolean,
    gridAttrs: Object,
  },
  computed: {
    widgetNode() {
      return this.$refs.widget.$el;
    },
  },
  mounted() {},
};
</script>

<style>
@keyframes pulse {
  50% {
    opacity: 0.5;
  }
}
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.1, 0, 0.6, 1) infinite;
}
</style>
