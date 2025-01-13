<template>
  <mp-box ref="popover">
    <mp-popover :is-open="ispopoveropen" is-manual placement="bottom-end">
      <mp-popover-trigger>
        <mp-button
          variant="unstyled"
          height="auto"
          @click.native="handleOpenPopover"
        >
          <mp-flex
            align-items="center"
            transition="all 0.2s ease-in-out"
            padding-x="2"
            padding-y="1"
            border-radius="md"
            :_hover="{ backgroundColor: 'background', cursor: 'pointer' }"
          >
            <mp-avatar
              name="Rizal Chandra"
              src="https://i.pravatar.cc/300"
              size="md"
              margin-right="2"
              :show-border="false"
            />
            <mp-flex flex-direction="column">
              <mp-text font-weight="semibold" line-height="md">
                Rizal Chandra Budi Wicaksono
              </mp-text>
              <mp-text font-size="sm" color="gray.600">
                PT Mid Solusi Nusantara
              </mp-text>
            </mp-flex>
          </mp-flex>
        </mp-button>
      </mp-popover-trigger>
      <mp-popover-content
        z-index="999999"
        max-width="65"
        box-shadow="lg"
        border="1px solid"
        border-color="gray.400"
        border-radius="md"
        background-color="white"
      >
        <!-- company list section -->
        <mp-box :display="companylisttoggle ? 'block' : 'none'">
          <mp-popover-header
            border-top-radius="md"
            border-bottom="1px"
            border-color="gray.100"
          >
            <mp-button-icon
              size="sm"
              name="arrows-left"
              margin-right="2"
              padding="0"
              :is-hoverable="false"
              @click="handleToggle('company list', false)"
            />
            <mp-text font-weight="semibold"> Daftar perusahaan </mp-text>
          </mp-popover-header>

          <mp-popover-list border-bottom-width="1px" border-color="gray.50">
            <mp-popover-list-item>
              Lihat daftar selengkapnya

              <mp-icon name="newtab" size="sm" />
            </mp-popover-list-item>
          </mp-popover-list>

          <mp-popover-list
            border-bottom-radius="md"
            max-height="70vh"
            overflow-y="auto"
          >
            <mp-popover-list-item v-for="value in companyList" :key="value.id">
              <mp-box>
                <mp-text
                  :font-weight="
                    value.id === company.id ? 'semibold' : 'regular'
                  "
                  line-height="1sm"
                >
                  {{ value.name }}
                </mp-text>
                <mp-text
                  color="gray.600"
                  :font-weight="
                    value.id === company.id ? 'semibold' : 'regular'
                  "
                  >Company ID {{ value.id }}
                </mp-text>
              </mp-box>

              <mp-icon v-if=" value.id === company.id" name="check" size="sm" margin-right="2" />
            </mp-popover-list-item>
          </mp-popover-list>
          <mp-button
            variant="unstyled"
            width="full"
            height="44px"
            text-align="center"
            border-top-radius="0"
            border-top="1px"
            border-color="blue.50"
            color="blue.400"
            font-size="md"
            padding-y="3"
            :_hover="{ color: 'blue.500' }"
          >
            <mp-flex justify-content="center" align-items="center">
              <mp-icon name="add" size="sm" margin-right="2" color="blue.400" />
              Tambah perusahaan baru
            </mp-flex>
          </mp-button>
        </mp-box>
        <!-- change language section -->
        <mp-box :display="changelanguagetoggle ? 'block' : 'none'">
          <mp-popover-header
            border-top-radius="md"
            border-bottom="1px"
            border-color="gray.100"
          >
            <mp-button-icon
              size="sm"
              name="arrows-left"
              margin-right="2"
              padding="0"
              :is-hoverable="false"
              @click="handleToggle('change language', false)"
            />
            <mp-text font-weight="semibold">Change language</mp-text>
          </mp-popover-header>
          <mp-popover-list border-bottom-radius="md">
            <mp-popover-list-item
              justify-content="space-between"
              align-items="center"
              font-weight="semibold"
            >
              English
              <mp-icon name="check" size="sm" margin-right="2" />
            </mp-popover-list-item>
            <mp-popover-list-item>Indonesia</mp-popover-list-item>
          </mp-popover-list>
        </mp-box>
        <!-- switch account section -->
        <mp-box :display="switchaccounttoggle ? 'block' : 'none'">
          <mp-popover-header
            border-top-radius="md"
            border-bottom="1px"
            border-color="gray.100"
          >
            <mp-button-icon
              size="sm"
              name="arrows-left"
              margin-right="2"
              padding="0"
              :is-hoverable="false"
              @click="handleToggle('switch account', false)"
            />
            <mp-text font-weight="semibold">Switch account</mp-text>
          </mp-popover-header>
          <mp-popover-list
            border-bottom-radius="md"
            max-height="70vh"
            overflow-y="auto"
          >
            <mp-popover-list-item font-weight="semibold">
              rizal.candra@centralperk.co.id
              <mp-icon name="check" size="sm" margin-right="2" />
            </mp-popover-list-item>
            <mp-popover-list-item v-for="index in 50" :key="index">
              rizal.candra@harnods.com
            </mp-popover-list-item>
          </mp-popover-list>
          <mp-button
            variant="unstyled"
            width="full"
            height="44px"
            text-align="center"
            border-top-radius="0"
            border-top="1px"
            border-color="blue.50"
            color="blue.400"
            font-size="md"
            padding-y="3"
            :_hover="{ color: 'blue.500' }"
          >
            <mp-flex justify-content="center" align-items="center">
              <mp-icon name="add" size="sm" margin-right="2" color="blue.400" />
              Add new account
            </mp-flex>
          </mp-button>
        </mp-box>
        <!-- parent section -->
        <mp-box :display="parenttoggle ? 'block' : 'none'">
          <mp-box
            background-color="background"
            border-bottom="1px"
            border-color="gray.100"
            border-top-radius="md"
            padding-y="4"
          >
            <mp-flex
              justify-content="center"
              align-items="center"
              flex-direction="column"
            >
              <mp-avatar
                name="Rizal Chandra"
                src="https://i.pravatar.cc/300"
                size="lg"
                margin-bottom="2"
              />
              <mp-text font-weight="semibold">Rizal Chandra</mp-text>
              <mp-text color="gray.600">PT Central Perk Indonesia</mp-text>
            </mp-flex>
          </mp-box>
          <mp-popover-list>
            <mp-popover-list-item
              >Info pribadi

              <mp-icon name="newtab" size="sm" />
            </mp-popover-list-item>
            <mp-popover-list-item
              >Info perusahaan

              <mp-icon name="newtab" size="sm" />
            </mp-popover-list-item>
            <mp-popover-list-item
              is-arrow
              @click="handleToggle('company list', true)"
            >
              Daftar perusahaan
            </mp-popover-list-item>
            <mp-popover-list-item>API Credentials</mp-popover-list-item>
            <mp-popover-list-item>Riwayat aktivitas</mp-popover-list-item>
          </mp-popover-list>
          <mp-divider margin-y="0" />
          <mp-popover-list>
            <mp-popover-list-item
              @click="handleToggle('change language', true)"
            >
              Change language
              <mp-text color="gray.600">English</mp-text>
            </mp-popover-list-item>
            <mp-popover-list-item
              is-arrow
              @click="handleToggle('switch account', true)"
            >
              Ganti akun
            </mp-popover-list-item>
            <mp-popover-list-item>Sign out</mp-popover-list-item>
          </mp-popover-list>
          <mp-flex gap="3" flex-wrap="wrap" padding-x="3" padding-y="4">
            <mp-text font-size="xs" color="gray.600">Privacy</mp-text>
            <mp-text font-size="xs" color="gray.600">Terms of Use</mp-text>
            <mp-text font-size="xs" color="gray.600">
              About Mekari Account
            </mp-text>
            <mp-text font-size="xs" color="gray.600">Mekari © 2022</mp-text>
          </mp-flex>
        </mp-box>
      </mp-popover-content>
    </mp-popover>
  </mp-box>
