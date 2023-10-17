import Vue from 'vue'
import App from './App.vue'
import Pixel, { ThemeProvider, MpReset } from '@mekari/pixel'
import router from "./router";

Vue.use(Pixel)

new Vue({
  router,
  render: (h) => h(ThemeProvider, [h(MpReset), h(App)]),
}).$mount('#app')
