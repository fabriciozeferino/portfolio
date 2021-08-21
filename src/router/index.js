import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', redirect: '/home' },

  {
    path: '/home',
    name: 'Home',
    component: () =>
      import(/* webpackChunkName: "home-page" */ '@/pages/HomePage.vue')
  },
  {
    path: '/resume',
    name: 'Resume',
    component: () =>
      import(/* webpackChunkName: "resume-page" */ '@/pages/ResumePage.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: "about-page" */ '@/pages/AboutPage.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
