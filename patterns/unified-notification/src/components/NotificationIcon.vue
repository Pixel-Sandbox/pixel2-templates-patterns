<script>
import { MpFlex, MpIcon, MpText } from '@mekari/pixel'
import {
  getAssignmentIcon,
  getCategoryGroup,
  getChannelIcon,
  getDownloadUploadIcon,
  getInitialName,
  getNotificationBackground,
  getSpecialChannelIcon,
  getSpecialChannelIconColor,
  getUpdateIcon,
} from './utils.js'

export default {
  name: 'NotificationIcon',
  components: {
    MpFlex,
    MpIcon,
    MpText,
  },
  props: {
    /**
     * The type of notification icon to display
     * @default 'reminder'
     */
    category: {
      type: String,
      default: 'reminder',
    },
    /**
     * The name or identifier for the notification source
     */
    name: {
      type: String,
      default: undefined,
    },
  },
  methods: {
    // expose imported helpers to the template
    getAssignmentIcon,
    getCategoryGroup,
    getChannelIcon,
    getDownloadUploadIcon,
    getInitialName,
    getNotificationBackground,
    getSpecialChannelIcon,
    getSpecialChannelIconColor,
    getUpdateIcon,
  },
}
</script>

<template>
  <MpFlex
    position="relative"
    h="9"
    w="9"
    rounded="full"
    :bg="getNotificationBackground(category, name)"
    display="flex"
    align-items="center"
    justify-content="center"
  >
    <MpText v-if="category === 'avatar'" font-size="sm" color="white" font-weight="semibold">
      {{ getInitialName(name) }}
    </MpText>

    <MpIcon
      v-else-if="category === 'reminder'"
      name="time"
      variant="fill"
      color="white"
      height="5"
      width="5"
    />

    <!-- Channel Icons (Components) -->
    <component
      :is="getChannelIcon(category)"
      v-else-if="getCategoryGroup(category) === 'channel' && getChannelIcon(category)"
      v-pixel="{
        rounded: 'full',
        position: 'absolute',
        top: 0,
        left: 0,
        height: 9,
        width: 9,
      }"
    />

    <!-- Special Channel Icons (Regular Icons) -->
    <MpIcon
      v-else-if="getCategoryGroup(category) === 'channel' && getSpecialChannelIcon(category)"
      :name="getSpecialChannelIcon(category)"
      variant="fill"
      :color="getSpecialChannelIconColor(category)"
      height="5"
      width="5"
    />

    <!-- Assignment Icons -->
    <MpIcon
      v-else-if="getCategoryGroup(category) === 'assignment' && getAssignmentIcon(category)"
      :name="getAssignmentIcon(category)"
      variant="fill"
      color="white"
      height="5"
      width="5"
    />

    <!-- Download/Upload Icons -->
    <MpIcon
      v-else-if="getCategoryGroup(category) === 'download-upload' && getDownloadUploadIcon(category)"
      :name="getDownloadUploadIcon(category)"
      variant="fill"
      color="white"
      height="5"
      width="5"
    />

    <!-- Update Icons -->
    <MpIcon
      v-else-if="getCategoryGroup(category) === 'update' && getUpdateIcon(category)"
      :name="getUpdateIcon(category)"
      variant="fill"
      color="white"
      height="5"
      width="5"
    />
  </MpFlex>
</template>
