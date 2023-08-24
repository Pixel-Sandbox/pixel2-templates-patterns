<template>
  <mp-box p="20" height="100vh" background="background">
    <mp-button @click="handleOpen"> Open Inbox Filter </mp-button>
    <mp-modal
      :is-open="isModalOpen"
      :on-close="handleClose"
      size="lg"
      scroll-behavior="inside"
    >
      <mp-modal-content height="446px">
        <mp-modal-body p="0">
          <mp-flex direction="row" min-height="426px" height="full">
            <mp-flex direction="column" width="full" p="4">
              <mp-flex>
                <mp-input-group>
                  <mp-input-left-addon :with-background="false">
                    <mp-icon name="search" size="sm" />
                  </mp-input-left-addon>
                  <mp-input
                    v-model="search"
                    placeholder="Search contact or conversation..."
                    is-clearable
                    @keyup.enter="handleEnter"
                  />
                </mp-input-group>
                <mp-button
                  v-if="!isShowFilter"
                  variant="outline"
                  left-icon="filter"
                  ml="3"
                  @click="isShowFilter = true"
                >
                  Filter
                </mp-button>
              </mp-flex>
              <mp-text color="gray.600" font-size="sm" mt="1" mb="5">
                You can see the search result for the last 12 months. Need to
                see more?
                <mp-text as="a" href="#" font-size="sm" is-link>
                  Visit export page
                </mp-text>
              </mp-text>
              <!-- BLANK STATE -->
              <mp-flex
                v-if="state === 'blank'"
                direction="column"
                align-items="center"
              >
                <img src="./assets/blankslate.png" alt="video thumbnail" />
                <mp-text font-weight="semibold" font-size="lg">{{
                  blankTitle
                }}</mp-text>
                <mp-text color="gray.600" text-align="center">{{
                  blankDesc
                }}</mp-text>
              </mp-flex>
              <!-- RECENT SEARCH -->
              <mp-flex
                v-if="state === 'recent'"
                direction="column"
                align-items="center"
                mb="6"
              >
                <mp-flex
                  width="full"
                  justify="space-between"
                  align-items="center"
                >
                  <mp-text font-weight="semibold">Recent Search</mp-text>
                  <mp-button variant="ghost" @click="state = 'blank'"
                    >Clear all</mp-button
                  >
                </mp-flex>
                <mp-box
                  v-for="(item, index) in recentData"
                  :key="index"
                  width="full"
                >
                  <mp-flex
                    width="full"
                    justify="space-between"
                    align-items="center"
                    px="2"
                    py="0.5"
                    border-bottom="1px solid"
                    border-color="gray.100"
                  >
                    <mp-text>{{ item }}</mp-text>
                    <mp-button-icon
                      name="close"
                      @click="handleAlert(`Remove: ${item}`)"
                    />
                  </mp-flex>
                </mp-box>
              </mp-flex>
              <!-- LOADING -->
              <mp-flex
                v-if="state === 'loading'"
                direction="column"
                justify="center"
                align-items="center"
                height="full"
              >
                <mp-loader :size="16" />
              </mp-flex>

              <!-- RESULT FILTER -->
              <mp-flex v-if="state === 'result'" direction="column" pb="8">
                <mp-text font-weight="semibold" mb="2">Contacts</mp-text>
                <mp-flex
                  p="2"
                  gap="3"
                  border-bottom="1px solid"
                  border-color="gray.100"
                >
                  <mp-avatar
                    size="md"
                    src="https://randomuser.me/api/portraits/men/11.jpg"
                  />
                  <mp-flex direction="column" width="full">
                    <mp-flex justify="space-between" align-items="center">
                      <mp-text line-height="md">Fauzi Fauzan</mp-text>
                      <mp-text color="gray.600" font-size="xs"
                        >20 Jan 2023, 19:20</mp-text
                      >
                    </mp-flex>
                    <mp-text
                      color="gray.600"
                      font-size="sm"
                      line-height="md"
                      is-truncated
                      >Pengguna yang terhormat, kode verifikasi : 921830 berlaku
                      selama 60 menit. Mohon untuk tidak membalas pesan
                      ini</mp-text
                    >
                    <mp-flex mt="2" align-items="center">
                      <mp-icon
                        name="verified"
                        size="sm"
                        variant="fill"
                        color="blue.400"
                        mr="2"
                      />
                      <mp-text font-size="sm" line-height="md"
                        >Fauzi Fauzan</mp-text
                      >
                    </mp-flex>
                  </mp-flex>
                </mp-flex>
                <mp-flex
                  p="2"
                  gap="3"
                  border-bottom="1px solid"
                  border-color="gray.100"
                >
                  <mp-avatar
                    size="md"
                    src="https://randomuser.me/api/portraits/women/11.jpg"
                  />
                  <mp-flex direction="column" width="full">
                    <mp-flex justify="space-between" align-items="center">
                      <mp-text line-height="md">Elvina Dwi Hinelia</mp-text>
                      <mp-text color="gray.600" font-size="xs"
                        >13 Jan 2023, 17:31</mp-text
                      >
                    </mp-flex>
                    <mp-text
                      color="gray.600"
                      font-size="sm"
                      line-height="md"
                      is-truncated
                      >Hallo selamat siang</mp-text
                    >
                    <mp-flex mt="2" align-items="center">
                      <mp-icon
                        name="verified"
                        size="sm"
                        variant="fill"
                        color="blue.400"
                        mr="2"
                      />
                      <mp-text font-size="sm" line-height="md"
                        >@elvinadh</mp-text
                      >
                    </mp-flex>
                  </mp-flex>
                </mp-flex>
                <mp-text font-weight="semibold" mb="2" mt="6"
                  >Conversations</mp-text
                >
                <mp-flex
                  p="2"
                  border-bottom="1px solid"
                  border-color="gray.100"
                >
                  <mp-flex direction="column" width="full">
                    <mp-flex justify="space-between" align-items="center">
                      <mp-text line-height="md">Fauzi Fauzan</mp-text>
                      <mp-text color="gray.600" font-size="xs"
                        >31 Jul 2019, 09:43</mp-text
                      >
                    </mp-flex>
                    <mp-text
                      color="gray.600"
                      font-size="sm"
                      line-height="md"
                      is-truncated
                      >Pengguna yang terhormat, kode verifikasi :
                      <b>921830 berlaku selama 60 menit.</b> Mohon untuk tidak
                      membalas pesan ini</mp-text
                    >
                    <mp-flex mt="2" align-items="center">
                      <mp-text
                        as="a"
                        href="#"
                        font-size="sm"
                        line-height="md"
                        is-link
                        >Export Only</mp-text
                      >
                      <mp-icon
                        name="newtab"
                        size="sm"
                        color="blue.400"
                        ml="2"
                      />
                    </mp-flex>
                  </mp-flex>
                </mp-flex>
                <mp-flex
                  p="2"
                  border-bottom="1px solid"
                  border-color="gray.100"
                >
                  <mp-flex direction="column" width="full">
                    <mp-flex justify="space-between" align-items="center">
                      <mp-text line-height="md">Fauzi Fauzan</mp-text>
                      <mp-text color="gray.600" font-size="xs"
                        >31 Jul 2019, 09:43</mp-text
                      >
                    </mp-flex>
                    <mp-text
                      color="gray.600"
                      font-size="sm"
                      line-height="md"
                      is-truncated
                      >Pengguna yang terhormat, kode verifikasi :
                      <b>921830 berlaku selama 60 menit.</b> Mohon untuk tidak
                      membalas pesan ini</mp-text
                    >
                    <mp-flex mt="2" align-items="center">
                      <mp-text
                        as="a"
                        href="#"
                        font-size="sm"
                        line-height="md"
                        is-link
                        >Export Only</mp-text
                      >
                      <mp-icon
                        name="newtab"
                        size="sm"
                        color="blue.400"
                        ml="2"
                      />
                    </mp-flex>
                  </mp-flex>
                </mp-flex>
              </mp-flex>
            </mp-flex>
            <!-- FILTER -->
            <Transition name="slide-fade">
              <mp-flex
                v-if="isShowFilter"
                flex="none"
                direction="column"
                background="background"
                width="64"
                rounded-top-right="md"
                rounded-bottom-right="md"
                p="4"
              >
                <mp-text font-weight="semibold" mb="1"> Filter by </mp-text>

                <FilterPopover
                  id="filter-from"
                  :options="['Fauzi Fauzan', 'elvinadh']"
                />
                <FilterPopover
                  id="filter-channel"
                  label="Channel"
                  :options="['Whatsapp', 'Telegram', 'Instagram']"
                />
                <FilterPopover
                  id="filter-tag"
                  label="Tags"
                  :options="['Leads', 'Complaint', 'Support']"
                />
                <mp-box mb="5">
                  <mp-date-picker
                    id="filter-datepicker"
                    v-model="date"
                    value-type="string"
                    format="DD/MM/YYYY"
                    placeholder="Date: Any"
                  />
                </mp-box>
                <FilterPopover
                  id="filter-session"
                  label="Session"
                  :options="['Open', 'Expiring', 'Expired']"
                />
                <mp-flex justify="end" mt="auto">
                  <mp-button variant="ghost" mr="2" @click="handleReset">
                    Reset
                  </mp-button>
                  <mp-button @click="handleApply"> Apply </mp-button>
                </mp-flex>
              </mp-flex>
            </Transition>
          </mp-flex>
        </mp-modal-body>
      </mp-modal-content>
      <mp-modal-overlay />
    </mp-modal>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpText,
  MpButton,
  MpButtonIcon,
  MpInput,
  MpInputGroup,
  MpInputLeftAddon,
  MpIcon,
  MpModal,
  MpModalOverlay,
  MpModalContent,
  MpModalBody,
  MpLoader,
  MpDatePicker,
  MpAvatar,
} from "@mekari/pixel";

