<template>
  <mp-drawer
    :is-open="isNotificationMenuOpen"
    :on-close="onNotificationMenuToggle"
    :return-focus-on-close="false"
  >
    <mp-drawer-overlay :display="['none', 'block']" />
    <mp-drawer-content
      border="none"
      border-left="1px"
      border-left-color="gray.100"
      background-color="background"
      :max-width="['full', 'xs']"
      :margin-top="['91px', '0px']"
      :height="['calc(100vh - 91px)', '100vh']"
    >
      <mp-drawer-body
        background-color="white"
        overflow="hidden auto"
        padding="0"
      >
        <Notification />
      </mp-drawer-body>
    </mp-drawer-content>
  </mp-drawer>
</template>

<script>
import {
  MpDrawer,
  MpDrawerOverlay,
  MpDrawerContent,
  MpDrawerBody,
} from "@mekari/pixel";
import Notification from "../components/Notification";

export default {
  name: "NotificationMobile",
  props: {
    isNotificationMenuOpen: [Boolean],
    onNotificationMenuToggle: [Function],
  },
  components: {
    MpDrawer,
    MpDrawerOverlay,
    MpDrawerContent,
    MpDrawerBody,
    Notification,
  },
};
</script>
