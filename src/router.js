import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home-App',
    component: () => import('./views/Home.vue'),
  },
  {
    path: '/results',
    name: 'FlightResults',
    component: () => import('./views/FlightResults.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
