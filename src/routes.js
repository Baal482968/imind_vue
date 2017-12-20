import Login from './components/Login.vue';
import Body from './components/Body.vue';
import SingleCourse from './components/SingleCourse.vue';

export default [
  { path: '/', component: Body },
  { path: '/login', component: Login },
  { path: '/courses/:id', component: SingleCourse }
]
