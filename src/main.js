import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import { store } from './store/store';
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
// Calendar
import 'vue-event-calendar/dist/style.css' //^1.1.10, CSS has been extracted as one file, so you can easily update it.
import vueEventCalendar from 'vue-event-calendar'


Vue.use(BootstrapVue);

Vue.use(vueEventCalendar, {locale: 'en'}) //locale can be 'zh' , 'en' , 'es', 'pt-br', 'ja', 'ko', 'fr', 'it', 'ru', 'de'

new Vue({
  el: '#app',
  store: store,
  render: h => h(App)
})
