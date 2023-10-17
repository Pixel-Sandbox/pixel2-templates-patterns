import Vue from "vue";
import Router from "vue-router";

import AllBackyard from "./views/AllBackyard";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "AllBackyard",
      component: AllBackyard
    }
  ]
});
