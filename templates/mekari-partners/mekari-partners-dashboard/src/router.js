import Vue from "vue";
import Router from "vue-router";

import GettingStarted from "./views/GettingStarted";
import Dashboard from "./views/Dashboard";
import Offers from "./views/Offers";
import OffersDetail from "./views/OffersDetail";
import OffersOverview from "./views/OffersOverview";
import Commission from "./views/Commission";
import PersonalInfo from "./views/PersonalInfo";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "GettingStarted",
      component: GettingStarted
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard
    },
    {
      path: "/offers",
      name: "Offers",
      component: Offers
    },
    {
      path: "/offers-detail",
      name: "OffersDetail",
      component: OffersDetail
    },
    {
      path: "/offers-overview",
      name: "OffersOverview",
      component: OffersOverview
    },
    {
      path: "/commission",
      name: "Commission",
      component: Commission
    },
    {
      path: "/personal-info",
      name: "PersonalInfo",
      component: PersonalInfo
    }
  ]
});
