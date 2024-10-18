<template>
  <mp-flex direction="column" gap="2" py="2">
    <mp-flex align-items="center" gap="2">
      <mp-avatar :name="name" background-color="stone" size="sm" />
      <mp-text font-size="sm" font-weight="semibold">
        {{  name }}
      </mp-text>
    </mp-flex>
    <mp-text>
      {{ question }}
    </mp-text>
  </mp-flex>
</template>

<script>
import { MpFlex, MpAvatar, MpText } from '@mekari/pixel'

export default {
  name: 'AireneQuestion',
  components: {
    MpFlex,
    MpAvatar,
    MpText
  },
  props: {
    name: {
      type: String,
      default: 'Anda'
    },
    question: {
      type: String,
      default: ''
    }
  }
}

</script>