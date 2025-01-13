import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Pixel, { ThemeProvider, MpReset } from "@mekari/pixel";
import store from "./stores";

import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";

Vue.config.productionTip = false;
Vue.use(Pixel);

new Vue({
  router,
  store,
  render: (h) => h(ThemeProvider, [h(MpReset), h(App)])
}).$mount("#app");
