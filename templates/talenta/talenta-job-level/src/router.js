import Vue from "vue";
import Router from "vue-router";

import JobLevel from "./views/JobLevel";
import JobLevelImport from "./views/JobLevelImport";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "JobLevel",
      component: JobLevel
    },
    {
      path: "/import",
      name: "JobLevelImport",
      component: JobLevelImport
    }
  ]
});
