import Vue from "vue";
import VueRouter from "vue-router";

import MpxOffboarding from "./views/offboarding/MpxOffboarding.vue";
import MpxOffboardingDetail from "./views/offboarding/MpxOffboardingDetail.vue";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "MpxOffboarding",
      component: MpxOffboarding
    },
    {
      path: "/detail",
      name: "MpxOffboardingDetail",
      component: MpxOffboardingDetail
    }
  ]
});
