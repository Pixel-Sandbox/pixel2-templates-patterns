<template>
  <mp-modal
    :is-open="isOpen"
    :on-close="handleClose"
    scroll-behavior="auto"
    size="xl"
  >
    <mp-modal-content>
      <mp-modal-header>Tambah widget</mp-modal-header>
      <mp-modal-close-button />
      <mp-modal-header
        bg="white"
        border-color="white"
        :shadow="showShadow ? 'sm' : ''"
      >
        <mp-flex justify-content="space-between" bg="white">
          <mp-form-control>
            <mp-autocomplete
              value="Semua"
              :data="['Semua', 'Penjualan', 'Penjualan & biaya']"
              :content-style="{ width: '64' }"
            />
          </mp-form-control>

          <mp-form-control>
            <mp-input-group>
              <mp-input-left-addon :with-background="false">
                <mp-icon name="search" size="sm" />
              </mp-input-left-addon>
              <mp-input placeholder="Cari..." v-model="search" />
            </mp-input-group>
          </mp-form-control>
        </mp-flex>
      </mp-modal-header>
      <mp-modal-body @scroll="handleScroll">
        <mp-box
          v-if="isLoading"
          width="full"
          display="flex"
          align-items="center"
          justify-content="center"
          height="404px"
        >
          <mp-spinner size="sm" mr="2" />
          <mp-text color="gray.600"> Memuat widget </mp-text>
        </mp-box>

        <template v-else>
          <mp-box display="flex" flex-direction="column" gap="5" v-if="!search">
            <mp-box
              v-for="template in templates"
              :key="template.category"
              display="flex"
              flex-direction="column"
            >
              <mp-box>
                <mp-text color="gray.600" mb="4" text-transform="uppercase">
                  {{ template.category.split("").join(" ") }}
                </mp-text>
              </mp-box>

              <mp-grid gap="4" templateColumns="repeat(3, 1fr)">
                <mp-box
                  v-for="data in template.datas"
                  :key="data.id"
                  :border-width="
                    selectedTemplate?.id === data.id ? '1.5px' : '1px'
                  "
                  :border-color="
                    selectedTemplate?.id === data.id ? 'blue.400' : 'gray.100'
                  "
                  cursor="pointer"
                  :_hover="{
                    borderColor:
                      selectedTemplate?.id === data.id
                        ? 'blue.400'
                        : 'gray.400',
                  }"
                  border-radius="md"
                  color="blue.700"
                  @click="handleSelectTemplate(data)"
                >
                  <mp-box height="100px" display="flex" align-items="bottom">
                    <img
                      v-if="data.type === 'donut'"
                      style="border-radius: 6px"
                      src="../../assets/donut.png"
                      alt=""
                    />
                    <img
                      v-if="data.type === 'bar'"
                      style="border-radius: 6px"
                      src="../../assets/bar.png"
                      alt=""
                    />
                    <img
                      v-if="data.type === 'number'"
                      style="border-radius: 6px"
                      src="../../assets/number.png"
                      alt=""
                    />
                  </mp-box>

                  <mp-box p="4" border-top-width="1px" border-color="gray.100">
                    <mp-text size="lg" font-weight="semibold">
                      {{ data.title }}
                    </mp-text>
                    <mp-text color="gray.600" line-height="1sm">
                      {{ data.description }}
                    </mp-text>
                  </mp-box>
                </mp-box>
              </mp-grid>
            </mp-box>
          </mp-box>

          <mp-box
            v-else
            width="full"
            display="flex"
            flex-direction="column"
            align-items="center"
            justify-content="center"
            height="404px"
          >
            <img
              src="../../assets/widget-not-found.png"
              alt=""
              :style="{ height: '160px', width: '192px' }"
            />
            <mp-text as="h3" font-weight="semibold" font-size="lg"
              >Widget tidak ditemukan</mp-text
            >
            <mp-text color="gray.600"
              >Cek kembali kata kunci yang Anda ketik dan ulangi
              pencarian.</mp-text
            >
          </mp-box>
        </template>
      </mp-modal-body>

      <mp-modal-footer>
        <mp-button variant="ghost" margin-right="3" @click="handleClose"
          >Batalkan</mp-button
        >
        <mp-button
          :is-disabled="selectedTemplate ? false : true"
          @click="handleAddWidget"
          >Tambahkan</mp-button
        >
      </mp-modal-footer>
    </mp-modal-content>
    <mp-modal-overlay />
  </mp-modal>
