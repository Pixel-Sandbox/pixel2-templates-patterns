import Vue from "vue";
import Router from "vue-router";

import PayrollReport from "./views/PayrollReport";
import PayrollReportDetail from "./views/PayrollReportDetail";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "PayrollReport",
      component: PayrollReport
    },
    {
      path: "/detail",
      name: "PayrollReportDetail",
      component: PayrollReportDetail
    }
  ]
});
