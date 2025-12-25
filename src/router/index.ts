import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import MainPage from '@/pages/MainPage.vue'
import FirstDemoForm from '@/pages/FirstDemoForm.vue'
import SecondDemoForm from '@/pages/SecondDemoForm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/main',
      component: App,
      children: [],
    },
    {
      path: '/main',
      name: 'main',
      component: MainPage,
      children: [
        {
          path: '/firstdemo',
          name: 'firstdemo',
          component: FirstDemoForm,
        },
        {
          path: '/seconddemo',
          name: 'seconddemo',
          component: SecondDemoForm,
        },
      ],
    },
  ],
})

export default router
