import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Jurnal - Create Purchase Request",
    component: () => import("./views/CreatePurchaseRequestView.vue")
  },
  {
    path: "/detail",
    name: "Jurnal - Detail Purchase Request",
    component: () => import("./views/DetailPurchaseRequestView.vue")
  },
  {
    path: "/edit",
    name: "Jurnal - Edit Purchase Request",
    component: () => import("./views/EditPurchaseRequestView.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  document.title = to.name;
  next();
});

export default router;
