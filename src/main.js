import Vue from 'vue'
import App from './App.vue'
import { router } from './router';
import axios from 'axios';

import {store} from './store';

//配置默认根路径
axios.defaults.baseURL = "https://vue2-library-default-rtdb.firebaseio.com/"

//配置axios全局
Vue.prototype.http = axios;

new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App)
})
