<template>
  <mp-box padding-y="4">
    <mp-flex justify-content="space-between">
      <mp-flex align-items="center">
        <mp-text color="gray.600" line-height="md" padding-y="1"> Menampilkan 1-200 dari 2561 </mp-text>
      </mp-flex>
      <mp-flex align-items="center">
        <mp-tooltip label="Jump to page" position="bottom">
          <mp-box>
            <mp-autocomplete
              :style="{ width: '88px', minWidth: '88px' }"
              :content-style="{ width: '55px' }"
              value="1"
              min-width="20"
              width="20"
              height="7.5"
              :data="['1', '2', '3', '4', '5']"
              is-searchable
            />
          </mp-box>
        </mp-tooltip>
        <mp-text color="gray.600" line-height="md" padding-left="2" padding-right="4" padding-y="1"> of 24 page </mp-text>
        <mp-tooltip label="Prev page" position="bottom">
          <mp-button-icon name="chevrons-left" size="sm" is-round padding-right="1" />
        </mp-tooltip>
        <mp-tooltip label="Next page" position="bottom">
          <mp-button-icon name="chevrons-right" size="sm" is-round padding-left="1" />
        </mp-tooltip>
      </mp-flex>
    </mp-flex>
  </mp-box>
</template>

<script>
import {
  MpFlex,
  MpBox,
  MpText,
  MpTooltip,
  MpButtonIcon,
  MpAutocomplete,
} from "@mekari/pixel";

export default {
  name: "TablePagination",
  components: {
    MpFlex,
    MpBox,
    MpText,
    MpTooltip,
    MpButtonIcon,
    MpAutocomplete,
  },
  data() {
    return {
      pages: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  },
};
</script>
