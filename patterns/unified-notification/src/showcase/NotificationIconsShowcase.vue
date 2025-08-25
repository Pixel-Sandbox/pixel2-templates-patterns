<script>
import {
  MpBox,
  MpFlex,
  MpHeading,
  MpText,
} from '@mekari/pixel'
import NotificationIcon from '../components/NotificationIcon.vue'

export default {
  name: 'NotificationIconsShowcase',
  components: {
    MpBox,
    MpFlex,
    MpHeading,
    MpText,
    NotificationIcon,
  },
}
</script>

<template>
  <!-- Notification Icons Showcase -->
  <MpBox
    bg="white"
    rounded="md"
    shadow="lg"
    border-width="1px"
    border-color="gray.400"
    width="500px"
    p="6"
  >
    <MpHeading font-size="xl" mb="6" text-align="center">
      Notification Icons Showcase
    </MpHeading>

    <!-- Avatar Category -->
    <MpBox mb="8">
      <MpHeading font-size="lg" mb="4" color="gray.700">
        Avatar Icons (A-Z)
      </MpHeading>
      <MpFlex flex-wrap="wrap" gap="3" align-items="center">
        <MpFlex
          v-for="letter in 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')"
          :key="letter"
          direction="column"
          align-items="center"
          gap="1"
        >
          <NotificationIcon category="avatar" :name="letter" />
          <MpText font-size="xs" color="gray.600">
            {{ letter }}
          </MpText>
        </MpFlex>
      </MpFlex>
    </MpBox>

    <!-- Reminder Category -->
    <MpBox mb="8">
      <MpHeading font-size="lg" mb="4" color="gray.700">
        Reminder Icons
      </MpHeading>
      <MpFlex gap="3" align-items="center">
        <MpFlex direction="column" align-items="center" gap="1">
          <NotificationIcon category="reminder" />
          <MpText font-size="xs" color="gray.600">
            reminder
          </MpText>
        </MpFlex>
      </MpFlex>
    </MpBox>

    <!-- Channel Category -->
    <MpBox mb="8">
      <MpHeading font-size="lg" mb="4" color="gray.700">
        Channel Icons
      </MpHeading>
      <MpFlex flex-wrap="wrap" gap="3" align-items="center">
        <MpFlex direction="column" align-items="center" gap="1">
          <NotificationIcon category="channel-email" />
          <MpText font-size="xs" color="gray.600">
            email
          </MpText>
        </MpFlex>
        <MpFlex direction="column" align-items="center" gap="1">
          <NotificationIcon category="channel-facebook" />
          <MpText font-size="xs" color="gray.600">
            facebook
          </MpText>
        </MpFlex>
        <MpFlex direction="column" align-items="center" gap="1">
          <NotificationIcon category="channel-google-business" />
          <MpText font-size="xs" color="gray.600">
            google business
          </MpText>
        </MpFlex>
        <MpFlex direction="column" align-items="center" gap="1">
          <NotificationIcon category="channel-instagram" />
          <MpText font-size="xs" color="gray.600">
            instagram
          </MpText>
        </MpFlex>
        <MpFlex direction="column" align-items="center" gap="1">
          <NotificationIcon category="channel-line" />
          <MpText font-size="xs" color="gray.600">
            line
          </MpText>
        </MpFlex>
        <MpFlex direction="column" align-items="center" gap="1">
          <NotificationIcon category="channel-shopee" />
          <MpText font-size="xs" color="gray.600">
            shopee
          </MpText>
        </MpFlex>
        <MpFlex direction="column" align-items="center" gap="1">
          <NotificationIcon category="channel-telegram" />
          <MpText font-size="xs" color="gray.600">
            telegram
          </MpText>
        </MpFlex>
        <MpFlex direction="column" align-items="center" gap="1">
          <NotificationIcon category="channel-tokopedia" />
          <MpText font-size="xs" color="gray.600">
            tokopedia
          </MpText>
        </MpFlex>
        <MpFlex direction="column" align-items="center" gap="1">
          <NotificationIcon category="channel-whatsapp" />
          <MpText font-size="xs" color="gray.600">
            whatsapp
          </MpText>
        </MpFlex>
        <MpFlex direction="column" align-items="center" gap="1">
          <NotificationIcon category="channel-x" />
          <MpText font-size="xs" color="gray.600">
            x (twitter)
          </MpText>
        </MpFlex>
        <MpFlex direction="column" align-items="center" gap="1">
          <NotificationIcon category="channel-web-chat" />
          <MpText font-size="xs" color="gray.600">
            web chat
          </MpText>
        </MpFlex>
        <MpFlex direction="column" align-items="center" gap="1">
          <NotificationIcon category="channel-mobile-chat" />
          <MpText font-size="xs" color="gray.600">
            mobile chat
          </MpText>
        </MpFlex>
        <MpFlex direction="column" align-items="center" gap="1">
          <NotificationIcon category="channel-whatsapp-group" />
          <MpText font-size="xs" color="gray.600">
            whatsapp group
          </MpText>
        </MpFlex>
        <MpFlex direction="column" align-items="center" gap="1">
          <NotificationIcon category="channel-blocked-contact" />
          <MpText font-size="xs" color="gray.600">
            blocked contact
          </MpText>
        </MpFlex>
      </MpFlex>
    </MpBox>

    <!-- Assignment Category -->
    <MpBox mb="8">
      <MpHeading font-size="lg" mb="4" color="gray.700">
        Assignment Icons
      </MpHeading>
      <MpFlex flex-wrap="wrap" gap="3" align-items="center">
        <MpFlex direction="column" align-items="center" gap="1">
          <NotificationIcon category="assignment-inbox" />
          <MpText font-size="xs" color="gray.600">
            inbox
          </MpText>
        </MpFlex>
        <MpFlex direction="column" align-items="center" gap="1">
          <NotificationIcon category="assignment-ticket" />
          <MpText font-size="xs" color="gray.600">
            ticket
          </MpText>
        </MpFlex>
        <MpFlex direction="column" align-items="center" gap="1">
          <NotificationIcon category="assignment-deals" />
          <MpText font-size="xs" color="gray.600">
            deals
          </MpText>
        </MpFlex>
        <MpFlex direction="column" align-items="center" gap="1">
          <NotificationIcon category="assignment-task" />
          <MpText font-size="xs" color="gray.600">
            task
          </MpText>
        </MpFlex>
        <MpFlex direction="column" align-items="center" gap="1">
          <NotificationIcon category="assignment-customer" />
          <MpText font-size="xs" color="gray.600">
            customer
          </MpText>
        </MpFlex>
      </MpFlex>
    </MpBox>

    <!-- Download/Upload Category -->
    <MpBox mb="8">
      <MpHeading font-size="lg" mb="4" color="gray.700">
        Download/Upload Icons
      </MpHeading>
      <MpFlex flex-wrap="wrap" gap="3" align-items="center">
        <MpFlex direction="column" align-items="center" gap="1">
          <NotificationIcon category="download-upload-general" />
          <MpText font-size="xs" color="gray.600">
            general
          </MpText>
        </MpFlex>
        <MpFlex direction="column" align-items="center" gap="1">
          <NotificationIcon category="download-upload-deals" />
          <MpText font-size="xs" color="gray.600">
            deals
          </MpText>
        </MpFlex>
        <MpFlex direction="column" align-items="center" gap="1">
          <NotificationIcon category="download-upload-ticket" />
          <MpText font-size="xs" color="gray.600">
            ticket
          </MpText>
        </MpFlex>
        <MpFlex direction="column" align-items="center" gap="1">
          <NotificationIcon category="download-upload-report" />
          <MpText font-size="xs" color="gray.600">
            report
          </MpText>
        </MpFlex>
        <MpFlex direction="column" align-items="center" gap="1">
          <NotificationIcon category="download-upload-company" />
          <MpText font-size="xs" color="gray.600">
            company
          </MpText>
        </MpFlex>
        <MpFlex direction="column" align-items="center" gap="1">
          <NotificationIcon category="download-upload-task" />
          <MpText font-size="xs" color="gray.600">
            task
          </MpText>
        </MpFlex>
        <MpFlex direction="column" align-items="center" gap="1">
          <NotificationIcon category="download-upload-product" />
          <MpText font-size="xs" color="gray.600">
            product
          </MpText>
        </MpFlex>
        <MpFlex direction="column" align-items="center" gap="1">
          <NotificationIcon category="download-upload-expense" />
          <MpText font-size="xs" color="gray.600">
            expense
          </MpText>
        </MpFlex>
      </MpFlex>
    </MpBox>

    <!-- Update Category -->
    <MpBox mb="4">
      <MpHeading font-size="lg" mb="4" color="gray.700">
        Update Icons
      </MpHeading>
      <MpFlex flex-wrap="wrap" gap="3" align-items="center">
        <MpFlex direction="column" align-items="center" gap="1">
          <NotificationIcon category="update-general" />
          <MpText font-size="xs" color="gray.600">
            general
          </MpText>
        </MpFlex>
        <MpFlex direction="column" align-items="center" gap="1">
          <NotificationIcon category="update-deals" />
          <MpText font-size="xs" color="gray.600">
            deals
          </MpText>
        </MpFlex>
        <MpFlex direction="column" align-items="center" gap="1">
          <NotificationIcon category="update-ticket" />
          <MpText font-size="xs" color="gray.600">
            ticket
          </MpText>
        </MpFlex>
        <MpFlex direction="column" align-items="center" gap="1">
          <NotificationIcon category="update-company" />
          <MpText font-size="xs" color="gray.600">
            company
          </MpText>
        </MpFlex>
        <MpFlex direction="column" align-items="center" gap="1">
          <NotificationIcon category="update-task" />
          <MpText font-size="xs" color="gray.600">
            task
          </MpText>
        </MpFlex>
      </MpFlex>
    </MpBox>
  </MpBox>
</template>