import FilterPopover from "./components/FilterPopover.vue";

export default {
  name: "App",
  components: {
    MpBox,
    MpFlex,
    MpText,
    MpButton,
    MpButtonIcon,
    MpInput,
    MpInputGroup,
    MpInputLeftAddon,
    MpIcon,
    MpModal,
    MpModalOverlay,
    MpModalContent,
    MpModalBody,
    MpLoader,
    MpDatePicker,
    MpAvatar,
    FilterPopover,
  },
  data() {
    return {
      isModalOpen: false,
      isShowFilter: false,
      state: "blank",
      search: "",
      date: "",
      blankTitle: "No recent searches yet",
      blankDesc: "Your recent searches will appear here.",
      recentData: [
        "Still doing this man 💣",
        "Great choice of Acronym 👌🏼",
        "Pretty colors too!",
        "Soo great!!!",
        "This is how Neo sees the world",
      ],
    };
  },
  watch: {
    search(val) {
      if (val.length > 0) {
        this.state = "loading";
      } else {
        this.state = "recent";
      }
    },
  },
  methods: {
    handleOpen() {
      this.state = "blank";
      this.isModalOpen = true;
    },
    handleClose() {
      this.isModalOpen = false;
    },
    handleAlert(msg) {
      alert(msg);
    },
    handleEnter() {
      if (!this.search) {
        return;
      }

      this.state = "blank";
      this.blankTitle = `"${this.search}" not found`;
      this.blankDesc =
        "Recheck the keywords you have typed and try searching again.";
    },
    handleApply() {
      this.isShowFilter = false;
      this.state = "result";
    },
    handleReset() {
      this.isShowFilter = false;
      this.state = "blank";
    },
  },
};
</script>

<style>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.2s ease-out;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
