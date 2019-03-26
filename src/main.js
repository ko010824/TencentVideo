// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/common.css'
import './assets/css/swiper.css'
import './assets/js/swiper.js'
import VueResource from '../node_modules/vue-resource'

Vue.use(VueResource);
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  render(h){
    return h(App)
  }
});
