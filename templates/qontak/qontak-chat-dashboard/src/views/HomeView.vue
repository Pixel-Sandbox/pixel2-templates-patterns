<template>
  <mp-box>
    <Header />

    <mp-flex as="main">
      <Sidebar is-custom default-is-toggle />
      <mp-box
        as="section"
        data-id="content"
        display="flex"
        width="100%"
        height="calc(100vh - 56px)"
        overflow-y="hidden"
        background-color="background"
      >
        <mp-box
          position="relative"
          p="4"
          width="338px"
          height="100%"
          background="white"
        >
          LEFT PANEL
        </mp-box>
        <!-- // CHAT PANEL -->
        <mp-box
          position="relative"
          height="full"
          flex="1"
          border-left-width="1px"
          border-right-width="1px"
          border-color="gray.100"
        >
          <!-- // HEADER CHAT PANEL -->
          <mp-flex
            position="sticky"
            justify="space-between"
            z-index="2"
            background="white"
            height="12"
            px="4"
            border-bottom-width="1px"
            border-color="gray.100"
          >
            <mp-flex gap="2" align-items="center">
              <mp-text> Assigned to: </mp-text>
              <mp-text font-weight="semibold"> Christin</mp-text>
              <mp-button variant="outline" size="sm"> Assign </mp-button>
            </mp-flex>
            <mp-flex gap="2" align-items="center">
              <mp-button variant="outline" size="sm"> Resolve </mp-button>
              <mp-button-icon name="block-user" />
            </mp-flex>
          </mp-flex>
          <!-- // END OF HEADER CHAT PANEL -->

          <!-- // IMAGE PREVIEW -->
          <mp-flex
            v-if="isShowImagePreview"
            direction="column"
            justify="space-between"
            p="4"
            height="calc(100% - 48px)"
          >
            <mp-flex width="full" justify="space-between">
              <mp-button
                v-if="!isEditorOpen"
                variant="outline"
                left-icon="crop"
                @click="handleShowEditor('open')"
                >Crop</mp-button
              >
              <mp-flex v-if="isEditorOpen" gap="2">
                <mp-button variant="ghost" @click="handleShowEditor('close')"
                  >Discard</mp-button
                >
                <mp-button variant="outline" @click="cropImage">Done</mp-button>
              </mp-flex>
              <mp-button-icon
                name="close"
                size="md"
                @click="onCloseImagePreview"
              />
            </mp-flex>

            <mp-flex
              v-if="!isLoading"
              class="pixel-cropper-editor"
              max-height="400px"
              justify="center"
            >
              <!-- // need box to center container cropper -->
              <mp-box>
                <img
                  ref="imageEditor"
                  :src="selectedImage.url"
                  @load="startEditor"
                  style="
                    max-width: 100%;
                    height: 100%;
                    object-fit: contain;
                  "
                />
              </mp-box>
            </mp-flex>
            <mp-flex direction="column" width="full" height="176px">
              <mp-flex
                align-items="end"
                gap="2"
                width="full"
                border-bottom-width="1px"
                border-color="gray.100"
                pb="4"
                mb="6"
              >
                <mp-form-control control-id="message" width="full">
                  <mp-form-label>Message</mp-form-label>
                  <mp-input
                    v-model="message"
                    placeholder="Enter message"
                    autocomplete="off"
                  />
                </mp-form-control>
                <mp-box position="relative">
                  <mp-badge
                    variant="solid"
                    variant-color="green"
                    position="absolute"
                    top="-10px"
                    right="-10px"
                    >{{ images.length }}</mp-badge
                  >
                  <mp-button-icon
                    name="sent"
                    size="md"
                    background-color="blue.400"
                    color="white"
                    @click="handleSendImage"
                  />
                </mp-box>
              </mp-flex>
              <mp-flex width="full" justify="center" gap="4">
                <mp-flex
                  v-for="(item, index) in images"
                  :key="index"
                  position="relative"
                  width="16"
                  height="16"
                  border-width="1px"
                  border-color="gray.100"
                  border-radius="md"
                  :_hover="{
                    '& [data-pixel-component=MpIcon]': {
                      visibility: 'visible',
                    },
                  }"
                  @click="!isLoading && handlePreviewImage(item)"
                >
                  <mp-icon
                    name="minus-circular"
                    variant="fill"
                    color="red.400"
                    visibility="hidden"
                    cursor="pointer"
                    position="absolute"
                    top="-10px"
                    right="-10px"
                    border-radius="full"
                    background="white"
                    z-index="2"
                    @click.native="handleAlert(`Delete image ${index}`)"
                  />
                  <mp-flex
                    v-show="isLoading"
                    position="absolute"
                    top="0"
                    left="0"
                    width="full"
                    height="full"
                    align-items="center"
                    border-radius="md"
                    px="1"
                    bg="rgba(35, 41, 51, 0.60)"
                  >
                    <mp-progress :value="50" color="teal" size="sm" />
                  </mp-flex>
                  <img
                    :src="item.url"
                    :alt="item.name"
                    style="
                      width: 100%;
                      height: 100%;
                      object-fit: cover;
                      border-radius: 4px;
                    "
                  />
                </mp-flex>
                <mp-flex
                  justify="center"
                  align-items="center"
                  width="16"
                  height="16"
                  border-width="1px"
                  border-color="gray.100"
                  border-radius="md"
                  cursor="pointer"
                  @click="handleAlert(`Add new image`)"
                >
                  <mp-icon name="add-circular" variant="duotone" />
                </mp-flex>
              </mp-flex>
            </mp-flex>
          </mp-flex>
          <!-- // END OF IMAGE PREVIEW -->

          <mp-dropzone
            v-if="!isShowImagePreview"
            id="chat-area-upload"
            placeholder="Drop your file(s) here"
            description=""
            :margin="isDragFile ? '4' : '0'"
            width="auto"
            :height="isDragFile ? 'calc(100% - 80px)' : 'calc(100% - 48px)'"
            overlay-variant="white"
            has-custom-upload
            @change="onChange"
            @drag="onDrag"
          >
            <mp-box :height="`calc(100% - ${textAreaHeight} + 18px)`" p="4" overflow-y="auto">
              <mp-text>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
                quo similique nobis excepturi ipsam tempora, repellat
                necessitatibus tempore eum, a earum qui aspernatur cumque
                dolores sunt quam libero veritatis nihil? Lorem, ipsum dolor sit
                amet consectetur adipisicing elit. Nisi quo similique nobis
                excepturi ipsam tempora, repellat necessitatibus tempore eum, a
                earum qui aspernatur cumque dolores sunt quam libero veritatis
                nihil? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Nisi quo similique nobis excepturi ipsam tempora, repellat
                necessitatibus tempore eum, a earum qui aspernatur cumque
                dolores sunt quam libero veritatis nihil? Lorem, ipsum dolor sit
                amet consectetur adipisicing elit. Nisi quo similique nobis
                excepturi ipsam tempora, repellat necessitatibus tempore eum, a
                earum qui aspernatur cumque dolores sunt quam libero veritatis
                nihil? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Nisi quo similique nobis excepturi ipsam tempora, repellat
                necessitatibus tempore eum, a earum qui aspernatur cumque
                dolores sunt quam libero veritatis nihil? Lorem, ipsum dolor sit
                amet consectetur adipisicing elit. Nisi quo similique nobis
                excepturi ipsam tempora, repellat necessitatibus tempore eum, a
                earum qui aspernatur cumque dolores sunt quam libero veritatis
                nihil? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Nisi quo similique nobis excepturi ipsam tempora, repellat
                necessitatibus tempore eum, a earum qui aspernatur cumque
                dolores sunt quam libero veritatis nihil? Lorem, ipsum dolor sit
                amet consectetur adipisicing elit. Nisi quo similique nobis
                excepturi ipsam tempora, repellat necessitatibus tempore eum, a
                earum qui aspernatur cumque dolores sunt quam libero veritatis
                nihil? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Nisi quo similique nobis excepturi ipsam tempora, repellat
                necessitatibus tempore eum, a earum qui aspernatur cumque
                dolores sunt quam libero veritatis nihil? Lorem, ipsum dolor sit
                amet consectetur adipisicing elit. Nisi quo similique nobis
                excepturi ipsam tempora, repellat necessitatibus tempore eum, a
                earum qui aspernatur cumque dolores sunt quam libero veritatis
                nihil? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Nisi quo similique nobis excepturi ipsam tempora, repellat
                necessitatibus tempore eum, a earum qui aspernatur cumque
                dolores sunt quam libero veritatis nihil? Lorem, ipsum dolor sit
                amet consectetur adipisicing elit. Nisi quo similique nobis
                excepturi ipsam tempora, repellat necessitatibus tempore eum, a
                earum qui aspernatur cumque dolores sunt quam libero veritatis
                nihil? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Nisi quo similique nobis excepturi ipsam tempora, repellat
                necessitatibus tempore eum, a earum qui aspernatur cumque
                dolores sunt quam libero veritatis nihil? Lorem, ipsum dolor sit
                amet consectetur adipisicing elit. Nisi quo similique nobis
                excepturi ipsam tempora, repellat necessitatibus tempore eum, a
                earum qui aspernatur cumque dolores sunt quam libero veritatis
                nihil? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Nisi quo similique nobis excepturi ipsam tempora, repellat
                necessitatibus tempore eum, a earum qui aspernatur cumque
                dolores sunt quam libero veritatis nihil? Lorem, ipsum dolor sit
                amet consectetur adipisicing elit. Nisi quo similique nobis
                excepturi ipsam tempora, repellat necessitatibus tempore eum, a
                earum qui aspernatur cumque dolores sunt quam libero veritatis
                nihil? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Nisi quo similique nobis excepturi ipsam tempora, repellat
                necessitatibus tempore eum, a earum qui aspernatur cumque
                dolores sunt quam libero veritatis nihil? Lorem, ipsum dolor sit
                amet consectetur adipisicing elit. Nisi quo similique nobis
                excepturi ipsam tempora, repellat necessitatibus tempore eum, a
                earum qui aspernatur cumque dolores sunt quam libero veritatis
                nihil?
              </mp-text>
            </mp-box>

            <mp-flex
              position="absolute"
              align-items="end"
              gap="2"
              bottom="0"
              width="full"
              background="white"
              px="4"
              py="3"
              border-top-width="1px"
              border-color="gray.100"
            >
              <mp-button-icon name="emoji" size="md" height="9" />
              <mp-button-icon name="attachment" size="md" height="9" />
              <mp-textarea
                :value="value"
                resize="none"
                placeholder="Press shift + enter to add new line. Press “/” to select template."
                rows="1"
                paddingBottom="2"
                min-height="36px"
                max-height="216px"
                :height="textAreaHeight"
                @input="handleInput"
              />
              <mp-button-icon
                name="sent"
                size="md"
                height="9"
                background-color="blue.400"
                color="white"
                :is-disabled="!value"
              />
            </mp-flex>
          </mp-dropzone>
        </mp-box>
        <!-- // END OF CHAT PANEL -->
        <mp-box
          position="relative"
          p="4"
          width="363px"
          height="full"
          top="0px"
          right="0px"
          background="white"
        >
          INFO BAR
        </mp-box>
      </mp-box>
    </mp-flex>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpText,
  MpButton,
  MpButtonIcon,
  MpTextarea,
  MpDropzone,
  MpFormControl,
  MpFormLabel,
  MpInput,
  MpIcon,
  MpProgress,
  MpBadge,
} from "@mekari/pixel";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

