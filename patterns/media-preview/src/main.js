import Vue from "vue";
import App from "./App.vue";
import Pixel, { ThemeProvider, MpReset } from "@mekari/pixel";
import JsonViewer from "vue-json-viewer";

Vue.use(JsonViewer);

Vue.use(Pixel);

new Vue({
  render: (h) =>
    h(
      ThemeProvider,
      {
        props: {
          isCacheIcon: true,
        },
      },
      [h(MpReset), h(App)]
    ),
}).$mount("#app");
