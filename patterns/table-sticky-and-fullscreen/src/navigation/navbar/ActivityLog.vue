<template>
  <mp-drawer
    :is-open="isActivityLogOpen"
    :on-close="onActivityLogToggle"
    :return-focus-on-close="false"
  >
    <mp-drawer-overlay :display="['none', 'block']" />
    <mp-drawer-content
      border="none"
      border-left="1px"
      border-left-color="gray.100"
      :max-width="['full', 'xs']"
      :margin-top="['51px', '0px']"
      :height="['calc(100vh - 51px)', '100vh']"
    >
      <mp-drawer-close-button :visibility="['hidden', 'visible']" />
      <mp-drawer-body
        max-height="calc(100vh)"
        overflow="hidden auto"
        :margin-top="[4, 8]"
      >
        <mp-heading font-size="lg" mb="4"> Riwayat aktivitas </mp-heading>
        <mp-timeline>
          <mp-timeline-item
            v-for="log in logs"
            :key="log.id"
            v-bind="{ ...log.icon }"
          >
            <mp-timeline-title>
              <mp-text font-size="md" line-height="md" font-weight="semibold">
                {{ log.title }}
              </mp-text>
            </mp-timeline-title>
            <mp-timeline-caption> {{ log.dateTime }} </mp-timeline-caption>

            <mp-timeline-content>
              <mp-text font-size="md" line-height="md" color="dark">
                {{ log.description }}
              </mp-text>
            </mp-timeline-content>
          </mp-timeline-item>
        </mp-timeline>
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
  MpDrawerCloseButton,
  MpText,
  MpHeading,
  MpTimeline,
  MpTimelineItem,
  MpTimelineTitle,
  MpTimelineCaption,
  MpTimelineContent,
} from "@mekari/pixel";

export default {
  name: "ActivityLog",
  props: {
    isActivityLogOpen: [Boolean],
    onActivityLogToggle: [Function],
  },
  components: {
    MpDrawer,
    MpDrawerOverlay,
    MpDrawerContent,
    MpDrawerBody,
    MpDrawerCloseButton,
    MpText,
    MpHeading,
    MpTimeline,
    MpTimelineItem,
    MpTimelineTitle,
    MpTimelineCaption,
    MpTimelineContent,
  },
  data() {
    return {
      logs: [
        {
          id: 1,
          title: "Bella Vierena",
          dateTime: "2 menit yang lalu",
          description: "",
          icon: {
            icon: "indicator-circle",
            iconColor: "blue.400",
          },
        },
        {
          id: 2,
          title: "Kelvin Denver membuat transaksi",
          dateTime: "3 jam yang lalu",
          description:
            "Purchase Invoice #PO/XII/2021/3157 telah untuk customer PT AIDA Indonesia senilai Rp10.000.000, jatuh tempo pada 21/20/2023",
          icon: {
            icon: "done",
            iconColor: "green.400",
          },
        },
        {
          id: 3,
          title: "Sistem mengubah transaksi",
          dateTime: "1 hari yang lalu",
          description: "Purchase Invoice #PO/XII/2021/3157 telah diubah",
          icon: {
            icon: "progress",
            iconColor: "orange.400",
          },
        },
        {
          id: 4,
          title: "Rizky Surur",
          dateTime: "2 menit yang lalu",
          description: "",
          icon: {
            icon: "indicator-circle",
            iconColor: "blue.400",
          },
        },
        {
          id: 5,
          title: "Dimas Raka Septiawan",
          dateTime: "4 hari yang lalu",
          description: "",
          icon: {
            icon: "indicator-circle",
            iconColor: "blue.400",
          },
        },
        {
          id: 6,
          title: "Ryan Restyawan",
          dateTime: "9 hari yang lalu",
          description: "",
          icon: {
            icon: "indicator-circle",
            iconColor: "blue.400",
          },
        },
        {
          id: 7,
          title: "Bregga Tedy baru saja masuk",
          dateTime: "15 hari yang lalu",
          description: "",
          icon: {
            icon: "indicator-circle",
            iconColor: "blue.400",
          },
        },
        {
          id: 8,
          title: "Kelvin Denver baru saja masuk",
          dateTime: "17 hari yang lalu",
          description: "",
          icon: {
            icon: "indicator-circle",
            iconColor: "blue.400",
          },
        },
        {
          id: 9,
          title: "Jaka Permadi membuat transaksi",
          dateTime: "17 hari yang lalu",
          description:
            "Purchase Invoice #PO/XII/2021/3157 telah untuk customer PT AIDA Indonesia senilai Rp10.000.000, jatuh tempo pada 21/20/2023",
          icon: {
            icon: "done",
            iconColor: "green.400",
          },
        },
        {
          id: 10,
          title: "Sistem mengubah transaksi",
          dateTime: "20 hari yang lalu",
          description: "Purchase Invoice #PO/XII/2021/3157 telah diubah",
          icon: {
            icon: "progress",
            iconColor: "orange.400",
          },
        },
      ],
    };
  },
};
</script>
