<script>
import { MpBox, MpFlex, MpIcon, MpText } from '@mekari/pixel'
import NotificationIcon from './NotificationIcon.vue'
import { CATEGORY_MAP } from './utils.js'

export default {
  name: 'NotificationItem',
  components: {
    MpBox,
    MpFlex,
    MpIcon,
    MpText,
    NotificationIcon,
  },
  props: {
    /**
     * The notification category (matches NotificationIcon categories)
     * Must be one of: 'avatar', 'reminder', 'channel-*', 'assignment-*', 'download-upload-*', 'update-*'
     */
    category: {
      type: String,
      required: true,
      validator: (value) => {
        return Object.values(CATEGORY_MAP).includes(value)
      },
    },
    /** User/source name (for avatar categories) */
    name: {
      type: String,
      default: '',
    },
    /** Main notification title */
    title: {
      type: String,
      required: true,
    },
    /** Notification content/body */
    message: {
      type: String,
      required: true,
    },
    /** When the notification occurred */
    timestamp: {
      type: String,
      required: true,
    },
    /** Previous value */
    previousCondition: {
      type: String,
      default: null,
    },
    /** Current value */
    currentCondition: {
      type: String,
      default: null,
    },
    /** Boolean indicating read status */
    isRead: {
      type: Boolean,
      required: true,
    },
    /** Whether to show the unread indicator */
    showUnreadIndicator: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    handleClick() {
      this.$emit('click', this.$props)
      if (!this.isRead) {
        this.$emit('markAsRead', this.$props)
      }
    },
    markAsRead() {
      this.$emit('markAsRead', this.$props)
    },
  },
}
</script>

<template>
  <MpFlex
    position="relative"
    py="3"
    px="2"
    gap="16px"
    border-radius="lg"
    :_hover="{
      backgroundColor: '#F7F8F9',
      cursor: 'pointer',
    }"
    @click="handleClick"
  >
    <!-- Notification Icon -->
    <MpBox flex="none">
      <NotificationIcon :category="category" :name="name" />
    </MpBox>

    <!-- Notification Content -->
    <MpFlex direction="column" width="100%">
      <MpText line-height="1sm" font-weight="semibold" mb="0.5" pr="4">
        {{ title }}
      </MpText>

      <MpText size="sm" mb="0.5" is-truncated line-clamp="2">
        {{ message }}
      </MpText>

      <MpText font-size="sm" color="gray.600">
        {{ timestamp }}
      </MpText>

      <MpFlex
        v-if="previousCondition && currentCondition"
        mt="2"
        py="1"
        px="2"
        border-radius="lg"
        border-width="1px"
        border-color="gray.50"
      >
        <MpText color="gray.600" font-weight="semibold">
          {{ previousCondition }}
        </MpText>

        <MpText color="gray.600" mx="1">
          to
        </MpText>

        <MpText color="gray.600" font-weight="semibold">
          {{ currentCondition }}
        </MpText>
      </MpFlex>

      <slot />

      <!-- Unread indicator -->
      <MpBox
        v-if="showUnreadIndicator && !isRead"
        position="absolute"
        top="1"
        right="2"
        @click.stop="markAsRead"
      >
        <MpIcon
          v-mp-tooltip="'Mark as read'"
          name="indicator-circle"
          color="red.400"
        />
      </MpBox>
    </MpFlex>
  </MpFlex>
</template>
