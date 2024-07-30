import Vue from "vue";
import Router from "vue-router";

import Langganan from "./views/Langganan";
import DetailTagihan from "./views/DetailTagihan";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Langganan",
      component: Langganan
    },
    {
      path: "/detail-tagihan",
      name: "DetailTagihan",
      component: DetailTagihan
    }
  ]
});
