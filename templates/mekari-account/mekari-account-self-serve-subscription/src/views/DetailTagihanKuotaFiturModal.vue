<template>
  <mp-modal
    :is-open="isModalOpen"
    :on-close="() => onModalToggle(false)"
    scroll-behavior="inside"
  >
    <mp-modal-content max-width="684px">
      <mp-modal-header>
        <mp-flex gap="2">
          Info kuota & fitur
          <mp-icon
            name="info"
            size="sm"
            v-mp-tooltip="{
              label:
                'Fitur kuota dan add-ons di dalam info fitur keseluruhan adalah fitur yang sudah aktif',
              position: 'right',
            }"
          />
        </mp-flex>
      </mp-modal-header>
      <mp-modal-close-button @click="onModalToggle(false)" />
      <mp-modal-body>
        <mp-box w="284px" margin-bottom="4">
          <mp-segmented-control
            :value="check"
            :data="[
              { id: 'ezsCsI', label: 'Kuota', value: 'kuota' },
              { id: 'jjsCgt', label: 'Fitur', value: 'fitur' },
            ]"
            is-full-width
            @change="handleChange"
          />
        </mp-box>

        <mp-box v-if="check === 'kuota'">
          <mp-table-container width="full" max-width="full" overflow="scroll">
            <mp-table margin-bottom="4">
              <mp-table-head>
                <mp-table-row cursor="pointer">
                  <mp-table-cell as="th"> Nama </mp-table-cell>
                  <mp-table-cell as="th"> Dari paket </mp-table-cell>
                  <mp-table-cell as="th"> Tambahan </mp-table-cell>
                  <mp-table-cell as="th"> Total </mp-table-cell>
                </mp-table-row>
              </mp-table-head>
              <mp-table-body>
                <mp-table-row>
                  <mp-table-cell as="td">Employee Database</mp-table-cell>
                  <mp-table-cell as="td">100</mp-table-cell>
                  <mp-table-cell as="td">0</mp-table-cell>
                  <mp-table-cell as="td">101</mp-table-cell>
                </mp-table-row>
                <mp-table-row>
                  <mp-table-cell as="td">Custom Fields</mp-table-cell>
                  <mp-table-cell as="td">5</mp-table-cell>
                  <mp-table-cell as="td">0</mp-table-cell>
                  <mp-table-cell as="td">5</mp-table-cell>
                </mp-table-row>
                <mp-table-row>
                  <mp-table-cell as="td">Time Off Administration</mp-table-cell>
                  <mp-table-cell as="td">8</mp-table-cell>
                  <mp-table-cell as="td">0</mp-table-cell>
                  <mp-table-cell as="td">8</mp-table-cell>
                </mp-table-row>
                <mp-table-row>
                  <mp-table-cell as="td">Multi Branch</mp-table-cell>
                  <mp-table-cell as="td">5</mp-table-cell>
                  <mp-table-cell as="td">0</mp-table-cell>
                  <mp-table-cell as="td">5</mp-table-cell>
                </mp-table-row>
              </mp-table-body>
            </mp-table>
          </mp-table-container>
        </mp-box>

        <mp-box v-if="check === 'fitur'">
          <mp-accordion allow-toggle allow-multiple :default-index="[0, 1]">
            <mp-accordion-item id="ekwAo">
              <mp-accordion-header>
                <mp-box flex="1" text-align="left">
                  <mp-heading as="h2" font-size="xl"> Fitur utama </mp-heading>
                  <mp-text font-size="sm" color="gray.600"
                    >Semua fitur di paket langganan Anda.</mp-text
                  >
                </mp-box>
                <mp-accordion-icon />
              </mp-accordion-header>
              <mp-accordion-panel padding-right="10">
                <mp-flex gap="4" direction="column">
                  <mp-flex gap="4">
                    <mp-icon name="done" variant="duotone" />
                    <mp-text>Payroll & THR Calculation</mp-text>
                  </mp-flex>
                  <mp-flex gap="4">
                    <mp-icon name="done" variant="duotone" />
                    <mp-text>Tax & BPJS Calculation</mp-text>
                  </mp-flex>
                  <mp-flex gap="4">
                    <mp-icon name="done" variant="duotone" />
                    <mp-text>Payroll Disbursement</mp-text>
                  </mp-flex>
                  <mp-flex gap="4">
                    <mp-icon name="done" variant="duotone" />
                    <mp-text>Loan Administration</mp-text>
                  </mp-flex>
                  <mp-flex gap="4">
                    <mp-icon name="done" variant="duotone" />
                    <mp-text>Overtime Administration</mp-text>
                  </mp-flex>
                  <mp-flex gap="4">
                    <mp-icon name="done" variant="duotone" />
                    <mp-text>Live Attendance</mp-text>
                  </mp-flex>
                  <mp-flex gap="4">
                    <mp-icon name="done" variant="duotone" />
                    <mp-text>Mobile Attendance</mp-text>
                  </mp-flex>
                  <mp-flex gap="4">
                    <mp-icon name="done" variant="duotone" />
                    <mp-text>Employee Database</mp-text>
                  </mp-flex>
                  <mp-flex gap="4">
                    <mp-icon name="done" variant="duotone" />
                    <mp-text>Multi-level Approval</mp-text>
                  </mp-flex>
                  <mp-flex gap="4">
                    <mp-icon name="done" variant="duotone" />
                    <mp-text>Activity Tracking</mp-text>
                  </mp-flex>
                  <mp-flex gap="4">
                    <mp-icon name="done" variant="duotone" />
                    <mp-text>Organization Chart</mp-text>
                  </mp-flex>
                  <mp-flex gap="4">
                    <mp-icon name="done" variant="duotone" />
                    <mp-text>Custom Roles</mp-text>
                  </mp-flex>
                  <mp-flex gap="4">
                    <mp-icon name="done" variant="duotone" />
                    <mp-text>Employee Self Service</mp-text>
                  </mp-flex>
                  <mp-flex gap="4">
                    <mp-icon name="done" variant="duotone" />
                    <mp-text>Early Wage Access</mp-text>
                  </mp-flex>
                  <mp-flex gap="4">
                    <mp-icon name="done" variant="duotone" />
                    <mp-text>Mekari Flex</mp-text>
                  </mp-flex>
                  <mp-flex gap="4">
                    <mp-icon name="done" variant="duotone" />
                    <mp-text>Talenta Insights</mp-text>
                  </mp-flex>
                </mp-flex>
              </mp-accordion-panel>
            </mp-accordion-item>
            <mp-accordion-item id="IXbuS">
              <mp-accordion-header>
                <mp-box flex="1" text-align="left">
                  <mp-heading as="h2" font-size="xl">
                    Fitur tambahan
                  </mp-heading>
                  <mp-text font-size="sm" color="gray.600"
                    >Fitur-fitur tambahan yang Anda miliki, di luar paket
                    langganan saat ini.</mp-text
                  >
                </mp-box>
                <mp-accordion-icon />
              </mp-accordion-header>
              <mp-accordion-panel padding-right="10">
                <mp-flex gap="4" direction="column">
                  <mp-flex gap="4">
                    <mp-icon name="done" variant="duotone" />
                    <mp-text>Talenta Form+</mp-text>
                  </mp-flex>
                  <mp-flex gap="4">
                    <mp-icon name="done" variant="duotone" />
                    <mp-text>Performance Management</mp-text>
                  </mp-flex>
                  <mp-flex gap="4">
                    <mp-icon name="done" variant="duotone" />
                    <mp-text>Individual Development Plan</mp-text>
                  </mp-flex>
                  <mp-flex gap="4">
                    <mp-icon name="done" variant="duotone" />
                    <mp-text>Custom Dashboard</mp-text>
                  </mp-flex>
                  <mp-flex gap="4">
                    <mp-icon name="done" variant="duotone" />
                    <mp-text>Touchless Portal</mp-text>
                  </mp-flex>
                </mp-flex>
              </mp-accordion-panel>
            </mp-accordion-item>
          </mp-accordion>
        </mp-box>
      </mp-modal-body>
      <mp-modal-footer>
        <mp-button @click="onModalToggle(false)"> Tutup </mp-button>
      </mp-modal-footer>
    </mp-modal-content>
    <mp-modal-overlay />
  </mp-modal>
