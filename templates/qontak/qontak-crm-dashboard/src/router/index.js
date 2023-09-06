import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView";
import ContactView from "../views/ContactView.vue"
import PropertiesView from "../views/PropertiesView"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/contacts",
    name: "contacts",
    component: ContactView,
  },
  {
    path: "/properties",
    name: "properties",
    component: PropertiesView,
  },
  {
    path: "/properties/:type",
    name: "properties-type",
    component: PropertiesView,
  },
  {
    path: "/properties/:type/:id",
    name: "properties-type-id",
    component: PropertiesView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