// Third party library for crop image
import Cropper from "cropperjs";
import "cropperjs/dist/cropper.css";

export default {
  name: "HomeView",
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpButton,
    MpButtonIcon,
    MpTextarea,
    MpDropzone,
    MpFormControl,
    MpFormLabel,
    MpInput,
    MpIcon,
    MpProgress,
    MpBadge,
    Header,
    Sidebar,
  },
  data() {
    return {
      value: "",
      message: "",
      textAreaHeight: "36px",
      images: [],
      selectedImage: null,
      errorMessage: "",
      isLoading: false,
      isInvalid: false,
      isDragFile: false,
      isShowImagePreview: false,
      isEditorOpen: false,
      cropper: null,
    };
  },
  methods: {
    handleAlert(message) {
      alert(message);
    },
    handleInput(val, e) {
      this.value = val;

      // need to set height to auto first,
      // to prevent wrong height when delete input
      this.textAreaHeight = "auto";
      this.$nextTick(() => {
        this.textAreaHeight = `${e.target.scrollHeight}px`;
      });
    },
    onDrag() {
      this.isDragFile = true;
      this.errorMessage = "";
      this.isInvalid = false;
    },
    onCloseImagePreview() {
      this.isShowImagePreview = false;
      this.errorMessage = "";
      this.isInvalid = false;
      this.images = [];
      this.stopEditor();
    },
    onChange(files) {
      this.isDragFile = false;

      console.log("FILES", files);

      Array.from(files).map((item) => {
        // validate file type
        const REGEXP_MIME_TYPE_IMAGES = /^image\/\w+$/;
        if (!REGEXP_MIME_TYPE_IMAGES.test(item.type)) {
          this.errorMessage = "Your file type is not image";
          this.isInvalid = true;

          throw new Error(this.errorMessage);
        }

        this.images.push({
          name: item.name,
          type: item.type,
          size: item.size,
          url: URL.createObjectURL(item),
          src: URL.createObjectURL('https://via.placeholder.com/800x400/D0D6DD/FFFFFF'),
          // url: 'https://via.placeholder.com/800x400/D0D6DD/FFFFFF',
          isCropping: false,
        });
      });

      this.isShowImagePreview = true;
      this.handlePreviewImage(this.images[0]);
      this.handleUploadImage(this.images);
    },
    handlePreviewImage(item) {
      this.selectedImage = item;
      console.log("SELECTED IMAGES", this.selectedImage);
      this.stopEditor();
    },
    handleUploadImage() {
      this.isLoading = true;
      setTimeout(() => {
        // Upload image to server
        this.isLoading = false;
      }, 2000);
    },
    handleSendImage() {
      console.log("SEND IMAGES", this.images);
    },
    handleShowEditor(val) {
      if (val === "open") {
        this.isEditorOpen = true;
        this.cropper.crop();
      }
      if (val === "close") {
        this.isEditorOpen = false;
        this.cropper.clear();
      }
    },
    startEditor() {
      console.log("START EDITOR");
      this.cropper = new Cropper(this.$refs.imageEditor, {
        modal: true,
        guides: false,
        center: false,
        highlight: false,
        background: false,
        autoCrop: false,
        movable: false,
        zoomable: false,
        rotatable: false,
        scalable: false,
        dragMode: "move",
        minContainerWidth: 50,

        crop: ({ detail }) => {
          if (
            detail.width > 0 &&
            detail.height > 0 &&
            !this.selectedImage.isCropping
          ) {
            this.selectedImage.isCropping = true;
          }
        },
      });
    },
    cropImage() {
      if (this.selectedImage.isCropping) {
        this.selectedImage.url = this.cropper
          .getCroppedCanvas({ fillColor: "#ffffff" })
          .toDataURL(this.selectedImage.type);
        this.selectedImage.type = "";

        this.stopEditor();
        // this.handleUploadImage(this.image);
      }
    },
    stopEditor() {
      console.log("STOP EDITOR");
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
.pixel-cropper-editor .cropper-container {
  background: #f1f5f9;
  border: 1px solid #8B95A5;
  border-radius: 6px;
}

.pixel-cropper-editor .cropper-modal {
  background-color: #232933;
  opacity: 0.8;
  border-radius: inherit;
}

.pixel-cropper-editor .cropper-wrap-box {
  border-radius: inherit;
}

.pixel-cropper-editor .cropper-canvas {
  border-radius: inherit;
}

.pixel-cropper-editor .cropper-view-box {
  outline: none;
}

.pixel-cropper-editor .cropper-line {
  background-color: white;
  opacity: 1;
}

.pixel-cropper-editor .cropper-line.line-e {
  width: 1px;
  right: 0px;
}

.pixel-cropper-editor .cropper-line.line-s {
  height: 1px;
  bottom: 0px;
}

.pixel-cropper-editor .cropper-line.line-w {
  left: 0px;
  width: 1px;
}

.pixel-cropper-editor .cropper-line.line-n {
  height: 1px;
  top: 0px;
}

.pixel-cropper-editor .cropper-point {
  background-color: white;
  height: 10px !important;
  width: 10px !important;
  opacity: 1;
  border-radius: 100%;
}
</style>
