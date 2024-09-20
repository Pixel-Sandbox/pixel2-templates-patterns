<template>
  <mp-box>
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 60px)">
      <Sidebar default-is-toggle is-custom with-child />
      <mp-box
        as="section"
        data-id="content"
        width="100%"
        height="calc(100vh - 60px)"
        overflow-y="auto"
        background-color="background"
      >
        <mp-flex
          justify="space-between"
          align-items="center"
          padding-x="6"
          padding-y="4"
        >
          <mp-box height="12">
            <mp-text font-size="sm" is-link>Documents</mp-text>
            <mp-heading as="h1" font-size="2xl" font-weight="semibold">
              Upload document
            </mp-heading>
          </mp-box>
        </mp-flex>
        <mp-box
          min-height="calc(100vh - 142px)"
          border-top-width="1px"
          border-left-width="1px"
          border-top-left-radius="md"
          border-color="gray.100"
          background-color="white"
        >
          <mp-flex height="calc(100vh - 142px)">
            <mp-flex
              width="64%"
              max-height="calc(100vh - 142px)"
              border-right="1px solid"
              border-color="gray.100"
              padding="6"
              overflow-y="auto"
            >
              <mp-flex
                border="1px solid"
                border-color="gray.100"
                border-radius="md"
                width="full"
                height="fit-content"
              >
                <mp-box width="full">
                  <mp-flex padding="3" justify="space-between" align="center">
                    <mp-flex gap="2">
                      <mp-icon name="doc" variant="duotone" />
                      <mp-text font-weight="semibold">Documents</mp-text>
                    </mp-flex>
                    <mp-button variant="outline">
                      <mp-icon
                        name="add-circular"
                        variant="duotone"
                        margin-right="2"
                      />
                      Add more document(s)
                    </mp-button>
                  </mp-flex>

                  <mp-accordion allow-toggle allow-multiple>
                    <mp-box>
                      <Draggable
                        v-model="lists"
                        v-bind="dragOptions"
                        handle=".handle"
                        @start="isDrag = true"
                        @end="
                          {
                            reassignItemId(), (isDrag = false);
                          }
                        "
                      >
                        <TransitionGroup
                          type="transition"
                          :name="!isDrag ? 'list' : null"
                        >
                          <mp-accordion-item
                            v-for="(list, index) in lists"
                            :key="list.id"
                            border="0px"
                            default-is-open
                          >
                            <mp-accordion-header
                              background-color="white"
                              border-top="1px solid"
                              border-color="gray.100"
                              border-bottom-left-radius="md"
                              border-bottom-right-radius="md"
                              padding-y="3"
                              padding-x="4"
                              justify-content="space-between"
                            >
                              <mp-flex gap="4" align="center">
                                <mp-icon
                                  size="sm"
                                  name="drag"
                                  cursor="move"
                                  class="handle"
                                />
                                <mp-flex
                                  flex="1"
                                  text-align="left"
                                  align="center"
                                  gap="2"
                                >
                                  <mp-icon size="sm" name="pdf-document" />
                                  <mp-flex direction="column">
                                    <mp-text>
                                      {{ list.name }}
                                    </mp-text>
                                    <mp-text
                                      v-if="isSelected"
                                      font-size="sm"
                                      color="gray.600"
                                    >
                                      <mp-text
                                        display="inline-block"
                                        font-size="sm"
                                        color="blue.400"
                                      >
                                        {{ list.items.length }}/{{
                                          list.items.length
                                        }}
                                      </mp-text>
                                      pages selected
                                    </mp-text>
                                    <mp-text
                                      v-else
                                      font-size="sm"
                                      color="gray.600"
                                    >
                                      {{ list.items.length }} pages selected
                                    </mp-text>
                                  </mp-flex>
                                </mp-flex>
                              </mp-flex>
                              <mp-flex gap="2" align="center">
                                <mp-text color="red.400" is-link>
                                  Remove
                                </mp-text>
                                <mp-accordion-icon />
                              </mp-flex>
                            </mp-accordion-header>
                            <mp-accordion-panel
                              border-top="1px solid"
                              border-color="gray.100"
                              padding="4"
                            >
                              <mp-flex id="with-accordion" gap="4" wrap="wrap">
                                <mp-box
                                  v-for="item in list.items"
                                  :key="item.id"
                                  role="group"
                                  cursor="pointer"
                                  @click="handleOpen(index)"
                                >
                                  <mp-box
                                    position="relative"
                                    width="80px"
                                    height="92px"
                                    :border="
                                      !isMerge && item.id === cursorIndex
                                        ? '1.5px solid'
                                        : '1px solid'
                                    "
                                    :border-color="
                                      !isMerge && item.id === cursorIndex
                                        ? 'blue.700'
                                        : 'gray.100'
                                    "
                                    border-radius="md"
                                  >
                                    <mp-box
                                      v-if="isSelected"
                                      position="absolute"
                                      top="2px"
                                      right="2px"
                                      z-index="2"
                                      @click.stop="(e) => console.log('')"
                                    >
                                      <mp-checkbox
                                        padding-y="7px"
                                        padding-x="7px"
                                        background-color="gray.25"
                                        border-radius="md"
                                        is-checked
                                      />
                                    </mp-box>
                                    <mp-box
                                      position="absolute"
                                      top="2px"
                                      :right="isSelected ? '36px' : '2px'"
                                      z-index="2"
                                      opacity="0"
                                      transition="all 0.2s ease-in-out"
                                      :_groupHover="{
                                        opacity: 1,
                                      }"
                                    >
                                      <mp-button-icon
                                        border-radius="md"
                                        background-color="gray.25"
                                        name="rotate-left"
                                        size="sm"
                                        v-mp-tooltip="'Rotate left'"
                                        @click.stop="() => console.log('')"
                                      />
                                    </mp-box>
                                    <MpImage
                                      :src="item.url"
                                      layout="fill"
                                      object-fit="contain"
                                      object-position="center center"
                                    />
                                  </mp-box>
                                  <mp-text
                                    :color="
                                      !isMerge && item.id === cursorIndex
                                        ? 'blue.400'
                                        : 'dark'
                                    "
                                    text-align="center"
                                  >
                                    {{ item.id }}
                                  </mp-text>
                                </mp-box>
                              </mp-flex>
                            </mp-accordion-panel>
                          </mp-accordion-item>
                        </TransitionGroup>
                      </Draggable>
                    </mp-box>
                  </mp-accordion>
                </mp-box>
              </mp-flex>
            </mp-flex>
            <mp-flex width="36%" position="relative">
              <mp-box
                width="full"
                padding="6"
                max-height="calc(100vh - 210px)"
                overflow-y="auto"
              >
                <mp-form-control control-id="type" is-required>
                  <mp-form-label>Transaction type</mp-form-label>
                  <mp-select value="expense">
                    <option value="expense">Expense</option>
                  </mp-select>
                </mp-form-control>
                <mp-form-control control-id="type" is-required margin-top="5">
                  <mp-form-label>Document template</mp-form-label>
                  <mp-select value="auto">
                    <option value="auto">Auto recognize</option>
                  </mp-select>
                </mp-form-control>
                <mp-form-control control-id="specific-page" margin-top="5">
                  <mp-checkbox v-model="isSelected">
                    Select specific pages
                  </mp-checkbox>
                </mp-form-control>
                <mp-form-control control-id="merge-page" margin-top="5">
                  <mp-checkbox v-model="isMerge">
                    Merge all documents into a single transaction documents
                  </mp-checkbox>
                </mp-form-control>
                <mp-box v-if="isMerge">
                  <mp-form-control control-id="document-name" margin-top="5">
                    <mp-form-label>Document name</mp-form-label>
                    <mp-input placeholder="Inv-2130" />
                  </mp-form-control>
                  <mp-form-control control-id="tag" margin-top="5">
                    <mp-form-label>Tag</mp-form-label>
                    <mp-input-tag
                      :max-tags="5"
                      :key-code="['Enter', ';', ',']"
                      :is-show-suggestions="false"
                    />
                    <mp-form-help-text>
                      Separate tags with commas
                    </mp-form-help-text>
                  </mp-form-control>
                  <mp-form-control control-id="notes" margin-top="5">
                    <mp-form-label>Notes</mp-form-label>
                    <mp-box position="relative">
                      <mp-textarea
                        v-model="note"
                        resize="vertical"
                        :maxlength="maxLength"
                      />
                      <mp-box
                        position="absolute"
                        bottom="0"
                        px="2"
                        py="2"
                        width="full"
                        display="flex"
                        justify-content="flex-end"
                        user-select="none"
                        pointer-events="none"
                      >
                        <mp-text color="gray.400" px="1" rounded="sm">
                          {{ noteLength }}/{{ maxLength }}
                        </mp-text>
                      </mp-box>
                    </mp-box>
                  </mp-form-control>
                </mp-box>
                <mp-box v-else>
                  <mp-divider margin-y="4" />
                  <mp-heading as="h2" font-size="xl">
                    Page {{ cursorIndex }}
                  </mp-heading>
                  <mp-form-control control-id="document-name" margin-top="5">
                    <mp-form-label>Document name</mp-form-label>
                    <mp-input placeholder="Inv-2130" />
                  </mp-form-control>
                  <mp-form-control control-id="tag" margin-top="5">
                    <mp-form-label>Tag</mp-form-label>
                    <mp-input-tag
                      :max-tags="5"
                      :key-code="['Enter', ';', ',']"
                      :is-show-suggestions="false"
                    />
                    <mp-form-help-text>
                      Separate tags with commas
                    </mp-form-help-text>
                  </mp-form-control>
                  <mp-form-control control-id="notes" margin-top="5">
                    <mp-form-label>Notes</mp-form-label>
                    <mp-box position="relative">
                      <mp-textarea
                        v-model="note"
                        resize="vertical"
                        :maxlength="maxLength"
                      />
                      <mp-box
                        position="absolute"
                        bottom="0"
                        px="2"
                        py="2"
                        width="full"
                        display="flex"
                        justify-content="flex-end"
                        user-select="none"
                        pointer-events="none"
                      >
                        <mp-text color="gray.400" px="1" rounded="sm">
                          {{ noteLength }}/{{ maxLength }}
                        </mp-text>
                      </mp-box>
                    </mp-box>
                  </mp-form-control>

                  <mp-flex margin-top="5">
                    <mp-autocomplete
                      width="16"
                      height="7.5"
                      is-searchable
                      :data="
                        Array.from({ length: itemsLength }, (_, i) => i + 1)
                      "
                      v-model="cursorIndex"
                      :is-full-width="false"
                      :content-style="{ width: '40' }"
                      @change="(e) => (cursorIndex = e)"
                    />
                    <mp-text
                      color="gray.600"
                      line-height="md"
                      padding-left="2"
                      padding-right="4"
                      padding-y="1"
                    >
                      of {{ itemsLength }} page
                    </mp-text>
                    <mp-button-icon
                      name="chevrons-left"
                      size="sm"
                      padding-right="1"
                      :is-disabled="cursorIndex <= 1"
                      @click="cursorIndex -= 1"
                    />
                    <mp-button-icon
                      name="chevrons-right"
                      size="sm"
                      padding-right="1"
                      :is-disabled="cursorIndex >= itemsLength"
                      @click="cursorIndex += 1"
                    />
                  </mp-flex>
                </mp-box>
              </mp-box>
              <mp-box
                position="absolute"
                background-color="white"
                border-top="1px solid"
                border-color="gray.100"
                width="full"
                padding-y="3"
                padding-x="6"
                bottom="0"
              >
                <mp-flex justify="space-between" align="center">
                  <mp-flex direction="column">
                    <mp-text color="gray.600">
                      Total credit used:
                      <mp-text
                        display="inline-block"
                        font-weight="semibold"
                        color="dark"
                      >
                        11
                      </mp-text>
                    </mp-text>
                    <mp-text font-size="sm" color="gray.600">
                      Total available credit:
                      <mp-text
                        display="inline-block"
                        font-size="sm"
                        font-weight="semibold"
                        color="green.400"
                      >
                        100
                      </mp-text>
                    </mp-text>
                  </mp-flex>
                  <mp-flex gap="2">
                    <mp-button variant="ghost"> Cancel </mp-button>
                    <mp-button> Submit </mp-button>
                  </mp-flex>
                </mp-flex>
              </mp-box>
            </mp-flex>
          </mp-flex>
        </mp-box>
      </mp-box>
    </mp-flex>

    <mp-modal :is-open="isModalOpen" :on-close="handleClose">
      <mp-modal-content
        max-width="full"
        height="full"
        bg="transparent"
        border="0"
        margin="0"
        box-shadow="none"
        z-index="skipLink"
      >
        <mp-flex
          justify="space-between"
          align="center"
          p="6"
          position="fixed"
          width="full"
        >
          <mp-flex gap="2" align="center">
            <mp-icon z-index="skipLink" color="white" name="file-image" />
            <mp-text z-index="skipLink" color="white">
              {{ this.lists[cursorGroupIndex].name }}
            </mp-text>
          </mp-flex>
          <mp-flex gap="2" z-index="skipLink">
            <mp-button
              color="white"
              variant="unstyled"
              width="9"
              min-width="9"
              height="9"
              p="6px"
              left-icon="rotate-left"
              v-mp-tooltip="'Rotate left'"
            />
            <mp-button
              color="white"
              variant="unstyled"
              width="9"
              min-width="9"
              height="9"
              p="6px"
              left-icon="close"
              v-mp-tooltip="'Close'"
              @click="handleClose"
            />
          </mp-flex>
        </mp-flex>
        <mp-carousel
          width="full"
          height="100vh"
          :auto-play-timeout="2000"
          :is-auto-play="false"
          :is-show-button-nav="true"
          :is-loop="false"
          :is-show-indicator="false"
          border-radius="xl"
          border="none"
          indicator-active-color="dark"
          bg="transparent"
          z-index="skipLink"
          margin-top="84px"
        >
          <mp-carousel-item
            v-for="(value, index) in this.lists[cursorGroupIndex].items"
            :key="index"
            width="full"
            height="auto"
            p="10"
            bg="transparent"
          >
            <mp-flex justify="center" align="center">
              <img src="https://via.placeholder.com/820x618" alt="alt" />
            </mp-flex>
          </mp-carousel-item>
        </mp-carousel>
      </mp-modal-content>
      <mp-modal-overlay />
    </mp-modal>
  </mp-box>
