<template>
  <mp-modal :is-open="true">
    <mp-modal-content>
      <mp-modal-header> Beri masukan </mp-modal-header>
      <mp-modal-close-button />

      <mp-modal-body>
        <mp-text font-weight="semibold" line-height="1sm">
          Seberapa puaskah Anda dengan fitur laporan {report_name} kami?
        </mp-text>

        <EmojiRating v-model="rating" @change="handleChange" />

        <mp-box position="relative" mt="4">
          <mp-textarea
            id="feedback"
            v-model="note"
            placeholder="Ceritakan mengapa Anda memilih rating ini"
            resize="vertical"
            height="100"
            :maxlength="maxLength"
          />
          <mp-box
            position="absolute"
            bottom="0"
            px="2"
            py="2"
            width="full"
            display="flex"
            justify-content="flex-end"
            user-select="none"
            pointer-events="none"
          >
            <mp-text px="1" rounded="sm" color="gray.600">
              {{ noteLength }} / {{ maxLength }}
            </mp-text>
          </mp-box>
        </mp-box>
      </mp-modal-body>

      <mp-modal-footer>
        <mp-button variant="ghost" mr="2">Batalkan</mp-button>
        <mp-button :is-disabled="isDisableSave">Kirim</mp-button>
      </mp-modal-footer>
    </mp-modal-content>

    <mp-modal-overlay />
  </mp-modal>
</template>

<script>
import {
  MpBox,
  MpText,
  MpTextarea,
  MpModal,
  MpModalOverlay,
  MpModalContent,
  MpModalHeader,
  MpModalFooter,
  MpModalBody,
  MpModalCloseButton,
  MpButton,
} from "@mekari/pixel";

import EmojiRating from "./EmojiRating";

export default {
  name: "TooltipWithIcon",
  components: {
    MpBox,
    MpText,
    MpTextarea,
    MpModal,
    MpModalOverlay,
    MpModalContent,
    MpModalHeader,
    MpModalFooter,
    MpModalBody,
    MpModalCloseButton,
    MpButton,
    EmojiRating,
  },
  data: function () {
    return {
      note: "",
      maxLength: 250,
      rating: undefined,
    };
  },
  computed: {
    noteLength() {
      const safeNote = this.note || "";
      return safeNote.length;
    },
    isDisableSave() {
      if (this.rating && this.note) return false;
      return true;
    },
  },
  methods: {
    handleChange() {
      const textarea = document.getElementById("feedback");
      if (textarea) {
        textarea.focus();
      }
    },
  },
};
</script>
