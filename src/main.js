import App from './App.vue';
import Vue from 'vue';
import store from './store';
import axios from 'axios';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '@/assets/styles/css/head.css';

axios.defaults.baseURL = "http://localhost:8000/";

//if loca storage has token, add it the axios default header
const token = localStorage.getItem('token');

if (token) {
  axios.defaults.headers.common = {'Authorization': "bearer " + token};
}

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')



