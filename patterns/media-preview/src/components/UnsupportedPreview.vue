<template>
  <mp-flex
    align-items="center"
    justify-content="center"
    flex-direction="column"
    gap="4"
    w="100%"
    h="100%"
  >
    <mp-icon name="img-break" color="white" height="7.5" width="7.5" />
    <mp-text color="white" font-size="sm" text-align="center">
      Attachment file is currently unavailable or unsupported. <br />
      Please download to see attachment.
    </mp-text>
  </mp-flex>
</template>

<script>
import { MpFlex, MpIcon, MpText } from "@mekari/pixel";

export default {
  name: "UnsupportedPreview",
  components: {
    MpFlex,
    MpIcon,
    MpText,
  },
};
</script>
