import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../layouts/MainLayout.vue'),
      meta: { protected: true, transition: 'slideX' },
      children: [
        {
          path: 'home',
          alias: '',
          component: () => import('../views/HomeView.vue')
        }
      ]
    }
  ]
})

export default router
