import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import App from './App.vue'
import { routes } from './routes'
import { store } from './store/store';

axios.defaults.baseURL = 'https://stocktrader-a09f1.firebaseio.com/'
axios.defaults.headers.post['Accepts'] = 'application/json'

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
