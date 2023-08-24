<template>
  <mp-box
    id="scroller"
    d="grid"
    width="full"
    height="calc(100vh - 296px)"
    overflow="auto"
    padding-x="186px"
  >
    <mp-box d="flex" align-self="flex-end">
      <mp-box flex="1 0 0%">
        <mp-heading as="h2" font-size="xl" mb="2">
          Ask Airene about
          <mp-box
            bg="#D3CBFF"
            d="inline-block"
            px="2"
            py="0.5"
            border-radius="md"
            as="h2"
            font-size="xl"
          >
            employee-related topics
          </mp-box>
        </mp-heading>
        <mp-text font-size="sm" color="gray.600" line-height="20px">
          Airene uses the power of AI to provide you with insights, answer and
          more. <br />
          For instance, you might ask questions such as What is our turnover
          rate? or How many employees were hired in the past month? <br />
          Alternatively, you press `space` for our suggested questions.
          <br />
          <br />
          Airene supports English and Bahasa Indonesia, but for better results,
          ask your question in English.
        </mp-text>

        <mp-text mt="3" mb="6" is-link @click.native="handleToggle(true)">
          Change topic
        </mp-text>

        <hr />

        <mp-text color="gray.400" text-align="center" mt="6" mb="4">
          Today, 24 Apr 2023
        </mp-text>

        <mp-box mb="4">
          <mp-flex gap="2" mb="1">
            <mp-text color="dark" font-weight="semibold">
              Rizal Chandra
            </mp-text>
            <!-- <mp-text color="gray.600">09:48 AM</mp-text> -->
          </mp-flex>
          <mp-box bg="#F8F7F3" p="4" border-radius="md" width="fit-content">
            <mp-text color="dark">
              What is our company's current employee turnover rate?
            </mp-text>
          </mp-box>
        </mp-box>
        <mp-box mb="4" role="group">
          <mp-flex justify-content="space-between">
            <mp-flex gap="2" mb="1">
              <mp-text color="dark" font-weight="semibold"> Airene </mp-text>
              <!-- <mp-text color="gray.600">09:51 AM</mp-text> -->
            </mp-flex>
            <mp-flex gap="2">
              <mp-icon
                name="like"
                size="sm"
                cursor="pointer"
                opacity="0"
                :_groupHover="{
                  opacity: '1',
                }"
                @click.native="onFeedbackModalToggle(true)"
              />
              <mp-icon
                name="dislike"
                size="sm"
                cursor="pointer"
                opacity="0"
                :_groupHover="{
                  opacity: '1',
                }"
                @click.native="onFeedbackModalToggle(true)"
              />
            </mp-flex>
          </mp-flex>
          <mp-box
            bg="#F8F9FB"
            p="4"
            border-top-left-radius="md"
            border-top-right-radius="md"
          >
            <mp-text color="dark">
              Based on our company's data, the current employee turnover rate is
              2.5% per month, which is slightly higher than the industry average
              of 2% per month. However, it's important to keep in mind that
              turnover rates are not always a negative indicator and can
              sometimes reflect healthy changes in the workforce. <br />
              Additionally, the average employee stays with the company for
              about 5.2 years.
            </mp-text>
          </mp-box>
          <mp-flex
            justify-content="space-between"
            align-items="center"
            bg="#F1F4F9"
            p="4"
            border-bottom-left-radius="md"
            border-bottom-right-radius="md"
          >
            <mp-text is-link>View headcounts breakdown by organisation</mp-text>
            <mp-text font-size="sm">1 of 10</mp-text>
          </mp-flex>
        </mp-box>
        <mp-box mb="4">
          <mp-flex gap="2" mb="1">
            <mp-text color="dark" font-weight="semibold">
              Rizal Chandra
            </mp-text>
            <!-- <mp-text color="gray.600">09:52 AM</mp-text> -->
          </mp-flex>
          <mp-box bg="#F8F7F3" p="4" border-radius="md" width="fit-content">
            <mp-text color="dark"> Suggest me place for fancy dinner </mp-text>
          </mp-box>
        </mp-box>
        <mp-box role="group">
          <mp-flex justify-content="space-between">
            <mp-flex gap="2" mb="1">
              <mp-text color="dark" font-weight="semibold"> Airene </mp-text>
              <!-- <mp-text color="gray.600">09:53 AM</mp-text> -->
            </mp-flex>
            <mp-flex gap="2">
              <mp-icon
                name="like"
                size="sm"
                cursor="pointer"
                opacity="0"
                :_groupHover="{
                  opacity: '1',
                }"
              />
              <mp-icon
                name="dislike"
                size="sm"
                color="blue.700"
                cursor="pointer"
                opacity="0"
                :_groupHover="{
                  opacity: '1',
                }"
              />
            </mp-flex>
          </mp-flex>
          <mp-box
            bg="#F8F9FB"
            p="4"
            border-top-left-radius="md"
            border-top-right-radius="md"
          >
            <mp-text color="dark">
              I'm sorry, but I cannot provide an answer to your request as it
              seems unrelated to the topic.
            </mp-text>
          </mp-box>
          <mp-flex
            justify-content="space-between"
            align-items="center"
            bg="#F1F4F9"
            p="4"
            border-bottom-left-radius="md"
            border-bottom-right-radius="md"
          >
            <mp-text color="gray.600">
              Press `space` to try our suggestions
            </mp-text>
            <mp-text font-size="sm">2 of 10</mp-text>
          </mp-flex>
        </mp-box>
      </mp-box>
    </mp-box>
    <mp-box
      position="absolute"
      bottom="0"
      width="calc(100% - 372px)"
      bg="white"
      py="6"
    >
      <mp-box
        @mouseover="isOutsidePopover = false"
        @mouseleave="isOutsidePopover = true"
      >
        <mp-popover
          :is-open="isPopoverOpen"
          initial-focus-ref="#filter-search"
          is-manual
        >
          <mp-popover-trigger>
            <mp-form-control control-id="smartassist">
              <mp-input-group>
                <mp-input-left-addon :with-background="false">
                  <IconAsk :is-animate="true" style="cursor: pointer" />
                </mp-input-left-addon>
                <mp-input
                  id="filter-search"
                  placeholder="Ask a question regarding employees or press `space` for suggestions"
                  autocomplete="off"
                  @focus="handleFocus"
                  @blur="handleClickOutside"
                  py="3"
                  h="12"
                />
                <mp-input-right-addon :with-background="false">
                  <mp-icon name="sent" size="sm" cursor="pointer" />
                </mp-input-right-addon>
              </mp-input-group>
              <mp-form-help-text>
                <mp-flex justify-content="space-between">
                  <mp-box>
                    Airene responses can be inaccurate or misleading.
                    <mp-text display="inline-block" font-size="sm" is-link>
                      Learn more
                    </mp-text>
                  </mp-box>
                  <mp-text display="inline-block" font-size="sm" is-link>
                    Clear chat
                  </mp-text>
                </mp-flex>
              </mp-form-help-text>
            </mp-form-control>
          </mp-popover-trigger>
          <mp-popover-content
            max-width="460px"
            background-color="white"
            border="1px solid"
            border-color="gray.400"
            border-radius="md"
            box-shadow="lg"
            @click.native="handleForceInputFocus"
          >
            <mp-popover-list>
              <mp-box width="full" px="3" py="2">
                <mp-text color="gray.600" text-align="left" font-size="sm">
                  SUGGESTED QUESTIONS
                </mp-text>
              </mp-box>
              <mp-popover-list-item>
                What is our company's current employee turnover rate?
              </mp-popover-list-item>
              <mp-popover-list-item>
                What's our current headcount and recent changes?
              </mp-popover-list-item>
              <mp-popover-list-item>
                Headcount breakdown by organisations
              </mp-popover-list-item>
              <mp-popover-list-item>
                What is the process for terminating an employee?
              </mp-popover-list-item>
              <mp-popover-list-item>
                How many employees have requested time off in the next month?
              </mp-popover-list-item>
            </mp-popover-list>
          </mp-popover-content>
        </mp-popover>
      </mp-box>
    </mp-box>

    <SmartAssistFeedbackModal
      :isModalOpen="isFeedbackModalOpen"
      :onModalToggle="onFeedbackModalToggle"
      :onModalNext="onFeedbackSuccessModalToggle"
    />
    <SmartAssistFeedbackSuccessModal
      :isModalOpen="isFeedbackSuccessModalOpen"
      :onModalToggle="onFeedbackSuccessModalToggle"
    />
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpText,
  MpHeading,
  MpIcon,
  MpInput,
  MpInputGroup,
  MpInputLeftAddon,
  MpInputRightAddon,
  MpFormControl,
  MpFormHelpText,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
} from "@mekari/pixel";

