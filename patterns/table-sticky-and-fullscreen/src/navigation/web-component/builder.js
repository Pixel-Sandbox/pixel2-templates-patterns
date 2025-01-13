import Vue from "vue";
import "document-register-element/build/document-register-element";
import vueCustomElement from "vue-custom-element";
import { getProps } from "vue-custom-element/src/utils/props";
import Pixel from "@mekari/pixel";
import store from '../../stores'

import WCPixelNavbar from './WCPixelNavbar.vue'
import WCPixelSidebar from './WCPixelSidebar.vue'
import WCPixelLearningCenter from './WCPixelLearningCenter.vue'

const asyncComponentDefinition = (component) => () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(component);
    }, 0);
  });

Vue.use(Pixel);
Vue.use(vueCustomElement);

WCPixelNavbar.store = store
Vue.customElement("pixel-navbar", asyncComponentDefinition(WCPixelNavbar), {
  props: getProps(WCPixelNavbar).camelCase,
});

WCPixelSidebar.store = store
Vue.customElement("pixel-sidebar", asyncComponentDefinition(WCPixelSidebar), {
  props: getProps(WCPixelSidebar).camelCase,
});

WCPixelLearningCenter.store = store
Vue.customElement("pixel-learning-center", asyncComponentDefinition(WCPixelLearningCenter), {
  props: getProps(WCPixelLearningCenter).camelCase,
});
