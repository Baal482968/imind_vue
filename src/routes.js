import Login from './components/Login.vue';
import Body from './components/Body.vue';
import SingleProject from './components/SingleProject.vue';

export default [
  { path: '/', component: Body },
  { path: '/login', component: Login },
  { path: '/project/:id', component: SingleProject }
]
