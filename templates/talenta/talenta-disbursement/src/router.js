import Vue from "vue";
import Router from "vue-router";

import Disbursement from "./views/Disbursement";
import CreateDisbursement from "./views/CreateDisbursement";
import DetailDisbursement from "./views/DetailDisbursement";
import NotFound from "./views/NotFound";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Disbursement",
      component: Disbursement
    },
    {
      path: "/create-disbursement",
      name: "CreateDisbursement",
      component: CreateDisbursement
    },
    {
      path: "/detail-disbursement",
      name: "DetailDisbursement",
      component: DetailDisbursement
    },
    {
      path: "*",
      name: "NotFound",
      component: NotFound
    }
  ]
});