</template>

<script>
import {
  MpBox,
  MpFlex,
  MpButton,
  MpButtonIcon,
  MpAvatar,
  MpText,
  MpIcon,
  MpDivider,
  MpPopover,
  MpPopoverHeader,
  MpPopoverTrigger,
  MpPopoverContent,
  MpPopoverList,
  MpPopoverListItem,
} from "@mekari/pixel";
import { mapState } from "vuex";

export default {
  name: "SwitchAccount",
  components: {
    MpBox,
    MpFlex,
    MpButton,
    MpButtonIcon,
    MpAvatar,
    MpText,
    MpIcon,
    MpDivider,
    MpPopover,
    MpPopoverHeader,
    MpPopoverTrigger,
    MpPopoverContent,
    MpPopoverList,
    MpPopoverListItem,
  },
  data() {
    return {
      ispopoveropen: false,
      isoutside: true,
      parenttoggle: true,
      companylisttoggle: false,
      changelanguagetoggle: false,
      switchaccounttoggle: false,
    };
  },
  computed: {
    ...mapState({
      companyList: (state) => state.navbar.companyList,
      company: (state) => state.navbar.company,
    }),
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.handleClickOutside);
  },
  methods: {
    handleToggle(type, value) {
      if (type === "company list") {
        this.parenttoggle = !value;
        this.companylisttoggle = value;
      } else if (type === "change language") {
        this.parenttoggle = !value;
        this.changelanguagetoggle = value;
      } else if (type === "switch account") {
        this.parenttoggle = !value;
        this.switchaccounttoggle = value;
      }
    },
    handleOpenPopover() {
      this.ispopoveropen = true;
    },
    handleClosePopover() {
      this.ispopoveropen = false;
      this.parenttoggle = true;
      this.companylisttoggle = false;
      this.changelanguagetoggle = false;
      this.switchaccounttoggle = false;
    },
    handleClickOutside(e) {
      const el = this.$refs.popover.$el;
      const isclickoutside = e.target !== el && !el.contains(e.target);

      isclickoutside && this.handleClosePopover();
    },
  },
};
</script>