</template>

<script>
import {
  MpText,
  MpModal,
  MpModalOverlay,
  MpModalContent,
  MpModalHeader,
  MpModalBody,
  MpModalCloseButton,
  MpModalFooter,
  MpButton,
  MpGrid,
  MpBox,
  MpFormControl,
  MpFlex,
  MpAutocomplete,
  MpInput,
  MpInputGroup,
  MpInputLeftAddon,
  MpIcon,
  MpSpinner,
} from "@mekari/pixel";

export default {
  name: "ModalWithScrollable",
  components: {
    MpText,
    MpModal,
    MpModalOverlay,
    MpModalContent,
    MpModalHeader,
    MpModalBody,
    MpModalCloseButton,
    MpModalFooter,
    MpButton,
    MpGrid,
    MpBox,
    MpFormControl,
    MpFlex,
    MpAutocomplete,
    MpInput,
    MpInputGroup,
    MpInputLeftAddon,
    MpIcon,
    MpSpinner,
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      templates: [
        {
          category: "Penjualan",
          datas: [
            {
              id: "a-1",
              type: "donut",
              title: "Template name 1",
              description:
                "Composition of balance due to receive based on Customeres",
              attrs: {
                w: 6,
                h: 2,
              },
            },
            {
              id: "a-2",
              type: "donut",
              title: "Template name 2",
              description: "Balance due from sales based on transaction date",
              attrs: {
                w: 6,
                h: 2,
              },
            },
            {
              id: "a-3",
              type: "donut",
              title: "Template name 3",
              description: "Balance due from sales based on transaction date",
              attrs: {
                w: 6,
                h: 2,
              },
            },
            {
              id: "a-4",
              type: "bar",
              title: "Template name 4",
              description: "Balance due from sales based on transaction date",
              attrs: {
                w: 6,
                h: 2,
              },
            },
            {
              id: "a-5",
              type: "bar",
              title: "Template name 5",
              description: "Balance due from sales based on transaction date",
              attrs: {
                w: 6,
                h: 2,
              },
            },
            {
              id: "a-6",
              type: "bar",
              title: "Template name 6",
              description: "Balance due from sales based on transaction date",
              attrs: {
                w: 6,
                h: 2,
              },
            },
          ],
        },
        {
          category: "Pembelian & Biaya",
          datas: [
            {
              id: "b-1",
              type: "number",
              title: "Template name 6",
              description:
                "Composition of balance due to receive based on Customeres",
              attrs: {
                w: 6,
                h: 1,
              },
            },
            {
              id: "b-2",
              type: "number",
              title: "Template name 7",
              description: "Balance due from sales based on transaction date",
              attrs: {
                w: 6,
                h: 1,
              },
            },
            {
              id: "b-3",
              type: "number",
              title: "Template name 8",
              description: "Open Invoice Balance",
              attrs: {
                w: 6,
                h: 1,
              },
            },
            {
              id: "b-4",
              type: "number",
              title: "Template name 9",
              description: "Open Invoice Balance",
              attrs: {
                w: 6,
                h: 1,
              },
            },
            {
              id: "b-5",
              type: "number",
              title: "Template name 10",
              description: "Open Invoice Balance",
              attrs: {
                w: 6,
                h: 1,
              },
            },
          ],
        },
      ],

      //
      showShadow: false,
      isLoading: false,
      search: "",
      selectedTemplate: null,
    };
  },
  mounted() {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  },
  methods: {
    handleClose: function () {
      this.$emit("close");
      this.selectedTemplate = null;
    },
    handleSelectTemplate(data) {
      this.selectedTemplate = data;
    },
    handleScroll(e) {
      if (e.target.scrollTop === 0) {
        this.showShadow = false;
        return;
      }

      this.showShadow = true;
    },
    handleAddWidget() {
      console.log(this.selectedTemplate);
      this.$emit("add-widget", this.selectedTemplate);
      this.handleClose();
    },
  },
};
</script>
