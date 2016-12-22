// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import store from './store'
import App from './App'

import 'bootstrap/dist/css/bootstrap.css'
import routes from './router/index.js'

import './util/mock.js'

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter(routes);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  ...App
})
