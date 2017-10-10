import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import { store } from './store/store';
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'


Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  store: store,
  render: h => h(App)
})
