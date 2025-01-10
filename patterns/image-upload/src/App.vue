<template>
  <mp-box>
    <mp-flex padding="4">
      <mp-button @click="handleOpen" variant="outline"> 
        <mp-icon name="download" size="sm" variant="duotone" margin-right="2" />
        Import 
      </mp-button>
    </mp-flex>
    <mp-modal v-if="!isConfirmOpen" size="lg" :is-open="isOpen">
      <mp-modal-content>
        <mp-modal-header>Import data</mp-modal-header>
        <mp-modal-close-button @click="onConfirmOpen" />
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
                To upload data accurately, use only the provided templates customized for the Talenta system.
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
                    The Employee Code/Employee ID and employee email, when changed for existing employees, will update the existing data.
                  </mp-text>
                </li>
                <li>
                  <mp-text color="gray.600">
                    For more information on uploading employee data, refer to
                    the 
                    <mp-text display="inline-flex" is-link>guidebook</mp-text>.
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
              <mp-text font-weight="semibold"> Upload CSV </mp-text>
              <mp-text color="gray.600">
                The maximum amount of data that can be processed is 1,000
                records per upload, and it must be in CSV format.
              </mp-text>
              <mp-dropzone
                margin-top="4"
                description="The file must be in CSV format with a max file size of 5 MB"
              />
            </mp-box>
          </mp-flex>
        </mp-modal-body>
        <mp-modal-footer>
          <mp-button
            margin-right="3"
            variant="ghost"
            @click="onConfirmOpen"
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
        <mp-modal-header>Discard import data?</mp-modal-header>
        <mp-modal-close-button @click="onConfirmClose" />
        <mp-modal-body>
          <mp-box>
            <mp-text margin-bottom="4">
              Your import process hasn't finished yet. Exiting now will discard any unsaved progress.
            </mp-text>
          </mp-box>
        </mp-modal-body>
        <mp-modal-footer>
          <mp-button
            margin-right="3"
            variant="ghost"
            @click="onConfirmClose"
          >
            Cancel
          </mp-button>
          <mp-button variant-color="red" @click="onCloseAll">Discard</mp-button>
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
  MpDropzone,
  MpDivider,
  MpIcon,
  MpModal,
  MpModalOverlay,
  MpModalContent,
  MpModalHeader,
  MpModalBody,
  MpModalFooter,
  MpModalCloseButton
} from "@mekari/pixel";

export default {
  name: "App",
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpButton,
    MpDivider,
    MpDropzone,
    MpIcon,
    MpModal,
    MpModalOverlay,
    MpModalContent,
    MpModalHeader,
    MpModalBody,
    MpModalFooter,
    MpModalCloseButton
  },
  data: function () {
    return {
      isOpen: false,
      isConfirmOpen: false
    };
  },
  methods: {
    handleOpen() {
      this.isOpen = true;
    },
    handleClose() {
      this.isOpen = false;
    },
    onConfirmOpen() {
      this.isConfirmOpen = true
    },
    onConfirmClose() {
      this.isConfirmOpen = false
    },
    onCloseAll() {
      this.isConfirmOpen = false
      this.isOpen = false
    }
  },
};
</script>
