<template>
  <mp-form-control
    margin-bottom="12"
    control-id="multiple-area-upload"
    :is-disabled="isDisabled"
    :is-invalid="isInvalid"
  >
    <mp-form-label>Featured images</mp-form-label>
    <mp-dropzone
      id="multiple-area-upload"
      ref="dropzonecustom"
      :display="!isShowDropzone && 'none'"
      accept=".jpg, .jpeg, .png"
      is-multiple
      :is-show-preview="false"
      :is-loading="isLoading"
      description=""
      @change="handleUploadImage"
      @clear="handleClear"
    />

    <mp-box
      v-if="isShowPreview"
      bg="gray.50"
      border-width="1px"
      border-color="gray.100"
      p="6"
      rounded="md"
    >
      <mp-flex flex-wrap="wrap" overflow="auto" pb="4" mt="-2.5">
        <mp-flex gap="2" pb="4" pt="2.5">
          <mp-box
            width="216px"
            height="132px"
            v-for="(image, index) in images"
            :key="index"
            position="relative"
          >
            <img
              :src="getPreviewImage(image)"
              alt=""
              :style="{
                width: '216px',
                height: '132px',
                borderRadius: '6px',
                objectFit: 'cover',
              }"
            />

            <mp-icon
              name="minus-circular"
              variant="fill"
              color="red.400"
              position="absolute"
              top="-10px"
              right="-10px"
              border="1px solid white"
              bg="white"
              border-radius="full"
              z-index="9999"
              cursor="pointer"
              @click.native="handleRemove(index)"
            />
          </mp-box>
        </mp-flex>
      </mp-flex>

      <mp-flex justify="space-between" mt="5">
        <mp-text color="gray.600">
          {{ images.length }} of 5 Featured images
        </mp-text>

        <mp-box display="flex" gap="3">
          <mp-text
            is-link
            text-decoration="underline"
            @click.native="handleClear"
          >
            Delete all
          </mp-text>
          <mp-text
            color="gray.600"
            text-decoration="underline"
            cursor="pointer"
            @click.native="handleChooseFile"
          >
            Choose file
          </mp-text>
        </mp-box>
      </mp-flex>
    </mp-box>

    <mp-form-error-message>
      <mp-box as="ul" list-style-position="inside">
        <mp-text as="li" v-for="(message, index) in errorMessages" :key="index">
          {{ message }}
        </mp-text>
      </mp-box>
    </mp-form-error-message>
    <mp-form-help-text>
      File must be JPG or PNG (up to max. 5 MB) with minimum size of
      1.024x512px. You can upload maximum 5 featured images.
    </mp-form-help-text>
  </mp-form-control>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpIcon,
  MpText,
  MpDropzone,
  MpFormControl,
  MpFormLabel,
  MpFormErrorMessage,
  MpFormHelpText,
} from "@mekari/pixel";

export default {
  name: "CustomUpload",
  components: {
    MpBox,
    MpFlex,
    MpIcon,
    MpText,
    MpDropzone,
    MpFormControl,
    MpFormLabel,
    MpFormErrorMessage,
    MpFormHelpText,
  },
  data() {
    return {
      images: [],
      isLoading: false,
      isInvalid: false,
      isDisabled: false,
      isShowDropzone: true,
      errorMessages: [],
    };
  },
  computed: {
    isShowPreview() {
      return !this.isLoading && this.images.length > 0;
    },
  },
  methods: {
    handleRemove(index) {
      this.images.splice(index, 1);

      if (this.images.length === 0) {
        this.handleClear();
      }
    },
    handleClear() {
      this.images = [];
      this.errorMessage = "";
      this.isInvalid = false;
      this.isShowDropzone = true;
    },
    handleChooseFile() {
      this.$refs.dropzonecustom.handleClickInput();
    },
    handleUploadImage(files) {
      this.images = [];
      this.isInvalid = false;
      this.errorMessages = [];

      const ACCEPT = ["image/png", "image/jpg", "image/jpeg"];
      const MAX_SIZE = 800000;
      Array.from(files).forEach((file) => {
        if (!ACCEPT.includes(file.type)) {
          this.errorMessages.push(
            `${file.name} It must be PNG or JPEG format.`
          );
        }

        if (file.size > MAX_SIZE) {
          this.errorMessages.push(`${file.name} has reached the maximum 8Mb.`);
        }
      });

      if (this.errorMessages.length > 0) {
        this.isInvalid = true;
        return;
      }

      this.isLoading = true;

      this.images = Array.from(files);

      setTimeout(() => {
        this.isLoading = false;
        this.isShowDropzone = false;
      }, 500);
    },
    getPreviewImage(image) {
      return URL.createObjectURL(image);
    },
  },
};
</script>