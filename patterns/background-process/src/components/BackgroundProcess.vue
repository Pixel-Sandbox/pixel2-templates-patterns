<template>
  <mp-box width="545px">
    <mp-accordion allow-toggle @change="handleChange">
      <mp-accordion-item
        border="1px solid"
        border-color="gray.100"
        rounded="md"
        shadow="lg"
      >
        <mp-accordion-header
          background="background"
          rounded-top="md"
          :rounded-bottom="isAccordionOpen ? 'none' : 'md'"
        >
          <mp-flex width="full" justify="space-between" wrap="no-wrap" px="4">
            <mp-text font-weight="semibold">
              4 process in the background
            </mp-text>
            <mp-icon
              :name="isAccordionOpen ? 'chevrons-up' : 'chevrons-down'"
              color="dark"
            />
          </mp-flex>
        </mp-accordion-header>
        <mp-accordion-panel background="white" py="0" rounded-bottom="md">
          <mp-flex
            v-for="(item, index) in backgroundData"
            :key="item.desc"
            width="full"
            align-items="center"
            gap="4"
            px="4"
            py="3"
            :border-bottom="
              index === backgroundData.length - 1 ? 'none' : '1px solid'
            "
            border-color="gray.100"
          >
            <mp-progress
              :value="item.progress"
              color="blue"
              variant="circular"
            />
            <mp-flex width="full" direction="column">
              <mp-text font-weight="semibold" mb="0.5" line-height="md">{{
                item.title
              }}</mp-text>
              <mp-text color="gray.400" line-height="1sm">{{
                item.desc
              }}</mp-text>
            </mp-flex>
            <mp-text as="span" color="gray.600"> {{ item.progress }}% </mp-text>
          </mp-flex>
        </mp-accordion-panel>
      </mp-accordion-item>
    </mp-accordion>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpAccordion,
  MpAccordionItem,
  MpAccordionHeader,
  MpAccordionPanel,
  MpText,
  MpProgress,
  MpIcon,
} from "@mekari/pixel";

export default {
  name: "BackgroundProcess",
  components: {
    MpBox,
    MpFlex,
    MpAccordion,
    MpAccordionItem,
    MpAccordionHeader,
    MpAccordionPanel,
    MpText,
    MpProgress,
    MpIcon,
  },
  data() {
    return {
      isAccordionOpen: true,
      backgroundData: [
        {
          title: "Exporting data scheduler",
          desc: "12231318291",
          progress: 94,
        },
        {
          title: "Exporting attendances",
          desc: "14431218291",
          progress: 54,
        },
        {
          title: "Exporting employement data",
          desc: "78951218291",
          progress: 23,
        },
        {
          title: "Exporting time off",
          desc: "54321218291",
          progress: 35,
        },
      ],
    };
  },
  methods: {
    handleChange(val) {
      if (val === 0) {
        this.isAccordionOpen = true;
      } else {
        this.isAccordionOpen = false;
      }
    },
  },
};
</script>
