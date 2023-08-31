<template>
  <mp-box>
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 60px)">
      <Sidebar default-is-toggle is-custom />
      <mp-box
        as="section"
        data-id="content"
        width="100%"
        height="calc(100vh - 60px)"
        background-color="background"
        overflow-y="hidden"
      >
        <mp-flex
          justify="space-between"
          align-items="center"
          :padding-x="['4', '6']"
          :display="['inline-block', 'flex']"
          padding-y="1.063rem"
        >
          <mp-flex v-if="isInlineEdit">
            <mp-flex gap="2" align-items="flex-start">
              <mp-form-control control-id="title">
                <mp-input v-model="title" width="416px" />
              </mp-form-control>
              <mp-box>
                <mp-button-icon
                  v-mp-tooltip="'Cancel'"
                  name="close"
                  size="md"
                  @click="setInlineToggle(false)"
                />
              </mp-box>
              <mp-box>
                <mp-button-icon
                  v-mp-tooltip="'Save'"
                  name="check"
                  size="md"
                  @click="setInlineToggle(false)"
                />
              </mp-box>
            </mp-flex>
          </mp-flex>

          <mp-box v-else>
            <mp-flex gap="2" align-items="center">
              <mp-heading as="h1" font-size="2xl" font-weight="semibold">
                {{ title }}
              </mp-heading>
              <mp-box>
                <mp-button-icon
                  v-mp-tooltip="'Edit'"
                  name="edit"
                  size="md"
                  @click="setInlineToggle(true)"
                />
              </mp-box>
            </mp-flex>
          </mp-box>
          <mp-flex gap="2">
            <mp-button variant="outline">
              <mp-icon name="help" variant="duotone" margin-right="2" />
              Guidebook
            </mp-button>

            <mp-popover use-portal>
              <mp-popover-trigger>
                <mp-button right-icon="caret-down">Publish</mp-button>
              </mp-popover-trigger>
              <mp-popover-content
                max-width="240px"
                bg="white"
                rounded="md"
                shadow="lg"
                border-width="1px"
                border-color="gray.400"
              >
                <mp-popover-list>
                  <mp-popover-list-item>
                    <mp-box>
                      <mp-text>Save and publish</mp-text>
                      <mp-text font-size="sm" color="gray.600" is-truncated>
                        It will runs and publish your workflow
                      </mp-text>
                    </mp-box>
                  </mp-popover-list-item>
                  <mp-popover-list-item>
                    <mp-box>
                      <mp-text>Save as draft</mp-text>
                      <mp-text font-size="sm" color="gray.600">
                        Only save the draft and will not run the workflow
                      </mp-text>
                    </mp-box>
                  </mp-popover-list-item>
                </mp-popover-list>
              </mp-popover-content>
            </mp-popover>
          </mp-flex>
        </mp-flex>
        <mp-box
          border-top-width="1px"
          border-left-width="1px"
          border-top-left-radius="md"
          border-color="gray.100"
          background-color="white"
          padding-y="12"
          background-image="radial-gradient(#d0d6dd 1px, transparent 0)"
          background-size="24px 24px"
          background-position="-19px -19px"
          overflow-y="auto"
          height="calc(100vh - 130px)"
        >
          <mp-flex align-items="center" flex-direction="column">
            <mp-flex
              flex="1 0 auto"
              align-items="center"
              flex-direction="column"
            >
              <mp-box
                background-color="dark"
                border-radius="full"
                padding-y="2"
                padding-x="4"
              >
                <mp-text color="white" font-weight="semibold">
                  When this happens...
                </mp-text>
              </mp-box>
              <mp-flex
                flex-grow="1"
                width="2px"
                height="24px"
                background-color="gray.400"
              />
            </mp-flex>

            <MainBox :steps="steps" :setStep="setStep" />
            <TriggerBox :steps="steps" :setStep="setStep" />

            <mp-flex
              v-show="steps === 2"
              flex="1 0 auto"
              align-items="center"
              flex-direction="column"
            >
              <mp-flex
                flex-grow="1"
                width="2px"
                height="24px"
                background-color="gray.400"
              />
              <mp-button-icon
                name="add-circular"
                variant="duotone"
                size="md"
                @click="setStep(3)"
              />
            </mp-flex>

            <mp-flex
              v-show="steps !== 1"
              flex="1 0 auto"
              align-items="center"
              flex-direction="column"
            >
              <mp-flex
                flex-grow="1"
                width="2px"
                height="24px"
                background-color="gray.400"
              />
              <mp-box
                background-color="white"
                border="1px solid"
                border-color="gray.400"
                border-radius="full"
                padding-y="2"
                padding-x="4"
                v-show="steps < 5"
              >
                <mp-text
                  v-show="steps === 0 || steps === 3 || steps === 4"
                  color="gray.400"
                  font-weight="semibold"
                >
                  Then do this...
                </mp-text>
                <mp-text
                  v-show="steps === 2"
                  color="gray.400"
                  font-weight="semibold"
                >
                  Finish
                </mp-text>
              </mp-box>
              <mp-button-icon
                v-show="steps === 5"
                name="add-circular"
                variant="duotone"
                size="md"
              />
              <mp-flex
                v-show="steps === 3 || steps === 4 || steps === 5"
                flex-grow="1"
                width="2px"
                height="24px"
                background-color="gray.400"
              />
            </mp-flex>

            <ActionOptionBox :steps="steps" :setStep="setStep" />
            <ActionBox :steps="steps" :setStep="setStep" />

            <mp-flex
              v-show="steps === 5"
              flex="1 0 auto"
              align-items="center"
              flex-direction="column"
            >
              <mp-flex
                flex-grow="1"
                width="2px"
                height="24px"
                background-color="gray.400"
              />

              <mp-button-icon
                v-show="steps === 5"
                name="add-circular"
                variant="duotone"
                size="md"
              />
              <mp-flex
                v-show="steps === 5"
                flex-grow="1"
                width="2px"
                height="24px"
                background-color="gray.400"
              />
              <mp-box
                background-color="white"
                border="1px solid"
                border-color="gray.400"
                border-radius="full"
                padding-y="2"
                padding-x="4"
                v-show="steps === 5"
              >
                <mp-text
                  v-show="steps === 5"
                  color="gray.400"
                  font-weight="semibold"
                >
                  Finish
                </mp-text>
              </mp-box>
            </mp-flex>
          </mp-flex>
        </mp-box>
      </mp-box>
    </mp-flex>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpHeading,
  MpText,
  MpButton,
  MpButtonIcon,
  MpIcon,
  MpInput,
  MpFormControl,
  MpPopover,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
} from "@mekari/pixel";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MainBox from "./sections/MainBox";
import TriggerBox from "./sections/TriggerBox";
import ActionOptionBox from "./sections/ActionOptionBox";
import ActionBox from "./sections/ActionBox";

export default {
  name: "WorkflowBuilder",
  components: {
    MpBox,
    MpFlex,
    MpHeading,
    MpText,
    MpButton,
    MpButtonIcon,
    MpIcon,
    MpInput,
    MpFormControl,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
    Header,
    Sidebar,
    MainBox,
    TriggerBox,
    ActionOptionBox,
    ActionBox,
  },
  data: function () {
    return {
      steps: 0,
      title: "Untitled workflow",
      isInlineEdit: false,
    };
  },
  methods: {
    setStep: function (step) {
      this.steps = step;
    },
    setInlineToggle: function (data) {
      this.isInlineEdit = data;
    },
  },
};
</script>