import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView";
import ContactView from "../views/ContactView"
import BroadcastView from "../views/BroadcastView"
import IntegrationsView from "../views/IntegrationsView"
import EmbeddedChatView from "../views/EmbeddedChatView"
import SettingsView from "../views/SettingsView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/broadcast",
    name: "broadcast",
    component: BroadcastView,
  },
  {
    path: "/contacts",
    name: "contacts",
    component: ContactView,
  },
  {
    path: "/integrations",
    name: "integrations",
    component: IntegrationsView,
  },
  {
    path: "/embedded-chat",
    name: "embedded chat",
    component: EmbeddedChatView,
  },
  {
    path: "/settings",
    name: "settings",
    component: SettingsView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
