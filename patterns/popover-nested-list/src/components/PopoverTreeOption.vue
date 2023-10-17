<template>
  <mp-box width="full" position="relative">
    <mp-box
      position="relative"
      v-for="(option, index) in options"
      :key="option.id"
      v-pixel="{
        ':before': {
          content: `''`,
          display: 'block',
          position: 'absolute',
          width: '0',
          top: '0',
          bottom: '0',
          left: option.spacing + 'px',
          borderLeft: option.spacing !== 0 ? '1px solid' : '0px',
          borderRadius: 'full',
          borderColor: 'gray.100',
        },
      }"
    >
      <mp-popover-list-item
        role="group"
        padding-y="1"
        v-pixel="{
          ':before': {
            content: `''`,
            display: 'block',
            position: 'absolute',
            width: '8px',
            height: '0',
            top: '18px',
            left: option.spacing + 'px',
            marginTop: '-1px',
            borderTop: option.spacing !== 0 ? '1px solid' : '0px',
            borderRadius: 'full',
            borderColor: 'gray.100',
          },
          ':first-child:before': {
            backgroundColor: 'white',
            height: 'auto',
            top: '18px',
            bottom: '0',
            borderRadius: '0',
          },
          ':last-child:before': {
            backgroundColor:
              index == options.length - 1 ? 'white' : 'transparent',
            height: 'auto',
            top: '18px',
            bottom: '0',
            borderRadius: '0',
          },
          ':hover:first-child:before': {
            backgroundColor: 'gray.50',
          },
          ':hover:last-child:before': {
            backgroundColor:
              index == options.length - 1 ? 'gray.50' : 'transparent',
          },
        }"
      >
        <mp-checkbox :margin-left="option.spacing + 'px'">
          {{ option.label }}
        </mp-checkbox>
        <mp-box
          v-if="option.child && option.child.length > 0"
          position="absolute"
          right="3"
          opacity="0"
          z-index="1"
          :_groupHover="{ opacity: '100' }"
        >
          <mp-button variant="link">Select child's</mp-button>
        </mp-box>
      </mp-popover-list-item>

      <PopoverTreeOption
        v-if="option.child && option.child.length > 0"
        :key="option.id"
        :options="option.child"
      />
    </mp-box>
  </mp-box>
</template>

<script>
  import { MpBox, MpButton, MpPopoverListItem, MpCheckbox } from "@mekari/pixel";

  export default {
    name: "PopoverTreeOption",
    components: {
      MpBox,
      MpButton,
      MpPopoverListItem,
      MpCheckbox,
    },
    props: {
      options: [Array, Object],
    },
    methods: {
      getNestedStyle: function () {},
    },
  };
</script>