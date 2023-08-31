import Vue from "vue";
import Router from "vue-router";

import Disbursement from "./views/Disbursement";
import ViewDisbursementTax from "./views/ViewDisbursementTax";
import ViewDisbursementCommission from "./views/ViewDisbursementCommission";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Disbursement",
      component: Disbursement
    },
    {
      path: "/view-tax",
      name: "ViewDisbursementTax",
      component: ViewDisbursementTax
    },
    {
      path: "/view-commission",
      name: "ViewDisbursementCommission",
      component: ViewDisbursementCommission
    }
  ]
});
