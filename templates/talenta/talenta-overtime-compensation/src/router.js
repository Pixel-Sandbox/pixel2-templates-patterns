import Vue from "vue";
import Router from "vue-router";

import OvertimeCompensation from "./views/index/OvertimeCompensation";
import AddOvertimeCompensation from "./views/add/AddOvertimeCompensation";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "OvertimeCompensation",
      component: OvertimeCompensation
    },
    {
      path: "/add-overtime-compensation",
      name: "AddOvertimeCompensation",
      component: AddOvertimeCompensation
    }
  ]
});
