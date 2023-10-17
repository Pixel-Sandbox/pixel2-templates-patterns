<template>
  <mp-box
    :position="['fixed', 'relative']"
    :top="['100%', '0']"
    :left="['50%', '0']"
    :width="['100%', 'auto']"
    :background-color="['white', 'transparent']"
    :border-top="['1px solid', '0px solid']"
    :padding-y="['2', '0']"
    :padding-x="['4', '0']"
    :transform="['translate(-50%, -100%)', 'translate(0%, 0%)']"
    border-color="gray.100"
    z-index="100"
  >
    <mp-flex gap="2" :flex-direction="['column-reverse', 'row']">
      <mp-button variant="outline">Settings</mp-button>
    </mp-flex>
  </mp-box>
</template>

<script>
import { MpBox, MpFlex, MpButton } from '@mekari/pixel';

export default {
  name: 'MpxOffboardingAction',
  components: {
    MpBox,
    MpFlex,
    MpButton,
  },
};
</script>