</template>

<script>
import {
  MpFlex,
  MpBox,
  MpIcon,
  MpHeading,
  MpText,
  MpButton,
  MpSegmentedControl,
  MpModal,
  MpModalOverlay,
  MpModalContent,
  MpModalHeader,
  MpModalBody,
  MpModalFooter,
  MpModalCloseButton,
  MpTableContainer,
  MpTable,
  MpTableHead,
  MpTableBody,
  MpTableRow,
  MpTableCell,
  MpAccordion,
  MpAccordionItem,
  MpAccordionHeader,
  MpAccordionIcon,
  MpAccordionPanel,
} from "@mekari/pixel";

export default {
  name: "DetailTagihanKuotaFiturModal",
  components: {
    MpFlex,
    MpBox,
    MpIcon,
    MpHeading,
    MpText,
    MpButton,
    MpSegmentedControl,
    MpModal,
    MpModalOverlay,
    MpModalContent,
    MpModalHeader,
    MpModalBody,
    MpModalFooter,
    MpModalCloseButton,
    MpTableContainer,
    MpTable,
    MpTableHead,
    MpTableBody,
    MpTableRow,
    MpTableCell,
    MpAccordion,
    MpAccordionItem,
    MpAccordionHeader,
    MpAccordionIcon,
    MpAccordionPanel,
  },
  props: {
    isModalOpen: [Boolean],
    onModalToggle: [Function],
  },
  data: function () {
    return {
      check: "kuota",
    };
  },
  methods: {
    handleChange: function (value) {
      this.check = value;
    },
  },
};
</script>