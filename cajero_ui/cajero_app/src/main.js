// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vueRouter from 'vue-router' //new

import router from './router' //new
Vue.use(vueRouter) //new


Vue.config.productionTip = false

new Vue({
  router, //new
  el: '#app',
  components: { App },
  template: '<App/>'
})