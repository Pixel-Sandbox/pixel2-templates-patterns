<template>
  <mp-box>
    <mp-modal v-if="!isConfirmOpen" size="lg" :is-open="isOpen">
      <mp-modal-content>
        <mp-modal-header>Import data</mp-modal-header>
        <mp-modal-close-button @click="onModalConfirmOpen" />
        <mp-modal-body>
          <mp-text margin-bottom="6">
            Please follow these steps to start importing data to Talenta.
          </mp-text>

          <mp-flex>
            <mp-box
              width="6"
              height="6"
              border-radius="full"
              background-color="blue.50"
              margin-right="4"
              justify-content="center"
              align-items="center"
            >
              <mp-text color="blue.700" padding-x="9px"> 1 </mp-text>
            </mp-box>
            <mp-box>
              <mp-text font-weight="semibold">
                Download the data template
              </mp-text>
              <mp-text color="gray.600">
                To upload data accurately, use only the provided templates
                customized for the Talenta system. Before you download this
                template, please make sure you already selected organizational
                unit due the template will be formatted as defined structure.
              </mp-text>
              <mp-button margin-top="4" variant="outline">
                Download template
              </mp-button>
            </mp-box>
          </mp-flex>

          <mp-divider margin-y="6" />

          <mp-flex>
            <mp-box
              width="6"
              height="6"
              border-radius="full"
              background-color="blue.50"
              margin-right="4"
              justify-content="center"
              align-items="center"
            >
              <mp-text color="blue.700" padding-x="8px"> 2 </mp-text>
            </mp-box>
            <mp-box>
              <mp-text font-weight="semibold">
                Fill in the data in the template file
              </mp-text>
              <ul v-pixel color="gray.600" margin-left="4">
                <li>
                  <mp-text color="gray.600">
                    Please follow the guidelines to avoid upload errors.
                  </mp-text>
                </li>
                <li>
                  <mp-text color="gray.600">
                    Make sure your file includes all mandatory fields as
                    defined in the template.
                  </mp-text>
                </li>
                <li>
                  <mp-text color="gray.600">
                    For more information on uploading employee data, refer to
                    the guidebook.
                  </mp-text>
                </li>
              </ul>
            </mp-box>
          </mp-flex>

          <mp-divider margin-y="6" />

          <mp-flex>
            <mp-box
              width="6"
              height="6"
              border-radius="full"
              background-color="blue.50"
              margin-right="4"
              justify-content="center"
              align-items="center"
            >
              <mp-text color="blue.700" padding-x="8px"> 3 </mp-text>
            </mp-box>
            <mp-box>
              <mp-text font-weight="semibold"> Upload XLSX </mp-text>
              <mp-text color="gray.600">
                The maximum amount of data that can be processed is 1,000
                records per upload, and it must be in XLSX format.
              </mp-text>
              <mp-dropzone
                margin-top="4"
                description="The file must be in XLSX format with a max file size of 5 MB"
              />
            </mp-box>
          </mp-flex>
        </mp-modal-body>
        <mp-modal-footer>
          <mp-button
            margin-right="3"
            variant="ghost"
            @click="onModalConfirmOpen"
          >
            Cancel
          </mp-button>
          <mp-button>Import</mp-button>
        </mp-modal-footer>
      </mp-modal-content>
      <mp-modal-overlay />
    </mp-modal>

    <mp-modal v-show="isConfirmOpen" size="sm" :is-open="isConfirmOpen">
      <mp-modal-content>
        <mp-modal-header>Discard import progress?</mp-modal-header>
        <mp-modal-close-button @click="onModalConfirmClose" />
        <mp-modal-body>
          <mp-box>
            <mp-text margin-bottom="4">
              Progress cannot be restored.
            </mp-text>
          </mp-box>
        </mp-modal-body>
        <mp-modal-footer>
          <mp-button
            margin-right="3"
            variant="ghost"
            @click="onModalConfirmClose"
          >
            Cancel
          </mp-button>
          <mp-button variant-color="red" @click="onModalCloseAll">Discard</mp-button>
        </mp-modal-footer>
      </mp-modal-content>
      <mp-modal-overlay />
    </mp-modal>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpText,
  MpButton,
  MpDivider,
  MpDropzone,
  MpModal,
  MpModalOverlay,
  MpModalContent,
  MpModalHeader,
  MpModalBody,
  MpModalFooter,
  MpModalCloseButton,
} from "@mekari/pixel";

export default {
  name: "CreateSalaryStructure3Modal",
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpButton,
    MpDivider,
    MpDropzone,
    MpModal,
    MpModalOverlay,
    MpModalContent,
    MpModalHeader,
    MpModalBody,
    MpModalFooter,
    MpModalCloseButton
  },
  props: {
    isOpen: [Boolean],
    onClose: [Function],
  },
  data: function () {
    return {
      isConfirmOpen: false
    }
  },
  methods: {
    onModalConfirmOpen() {
      this.isConfirmOpen = true
    },
    onModalConfirmClose() {
      this.isConfirmOpen = false
    },
    onModalCloseAll() {
      this.isConfirmOpen = false
      this.$emit('update-modal-close-all')
    }
  }
};
</script>