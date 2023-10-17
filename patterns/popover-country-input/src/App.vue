<template>
  <mp-flex padding="6">
    <mp-form-control margin-bottom="5">
      <mp-form-label> Phone number </mp-form-label>
      <mp-input-group>
        <mp-input type="number" />
        <mp-input-left-addon>
          <mp-flex>
            <mp-flex
              @mouseover="isOutsidePopover = false"
              @mouseleave="isOutsidePopover = true"
            >
              <mp-popover
                :is-open="isPopoverOpen"
                initial-focus-ref="#filter-search"
                is-manual
              >
                <mp-popover-trigger>
                  <mp-flex
                    as="button"
                    padding-x="2"
                    gap="2"
                    align-items="center"
                    @click.native="handleOpenPopover"
                  >
                    <mp-text font-weight="bold">🇮🇩</mp-text>
                    <mp-icon name="chevrons-down" size="sm" />
                  </mp-flex>
                </mp-popover-trigger>
                <mp-popover-content
                  width="420px"
                  background-color="white"
                  border-radius="md"
                  border-width="1px"
                  border-color="gray.400"
                  box-shadow="lg"
                  padding-y="2"
                  margin-left="-4px !important"
                  max-height="300px"
                  overflow-y="auto"
                  @click.native="handleForceInputFocus"
                >
                  <mp-box margin-top="2" margin-bottom="2" padding-x="3">
                    <mp-input-group>
                      <mp-input-left-addon :with-background="false">
                        <mp-icon name="search" size="sm" />
                      </mp-input-left-addon>
                      <mp-input
                        id="filter-search"
                        placeholder="Search..."
                        @focus="handleFocus"
                        @blur="handleClickOutside"
                      />
                    </mp-input-group>
                  </mp-box>
                  <mp-box>
                    <mp-popover-list padding="0">
                      <mp-popover-list-item
                        v-for="list in countryData"
                        :key="list.name"
                        :is-active="list.name === countryActive"
                      >
                        <mp-flex>
                          {{ list.flag }}
                          <mp-text margin-left="2">
                            {{ list.name }}
                          </mp-text>
                        </mp-flex>
                        <mp-text color="gray.600" margin-left="5">
                          {{ list.dial_code }}
                        </mp-text>
                      </mp-popover-list-item>
                      <mp-popover-list-item v-if="isLoading">
                        <mp-flex align-items="center">
                          <mp-spinner size="sm" margin-right="2" />
                          Loading...
                        </mp-flex>
                      </mp-popover-list-item>

                      <div id="observer" />
                    </mp-popover-list>
                  </mp-box>
                </mp-popover-content>
              </mp-popover>
            </mp-flex>

            <mp-box
              background-color="white"
              padding-y="6px"
              padding-left="6px"
            >
              <mp-text color="gray.600">+62</mp-text>
            </mp-box>
          </mp-flex>
        </mp-input-left-addon>
      </mp-input-group>
    </mp-form-control>
  </mp-flex>
</template>

<script>
  import {
    MpBox,
    MpFlex,
    MpText,
    MpIcon,
    MpSpinner,
    MpFormControl,
    MpFormLabel,
    MpInput,
    MpInputGroup,
    MpInputLeftAddon,
    MpPopover,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
  } from "@mekari/pixel";

  export default {
    name: "App",
    components: {
      MpBox,
      MpFlex,
      MpText,
      MpIcon,
      MpSpinner,
      MpFormControl,
      MpFormLabel,
      MpInput,
      MpInputGroup,
      MpInputLeftAddon,
      MpPopover,
      MpPopoverTrigger,
      MpPopoverContent,
      MpPopoverList,
      MpPopoverListItem,
    },
    data() {
      return {
        fetchData: [],
        countryData: [],
        countryActive: "Indonesia",
        process: false,
        observer: null,
        isLoading: false,
        currentOpen: false,
        isPopoverOpen: false,
        isPopoverFocused: false,
        isOutsidePopover: true,
      };
    },
    created() {
      fetch(
        "https://gist.githubusercontent.com/DmytroLisitsyn/1c31186e5b66f1d6c52da6b5c70b12ad/raw/2bc71083a77106afec2ec37cf49d05ee54be1a22/country_dial_info.json"
      )
        .then((res) => res.json())
        .then((data) => (this.fetchData = data));
    },
    mounted() {
      this.observer = new IntersectionObserver(([entry]) => {
        if (entry && entry.isIntersecting) {
          if (!this.process) {
            this.loadNextData();
          }
        }
      }, {});
      const element = document.getElementById("observer");
      this.observer.observe(element);
    },
    destroyed() {
      this.observer.disconnect();
      this.observer = null;
    },
    methods: {
      loadNextData() {
        this.process = true;
        this.isLoading = true;

        setTimeout(() => {
          const newdata = this.fetchData.splice(0, 10);
          this.countryData.push(...newdata);
          this.isLoading = false;
          this.process = false;
        }, 1000);
      },
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
      handleOpen() {
        this.currentOpen = true;
      },
      handleClose() {
        this.currentOpen = false;
      },
    },
  };
</script>