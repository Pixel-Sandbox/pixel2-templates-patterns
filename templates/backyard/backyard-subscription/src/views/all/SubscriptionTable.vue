<template>
  <mp-box>
    <mp-table-container width="full" max-width="full" overflow="scroll">
      <mp-table>
        <mp-table-head>
          <mp-table-row cursor="pointer">
            <mp-table-cell as="th">
              Subscription ID
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Company
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Application
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              Active date
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th">
              End date
              <mp-icon name="sort-default" />
            </mp-table-cell>
            <mp-table-cell as="th" colspan="2">
              Status
              <mp-icon name="sort-default" />
            </mp-table-cell>
          </mp-table-row>
        </mp-table-head>
        <mp-table-body>
          <mp-table-row>
            <mp-table-cell as="td">
              <mp-text as="a" is-link>MS-22070000004</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td">
              <mp-text as="p">PT. Agro Tekno</mp-text>
              <mp-text as="p" color="gray.600" font-size="sm"> 192504 </mp-text>
            </mp-table-cell>
            <mp-table-cell as="td">
              <mp-text as="p">Jurnal</mp-text>
              <mp-text as="p" color="gray.600" font-size="sm">
                Enterprise Plus
              </mp-text>
            </mp-table-cell>
            <mp-table-cell as="td">1/1/2023</mp-table-cell>
            <mp-table-cell as="td">1/1/2024</mp-table-cell>
            <mp-table-cell as="td">
              <mp-badge variant="subtle" variant-color="gray">
                Inactive
              </mp-badge>
            </mp-table-cell>
            <mp-table-cell as="td" text-align="right">
              <mp-button
                as="router-link"
                to="/view-subscription"
                variant="outline"
              >
                View
              </mp-button>
            </mp-table-cell>
          </mp-table-row>
          <mp-table-row>
            <mp-table-cell as="td">
              <mp-text as="a" is-link>MS-22070000003</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td">
              <mp-text as="p">PT. Flora Kultura</mp-text>
              <mp-text as="p" color="gray.600" font-size="sm"> 192503 </mp-text>
            </mp-table-cell>
            <mp-table-cell as="td">
              <mp-text as="p">Jurnal</mp-text>
              <mp-text as="p" color="gray.600" font-size="sm">
                Trial Enterprise Plus
              </mp-text>
            </mp-table-cell>
            <mp-table-cell as="td">1/1/2023</mp-table-cell>
            <mp-table-cell as="td">1/1/2024</mp-table-cell>
            <mp-table-cell as="td">
              <mp-badge variant="subtle" variant-color="green">
                Active
              </mp-badge>
            </mp-table-cell>
            <mp-table-cell as="td" text-align="right">
              <mp-button variant="outline">View</mp-button>
            </mp-table-cell>
          </mp-table-row>
          <mp-table-row>
            <mp-table-cell as="td">
              <mp-text as="a" is-link>MS-22070000002</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td">
              <mp-text as="p">PT. Alam Nusantara</mp-text>
              <mp-text as="p" color="gray.600" font-size="sm"> 192502 </mp-text>
            </mp-table-cell>
            <mp-table-cell as="td">
              <mp-text as="p">Talenta</mp-text>
              <mp-text as="p" color="gray.600" font-size="sm">
                Enterprise
              </mp-text>
            </mp-table-cell>
            <mp-table-cell as="td">1/1/2021</mp-table-cell>
            <mp-table-cell as="td">1/1/2022</mp-table-cell>
            <mp-table-cell as="td">
              <mp-badge variant="subtle" variant-color="orange">
                Locked
              </mp-badge>
            </mp-table-cell>
            <mp-table-cell as="td" text-align="right">
              <mp-button variant="outline">View</mp-button>
            </mp-table-cell>
          </mp-table-row>
          <mp-table-row>
            <mp-table-cell as="td">
              <mp-text as="a" is-link>MS-22070000001</mp-text>
            </mp-table-cell>
            <mp-table-cell as="td">
              <mp-text as="p">PT. Inovasi Semesta</mp-text>
              <mp-text as="p" color="gray.600" font-size="sm"> 192501 </mp-text>
            </mp-table-cell>
            <mp-table-cell as="td">
              <mp-text as="p">Talenta</mp-text>
              <mp-text as="p" color="gray.600" font-size="sm">
                Starter
              </mp-text>
            </mp-table-cell>
            <mp-table-cell as="td">1/1/2019</mp-table-cell>
            <mp-table-cell as="td">1/1/2020</mp-table-cell>
            <mp-table-cell as="td">
              <mp-badge variant="subtle" variant-color="red"> Voided </mp-badge>
            </mp-table-cell>
            <mp-table-cell as="td" text-align="right">
              <mp-button variant="outline">View</mp-button>
            </mp-table-cell>
          </mp-table-row>
        </mp-table-body>
      </mp-table>
    </mp-table-container>

    <Pagination />
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpIcon,
  MpButton,
  MpBadge,
  MpText,
  MpTableContainer,
  MpTable,
  MpTableHead,
  MpTableBody,
  MpTableRow,
  MpTableCell,
} from "@mekari/pixel";
import Pagination from "../../components/Pagination";

export default {
  name: "SubscriptionTable",
  components: {
    MpBox,
    MpIcon,
    MpButton,
    MpBadge,
    MpText,
    MpTableContainer,
    MpTable,
    MpTableHead,
    MpTableBody,
    MpTableRow,
    MpTableCell,
    Pagination,
  },
};
</script>