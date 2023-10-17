<template>
  <mp-flex v-show="steps === 3" flex="1 0 auto">
    <mp-box
      width="620px"
      border="1px solid"
      border-color="gray.600"
      border-radius="md"
      box-shadow="md"
    >
      <mp-box background-color="white" padding="4" border-radius="md">
        <mp-text color="gray.600" font-size="sm" margin-bottom="2">
          The action is executed when the starting point is triggered.
        </mp-text>

        <mp-flex gap="4">
          <mp-pseudo-box role="group" @click="setStep(4)">
            <mp-flex
              border="1px solid"
              border-radius="md"
              border-color="gray.100"
              padding="4"
              gap="3"
              flex="1 0 0%"
              cursor="pointer"
              transition="all .2s ease"
              :_groupHover="{
                borderColor: 'blue.400',
                boxShadow: 'md',
              }"
            >
              <mp-icon name="notification" />
              <mp-text font-weight="semibold">Send notification</mp-text>
            </mp-flex>
          </mp-pseudo-box>
          <mp-pseudo-box role="group">
            <mp-flex
              border="1px solid"
              border-radius="md"
              border-color="gray.100"
              padding="4"
              gap="3"
              flex="1 0 0%"
              cursor="pointer"
              transition="all .2s ease"
              :_groupHover="{
                borderColor: 'blue.400',
                boxShadow: 'md',
              }"
            >
              <mp-icon name="envelope" />
              <mp-text font-weight="semibold">Send notification</mp-text>
            </mp-flex>
          </mp-pseudo-box>
          <mp-pseudo-box role="group">
            <mp-flex
              border="1px solid"
              border-radius="md"
              border-color="gray.100"
              padding="4"
              gap="3"
              flex="1 0 0%"
              cursor="pointer"
              transition="all .2s ease"
              :_groupHover="{
                borderColor: 'blue.400',
                boxShadow: 'md',
              }"
            >
              <mp-icon name="whatsapp-flat" />
              <mp-text font-weight="semibold">Send whatsapp</mp-text>
            </mp-flex>
          </mp-pseudo-box>
        </mp-flex>
      </mp-box>
    </mp-box>
  </mp-flex>
</template>

<script>
import { MpBox, MpPseudoBox, MpFlex, MpText, MpIcon } from "@mekari/pixel";

export default {
  name: "ActionOptionBox",
  components: {
    MpBox,
    MpPseudoBox,
    MpFlex,
    MpText,
    MpIcon,
  },
  props: {
    steps: [Number],
    setStep: [Function],
  },
};
</script>