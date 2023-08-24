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
];

const router = new VueRouter({
  routes,
});

export default router;
