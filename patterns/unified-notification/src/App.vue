<script>
import {
  MpAutocomplete,
  MpBadge,
  MpBox,
  MpButton,
  MpFlex,
  MpHeading,
  MpIcon,
  MpSkeleton,
  MpTab,
  MpTabList,
  MpTabs,
  MpText,
  MpToggle,
} from '@mekari/pixel'

import NotificationItem from './components/NotificationItem.vue'
import { groupNotificationsByDate } from './components/utils.js'

import NotificationIconsShowcase from './showcase/NotificationIconsShowcase.vue'
import NotificationItemShowcase from './showcase/NotificationItemShowcase.vue'

export default {
  name: 'UnifiedNotifications',
  components: {
    MpAutocomplete,
    MpBadge,
    MpBox,
    MpButton,
    MpFlex,
    MpHeading,
    MpIcon,
    MpSkeleton,
    MpTab,
    MpTabList,
    MpTabs,
    MpText,
    MpToggle,
    NotificationItem,
    NotificationIconsShowcase,
    NotificationItemShowcase,
  },
  data() {
    return {
      tabIndex: 0,
      isScrolled: false,
      isLoading: false,
      generalFilter: 'All notifications',
      showUnreadOnly: false,

      // Static filter data (UI only)
      generalFilterData: [
        'All notifications',
        'Reminder',
        'Mention',
        'Assignment',
        'Update',
        'Download & upload',
      ],
      inboxFilterData: [
        'All inbox notifications',
        'Incoming chats',
        'Chat assignments',
        'Resolved chats',
        'Blocked contacts',
      ],
      approvalFilterData: [
        'All request',
        'Deals',
        'Expenses',
      ],

      tabs: [
        { name: 'General', unreadCount: 8 },
        { name: 'Inbox', unreadCount: 12 },
        { name: 'Approval', unreadCount: 3 },
      ],

      generalTabNotifications: [
        {
          category: 'reminder',
          title: 'Deals due soon on 20 June 2025, 11:11',
          message: '24 June 2025 - Blanco Coffee Blok M',
          timestamp: 'Just now',
          isRead: false,
        },
        {
          category: 'avatar',
          name: 'Christin Purnama Sari',
          title: 'Christin Purnama Sari mentioned you in Deals',
          message: '1234ABCD - Espresso machine bulk sales',
          timestamp: '2 minutes ago',
          isRead: false,
        },
        {
          category: 'assignment-task',
          name: 'Rizal Chandra',
          title: 'Rizal Chandra assigned you a task',
          message: 'Coffee machine warranty void procedure guideline',
          timestamp: '5 minutes ago',
          isRead: false,
        },
        {
          category: 'reminder',
          title: 'SLA will breach in 1 minute',
          message: 'First respond to Anastasia Utami',
          timestamp: '10 minutes ago',
          isRead: false,
        },
        {
          category: 'download-upload-general',
          title: 'File ready to download',
          message: 'Deals export - 30 Jul 2025',
          timestamp: '15 minutes ago',
          isRead: false,
        },
        {
          category: 'update-general',
          title: 'System update completed',
          message: 'Platform has been updated to version 2.5.1 with new features',
          timestamp: '20 minutes ago',
          isRead: false,
        },
        {
          category: 'avatar',
          name: 'Ahmad Rahman',
          title: 'Ahmad Rahman mentioned you in Deals',
          message: '5678WXYZ - Premium coffee subscription service',
          timestamp: '25 minutes ago',
          isRead: true,
        },
        {
          category: 'assignment-task',
          name: 'Maya Putri',
          title: 'Maya Putri assigned you a task',
          message: 'Prepare quarterly sales report for board meeting',
          timestamp: '30 minutes ago',
          isRead: false,
        },
        {
          category: 'reminder',
          title: 'Meeting reminder',
          message: 'Daily standup meeting starts in 15 minutes',
          timestamp: '1 hour ago',
          isRead: true,
        },
        {
          category: 'download-upload-general',
          title: 'File ready to download',
          message: 'Company export at 30 Jul 2025, 12:23',
          timestamp: '1 hour ago',
          isRead: false,
        },
        {
          category: 'avatar',
          name: 'Jessie Tan',
          title: 'Jessie Tan mentioned you in Tasks',
          message: 'Follow up visit',
          timestamp: '2 hours ago',
          isRead: true,
        },
        {
          category: 'reminder',
          title: 'Task deadline approaching',
          message: 'Complete customer feedback analysis by 5 PM today',
          timestamp: '3 hours ago',
          isRead: true,
        },
        {
          category: 'update-general',
          title: 'Security patch applied',
          message: 'Important security updates have been installed automatically',
          timestamp: '4 hours ago',
          isRead: true,
        },
        {
          category: 'assignment-task',
          name: 'Sari Dewi',
          title: 'Sari Dewi assigned you a checklist in a Tasks',
          message: 'Customer database update verification steps',
          timestamp: '20 Jul 2025 at 16:15',
          isRead: false,
        },
        {
          category: 'avatar',
          name: 'Bambang Sutrisno',
          title: 'Bambang Sutrisno mentioned you in Companies',
          message: 'ABC Corporation',
          timestamp: '20 Jul 2025 at 14:45',
          isRead: true,
        },
      ],

      inboxTabNotifications: [
        {
          category: 'channel-whatsapp',
          title: 'Indra Pangestu sent a message',
          message: '"Kak kapan bisa cair refundnya ya?"',
          timestamp: 'Just now',
          isRead: false,
        },
        {
          category: 'channel-whatsapp',
          title: 'Indra Pangestu sent 10 messages',
          message:
            '"Kak kapan bisa cair refundnya ya? Saya udah nunggu lama banget barangnya juga ga bisa dipake tapi ga ada respo..."',
          timestamp: '2 minutes ago',
          isRead: false,
        },
        {
          category: 'channel-instagram',
          title: 'Siti Aisyah Putri commented',
          message: '"Berapa lama pengiriman untuk wilayah Jakarta?"',
          timestamp: '5 minutes ago',
          isRead: false,
        },
        {
          category: 'channel-whatsapp',
          title: 'Maya Sari sent a message',
          message: '"Terima kasih atas pelayanannya yang luar biasa!"',
          timestamp: '10 minutes ago',
          isRead: true,
        },
        {
          category: 'channel-shopee',
          title: 'Maya Sari Putri sent a message',
          message: '"Berapa lama pengiriman untuk wilayah Jakarta?"',
          timestamp: '15 minutes ago',
          isRead: false,
        },
        {
          category: 'channel-tokopedia',
          title: 'Andi Setiawan sent a message',
          message: '"Apakah ada diskon untuk pembelian dalam jumlah besar?"',
          timestamp: '20 minutes ago',
          isRead: true,
        },
        {
          category: 'channel-whatsapp',
          title: 'Siti Rahayu sent a message',
          message: '"Apakah produk masih tersedia untuk pengiriman hari ini?"',
          timestamp: '25 minutes ago',
          isRead: false,
        },
        {
          category: 'channel-google-business',
          title: 'Rudi Setiawan left a review',
          message:
            '"A very nice and vintage place to grab the most delicious coffee in Jogja."',
          timestamp: '30 minutes ago',
          isRead: false,
        },
        {
          category: 'channel-instagram',
          title: '@fashionista_id sent a direct message',
          message: '"Hi, apakah produk ini masih tersedia?"',
          timestamp: '1 hour ago',
          isRead: true,
        },
        {
          category: 'channel-whatsapp',
          title: 'Indra Pangestu sent a message',
          message: 'Image',
          timestamp: '1 hour ago',
          isRead: false,
        },
        {
          category: 'channel-email',
          title: 'Tri Wulandari sent an email',
          message:
            '"Variant yang saya beli kemarin ternyata beda ukuran dengan dripper yang saya punya, masih bisa retur ngga y..."',
          timestamp: '2 hours ago',
          isRead: false,
        },
        {
          category: 'channel-shopee',
          title: 'Rizki Pratama sent a message',
          message: '"Masih ada stok untuk produk ini tidak?"',
          timestamp: '3 hours ago',
          isRead: false,
        },
        {
          category: 'channel-google-business',
          title: 'Sari Dewi left a review',
          message:
            '"Excellent customer service! Highly recommended. 5 stars ⭐⭐⭐⭐⭐"',
          timestamp: '4 hours ago',
          isRead: true,
        },
        {
          category: 'channel-whatsapp',
          name: 'Eka Setiawan',
          title: 'Eka Setiawan resolved a conversation',
          message: 'Indra Pangestu',
          timestamp: '5 hours ago',
          isRead: false,
        },
        {
          category: 'channel-instagram',
          title: '@coffeelover22 commented',
          message: '"Looks amazing! Where can I order this?"',
          timestamp: '20 Jul 2025 at 14:20',
          isRead: false,
        },
        {
          category: 'channel-email',
          title: 'Lisa Chen sent an email',
          message:
            '"Hello, I need help with my recent order and would like to know the status"',
          timestamp: '20 Jul 2025 at 22:15',
          isRead: true,
        },
        {
          category: 'channel-blocked-contact',
          name: 'Jessie Tan',
          title: 'Jessie Tan blocked a contact',
          message: 'Sari Ayu',
          timestamp: '19 Jul 2025 at 16:30',
          isRead: false,
        },
      ],

      approvalTabNotifications: [
        {
          category: 'avatar',
          name: 'Ali Imran',
          title: 'Ali Imran request to add a deals on Sales Pipeline',
          message: '7890UIIAI - Refund broken coffee machine',
          timestamp: 'Just now',
          isRead: false,
        },
        {
          category: 'avatar',
          name: 'Galih Prakoso',
          title: 'Galih Prakoso request to add a expense',
          message: 'Business trip to Tokyo 12 Agustus 2025',
          timestamp: '2 minutes ago',
          isRead: false,
        },
        {
          category: 'avatar',
          name: 'Maya Putri',
          title: 'Maya Putri request to add a expense',
          message: 'Conference registration fee - Tech Summit 2025',
          timestamp: '5 minutes ago',
          isRead: false,
        },
        {
          category: 'avatar',
          name: 'Rizal Chandra',
          title: 'Rizal Chandra approved your request to create a deals',
          message: '4567UUIAI - Origami paper filter 100 pcs',
          timestamp: '10 minutes ago',
          isRead: true,
        },
        {
          category: 'avatar',
          name: 'Rizal Chandra',
          title: 'Rizal Chandra request to edit expense amount',
          message: 'Business trip to Tokyo 12 Agustus 2025',
          timestamp: '15 minutes ago',
          isRead: false,
          previousCondition: 'IDR 20.000.000',
          currentCondition: 'IDR 32.000.000',
        },
        {
          category: 'avatar',
          name: 'Sari Dewi',
          title: 'Sari Dewi request to add a deals on Lead Qualification',
          message: '1234ABCD - Espresso machine bulk sales',
          timestamp: '20 minutes ago',
          isRead: true,
        },
        {
          category: 'avatar',
          name: 'Jessie Tan',
          title: 'Jessie Tan request to move a deal',
          message: '4567UUIAI - Origami paper filter 100 pcs',
          timestamp: '25 minutes ago',
          isRead: false,
        },
        {
          category: 'avatar',
          name: 'Rizal Chandra',
          title: 'Rizal Chandra approved your request to add an expense',
          message: 'Business trip to Tokyo 12 Agustus 2025',
          timestamp: '30 minutes ago',
          isRead: true,
        },
        {
          category: 'avatar',
          name: 'Linda Sari',
          title: 'Linda Sari rejected your request to add an expense',
          message: 'Team building activity at Sentul',
          timestamp: '1 hour ago',
          isRead: false,
        },
        {
          category: 'avatar',
          name: 'Jessie Tan',
          title: 'Jessie Tan approved your request to move a deals',
          message: '4567UUIAI - Origami paper filter 100 pcs',
          timestamp: '2 hours ago',
          isRead: true,
          previousCondition: 'Lead Qualification',
          currentCondition: 'Proposal Sent',
        },
        {
          category: 'avatar',
          name: 'Ahmad Rahman',
          title: 'Ahmad Rahman request to move a deal',
          message: '9876XYZI - Premium coffee beans subscription',
          timestamp: '3 hours ago',
          isRead: true,
        },
        {
          category: 'avatar',
          name: 'Rizal Chandra',
          title: 'Rizal Chandra rejected request to edit expense category',
          message: 'Business trip to Tokyo 12 Agustus 2025',
          timestamp: '4 hours ago',
          isRead: false,
          previousCondition: 'Entertainment',
          currentCondition: 'Hotel/Lodging/Accommodation',
        },
      ],
    }
  },
  computed: {
    currentFilterData() {
      switch (this.tabIndex) {
        case 0:
          return this.generalFilterData
        case 1:
          return this.inboxFilterData
        case 2:
          return this.approvalFilterData
        default:
          return this.generalFilterData
      }
    },
  },
  mounted() {
    this.isLoading = true
    setTimeout(() => {
      this.isLoading = false
    }, 1000)
  },
  methods: {
    groupNotificationsByDate, // passthrough to use directly in template

    getCurrentTabNotifications() {
      switch (this.tabIndex) {
        case 0:
          return this.generalTabNotifications
        case 1:
          return this.inboxTabNotifications
        case 2:
          return this.approvalTabNotifications
        default:
          return this.generalTabNotifications
      }
    },

    handleChangTab(index) {
      this.tabIndex = index
      // Update filter display (UI only)
      switch (index) {
        case 0:
          this.generalFilter = 'All notifications'
          break
        case 1:
          this.generalFilter = 'All inbox notifications'
          break
        case 2:
          this.generalFilter = 'All request'
          break
      }
    },

    // UI-only handlers
    handleMarkAllAsRead() {
      // keep console for parity with original behavior

      console.log('Mark all as read clicked (UI only)')
    },
    handleNotificationClick(notification) {
      console.log('Notification clicked (UI only):', notification)
    },
    handleMarkAsRead(notification) {
      console.log('Mark as read (UI only):', notification)
    },

    // Scroll detection
    handleScroll(e) {
      this.isScrolled = e.target.scrollTop > 0
    },
  },
}
</script>