</template>

<script>
import Draggable from "vuedraggable";
import {
  MpBox,
  MpFlex,
  MpHeading,
  MpText,
  MpIcon,
  MpButton,
  MpButtonIcon,
  MpImage,
  MpSelect,
  MpAutocomplete,
  MpCheckbox,
  MpInput,
  MpInputTag,
  MpTextarea,
  MpDivider,
  MpFormControl,
  MpFormLabel,
  MpFormHelpText,
  MpAccordion,
  MpAccordionItem,
  MpAccordionHeader,
  MpAccordionIcon,
  MpAccordionPanel,
  MpModal,
  MpModalContent,
  MpModalOverlay,
  MpCarousel,
  MpCarouselItem,
} from "@mekari/pixel";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default {
  name: "Upload",
  components: {
    MpBox,
    MpFlex,
    MpHeading,
    MpText,
    MpIcon,
    MpButton,
    MpButtonIcon,
    MpImage,
    MpSelect,
    MpAutocomplete,
    MpCheckbox,
    MpInput,
    MpInputTag,
    MpTextarea,
    MpDivider,
    MpFormControl,
    MpFormLabel,
    MpFormHelpText,
    MpAccordion,
    MpAccordionItem,
    MpAccordionHeader,
    MpAccordionIcon,
    MpAccordionPanel,
    MpModal,
    MpModalContent,
    MpModalOverlay,
    MpCarousel,
    MpCarouselItem,
    Header,
    Sidebar,
    Draggable,
  },
  data() {
    return {
      note: "",
      maxLength: 500,
      isDrag: false,
      isMerge: true,
      isSelected: false,
      isModalOpen: false,
      cursorIndex: 1,
      cursorGroupIndex: 0,
      lists: [
        {
          id: 1,
          name: "Invoice payment October 2024.pdf",
          items: [
            { id: 1, url: "https://via.placeholder.com/60x92" },
            { id: 2, url: "https://via.placeholder.com/60x92" },
            { id: 3, url: "https://via.placeholder.com/60x92" },
            { id: 4, url: "https://via.placeholder.com/60x92" },
            { id: 5, url: "https://via.placeholder.com/60x92" },
            { id: 6, url: "https://via.placeholder.com/60x92" },
            { id: 7, url: "https://via.placeholder.com/60x92" },
            { id: 8, url: "https://via.placeholder.com/60x92" },
          ],
        },
        {
          id: 2,
          name: "Invoice payment September 2024.pdf",
          items: [
            { id: 9, url: "https://via.placeholder.com/60x92" },
            { id: 10, url: "https://via.placeholder.com/60x92" },
            { id: 11, url: "https://via.placeholder.com/60x92" },
          ],
        },
        {
          id: 3,
          name: "Invoice payment August 2024.pdf",
          items: [
            { id: 12, url: "https://via.placeholder.com/60x92" },
            { id: 13, url: "https://via.placeholder.com/60x92" },
          ],
        },
      ],
    };
  },
  mounted() {
    this.filterItems(1);
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        disabled: false,
        ghostClass: "ghost",
      };
    },
    itemsLength() {
      return this.lists.reduce((total, obj) => total + obj.items.length, 0);
    },
    noteLength() {
      return this.note.length;
    },
  },
  methods: {
    reassignItemId() {
      let itemId = 1;
      this.lists.forEach((list) => {
        list.items = list.items.map((item) => {
          return { id: itemId++, url: item.url };
        });
      });
    },
    filterItems(index) {
      const result = this.lists.filter((obj) =>
        obj.items.some((item) => item.id === index)
      );

      return result;
    },
    handleOpen(index) {
      this.isModalOpen = true;
      this.cursorGroupIndex = index;
    },
    handleClose() {
      this.isModalOpen = false;
    },
  },
};
</script>

<style>
.ghost {
  opacity: 0;
}
.sortable-chosen > button {
  border: 1px solid #4b61dd;
  border-radius: 6px;
  transition: 0s;
}
#with-accordion [data-pixel-component="MpControlBox"] {
  margin-top: 0;
}
</style>
