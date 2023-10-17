import Vue from 'vue'
import Vuelidate from "vuelidate";
import JsonViewer from "vue-json-viewer";
import App from './App.vue'
import Pixel, { ThemeProvider, MpReset } from '@mekari/pixel'

Vue.use(Vuelidate);
Vue.use(JsonViewer);
Vue.use(Pixel)

new Vue({
  render: (h) => h(ThemeProvider, [h(MpReset), h(App)]),
}).$mount('#app')
