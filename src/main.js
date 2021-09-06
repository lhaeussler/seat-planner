import App from './App.vue';
import Vue from 'vue';
import store from './store';
import axios from 'axios';
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '@/assets/styles/css/head.css';
import {createProvider} from './vue-apollo';
import {ApolloClient} from 'apollo-client';
import {HttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import VueApollo, {ApolloProvider} from 'vue-apollo';

Vue.config.productionTip = false;

const httpLink = new HttpLink({
  uri: 'http://localhost:8080/v1/graphql'
});

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

axios.defaults.baseURL = "http://localhost:8000/";

//if loca storage has token, add it the axios default header
const token = localStorage.getItem('token');

if (token) {
  axios.defaults.headers.common = {'Authorization': "bearer " + token};
}

Vue.use(VueApollo);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false
new Vue({
  store,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')



