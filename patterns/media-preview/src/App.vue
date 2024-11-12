<template>
  <mp-flex flex-direction="column" gap="4" p="4">
    <mp-flex>
      <mp-button variant="outline" @click="handleOpen"> View </mp-button>
    </mp-flex>

    <mp-upload accept="all" :multiple="true" @change="handleUploadChange" />

    <mp-box
      max-w="800px"
      p="2"
      border-width="1px"
      border-color="gray-200"
      border-radius="lg"
    >
      <json-viewer
        :value="FILES_PREVIEW"
        copyable
        :expand-depth="2"
        :expanded="false"
      />
    </mp-box>

    <!-- Media Preview -->
    <MediaPreview
      :isOpen="isOpen"
      @close="handleClose"
      :files="FILES_PREVIEW"
    />
  </mp-flex>
</template>

<script>
import { MpFlex, MpButton, MpUpload, MpBox } from "@mekari/pixel";
import MediaPreview from "./components/MediaPreview";

export default {
  name: "App",
  components: {
    MpFlex,
    MpButton,
    MediaPreview,
    MpUpload,
    MpBox,
  },
  data() {
    return {
      isOpen: false,
      /**
       * @typedef {Object} FilePreview
       * @property {string} name - The name of the file.
       * @property {string} type - The MIME type of the file.
       * @property {number} size - The size of the file in kilo-bytes.
       * @property {string} url - The URL to access the file.
       */

      /**
       * @type {FilePreview[]}
       */
      FILES_PREVIEW: [
        {
          name: "DeveloperDocumentation_PB_M_01.png",
          type: "image/png",
          size: 3000,
          url: "https://via.placeholder.com/1000x200",
        },
        {
          name: "test.pdf",
          type: "application/pdf",
          size: 3000,
          url: "/preview.pdf",
        },
        {
          name: "Mekari Airene — Mekari AI Response & Expertise - Mekari (720p, h264, youtube).mp4",
          type: "video/mp4",
          size: 6000,
          url: "/Mekari Airene — Mekari AI Response & Expertise - Mekari (720p, h264, youtube).mp4",
        },
        {
          name: "portait.jpg",
          type: "image/jpg",
          size: 564,
          url: "/portait.jpg",
        },
        {
          name: "landscape.jpg",
          type: "image/jpg",
          size: 3000,
          url: "/landscape.jpg",
        },
        {
          name: "Introducing our AI, Mekari Airene on Qontak - Mekari Qontak",
          type: "video/mp4",
          size: 1000,
          url: "/video/Introducing our AI, Mekari Airene on Qontak - Mekari Qontak.mp4",
          videoQualitySources: {
            "360p":
              "/video/Introducing our AI, Mekari Airene on Qontak - Mekari Qontak (360p).mp4",
            "480p":
              "/video/Introducing our AI, Mekari Airene on Qontak - Mekari Qontak (480p).mp4",
            "720p":
              "/video/Introducing our AI, Mekari Airene on Qontak - Mekari Qontak (720p).mp4",
          },
        },
      ],
    };
  },
  methods: {
    handleOpen() {
      this.isOpen = true;
    },
    handleClose() {
      this.isOpen = false;
    },
    handleUploadChange(e) {
      const files = e.target.files;
      console.log("FILES: ", e.target.files);

      const extractedFiles = Array.from(files).map((file) => ({
        name: file.name,
        type: file.type,
        size: Math.round(file.size / 1024), // convert bytes to KB
        url: URL.createObjectURL(file),
      }));

      this.FILES_PREVIEW = extractedFiles;
    },
  },
};
</script>
