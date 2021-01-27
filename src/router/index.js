import Vue from 'vue';
import VueRouter from 'vue-router';
// eslint-disable-next-line import/no-cycle
import store from '../store/index';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: {
      authRequired: true,
    },
  },
  {
    path: '/menu',
    name: 'Menu',
    component: () => import('../views/Menu.vue'),
  },
  {
    path: '/sign',
    name: 'Sign',
    component: () => import('../views/Sign.vue'),
  },
  {
    path: '/join',
    name: 'Join',
    component: () => import('../views/Join.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.authRequired)) {
    if (!store.state.isAuthenticated) {
      next({
        path: '/sign',
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
