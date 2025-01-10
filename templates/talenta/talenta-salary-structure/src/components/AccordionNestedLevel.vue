<template>
  <mp-accordion allow-toggle allow-multiple :default-index="[0, 1]">
    <mp-accordion-item 
      v-for="(item, index) in items" 
      :key="index" 
      :border-bottom-width="'0px!important'"
    >
      <mp-accordion-header 
        :border-bottom="isLastLevel(item) ? '0px solid' : '1px solid'" 
        border-color="gray.100" 
        :padding-left="`${8 * level}px`"
      >
        <mp-accordion-icon />
        <mp-box flex="1" text-align="left">
          {{ item.name }}
          <mp-badge variant="subtle" variant-color="blue" margin-left="1">
            Criteria {{ level + 1 }}
          </mp-badge>
        </mp-box>
      </mp-accordion-header>
      <mp-accordion-panel padding-y="0" :border-bottom="isLastLevel(item) && '1px solid'" border-color="gray.100" padding-bottom="2"> 
        <AccordionNestedLevel 
          v-if="item.child && item.child.length > 0" 
          :items="item.child" 
          :level="level + 1"
        >
          <template #table="{ level, items }">
            <slot name="table" :level="level" :items="items" />
          </template>
        </AccordionNestedLevel>
        <slot name="table" v-else :level="level" :items="items" />
      </mp-accordion-panel>
    </mp-accordion-item>
  </mp-accordion>
</template>

<script>
import {
  MpBox,
  MpBadge,
  MpAccordion,
  MpAccordionItem,
  MpAccordionHeader,
  MpAccordionIcon,
  MpAccordionPanel,
} from '@mekari/pixel'

export default {
  name: 'AccordionNestedLevel',
  components: {
    MpBox,
    MpBadge,
    MpAccordion,
    MpAccordionItem,
    MpAccordionHeader,
    MpAccordionIcon,
    MpAccordionPanel,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
    level: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    isLastLevel(item) {
      return !item.child || item.child.length === 0
    },
  },
}
</script>
