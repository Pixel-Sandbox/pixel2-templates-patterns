import Vue from "vue";
import App from "./App.vue";
import Pixel, { ThemeProvider, MpReset } from "@mekari/pixel";

import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";

Vue.config.productionTip = false;
Vue.use(Pixel);

new Vue({
  render: (h) => h(ThemeProvider, [h(MpReset), h(App)]),
}).$mount("#app");
