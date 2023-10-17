import Vue from "vue";
import Router from "vue-router";

import AutoGenerateFormat from "./views/AutoGenerateFormat";
import AutoGenerateFormatEdit from "./views/AutoGenerateFormatEdit";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "AutoGenerateFormat",
      component: AutoGenerateFormat
    },
    {
      path: "/edit",
      name: "AutoGenerateFormatEdit",
      component: AutoGenerateFormatEdit
    }
  ]
});
