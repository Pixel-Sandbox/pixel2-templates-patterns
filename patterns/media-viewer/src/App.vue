
<template>
  <mp-box
    width="520px"
    background-color="gray.25"
    border="1px solid"
    border-color="gray.100"
    border-radius="md"
  >
    <mp-flex px="3" py="2" justify-content="space-between">
      <mp-flex gap="3" align-items="center">
        <mp-button-icon
          name="zoom-out"
          @click="zoom(1)"
          v-mp-tooltip="'Zoom out'"
        />
        <mp-button-icon
          name="zoom-in"
          @click="zoom(-1)"
          v-mp-tooltip="'Zoom in'"
        />
        <mp-button-icon
          name="rotate-left"
          @click="rotate -= 90"
          v-mp-tooltip="'Rotate'"
        />
        <mp-toggle :is-checked="isPan" @change="(e) => pan(e)">
          Enable panning
        </mp-toggle>
        <mp-button variant="link" @click="reset()">Reset</mp-button>
      </mp-flex>
      <mp-button-icon name="full-screen" v-mp-tooltip="'Full screen'" />
    </mp-flex>

    <mp-box background-color="white" border-top="1px solid" border-color="gray.100">
      <div id="zoom-area">
        <pdf
          ref="pdf"
          :src="src"
          :page="page"
          :rotate="rotate"
          @num-pages="numPages = $event"
          @link-clicked="page = $event"
        />
      </div>
    </mp-box>

    <mp-flex
      background-color="gray.25"
      border-top="1px solid"
      border-color="gray.100"
      border-bottom-left-radius="md"
      border-bottom-right-radius="md"
      padding="4"
      justify-content="space-between"
    >
      <mp-flex gap="3" align="center">
        <mp-input
          :value="page"
          type="number"
          size="sm"
          width="32px"
          @input="(value) => input(value)"
          @blur="(e) => blur(e)"
        />
        <mp-text color="gray.600" display="inline-flex" width="full">
          of {{ numPages }} page
        </mp-text>
      </mp-flex>
      <mp-flex gap="2">
        <mp-button-icon
          :_disabled="{
            backgroundColor: 'transparent',
            cursor: 'not-allowed',
            color: 'gray.400',
            boxShadow: 'none',
          }"
          name="chevrons-left"
          size="sm"
          v-mp-tooltip="'Prev page'"
          :disabled="this.page === 1"
          @click="prev()"
        />
        <mp-button-icon
          :_disabled="{
            backgroundColor: 'transparent',
            cursor: 'not-allowed',
            color: 'gray.400',
            boxShadow: 'none',
          }"
          name="chevrons-right"
          size="sm"
          v-mp-tooltip="'Next page'"
          :disabled="this.page === numPages"
          @click="next()"
        />
      </mp-flex>
    </mp-flex>
  </mp-box>
</template>

<script>
import pdf from "@teckel/vue-pdf"
import Panzoom from "@panzoom/panzoom"
import {
  MpBox,
  MpFlex,
  MpButtonIcon,
  MpButton,
  MpToggle,
  MpText,
  MpInput,
} from "@mekari/pixel"

export default {
  name: "App",
  components: {
    pdf,
    MpBox,
    MpFlex,
    MpButtonIcon,
    MpButton,
    MpToggle,
    MpText,
    MpInput,
  },
  data() {
    return {
      isPan: true,
      src: "https://cdn.rawgit.com/mozilla/pdf.js/c6e8ca86/test/pdfs/calrgb.pdf",
      page: 1,
      numPages: 0,
      rotate: 0,
    }
  },
  mounted() {
    this.panzoom = Panzoom(document.getElementById("zoom-area"), {
      maxScale: 5,
    })
  },
  methods: {
    zoom: function (level) {
      level === -1
        ? this.panzoom.zoomOut({ animate: true })
        : this.panzoom.zoomIn({ animate: true })
    },
    reset: function () {
      this.panzoom.reset()
    },
    pan: function (e) {
      this.isPan = e
      this.panzoom.setOptions({
        disablePan: !e,
      })
    },
    next: function () {
      this.page += 1
    },
    prev: function () {
      this.page -= 1
    },
    input: function (value) {
      const pageNumber = Number(value)

      if (value === '') {
        this.page = null
      } else {
        this.page = pageNumber
      }
    },
    blur: function (e) {
      const pageNumber = Number(e.target.value)
      
      if (pageNumber === '' || isNaN(pageNumber) || pageNumber < 1 || pageNumber > this.numPages) {
        this.page = 1 
      } else {
        this.page = pageNumber
      }
    },
  },
}
</script>
