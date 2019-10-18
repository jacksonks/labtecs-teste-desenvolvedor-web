import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import 'vuetify/dist/vuetify.min.css'
import router from './router'
import {store} from './store/store'
import axios from 'axios'
import Vuex from 'vuex'

const base = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  withCredentials: 'true',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
  },
})

Vue.prototype.$http = base
Vuex.Store.prototype.$http = base

Vue.config.productionTip = false


router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.user == null) {
      next({
        path: '/',
      })
    } else {
      next();
    }
  } else if(to.matched.some(record => record.meta.guest)) {
    if(store.getters.user == null){
      next()
    }
    else{
      next({ path: '/Administration'})
    }
  }
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')