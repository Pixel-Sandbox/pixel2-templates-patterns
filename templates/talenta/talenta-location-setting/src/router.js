import Vue from "vue";
import Router from "vue-router";

import LocationSetting from "./views/index/LocationSetting";
import AddLocationSetting from "./views/add/AddLocationSetting";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "LocationSetting",
      component: LocationSetting
    },
    {
      path: "/add-location-setting",
      name: "PaginationView",
      component: AddLocationSetting
    }
  ]
});
