<template>
  <mp-box
    background-color="white"
    border="1px solid"
    border-radius="md"
    border-color="gray.100"
    padding="6"
    margin-bottom="6"
  >
    <mp-flex justify-content="space-between" margin-bottom="6">
      <mp-box>
        <mp-heading as="h2" font-size="xl">
          Salary structure detailed
        </mp-heading>
        <mp-text color="gray.600">
          Aggregated data salary range based on selected organizational unit
        </mp-text>
      </mp-box>
      <mp-flex gap="4" align-items="center">
        <mp-popover use-portal>
          <mp-popover-trigger>
            <mp-button variant="outline">
              <mp-icon name="download" variant="duotone" margin-right="2" />
              Download
            </mp-button>
          </mp-popover-trigger>
          <mp-popover-content
            max-width="32"
            bg="white"
            rounded="md"
            shadow="lg"
            border="1px solid"
            border-color="gray.400"
          >
            <mp-popover-list display="grid">
              <mp-popover-list-item>CSV</mp-popover-list-item>
              <mp-popover-list-item>XLSX</mp-popover-list-item>
              <mp-popover-list-item>PDF</mp-popover-list-item>
            </mp-popover-list>
          </mp-popover-content>
        </mp-popover>
      </mp-flex>
    </mp-flex>

    <mp-accordion allow-toggle allow-multiple :default-index="[0]">
      <mp-accordion-item 
        v-for="(item, index) in items" 
        :key="index" 
        border-bottom-width="0px!important"
      >
        <mp-accordion-header border-bottom="1px solid" border-color="gray.100">
          <mp-accordion-icon />
          <mp-box flex="1" text-align="left">
            {{ item.name }}
            <mp-badge variant="subtle" variant-color="blue" margin-left="1">
              Criteria 1
            </mp-badge>
          </mp-box>
        </mp-accordion-header>
        <mp-accordion-panel padding-y="0">
          <AccordionNestedLevel 
            v-if="item.child && item.child.length > 0" 
            :items="item.child" 
            :level="1"
          >
            <template #table="{ level }">
              <mp-table-container :margin-x="`${8 * level}px`" :width="`calc(100% - ${8 * level}px)!important`" :max-width="`calc(100% - ${8 * level}px)!important`" overflow="scroll">
                <mp-table-lite>
                  <mp-table-head-lite>
                    <mp-table-row-lite cursor="pointer">
                      <mp-table-cell-lite width="100px" min-width="150px" as="th">
                        Job level
                        <mp-icon name="sort-default" />
                      </mp-table-cell-lite>
                      <mp-table-cell-lite width="100px" min-width="100px" as="th">
                        Salary benchmark
                        <mp-icon name="sort-default" />
                      </mp-table-cell-lite>
                      <mp-table-cell-lite width="100px" min-width="100px" as="th">
                        Spread
                        <mp-icon name="sort-default" />
                      </mp-table-cell-lite>
                      <mp-table-cell-lite width="100px" min-width="100px" as="th">
                        Actual min. salary
                        <mp-icon name="sort-default" />
                      </mp-table-cell-lite>
                      <mp-table-cell-lite width="100px" min-width="100px" as="th">
                        Target min. salary (Rp)
                        <mp-icon name="sort-default" />
                      </mp-table-cell-lite>
                      <mp-table-cell-lite width="100px" min-width="100px" as="th">
                        Actual mid. salary
                        <mp-icon name="sort-default" />
                      </mp-table-cell-lite>
                      <mp-table-cell-lite width="100px" min-width="100px" as="th">
                        Target mid. salary (Rp)
                        <mp-icon name="sort-default" />
                      </mp-table-cell-lite>
                      <mp-table-cell-lite width="100px" min-width="100px" as="th">
                        Actual max. salary
                        <mp-icon name="sort-default" />
                      </mp-table-cell-lite>
                      <mp-table-cell-lite width="100px" min-width="100px" as="th">
                        Target max. salary (Rp)
                        <mp-icon name="sort-default" />
                      </mp-table-cell-lite>
                    </mp-table-row-lite>
                  </mp-table-head-lite>
                  <mp-table-body-lite>
                    <mp-table-row-lite v-for="(_, index) in 5" :key="index">
                      <mp-table-cell-lite as="td">
                        Head
                      </mp-table-cell-lite>
                      <mp-table-cell-lite text-align="right" as="td">
                        Rp15.000.000
                      </mp-table-cell-lite>
                      <mp-table-cell-lite text-align="right" as="td">
                        40%
                      </mp-table-cell-lite>
                      <mp-table-cell-lite text-align="right" background-color="green.50" as="td">
                        Rp16.000.000
                      </mp-table-cell-lite>
                      <mp-table-cell-lite text-align="right" background-color="green.50" as="td">
                        Rp17.000.000
                      </mp-table-cell-lite>
                      <mp-table-cell-lite text-align="right" background-color="orange.50" as="td">
                        Rp18.500.000
                      </mp-table-cell-lite>
                      <mp-table-cell-lite text-align="right" background-color="orange.50" as="td">
                        Rp19.000.000
                      </mp-table-cell-lite>
                      <mp-table-cell-lite text-align="right" background-color="red.50" as="td">
                        Rp20.000.000
                      </mp-table-cell-lite>
                      <mp-table-cell-lite text-align="right" background-color="red.50" as="td">
                        Rp21.000.000
                      </mp-table-cell-lite>
                    </mp-table-row-lite>
                  </mp-table-body-lite>
                </mp-table-lite>
              </mp-table-container>

              <mp-box :margin-left="`${8 * level}px`">
                <Pagination />
              </mp-box>
            </template>
          </AccordionNestedLevel>
        </mp-accordion-panel>
      </mp-accordion-item>
    </mp-accordion>
  </mp-box>
</template>

<script>
import {
  MpFlex,
  MpBox,
  MpBadge,
  MpHeading,
  MpText,
  MpIcon,
  MpButton,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
  MpTableContainer,
  MpTableLite,
  MpTableHeadLite,
  MpTableBodyLite,
  MpTableRowLite,
  MpTableCellLite,
  MpAccordion,
  MpAccordionItem,
  MpAccordionHeader,
  MpAccordionIcon,
  MpAccordionPanel,
} from "@mekari/pixel";
import AccordionNestedLevel from '../components/AccordionNestedLevel.vue'
import Pagination from '../components/Pagination.vue'

export default {
  name: "DetailChart4",
  components: {
    MpFlex,
    MpBox,
    MpBadge,
    MpHeading,
    MpText,
    MpIcon,
    MpButton,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
    MpTableContainer,
    MpTableLite,
    MpTableHeadLite,
    MpTableBodyLite,
    MpTableRowLite,
    MpTableCellLite,
    MpAccordion,
    MpAccordionItem,
    MpAccordionHeader,
    MpAccordionIcon,
    MpAccordionPanel,
    AccordionNestedLevel,
    Pagination,
  },
  data: function () {
    return {
      items: [
        {
          name: 'Jakarta',
          criteria: 'Criteria 1',
          child: [
            {
              name: 'Jakarta selatan',
              criteria: 'Criteria 2',
              child: [
                {
                  name: 'Customer experience',
                  criteria: 'Criteria 3',
                  child: [
                    {
                      name: 'Customer support',
                      criteria: 'Criteria 4',
                      // Add other object key for table data
                    },
                    {
                      name: 'Customer marketing',
                      criteria: 'Criteria 4',
                      // Add other object key for table data
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }
  },
};
</script>
