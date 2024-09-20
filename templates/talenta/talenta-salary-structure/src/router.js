import Vue from "vue";
import Router from "vue-router";

import SalaryStructure from "./views/SalaryStructure";
import CreateSalaryStructure1 from "./views/CreateSalaryStructure1";
import CreateSalaryStructure2 from "./views/CreateSalaryStructure2";
import CreateSalaryStructure3 from "./views/CreateSalaryStructure3";
import DetailSalaryStructure from "./views/DetailSalaryStructure";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "SalaryStructure",
      component: SalaryStructure
    },
    {
      path: "/create/step-1",
      name: "CreateSalaryStructure1",
      component: CreateSalaryStructure1
    },
    {
      path: "/create/step-2",
      name: "CreateSalaryStructure2",
      component: CreateSalaryStructure2
    },
    {
      path: "/create/step-3",
      name: "CreateSalaryStructure3",
      component: CreateSalaryStructure3
    },
      {
      path: "/detail",
      name: "DetailSalaryStructure",
      component: DetailSalaryStructure
    }
  ]
});
