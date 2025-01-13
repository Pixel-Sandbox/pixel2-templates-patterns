<template>
  <mp-flex direction="column" height="100vh">
    <mp-flex justify="space-between" mb="6">
      <mp-button-icon name="arrows-left" @click="handleBack" />
      <mp-button-icon name="close" @click="handleClose" />
    </mp-flex>
    <mp-text font-size="xl" font-weight="semibold"> Live Training </mp-text>
    <mp-flex direction="column" overflow="auto" pt="6" pb="12">
      <mp-flex
        v-for="item in videos"
        :key="item.title"
        py="3"
        px="2"
        rounded="md"
        :_hover="{
          background: '#EDF0F2',
        }"
      >
        <mp-flex
          width="88px"
          height="64px"
          flex="none"
          rounded="md"
          bg="gray.100"
        >
          <mp-image
            width="88px"
            height="64px"
            rounded="md"
            object-fit="cover"
            :src="item.thumbnail"
          />
        </mp-flex>
        <mp-flex direction="column" ml="4">
          <mp-text font-weight="semibold" line-height="20px" mb="1">{{
            item.title
          }}</mp-text>

          <mp-badge font-size="xs" variant="subtle" font-weight="semibold"
            >2 minggu sekali setiap Rabu</mp-badge
          >
          <mp-text mt="2" as="a" :href="item.href" target="_blank" is-link
            >Pilih jadwal</mp-text
          >
        </mp-flex>
      </mp-flex>
    </mp-flex>
  </mp-flex>
</template>

<script>
import { MpFlex, MpText, MpButtonIcon, MpBadge, MpImage } from "@mekari/pixel";

export default {
  name: "LiveTraining",
  components: {
    MpFlex,
    MpText,
    MpButtonIcon,
    MpBadge,
    MpImage,
  },
  props: {
    id: { type: [Number, String], default: 0 },
  },
  data() {
    return {
      videos: [
        {
          title: "Pelatihan Laporan Keuangan",
          thumbnail:
            "https://res.cloudinary.com/uxe-mekari/image/upload/v1695805265/jurnal/jurnal-food-baverage_kcetsx.png",
          badge: "2 minggu sekali setiap Rabu",
          href: "https://mekari.com",
        },
        {
          title: "Pelatihan industri manufaktur",
          thumbnail:
            "https://res.cloudinary.com/uxe-mekari/image/upload/v1695805265/jurnal/jurnal-manufacturing_tzgu4m.png",
          badge: "2 minggu sekali setiap Selasa",
          href: "https://mekari.com",
        },
        {
          title: "Pelatihan industri jasa",
          thumbnail:
            "https://res.cloudinary.com/uxe-mekari/image/upload/v1695805266/jurnal/jurnal-services_egz8kq.png",
          badge: "2 minggu sekali setiap Selasa",
          href: "https://mekari.com",
        },
        {
          title: "Pelatihan pembukuan (Bookkeeping)",
          thumbnail:
            "https://res.cloudinary.com/uxe-mekari/image/upload/v1695805267/jurnal/jurnal-bookkeeping_hr9i7j.png",
          badge: "2 minggu sekali setiap Selasa",
          href: "https://mekari.com",
        },
      ],
    };
  },
  methods: {
    handleClose() {
      this.$emit("close", this.id);
    },
    handleBack() {
      this.$emit("back", this.id);
    },
  },
};
</script>