import IconAsk from "./IconAsk";
import SmartAssistFeedbackModal from "./SmartAssistFeedbackModal";
import SmartAssistFeedbackSuccessModal from "./SmartAssistFeedbackSuccessModal";

export default {
  name: "SmartAssistChat",
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpHeading,
    MpIcon,
    MpInput,
    MpInputGroup,
    MpInputLeftAddon,
    MpInputRightAddon,
    MpFormControl,
    MpFormHelpText,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
    IconAsk,
    SmartAssistFeedbackModal,
    SmartAssistFeedbackSuccessModal,
  },
  props: {
    handleToggle: [Function],
  },
  data() {
    return {
      isPopoverOpen: false,
      isPopoverFocused: false,
      isOutsidePopover: true,
      isFeedbackModalOpen: false,
      isFeedbackSuccessModalOpen: false,
      isCloseModalOpen: false,
    };
  },
  mounted() {
    this.scrollToBottom();
  },
  methods: {
    scrollToBottom() {
      var el = document.getElementById("scroller");
      el.scrollTop = el.scrollHeight;
    },
    onFeedbackModalToggle(data) {
      this.isFeedbackModalOpen = data;
    },
    onFeedbackSuccessModalToggle(data) {
      this.isFeedbackModalOpen = false;
      this.isFeedbackSuccessModalOpen = data;
    },
    // popover
    handleFocus() {
      this.isPopoverFocused = true;
      if (!this.isPopoverOpen) this.handleOpenPopover();
      if (this.isPopoverOpen) this.handleForceInputFocus();
    },
    handleForceInputFocus() {
      if (this.isPopoverFocused) {
        const input = document.getElementById("filter-search");
        input.focus();
      }
    },
    handleOpenPopover() {
      this.isPopoverOpen = true;
    },
    handleClosePopover() {
      this.isPopoverFocused = false;
      this.isPopoverOpen = false;
    },
    handleClickOutside() {
      if (this.isOutsidePopover) {
        this.handleClosePopover();
        this.isOutsidePopover = false;
      }
    },
    handleOpen(e) {
      this.currentopen = true;
      this.$emit("open", e);
    },
    handleClose(e) {
      this.currentopen = false;
      this.$emit("close", e);
    },
  },
};
</script>
