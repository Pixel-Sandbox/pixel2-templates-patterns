<template>
  <mp-box>
    <mp-form-control
      margin-bottom="5"
      control-id="product-upload-form-control"
      :is-disabled="isDisabled"
      :is-invalid="isInvalid"
    >
      <mp-form-label>Photo product</mp-form-label>
      <mp-dropzone
        id="product-upload-dropzone"
        ref="dropzonelogo"
        width="148px"
        height="148px"
        min-height="148px"
        accept=".jpg, .jpeg, .png"
        :is-enable-input-file="!image.url"
        @change="handleChange"
      >
        <mp-dropzone-preview
          id="product-upload-preview"
          :preview="image.editedUrl"
          :is-loading="isLoading"
          @clear="handleClear"
          @view="handlePreview"
          @replace="handleReplace"
        />
      </mp-dropzone>
      <mp-form-error-message>{{ errorMessage }}</mp-form-error-message>
      <mp-form-help-text>
        File must be JPG or PNG (max. 2 MB) with minimum image size of
        120x120px.
      </mp-form-help-text>
    </mp-form-control>

    <mp-modal :is-open="isEditorOpen" :on-close="closeEditor">
      <mp-modal-content ref="content">
        <mp-modal-header> Photo product </mp-modal-header>
        <mp-modal-close-button />
        <mp-modal-body>
          <mp-box max-width="full">
            <img
              ref="imageEditor"
              :src="image.url"
              :alt="image.name"
              @loadstart="startEditor"
              @load="startEditor"
            />
          </mp-box>
        </mp-modal-body>
        <mp-modal-footer>
          <mp-button mr="3" variant="ghost" @click="closeEditor">
            Back
          </mp-button>
          <mp-button @click="cropEditor"> Upload </mp-button>
        </mp-modal-footer>
      </mp-modal-content>
      <mp-modal-overlay />
    </mp-modal>

    <mp-modal :is-open="isPreviewOpen" :on-close="closePreview">
      <mp-modal-content ref="content">
        <mp-modal-header> {{ image.name }} </mp-modal-header>
        <mp-modal-close-button />
        <mp-modal-body>
          <mp-box width="full">
            <img
              :src="image.editedUrl"
              :alt="image.name"
              style="width: 100%; border-radius: 6px"
            />
          </mp-box>
        </mp-modal-body>
        <mp-modal-footer>
          <mp-button variant="ghost" @click="closePreview"> Back </mp-button>
        </mp-modal-footer>
      </mp-modal-content>
      <mp-modal-overlay />
    </mp-modal>
  </mp-box>
</template>

<script>
import {
  MpDropzone,
  MpDropzonePreview,
  MpBox,
  MpButton,
  MpFormControl,
  MpFormLabel,
  MpFormErrorMessage,
  MpFormHelpText,
  MpModal,
  MpModalOverlay,
  MpModalContent,
  MpModalHeader,
  MpModalFooter,
  MpModalBody,
  MpModalCloseButton,
} from "@mekari/pixel";

import Cropper from "cropperjs";
import "cropperjs/dist/cropper.css";

export default {
  name: "LogoUpload",
  components: {
    MpDropzone,
    MpDropzonePreview,
    MpBox,
    MpButton,
    MpFormControl,
    MpFormLabel,
    MpFormErrorMessage,
    MpFormHelpText,
    MpModal,
    MpModalOverlay,
    MpModalContent,
    MpModalHeader,
    MpModalFooter,
    MpModalBody,
    MpModalCloseButton,
  },
  data() {
    return {
      cropper: null,
      image: {
        name: "",
        type: "",
        size: 0,
        url: "",
        isCropping: false,
        editedUrl: "",
      },
      errorMessage: "",
      isLoading: false,
      isInvalid: false,
      isDisabled: false,
      isPreviewOpen: false,
      isEditorOpen: false,
    };
  },
  methods: {
    closeEditor() {
      this.isEditorOpen = false;
      this.handleClear();
    },
    closePreview() {
      this.isPreviewOpen = false;
    },
    handleClear() {
      this.image = "";
      this.errorMessage = "";
      this.isInvalid = false;
    },
    handlePreview() {
      this.isPreviewOpen = true;
    },
    handleReplace() {
      this.$refs.dropzonelogo.handleClickInput();
    },
    handleChange(files) {
      this.handleClear();
      // validate file type
      const REGEXP_MIME_TYPE_IMAGES = /^image\/\w+$/;
      if (!REGEXP_MIME_TYPE_IMAGES.test(files[0].type)) {
        this.errorMessage = "Your file type is not image";
        this.isInvalid = true;
        return;
      }

      // validate file size
      if (files[0].size > 1000000) {
        this.errorMessage = "Your file size more than 1MB";
        this.isInvalid = true;
        return;
      }

      this.image = {
        name: files[0].name,
        type: files[0].type,
        size: files[0].size,
        url: URL.createObjectURL(files[0]),
      };

      console.log("IMAGE: ", this.image);
      this.isEditorOpen = true;
    },
    handleUploadImage(file) {
      this.isLoading = true;
      setTimeout(() => {
        // Upload image to server
        this.isLoading = false;
        console.log("IMAGE DATA WILL UPLOAD", file);
      }, 2000);
    },
    startEditor() {
      this.cropper = new Cropper(this.$refs.imageEditor, {
        background: false,
        dragMode: "move",
        aspectRatio: 1,

        // should use arrow func, to still get this context
        crop: ({ detail }) => {
          if (detail.width > 0 && detail.height > 0 && !this.image.isCropping) {
            this.image.isCropping = true;
          }
        },
      });
    },
    cropEditor() {
      if (this.image.isCropping) {
        this.image.editedUrl = this.cropper
          .getCroppedCanvas(
            this.image.type === "image/png"
              ? {}
              : {
                  fillColor: "#fff",
                }
          )
          .toDataURL(this.image.type);

        this.stopEditor();
        this.handleUploadImage(this.image);
      }
    },
    stopEditor() {
      if (this.cropper) {
        this.cropper.destroy();
        this.cropper = null;
      }
      this.isEditorOpen = false;
    },
  },
};
</script>

<style>
.cropper-container {
  background: white;
}
.cropper-modal {
  border-radius: 6px;
}
.cropper-view-box {
  outline: none;
}
.cropper-line {
  background-color: transparent;
}
.cropper-dashed {
  border: 0 solid white;
}
.cropper-point {
  background-color: white;
  height: 8px;
  width: 8px;
  opacity: 1;
  border-radius: 100%;
}
</style>