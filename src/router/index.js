import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
    },
    {
      path: '/detail/:id',
      props: true,
      name: 'detail',
      component: () => import(/* webpackChunkName: "detail" */ '../components/DetailCard.vue')
    },
  ]
});