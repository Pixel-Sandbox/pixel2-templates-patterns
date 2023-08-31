import Vue from "vue";
import Router from "vue-router";

import AddonContent from "./views/AddonContent";
import EditAddonContent from "./views/EditAddonContent";
import Category from "./views/Category";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "AddonContent",
      component: AddonContent
    },
    {
      path: "/detail",
      name: "EditAddonContent",
      component: EditAddonContent
    },
    {
      path: "/category",
      name: "Category",
      component: Category
    }
  ]
});
