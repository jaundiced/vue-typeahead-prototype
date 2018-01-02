// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex';
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as uiv from 'uiv'
import store from '@/store/index.js'

Vue.config.productionTip = false
Vue.use(uiv)
Vue.use(Vuex);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
