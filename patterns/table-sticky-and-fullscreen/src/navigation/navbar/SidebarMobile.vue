<template>
  <mp-drawer
    :is-open="isSidebarMenuOpen"
    :on-close="onSidebarMenuToggle"
    :return-focus-on-close="false"
  >
    <mp-drawer-overlay :display="['none', 'block']" />
    <mp-drawer-content
      border="none"
      border-left="1px"
      border-left-color="gray.100"
      background-color="background"
      :max-width="['full', 'xs']"
      :margin-top="['51px', '0px']"
      :height="['calc(100vh - var(--jurnal-navbar-height))', '100vh']"
    >
      <mp-drawer-body
        ref="drawerBody"
        background-color="background"
        padding="0"
        max-height="calc(100vh)"
        overflow="hidden auto"
      >
        <mp-flex
          align-items="center"
          border-radius="none"
          padding-x="4"
          padding-y="2.5"
          background-color="white"
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
              Rizal Chandra
            </mp-text>
            <mp-text font-size="sm" color="gray.600">
              PT Central Perk Indonesia
            </mp-text>
          </mp-flex>
        </mp-flex>

        <mp-box
          v-if="!isToggle"
          padding-x="2"
          padding-y="4"
          background-color="white"
        >
          <mp-flex flex-direction="column" v-for="menu in menus" :key="menu.id">
            <template v-if="menu.name">
              <mp-pseudo-box
                v-if="!menu.childItems.length"
                role="group"
                flex="1"
                border-radius="sm"
                :as="isWebComponent ? 'a' : 'router-link'"
                :to="isWebComponent ? '' : menu.link"
                :href="isWebComponent ? menu.link : ''"
                transition="all .2s ease"
                padding-x="2.5"
                padding-y="2"
                :background-color="
                  isActiveMenu(menu.link) ? 'blue.100' : 'inherit'
                "
                :color="isActiveMenu(menu.link) ? 'blue.400' : 'inherit'"
                :_hover="{
                  backgroundColor: 'ice.50',
                  color: 'blue.400',
                  cursor: 'pointer',
                }"
              >
                <mp-stack
                  direction="row"
                  align="center"
                  justify="space-between"
                >
                  <mp-flex gap="2">
                    <mp-icon
                      :name="menu.icon"
                      :color="isActiveMenu(menu.link) ? 'blue.400' : 'gray.600'"
                      :variant="isActiveMenu(menu.link) ? 'fill' : 'outline'"
                    />
                    <mp-text
                      white-space="nowrap"
                      :font-weight="
                        isActiveMenu(menu.link) ? 'semibold' : 'inherit'
                      "
                      :color="isActiveMenu(menu.link) ? 'blue.400' : 'inherit'"
                    >
                      {{ menu.name }}
                    </mp-text>
                  </mp-flex>
                  <mp-icon
                    v-if="menu.childItems.length"
                    name="chevrons-right"
                    :color="black"
                  />
                </mp-stack>
              </mp-pseudo-box>
              <mp-pseudo-box
                v-else
                role="group"
                flex="1"
                border-radius="sm"
                transition="all .2s ease"
                padding-x="2.5"
                padding-y="2"
                :background-color="menu.isActive ? 'ice.50' : 'inherit'"
                :color="menu.isActive ? 'blue.400' : 'inherit'"
                :_hover="{
                  backgroundColor: 'ice.50',
                  color: 'blue.400',
                  cursor: 'pointer',
                }"
                @click="handleToggle(true, 'sub-menu')"
              >
                <mp-stack
                  direction="row"
                  align="center"
                  justify="space-between"
                >
                  <mp-flex gap="2">
                    <mp-icon
                      :name="menu.icon"
                      :color="menu.isActive ? 'blue.400' : 'gray.600'"
                    />
                    <mp-text
                      white-space="nowrap"
                      :font-weight="menu.isActive ? 'semibold' : 'inherit'"
                    >
                      {{ menu.name }}
                    </mp-text>
                  </mp-flex>
                  <mp-icon
                    v-if="menu.childItems.length"
                    name="chevrons-right"
                  />
                </mp-stack>
              </mp-pseudo-box>
            </template>

            <mp-divider v-else />
          </mp-flex>
        </mp-box>

        <!-- Toggle content -->
        <mp-box v-else padding-x="2" padding-y="4" background-color="white">
          <mp-flex flex-direction="column">
            <mp-pseudo-box
              role="group"
              flex="1"
              border-radius="sm"
              transition="all .2s ease"
              padding-x="2.5"
              padding-y="2"
              :_hover="{
                backgroundColor: 'ice.50',
                color: 'blue.400',
                cursor: 'pointer',
              }"
              @click="handleToggle(false)"
            >
              <mp-stack direction="row" align="center" justify="space-between">
                <mp-flex gap="2">
                  <mp-icon name="arrows-left" />
                  <mp-text white-space="nowrap"> Kembali </mp-text>
                </mp-flex>
              </mp-stack>
            </mp-pseudo-box>
          </mp-flex>
          <mp-divider />

          <template v-if="toggleContent === 'sub-menu'">
            <mp-text font-weight="semibold" padding-x="4" padding-y="2">
              PENGATURAN
            </mp-text>
            <mp-box>
              <mp-text
                font-size="md"
                font-weight="semibold"
                color="blue.400"
                padding-x="4"
                padding-y="2"
              >
                P R O F I L
              </mp-text>
              <mp-box>
                <SidebarMobileChildItem is-active>
                  Perusahaan
                </SidebarMobileChildItem>
                <SidebarMobileChildItem> Pengguna </SidebarMobileChildItem>
                <SidebarMobileChildItem> Tagihan </SidebarMobileChildItem>
              </mp-box>
            </mp-box>

            <mp-box>
              <mp-text
                font-size="md"
                font-weight="semibold"
                color="blue.400"
                padding-x="4"
                padding-y="2"
              >
                T R A N S A K S I
              </mp-text>

              <mp-box>
                <SidebarMobileChildItem> Penjualan </SidebarMobileChildItem>
                <SidebarMobileChildItem> Pembelian </SidebarMobileChildItem>
                <SidebarMobileChildItem> Produk </SidebarMobileChildItem>
                <SidebarMobileChildItemAccordion />
                <SidebarMobileChildItem> Pemetaan akun </SidebarMobileChildItem>
                <SidebarMobileChildItem>
                  Aturan approval
                </SidebarMobileChildItem>
                <SidebarMobileChildItem>
                  Aturan tagging
                </SidebarMobileChildItem>
              </mp-box>
            </mp-box>
          </template>

          <template v-if="toggleContent === 'daftar-perusahaan'">
            <mp-box>
              <mp-text
                font-size="sm"
                padding-x="2.5"
                padding-y="3"
                letter-spacing="2.88px"
                color="black"
                font-weight="semibold"
                >DAFTAR PERUSAHAAN</mp-text
              >
            </mp-box>

            <mp-divider />
            <mp-box padding-x="2.5">
              <mp-flex
                justify-content="space-between"
                align-items="center"
                pt="2"
                pb="4"
              >
                <mp-text>Detail perusahaan</mp-text>
                <mp-icon name="newtab" size="sm" />
              </mp-flex>

              <mp-flex
                v-for="value in companyList"
                :key="value.id"
                justify-content="space-between"
                align-items="center"
                py="2"
              >
                <mp-box>
                  <mp-text
                    line-height="1sm"
                    :font-weight="
                      value.id === company.id ? 'semibold' : 'regular'
                    "
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

                <mp-icon
                  v-if="value.id === company.id"
                  name="check"
                  size="sm"
                />
              </mp-flex>
            </mp-box>

            <mp-button
              mt="3"
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
                <mp-icon
                  name="add"
                  size="sm"
                  margin-right="2"
                  color="blue.400"
                />
                Tambah perusahaan baru
              </mp-flex>
            </mp-button>
          </template>

          <template v-if="toggleContent === 'ganti-akun'">
            <mp-box padding-x="2.5">
              <mp-flex
                v-for="index in 20"
                :key="index"
                justify-content="space-between"
                align-items="center"
                rounded="md"
                px="2"
                py="2"
                mx="-2"
                :_hover="{
                  background: 'background',
                  cursor: 'pointer'
                }"
              >
                <mp-text
                  line-height="1sm"
                  :font-weight="index === 1 ? 'semibold' : 'regular'"
                >
                  rizal.chandra@mekari.com
                </mp-text>

                <mp-icon v-if="index === 1" name="check" size="sm" />
              </mp-flex>
            </mp-box>

            <mp-button
              mt="3"
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
                <mp-icon
                  name="add"
                  size="sm"
                  margin-right="2"
                  color="blue.400"
                />
                Tambah akun
              </mp-flex>
            </mp-button>
          </template>
        </mp-box>

        <mp-box padding="4">
          <mp-flex flex-direction="column">
            <mp-text as="a" href="#" color="gray.600" padding-y="2">
              Info pribadi

              <mp-icon name="newtab" size="sm" float="right" />
            </mp-text>
            <mp-text as="a" href="#" color="gray.600" padding-y="2">
              Info perusahaan

              <mp-icon name="newtab" size="sm" float="right" />
            </mp-text>
            <mp-text
              as="a"
              href="#"
              color="gray.600"
              padding-y="2"
              @click.native="handleToggle(true, 'daftar-perusahaan')"
            >
              Daftar perusahaan
              <mp-icon name="chevrons-right" float="right" />
            </mp-text>
            <mp-text as="a" href="#" color="gray.600" padding-y="2">
              API Credentials
            </mp-text>
            <mp-text as="a" href="#" color="gray.600" padding-y="2">
              Riwayat aktivitas
            </mp-text>
            <mp-text as="a" href="#" color="gray.600" padding-y="2">
              Bahasa

              <mp-text as="span" color="gray.600" float="right">
                Indonesia
              </mp-text>
            </mp-text>
            <mp-divider />
            <mp-text
              as="a"
              href="#"
              color="gray.600"
              padding-y="2"
              @click.native="handleToggle(true, 'ganti-akun')"
            >
              Ganti akun
              <mp-icon name="chevrons-right" float="right" />
            </mp-text>
            <mp-text as="a" href="#" color="gray.600" padding-y="2">
              Keluar
            </mp-text>
            <mp-divider />
            <mp-text as="a" href="#" color="gray.600" padding-y="2">
              Privacy
            </mp-text>
            <mp-text as="a" href="#" color="gray.600" padding-y="2">
              Terms of Use
            </mp-text>
            <mp-text as="a" href="#" color="gray.600" padding-y="2">
              About Mekari Account
            </mp-text>
            <mp-text color="gray.600" padding-y="2">Mekari © 2022</mp-text>
          </mp-flex>
        </mp-box>
      </mp-drawer-body>
    </mp-drawer-content>
  </mp-drawer>
