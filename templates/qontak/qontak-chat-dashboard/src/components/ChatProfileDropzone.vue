<template>
  <mp-box>
    <mp-form-control
      control-id="chat-profile-form-control"
      :is-disabled="isDisabled"
      :is-invalid="isInvalid"
    >
      <mp-form-label>Chat profile photo</mp-form-label>
      <mp-dropzone
        id="chat-profile-dropzone"
        ref="dropzone"
        width="200px"
        height="200px"
        min-height="200px"
        accept=".jpg, .jpeg, .png"
        :is-enable-input-file="true"
        :is-enable-drag-and-drop="true"
        @change="handleChange"
      >
        <mp-dropzone-preview
          id="chat-profile-preview"
          placeholder=""
          icon-size="md"
          :preview="image.editedUrl"
          :is-loading="isLoading"
          @clear="removeImage"
          @view="openPreview"
          @replace="handleReplace"
        />
      </mp-dropzone>
      <mp-form-error-message>{{ errorMessage }}</mp-form-error-message>
      <mp-form-help-text>
        <li>Acceptable file format is PNG.</li>
        <li>Maximum file size is 500 KB.</li>
        <li>Maximum photo resolution is 60 x 60 pixels.</li>
      </mp-form-help-text>
    </mp-form-control>

    <mp-modal
      size="lg"
      :is-open="isEditorOpen"
      :close-on-overlay-click="false"
      :on-close="closeEditor"
    >
      <mp-modal-content ref="content">
        <mp-modal-header> Chat Profile </mp-modal-header>
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
          <mp-button mr="3" variant="ghost" @click="handleReplace">
            Change photo
          </mp-button>
          <mp-button @click="cropEditor"> Upload </mp-button>
        </mp-modal-footer>
      </mp-modal-content>
      <mp-modal-overlay />
    </mp-modal>

    <mp-modal :is-open="isPreviewOpen" :on-close="closePreview">
      <mp-modal-content ref="content">
        <mp-modal-header>
          <mp-text font-weight="semibold" mr="8" is-truncated>
            {{ image.name }}
          </mp-text>
        </mp-modal-header>
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
  MpText,
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
  name: "ChatProfileDropzone",
  components: {
    MpDropzone,
    MpDropzonePreview,
    MpBox,
    MpButton,
    MpText,
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
    openPreview() {
      this.isPreviewOpen = true;
    },
    closePreview() {
      this.isPreviewOpen = false;
    },
    openEditor() {
      this.isEditorOpen = true;
    },
    closeEditor() {
      this.isEditorOpen = false;
    },
    removeImage() {
      this.image = {
        name: "",
        type: "",
        size: 0,
        url: "",
        isCropping: false,
        editedUrl: "",
      };
      this.clearError();
    },
    clearError() {
      this.isInvalid = false;
      this.errorMessage = "";
    },
    handleReplace() {
      this.closeEditor();
      this.$refs.dropzone.handleClickInput();
    },
    handleChange(files) {
      document
        .getElementById(`dropzone-preview-wrapper-chat-profile-preview`)
        .blur();
      this.clearError();
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
      this.openEditor();
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
        zoomable: false,
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
          .getCroppedCanvas({
            fillColor: "#fff",
          })
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
      this.closeEditor();
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
  height: 10px !important;
  width: 10px !important;
  opacity: 1;
  border-radius: 100%;
}
</style>
