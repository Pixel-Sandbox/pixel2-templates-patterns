<template>
  <mp-box position="relative">
    <Header />
    <mp-flex as="main" max-height="calc(100vh - 60px)">
      <Sidebar is-alternate is-custom />
      <mp-box
        as="section"
        data-id="content"
        width="100%"
        height="calc(100vh - 60px)"
        overflow-y="auto"
        background-color="background"
      >
        <SubHeader title="Ringkasan bisnis" />
        <mp-box
          min-height="calc(100vh - 132px)"
          border-top-left-radius="md"
          padding-right="6"
          padding-bottom="6"
        >
          <mp-tabs id="default">
            <mp-tab-list>
              <mp-tab>Dashboard existing</mp-tab>
              <mp-tab>Dashboard 2</mp-tab>
              <mp-tab>Dashboard 3</mp-tab>
              <mp-box display="flex" gap="2" as="button">
                <mp-icon name="add" size="sm" color="blue.400" />
                <mp-text color="blue.400"> Tambah dasbor </mp-text>
                <mp-badge variant-color="red">Baru</mp-badge>
              </mp-box>
            </mp-tab-list>
          </mp-tabs>

          <mp-flex justify-content="space-between" mb="6.5">
            <mp-box display="flex" gap="1" align-items="center">
              <mp-text font-weight="semibold" font-size="xl">Dasbor 01</mp-text>
              <mp-button-icon name="edit" size="sm" />
              <mp-button-icon name="menu-kebab" size="sm" />
            </mp-box>

            <mp-box display="flex" gap="3" align-items="center">
              <mp-text color="gray.600"
                >Terakhir diperbarui: 12 Jul 2023, 16:00 (GMT+7)</mp-text
              >
              <mp-button variant="outline">
                <mp-icon name="refresh" size="sm" variant="duotone" mr="2" />
                Perbarui</mp-button
              >
            </mp-box>
          </mp-flex>

          <mp-box class="grid-stack" m="-2" position="relative">
            <div
              v-for="widget in widgets"
              :key="widget.id"
              class="grid-stack-item"
              :gs-w="widget.attrs.w"
              :gs-h="widget.attrs.h"
              :id="widget.id"
              :gs-no-resize="true"
            >
              <WidgetItem
                :is-loading="true"
                :title="widget.title"
                :type="widget.type"
                :grid-attrs="widget.attrs"
              />
            </div>
          </mp-box>

          <ModalAddWidget
            :is-open="isModalAddWidgetOpen"
            @close="isModalAddWidgetOpen = false"
            @add-widget="handleAddWidget"
          />
        </mp-box>
      </mp-box>
    </mp-flex>

    <mp-box position="fixed" bottom="8" width="full">
      <mp-flex align-items="center" justify-content="center">
        <mp-button shadow="sm" @click="isModalAddWidgetOpen = true">
          <mp-icon name="add" size="sm" color="white" mr="2" />
          Tambah widget
        </mp-button>
      </mp-flex>
    </mp-box>
  </mp-box>
</template>

<script>
import "gridstack/dist/gridstack.min.css";
import { GridStack } from "gridstack";
import {
  MpBox,
  MpFlex,
  MpButton,
  MpIcon,
  MpTabs,
  MpTabList,
  MpTab,
  MpText,
  MpBadge,
  MpButtonIcon,
} from "@mekari/pixel";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import SubHeader from "../components/SubHeader";
import ModalAddWidget from "./parts/ModalAddWidget.vue";
import WidgetItem from "./parts/WidgetItem.vue";

export default {
  name: "LayoutDefault",
  components: {
    MpBox,
    MpFlex,
    MpButton,
    MpIcon,
    MpTabs,
    MpTabList,
    MpTab,
    MpText,
    MpBadge,
    MpButtonIcon,

    //
    Header,
    Sidebar,
    SubHeader,
    ModalAddWidget,
    WidgetItem,
  },
  data() {
    return {
      isModalAddWidgetOpen: false,
      grid: undefined,
      widgets: [
        {
          id: 1,
          title: "Dashboard 1",
          type: "number",
          attrs: {
            w: 6,
            h: 1,
          },
        },
      ],
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.handleInitGrid();
    });
  },
  methods: {
    handleInitGrid() {
      this.grid = GridStack.init({
        float: false,
        cellHeight: "214",
        minRow: 1,
        staticGrid: false,
        marginTop: 8,
        marginLeft: 8,
        marginRight: 8,
        marginBottom: 8,
      });
    },
    handleAddWidget(data) {
      const id = new Date().getTime();

      this.widgets.push({
        id: id,
        title: data.title,
        type: data.type,
        attrs: data.attrs,
      });

      this.$nextTick(() => {
        const newWidget = document.getElementById(id);
        console.log(newWidget);

        this.grid.addWidget(newWidget);
      });
    },
  },
};
</script>
