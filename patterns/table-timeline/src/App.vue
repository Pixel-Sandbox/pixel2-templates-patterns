<template>
  <mp-box p="4">
    <mp-flex justify-content="space-between" mb="4">
      <mp-flex w="200px">
        <mp-date-picker v-model="selectedDate" placeholder="Pilih tanggal" />
      </mp-flex>

      <mp-flex gap="4" align-items="center">
        <mp-text font-size="xl" font-weight="semibold">
          {{ selectedPeriod === "Hari" ? "Januari 2024" : "2024" }}
        </mp-text>

        <mp-flex align-items="center" gap="0">
          <mp-button-icon name="chevrons-left" />
          <mp-button-icon name="chevrons-right" />
        </mp-flex>

        <mp-button variant="outline"> Hari ini </mp-button>

        <mp-box width="120px">
          <mp-autocomplete
            v-model="selectedPeriod"
            :data="['Hari', 'Minggu', 'Bulan']"
            :content-style="{ width: 'full' }"
          />
        </mp-box>
      </mp-flex>
    </mp-flex>

    <TimelineDaily v-if="selectedPeriod === 'Hari'" />
    <TimelineWeekly v-if="selectedPeriod === 'Minggu'" />
    <TimelineMonthly v-if="selectedPeriod === 'Bulan'" />
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpText,
  MpButtonIcon,
  MpDatePicker,
  MpButton,
  MpAutocomplete,
} from "@mekari/pixel";

import TimelineDaily from "./TimelineDaily.vue";
import TimelineWeekly from "./TimelineWeekly.vue";
import TimelineMonthly from "./TimelineMonthly.vue";

export default {
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpButtonIcon,
    MpDatePicker,
    MpButton,
    MpAutocomplete,
    TimelineDaily,
    TimelineWeekly,
    TimelineMonthly,
  },
  data() {
    return {
      selectedDate: new Date(),
      selectedPeriod: "Minggu",
    };
  },
};
</script>
