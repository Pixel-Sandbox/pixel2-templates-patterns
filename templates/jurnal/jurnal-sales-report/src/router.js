import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "SalesReport",
    component: () => import("./views/SalesReportView.vue")
  },
  {
    path: "/custom-template",
    name: "SalesReport",
    component: () => import("./views/CustomTemplateView.vue")
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
