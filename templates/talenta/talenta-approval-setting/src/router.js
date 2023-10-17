import Vue from "vue";
import Router from "vue-router";

import ApprovalSetting from "./views/index/ApprovalSetting";
import TimeOffRequest from "./views/time-off-request/TimeOffRequest";
import TimeOffRequestCreate from "./views/time-off-request/TimeOffRequestCreate";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "ApprovalSetting",
      component: ApprovalSetting
    },
    {
      path: "/time-off-request",
      name: "TimeOffRequest",
      component: TimeOffRequest
    },
    {
      path: "/time-off-request/create",
      name: "TimeOffRequestCreate",
      component: TimeOffRequestCreate
    }
  ]
});
