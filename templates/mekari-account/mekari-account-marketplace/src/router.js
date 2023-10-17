import Vue from "vue";
import Router from "vue-router";

import Marketplace from "./views/Marketplace";
import MarketplaceDetail from "./views/MarketplaceDetail";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Marketplace",
      component: Marketplace
    },
    {
      path: "/detail",
      name: "MarketplaceDetail",
      component: MarketplaceDetail
    }
  ]
});
