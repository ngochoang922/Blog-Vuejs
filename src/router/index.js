import { createRouter, createWebHistory } from 'vue-router'
import LoginVue from '@/views/LoginView.vue'
import HomeView from '@/views/HomeView.vue'
import RegisterView from '@/views/RegisterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/login', component: LoginVue },
    { path: '/register', component: RegisterView },
    { path: '/', name: 'Home', component: HomeView},
    { path: '/profile', name: 'Profile', component: () => import('@/views/ProfileView.vue') }
  ],
})

export default router
