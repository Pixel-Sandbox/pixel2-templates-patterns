import Vue from 'vue'
import App from './App.vue'
import Pixel from '@mekari/pixel'
import router from "./router";

Vue.use(Pixel)

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
