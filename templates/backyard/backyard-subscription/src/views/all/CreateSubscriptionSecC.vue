<template>
  <mp-box>
    <mp-heading
      as="h3"
      color="dark"
      font-size="lg"
      margin-top="4"
      margin-bottom="2"
    >
      Subscription package
    </mp-heading>
    <mp-flex>
      <mp-table-container width="full" height="full" overflow="scroll">
        <mp-table>
          <mp-table-head>
            <mp-table-row>
              <mp-table-cell
                as="th"
                scope="col"
                width="200px"
                min-width="200px"
              >
                Application
              </mp-table-cell>
              <mp-table-cell
                as="th"
                scope="col"
                width="200px"
                min-width="200px"
              >
                Service
              </mp-table-cell>
              <mp-table-cell
                as="th"
                scope="col"
                width="200px"
                min-width="200px"
              >
                Description
              </mp-table-cell>
              <mp-table-cell as="th" scope="col">Type</mp-table-cell>
              <mp-table-cell as="th" scope="col" width="80px" min-width="80px">
                Qty
              </mp-table-cell>
              <mp-table-cell as="th" scope="col" text-align="right">
                Unit price
              </mp-table-cell>
              <mp-table-cell as="th" scope="col">Duration</mp-table-cell>
              <mp-table-cell
                as="th"
                scope="col"
                width="160px"
                min-width="160px"
              >
                Discount
              </mp-table-cell>
              <mp-table-cell as="th" scope="col" text-align="right">
                Total price
              </mp-table-cell>
              <mp-table-cell as="th" scope="col" />
            </mp-table-row>
          </mp-table-head>
          <mp-table-body>
            <mp-table-row>
              <mp-table-cell as="td" scope="row">
                <mp-select value="jurnal">
                  <option value="jurnal">Jurnal</option>
                </mp-select>
              </mp-table-cell>
              <mp-table-cell as="td" scope="row">
                <mp-select value="enterprise">
                  <option value="enterprise">Enterprise</option>
                </mp-select>
              </mp-table-cell>
              <mp-table-cell as="td" scope="row">
                <mp-textarea height="38px" min-height="38px" />
              </mp-table-cell>
              <mp-table-cell as="td" scope="row">
                <mp-text>Main package</mp-text>
              </mp-table-cell>
              <mp-table-cell as="td" scope="row">
                <mp-input type="number" />
              </mp-table-cell>
              <mp-table-cell as="td" scope="row">
                <mp-text text-align="right">Rp539.639,63</mp-text>
              </mp-table-cell>
              <mp-table-cell as="td" scope="row">
                <mp-text>12 month</mp-text>
              </mp-table-cell>
              <mp-table-cell as="td" scope="row">
                <mp-input-group>
                  <mp-input type="number" />
                  <mp-input-right-addon>
                    <mp-text font-weight="bold" padding-x="3">%</mp-text>
                  </mp-input-right-addon>
                </mp-input-group>
              </mp-table-cell>
              <mp-table-cell as="td" scope="row">
                <mp-text text-align="right">Rp6.475.675,56</mp-text>
              </mp-table-cell>
              <mp-table-cell as="td" scope="row">
                <mp-flex gap="4" align-items="center">
                  <mp-button-icon
                    name="doc"
                    size="md"
                    variant="duotone"
                    @click="onDetailModalToggle(true)"
                  />
                  <mp-icon name="minus-circular" />
                </mp-flex>
              </mp-table-cell>
            </mp-table-row>
            <mp-table-row>
              <mp-table-cell as="td" scope="row">
                <mp-select value="jurnal">
                  <option value="jurnal">Jurnal</option>
                </mp-select>
              </mp-table-cell>
              <mp-table-cell as="td" scope="row">
                <mp-select value="kuota-tambahan">
                  <option value="kuota-tambahan">E+ Feature A</option>
                </mp-select>
              </mp-table-cell>
              <mp-table-cell as="td" scope="row">
                <mp-textarea height="38px" min-height="38px" />
              </mp-table-cell>
              <mp-table-cell as="td" scope="row">
                <mp-text>Add ons</mp-text>
              </mp-table-cell>
              <mp-table-cell as="td" scope="row">
                <mp-input type="number" />
              </mp-table-cell>
              <mp-table-cell as="td" scope="row">
                <mp-text text-align="right">Rp53.153,15</mp-text>
              </mp-table-cell>
              <mp-table-cell as="td" scope="row">
                <mp-text>12 month</mp-text>
              </mp-table-cell>
              <mp-table-cell as="td" scope="row">
                <mp-input-group>
                  <mp-input type="number" />
                  <mp-input-right-addon>
                    <mp-text font-weight="bold" padding-x="3">%</mp-text>
                  </mp-input-right-addon>
                </mp-input-group>
              </mp-table-cell>
              <mp-table-cell as="td" scope="row">
                <mp-text text-align="right">Rp637.621,80</mp-text>
              </mp-table-cell>
              <mp-table-cell as="td" scope="row">
                <mp-flex gap="4" align-items="center">
                  <mp-button-icon
                    name="doc"
                    size="md"
                    variant="duotone"
                    @click="onDetailModalToggle(true)"
                  />
                  <mp-icon name="minus-circular" />
                </mp-flex>
              </mp-table-cell>
            </mp-table-row>
          </mp-table-body>
        </mp-table>
      </mp-table-container>
    </mp-flex>
    <mp-button variant="outline" margin-y="5">
      <mp-icon name="add-circular" variant="duotone" margin-right="2" />
      Add package
    </mp-button>

    <CreateSubscriptionDetailModal
      :isModalOpen="isDetailModalOpen"
      :onModalToggle="onDetailModalToggle"
    />
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpHeading,
  MpText,
  MpIcon,
  MpButton,
  MpButtonIcon,
  MpSelect,
  MpTextarea,
  MpInput,
  MpInputGroup,
  MpInputRightAddon,
  MpTableContainer,
  MpTable,
  MpTableHead,
  MpTableBody,
  MpTableRow,
  MpTableCell,
} from "@mekari/pixel";
import CreateSubscriptionDetailModal from "./CreateSubscriptionDetailModal";

export default {
  name: "CreateSubscriptionSecC",
  components: {
    MpBox,
    MpFlex,
    MpHeading,
    MpText,
    MpIcon,
    MpInput,
    MpSelect,
    MpTextarea,
    MpButton,
    MpButtonIcon,
    MpInputGroup,
    MpInputRightAddon,
    MpTableContainer,
    MpTable,
    MpTableHead,
    MpTableBody,
    MpTableRow,
    MpTableCell,
    CreateSubscriptionDetailModal,
  },
  data: function () {
    return {
      billingDate: "",
      activeDate: "",
      endDate: "",
      isDetailModalOpen: false,
    };
  },
  methods: {
    onDetailModalToggle: function (data) {
      this.isDetailModalOpen = data;
    },
  },
};
</script>