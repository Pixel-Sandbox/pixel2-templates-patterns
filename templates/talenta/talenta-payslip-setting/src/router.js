import Vue from "vue"
import Router from "vue-router"

import CreatePayslipSetting1 from "./views/CreatePayslipSetting1"
import CreatePayslipSetting2 from "./views/CreatePayslipSetting2"
import CreatePayslipSetting3 from "./views/CreatePayslipSetting3"
import EditPayslipSetting from "./views/EditPayslipSetting"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/create/step-1",
      name: "CreatePayslipSetting1",
      component: CreatePayslipSetting1
    },
    {
      path: "/create/step-2",
      name: "CreatePayslipSetting2",
      component: CreatePayslipSetting2
    },
    {
      path: "/create/step-3",
      name: "CreatePayslipSetting3",
      component: CreatePayslipSetting3
    },
    {
      path: "/detail",
      name: "EditPayslipSetting",
      component: EditPayslipSetting
    }
  ]
})
