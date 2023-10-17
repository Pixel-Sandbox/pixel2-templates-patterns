import Vue from 'vue'
import App from './App.vue'
import VueVirtualScroller from "vue-virtual-scroller";
import Pixel, { ThemeProvider, MpReset } from '@mekari/pixel'
import router from "./router";

import "vue-virtual-scroller/dist/vue-virtual-scroller.css";

Vue.use(Pixel);
Vue.use(VueVirtualScroller);

new Vue({
  router,
  render: (h) => h(ThemeProvider, [h(MpReset), h(App)]),
}).$mount('#app')
