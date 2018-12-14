// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import router from './router/index';
import App from './App';
import Home from '@/components/Home';
import About from '@/components/About';
var VueCookie = require('vue-cookie');

Vue.use(VueCookie);


Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
