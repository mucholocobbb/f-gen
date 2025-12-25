import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import MainPage from '@/pages/MainPage.vue'
import LoginForm from '@/pages/LoginForm.vue'
import ProfileForm from '@/pages/ProfileForm.vue'
import FeedbackForm from '@/pages/FeedbackForm.vue'
import SettingsForm from '@/pages/SettingsForm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/logindemo',
      component: App,
      children: [],
    },
    {
      path: '/main',
      name: 'main',
      component: MainPage,
      children: [
        {
          path: '/logindemo',
          name: 'logindemo',
          component: LoginForm,
          meta: {
            title: 'Страница входа',
            description: 'Страница входа',
          },
        },
        {
          path: '/profiledemo',
          name: 'profiledemo',
          component: ProfileForm,
          meta: {
            title: 'Профиль пользователя',
            description: 'Страница профиля',
          },
        },
        {
          path: '/feedbackdemo',
          name: 'feedbackdemo',
          component: FeedbackForm,
          meta: {
            title: 'Обратная связь',
            description: 'Страница обратной связи',
          },
        },
        {
          path: '/settingsdemo',
          name: 'settingsdemo',
          component: SettingsForm,
          meta: {
            title: 'Настройки пользователя',
            description: 'Страница настроек',
          },
        },
      ],
    },
  ],
})

export default router