<template>
  <MpFlex
    flex-direction="column"
    bg="background"
    min-h="100vh"
    p="4"
    mx="auto"
    gap="4"
  >
    <MpBox position="fixed" top="4" right="4">
      <MpBox
        bg="white"
        position="relative"
        rounded="md"
        shadow="lg"
        border-width="1px"
        border-color="gray.400"
        width="480px"
        max-h="95vh"
        overflow-y="auto"
        @scroll="handleScroll"
      >
        <MpFlex align-items="center" justify-content="space-between" px="4" pt="4" pb="2">
          <MpHeading font-size="lg">
            Notifications
          </MpHeading>

          <MpToggle v-model="showUnreadOnly">
            Show unread only
          </MpToggle>
        </MpFlex>

        <MpBox>
          <MpBox bg="white" position="sticky" top="0" z-index="50" :shadow="isScrolled ? 'sm' : ''">
            <MpTabs
              id="unified-notifications-tabs"
              :index="tabIndex"
              width="full"
              is-manual
              @change.self="handleChangTab"
            >
              <MpTabList mb="0" bg="white" z-index="1" px="2">
                <MpTab
                  v-for="(tab, index) in tabs"
                  :key="index"
                  px="2"
                >
                  {{ tab.name }}
                  <MpBadge
                    v-if="tab.unreadCount > 0"
                    size="md"
                    ml="2"
                    line-height="normal"
                    variant-color="red"
                    display="flex"
                    align-items="center"
                    justify-content="center"
                    min-w="5"
                  >
                    {{ tab.unreadCount }}
                  </MpBadge>
                </MpTab>
              </MpTabList>
            </MpTabs>

            <!-- Filter Area (UI Only) -->
            <MpFlex
              justify-content="space-between"
              p="3"
              bg="white"
              z-index="1"
              align-items="center"
            >
              <MpBox width="240px">
                <MpAutocomplete
                  v-model="generalFilter"
                  use-teleport
                  :data="currentFilterData"
                  :content-style="{ width: 'full', minWidth: 'max-content', maxWidth: '80vw', zIndex: 50000 }"
                />
              </MpBox>
              <MpButton
                variant="link"
                @click="handleMarkAllAsRead"
              >
                Mark all as read
              </MpButton>
            </MpFlex>
            <!-- End of Filter Area -->
          </MpBox>

          <MpFlex v-if="isLoading" flex-direction="column" gap="4" p="4">
            <MpText
              mb="1"
              font-size="xs"
              color="gray.600"
              text-transform="uppercase"
              letter-spacing="0.3em"
              font-weight="semibold"
            >
              TODAY
            </MpText>

            <MpFlex flex-direction="column" gap="6">
              <MpFlex v-for="index in 3" :key="index" gap="3" w="100%">
                <MpSkeleton h="9" w="9" border-radius="100%" flex="none" />

                <MpFlex flex-direction="column" gap="1" width="100%">
                  <MpSkeleton h="3" w="171px" border-radius="full" />
                  <MpSkeleton h="4" w="312px" border-radius="full" />
                </MpFlex>
              </MpFlex>
            </MpFlex>
          </MpFlex>

          <MpBox v-else>
            <template v-if="!showUnreadOnly && generalFilter !== 'Update'">
              <MpFlex px="2" direction="column">
                <!-- Group notifications by date -->
                <template v-for="(notifications, dateGroup) in groupNotificationsByDate(getCurrentTabNotifications())">
                  <template v-if="notifications.length > 0">
                    <MpText
                      :key="`header-${dateGroup}`"
                      mb="1"
                      mt="2"
                      font-size="xs"
                      color="gray.600"
                      text-transform="uppercase"
                      letter-spacing="0.3em"
                      font-weight="semibold"
                    >
                      {{ dateGroup === 'today' ? 'TODAY' : 'OLDER' }}
                    </MpText>

                    <NotificationItem
                      v-for="(notification, index) in notifications"
                      :key="`${dateGroup}-${index}`"
                      :category="notification.category"
                      :name="notification.name"
                      :title="notification.title"
                      :message="notification.message"
                      :timestamp="notification.timestamp"
                      :is-read="notification.isRead"
                      :previous-condition="notification.previousCondition"
                      :current-condition="notification.currentCondition"
                      :show-unread-indicator="!notification.isRead"
                      @click="handleNotificationClick"
                      @mark-as-read="handleMarkAsRead"
                    />
                  </template>
                </template>
              </MpFlex>
              <MpFlex
                direction="column"
                justify-content="center"
                align-items="center"
                py="5"
              >
                <MpIcon name="inbox" variant="fill" color="blue.400" height="5" width="5" />
                <MpText mt="2" font-size="sm" text-align="center">
                  You have viewed all your <strong>notifications</strong> from the past 90 days.
                </MpText>
              </MpFlex>
            </template>

            <MpFlex
              v-if="generalFilter === 'Update' && !showUnreadOnly"
              direction="column"
              justify-content="center"
              align-items="center"
              mb="6"
            >
              <img
                v-pixel="{
                  height: '240px',
                  width: 'auto',
                }"
                src="/illustrations/all-read.svg"
                alt=""
              >

              <MpHeading font-size="lg" mb="1">
                You have viewed all your notifications
              </MpHeading>

              <MpText color="gray.600">
                All your notifications are from the past 90 days.
              </MpText>
            </MpFlex>

            <MpFlex
              v-if="showUnreadOnly"
              direction="column"
              justify-content="center"
              align-items="center"
              mb="6"
            >
              <img
                v-pixel="{
                  height: '240px',
                  width: 'auto',
                }" src="https://cdn.mekari.design/illustration/blank-slate/NoInbox_PB_M_01.png" alt=""
              >

              <MpHeading font-size="lg" mb="1">
                No notification yet
              </MpHeading>

              <MpText color="gray.600">
                Your notification list will appear here.
              </MpText>
            </MpFlex>
          </MpBox>
        </MpBox>
      </MpBox>
    </MpBox>

    <!-- Notification Item Showcase -->
    <NotificationItemShowcase />
    <!-- Notification Icons Showcase -->
    <NotificationIconsShowcase />
  </MpFlex>
</template>
