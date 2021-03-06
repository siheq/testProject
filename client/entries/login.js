import Vue from 'vue';
import App from '../pages/login/login.vue';
import router from '../router/login.js';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import vueStrap from 'vue-strap';

Vue.use(ElementUI);
Vue.use(vueStrap);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App},
});

// require('bootstrap')
require('bootstrap/dist/css/bootstrap.css');
require('bootstrap/dist/js/bootstrap.min');
