import Vue from 'vue'
import App from './App.vue'
import VueConfetti from "vue-confetti";
import Pixel, { ThemeProvider, MpReset } from '@mekari/pixel'


Vue.use(Pixel)
Vue.use(VueConfetti);

new Vue({
  render: (h) => h(ThemeProvider, [h(MpReset), h(App)]),
}).$mount('#app')
