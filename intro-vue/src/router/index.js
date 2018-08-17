import Vue from 'vue';
import Router from 'vue-router';
import Front from '../views/Front';
import Main from '../views/Main';
import About from '../views/About';
import FAQ from '../views/FAQ';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Front',
      component: Front,
    },
    {
      path: '/main',
      name: 'Main',
      component: Main,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/faq',
      name: 'FAQ',
      component: FAQ,
    },
  ],
})

