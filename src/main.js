import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'


Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  render: h => h(App)
})
