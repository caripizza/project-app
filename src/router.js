import VueRouter from 'vue-router';
import Home from './components/home/Home';

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '*', redirect: '/' }
  ]
});