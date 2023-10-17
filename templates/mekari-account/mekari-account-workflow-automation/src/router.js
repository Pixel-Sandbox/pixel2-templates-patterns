import Vue from "vue";
import Router from "vue-router";

import Workflow from "./views/Workflow";
import WorkflowBuilder from "./views/WorkflowBuilder";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Workflow",
      component: Workflow
    },
    {
      path: "/builder",
      name: "WorkflowBuilder",
      component: WorkflowBuilder
    }
  ]
});
