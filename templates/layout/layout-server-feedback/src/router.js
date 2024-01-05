import Vue from "vue";
import Router from "vue-router";

import Layout400 from "./views/Layout400";
import Layout403 from "./views/Layout403";
import Layout404 from "./views/Layout404";
import Layout500 from "./views/Layout500";
import LayoutUnderMaintenance from "./views/LayoutUnderMaintenance";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Layout400",
      component: Layout400
    },
    {
      path: "/400",
      name: "Layout400",
      component: Layout400
    },
    {
      path: "/403",
      name: "Layout403",
      component: Layout403
    },
    {
      path: "/404",
      name: "Layout404",
      component: Layout404
    },
    {
      path: "/500",
      name: "Layout500",
      component: Layout500
    },
    {
      path: "/under-maintenance",
      name: "LayoutUnderMaintenance",
      component: LayoutUnderMaintenance
    }
  ]
});
