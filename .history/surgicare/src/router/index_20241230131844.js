import { createRouter, createWebHistory } from 'vue-router';
import DashboardPage from '@/components/DashboardPage.vue';

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: DashboardPage,
    meta: {
      title: 'Dashboard - SurgiCare',
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'SurgiCare';
  next();
});

export default router;