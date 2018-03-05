// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import axios from 'axios'
import store from './store'

import App from './App'
import router from './router'

Vue.use(Vuetify)
Vue.config.productionTip = false

if (window.localStorage) {
  let token = window.localStorage.getItem('token') || 'null'

  if (token) {
    // store.setTokenAction(token)
    axios.defaults.headers.common['authorization'] = `Bearer ${token}`
  }
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
