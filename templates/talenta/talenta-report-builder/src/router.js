import Vue from "vue";
import Router from "vue-router";

import ReportBuilder from "./views/index/ReportBuilder";
import CreateReportBuilder from "./views/create/CreateReportBuilder";
import EditorReportBuilder from "./views/editor/EditorReportBuilder";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "ReportBuilder",
      component: ReportBuilder
    },
    {
      path: "/create",
      name: "CreateReportBuilder",
      component: CreateReportBuilder
    },
    {
      path: "/editor",
      name: "EditorReportBuilder",
      component: EditorReportBuilder
    }
  ]
});
