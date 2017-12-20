import Vue from 'vue';
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import Routes from './routes';
import { store } from './store/store';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
// Calendar


Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(BootstrapVue);


const router = new VueRouter({
    routes: Routes,
    mode: 'history'
});

new Vue({
  el: '#app',
  store: store,
  render: h => h(App),
  router: router
})
