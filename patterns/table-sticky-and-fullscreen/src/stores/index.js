import Vuex from 'vuex'
import Vue from 'vue'
import navbar from './modules/navbar'
import sidebar from './modules/sidebar'
import learningCenter from './modules/learning-center'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: { navbar, sidebar, learningCenter },
})
