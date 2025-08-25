<script>
import {
  MpAutocomplete,
  MpBox,
  MpButton,
  MpCheckbox,
  MpFlex,
  MpHeading,
  MpInput,
  MpStack,
  MpText,
  MpTextarea,
} from '@mekari/pixel'
import NotificationItem from '../components/NotificationItem.vue'
import { CATEGORY_MAP } from '../components/utils.js'

export default {
  name: 'NotificationItemShowcase',
  components: {
    MpAutocomplete,
    MpBox,
    MpButton,
    MpCheckbox,
    MpFlex,
    MpHeading,
    MpInput,
    MpStack,
    MpText,
    MpTextarea,
    NotificationItem,
  },
  data() {
    return {
      formState: {
        category: 'avatar',
        name: 'John Doe',
        title: 'New message received',
        message:
          'You have received a new message from John Doe. Click to view the conversation.',
        timestamp: '2 minutes ago',
        isRead: false,
      },
      categoryOptions: Object.values(CATEGORY_MAP).map(category => ({
        value: category,
        label: category
          .replace(/-/g, ' ')
          .replace(/\b\w/g, l => l.toUpperCase()),
      })),
    }
  },
  methods: {
    handleNotificationClick(notification) {
      console.log('Notification clicked:', notification)
    },
    handleMarkAsRead(notification) {
      console.log('Mark as read:', notification)
      this.formState.isRead = true
    },
    resetForm() {
      this.formState = {
        category: 'avatar',
        name: 'John Doe',
        title: 'New message received',
        message:
          'You have received a new message from John Doe. Click to view the conversation.',
        timestamp: '2 minutes ago',
        isRead: false,
      }
    },
    updateNameVisibility(newCategory) {
      if (newCategory && newCategory !== 'avatar') {
        this.formState.name = ''
      }
      else if (newCategory === 'avatar' && !this.formState.name) {
        this.formState.name = 'John Doe'
      }
    },
  },
}
</script>

<template>
  <MpBox
    bg="white"
    rounded="md"
    shadow="lg"
    border-width="1px"
    border-color="gray.400"
    width="500px"
    p="6"
  >
    <MpHeading size="xl" mb="6">
      NotificationItem Showcase
    </MpHeading>

    <MpFlex direction="column" gap="8">
      <!-- Preview Section -->
      <MpBox width="100%">
        <MpHeading size="lg" mb="4">
          Preview
        </MpHeading>

        <MpBox
          border="1px dashed"
          border-color="gray.100"
          rounded="lg"
          p="0.5"
        >
          <NotificationItem
            :category="formState.category"
            :name="formState.name"
            :title="formState.title"
            :message="formState.message"
            :timestamp="formState.timestamp"
            :is-read="formState.isRead"
            @click="handleNotificationClick"
            @mark-as-read="handleMarkAsRead"
          />
        </MpBox>
      </MpBox>

      <!-- Controls Section -->
      <MpBox width="100%">
        <MpHeading size="lg" mb="4">
          Controls
        </MpHeading>

        <MpStack spacing="4">
          <!-- Category Select -->
          <MpStack spacing="2">
            <MpText font-size="sm" font-weight="medium" color="gray.700">
              Category
            </MpText>
            <MpAutocomplete
              v-model="formState.category"
              :data="categoryOptions"
              :content-style="{ width: 'full' }"
              @input="updateNameVisibility"
            />
          </MpStack>

          <!-- Name Input (only for avatar category) -->
          <MpStack v-if="formState.category === 'avatar'" spacing="2">
            <MpText font-size="sm" font-weight="medium" color="gray.700">
              Name
            </MpText>
            <MpInput v-model="formState.name" placeholder="Enter user name" />
          </MpStack>

          <!-- Title Input -->
          <MpStack spacing="2">
            <MpText font-size="sm" font-weight="medium" color="gray.700">
              Title
            </MpText>
            <MpInput
              v-model="formState.title"
              placeholder="Enter notification title"
            />
          </MpStack>

          <!-- Message Textarea -->
          <MpStack spacing="2">
            <MpText font-size="sm" font-weight="medium" color="gray.700">
              Message
            </MpText>
            <MpTextarea
              v-model="formState.message"
              placeholder="Enter notification message"
              rows="3"
            />
          </MpStack>

          <!-- Timestamp Input -->
          <MpStack spacing="2">
            <MpText font-size="sm" font-weight="medium" color="gray.700">
              Timestamp
            </MpText>
            <MpInput
              v-model="formState.timestamp"
              placeholder="Enter timestamp (e.g., '2 minutes ago')"
            />
          </MpStack>

          <!-- Read Status Checkbox -->
          <MpStack spacing="2">
            <MpCheckbox
              :is-checked="formState.isRead"
              @change="formState.isRead = !formState.isRead"
            >
              Mark as read
            </MpCheckbox>
          </MpStack>

          <!-- Reset Button -->
          <MpButton variant="outline" @click="resetForm">
            Reset to Default
          </MpButton>
        </MpStack>
      </MpBox>
    </MpFlex>
  </MpBox>
</template>