</template>

<script>
import {
  MpBox,
  MpPseudoBox,
  MpFlex,
  MpStack,
  MpText,
  MpIcon,
  MpAvatar,
  MpDivider,
  MpDrawer,
  MpDrawerOverlay,
  MpDrawerContent,
  MpDrawerBody,
  MpButton,
} from "@mekari/pixel";
import SidebarMobileChildItem from "./SidebarMobileChildItem.vue";
import SidebarMobileChildItemAccordion from "./SidebarMobileChildItemAccordion.vue";
import { mapState } from "vuex";

export default {
  name: "SidebarMobile",
  props: {
    isSidebarMenuOpen: [Boolean],
    onSidebarMenuToggle: [Function],
  },
  components: {
    MpBox,
    MpPseudoBox,
    MpFlex,
    MpStack,
    MpText,
    MpIcon,
    MpAvatar,
    MpDivider,
    MpDrawer,
    MpDrawerOverlay,
    MpDrawerContent,
    MpDrawerBody,
    SidebarMobileChildItem,
    SidebarMobileChildItemAccordion,
    MpButton,
  },
  data: function () {
    return {
      isActive: 0,
      isToggle: false,
      toggleContent: "",
    };
  },
  computed: {
    ...mapState({
      menus: (state) => state.sidebar.datas,
      companyList: (state) => state.navbar.companyList,
      company: (state) => state.navbar.company,
    }),
    isWebComponent() {
      return this.$route === undefined || this.$route === null;
    },
  },
  methods: {
    isActiveMenu(link) {
      if (this.isWebComponent) {
        return window.location.pathname.startsWith(link);
      }

      return this.$route.path.startsWith(link);
    },
    handleToggle: function (data, content) {
      this.isToggle = data;
      this.toggleContent = content;

      this.$nextTick(() => {
        this.$refs.drawerBody.$el.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      });
    },
    handleChange: function (data) {
      this.isActive = data;
    },
  },
};
</script>
